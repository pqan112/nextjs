import { create } from "zustand";

export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  emailVerified: boolean;
  hasDeletePermission: boolean;
}

interface UserModal {
  user: User;
  isOpen: boolean;
  setUser: (user: User) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const useUser = create<UserModal>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  user: {
    id: "",
    name: "",
    role: "",
    email: "",
    emailVerified: false,
    hasDeletePermission: false,
  },
  setUser: (user: User) => set({ user }),
}));
