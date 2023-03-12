import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import {
  StyledLoginPage,
  StyledDivLogin,
  StyledLoginButton,
  StyledRegisterButton,
  StyledDivMain,
} from './style';

import { FormDemands } from './LoginFormSchema';
import { ILoginFormValues } from '../../providers/UserContext/@types';

import { api } from '../../services/api';
import { UserContext } from '../../providers/UserContext/UserContext';

const { setUser, user } = useContext(UserContext);

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    resolver: yupResolver(FormDemands),
  });

  const navigate = useNavigate();

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post('/login', formData);
      localStorage.setItem('@TOKEN', `${response.data.accessToken}`);
      setUser(response.data.user);
      navigate('/shop');
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error('Usuário ou senha inválidos');
    }
  };

  useEffect(() => {
    const autoLoginUser = async () => {
      const userToken = localStorage.getItem('@TOKEN');
      if (userToken) {
        try {
          const response = await api.get(`/users/${user?.id}`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          setUser(response.data.user);
          navigate('/shop');
        } catch (error) {
          localStorage.removeItem('@TOKEN');
        }
      }
    };
    autoLoginUser();
  }, []);

  const submit = async (data: ILoginFormValues) => {
    userLogin(data);
  };

  return (
    <StyledLoginPage>
      <StyledDivMain>
        <form action='' onSubmit={handleSubmit(submit)}>
          <input type='text' placeholder='Email' {...register('email')} />
          <p>{errors.email?.message}</p>
          <input type='text' placeholder='Senha' {...register('password')} />
          <p>{errors.password?.message}</p>
          <StyledDivLogin>
            <StyledLoginButton type='submit'>Entrar</StyledLoginButton>
            <p>ou</p>
            <StyledRegisterButton type='submit'>
              Cadastrar-se
            </StyledRegisterButton>
          </StyledDivLogin>
        </form>
      </StyledDivMain>
    </StyledLoginPage>
  );
};

export default LoginPage;
