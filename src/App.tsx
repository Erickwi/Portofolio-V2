import "./App.css";
import Portfolio from "./Portfolio";
import { Footer } from "./components/Footer";
import { projects } from "./data/projects";

const skills = ["Gestión de proyectos", "Edición de video", "Gestión de redes sociales", "Desarrollo Web Front-End"];

const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Cursos", href: "#courses" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

function App() {
  return (
    <div className="App">
      <main>
        <Portfolio
          name="Erick Ramírez"
          role="Ingeniero de Software 🧑🏻‍💻"
          bio={
            "Ingeniero de Software, apasionado por la tecnología, la programación y el desarrollo web. Enfocado en fusionar creatividad con eficiencia técnica para diseñar soluciones innovadoras que mejoren la experiencia del usuario. Con experiencia en desarrollo frontend, especialmente en React, y un fuerte compromiso con el aprendizaje continuo para potenciar mis habilidades y aportar valor en proyectos tecnológicos"
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
