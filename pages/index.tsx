import axios from 'axios';
import { memo, useContext, useLayoutEffect } from 'react';
import ConvertNodeToTags from '../components/convertNodeToTags';
import { StoreContext } from '../components/store/useStore';
import { IJsonData } from '../components/types/dataType';

function Home() {
  const {
    store,
    setStore,
  }: {
    store: IJsonData | null;
    setStore: React.Dispatch<React.SetStateAction<IJsonData | null>>;
  } = useContext<any>(StoreContext);

  useLayoutEffect(() => {
    const a = async () => {
      const res = await axios.get('/api/json-data');
      setStore(res.data);
    };
    a();
  }, []);

  return (
    <div>
      {store && (
        <div className='flex mx-auto'>
          <div className='mx-auto prose'>
            <pre>{JSON.stringify(store, null, 2)}</pre>{' '}
          </div>

          <div className='mx-auto prose'>
            <h1>{store.taskName}</h1>
            <h3>{store.taskDescription}</h3>
            <div className=''>
              {store.nodes.map(
                (node, key) =>
                  node && (
                    <ConvertNodeToTags
                      nodeData={node}
                      nodePath={{
                        obj: store,
                        path: `nodes[${key}]`,
                      }}
                      key={key}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(Home);
