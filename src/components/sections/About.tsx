import { Scene, Reveal, Marquee } from "react-kino";
import "./About.css";

const courses = [
  "Ciberseguridad en el Teletrabajo",
  "Introducción al Desarrollo Web I",
  "Desarrollo de Apps Móviles",
  "Curso Networking Essentials de Cisco Networking Academy®",
  "Taller de Ciberseguridad para Prevenir Ataques Informáticos",
  "Curso de pentesting con Metasploit",
  "Curso de Vite.js",
  "Agilidad y Scrum",
  "Fundamentos de Scrum",
  "HP LIFE - IA para principiantes",
  "Amazon Educate - Introducción a la Nube 101",
];

const skills = [
  "react.png",
  "c++_logo_icon.png",
  "CSharp.svg.png",
  "css_logo_icon.png",
  "html_logo_icon.png",
  "java_logo_icon.png",
  "NodeJS.png",
  "Vitest.svg",
  "jquery_logo_icon.svg",
  "js_logo_icon.png",
  "mysql_logo_icon.png",
  "PostgreSQL.png",
  "SQLite.png",
  "MongoDB.png",
  "php_logo_icon.png",
  "python_logo_icon.png",
  "r_logo_icon.png",
  "excel_logo_icon.png",
];

export function About() {
  return (
    <Scene duration="400vh">
      <div id="about">
        <div className="filter"></div>
        <section className="intro">
          <Reveal animation="fade-up" at={0.05}>
            <h3>Sobre Mí</h3>
          </Reveal>
          <hr />
          <Reveal animation="fade" at={0.15} duration={1000}>
            <p>
              Ingeniero de Software con una apasionada inclinación hacia todo lo relacionado con la tecnología.
              Comprometido con la búsqueda constante de aprendizaje para perfeccionar mis habilidades en programación y
              edición de video
            </p>
          </Reveal>

          <div className="cursos_contenedor" id="courses">
            <div className="title">
              <Reveal animation="fade-up" at={0.25}>
                <h4>Cursos</h4>
              </Reveal>
            </div>
            <hr />
            <div className="cursos_grid">
              {courses.map((course, index) => (
                <Reveal key={index} animation="scale" at={0.3 + index * 0.01} duration={500} delay={index * 50}>
                  <div className="cursos_contenedor_int">
                    <div>
                      <p>{course}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="conocimientos_contenedor" id="knowledge">
            <div className="title">
              <Reveal animation="fade-up" at={0.7}>
                <h4>Conocimientos</h4>
              </Reveal>
              <hr />
            </div>
            <div className="conocimientos_int">
              <Reveal animation="fade" at={0.75} duration={1200}>
                <Marquee speed={25} pauseOnHover>
                  {skills.map((skill, index) => (
                    <img key={index} src={`./icons_programming/${skill}`} alt={skill} />
                  ))}
                </Marquee>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </Scene>
  );
}
