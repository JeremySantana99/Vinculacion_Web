import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Redirigir a home si no está autenticado
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        marginBottom: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          Dashboard
        </h1>
        <p style={{
          color: '#6b7280',
          fontSize: '1.125rem'
        }}>
          Bienvenido de vuelta, {user.name}
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            Proyectos Activos
          </h3>
          <p style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#3b82f6'
          }}>
            0
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            Colaboraciones
          </h3>
          <p style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#10b981'
          }}>
            0
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
          Notificaciones
          </h3>
          <p style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#f59e0b'
          }}>
            0
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        marginBottom: '3rem'
      }}>
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#1f2937'
          }}>
            Actividad Reciente
          </h2>
        </div>
        <div style={{
          padding: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '1.125rem'
          }}>
            No hay actividad reciente
          </p>
          <p style={{
            color: '#9ca3af',
            fontSize: '0.875rem',
            marginTop: '0.5rem'
          }}>
            Cuando participes en proyectos, la actividad aparecerá aquí
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#1f2937'
          }}>
            Acciones Rápidas
          </h2>
        </div>
        <div style={{
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          <button
            className="btn btn-primary"
            style={{
              padding: '1rem',
              textAlign: 'left'
            }}
          >
            <div style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '0.25rem'
            }}>
              Crear Proyecto
            </div>
            <div style={{
              fontSize: '0.875rem',
              opacity: 0.8
            }}>
              Inicia un nuevo proyecto de vinculación
            </div>
          </button>

          <button
            className="btn btn-secondary"
            style={{
              padding: '1rem',
              textAlign: 'left'
            }}
          >
            <div style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '0.25rem'
            }}>
              Buscar Colaboradores
            </div>
            <div style={{
              fontSize: '0.875rem',
              opacity: 0.8
            }}>
              Encuentra personas para tu equipo
            </div>
          </button>

          <button
            className="btn btn-secondary"
            style={{
              padding: '1rem',
              textAlign: 'left'
            }}
          >
            <div style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '0.25rem'
            }}>
              Ver Oportunidades
            </div>
            <div style={{
              fontSize: '0.875rem',
              opacity: 0.8
            }}>
              Explora proyectos disponibles
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;