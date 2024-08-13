import { icons } from "lucide-react";

interface IService {
  id: string;
  titlePink: string;
  title: string;
  description: string;
  icon: keyof typeof icons;
}

export const serviceList: IService[] = [
  {
    id: "1",
    titlePink: "Разработка",
    title: "плана и дизайна",
    description:
      "Полное информационное заполнение и структурирование сайта. Разработка современного и эстетичного дизайна...",
    icon: "PencilRuler",
  },

  {
    id: "2",
    titlePink: "Разработка",
    title: "сайта или приложения",
    description:
      "Практическая реализация веб-проекта. Программирование всего функционала, анимирование, разработка внутренней и внешней частей сайта...",
    icon: "ChevronsLeftRight",
  },

  {
    id: "3",
    titlePink: "Запуск и продвижение",
    title: "сайта",
    description:
      "Регистрация домена, подбор и оформление качественного хостинга, грамотная настройка системы поиска и рекламы...",
    icon: "Megaphone",
  },
];
