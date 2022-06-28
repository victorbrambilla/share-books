import * as yup from 'yup';
import { CreateInstituteModel } from '@/presentation/models/create-institute-model';
import { object, SchemaOf } from 'yup';

export const CreateInstituteSchema: SchemaOf<CreateInstituteModel> = object({
  name: yup.string().trim().required('O nome é obrigatório.'),
  address: yup.string().trim().required('O endereço é obrigatório.'),
  city: yup.string().trim().required('A cidade é obrigatória.'),
  state: yup.string().trim().required('O estado é obrigatório.'),
  zip: yup.string().trim().required('O CEP é obrigatório.'),
  description: yup.string().trim().required('A descrição é obrigatória.'),
});
