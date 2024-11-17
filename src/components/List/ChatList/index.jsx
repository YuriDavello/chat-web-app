import { useDispatch, useSelector } from 'react-redux';
import { Container, Search, List } from './styles.js'
import { MdSearch } from "react-icons/md"
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../db/fireBase.js';
import { updateMessageStatus } from '../../../Utils/updateMessagesStatus.js';
import { changeChat } from '../../../slicers/chat.js';
import { useState, useRef, useEffect } from 'react';
import ChatCard from './ChatCard';

function ChatList({ chats }) {
  const [filteredChats, setFilteredChats] = useState(chats);
  const [selectedChat, setSelectedChat] = useState(null);

  const { currentUser } = useSelector(state => state.authenticate);
  const dispatch = useDispatch();

  const searchRef = useRef(null);

  const handleSelectChat = async chat => {
    setSelectedChat(chat.chatId);

    const userChats = chats.map(c => {
      const { receiver, ...rest } = c;
      return rest;
    });

    const selectedChatIndex = userChats.findIndex(c => c.chatId === chat.chatId);

    userChats[selectedChatIndex].isSeen = true;

    const userChatsRef = doc(db, "userChats", currentUser.id);

    try {
      await updateDoc(userChatsRef, {
        chats: userChats,
      });

      await updateMessageStatus(chat.chatId, currentUser.id, chat.chatId, true);

      dispatch(changeChat({
        chatId: chat.chatId,
        displayName: chat.receiver.displayName,
        receiverId: chat.receiver.id,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = () => {
    const searchTerm = searchRef.current?.value.toUpperCase();

    if (!searchTerm) {
      setFilteredChats(chats);
      return;
    }

    const filtered = filteredChats.filter(chat =>
      chat.receiver.displayName?.toUpperCase().includes(searchTerm) ||
      chat.lastMessage?.toUpperCase().includes(searchTerm)
    );

    setFilteredChats(filtered);
  };

  useEffect(() => {
    setFilteredChats(chats);
  }, [chats]);

  return (
    <Container>
      <Search>
        <div>
          <MdSearch color="#8696A0" size={22} />
          <input ref={searchRef} onChange={handleFilter} type='text' placeholder='Search...' />
        </div>
      </Search>
      <List>
        {filteredChats?.map(chat => <ChatCard chat={chat} handleSelectChat={handleSelectChat} isSelected={selectedChat === chat.chatId} />)}
      </List>
    </Container>
  );
}

export default ChatList;