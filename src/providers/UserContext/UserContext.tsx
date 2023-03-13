import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { iUserContext, iContexts, IUser, ILoginFormValues } from './@types';
import { api } from '../../services/api';

export const UserContext = createContext({} as iUserContext);

export const UserContextProvider = ({ children }: iContexts) => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({} as IUser);

  const handleModalEdit = () => {
    setIsModalEditOpen(!isModalEditOpen);
  };

  const editUserAddress = async (
    userId: number,
    addressst: string,
    token: string | null
  ) => {
    try {
      const response = await toast.promise(
        api.patch(
          `users/${userId}`,
          { address: addressst },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        {
          pending: 'Carregando',
          success: 'Endereço atualizado com sucesso!',
        }
      );
      setUser(response.data);
      handleModalEdit();
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
        setUser(response.data);
        navigate('/shop');
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    autoLoginUser();
  }, []);

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await toast.promise(api.post('/login', formData), {
        pending: 'Carregando',
        success: 'Login realizado com sucesso!',
      });
      localStorage.setItem('@TOKEN', `${response.data.accessToken}`);
      localStorage.setItem('userID', `${response.data.user.id}`);
      setUser(response.data.user);
      navigate('/shop');
    } catch (error) {
      toast.error('Usuário ou senha inválidos');
    }
  };

  return (
    <UserContext.Provider
      value={{
        isModalEditOpen,
        user,
        handleModalEdit,
        logOut,
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
