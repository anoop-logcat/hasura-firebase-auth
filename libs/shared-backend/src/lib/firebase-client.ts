import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD2Spnf9vjz5mM1IsN_qVQMFFKH1We78Xc',
  authDomain: 'hasura-authentication-aa38c.firebaseapp.com',
  projectId: 'hasura-authentication-aa38c',
  storageBucket: 'hasura-authentication-aa38c.appspot.com',
  messagingSenderId: '282318293557',
  appId: '1:282318293557:web:0277c56aad10971118bf7c',
  measurementId: 'G-W8DL1J4C0Z',
};

export const firebaseClient = initializeApp(firebaseConfig);
