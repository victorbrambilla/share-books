import { BookModel, UserModel } from '@/domain/models';
import { makeRemoteGetBooksByInstituteId } from '@/main/factories/usecases/books/makeRemoteGetBooksByInstituteId';
import { makeRemoteGetInstitutesByAdminId } from '@/main/factories/usecases/institute/makeRemoteGetInstitutesByAdminId';
import { MyBooksPage } from '@/presentation/pages/myBooks/MyBooksPage';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';

interface IProps {
  books: BookModel[];
}
const MyBooks = ({ books }: IProps) => {
  return (
    <>
      <Head>
        <title>Meus Livros</title>
      </Head>
      <MyBooksPage books={books} />
    </>
  );
};
export default MyBooks;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const user = session?.user as UserModel;
  if (user) {
    const institute = await makeRemoteGetInstitutesByAdminId().perform({
      id: user.id,
    });
    if (institute) {
      const books = await makeRemoteGetBooksByInstituteId().perform({
        id: institute.id as number,
      });
      return {
        props: {
          books,
        },
      };
    }
  }
  return {
    props: {
      books: [],
    },
  };
};
