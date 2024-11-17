import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Container, Header, Messages, Footer, TextArea } from './styles.js';
import { IoMdSend } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Message from './Message';
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../db/fireBase.js';

function Chat() {
  const { receiver, chatId } = useSelector(state => state.chat);
  const { currentUser } = useSelector(state => state.authenticate);

  const [messages, setMessages] = useState([]);
  const endRef = useRef(null);
  const inputMessageRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    if (chatId) {
      const unsub = onSnapshot(doc(db, "chats", chatId), async res => {
        const { messages } = res.data();
        setMessages(messages);
      });

      return () => {
        unsub();
      };
    }
  }, [chatId]);

  useEffect(() => {
    inputMessageRef.current.value = "";
  }, [chatId]);

  const handleSendMessage = async () => {
    const messageToSend = inputMessageRef.current.value;

    if (!messageToSend || !chatId) return;
    inputMessageRef.current.value = "";

    try {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          sender: currentUser.id,
          content: messageToSend,
          createdAt: Date.now(),
          status: 'sent',
        }),
      });

      const usersIds = [currentUser.id, receiver.id];

      const promises = usersIds.map(async userId => {
        const userChatsRef = doc(db, "userChats", userId);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
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
        <IoPersonCircle size={40} color="#CCD6DD" />
        <h2>{receiver.displayName}</h2>
      </Header>
      <Messages>
        {messages.map(message => {
          return (
            <Message key={message?.createdAt} message={message} />
          );
        })}
        <div ref={endRef} />
      </Messages>
      <Footer>
        <TextArea
          ref={inputMessageRef}
          as="textarea"
          placeholder='Type a message...'
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <IoMdSend size={30} color="#888" cursor="pointer" onClick={handleSendMessage} />
      </Footer>
    </Container>
  );
}

export default Chat;
