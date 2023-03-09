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
