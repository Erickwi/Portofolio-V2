import { lazy, memo, Suspense } from "react";

const Scene = lazy(() => import("react-kino").then((m) => ({ default: m.Scene })));

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

const techColors: Record<string, string> = {
  HTML: "#FF5C33",
  CSS: "#3D8BFF",
  JavaScript: "#FFE53D",
  jQuery: "#2E8BD8",
  PHP: "#9A9ED4",
  React: "#7BE7FF",
  Express: "#ffffff",
  "Node.js": "#43C65B",
};

function getTechColor(tag: string): string {
  const normalized = tag.toLowerCase();
  for (const [name, color] of Object.entries(techColors)) {
    if (name.toLowerCase() === normalized) return color;
  }
  return "#ffffff";
}

export const CreatedProjectsPanel = memo(function CreatedProjectsPanel({ projects, accentColor = "#00a9e2" }: Props) {
  const n = projects.length;

  return (
    <>
      {n > 0 && (
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <section
            id="projects"
            style={{
              position: "relative",
              scrollMarginTop: "clamp(140px, 14vh, 220px)",
            }}>
            <Scene duration={`${Math.max(n * 100, 300)}vh`}>
              {(progress) => (
                <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      flexShrink: 0,
                      textAlign: "center",
                      padding: "clamp(56px, 6vh, 72px) clamp(16px, 4vw, 48px) 0",
                    }}>
                    <h3
                      style={{
                        margin: "0 0 clamp(28px, 4vh, 48px)",
                        color: "#ffffff",
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      }}>
                      Proyectos que he creado
                    </h3>
                  </div>

                  <div style={{ flex: 1, minHeight: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        height: "100%",
                        willChange: "transform",
                        transform: `translateX(-${(progress * (n - 1) * 100).toFixed(3)}vw)`,
                      }}>
                      {projects.map((project) => (
                        <div
                          key={project.title}
                          style={{
                            width: "100vw",
                            flexShrink: 0,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0 clamp(16px, 4vw, 48px)",
                            boxSizing: "border-box",
                          }}>
                          <div style={{ maxWidth: 720, width: "100%", textAlign: "center" }}>
                            {project.image && (
                              <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                style={{
                                  width: "100%",
                                  maxHeight: "38vh",
                                  height: "auto",
                                  objectFit: "contain",
                                  borderRadius: 12,
                                  boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
                                  marginBottom: 24,
                                }}
                              />
                            )}

                            <h4 style={{ margin: "0 0 6px", color: "#f5f5f7", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                              {project.title}
                            </h4>

                            {project.year && (
                              <p
                                style={{
                                  margin: "0 0 18px",
                                  fontSize: "0.85rem",
                                  color: accentColor,
                                  fontWeight: 600,
                                }}>
                                {project.year}
                              </p>
                            )}

                            {project.tags && project.tags.length > 0 && (
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 8,
                                  justifyContent: "center",
                                  marginBottom: 18,
                                }}>
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    style={{
                                      fontSize: "0.75rem",
                                      padding: "5px 12px",
                                      borderRadius: 999,
                                      border: `1px solid ${getTechColor(tag)}66`,
                                      color: getTechColor(tag),
                                      background: `${getTechColor(tag)}14`,
                                      fontWeight: 600,
                                      boxShadow: "0 0 8px rgba(255,255,255,0.55)",
                                    }}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            <p
                              style={{
                                margin: 0,
                                fontSize: "1rem",
                                color: "rgba(255,255,255,0.55)",
                                lineHeight: 1.6,
                                maxWidth: 560,
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}>
                              {project.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Scene>
          </section>
        </Suspense>
      )}
    </>
  );
});

export default CreatedProjectsPanel;
