import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

import Loading from '../presentation/components/shared/Loading';

const Home: NextPage = () => {
  return <Loading />;
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: 'login',
      permanent: false,
    },
  };
};
