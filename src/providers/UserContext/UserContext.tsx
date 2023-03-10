import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { iUserContext, iContexts } from './@types';

export const UserContext = createContext({} as iContexts);

export const UserContextProvider = ({ children }: iUserContext) => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const navigate = useNavigate();

  const handleModalEdit = () => {
    setIsModalEditOpen(!isModalEditOpen);
    console.log(isModalEditOpen);
  };

  const logOut = () => {
    localStorage.clear();
    navigate('/');
    toast.success('Usuário deslogado com sucesso!');
  };

  return (
    <UserContext.Provider value={{ handleModalEdit, isModalEditOpen, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
