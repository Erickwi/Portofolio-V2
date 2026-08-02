import logoBocaditosExp from "../assets/LOGOBOCADITOS.png";
import toursEcuadorExp from "../assets/iconToursEcuador.png";
import logoBocaditos from "../assets/proyectos/Proyecto_bocaditos.png";
import innovaGenius from "../assets/proyectos/Proyecto_innovaGenius.png";
import pontePilasImg from "../assets/proyectos/Proyect_pilas.png";
import toursEcuadorImg from "../assets/proyectos/Proyecto_tours_ecuador.png";
import cashflowImg from "../assets/proyectos/Proyecto_casa_de_cambios.png";

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
    description:
      "Lideré y coordiné el desarrollo completo de la página web, desde la conceptualización hasta la implementación.",
    year: "Mar 2020",
    image: logoBocaditosExp,
  },
  {
    title: "Tours Ecuador",
    description:
      "Coordiné tareas y plazos, asegurando la entrega oportuna y cumplimiento de los objetivos del proyecto. Además de la supervisión del desarrollo la página web, implementando procesos eficientes y asegurando la satisfacción del cliente",
    year: "Feb 2023",
    image: toursEcuadorExp,
  },
  {
    title: "Proyecto vinculación con la sociedad - ACNUR",
    description: "Desarrollé la interfaz de usuario con React para la tienda en línea de Prowess MOOC.",
    year: "Mar 2023",
  },
  {
    title: "Prácticas - Softevo S.A",
    description:
      "Desarrollo de diferentes módulos para la app de registro, control e informe de actividades de los desarrolladores. Usando Java con React y gestionando los datos con PostgreSQL.",
    year: "Sep 2024",
  },
  {
    title: "Qualitysoft Cia. Ltda.",
    description:
      "Responsable del QA interno mediante revisión técnica de las nuevas funcionalidades o bugs a corregir por el equipo de tecnología. Al mismo tiempo me involucré como programador en el desarrollo de nuevas funcionalidades para el sistema. Dirigí y coordiné las actividades del área de desarrollo, liderando la planificación de tareas, la gestión de sprints en Jira y la sincronización del equipo para asegurar despliegues exitosos.",
    year: "Ene 2026",
  },
];

export const createdProjects: Project[] = [
  {
    title: "Ponte Pilas",
    description:
      "Proyecto personal de estudio para el examen EAES: cuestionarios de física, matemática, química, historia y un simulador muy parecido al real. Actualmente estoy realizando una migración completamente a React.",
    year: "Marzo 2020",
    image: pontePilasImg,
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Bocaditos La Guaragua",
    description: "Página web para un negocio ecuatoriano de venta de bocaditos (sal y dulce), platos fuertes y servicio de banquetes, con pedidos por WhatsApp.",
    year: "Agosto 2021",
    image: logoBocaditos,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "InnovaGenius",
    description: "Aplicación web para gestionar inventarios, materiales, productos y órdenes de producción. Cuenta con autenticación y control de acceso por roles, interfaz responsiva y validaciones en tiempo real.",
    year: "Ago 2022",
    image: innovaGenius,
    tags: ["PHP", "HTML", "CSS", "JavaScript", "jQuery"],
  },

  {
    title: "Tours Ecuador",
    description:
      "Página web para una agencia de viajes en donde se muestra un catálogo de tours (públicos y privados) con itinerarios, disponibilidad/precios, secciones de contacto, acerca de nosotros y cuenta con traducción inglés/español.",
    year: "Feb 2023",
    image: toursEcuadorImg,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "CashFlow",
    description: "App a medida para gestionar operaciones de una casa de cambios como envíos, retiros, compras/ventas de divisas, cuadre de caja con conteo de billetes, transferencias bancarias y control de saldos diarios.",
    year: "Sep 2025",
    image: cashflowImg,
    tags: ["React", "Express", "Node.js"],
  },
];
