import { BookModel } from '@/domain/models';
import { makeRemoteGetBooks } from '@/main/factories/usecases/books/makeRemoteGetBooks';
import { BooksPage } from '@/presentation/pages/books/BooksPage';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

interface IProps {
  books: BookModel[];
}

const Books = ({ books }: IProps) => {
  return (
    <>
      <Head>
        <title>Livros</title>
      </Head>
      <BooksPage books={books} />
    </>
  );
};
export default Books;
export const getServerSideProps: GetServerSideProps = async () => {
  const books = await makeRemoteGetBooks().perform();

  return {
    props: {
      books,
    },
  };
};
