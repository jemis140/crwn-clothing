import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    
        apiKey: "AIzaSyDv_v5jbpwfIpCmO9YpE5KJKYNhafg15zQ",
        authDomain: "crwn-db-7eb4e.firebaseapp.com",
        databaseURL: "https://crwn-db-7eb4e.firebaseio.com",
        projectId: "crwn-db-7eb4e",
        storageBucket: "crwn-db-7eb4e.appspot.com",
        messagingSenderId: "916960524319",
        appId: "1:916960524319:web:a8e380505cfb0ed5427d2a",
        measurementId: "G-1Q01ZS3L1S"
      
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;  