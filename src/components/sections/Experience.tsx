import { Scene, Reveal } from "react-kino";
import "./Experience.css";

const experiences = [
  {
    date: "Bocaditos La Guaragua (2021)",
    title: "Líder y Desarrollador Principal de Proyecto Web - Creador de Contenido",
    description: [
      "Lideré el desarrollo de una página web para la promoción del negocio",
      "Creé contenido visual para redes sociales",
    ],
  },
  {
    date: "DeLaYoni (2021-2024)",
    title: "Creador de contenido",
    description: [
      "Diseño y creación de contenido para redes sociales.",
      "Implementación de estrategias creativas para aumentar la visibilidad de marca",
    ],
  },
  {
    date: "Tours Ecuador (2023-2024)",
    title: "Líder y Desarrollador Principal de Proyecto Web",
    description: [
      "Coordiné tareas y plazos, asegurando la entrega oportuna y cumplimiento de los objetivos del proyecto",
      "Supervisión del desarrollo de la página web, implementando mejores prácticas",
    ],
  },
  {
    date: "Proyecto vinculación con la sociedad - ACNUR (2023)",
    title: "Estudiante de Apoyo - Departamento Cursos MOOC",
    description: ["Apoyo en el desarrollo de cursos en línea"],
  },
  {
    date: "Prácticas Pre profesionales - Softevo S.A (2024)",
    title: "Practicante - Departamento de operaciones",
    description: ["Experiencia en implementación de soluciones de software"],
  },
];

export function Experience() {
  return (
    <Scene duration="450vh">
      <div id="experience">
        <div className="filter"></div>
        <section className="intro">
          <Reveal animation="fade-up" at={0.05}>
            <h3>Experiencia</h3>
          </Reveal>
          <hr />
          <div id="timeline" className="timeline">
            {experiences.map((exp, index) => (
              <Reveal
                key={index}
                animation={index % 2 === 0 ? "fade-up" : "fade-down"}
                at={0.15 + index * 0.12}
                duration={700}
                delay={index * 100}>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p className="timeline-date">{exp.date}</p>
                    <h4>{exp.title}</h4>
                    <ul>
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </Scene>
  );
}
