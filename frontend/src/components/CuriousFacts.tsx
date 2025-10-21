// src/components/CuriousFacts.tsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const facts = [
  "¿Sabías que La Segua es uno de los humedales más importantes del Ecuador?",
  "En el estuario habitan más de 200 especies de aves.",
  "¿Sabías que el humedal La Segua fue declarado sitio Ramsar en el año 2000?",
  "En la zona del estuario se pueden observar especies migratorias desde Norteamérica.",
  "¿Sabías que los manglares del estuario son vitales para la reproducción de peces y crustáceos?",
];

const CuriousFacts: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % facts.length);
  const prev = () => setIndex((prev) => (prev - 1 + facts.length) % facts.length);

  useEffect(() => {
    const timer = setInterval(next, 3000); // cambia cada 8s
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        marginTop: "1.5rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Texto principal sin barra de fondo */}
      <p
        style={{
          fontSize: "1.3rem",
          fontWeight: 600,
          color: "#0f172a",
          textShadow: "0 1px 3px rgba(0,0,0,0.1)",
          transition: "opacity 0.5s ease",
          minHeight: "2.5rem",
        }}
      >
        {facts[index]}
      </p>

      {/* Flechas sin fondo circular */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <button
          onClick={prev}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            pointerEvents: "auto",
          }}
          aria-label="Anterior"
        >
          <ChevronLeft size={28} color="#0ea5a0" />
        </button>

        <button
          onClick={next}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            pointerEvents: "auto",
          }}
          aria-label="Siguiente"
        >
          <ChevronRight size={28} color="#0ea5a0" />
        </button>
      </div>
    </div>
  );
};

export default CuriousFacts;
