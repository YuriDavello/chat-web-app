import { Container, ChatInfo } from './styles.js'
import { IoPersonCircle } from "react-icons/io5"

function ChatCard({ user }) {
  return (
  <Container>
  <IoPersonCircle size={60} color="#CCD6DD"/>
  <ChatInfo>
    <h2>
      {user.name}
    </h2>
    <p>
      {user.lastMessage}
    </p>
  </ChatInfo>
  </Container>
  )
}

export default ChatCard;