import { Scene, Reveal } from "react-kino";
import "./Projects.css";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  link,
  primaryColor = "#2e2e2e",
  secondaryColor = "#ff6c6c",
}) => {
  return (
    <figure
      className="card c4-izmir c4-border-ccc-2 c4-gradient-top"
      style={
        {
          "--primary-color": primaryColor,
          "--secondary-color": secondaryColor,
          "--border-width": "3px",
        } as React.CSSProperties
      }>
      <img className="work-img" src={image} alt={title} />
      <figcaption>
        <div className="work-content">
          <div style={{ fontWeight: "800" }}>{title}</div>
          <p>{description}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button>Ver Proyecto</button>
            </a>
          )}
        </div>
      </figcaption>
    </figure>
  );
};

const projects = [
  {
    image: "./img/PORTADAPILAS.png",
    title: "Pilas",
    description: "Proyecto de gestión de contenido",
    primaryColor: "#f99430",
    secondaryColor: "#ffb56c",
  },
  {
    image: "./img/LOGOBOCADITOS.png",
    title: "Bocaditos La Guaragua",
    description: "Página web para restaurante",
    primaryColor: "#2e2e2e",
    secondaryColor: "#ff6c6c",
  },
  {
    image: "./img/innovaGenius.jpg",
    title: "InnovaGenius",
    description: "Plataforma de innovación",
    primaryColor: "#2e2e2e",
    secondaryColor: "#ffb56c",
  },
  {
    image: "./img/iconToursEcuador.png",
    title: "Tours Ecuador",
    description: "Plataforma de turismo",
  },
  {
    image: "./img/cashflow.png",
    title: "CashFlow",
    description: "Aplicación de finanzas personales",
    primaryColor: "#0e8e2d",
    secondaryColor: "#68c46a",
  },
];

const contentProjects = [
  {
    image: "./img/PORTADAPILAS.png",
    title: "Pilas - Contenido",
    description: "Contenido creativo para redes sociales",
  },
  {
    image: "./img/LOGOBOCADITOS.png",
    title: "Bocaditos",
    description: "Videos y contenido para redes",
  },
  {
    image: "./img/dlayoni.png",
    title: "DeLaYoni",
    description: "Estrategia de contenido digital",
    primaryColor: "#2e2e2e",
    secondaryColor: "#2fe3f4",
  },
  {
    image: "./img/growwithme.jpg",
    title: "Grow With Me",
    description: "Contenido motivacional",
    primaryColor: "#3381e7",
    secondaryColor: "#ff8ce4",
  },
];

export function Projects() {
  return (
    <Scene duration="500vh">
      <div id="projects">
        <Reveal animation="fade-up" at={0.05}>
          <h3>
            Mis Proyectos
            <hr />
          </h3>
        </Reveal>
        <Reveal animation="fade" at={0.15}>
          <p>
            Unos cuantos proyectos que he desarrollado tanto personales a lo largo de mis estudios universitarios como
            para pequeñas empresas, emprendimientos
          </p>
        </Reveal>
        <div className="work-box">
          <div className="work">
            {projects.map((project, index) => (
              <Reveal key={index} animation="scale" at={0.25 + index * 0.03} duration={600} delay={index * 50}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal animation="fade-up" at={0.65}>
          <h3 style={{ marginTop: "60px" }}>
            Proyectos como Creador de Contenido
            <hr />
          </h3>
        </Reveal>
        <Reveal animation="fade" at={0.75}>
          <p>
            También como un pasatiempo me he dedicado a la creación de contenido tanto para proyectos personales como de
            amigos o emprendimientos
          </p>
        </Reveal>
        <div className="work-box">
          <div className="work">
            {contentProjects.map((project, index) => (
              <Reveal key={index} animation="scale" at={0.8 + index * 0.03} duration={600} delay={index * 50}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Scene>
  );
}
