import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { LogOut, User } from 'lucide-react';

// TS no reconoce imágenes por defecto, pero la importacion esta correcta, revolver despues
import logo from '../assets/logo.png';

const HeaderPrivate: React.FC = () => {
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate(); 

  // Al cerrar sesión, limpia el usuario y redirige al Home
  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1.5rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      {/* Aqui esta el codigo del logo y el nombre que esta a los lados */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src={logo}
            alt="Logo Corredor Ecológico"
            style={{ width: 52, height: 52, objectFit: 'contain', borderRadius: 8 }}
          />
          <span style={{ marginLeft: 12, fontSize: '1.125rem', fontWeight: 700, color: '#111827' }}>
            Biocorredor Estuario río Chone
          </span>
        </Link>
      </div>

      {/* CENTRO: Menú de navegación */}
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            margin: 0,
            padding: 0
          }}
        >
          <li><Link to="/" style={{ textDecoration: 'none', color: '#111827', fontWeight: 600 }}>Inicio</Link></li>
          <li><Link to="/tours" style={{ textDecoration: 'none', color: '#111827' }}>Tours</Link></li>
          <li><Link to="/catalogo" style={{ textDecoration: 'none', color: '#111827' }}>Catálogo</Link></li>
          <li><Link to="/noticias" style={{ textDecoration: 'none', color: '#111827' }}>Noticias</Link></li>
          <li><Link to="/guias" style={{ textDecoration: 'none', color: '#111827' }}>Guías</Link></li>
          <li><Link to="/mapa" style={{ textDecoration: 'none', color: '#111827' }}>Mapa</Link></li>
          <li><Link to="/ayuda" style={{ textDecoration: 'none', color: '#111827' }}>Ayuda</Link></li>
        </ul>
      </nav>

      {/* DERECHA: Usuario o botones de login/register */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        {user ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#6b7280'
              }}
            >
              <User size={20} />
              <span>{user.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <LogOut size={16} />
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              gap: '0.75rem'
            }}
          >
            <button
              onClick={() => setShowLogin(true)}
              className="btn btn-secondary"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => setShowRegister(true)}
              className="btn btn-primary"
            >
              Registrarse
            </button>
          </div>
        )}
      </div>

      {/* Modales */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </header>
  );
};

export default HeaderPrivate;

