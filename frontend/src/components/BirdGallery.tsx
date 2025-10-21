import React from "react";

const birds = [
  {
    name: "Colibrí de la Costa",
    img: "/images/colibri.png",
    desc: "Pequeño y veloz, polinizador incansable que mantiene viva la biodiversidad costera.",
  },
  {
    name: "Tiranolete Sureño",
    img: "/images/tiranolete.png",
    desc: "Ave insectívora que habita en los manglares y protege el equilibrio natural del ecosistema.",
  },
  {
    name: "Mielero Amarillo",
    img: "/images/mielero.jpg",
    desc: "De plumaje brillante, se alimenta del néctar y contribuye a la regeneración de la flora local.",
  },
  {
    name: "Eufonia de Pico Grueso",
    img: "/images/eufonia.jpg",
    desc: "Con su canto melodioso, es símbolo de la armonía entre el bosque y sus habitantes.",
  },
];

const BirdGallery: React.FC = () => {
  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.75rem", color: "#0f172a", marginBottom: "1.5rem" }}>
        Aves del Estuario Río Chone
      </h2>

      {/* Galería */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          justifyContent: "center",
        }}
      >
        {birds.map((bird) => (
          <div
            key={bird.name}
            style={{
              background: "#ffffff",
              borderRadius: 12,
              boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
              padding: "1rem",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget.style.transform = "translateY(-4px)"), (e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.08)"))
            }
            onMouseLeave={(e) =>
              ((e.currentTarget.style.transform = "translateY(0)"), (e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.06)"))
            }
          >
            <img
              src={bird.img}
              alt={bird.name}
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 10,
              }}
            />
            <h3 style={{ color: "#0f172a", fontSize: "1.1rem", margin: "0.5rem 0" }}>{bird.name}</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem" }}>{bird.desc}</p>
          </div>
        ))}
      </div>

      {/* Frase final */}
      <p
        style={{
          marginTop: "2rem",
          fontSize: "1.1rem",
          color: "#0f172a",
          fontStyle: "italic",
          maxWidth: 700,
          marginInline: "auto",
        }}
      >
        “Cuidar la flora y fauna no es solo proteger la naturaleza, es preservar la vida que nos rodea.”
      </p>
    </div>
  );
};

export default BirdGallery;
