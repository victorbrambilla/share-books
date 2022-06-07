import type { AppProps } from 'next/app';

import { SessionProvider, useSession } from 'next-auth/react';
import React, { ReactElement } from 'react';

import Layout from '../components/shared/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Auth>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
  );
}

function Auth({ children }: { children: ReactElement }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}
