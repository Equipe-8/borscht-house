import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledLoginPage,
  StyledDivLogin,
  StyledLoginButton,
  StyledRegisterButton,
  StyledDivMain,
} from './style';
import { FormDemands } from './LoginFormSchema';
import { ILoginFormValues } from '../../providers/UserContext/@types';
import { UserContext } from '../../providers/UserContext/UserContext';

const LoginPage = () => {
  const { userLogin } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    resolver: yupResolver(FormDemands),
  });

  const submit = async (data: ILoginFormValues) => {
    userLogin(data);
  };
  const navigate = useNavigate();
  const toRegister = () => navigate('/register');

  return (
    <StyledLoginPage>
      <StyledDivMain>
        <form action='' onSubmit={handleSubmit(submit)}>
          <input type='text' placeholder='Email' {...register('email')} />
          <p>{errors.email?.message}</p>
          <input type='password' placeholder='Senha' {...register('password')} />
          <p>{errors.password?.message}</p>
          <StyledDivLogin>
            <StyledLoginButton type='submit'>Entrar</StyledLoginButton>
            <p>ou</p>
            <StyledRegisterButton type='submit' onClick={toRegister}>
              Cadastrar-se
            </StyledRegisterButton>
          </StyledDivLogin>
        </form>
      </StyledDivMain>
    </StyledLoginPage>
  );
};

export default LoginPage;
