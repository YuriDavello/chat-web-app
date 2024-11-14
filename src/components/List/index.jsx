import { useDispatch } from 'react-redux'
import { logout } from '../../slicers/auth.js'
import { Container, Toolbar, SearchBar, ChatList } from './styles.js'
import { BiSolidMessageAdd, BiLogOut } from "react-icons/bi"
import ChatCard from './ChatCard'
import { auth } from '../../db/fireBase.js'

const users = [
  {
    id: 1,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 2,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 3,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 4,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 4,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 4,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 4,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 4,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 4,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 4,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 4,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  },
  {
    id: 4,
    name: 'Yuri',
    lastMessage: 'e aí, tudo bem?'
  }
];

function List({ type }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

    auth.signOut();
  };

  return (
  <Container>
    <Toolbar>
    {type === 'oneToOne' && <BiLogOut size={30} color="#2C3531" cursor="pointer" onClick={handleLogout}/>}
    <SearchBar placeholder='Search...' type='text'/>
    {type === 'oneToOne' && <BiSolidMessageAdd size={30} color="#2C3531" cursor="pointer"/>}
    </Toolbar>
    <ChatList>
      {users.map(user => {
        return <ChatCard key={user.id} user={user}/>
      })}
    </ChatList>
  </Container>
  );
}

export default List;