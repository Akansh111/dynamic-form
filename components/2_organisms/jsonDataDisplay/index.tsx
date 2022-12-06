import { memo } from 'react';
import { useServerData } from '../../0_atoms/store/useServerData';

function JsonDisplay() {
  const serverData = useServerData((state) => state.serverData);

  return (
    <div className='mx-auto prose'>
      <pre>{JSON.stringify(serverData, null, 2)}</pre>{' '}
    </div>
  );
}

export default memo(JsonDisplay);
