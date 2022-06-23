import { signupModel } from '@/presentation/models/signup-model';
import * as yup from 'yup';

import { object, SchemaOf } from 'yup';

export const signupSchema: SchemaOf<signupModel> = object({
  name: yup.string().trim().required('O nome é obrigatório.'),
  email: yup
    .string()
    .trim()
    .required('O e-mail é obrigatório.')
    .email('Insira um e-mail válido.'),
  password: yup.string().trim().required('A senha é obrigatória.'),
  userName: yup.string().trim().required('O usuário é obrigatório.'),
});
