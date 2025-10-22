import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeaderPrivate from './components/HeaderPrivate';
import HomePrivate from './pages/HomePrivate';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Tours from './pages/Tours';
import Catalogo from './pages/Catalogo';
import Noticias from './pages/Noticias';
import Ayuda from './pages/Ayuda';
import Guias from './pages/Guias';
import { useAuth } from './contexts/AuthContext';
import Mapa from './pages/Mapa';

function App() {
  const { user, loading } = useAuth(); 

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        Cargando...
      </div>
    );
  }

  return (
    <div className="app">
      {user ? <HeaderPrivate /> : <Header />}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inicio" element={<HomePrivate />} />     

          {/* estas son las rutas o archivos nuevos que estan en blando para realizar mas adelante */}
          <Route path="/tours" element={<Tours />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/guias" element={< Guias />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/ayuda" element={<Ayuda />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
