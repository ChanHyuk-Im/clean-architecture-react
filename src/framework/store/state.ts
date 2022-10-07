import create from 'zustand';

interface IState {
  token: string;
  setToken: (token: string) => void;
}

const useStateStore = create<IState>((set) => ({
  token: '',
  setToken: (token) => set((state) => ({ token })),
}));

export default useStateStore;
