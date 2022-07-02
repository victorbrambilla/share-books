import { useRouter } from 'next/router';
import React from 'react';

interface IReturn {
  refreshData: VoidFunction;
}

export const useRefresh = (): IReturn => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return { refreshData };
};
