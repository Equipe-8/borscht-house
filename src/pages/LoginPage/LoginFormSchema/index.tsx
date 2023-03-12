import * as yup from 'yup';

export const FormDemands = yup.object().shape({
  email: yup.string().required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});
