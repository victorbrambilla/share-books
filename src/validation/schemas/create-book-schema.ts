import { object, SchemaOf } from 'yup';
import * as yup from 'yup';
import { CreateBookModel } from '@/presentation/models/create-book-model';

export const CreateBookSchema: SchemaOf<CreateBookModel> = object({
  name: yup.string().trim().required('O nome é obrigatório.'),
  edition: yup.string().trim().required('A edição é obrigatória.'),
  year: yup.date().required('O ano é obrigatório.'),
  releaseDate: yup.date().required('A data de lançamento é obrigatória.'),
  status: yup.string().trim().required('O status é obrigatório.'),
  stock: yup.number().required('O estoque é obrigatório.'),
  address: yup.string().trim().required('O endereço é obrigatório.'),
  instituteId: yup.number().required('O instituto é obrigatório.'),
});
