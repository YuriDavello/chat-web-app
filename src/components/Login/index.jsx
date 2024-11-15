import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import { db, auth } from '../../db/fireBase.js'
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import 'firebaseui/dist/firebaseui.css'
import { useEffect } from 'react';

function Login() {

  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: async function(authResult) {
          const user = authResult.user;
          
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          
          if(docSnap.exists()) return true;

          await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            email: user.email,
            displayName: user.displayName || '',
            createdAt: serverTimestamp(),
          });

          await setDoc(doc(db, "userChats", user.uid), {
            chats: [],
          });
        },
      },
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };
    
    // Ensure the UI starts when the component mounts
    ui.start('#firebaseui-auth-container', uiConfig);

    return () => {
      // Cleanup: stop the UI instance when component unmounts or re-renders
      ui.reset();
    };
  }, []);

  console.log('login');

  return  (
    <div id="firebaseui-auth-container"></div>
  );
}

export default Login;
