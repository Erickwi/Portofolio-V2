import { Reveal, ScrollTransform } from "react-kino";
import "./Hero.css";

export function Hero() {
  return (
    <div id="home">
      <div className="filter"></div>
      <section className="intro">
        <Reveal animation="fade-up" at={0}>
          <h3>Erick Ramírez</h3>
        </Reveal>
        <ScrollTransform from={{ scale: 0.8, opacity: 0 }} to={{ scale: 1, opacity: 1 }} at={0.1} span={0.3}>
          <img
            className="imgPerfil"
            src="./img/foto.png"
            alt="Erick Ramírez"
            style={{ width: "200px", height: "auto", borderRadius: "50%" }}
          />
        </ScrollTransform>
        <br />
        <br />
        <hr />
        <Reveal animation="fade" at={0.2} duration={800}>
          <h4>Ingeniero de Software 🧑🏻‍💻</h4>
        </Reveal>
        <Reveal animation="fade-up" at={0.25} duration={800}>
          <p>Actualmente me encuentro aprendiendo desarrollo web Front-End, UX y UI</p>
        </Reveal>

        <Reveal animation="scale" at={0.35} duration={600}>
          <div className="social-media">
            <a href="https://github.com/Erickwi" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x" title="GitHub: Erickwi"></i>
            </a>
            <a href="https://www.instagram.com/erick_.ramirez/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x" title="Instagram: erick_.ramirez"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/erick-ram%C3%ADrez-ortiz-8b02001b0/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-linkedin-in fa-2x" title="LinkedIn"></i>
            </a>
            <a href="mailto:electrictiesto@gmail.com?Subject=Interesado%20en%20Colaborar">
              <i className="fa fa-envelope fa-2x" title="Escríbeme via email"></i>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
