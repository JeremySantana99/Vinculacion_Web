# Plataforma de Vinculación

Una aplicación completa con NestJS (backend) y React (frontend) que permite la gestión de usuarios con autenticación JWT, conectada a una base de datos PostgreSQL de Supabase.

## Estructura del Proyecto

```
vinculacion-2/
├── backend/          # API REST con NestJS
│   ├── src/
│   │   ├── auth/     # Módulo de autenticación
│   │   ├── users/    # Módulo de usuarios
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── .env.example
└── frontend/         # SPA con React + Vite
    ├── src/
    │   ├── components/  # Componentes React
    │   ├── contexts/    # Context API (AuthContext)
    │   ├── pages/       # Páginas principales
    │   ├── App.tsx
    │   └── main.tsx
    └── package.json
```

## Características

### Backend (NestJS)
- ✅ Autenticación JWT
- ✅ Registro y login de usuarios
- ✅ Conexión a PostgreSQL (Supabase)
- ✅ Validación de datos con class-validator
- ✅ Hash de contraseñas con bcrypt
- ✅ CORS habilitado para el frontend

### Frontend (React + TypeScript)
- ✅ Interfaz moderna y responsiva
- ✅ Página principal informativa
- ✅ Modales para login y registro
- ✅ Autenticación con Context API
- ✅ Dashboard protegido para usuarios autenticados
- ✅ Botones de autenticación en la esquina superior derecha

## Configuración Previa

### 1. Instalar Node.js
Descarga e instala Node.js desde: https://nodejs.org/

### 2. Configurar Supabase
1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Ve a Settings → Database
4. Copia la información de conexión (Host, Port, Password)

## Instalación y Ejecución

### Backend

```bash
# Navegar al directorio del backend
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de Supabase

# Ejecutar en modo desarrollo
npm run start:dev
```

El backend estará disponible en `http://localhost:3000`

### Frontend

```bash
# Navegar al directorio del frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

## Configuración de Variables de Entorno

### Backend (.env)
```env
DB_HOST=db.tu-proyecto.supabase.co
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_password_de_supabase
DB_DATABASE=postgres
JWT_SECRET=tu_clave_secreta_muy_segura
PORT=3000
```

## API Endpoints

### Autenticación
- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Login de usuario  
- `GET /auth/profile` - Obtener perfil (requiere token)
- `GET /auth/validate` - Validar token

## Uso de la Aplicación

1. **Página Principal**: Interfaz informativa sobre la plataforma
2. **Registro**: Click en "Registrarse" (esquina superior derecha)
3. **Login**: Click en "Iniciar Sesión" (esquina superior derecha)
4. **Dashboard**: Área privada disponible después del login

## Tecnologías Utilizadas

### Backend
- NestJS
- TypeORM
- PostgreSQL (Supabase)
- JWT para autenticación
- bcrypt para hash de contraseñas
- class-validator para validación

### Frontend  
- React 18
- TypeScript
- Vite
- React Router DOM
- Axios para peticiones HTTP
- Lucide React para iconos

## Próximos Pasos

Una vez que tengas el proyecto funcionando, puedes:

1. Personalizar los estilos y la UI
2. Agregar más funcionalidades al dashboard
3. Implementar gestión de proyectos
4. Añadir roles de usuario
5. Integrar notificaciones en tiempo real

## Soporte

Si tienes problemas:

1. Verifica que Node.js esté instalado
2. Confirma que las credenciales de Supabase sean correctas
3. Asegúrate de que ambos servidores estén corriendo
4. Revisa que no haya conflictos de puertos

¡La plataforma está lista para ser utilizada! 🚀