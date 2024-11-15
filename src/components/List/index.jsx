import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { logout } from '../../slicers/auth.js'
import { Container, Toolbar, SearchBar, ChatList } from './styles.js'
import { BiSolidMessageAdd, BiLogOut } from "react-icons/bi"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import ChatCard from './ChatCard'
import { auth, db } from '../../db/fireBase.js'
import AddChat from './AddChat'

function List({ type }) {
  const [chats, setChats] = useState([]);
  const [isShowAddChat, setIsShowAddChat] = useState(false);

  const { currentUser } = useSelector(state => state.authenticate);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

    auth.signOut();
  };

  const openAddChat = () => {
    setIsShowAddChat(true);
  };

  const closeAddChat = () => {
    setIsShowAddChat(false);
  };

  useEffect(() => {
    if(currentUser.id) {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.id), async res => {
        const { chats } = res.data();

        const promises = chats.map(async chat => {
          const receiverRef = doc(db, "users", chat.receiverId);
          const receiverSnap = await getDoc(receiverRef);

          const receiver = receiverSnap.data();

          return {
            ...chat,
            receiver,
          }
        });

        const chatsWithReceiverData = await Promise.all(promises);

        const sortedChats = chatsWithReceiverData.sort((a, b) => b.updatedAt - a.updatedAt);

        setChats(sortedChats);
      });

      return () => {
        unsub();
      }
    }
  }, [currentUser.id]);

  return (
  <Container>
    <Toolbar>
    {type === 'oneToOne' && <BiLogOut size={30} color="#2C3531" cursor="pointer" onClick={handleLogout}/>}
    <SearchBar placeholder='Search...' type='text'/>
    {type === 'oneToOne' && <BiSolidMessageAdd size={30} color="#2C3531" cursor="pointer" onClick={openAddChat}/>}
    </Toolbar>
    <ChatList>
      {chats.map(chat => {
        return <ChatCard key={chat.id} chat={chat}/>
      })}
    </ChatList>
    {type === 'oneToOne' && <AddChat isOpen={isShowAddChat} onClose={closeAddChat}/>}
  </Container>
  );
}

export default List;