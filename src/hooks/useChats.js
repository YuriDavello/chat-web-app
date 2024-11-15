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
            return { ...chat, receiver: receiverSnap.data() };
          }));
          setChats(chatsWithReceiverData.sort((a, b) => b.updatedAt - a.updatedAt));
        }
      });

      return () => unsub();
    }
  }, [userId]);

  return chats;
}

export default useChats;
