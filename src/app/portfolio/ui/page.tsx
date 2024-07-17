import s from './page.module.scss';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';
import { Loader } from '@/components/loader/loader';
import { Select } from '@/components/select/select';

const Page = () => {
  return (
    <div className={s.page}>
      <Input />
      <Button>button</Button>
      <Loader />
      <Select options={['asd', 'asdd', 'asdasd']} />
    </div>
  );
};

export default Page;
