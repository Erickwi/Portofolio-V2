import { Scene, Reveal } from "react-kino";
import "./Contact.css";

export function Contact() {
  return (
    <Scene duration="200vh">
      <div id="contact">
        <Reveal animation="fade-up" at={0.1}>
          <h3>Contacto</h3>
        </Reveal>
        <hr />
        <Reveal animation="fade" at={0.2}>
          <p>Si quieres ponerte en contacto conmigo aqui te dejo varios medios</p>
        </Reveal>
        <Reveal animation="scale" at={0.3} duration={800}>
          <div className="social-media">
            <a href="https://github.com/Erickwi" target="_blank" rel="noopener noreferrer" title="GitHub: Erickwi">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/erick_.ramirez/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram: erick_.ramirez">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/erick-ram%C3%ADrez-ortiz-8b02001b0/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a href="mailto:electrictiesto@gmail.com?Subject=Interesado%20en%20Colaborar" title="Escríbeme via email">
              <i className="fa fa-envelope fa-2x"></i>
            </a>
          </div>
        </Reveal>
      </div>
    </Scene>
  );
}
