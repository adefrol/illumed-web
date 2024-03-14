import { IContact } from "./contacts.interface";
import { IResume } from "./resume.interface";

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  patronymic: string;
  img: string;
  resume: IResume[];
  contact: IContact[];
}
