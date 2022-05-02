import { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthUserProvider } from '../providers/firebase/auth-user-provider';
import '../styles/tailwind.css';


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
      </main>
    </>
  );
}

export default CustomApp;
