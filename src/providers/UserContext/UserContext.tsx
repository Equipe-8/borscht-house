import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { iUserContext, iContexts, IUser } from './@types';
import { api } from '../../services/api';

export const UserContext = createContext({} as iContexts);

export const UserContextProvider = ({ children }: iUserContext) => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | undefined>();

  const handleModalEdit = () => {
    setIsModalEditOpen(!isModalEditOpen);
  };

  const editUserAddress = async (
    userId: number,
    address: string,
    token: string
  ) => {
    try {
      const response = await api.patch(`users/${userId}`, address, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.clear();
    navigate('/');
    toast.success('Usuário deslogado com sucesso!');
  };

  return (
    <UserContext.Provider
      value={{
        handleModalEdit,
        isModalEditOpen,
        logOut,
        user,
        setUser,
        editUserAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
