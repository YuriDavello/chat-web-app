import { useDispatch, useSelector } from 'react-redux'
import { changeChat } from '../../../slicers/chat.js'
import { Container, ChatInfo } from './styles.js'
import { IoPersonCircle } from "react-icons/io5"
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../db/fireBase.js'
import { updateMessageStatus } from '../../../Utils/updateMessagesStatus.js'


function ChatCard({ chat, chats }) {
  const { currentUser } = useSelector(state => state.authenticate);
  const dispatch = useDispatch();


  const handleSelectChat = async () => {
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

  return (
    <Container onClick={handleSelectChat} isSeen={chat.isSeen}>
      <IoPersonCircle size={60} color="#CCD6DD" />
      <ChatInfo>
        <h2>
          {chat.receiver.displayName}
        </h2>
        <p>
          {chat.lastMessage}
        </p>
      </ChatInfo>
    </Container>
  )
}

export default ChatCard;