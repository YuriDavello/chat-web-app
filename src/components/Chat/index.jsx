import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { Container, Header, Messages, InputContainer, Input, UserStatus } from './styles.js'
import { IoMdSend } from "react-icons/io"
import { IoPersonCircle } from "react-icons/io5"
import { FaCircle } from "react-icons/fa"
import Message from './Message'
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../db/fireBase.js'

function Chat() {
  const { receiver, chatId } = useSelector(state => state.chat);
  const { currentUser } = useSelector(state => state.authenticate);

  const [messages, setMessages] = useState([]);
  const endRef = useRef(null);
  const inputMessageRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth'});
  }, []);

  useEffect(() => {
    if(chatId) {
      const unsub = onSnapshot(doc(db, "chats", chatId), async res => {
        const { messages } = res.data();

        console.log('messages', messages);
        
        setMessages(messages);
      });
  
      return () => {
        unsub();
      };
    }
  }, [chatId]);

  const handleSendMessage = async () => {
    const messageToSend = inputMessageRef.current.value;

    if(!messageToSend || !chatId) return;
    inputMessageRef.current.value = "";

    try {
      
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          sender: currentUser.id,
          content: messageToSend,
          createdAt: Date.now(),
        }),
      });

      const usersIds = [currentUser.id, receiver.id];

      const promises = usersIds.map(async userId => {
        const userChatsRef = doc(db, "userChats", userId);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if(userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(chat => chat.chatId === chatId);

          userChatsData.chats[chatIndex].lastMessage = messageToSend;
          userChatsData.chats[chatIndex].isSeen = userId === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });

      await Promise.all(promises);

    } catch (error) {
      console.log(error);
    }
  };

  return (
  <Container>
    <Header>
    <IoPersonCircle size={60} color="#CCD6DD"/>
    <div>
      <h2>{receiver.displayName}</h2>
      <UserStatus>
        <FaCircle size={10} color="#00FF00"/>
        <span>Online</span>
      </UserStatus>
    </div>
    </Header>
    <Messages>
      {messages.map(message => {
        return (
          <Message key={message?.createdAt} message={message}/>
        );
      })}
      <div ref={endRef}/>
    </Messages>
    <InputContainer>
    <Input ref={inputMessageRef} type='text' placeholder='Type a message...'/>
    <IoMdSend size={30} color="#888" cursor="pointer" onClick={handleSendMessage}/>
    </InputContainer>
  </Container>
  );
}

export default Chat;