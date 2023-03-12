import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StyledLoginPage } from './style';

import { FormDemands } from './LoginFormSchema';
import LoginForm from '../../components/Form/LoginForm';

import { StyledButtonLink } from '../../styles/button';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { api } from '../../services/api';
import { ILoginFormValues } from '../../providers/UserContext/@types';
import { UserContext } from '../../providers/UserContext/UserContext';

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    resolver: yupResolver(FormDemands),
  });

  const { setUser, user } = useContext(UserContext);

  const navigate = useNavigate();

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post('/login', formData);
      localStorage.setItem('@TOKEN', `${response.data.accessToken}`);
      setUser(response.data.user);

      navigate('/shop');
    } catch (error) {
      toast.error('Usuário ou senha inválidos');
    }
  };

  const autoLoginUser = async () => {
    const userToken = localStorage.getItem('@TOKEN');
    if (userToken) {
      try {
        const response = await api.get(`/users/${user?.id})`, {
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
  useEffect(() => {
    autoLoginUser();
  }, []);

  const submit = async (data: ILoginFormValues) => {
    userLogin(data);
  };

  return (
    <StyledLoginPage>
      <StyledContainer>
        <div className='flexGrid'>
          <div className='left'>
            <StyledGridBox className='formBox'>
              <StyledTitle tag='h2' $fontSize='three'>
                Login
              </StyledTitle>
              <StyledParagraph textAlign='center' fontColor='gray'>
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </StyledParagraph>
              <StyledButtonLink
                to='/register'
                $buttonSize='default'
                $buttonStyle='gray'
              >
                Cadastrar
              </StyledButtonLink>
            </StyledGridBox>
          </div>
        </div>
      </StyledContainer>
    </StyledLoginPage>
  );
};

export default LoginPage;
