import { createContext } from 'react';
import { iUserContext } from './@types';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: iUserContext) => (
  <UserContext.Provider value={{}}>{children}</UserContext.Provider>
);
