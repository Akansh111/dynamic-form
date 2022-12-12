import create from 'zustand';
import { getRepeatedNodes, newJSON } from '../../../pages/api/json-data';
import { IJsonData } from '../types/dataType';
import { useSettings } from './useSetting';

interface IServerDataState {
  serverData: null | IJsonData | typeof newJSON;
  setServerData: (d: any) => void;
}

const _serverData = {
  ...newJSON,
  nodes: [
    ...newJSON.nodes,
    JSON.parse(
      JSON.stringify(getRepeatedNodes(useSettings.getState().settings.nodeType, useSettings.getState().settings.count)),
    ),
  ],
};

const useServerData = create<IServerDataState>()((set) => ({
  serverData: _serverData,
  setServerData: (d) => set((state) => ({ ...state, serverData: { ...state.serverData, ...d } })),
}));

export { useServerData };
