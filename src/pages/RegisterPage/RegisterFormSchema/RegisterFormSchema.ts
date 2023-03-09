import * as yup from 'yup';

export const schema = yup.object().shape({
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
