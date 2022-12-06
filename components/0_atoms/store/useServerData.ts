import create from 'zustand';
import { newJSON } from '../../../pages/api/json-data';

interface IServerDataState {
  serverData: object;
  setServerData: (devtools: object) => void;
}

const useServerData = create<IServerDataState>()((set) => ({
  serverData: newJSON,
  setServerData: (d) => set((state) => ({ ...state, serverData: { ...state.serverData, ...d } })),
}));

export { useServerData };
