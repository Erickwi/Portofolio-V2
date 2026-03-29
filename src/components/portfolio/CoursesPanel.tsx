import { lazy, memo, Suspense } from "react";
import { useIsMobile } from "../../hooks/useBreakpoint";
import { courses } from "../../data/courses";

const Scene = lazy(() =>
  import("react-kino").then((m) => ({ default: m.Scene }))
);

export const CoursesPanel = memo(function CoursesPanel() {
  const isMobile = useIsMobile();

  return (
    <>
      {courses.length > 0 && (
        <Suspense fallback={<div style={{ minHeight: 400 }} />}>
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
                    padding: "40px clamp(8px, 4vw, 48px)",
                    overflowX: "hidden",
                    boxSizing: "border-box",
                    scrollMarginTop: "clamp(140px, 14vh, 220px)",
                  }}>
                  <div style={{ textAlign: "center", marginBottom: 18 }}>
                    <h3 style={{ margin: 0, color: "#fff", fontSize: "2.25rem" }}>Cursos</h3>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: isMobile ? 6 : 20,
                      alignItems: "stretch",
                    }}>
                    {courses.map((c, i) => {
                      const visible = i <= active;
                      return (
                        <div
                          key={i}
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 10,
                            minHeight: isMobile ? 80 : 160,
                            padding: isMobile ? 8 : 16,
                            boxShadow: i === active ? `0 8px 30px rgba(0,0,0,0.6)` : "none",
                            transform: visible ? "none" : "translateY(18px)",
                            transition: "all 0.45s ease",
                            opacity: visible ? 1 : 0,
                            pointerEvents: visible ? undefined : "none",
                          }}>
                          <div style={{ display: "flex", gap: isMobile ? 6 : 12, alignItems: "center", justifyContent: "center", flexDirection: isMobile ? "column" : "row", height: "100%" }}>
                            <img
                              src={c.img}
                              alt={c.title}
                              loading="lazy"
                              style={{ width: isMobile ? 40 : 64, height: isMobile ? 40 : 64, objectFit: "contain", borderRadius: 8 }}
                            />
                            <h4 style={{ margin: 0, fontSize: isMobile ? "0.75rem" : "1rem", color: "#ffffff", textAlign: isMobile ? "center" : "left", wordBreak: "break-word", lineHeight: 1.3 }}>{c.title}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            }}
          </Scene>
        </Suspense>
      )}
    </>
  );
});
