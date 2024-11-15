import { useDispatch } from 'react-redux'
import { changeChat } from '../../../slicers/chat.js'
import { Container, ChatInfo } from './styles.js'
import { IoPersonCircle } from "react-icons/io5"


function ChatCard({ chat }) {
  console.log('chat', chat);
  const dispatch = useDispatch();
  

  const handleSelectChat = () => {
    dispatch(changeChat({
      chatId: chat.chatId,
      displayName: chat.receiver.displayName,
      receiverId: chat.receiver.id,
    }));
  };
  
  return (
  <Container onClick={handleSelectChat}>
  <IoPersonCircle size={60} color="#CCD6DD"/>
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