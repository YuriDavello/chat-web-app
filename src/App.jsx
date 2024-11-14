import { Container } from './styles.js'
import List from './components/List'
import Chat from './components/Chat'
import Login from './components/Login'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './db/fireBase.js';

function App() {

  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
      console.log('user', user);
    });

    return () => {
      unSub();
    }
  }, []);

  return (
    <Container isLoggedIn={!!user}>
      {user ? 
      <>
      <List isOneToOne/>
      <Chat />
      <List />
      </>
      : 
      <Login />
      }
      
    </Container>
  )
}

export default App
