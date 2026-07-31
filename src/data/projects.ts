import logoBocaditos from "../assets/LOGOBOCADITOS.png";
import innovaGenius from "../assets/innovaGenius.jpg";
import pontePilasImg from "../assets/PORTADAPILAS.png";
import toursEcuadorImg from "../assets/iconToursEcuador.png";
import cashflowImg from "../assets/cashflow.png";

export interface Project {
  title: string;
  description: string;
  year?: string | number;
  image?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Bocaditos La Guaragua",
    description: "Lideré y coordiné el desarrollo completo de la página web, desde la conceptualización hasta la implementación.",
    year: "Mar 2020",
    image: logoBocaditos,
  },
  {
    title: "Tours Ecuador",
    description: "Coordiné tareas y plazos, asegurando la entrega oportuna y cumplimiento de los objetivos del proyecto. Además de la supervisión del desarrollo la página web, implementando procesos eficientes y asegurando la satisfacción del cliente",
    year: "Feb 2023",
    image: toursEcuadorImg,
  },
  {
    title: "Proyecto vinculación con la sociedad - ACNUR",
    description: "Desarrollé la interfaz de usuario con React para la tienda en línea de Prowess MOOC.",
    year: "Mar 2023",
  },
  {
    title: "Prácticas - Softevo S.A",
    description: "Desarrollo de diferentes módulos para la app de registro, control e informe de actividades de los desarrolladores. Usando Java con React y gestionando los datos con PostgreSQL.",
    year: "Sep 2024",
  },
  {
    title: "Qualitysoft Cia. Ltda.",
    description: "Responsable del QA interno mediante revisión técnica de las nuevas funcionalidades o bugs a corregir por el equipo de tecnología. Al mismo tiempo me involucré como programador en el desarrollo de nuevas funcionalidades para el sistema. Dirigí y coordiné las actividades del área de desarrollo, liderando la planificación de tareas, la gestión de sprints en Jira y la sincronización del equipo para asegurar despliegues exitosos.",
    year: "Ene 2026",
  },
];

export const createdProjects: Project[] = [
  {
    title: "Ponte Pilas",
    description: "Proyecto personal de estudio para el examen EAES: cuestionarios de física y matemática, y un simulador muy parecido al real.",
    year: "Marzo 2020",
    image: pontePilasImg,
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Bocaditos La Guaragua",
    description: "Página web para conocer todo lo que ofrece, tanto bocaditos de sal como de dulce.",
    year: "Agosto 2021",
    image: logoBocaditos,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "InnovaGenius",
    description: "Proyecto de inventario para una inmobiliaria: creación de nuevo inventario, control de stock y más.",
    year: "Ago 2022",
    image: innovaGenius,
    tags: ["PHP", "HTML", "CSS", "JavaScript", "jQuery"],
  },
  
  {
    title: "Tours Ecuador",
    description: "Página web de tours: lugares que ofertan, disponibilidad e itinerario de actividades de cada tour en una línea de tiempo.",
    year: "Feb 2023",
    image: toursEcuadorImg,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "CashFlow",
    description: "Aplicación web para el cierre de caja de una casa de cambios.",
    year: "Sep 2025",
    image: cashflowImg,
    tags: ["React", "Express", "Node.js"],
  },
];
