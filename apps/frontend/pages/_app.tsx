import { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthProvider } from '../providers/AuthProvider';
import '../styles/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </main>
    </>
  );
}

export default CustomApp;
