import { lazy, memo, Suspense } from "react";

const Scene = lazy(() =>
  import("react-kino").then((m) => ({ default: m.Scene }))
);
const Parallax = lazy(() =>
  import("react-kino").then((m) => ({ default: m.Parallax }))
);
const ScrollTransform = lazy(() =>
  import("react-kino").then((m) => ({ default: m.ScrollTransform }))
);

interface Props {
  name: string;
  role: string;
  accentColor?: string;
  showScrollHint?: boolean;
}

export const HeroPanel = memo(function HeroPanel({ name, role, accentColor = "#00a9e2", showScrollHint = true }: Props) {
  return (
    <Suspense fallback={<div style={{ height: "100vh" }} />}>
      <Scene duration="150vh">
        {(progress) => (
          <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            <Parallax speed={0.3}>
              <div
                style={{
                  position: "absolute",
                  inset: "-10%",
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </Parallax>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                padding: "0 24px",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}>
              <ScrollTransform
                from={{ rotateX: 0, rotateY: 0, scale: 1, y: 0, opacity: 1 }}
                to={{ rotateX: 40, rotateY: -12, scale: 0.85, y: -50, opacity: 0 }}
                span={0.7}
                easing="ease-out">
                <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, margin: 0 }}>{name}</h1>
                <p
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: accentColor, marginTop: 12, fontWeight: 500 }}>
                  {role}
                </p>
              </ScrollTransform>

              {showScrollHint && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 40,
                    opacity: Math.max(0, 1 - progress * 5),
                    fontSize: "1.5rem",
                    color: "rgba(255,255,255,0.4)",
                  }}>
                  &#8595;
                </div>
              )}
            </div>
          </div>
        )}
      </Scene>
    </Suspense>
  );
});
