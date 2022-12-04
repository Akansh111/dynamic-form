import { createContext, Dispatch, SetStateAction, useState } from 'react';

function useStore() {
  const [state, setState] = useState(null);

  return { store: state, setStore: setState };
}

export default useStore;

export const StoreContext = createContext<{ store: null; setStore: Dispatch<SetStateAction<null>> } | null>(null);
