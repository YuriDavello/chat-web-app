/*import { doc, setDoc, serverTimestamp } from 'firebase/firestore';*/
import { ref, onValue, onDisconnect, set, serverTimestamp as rtdbServerTimestamp } from 'firebase/database';
import { /*db,*/ auth, rtdb } from '../db/fireBase';
import { useEffect } from 'react';

const usePresence = () => {
  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    const userStatusDatabaseRef = ref(rtdb, `status/${uid}`);

    const isOfflineForDatabase = {
      state: 'offline',
      last_changed: rtdbServerTimestamp(),
    };

    const isOnlineForDatabase = {
      state: 'online',
      last_changed: rtdbServerTimestamp(),
    };

    const connectedRef = ref(rtdb, '.info/connected');

    const unsubscribe = onValue(connectedRef, async snapshot => {
      if (snapshot.val() === false) {
        return;
      }

      onDisconnect(userStatusDatabaseRef).set(isOfflineForDatabase).then(() => {
        set(userStatusDatabaseRef, isOnlineForDatabase);
      });
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);
};

export default usePresence;




