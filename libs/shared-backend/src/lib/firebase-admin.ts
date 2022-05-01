import * as admin from 'firebase-admin';

export const FirebaseAdmin = () => {
  const account = process.env.FIREBASE_SERVICE_SECRET as string;
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(Buffer.from(account, 'base64').toString())
      ),
    });
  }
  return admin;
};
