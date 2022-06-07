import { Button } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';
import { getSession, signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { Banner } from './components/Banner';
import { Institutes } from './components/Institutes';

import { GetBooks } from '@/domain/usecases';
import { RemoteGetBooks } from '@/data/usecase/books/remote-get-books';
import { makeRemoteGetBooks } from '@/main/factories/usecases/books/makeRemoteGetBooks';
import { BookModel } from '@/domain/models';
import { json } from 'stream/consumers';
import { makeRemoteRegisterBook } from '@/main/factories/usecases/books/makeRemoteRegisterBook';

interface IBooks {
  books: BookModel[];
}

const Home: NextPage = () => {
  const session = useSession();
  // useEffect(() => {
  //   console.log(books);
  // });

  if (session) {
    return (
      <div>
        <Banner />
        <Institutes />
      </div>
    );
  }

  return <div>not</div>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const prismas = new PrismaClient();
  // const a = await makeRemoteRegisterBook().register({
  //   name: 'tste',
  //   edition: 'string',
  //   year: new Date(),
  //   releaseDate: new Date(),
  //   status: 'string',
  //   stock: 4,
  //   address: 'string',
  //   instituteId: 1,
  // });
  const books = await makeRemoteGetBooks().get();
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }
  console.log(books);

  return {
    props: { books },
  };
};
