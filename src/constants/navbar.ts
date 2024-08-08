interface INavbar {
  id: string;
  title: string;
  href: string;
}

export const navbar: INavbar[] = [
  {
    id: "1",
    title: "О нас",
    href: "#about",
  },

  {
    id: "2",
    title: "Услуги",
    href: "#services",
  },

  {
    id: "3",
    title: "Проекты",
    href: "#projects",
  },

  {
    id: "4",
    title: "Контакты",
    href: "#contacts",
  },
];
