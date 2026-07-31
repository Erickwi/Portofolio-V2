import { lazy, useState, useEffect, useCallback } from "react";
import { useIsMobile } from "../../hooks/useBreakpoint";

const StickyHeader = lazy(() =>
  import("react-kino").then((m) => ({ default: m.StickyHeader }))
);

const ANIMATION_CSS = `
@keyframes overlayIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes overlayOut { from { opacity: 1; } to { opacity: 0; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideDown { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(20px); } }
@keyframes hamburgerIn1 { 0% { transform: translateY(0) rotate(0); } 100% { transform: translateY(7px) rotate(45deg); } }
@keyframes hamburgerIn2 { 0% { opacity: 1; } 100% { opacity: 0; } }
@keyframes hamburgerIn3 { 0% { transform: translateY(0) rotate(0); } 100% { transform: translateY(-7px) rotate(-45deg); } }
@keyframes hamburgerOut1 { 0% { transform: translateY(7px) rotate(45deg); } 100% { transform: translateY(0) rotate(0); } }
@keyframes hamburgerOut2 { 0% { opacity: 0; } 100% { opacity: 1; } }
@keyframes hamburgerOut3 { 0% { transform: translateY(-7px) rotate(-45deg); } 100% { transform: translateY(0) rotate(0); } }
`;

interface Props {
  navItems?: Array<{ label: string; href?: string }>;
}

function scrollTo(href?: string) {
  if (!href) return;
  if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const target = document.querySelector(href);
  if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export function Header({ navItems = [] }: Props) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 280);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_CSS }} />

      <StickyHeader
        threshold={40}
        background="rgba(0, 0, 0, 0.72)"
        blur
        style={{ borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}>
          {!isMobile && navItems.length > 0 && (
            <nav style={{ display: "flex", gap: 20 }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? "#"}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {isMobile && (
            <button
              onClick={() => {
                setOpen(true);
                setClosing(false);
              }}
              aria-label="Abrir menú"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                padding: 8,
              }}>
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#ffffff",
                  borderRadius: 1,
                  animation: open ? "hamburgerIn1 0.25s forwards" : "hamburgerOut1 0.25s forwards",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#ffffff",
                  borderRadius: 1,
                  animation: open ? "hamburgerIn2 0.25s forwards" : "hamburgerOut2 0.25s forwards",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#ffffff",
                  borderRadius: 1,
                  animation: open ? "hamburgerIn3 0.25s forwards" : "hamburgerOut3 0.25s forwards",
                }}
              />
            </button>
          )}
        </div>
      </StickyHeader>

      {isMobile && (open || closing) && (
        <div
          onClick={() => close()}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            background: "rgba(5,5,5,0.96)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            animation: closing ? "overlayOut 0.28s forwards" : "overlayIn 0.3s forwards",
          }}>
          <button
            onClick={() => close()}
            aria-label="Cerrar menú"
            style={{
              position: "absolute",
              top: 16,
              right: 24,
              fontSize: "1.75rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1,
              animation: closing ? "overlayOut 0.28s forwards" : "overlayIn 0.3s forwards",
            }}>
            ✕
          </button>

          <nav
            onClick={(e) => e.stopPropagation()}
            style={{ display: "flex", flexDirection: "column", gap: 28, textAlign: "center" }}>
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href ?? "#"}
                onClick={(e) => {
                  e.preventDefault();
                  close();
                  scrollTo(item.href);
                }}
                style={{
                  fontSize: "1.2rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  animation: closing
                    ? "slideDown 0.28s forwards"
                    : `slideUp 0.3s ${(i + 1) * 0.05}s both`,
                }}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
