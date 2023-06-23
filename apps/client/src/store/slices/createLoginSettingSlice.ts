import { create, StateCreator } from 'zustand';

type State = {
  name: string;
  selectedKeywordCodes: string[];
  location: string;
};

type Action = {
  setName: (name: string) => void;
  setSelectedKeywordCodes: (selectedKeywordCodes: string[]) => void;
  setLocation: (location: string) => void;
};

export type LoginSettingSlice = State & Action;

const createLoginSettingSlice = create<LoginSettingSlice>((set) => ({
  name: '',
  selectedKeywordCodes: [],
  location: '',
  setName: (name) => set({ name }),
  setSelectedKeywordCodes: (selectedKeywordCodes) => set({ selectedKeywordCodes }),
  setLocation: (location) => set({ location }),
}));

export default createLoginSettingSlice;
