import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledRegisterPage } from './style';
import { api } from '../../api/api';

interface iFormData {
  email: string;
  contact: string;
  address: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('Email inválido'),
  contact: yup.string().required('Campo obrigatório'),
  address: yup.string().required('Campo obrigatório'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password')], 'As senhas não conferem'),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmitRegister = async (data: iFormData) => {
    console.log(data);

    try {
      const response = await api.post('/register', data);
      console.log(response);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledRegisterPage>
      <div className='span'>
        <div className='insideSpan'>
          <span>
            Crie sua conta para saborear nossa culinária de iguarias do leste
            europeu!
          </span>
        </div>
      </div>
      <div className='flexGrid'>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <input type='text' placeholder='Nome' {...register('name')} />
          <p>{errors.name?.message}</p>
          <input type='text' placeholder='Telefone' {...register('contact')} />
          <p>{errors.contact?.message}</p>
          <input type='text' placeholder='Endereço' {...register('address')} />
          <p>{errors.address?.message}</p>
          <input type='email' placeholder='Email' {...register('email')} />
          <p>{errors.email?.message}</p>
          <input
            type='password'
            placeholder='Senha'
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
          <input
            type='password'
            placeholder='Confirmar senha'
            {...register('confirmPassword')}
          />
          <p>{errors.confirmPassword?.message}</p>

          <button type='submit'>Cadastrar</button>
        </form>
      </div>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
