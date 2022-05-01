import { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </>
  );
}

export default CustomApp;
