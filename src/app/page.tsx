'use client';

import { Input } from '@/components/input/input';
import s from './page.module.scss';
import { Button } from '@/components/button/button';
import { Loader } from '@/components/loader/loader';
import { Select } from '@/components/select/select';

const Home = () => {

  return (
    <main className={s.page}>
      <Input />
      <Button>button</Button>
      <Loader />
      <Select options={['asd', 'asdd', 'asdasd']} />
    </main>
  );
};

export default Home;
