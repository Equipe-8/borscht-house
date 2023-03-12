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
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  autoLoginUser: () => Promise<void>;
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
