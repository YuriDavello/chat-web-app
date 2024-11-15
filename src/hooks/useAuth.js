import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../db/fireBase';
import { login, logout } from '../slicers/auth';

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
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

    return () => unsub();
  }, [dispatch]);
};

export default useAuth;
