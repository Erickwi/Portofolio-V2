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
}

export const projects: Project[] = [
  {
    title: "Bocaditos La Guaragua",
    description: "Lideré y coordiné el desarrollo completo de la página web, desde la conceptualización hasta la implementación.",
    year: "2021",
    image: logoBocaditos,
  },
  {
    title: "InnovaGenius",
    description: "Proyecto Inventario Inmobiliaria",
    year: "2022",
    image: innovaGenius,
  },
  {
    title: "Ponte Pilas",
    description: "Proyecto de gestión de contenido (Ponte Pilas)",
    year: "2023",
    image: pontePilasImg,
  },
  {
    title: "Tours Ecuador",
    description: "Coordiné tareas y plazos, asegurando la entrega oportuna y cumplimiento de los objetivos del proyecto. Además de la supervisión del desarrollo la página web, implementando procesos eficientes y asegurando la satisfacción del cliente",
    year: "2023",
    image: toursEcuadorImg,
  },
  {
    title: "Proyecto vinculación con la sociedad - ACNUR",
    description: "Desarrollé la interfaz de usuario con React para la tienda en línea de Prowess MOOC.",
    year: "2023",
  },
  {
    title: "Prácticas - Softevo S.A",
    description: "Desarrollo de diferentes módulos para la app de registro, control e informe de actividades de los desarrolladores. Usando Java con React y gestionando los datos con PostgreSQL.",
    year: "2024",
  },
  {
    title: "CashFlow",
    description: "Aplicación web hecha en React con Express.js para cierre de caja de una casa de cambios",
    year: "2026",
    image: cashflowImg,
  },
];
