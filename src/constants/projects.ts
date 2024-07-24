import { icons } from "lucide-react";

export interface IProjects {
  id: string;
  name: string;
  icon: keyof typeof icons;
  img: string;
}

export const projects: IProjects[] = [
  {
    id: "1",
    name: "Рег.ру - аренда сервера",
    icon: "Folder",
    img: "/projects/reg-project.png",
  },

  {
    id: "2",
    name: "Рег.ру - аренда сервера",
    icon: "Folder",
    img: "/projects/reg-project.png",
  },

  {
    id: "3",
    name: "Рег.ру - аренда сервера",
    icon: "Folder",
    img: "/projects/reg-project.png",
  },
];
