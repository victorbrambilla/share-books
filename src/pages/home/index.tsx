import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { makeRemoteGetBooks } from '@/main/factories/usecases/books/makeRemoteGetBooks';
import { HomePage } from '@/presentation/pages/home/Home';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
// export const getServerSideProps: GetServerSideProps = async () => {
//   const books = await makeRemoteGetBooks().perform();
//   console.log(books);
//   return {
//     props: {
//       books,
//     },
//   };
// };
