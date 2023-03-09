import { createContext, useState } from 'react';
import { iUserContext, iContexts } from './@types';

export const UserContext = createContext({} as iContexts);

export const UserContextProvider = ({ children }: iUserContext) => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const handleModalEdit = () => {
    setIsModalEditOpen(!isModalEditOpen);
    console.log('aaaaa');
  };

  return (
    <UserContext.Provider value={{ handleModalEdit }}>
      {children}
    </UserContext.Provider>
  );
};
