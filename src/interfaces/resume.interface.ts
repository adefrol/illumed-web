import { IDevelopment } from "./resume/development.interface";
import { IEducation } from "./resume/education.interface";
import { IExperience } from "./resume/experience.interface";
import { IReferences } from "./resume/references.interface";

export interface IResume {
  id: number;
  title: string;
  body: string;
  experience: IExperience[];

  education: IEducation[];

  development: IDevelopment[];

  references: IReferences[];
}
