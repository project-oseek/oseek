import { create, StateCreator } from 'zustand';
import { range } from '@oseek/lib';

// 더미데이터
const keywordDummy = range(20).map((_) => ({
  emoji: '🙇‍',
  text: '안녕하세요',
  checked: false,
}));

type Coords = {
  latitude: number;
  longitude: number;
  location: string;
};

type State = {
  name: string;
  keywords: any[];
  coords: Coords | null;
};

type Action = {
  setName: (name: string) => void;
  setKeywords: (keyword: any[]) => void;
  setCoords: (coords: Coords) => void;
};

export type LoginSettingSlice = State & Action;

const createLoginSettingSlice = create<LoginSettingSlice>((set) => ({
  name: '',
  keywords: keywordDummy,
  coords: null,
  setName: (name) => set({ name }),
  setKeywords: (keywords) => set({ keywords }),
  setCoords: (coords) => set({ coords }),
}));

export default createLoginSettingSlice;
