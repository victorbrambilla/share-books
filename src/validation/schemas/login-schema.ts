import { LoginModel } from '@/presentation/models/login-model';
import * as yup from 'yup';

import { object, SchemaOf } from 'yup';

export const loginSchema: SchemaOf<LoginModel> = object({
  password: yup.string().trim().required('A senha é obrigatória.'),
  email: yup
    .string()
    .trim()
    .required('O e-mail é obrigatório.')
    .email('Insira um e-mail válido.'),
});
