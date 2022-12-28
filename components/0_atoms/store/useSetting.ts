import create from 'zustand';
import { normalAttributes } from '../../../pages/api/json-data';

interface IUniqueIdState {
  settings: {
    nodeType: any;
    count: number;
  };
  setSettings: (devtools: object) => void;
}

const useSettings = create<IUniqueIdState>()(
  // persist(
  (set) => ({
    settings: {
      nodeType: normalAttributes,
      count: 1,
    },
    setSettings: (d) => set((state) => ({ ...state, settings: { ...state.settings, ...d } })),
  }),
  //   {
  //     name: 'settings-storage',
  //   },
  // ),
);

export { useSettings };
