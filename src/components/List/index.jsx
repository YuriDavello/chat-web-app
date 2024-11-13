import { Container, Toolbar, SearchBar, ChatList } from './styles.js'
import { BiSolidMessageAdd } from "react-icons/bi"
import ChatCard from './ChatCard'

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

function List({ isOneToOne = false }) {
  return (
  <Container>
    <Toolbar>
    <SearchBar placeholder='Search...' type='text'/>
    {isOneToOne && <BiSolidMessageAdd size={30} color="#2C3531" cursor="pointer"/>}
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