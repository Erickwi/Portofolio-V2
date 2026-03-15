import { Scene } from "react-kino";

import incibe from "../../assets/INCIBE.png";
import logoUA from "../../assets/logo-ua.jpg";
import logoUCM from "../../assets/logo_ucm.png";
import cisco from "../../assets/Cisco_Systems.png";
import platzi from "../../assets/Platzi_Logo.webp";
import logoAcademia from "../../assets/Logo-Academia.png";
import alaimo from "../../assets/Alaimo Labs.png";
import hplife from "../../assets/hplife.png";
import awsEducate from "../../assets/aws_educate.png";

interface Course {
  title: string;
  img: string;
  desc?: string;
}

const courses: Course[] = [
  { title: "Ciberseguridad en el Teletrabajo", img: incibe },
  { title: "Introducción al Desarrollo Web I", img: logoUA },
  { title: "Desarrollo de Apps Móviles", img: logoUCM },
  { title: "Networking Essentials (Cisco)", img: cisco },
  { title: "Taller de Ciberseguridad", img: platzi },
  { title: "Pentesting con Metasploit", img: platzi },
  { title: "Curso de Vite.js", img: platzi },
  { title: "Agilidad y Scrum", img: logoAcademia },
  { title: "Fundamentos de Scrum", img: alaimo },
  { title: "HP LIFE - IA para principiantes", img: hplife },
  { title: "Amazon Educate - Introducción a la Nube 101", img: awsEducate },
];

export function CoursesPanel() {
  return (
    <>
      {courses.length > 0 && (
        <Scene duration={`${Math.max(courses.length * 60, 300)}vh`}>
          {(progress) => {
            const n = courses.length;
            const active = Math.min(n - 1, Math.floor(progress * n));

            return (
              <section
                id="courses"
                style={{
                  maxWidth: 1080,
                  margin: "48px auto 0",
                  padding: "40px clamp(16px, 4vw, 48px)",
                  /* ensure anchor-scroll positions this section below sticky header */
                  scrollMarginTop: "clamp(140px, 14vh, 220px)",
                }}>
                <div style={{ textAlign: "center", marginBottom: 18 }}>
                  <h3 style={{ margin: 0, color: "#fff", fontSize: "2.25rem" }}>Cursos</h3>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 20,
                    alignItems: "start",
                  }}>
                  {courses.map((c, i) => {
                    const visible = i <= active;
                    return (
                      <div
                        key={i}
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          padding: 16,
                          borderRadius: 10,
                          minHeight: 160,
                          boxShadow: i === active ? `0 8px 30px rgba(0,0,0,0.6)` : "none",
                          transform: visible ? "none" : "translateY(18px)",
                          transition: "all 0.45s ease",
                          opacity: visible ? 1 : 0,
                          pointerEvents: visible ? undefined : "none",
                        }}>
                        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                          <img
                            src={c.img}
                            alt={c.title}
                            loading="lazy"
                            style={{ width: 64, height: 64, objectFit: "contain", borderRadius: 8 }}
                          />
                          <div>
                            <h4 style={{ margin: 0, fontSize: "1rem", color: "#ffffff" }}>{c.title}</h4>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          }}
        </Scene>
      )}
    </>
  );
}

export default CoursesPanel;
