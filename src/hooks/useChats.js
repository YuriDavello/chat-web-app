import { useState, useEffect } from 'react';
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '../db/fireBase';

function useChats(userId) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (userId) {
      const unsub = onSnapshot(doc(db, "userChats", userId), async (res) => {
        if (res.data()) {
          const { chats } = res.data();

          const chatsWithReceiverData = await Promise.all(chats.map(async (chat) => {
            const receiverRef = doc(db, "users", chat.receiverId);
            const receiverSnap = await getDoc(receiverRef);

            const chatRef = doc(db, "chats", chat.chatId);
            const chatSnap = await getDoc(chatRef);

            let lastMessage = null;

            if (chatSnap.exists()) {
              const chatData = chatSnap.data();
              if (chatData.messages && chatData.messages.length > 0) {
                lastMessage = chatData.messages[chatData.messages.length - 1];
              }
            }

            return {
              ...chat,
              receiver: receiverSnap.data(),
              lastMessageInfo: lastMessage ? {
                sender: lastMessage.sender,
                status: lastMessage.status,
              } : null,
            };
          }));

          setChats(chatsWithReceiverData.sort((a, b) => b.updatedAt - a.updatedAt));
        }
      });

      return () => {
        unsub()
      };
    }
  }, [userId]);

  return chats;
}

export default useChats;
