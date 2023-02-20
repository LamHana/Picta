import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { toastSuccess, toastError } from './components/ToastNotification';

import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBUZv99mbA6BPfSS6mxiASb0CCxW5T6xyk',
  authDomain: 'picta-49f52.firebaseapp.com',
  projectId: 'picta-49f52',
  storageBucket: 'picta-49f52.appspot.com',
  messagingSenderId: '990736579057',
  appId: '1:990736579057:web:afd07a871f8ad178d86c50',
  measurementId: 'G-N4E22K0EXH',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    toastError(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toastSuccess('Đăng nhập thành công');
  } catch (err) {
    console.error(err.message);
    if (err.message === 'Firebase: Error (auth/wrong-password).') toastError('Sai mật khẩu,Vui lòng thử lại !!');
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    toastSuccess('Đăng ký thành công');
  } catch (err) {
    console.error(err);
    toastError(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toastSuccess('Email gửi đi thành công');
  } catch (err) {
    console.error(err);
    toastError(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
