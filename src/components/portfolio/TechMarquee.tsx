import { lazy, memo, Suspense } from "react";

const Marquee = lazy(() =>
  import("react-kino").then((m) => ({ default: m.Marquee }))
);

import reactIcon from "../../assets/react.png";
import cPlusIcon from "../../assets/c++_logo_icon.png";
import csharpIcon from "../../assets/CSharp.svg.png";
import cssIcon from "../../assets/css_logo_icon.png";
import htmlIcon from "../../assets/html_logo_icon.png";
import javaIcon from "../../assets/java_logo_icon.png";
import nodeIcon from "../../assets/NodeJS.png";
import vitestIcon from "../../assets/Vitest.svg";
import jqueryIcon from "../../assets/jquery_logo_icon.svg";
import jsIcon from "../../assets/js_logo_icon.png";
import mysqlIcon from "../../assets/mysql_logo_icon.png";
import postgresIcon from "../../assets/PostgreSQL.png";
import sqliteIcon from "../../assets/SQLite.png";
import mongoIcon from "../../assets/MongoDB.png";
import phpIcon from "../../assets/php_logo_icon.png";
import pythonIcon from "../../assets/python_logo_icon.png";
import rIcon from "../../assets/r_logo_icon.png";
import excelIcon from "../../assets/excel_logo_icon.png";

interface Props {
  icons?: string[];
  height?: number;
}

export const TechMarquee = memo(function TechMarquee({ icons, height = 56 }: Props) {
  const defaultIcons = icons ?? [
    reactIcon,
    cPlusIcon,
    csharpIcon,
    cssIcon,
    htmlIcon,
    javaIcon,
    nodeIcon,
    vitestIcon,
    jqueryIcon,
    jsIcon,
    mysqlIcon,
    postgresIcon,
    sqliteIcon,
    mongoIcon,
    phpIcon,
    pythonIcon,
    rIcon,
    excelIcon,
  ];

  return (
    <div
      style={{
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        padding: "18px 0",
        paddingBottom: 98,
      }}>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <h4
          style={{
            margin: 0,
            color: "#ffffff",
            fontSize: "2.125rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: 0.95,
            fontWeight: 600,
          }}>
          Conocimientos
        </h4>
      </div>
      <Suspense fallback={<div style={{ height: 56 }} />}>
        <Marquee speed={40}>
          {defaultIcons.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`tech-${i}`}
              style={{
                height,
                width: "auto",
                marginRight: 18,
                display: "inline-block",
                filter: "grayscale(0)",
              }}
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = "none";
              }}
            />
          ))}
        </Marquee>
      </Suspense>
    </div>
  );
});

export default TechMarquee;
