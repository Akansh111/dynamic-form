import { memo } from 'react';
import CreateForm from '../components/2_organisms/createForm';
import JsonDisplay from '../components/2_organisms/jsonDataDisplay';

function Home() {
  return (
    <div className='flex flex-wrap-reverse mx-auto'>
      <JsonDisplay />

      <CreateForm />
    </div>
  );
}

export default memo(Home);
