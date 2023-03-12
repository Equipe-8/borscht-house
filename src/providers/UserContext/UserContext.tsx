import { createContext, useEffect, useState } from 'react';
import { iUserContext, iContexts, IUser } from './@types';

export const UserContext = createContext({} as iContexts);

export const UserContextProvider = ({ children }: iUserContext) => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [user, setUser] = useState<IUser | undefined>();

  const handleModalEdit = () => {
    setIsModalEditOpen(!isModalEditOpen);
    console.log('aaaaa');
  };

  return (
    <UserContext.Provider value={{ handleModalEdit, setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
