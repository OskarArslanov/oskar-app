'use client';

import { useRouter } from 'next/navigation';

export const useHeader = () => {
  const router = useRouter();

  const handleChangeLocale = (e: string) => {
    document.cookie = `locale=${e}`;
    router.refresh();
  };

  return { handleChangeLocale };
};
