import { memo, useEffect, useLayoutEffect, useState } from 'react';
import CreateForm from '../components/2_organisms/createForm';
import JsonDisplay from '../components/2_organisms/jsonDataDisplay';

function Home() {
  const [launchTimeStamp, setLaunchTimeStamp] = useState<any>('');
  const [renderedTimeStamp, setRenderedTimeStamp] = useState<any>('');

  useLayoutEffect(() => {
    setLaunchTimeStamp(`${new Date().getTime() * 1000}`);
    console.time();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderedTimeStamp(`${new Date().getTime() * 1000}`);
      console.timeLog();
    }
  }, []);

  useEffect(() => {
    console.log('renderedTimeStamp', renderedTimeStamp);
    console.log('launchTimeStamp', launchTimeStamp);
  }, [launchTimeStamp, renderedTimeStamp]);

  return (
    <>
      <div className='mx-auto prose text-center'>
        <h3>
          <span className='font-medium'>Time taken to render: </span> {renderedTimeStamp - launchTimeStamp}ms
        </h3>
      </div>
      <div className='sm:py-8 flex flex-wrap-reverse py-4 mx-auto'>
        <JsonDisplay />

        <CreateForm />
      </div>
    </>
  );
}

export default memo(Home);
