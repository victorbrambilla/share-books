import { BookModel } from './books-model';
import { UserModel } from './user-model';

export type InstituteModel = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  description: string;
  adminId: number;
  createdAt: Date;
};
