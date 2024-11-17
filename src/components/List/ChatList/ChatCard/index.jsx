import { useSelector } from 'react-redux';
import { Container, LastMessageInfo } from './styles.js'
import { IoPersonCircle } from "react-icons/io5"
import { useEffect, useState } from 'react'
import { rtdb } from '../../../../db/fireBase.js'
import { off, onValue, ref } from 'firebase/database'

function ChatCard({ chat, handleSelectChat, isSelected }) {
  const { currentUser } = useSelector(state => state.authenticate);

  const [status, setStatus] = useState('');

  useEffect(() => {
    const userStatusRef = ref(rtdb, `status/${chat.receiver.id}`);

    const presenceListener = onValue(userStatusRef, snapshot => {
      const status = snapshot.val();

      if (status) {
        setStatus(status.state);
      } else {
        setStatus('offline');
      }
    });

    return () => {
      off(userStatusRef);
    };
  }, [chat.receiver.receiverId]);

  return (
    <Container
      isSelected={isSelected}
      status={status}
      isSeen={chat.isSeen}
      onClick={() => handleSelectChat(chat)}
      key={chat.chatId}
    >
      <IoPersonCircle size={60} color="#CCD6DD" />
      <div>
        <h2>
          {chat.receiver.displayName}
        </h2>
        <LastMessageInfo>
          {chat.lastMessageInfo?.sender === currentUser.id &&
            <span>You:</span>}
          <p>
            {chat.lastMessage}
          </p>
        </LastMessageInfo>
        <span data-testid="status-indicator">{status}</span>
      </div>
    </Container>
  );
}

export default ChatCard;