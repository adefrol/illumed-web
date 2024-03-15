import { Contacts } from "@/components/Contacts";
import { PageTitle } from "@/components/PageTitle";
import { Varela_Round } from "next/font/google";

const varela = Varela_Round({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <PageTitle title="О нас" />

        <p className="max-w-[600px] font-semibold text-[34px] animate-slide-in">
          <span className={varela.className}>
            illumed<span className="text-[#7266e2]">Web</span>
          </span>{" "}
          - команда экспертов в разработке сайтов и мобильных приложений.
        </p>

        <p className="max-w-[600px] font-light text-[17px] text-justify animate-slide-in z-10">
          <span className={varela.className}>
            illumed<span className="text-[#7266e2]">Web</span>
          </span>{" "}
          - команда, специализирующаяся на создании инновационных веб-сайтов и
          мобильных приложений. Мы опытные веб-разработчики, обладают
          устойчивыми знаниями и более чем четырёхлетним практическим опытом.
          Владеем глубокими знаниями в серверной и клиентской частях
          веб-технологий, сфокусированных на фреймворках основанных на
          JavaScript/TypeScript и других языках. Наш опыт включает успешное
          завершение различных проектов, что подтверждает способность к
          креативному мышлению и решению сложных задач. Мы стремится к
          постоянному профессиональному росту и поиску новых способов
          совершенствования навыков в веб-разработке.
          {/* Наш энтузиазм и опыт станут незаменимым
          вкладом в наши инновационные проекты." */}
        </p>

        <div className="animate-slide-in mb-5">
          <Contacts />
        </div>
      </div>
    </div>
  );
}
