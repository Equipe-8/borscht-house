import { ReactNode } from 'react';

export interface iFormData {
  email: string;
  contact: string;
  address: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface iContexts {
  children: ReactNode;
}

export interface iUserContext{
  handleModalEdit: () => void;
  isModalEditOpen: boolean;
  logOut: () => void;
  editUserAddress: (
    userId: number,
    address: string,
    token: string | null,
  ) => Promise<void>;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
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
