export interface INavbar {
  id: number;
  title: string;
  href: string;
}

export const navbar: INavbar[] = [
  {
    id: 1,
    title: "О нас",
    href: "/",
  },

  {
    id: 2,
    title: "Проекты",
    href: "/projects",
  },

  {
    id: 3,
    title: "Резюме",
    href: "/resume",
  },
];
