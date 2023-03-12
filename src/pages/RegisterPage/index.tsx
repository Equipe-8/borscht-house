import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StyledRegisterPage } from './style';
import { schema } from './RegisterFormSchema/RegisterFormSchema';
import { iFormData } from '../../providers/UserContext/@types';
import { api } from '../../services/api';

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmitRegister = async (data: iFormData) => {
    try {
      const response = await api.post('/register', data);
      toast.success('Cadastro realizado com sucesso!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <StyledRegisterPage>
      <div className='container'>
        <div className='span'>
          <div className='insideSpan'>
            <span>
              Crie sua conta para saborear nossa culinária de iguarias do leste
              europeu!
            </span>
          </div>
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
