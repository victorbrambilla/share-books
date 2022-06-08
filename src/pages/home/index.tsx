import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { Banner } from '../../presentation/components/home/Banner';
import { Institutes } from '../../presentation/components/home/Institutes';

import { BookModel } from '@/domain/models';
import Head from 'next/head';

interface IBooks {
  books: BookModel[];
}

const Home: NextPage = () => {
  // useEffect(() => {
  //   console.log(books);
  // });

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Banner />
      <Institutes />
    </div>
  );
};

export default Home;
