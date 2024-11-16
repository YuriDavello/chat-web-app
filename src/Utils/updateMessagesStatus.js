import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../db/fireBase';

export const updateMessageStatus = async (chatId, currentUserId, currentChatId = null, markAllAsRead = false) => {
  try {
    const chatDocRef = doc(db, "chats", chatId);
    const chatDoc = await getDoc(chatDocRef);

    if (!chatDoc.exists()) return;

    const { messages } = chatDoc.data();

    const updatedMessages = messages.map(message => {
      if (message.sender !== currentUserId && message.status !== "read") {
        let status = currentChatId === chatId ? "read" : "delivered";

        status = markAllAsRead === true ? 'read' : status;

        return { ...message, status };
      }
      return message;
    });

    await updateDoc(chatDocRef, { messages: updatedMessages });
  } catch (error) {
    console.error("Failed to update message statuses:", error);
  }
};
