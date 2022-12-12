import { isEqual } from 'lodash-es';
import dynamic from 'next/dynamic';
import { memo, Suspense, useEffect, useLayoutEffect, useState } from 'react';
import Loader from '../components/0_atoms/loader';
import { useSettings } from '../components/0_atoms/store/useSetting';
import { camelCaseAttributes, normalAttributes } from './api/json-data';

const JsonDisplay = dynamic(() => import('../components/2_organisms/jsonDataDisplay'), { ssr: false });
const CreateForm = dynamic(() => import('../components/2_organisms/createForm'), { ssr: false });

function Home() {
  const [launchTimeStamp, setLaunchTimeStamp] = useState<any>('');
  const [renderedTimeStamp, setRenderedTimeStamp] = useState<any>('');

  useLayoutEffect(() => {
    setLaunchTimeStamp(`${new Date().getTime()}`);
    console.time();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className='max-w-screen flex flex-col px-4'>
      <PerfOfNodes />

      <div className='sm:py-8 flex !flex-row flex-wrap-reverse py-4 mx-auto min-w-full'>
        <Suspense fallback={<Loader />}>
          <JsonDisplay />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <CreateForm setRenderedTimeStamp={setRenderedTimeStamp} />
        </Suspense>
      </div>

      <div className='mx-auto mt-4'>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          Goto Top
        </button>
      </div>
    </div>
  );

  function PerfOfNodes() {
    const settings = useSettings((s) => s.settings);
    const setSettings = useSettings((s) => s.setSettings);
    const [data, setData] = useState<any>({
      count: settings.count,
      nodeType: settings.nodeType,
    });

    const changeSettings = () => {
      setSettings(data);
      window.location.reload();
    };

    // Uncomment below code to set default settings, this is useful when you mistakenly set the maxed out limit of nodes
    // useEffect(() => {
    //   setSettings({
    //     count: 1,
    //   });
    // }, []);

    const options = [
      { value: 'c', label: 'CamelCase Attributes' },
      { value: 'n', label: 'Normal Attributes' },
    ];

    return (
      <div className=' mx-auto prose text-center'>
        <h3>
          <span className='font-normal'>
            Time taken to render <b>{settings.count} Nodes</b> :{' '}
          </span>{' '}
          {renderedTimeStamp - launchTimeStamp > 0
            ? `${milliSecondsToString(parseInt(`${renderedTimeStamp - launchTimeStamp}`))}`
            : '0ms'}
        </h3>

        <h5>Click below button to repeat a node in following times</h5>

        <div className=' lg:flex-row flex flex-col flex-wrap gap-2 mx-auto'>
          <input type='number' value={data.count} onChange={(e) => setData({ ...data, count: e.target.value })} />
          <select
            onChange={(e) => {
              setData({
                ...data,
                nodeType: e.target.value === 'n' ? normalAttributes : camelCaseAttributes,
              });
            }}
            value={isEqual(data.nodeType, camelCaseAttributes) ? 'c' : 'n'}
          >
            <option value='c'>CamelCase Attributes</option>
            <option value='n'>Normal Attributes</option>
          </select>

          <div className=' m-auto'>
            <button
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              onClick={changeSettings}
            >
              Get Stats
            </button>
          </div>
        </div>

        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4'
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }}
        >
          Goto Bottom
        </button>
      </div>
    );
  }
}

function milliSecondsToString(milliSeconds: number) {
  var numHours = Math.floor((milliSeconds % 86400000) / 3600000);
  var numMinutes = Math.floor(((milliSeconds % 86400000) % 3600000) / 60000);
  var numSeconds = Math.floor((((milliSeconds % 86400000) % 3600000) % 60000) / 1000);
  var numMilliSeconds = (((milliSeconds % 86400000) % 3600000) % 60000) % 1000;
  return numHours + ' hrs ' + numMinutes + ' min ' + numSeconds + ' s ' + numMilliSeconds + ' ms';
}

export default memo(Home);
