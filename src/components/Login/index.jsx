import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import { db, auth } from '../../db/fireBase.js';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import 'firebaseui/dist/firebaseui.css';
import { useEffect, useState } from 'react';

function Login() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: async function (authResult) {
          setLoading(true);
          const user = authResult.user;

          try {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
              await setDoc(docRef, {
                id: user.uid,
                email: user.email,
                displayName: user.displayName || '',
                createdAt: serverTimestamp(),
              });

              await setDoc(doc(db, "userChats", user.uid), { chats: [] });
            }

            setLoading(false);
            return true;
          } catch (error) {
            console.error("Error creating user document: ", error);
            alert("Something went wrong. Please try again.");
            setLoading(false);
            return false;
          }
        },
      },
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    };

    ui.start('#firebaseui-auth-container', uiConfig);

    return () => {
      ui.reset();
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div id="firebaseui-auth-container"></div>
  );
}

export default Login;