import { StateCreator } from 'zustand';

type User = {
  id: string;
  name: string;
};

type State = {
  user: User | null;
};

type Action = {
  setUser: (user: User) => void;
};

export type UserSlice = State & Action;

const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
});

export default createUserSlice;
