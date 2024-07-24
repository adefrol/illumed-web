interface ILinks {
  id: string;
  title: string;
  href: string;
}

interface IFooterList {
  id: string;
  title: string;
  links: ILinks[];
}

export const footerList: IFooterList[] = [
  {
    id: "1",
    title: "Проекты",
    links: [
      {
        id: "1",
        title: "Web-приложения",
        href: "#",
      },

      {
        id: "2",
        title: "Моб. приложения",
        href: "#",
      },
    ],
  },

  {
    id: "2",
    title: "Услуги",
    links: [
      {
        id: "1",
        title: "Дизайн",
        href: "#",
      },

      {
        id: "2",
        title: "Разработка",
        href: "#",
      },

      {
        id: "3",
        title: "Продвижение",
        href: "#",
      },
    ],
  },

  {
    id: "3",
    title: "О нас",
    links: [
      {
        id: "1",
        title: "Кто мы?",
        href: "#",
      },

      {
        id: "2",
        title: "Почему мы?",
        href: "#",
      },
    ],
  },
];
