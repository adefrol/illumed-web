import { IUser } from "@/interfaces/user.interface";

export const users: IUser[] = [
  {
    id: 1,
    name: "Александр",
    lastname: "Найдёнов",
    patronymic: "Сергеевич",
    position: 'Frontend Разработчик',
    img: "https://github.com/3N.png",

    resume: [
      {
        id: 1,
        title:
          "Меня зовут Александр Сергеевич. Я проживаю в городе Иркутск. Разработчик frontend части сайтов и мобильных приложений.",
        body: "Целеустремленный и опытный веб-разработчик с более чем пятилетним опытом работы. Глубокие знания веб-технологий, включая HTML, CSS, JavaScript, TypeScript, и опыт работы с современными фреймворками и библиотеками. Успешно завершил множество проектов, демонстрируя способность к творческому мышлению и решению сложных задач. Заинтересован в продолжении профессионального развития и усовершенствовании навыков в области веб-разработки.",
        experience: [
          {
            id: 1,
            title: "Собственное ПО",
            body: 'Т.к. я активно играл в Counter-Strike, для меня не было секретом о существовании ПО для этой игры. Мне пришла в голову мысль о создании своей "утилиты". Я освоил механику движка игры, а также все, что находится под "капотом". В защите своего продукта я был не силен, поэтому целенаправленно делал свой проект общедоступным. Благодаря этому я и мой продукт обрели популярность. Но конкуренция была настолько большая, что одному поддерживать жизнь проекта, при этом конкурировать с другими разработчиками было просто невозможно.',
            dateTime: "2018-2019",
          },

          {
            id: 2,
            title: "Разработка ПО в команде",
            body: 'Пользуясь своей популярностью я стал членом команды русского проекта "Zett.pw". Проект славился достаточной популярностью и конкуренцией с проектами на таком же уровне. В этом проекте я занимал должность главного разработчика ПО. Прошло время и проект "умер" из-за разногласий в команде. На протяжении трёх лет я принимал участие в разных проектах, таких как: <a href="https://ev0lve.xyz/" target="_blank"><u>Ev0lve.xyz</u></a>, <a href="https://neverlose.cc/" target="_blank"><u>Neverlose.cc</u></a>. Я покинул каждый из этих проектов в роли разработчика ПО,  потому что моя страсть ушла к web-разработке и я вступил на должность frontend-разработчика. Перечисленные выше проекты являются ссылками и демонстрируют мой опыт.',
            dateTime: "2019-2021",
          },

          {
            id: 3,
            title: "Работа на фрилансе",
            body: "Брал незначительные проекты, в основном одностраничные сайты, мини-игры (поле чудес и т.п.), сайт-визитка. Зачастую приходилось дорабатывать уже готовые сайты, где-то наладить работу клиент-сервер, а где-то привязать оплату.",
            dateTime: "2021-2022",
          },

          {
            id: 4,
            title: "Поиск заказчиков напрямую",
            body: "Спустя время вышел с фриланс-площадок и начал искать заказчиков напрямую. Я получил огромный опыт разрабатывая сайты под ключ. В моем списке интернет-магазины, сайты интернет-доставок. Я занимался разработкой серверной части и клиентской части приложений. Для клиентской части использовал React, Next.js; а для серверной использовал Nest.js и ORM Prisma. Также хотелось бы упомянуть опыт разработки мобильных приложений, это были интернет-магазины, приложения заказов, и приложение для решения экзаменационных билетов.",
            dateTime: "2022-2023",
          },
        ],

        education: [
          {
            id: 1,
            educationType: "Среднее специальное",
            educationPlace: "Иркутский Энергетический Колледж",
            profession: "Информационные системы",

            dateTime: "2024",
          },
        ],

        development: [
          // ЯЗЫКИ
          {
            id: 1,
            title: "Язык",
            body: "HTML",
          },

          {
            id: 2,
            title: "Язык",
            body: "CSS",
          },

          {
            id: 3,
            title: "Язык",
            body: "TypeScript",
          },

          // БИБИЛИОТЕКИ
          {
            id: 4,
            title: "Библиотека",
            body: "React",
          },

          {
            id: 5,
            title: "Библиотека",
            body: "React Native",
          },

          // ФРЕЙМВОРКИ
          {
            id: 6,
            title: "Фреймворк",
            body: "Next.js",
          },

          // ЭКОСИСТЕМА
          {
            id: 7,
            title: "Экосистема",
            body: "Redux",
          },

          {
            id: 8,
            title: "Экосистема",
            body: "Zustand",
          },

          {
            id: 9,
            title: "Экосистема",
            body: "Tanstack Query",
          },

          {
            id: 10,
            title: "Экосистема",
            body: "Tanstack Router",
          },
        ],

        references: [],
      },
    ],

    contact: [
      {
        id: 1,
        title: "Написать в телеграм",
        href: "https://t.me/sorazj",
      },

      {
        id: 2,
        title: "Написать ВКонтакте",
        href: "https://vk.com/qqsoraz",
      },

      {
        id: 3,
        title: "Написать на почту",
        href: "mailto:3n14c@vk.com",
      },
    ],
  },

  {
    id: 2,
    name: "Иван",
    lastname: "Курбатов",
    patronymic: "Викторович",
    position: 'Backend Разработчик',
    img: "https://picsum.photos/200",

    resume: [
      {
        id: 1,
        title:
          "Меня зовут Иван Викторович. Я проживаю в городе Иркутск. Занимаюсь созданием серверной части для веб-сайтов.",
        body: "Опытный веб-разработчик с твердыми знаниями и более чем четырёхлетним практическим опытом. Обладаю глубокими знаниями в серверной части веб-технологий, в моей основе, фреймворки основанные на JavaScript и других языках. Мой опыт включает успешное завершение различных проектов, что подтверждает мою способность к креативному мышлению и решению сложных задач. Постоянное стремление к профессиональному росту и поиск новых способов совершенствования навыков в веб-разработке - это мой основной двигатель.",
        experience: [
          {
            id: 1,
            title: "title",
            body: "body hhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh",
            dateTime: "2020-2021",
          },
        ],

        education: [
          {
            id: 1,
            educationType: "Среднее специальное",
            educationPlace: "Иркутский Энергетический Колледж",
            profession: "Информационные системы",

            dateTime: "2024",
          },
        ],

        development: [
          {
            id: 1,
            title: "Язык",
            body: "HTML",
          },

          {
            id: 2,
            title: "Язык",
            body: "CSS",
          },

          {
            id: 3,
            title: "Язык",
            body: "TypeScript",
          },

          {
            id: 4,
            title: "Язык",
            body: "Python",
          },

          {
            id: 5,
            title: "Библиотека",
            body: "React",
          },

          {
            id: 6,
            title: "Библиотека",
            body: "Nest.JS",
          },
          {
            id: 7,
            title: "Библиотека",
            body: "Python Django",
          },
        ],

        references: [],
      },
    ],

    contact: [
      {
        id: 1,
        title: "Написать в телеграм",
        href: "https://t.me/adefrol",
      },

      {
        id: 2,
        title: "Написать ВКонтакте",
        href: "https://vk.com/adefrol",
      },

      {
        id: 3,
        title: "Написать на почту",
        href: "mailto:adefrolx@gmail.com",
      },
    ],
  },
];
