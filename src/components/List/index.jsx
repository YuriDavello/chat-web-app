import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../slicers/auth.js';
import { Container, Toolbar, SearchBar, ChatList } from './styles.js';
import { BiSolidMessageAdd, BiLogOut } from "react-icons/bi";
import ChatCard from './ChatCard';
import AddChat from './AddChat';
import useChats from '../../hooks/useChats.js';
import { updateMessageStatus } from '../../Utils/updateMessagesStatus.js';
import { auth, db } from '../../db/fireBase.js';
import { doc, onSnapshot } from 'firebase/firestore';

function List({ type }) {
  const [isShowAddChat, setIsShowAddChat] = useState(false);
  const { currentUser } = useSelector(state => state.authenticate);
  const { chatId } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const chats = useChats(currentUser.id);

  const handleLogout = () => {
    dispatch(logout());
    auth.signOut();
  };

  const openAddChat = () => setIsShowAddChat(true);
  const closeAddChat = () => setIsShowAddChat(false);

  useEffect(() => {
    if (!currentUser.id) return;

    const unsub = onSnapshot(doc(db, "userChats", currentUser.id), async (snapshot) => {
      const data = snapshot.data();
      if (!data?.chats) return;

      const isNotSeenChats = data.chats.filter(c => c.isSeen === false);

      const promises = isNotSeenChats.map(async chat => {
        return updateMessageStatus(chat.chatId, currentUser.id, chatId);
      });

      await Promise.all(promises);
    });

    return () => unsub();
  }, [chatId, currentUser.id]);

  return (
    <Container type={type}>
      <Toolbar>
        {type === 'oneToOne' && (
          <BiLogOut
            size={30}
            color="#2C3531"
            cursor="pointer"
            onClick={handleLogout}
            aria-label="Logout"
          />
        )}
        <SearchBar placeholder='Search...' type='text' />
        {type === 'oneToOne' &&
          <BiSolidMessageAdd
            size={30}
            color="#2C3531"
            cursor="pointer"
            onClick={openAddChat}
            aria-label="Add new chat"
          />
        }
      </Toolbar>
      <ChatList>
        {chats.map(chat => (
          <ChatCard key={`${chat.receiverId}-${chat.updatedAt}`} chat={chat} chats={chats} />
        ))}
      </ChatList>
      {type === 'oneToOne' && <AddChat isOpen={isShowAddChat} onClose={closeAddChat} />}
    </Container>
  );
}

export default List;
