import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { IUser } from "@/interfaces/user.interface";
import Image from "next/image";
import { FC } from "react";

export interface IContent {
  title: string;
  description: string;
  content: JSX.Element;
}

// const content: IContent[] = [
//   {
//     title: "TypeScript",
//     description:
//       "язык программирования, который является надмножеством JavaScript, добавляя статическую типизацию и другие возможности, улучшающие разработку больших приложений. TypeScript компилируется в обычный JavaScript и может быть использован везде, где может быть использован JavaScript.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];

export const Development: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="">
      <div className="lg:-mt-20">
        {user.resume.map((item) => (
          <div className="">
            <StickyScroll content={item.development} />
          </div>
        ))}
      </div>

      {/* {user.resume.map((item) => (
        <div className="grid lg:grid-cols-4 lg:gap-[60px] grid-cols-2 gap-[40px]">
          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Язык")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 dark:text-white/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>

          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Библиотека")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 dark:text-white/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>

          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Фреймворк")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 dark:text-white/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>

          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Экосистема")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 dark:text-white/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};
