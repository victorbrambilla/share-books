import React from 'react';
import { Banner } from '@/presentation/components/home/Banner';
import { Institutes } from '@/presentation/components/home/Institutes';
import { BookModel, InstituteModel } from '@/domain/models';
import { Books } from '@/presentation/components/home/Books';

interface IProps {
  books: BookModel[];
  institutes: InstituteModel[];
}

export const HomePage = ({ institutes, books }: IProps): JSX.Element => {
  return (
    <div>
      {' '}
      <div>
        <Banner />
        <Institutes institutes={institutes} />
        <Books books={books} />
      </div>
    </div>
  );
};
