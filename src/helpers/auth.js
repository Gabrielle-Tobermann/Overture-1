import firebase from 'firebase/app';
import 'firebase/auth';

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  // provider.setCustomParameters({
  //   prompt: 'select_account'
  // });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
