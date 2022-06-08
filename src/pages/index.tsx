import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

import Loading from '../presentation/components/shared/Loading';

const Home: NextPage = () => {
  return <Loading />;
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = getSession({ req: ctx.req });
  if (await session) {
    return {
      redirect: {
        destination: 'home',
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: 'login',
        permanent: false,
      },
    };
  }
};
