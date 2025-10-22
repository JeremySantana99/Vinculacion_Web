// esta es la pagina principal cuando el usuario ya ha iniciado sesion, es la pagina que llama a los demas componentes, es la pagina principal
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import WeatherWidget from "../components/WeatherWidget"; 
import CuriousFacts from "../components/CuriousFacts"; 
import BirdGallery from "../components/BirdGallery"; 
import Footer from "../components/Footer"; 
const VIDEO_CHANGE_INTERVAL_MS = 6000; // aqui podemos cambiat eñ tiempo que puse de los 3 videos.
const CROSSFADE_MS = 600; 

const HomePrivate: React.FC = () => {
  const videos = ["/videos/aves1.mp4", "/videos/aves2.mp4", "/videos/aves3.mp4"];

  const [index, setIndex] = useState(0);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [fade, setFade] = useState(false);
  const slotRefs = [useRef<HTMLVideoElement | null>(null), useRef<HTMLVideoElement | null>(null)];

  
  useEffect(() => {
    if (slotRefs[0].current) slotRefs[0].current.src = videos[0];
    if (slotRefs[1].current) slotRefs[1].current.src = videos[1 % videos.length];
  }, []); 

  // Ciclo automático de cambio de videos
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % videos.length;
      const nextSlot: 0 | 1 = activeSlot === 0 ? 1 : 0;
      const nextVideoEl = slotRefs[nextSlot].current;

      if (nextVideoEl) {
        nextVideoEl.src = videos[nextIndex];
        nextVideoEl.load();
        nextVideoEl.currentTime = 0;
        const p = nextVideoEl.play();
        if (p && typeof p.catch === "function") p.catch(() => {});  
      }

      setFade(true);

      setTimeout(() => {
        setActiveSlot(nextSlot);
        setIndex(nextIndex);
        setFade(false);
      }, CROSSFADE_MS);
    }, VIDEO_CHANGE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [index, activeSlot, videos]); 

  // Estilos base
  const containerStyle: React.CSSProperties = {
    padding: "2rem",
    maxWidth: 1200,
    margin: "0 auto",
  };

  const heroStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "3.5rem 2rem",
    borderRadius: 12,
    background: "linear-gradient(135deg, rgba(232,245,255,0.9), rgba(255,255,255,0.95))",
    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
    marginBottom: "2rem",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "2.125rem",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "0.5rem",
  };

  const subtitleStyle: React.CSSProperties = {
    color: "#475569",
    fontSize: "1.05rem",
    marginBottom: "1.25rem",
  };

  const btnPrimary: React.CSSProperties = {
    backgroundColor: "#0ea5a0",
    color: "#fff",
    padding: "0.6rem 1.1rem",
    borderRadius: 8,
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    marginRight: "0.75rem",
  };

  const btnGhost: React.CSSProperties = {
    background: "transparent",
    color: "#0f172a",
    padding: "0.45rem 1rem",
    borderRadius: 8,
    border: "1px solid #e6edf0",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  };

  const videoWrapperStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: 490,
    minHeight: 380,
    borderRadius: 12,
    overflow: "hidden",
    background: "#f8fafc",
    boxShadow: "0 6px 20px rgba(2,6,23,0.04)",
    marginBottom: "1.5rem",
  };

  const videoStyleBase: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    left: 0,
    top: 0,
    transition: `opacity ${CROSSFADE_MS}ms ease-in-out`,
  };

  return (
    <main style={{ minHeight: "60vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: "1 0 auto" }}>
        <div style={containerStyle}>
          {/* HERO */}
          <section style={heroStyle}>
            <h1 style={titleStyle}>
              Bienvenido al Biocorredor Estuario Río Chone - La Segua Cordillera El Bálsamo
            </h1>
            <p style={subtitleStyle}>
              Descubre la biodiversidad, los senderos y las experiencias únicas que te conectan con la naturaleza.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 8 }}>
              <Link to="/tours" style={btnPrimary}>
                Explorar Tours
              </Link>

              <Link to="/mapa" style={btnGhost}>
                Ver Mapa Ecológico
              </Link>
            </div>
          </section>

          {/* VIDEOS */}
          <section style={{ marginTop: 18 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 18, color: "#0f172a" }}> </h3>
              <small style={{ color: "#64748b" }}></small>
            </div>

            <div style={videoWrapperStyle}>
              {/* slot 0 */}
              <video
                ref={slotRefs[0]}
                muted
                playsInline
                loop={false}
                style={{
                  ...videoStyleBase,
                  opacity: activeSlot === 0 && !fade ? 1 : 0,
                  zIndex: activeSlot === 0 ? 2 : 1,
                }}
              />

              {/* slot 1 */}
              <video
                ref={slotRefs[1]}
                muted
                playsInline
                loop={false}
                style={{
                  ...videoStyleBase,
                  opacity: activeSlot === 1 && !fade ? 1 : 0,
                  zIndex: activeSlot === 1 ? 2 : 1,
                }}
              />
            </div>
          </section>

          {/* CLIMA */}
          <section style={{ marginTop: 18 }}>
            <WeatherWidget />
          </section>

          {/* DATOS CURIOSOS */}
          <section style={{ marginTop: 24 }}>
            <CuriousFacts />
          </section>

          {/* GALERÍA DE AVES */}
          <section style={{ marginTop: 40 }}>
            <BirdGallery />
          </section>
        </div>
      </div>

      {/* FOOTER solo visible en Home */}
      <Footer />
    </main>
  );
};

export default HomePrivate;
