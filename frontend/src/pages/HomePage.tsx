import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const HomePage: React.FC = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <div
        style={{
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '3rem',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem',
          }}
        >
          Avistamiento de Aves
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}
        >
          Descubre, registra y comparte tus avistamientos de aves. Únete a
          nuestra comunidad de observadores de aves.
        </p>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}
      >
        <div
          style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '4rem',
              height: '4rem',
              backgroundColor: '#3b82f6',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
            }}
          >
            🦅
          </div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.75rem',
            }}
          >
            Avistamiento de Aves
          </h3>
          <p
            style={{
              color: '#6b7280',
              lineHeight: '1.6',
            }}
          >
            Registra tus avistamientos, identifica especies y comparte tus
            experiencias con otros observadores de aves.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '0.75rem',
          border: '2px dashed #d1d5db',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem',
          }}
        >
          ¿Listo para comenzar?
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            marginBottom: '2rem',
          }}
        >
          Únete a nuestra comunidad y comienza a crear proyectos que marquen la
          diferencia.
        </p>
        <p
          style={{
            color: '#6b7280',
            fontSize: '0.875rem',
          }}
        >
          Usa los botones en la esquina superior derecha para registrarte o
          iniciar sesión.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
