import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  carrent,
  jobit,
  tripguide,
  ipsfa,
  coffunity,
  aeme,
} from "../assets";

export const navLinks = [
  {
    id: "sobre-mi",
    title: "Sobre Mí",
  },
  {
    id: "proyectos",
    title: "Proyectos",
  },
  {
    id: "contactame",
    title: "Contáctame",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Asistente de soporte técnico",
    company_name: "IPSFA",
    icon: ipsfa,
    iconBg: "#383E56",
    date: "Nov 2013 - Dic 2013",
    points: [
      "Aplicando mantenimiento preventivo y correctivo de equipo informático.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Coffunity",
    icon: coffunity,
    iconBg: "#062335",
    date: "Sep 2019 - Dic 2019",
    points: [
      "Orientado a la creación de aplicaciones web informativas utilizando tecnologías como React.js, Firebase, Algolia, entre otras.",
      "Colaborando con equipo de diseñadores, programadores y marqueting para realizar mejoras a productos existentes.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "12aeme Studio",
    icon: aeme,
    iconBg: "#000",
    date: "Enero 2020 - Actualidad",
    points: [
      "Encargado de crear y desplegar aplicaciones web como e-commerce, sitios informativos, dashboards, entre otros. Principalmente utilizando tecnologías como React.js, Next.js, TailwindCSS, Firebase, Vercel, DigitalOcean, y más.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
