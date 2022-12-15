import { isEmpty } from 'lodash-es';
import create from 'zustand';
import { getRepeatedNodes, newJSON } from '../../../pages/api/json-data';
import { IJsonData } from '../types/dataType';
import { useServerData } from './useServerData';
import { useSettings } from './useSetting';

interface IFormDataState {
  allFormData: any;
  formData: null | IJsonData | typeof newJSON;
  setFormData: (d: any) => void;
  addNewFormData: (d: any) => void;
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
  allFormData: {},
  formData: _formData,
  setFormData: (d) => set((state) => ({ ...state, formData: { ...state.formData, ...d } })),
  addNewFormData: (d) =>
    set((state) => {
      // this is called in the initial render from scratch
      if (isEmpty(state.formData)) {
        return {
          ...state,
          formData: { ...state.formData, ...d },
          allFormData: { ...state.allFormData, [d.taskId]: { ...state.formData, ...d } },
        };
      } else {
        // This is called when user has already filled a form and comes back to that same form from another form
        if (!isEmpty(state.allFormData) && state.allFormData[d.taskId]) {
          useServerData.getState().setServerData(state.allFormData[d.taskId]);
          return { ...state, formData: { ...state.allFormData[d.taskId] } };
        }

        // This is called when a user has already filled a form but navigates to another NEW form
        return {
          ...state,
          formData: { ...state.formData, ...d },
          allFormData: { ...state.allFormData, [d.taskId]: { ...state.formData, ...d } },
        };
      }
    }),
}));

export { useFormData };
