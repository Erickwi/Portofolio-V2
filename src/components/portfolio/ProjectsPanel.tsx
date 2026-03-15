import { Scene } from "react-kino";

interface Project {
  title: string;
  description: string;
  image?: string;
  year?: string | number;
  tags?: string[];
}

interface Props {
  projects: Project[];
  accentColor?: string;
}

export function ProjectsPanel({ projects, accentColor = "#00a9e2" }: Props) {
  return (
    <>
      {projects.length > 0 && (
        <Scene duration={`${Math.max(projects.length * 120, 400)}vh`}>
          {(progress) => {
            const n = projects.length;
            const active = Math.min(n - 1, Math.floor(progress * n));
            const fill = Math.min(100, n > 1 ? ((progress * n) / (n - 1)) * 100 : progress * 100);

            return (
              <section
                style={{
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  paddingTop: "clamp(160px, 10vh, 120px)",
                  maxWidth: 1080,
                  margin: "0 auto",
                  padding: "0 clamp(16px, 4vw, 48px)",
                }}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 24,
                  }}>
                  Experiencia
                </p>

                <div style={{ display: "flex", gap: "clamp(20px, 4vw, 80px)" }}>
                  <div style={{ width: "clamp(80px, 22vw, 180px)", flexShrink: 0, position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "clamp(6px, 1.2vw, 10px)",
                        top: "clamp(6px, 1.2vw, 10px)",
                        bottom: "clamp(6px, 1.2vw, 10px)",
                        width: 2,
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 1,
                      }}>
                      <div
                        style={{
                          width: "100%",
                          height: `${fill}%`,
                          background: accentColor,
                          transition: "height 0.4s ease-out",
                          borderRadius: 1,
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: 300,
                      }}>
                      {projects.map((project, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "clamp(8px, 2vw, 18px)",
                            position: "relative",
                            zIndex: 1,
                            cursor: "default",
                          }}>
                          <div
                            style={{
                              width: "clamp(14px, 3vw, 22px)",
                              height: "clamp(14px, 3vw, 22px)",
                              borderRadius: "50%",
                              background: i <= active ? accentColor : "rgba(255,255,255,0.08)",
                              boxShadow: i === active ? `0 0 0 4px #050505, 0 0 20px ${accentColor}40` : "none",
                              transition: "all 0.4s",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontSize: "clamp(12px, 2vw, 15px)",
                              fontWeight: i === active ? 600 : 400,
                              color: i <= active ? "#f5f5f7" : "rgba(255,255,255,0.25)",
                              transition: "all 0.4s",
                            }}>
                            {project.year ?? ""}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ flex: 1, position: "relative", minHeight: 300 }}>
                    {projects.map((project, i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          opacity: i === active ? 1 : 0,
                          transform: `translateY(${i === active ? 0 : i > active ? 24 : -24}px)`,
                          transition: "opacity 0.5s, transform 0.5s",
                          pointerEvents: i === active ? "auto" : "none",
                        }}>
                        <div>
                          <h3
                            style={{
                              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                              fontWeight: 700,
                              margin: "0 0 14px",
                              color: "#f5f5f7",
                            }}>
                            {project.title}
                          </h3>

                          <p
                            style={{
                              fontSize: "1rem",
                              color: "rgba(255,255,255,0.5)",
                              lineHeight: 1.6,
                              margin: "0 0 12px",
                              maxWidth: 720,
                            }}>
                            {project.description}
                          </p>

                          {project.image && (
                            <div style={{ marginTop: 12 }}>
                              <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                  width: "100%",
                                  maxWidth: 280,
                                  maxHeight: 360,
                                  height: "auto",
                                  objectFit: "cover",
                                  borderRadius: 8,
                                  boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }}
        </Scene>
      )}
    </>
  );
}

export default ProjectsPanel;
