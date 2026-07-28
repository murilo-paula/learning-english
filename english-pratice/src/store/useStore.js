import { create } from 'zustand';
import userImg from '../../src/assets/img/user.png'

export const useUserStore = create((set) => ({

  user: {
    name: "João Silva",
    email: "joao@email.com",
    id: "213123321",
    number: "",
    avatar: userImg,
    story: [{ role: 'assistant', content: 'Hi, I am Liam'}],
  },

  updateUser: (newData) =>
    set((state) => ({
      user: { ...state.user, ...newData },
    })),
}));