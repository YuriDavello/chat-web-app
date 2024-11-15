import { useSelector } from 'react-redux';
import { Container } from './styles.js';
import useAuth from './hooks/useAuth';
import List from './components/List';
import Chat from './components/Chat';
import Login from './components/Login';
import Loading from './easy-components/Loading';

function App() {
  const { currentUser, isLoading } = useSelector((state) => state.authenticate);

  useAuth();

  const isLoggedIn = Boolean(currentUser?.id);

  if (isLoading) return <Loading />;

  return (
    <Container isLoggedIn={isLoggedIn}>
      {isLoggedIn ? (
        <>
          <List type="oneToOne" />
          <Chat />
          <List type="group" />
        </>
      ) : (
        <Login />
      )}
    </Container>
  );
}

export default App;
