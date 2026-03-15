import "./App.css";
import Portfolio from "./Portfolio";
import { Footer } from "./components/Footer";

import logoBocaditos from "./assets/LOGOBOCADITOS.png";
import innovaGenius from "./assets/innovaGenius.jpg";
import pontePilasImg from "./assets/PORTADAPILAS.png";
import toursEcuadorImg from "./assets/iconToursEcuador.png";
import cashflowImg from "./assets/cashflow.png";

function App() {
  const projects = [
    {
      title: "Bocaditos La Guaragua",
      description:
        "Lideré y coordené el desarrollo completo de la página web, desde la conceptualización hasta la implementación.",
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
      description:
        "Coordiné tareas y plazos, asegurando la entrega oportuna y cumplimiento de los objetivos del proyecto. Además de la supervisión del desarrollo la página web, implementando procesos eficientes y asegurando la satisfacción del cliente",
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
      description:
        "Desarrollo de diferentes módulos para la app de registro, control e informe de actividades de los desarrolladores. Usando Java con React y gestionando los datos con PostgreSQL.",
      year: "2024",
    },
    {
      title: "CashFlow",
      description: "Aplicación web hecha en React con Express.js para cierre de caja de una casa de cambios",
      year: "2026",
      image: cashflowImg,
    },
  ];

  const skills = ["Gestión de proyectos", "Edición de video", "Gestión de redes sociales", "Desarrollo Web Front-End"];

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mí", href: "#about" },
    { label: "Cursos", href: "#courses" },
    { label: "Experiencia", href: "#experience" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <div className="App">
      <main>
        <Portfolio
          name="Erick Ramírez"
          role="Ingeniero de Software 🧑🏻‍💻"
          bio={
            "Ingeniero de Software con una apasionada inclinación hacia todo lo relacionado con la tecnología. Comprometido con la búsqueda constante de aprendizaje para perfeccionar mis habilidades en programación y edición de video. Actualmente me encuentro aprendiendo desarrollo web Front-End, UX y UI."
          }
          accentColor="#00a9e2"
          projects={projects}
          skills={skills}
          contactEmail="electrictiesto@gmail.com"
          navItems={navItems}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
