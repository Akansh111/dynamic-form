import create from 'zustand';
import { getRepeatedNodes, newJSON } from '../../../pages/api/json-data';
import { IJsonData } from '../types/dataType';
import { useSettings } from './useSetting';

interface IFormDataState {
  formData: null | IJsonData | typeof newJSON;
  setFormData: (d: any) => void;
}

const _formData = {
  ...newJSON,
  nodes: [
    ...newJSON.nodes,
    JSON.parse(
      JSON.stringify(getRepeatedNodes(useSettings.getState().settings.nodeType, useSettings.getState().settings.count)),
    ),
  ],
};

const useFormData = create<IFormDataState>()((set) => ({
  formData: _formData,
  setFormData: (d) => set((state) => ({ ...state, formData: { ...state.formData, ...d } })),
}));

export { useFormData };
