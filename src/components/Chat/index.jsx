import { Container, Header, Messages, InputContainer, Input, UserStatus } from './styles.js'
import { IoMdSend } from "react-icons/io"
import { IoPersonCircle } from "react-icons/io5"
import { FaCircle } from "react-icons/fa"
import Message from './Message'

function Chat() {
  return (
  <Container>
    <Header>
    <IoPersonCircle size={60} color="#CCD6DD"/>
    <div>
      <h2>Yuri</h2>
      <UserStatus>
        <FaCircle size={10} color="#00FF00"/>
        <span>Online</span>
      </UserStatus>
    </div>
    </Header>
    <Messages>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </Messages>
    <InputContainer>
    <Input type='text' placeholder='Type a message...'/>
    <IoMdSend size={30} color="#888" cursor="pointer" />
    </InputContainer>
  </Container>
  );
}

export default Chat;