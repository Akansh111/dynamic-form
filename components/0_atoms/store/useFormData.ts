import create from 'zustand';
import { newJSON } from '../../../pages/api/json-data';
import { IJsonData } from '../types/dataType';

interface IFormDataState {
  formData: null | IJsonData;
  setFormData: (d: any) => void;
}

const useFormData = create<IFormDataState>()((set) => ({
  formData: newJSON,
  setFormData: (d) => set((state) => ({ ...state, formData: { ...state.formData, ...d } })),
}));

export { useFormData };
