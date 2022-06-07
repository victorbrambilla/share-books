import { InstituteModel } from './institute-model';

export type BookModel = {
  id: number;
  name: string;
  edition: string;
  year: Date;
  releaseDate: Date;
  status: string;
  stock: number;
  address: string;
  institute?: InstituteModel;
  instituteId: number;
  createdAt: Date;
  updatedAt: Date;
};
