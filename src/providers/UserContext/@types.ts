import { ReactNode } from 'react';

export interface iFormData {
  email: string;
  contact: string;
  address: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface iUserContext {
  children: ReactNode;
}

export interface iContexts {
  handleModalEdit: () => void;
  isModalEditOpen: boolean;
  logOut: () => void;
  editUserAddress: (
    userId: number,
    address: string,
    token: string
  ) => Promise<void>;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  autoLoginUser: () => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  contact: string;
  address: string;
  name: string;
  password: string;
  confirmPassword: string;
  id: number;
}
