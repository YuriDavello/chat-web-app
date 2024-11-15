import { useRef } from 'react';
import { Container, Input, Button, Overlay } from './styles.js';
import { db } from '../../../db/fireBase.js';
import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { useSelector } from 'react-redux';

function AddChat({ isOpen, onClose, onAddChat }) {
  const { currentUser } = useSelector(state => state.authenticate);
  const inputRef = useRef(null);

  const getUserToAdd = async (emailToAdd) => {
    const usersRef = collection(db, "users");

    const q = query(usersRef, where("email", "==", emailToAdd));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;

    return querySnapshot.docs[0].data();
  }

  const handleAdd = async () => {
    const inputValue = inputRef.current.value;

    if (!inputValue) return;

    try {
      const userToAdd = await getUserToAdd(inputValue);

      if (!userToAdd) {
        /**TODO: toast informando */
        return;
      }

      const chatRef = collection(db, "chats");
      const userChatsRef = collection(db, "userChats");

      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: userToAdd.id,
          updatedAt: new Date(),
        }),
      });

      await updateDoc(doc(userChatsRef, userToAdd.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: new Date(),
        }),
      });

    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }

  };

  return (
    <>
      {isOpen && (
        <>
          <Overlay />
          <Container>
            <Input type="text" placeholder="User E-mail" ref={inputRef} />
            <Button type="button" onClick={handleAdd}>Add</Button>
          </Container>
        </>
      )}
    </>
  );
}

export default AddChat;
