import create from 'zustand';
import { IJsonData } from '../types/dataType';
import MAIN_JSON_DATA from './MAIN_JSON_DATA';

interface IServerDataState {
  serverData: null | IJsonData | typeof MAIN_JSON_DATA;
  setServerData: (d: any) => void;
}

const _serverData = {
  ...MAIN_JSON_DATA,
};

const useServerData = create<IServerDataState>()((set) => ({
  serverData: _serverData,
  setServerData: (d) => set((state) => ({ ...state, serverData: { ...state.serverData, ...d } })),
}));

export { useServerData };
