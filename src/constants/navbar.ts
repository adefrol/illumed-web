interface INavbar {
  id: string;
  title: string;
  href: string;
}

export const navbar: INavbar[] = [
  {
    id: '1',
    title: "О нас",
    href: "/",
  },

  {
    id: '2',
    title: "Проекты",
    href: "/",
  },

  {
    id: '3',
    title: "Услуги",
    href: "/",
  },

  {
    id: '4',
    title: "Контакты",
    href: "/",
  },
];
