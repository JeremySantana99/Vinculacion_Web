import React, { useEffect, useState } from "react";
import axios from "axios";
// este archivo es el componente que muestra el clima en mi interfaz de inicio 
// coloque un api en el backend que obtiene los datos del clima desde openweathermap
interface WeatherData {
  main?: { temp: number; feels_like?: number; humidity?: number };
  weather?: Array<{ description: string; icon: string }>;
  wind?: { speed: number };
  name?: string;
}

const API_BASE = (import.meta as any).env?.VITE_API_BASE || "http://localhost:3000";   // API base desde variables de entorno
                                                                                      

const WeatherWidget: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchByCoords = async (lat: number, lon: number) => {
      try {
        const res = await axios.get(`${API_BASE}/weather/coords`, { params: { lat, lon } });
        setData(res.data);
      } catch {
        setErr("No se pudo obtener clima por coordenadas");
      } finally {
        setLoading(false);
      }
    };

    const fetchByCity = async (city = "Chone") => {
      try {
        const res = await axios.get(`${API_BASE}/weather`, { params: { city } });
        setData(res.data);
      } catch {
        setErr("No se pudo obtener clima por ciudad");
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
        () => fetchByCity(),
        { timeout: 5000 }
      );
    } else {
      fetchByCity();
    }
  }, []);

  if (loading) return <div>Obteniendo clima...</div>;
  if (err) return <div>{err}</div>;

  const temp = data?.main?.temp ?? 0;
  const feels = data?.main?.feels_like ?? 0;
  const humidity = data?.main?.humidity ?? 0;
  const wind = data?.wind?.speed ?? 0;
  const icon = data?.weather?.[0]?.icon;
  const desc = data?.weather?.[0]?.description || "Sin datos";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        padding: "24px 36px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
        minHeight: "130px",
        width: "100%",
      }}
    >

      <div style={{ display: "flex", alignItems: "center", gap: 20, flex: 1 }}>
        {icon && (
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="clima"
            style={{ width: 80, height: 80 }}
          />
        )}
        <div>
          <div style={{ fontSize: 44, fontWeight: 700, lineHeight: 1 }}>
            {Math.round(temp)}°C
          </div>
          <div style={{ fontSize: 18, color: "#475569", textTransform: "capitalize" }}>
            {desc}
          </div>
          <div style={{ fontSize: 15, color: "#64748b" }}>
            {data?.name || "Ubicación actual"}
          </div>
        </div>
      </div>

   
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 250, // separa los bloques equitativamente
          flex: 1,
          justifyItems: "center",
          textAlign: "center",
          fontSize: 16,
          color: "#0f172a",
        }}
      >
        <div>
          <div style={{ fontSize: 36 }}>💧</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>{humidity}%</div>
          <div style={{ fontSize: 15, color: "#64748b" }}>Humedad</div>
        </div>

        <div>
          <div style={{ fontSize: 36 }}>💨</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>{wind}</div>
          <div style={{ fontSize: 15, color: "#64748b" }}>Viento</div>
        </div>

        <div>
          <div style={{ fontSize: 36 }}>🌡️</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>{Math.round(feels)}°C</div>
          <div style={{ fontSize: 15, color: "#64748b" }}>Sensación</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
