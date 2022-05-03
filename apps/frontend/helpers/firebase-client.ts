import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGE_SENDER_ID,
  FIREBASE_MESUREMENT_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from '../config';

export function FirebaseClient(): FirebaseApp {
  return getApps().length == 0
    ? initializeApp({
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket: FIREBASE_STORAGE_BUCKET,
        messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
        appId: FIREBASE_APP_ID,
        measurementId: FIREBASE_MESUREMENT_ID,
      })
    : getApp();
}
