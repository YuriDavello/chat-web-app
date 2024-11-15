import { Container, ChatInfo } from './styles.js'
import { IoPersonCircle } from "react-icons/io5"

function ChatCard({ chat }) {
  console.log('chat', chat);
  return (
  <Container>
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