import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { Banner } from '../../presentation/components/home/Banner';
import { Institutes } from '../../presentation/components/home/Institutes';

import { BookModel } from '@/domain/models';

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
