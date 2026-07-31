import { type CSSProperties } from "react";
import { Scene, TextReveal, Progress } from "react-kino";
import { Header } from "./components/portfolio/Header";
import { HeroPanel } from "./components/portfolio/HeroPanel";
import { ProjectsPanel } from "./components/portfolio/ProjectsPanel";
import { CreatedProjectsPanel } from "./components/portfolio/CreatedProjectsPanel";
import SkillsPanel from "./components/portfolio/SkillsPanel";
import { TechMarquee } from "./components/portfolio/TechMarquee";
import { CoursesPanel } from "./components/portfolio/CoursesPanel";
import ContactPanel from "./components/portfolio/ContactPanel";

interface PortfolioProps {
  name: string;
  role: string;
  bio: string;
  accentColor?: string;
  projects?: Array<{ title: string; description: string; year?: string | number; tags?: string[] }>;
  createdProjects?: Array<{ title: string; description: string; year?: string | number; image?: string; tags?: string[] }>;
  skills?: string[];
  contactEmail?: string;
  navItems?: Array<{ label: string; href?: string }>;
  showScrollHint?: boolean;
  marqueeItems?: string[];
}

export function Portfolio({
  name,
  role,
  bio,
  accentColor = "#00a9e2",
  projects = [],
  createdProjects = [],
  skills = [],
  contactEmail,
  navItems,
  showScrollHint = true,
  marqueeItems,
}: PortfolioProps) {
  const baseStyle: CSSProperties = {
    margin: 0,
    padding: 0,
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial",
    color: "#ffffff",
    background: "#050505",
  };

  const sectionCenter: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "0 24px",
    textAlign: "center",
  };

  return (
    <div style={baseStyle}>
      <Progress color={accentColor} position="top" />

      <Header navItems={navItems} />

      {/* Hero */}
      <HeroPanel name={name} role={role} accentColor={accentColor} showScrollHint={showScrollHint} />

      {/* Bio */}
      <Scene duration="200vh">
        <div id="about" style={sectionCenter}>
          <div style={{ maxWidth: 750, fontSize: "20px" }}>
            <TextReveal mode="word" at={0.05} span={0.85} color="#ffffff" dimColor="rgba(255,255,255,0.1)">
              {bio}
            </TextReveal>
          </div>
        </div>
      </Scene>

      {/* Technologies marquee under bio */}
      <TechMarquee />

      {/* Courses (reveal cards) */}
      <CoursesPanel />

      {/* Projects timeline simplified */}
      <ProjectsPanel projects={projects} accentColor={accentColor} />

      {/* Projects I created (horizontal scroll) */}
      <CreatedProjectsPanel projects={createdProjects} accentColor={accentColor} />

      {/* Skills (marquee + horizontal panels) */}
      <SkillsPanel skills={skills} marqueeItems={marqueeItems} />

      {/* Contact center */}
      <ContactPanel contactEmail={contactEmail} />
    </div>
  );
}

export default Portfolio;
