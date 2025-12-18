import { create } from "zustand";

export interface UserProps {
  id: string;
  name: string;
  role: string;
  email: string;
  emailVerified: boolean;
  hasDeletePermission: boolean;
}

interface UserModalProps {
  user: UserProps;
  setUser: (user: UserProps) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface UserModalProps {
  user: UserProps;
  isOpen: boolean;
  setUser: (user: UserProps) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const useUsers = create<UserModalProps>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  user: {
    id: "",
    name: "",
    role: "user",
    email: "",
    emailVerified: false,
    hasDeletePermission: false,
  },
  setUser: (user: UserProps) => set({ user }),
}));
