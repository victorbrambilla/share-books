import React from 'react';
import { Banner } from '@/presentation/components/home/Banner';
import { Institutes } from '@/presentation/components/home/Institutes';

export const HomePage = (): JSX.Element => {
  return (
    <div>
      {' '}
      <div>
        <Banner />
        <Institutes />
      </div>
    </div>
  );
};
