import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IUniqueIdState {
  uniqueIdStore: object;
  setUniqueIdStore: (devtools: object) => void;
}

const useUniqueIdStore = create<IUniqueIdState>()(
  persist(
    (set) => ({
      uniqueIdStore: {},
      setUniqueIdStore: (d) => set((state) => ({ ...state, uniqueIdStore: { ...state.uniqueIdStore, ...d } })),
    }),
    {
      name: 'uniqueIdStore-storage',
    },
  ),
);

export { useUniqueIdStore };
