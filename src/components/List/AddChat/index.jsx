import { useRef } from 'react';
import Modal from 'react-modal';
import { db } from '../../../db/fireBase.js';
import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { modaStyle, Input, Buttons, Button } from './styles.js';
import { toast } from 'react-toastify';

function AddChat({ isOpen, onClose }) {
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
    const inputValue = inputRef.current?.value;

    if (!inputValue) {
      toast.info("Provide an email.", {
        position: "top-right"
      });
      return;
    };

    if (inputValue.toUpperCase() === currentUser.email.toUpperCase()) {
      toast.error("Can not add yourself.", {
        position: "top-right"
      });
      return;
    }

    try {
      const userToAdd = await getUserToAdd(inputValue);

      if (!userToAdd) {
        toast.error("User not found.", {
          position: "top-right"
        });
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

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modaStyle}
    >
      <h2>Add Chat</h2>
      <Input
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAdd();
          }
        }}
        ref={inputRef}
        type='text'
        placeholder='User email...'
      />
      <Buttons>
        <Button type='button' buttonType="add" onClick={handleAdd}>Add</Button>
        <Button type='button' buttonType="close" onClick={onClose}>Close</Button>
      </Buttons>
    </Modal>
  );
}

export default AddChat;
