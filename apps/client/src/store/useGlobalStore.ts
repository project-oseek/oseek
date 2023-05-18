import { create } from 'zustand';

import createUserSlice, { UserSlice } from '@store/slices/createUserSlice';

type Store = UserSlice;

const useGlobalStore = create<Store>((set, get, api) => ({
  ...createUserSlice(set, get, api),
}));

export default useGlobalStore;
