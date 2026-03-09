import { Scene, Reveal } from "react-kino";
import "./Habilities.css";

const habilities = [
  "Gestión de proyectos",
  "Edición de video",
  "Gestión de redes sociales",
  "Desarrollo Web Front-End",
];

export function Habilities() {
  return (
    <Scene duration="250vh">
      <div id="habilities">
        <div className="filter"></div>
        <section className="intro">
          <Reveal animation="fade-up" at={0.1}>
            <h3>Habilidades</h3>
          </Reveal>
          <hr />
          <ul>
            {habilities.map((hability, index) => (
              <Reveal key={index} animation="fade-up" at={0.25 + index * 0.1} duration={600} delay={index * 100}>
                <li>{hability}</li>
              </Reveal>
            ))}
          </ul>
        </section>
      </div>
    </Scene>
  );
}
