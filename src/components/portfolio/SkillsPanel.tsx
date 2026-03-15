import { Marquee } from "react-kino";

interface Props {
  skills: string[];
  marqueeItems?: string[];
}

export function SkillsPanel({ skills, marqueeItems }: Props) {
  const ticker = marqueeItems ?? skills;

  return (
    <>
      {ticker.length > 0 && (
        <div
          style={{
            borderTop: "0.5px solid rgba(255,255,255,0.08)",
            borderBottom: "0.5px solid rgba(255,255,255,0.08)",
            padding: "20px 0",
          }}>
          <Marquee speed={30}>
            {ticker.map((item) => (
              <span
                key={item}
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  whiteSpace: "nowrap",
                  marginRight: 24,
                }}>
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      )}
    </>
  );
}

export default SkillsPanel;
