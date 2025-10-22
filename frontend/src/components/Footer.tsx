import React from "react";

const Footer: React.FC = () => {     // este componente es solo el componente de la barra inferior o pie de pagina  
  return (                           // lo puse por separado por si se necesita colocar la misma barra en las otras paginas o opciones.
    <footer
      style={{
        backgroundColor: "white",
        color: "#111827",
        textAlign: "center",
        padding: "1.25rem",
        fontSize: "0.95rem",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
        marginTop: "2.5rem",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div>Ecuador, Manabí, Chone</div>
      <div> contacto@biocorredorchone.ec</div>
      <div style={{ marginTop: "0.5rem", fontWeight: 600 }}>
        Biocorredor Estuario Río Chone - La Segua - Cordillera El Bálsamo |
        Conservando la vida silvestre del Ecuador
      </div>
    </footer>
  );
};

export default Footer;
