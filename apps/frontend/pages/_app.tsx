import { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthProvider } from '../providers/AuthProvider';
import { GraphQLProvider } from '../providers/GraphqlProvider';
import '../styles/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <AuthProvider>
          <GraphQLProvider url={process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT}>
            <Component {...pageProps} />
          </GraphQLProvider>
        </AuthProvider>
      </main>
    </>
  );
}

export default CustomApp;
