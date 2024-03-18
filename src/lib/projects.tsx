import { IProject } from "@/interfaces/project.interface";

export const projects: IProject[] = [
  {
    id: 1,
    title: "Neverlose.cc",
    img: [
      {
        id: 1,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              A serene and tranquil retreat, this house in the woods offers a
              peaceful escape from the hustle and bustle of city life.
            </p>
          </div>
        ),
        className: "md:col-span-2",
        img: "/projects/neverlose.jpg",
      },

      {
        id: 2,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              A serene and tranquil retreat, this house in the woods offers a
              peaceful escape from the hustle and bustle of city life.
            </p>
          </div>
        ),
        className: "col-span-1",
        img: "/projects/neverlose2.jpg",
      },

      {
        id: 3,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              A serene and tranquil retreat, this house in the woods offers a
              peaceful escape from the hustle and bustle of city life.
            </p>
          </div>
        ),
        className: "col-span-1",
        img: "/projects/neverlose3.jpg",
      },
      {
        id: 4,
        content: (
          <div>
            <p className="font-bold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              A serene and tranquil retreat, this house in the woods offers a
              peaceful escape from the hustle and bustle of city life.
            </p>
          </div>
        ),
        className: "md:col-span-2",
        img: "/projects/neverlose4.jpg",
      },
    ],
    dateTime: "2020-2021",
    link: "https://neverlose.cc",
  },

  {
    id: 2,
    title: "Project",
    img: [
      {
        id: 1,
        content: "Skeleton One",
        className: "md:col-span-2",
        img: "/bgmain.png",
      },

      {
        id: 2,
        content: "Skeleton Two",
        className: "col-span-1",
        img: "/bgmain-dark.jpg",
      },

      {
        id: 3,
        content: "Skeleton Three",
        className: "col-span-1",
        img: "/projects/neverlose3.jpg",
      },
      {
        id: 4,
        content: "Skeleton Four",
        className: "md:col-span-2",
        img: "/projects/neverlose4.jpg",
      },
    ],
    dateTime: "2020-2021",
    link: "https://neverlose.cc",
  },
];
