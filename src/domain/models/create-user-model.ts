import { InstituteModel } from './institute-model';

export type CreateUserModel = {
  id: number | null;
  name: string;
  email: string;
  userName: string;
  password: string;
  institute: InstituteModel;
  createdAt: Date;
  updatedAt: Date;
};
