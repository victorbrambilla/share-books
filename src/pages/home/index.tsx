import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { makeRemoteGetBooks } from '@/main/factories/usecases/books/makeRemoteGetBooks';
import { HomePage } from '@/presentation/pages/home/Home';
import { makeRemoteGetInstitutes } from '@/main/factories/usecases/institute/makeRemoteGetInstitutes';
import { BookModel, InstituteModel } from '@/domain/models';

interface IProps {
  books: BookModel[];
  institutes: InstituteModel[];
}

const Home = ({ books, institutes }: IProps) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <HomePage books={books} institutes={institutes} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const books = await makeRemoteGetBooks().perform();
  const institutes = await makeRemoteGetInstitutes().perform();
  console.log(institutes);
  return {
    props: {
      books,
      institutes,
    },
  };
};
