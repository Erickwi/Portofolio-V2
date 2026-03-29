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
