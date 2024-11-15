import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './db/fireBase.js'
import { login, logout } from './slicers/auth.js'
import { Container } from './styles.js'
import List from './components/List'
import Chat from './components/Chat'
import Login from './components/Login'

function App() {
  const { currentUser, isLoading } = useSelector(state => state.authenticate);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, firebaseUser => {
      if (firebaseUser) {
        dispatch(login({
          id: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
        }));
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsub();
    }
  }, [dispatch]);

  const isLoggedIn = !!currentUser.id;

  if(isLoading) return <div><h2>Loading...</h2></div>;

  return (
    <Container isLoggedIn={isLoggedIn}>
      {isLoggedIn ? 
      <>
      <List type="oneToOne"/>
      <Chat />
      <List type="group"/>
      </>
      : 
      <Login />
      }
      
    </Container>
  )
}

export default App;
