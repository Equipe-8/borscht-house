import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { iUserContext, iContexts, IUser, ILoginFormValues } from './@types';
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

  const autoLoginUser = async () => {
    const userToken = localStorage.getItem('@TOKEN');
    const userID = localStorage.getItem('userID');
    if (userToken) {
      try {
        const response = await api.get(`/users/${userID}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setUser(response.data.user);
        navigate('/shop');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post('/login', formData);
      localStorage.setItem('@TOKEN', `${response.data.accessToken}`);
      localStorage.setItem('userID', `${response.data.user.id}`);
      setUser(response.data.user);
      navigate('/shop');
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error('Usuário ou senha inválidos');
    }
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
        autoLoginUser,
        userLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
