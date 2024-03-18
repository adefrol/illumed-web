export interface Images {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  img: string;
}

export interface IProject {
  id?: number;
  title?: string;
  img?: Images[];
  link?: string;
  thumbnail?: string;

  dateTime?: string;
}
