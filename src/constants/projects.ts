import { icons } from 'lucide-react';

export interface IProjects {
  id: string;
  name: string;
  icon: keyof typeof icons;
  img: string;
  description: string;
}

export const projects: IProjects[] = [
  {
    id: '1',
    name: 'Рег.ру - аренда сервера',
    icon: 'Folder',
    img: '/projects/reg-project.png',
    description: 'description - 1',
  },

  {
    id: '2',
    name: 'Рег.ру - аренда сервера',
    icon: 'Folder',
    img: '/projects/dota.png',
    description: 'description - 2',
  },

  {
    id: '3',
    name: 'Рег.ру - аренда сервера',
    icon: 'Folder',
    img: '/projects/reg-project.png',
    description: 'description - 3',
  },
];
