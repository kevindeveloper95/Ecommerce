# ⚡ TechShot - E-commerce de productos electrónicos

TechShot es una aplicación web de comercio electrónico diseñada para la compra y venta de productos electrónicos. Los usuarios pueden navegar, buscar y adquirir productos fácilmente, mientras que los administradores tienen acceso a una interfaz web para gestionar el catálogo de productos.

Esta plataforma está pensada tanto para consumidores finales como para personas interesadas en lanzar su propio e-commerce.

---

## 🚀 Funcionalidades principales

- ✅ Registro e inicio de sesión de usuarios
- ✅ Sistema de autenticación con tokens
- ✅ Carrito de compras
- ✅ Creación y gestión de productos (panel de administrador)
- ✅ Búsqueda de productos por nombre
- ✅ Creación y visualización de reseñas
- ✅ Panel administrativo para gestionar ventas y stock

---

## 🧪 Tecnologías utilizadas

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB Atlas (almacenamiento en la nube)
- JSON Web Tokens (JWT)
- NGINX y PM2 para producción

### 💻 Frontend
- React.js
- Redux (manejo de estado global)
- React Bootstrap (UI/Estilos)

### ☁️ Servicios en la nube (AWS)
- **S3** para el almacenamiento y despliegue del frontend
- **Route 53** para la gestión de dominios y rutas
- **CloudFront** para distribución de contenido y certificados HTTPS
- **EC2** para el backend (API REST + NGINX)
- Certificados SSL instalados manualmente

---

## 🛠️ Instalación y configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/kevindeveloper95/Ecommerce.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` basado en el archivo `example.env` que encontrarás en la raíz del proyecto:
   ```bash
   cp example.env .env
   ```

4. Agrega tus propias variables de entorno en el archivo `.env` para que el proyecto funcione correctamente en desarrollo:
   - MONGO_URI
   - JWT_SECRET
   - AWS_S3_BUCKET (si aplica)
   - Etc.

5. Ejecuta el proyecto:
   ```bash
   npm run dev
   ```

---

## 📁 Estructura del proyecto

```
├── backend/
│   ├── controllers/         # Controladores de la lógica del negocio
│   ├── routes/              # Endpoints de la API
│   ├── models/              # Esquemas de MongoDB (usuarios, productos, etc.)
│   ├── middleware/          # Middlewares personalizados (auth, manejo de errores)
│   ├── config/              # Configuración general del backend y MongoDB
│   ├── utils/               # Funciones auxiliares
│   └── server.js            # Punto de entrada del servidor
├── frontend/
│   ├── src/
│   │   ├── components/      # Componentes reutilizables de React
│   │   ├── screens/           # Páginas principales (Home, Product, Login, etc.)
│   │   ├── slices/           # Almacenamiento global (reducers, actions)
│   │   ├── utils/           # Funciones auxiliares
│   │   └── App.js           # Componente principal
│   └── public/              # Archivos estáticos
├── .env.example             # Variables de entorno de ejemplo
├── package.json             # Dependencias y scripts
└── README.md                # Documentación del proyecto
```

---

## 🌐 Despliegue en producción

El proyecto está desplegado completamente en AWS utilizando:

- S3 + CloudFront + Route 53 para el frontend
- EC2 + NGINX + PM2 para el backend
- MongoDB Atlas como base de datos en la nube

---

## 👨‍💻 Autor

**Kevin Meneses Parga**

- 🔗 [LinkedIn](https://www.linkedin.com/in/kevin-meneses-frontend-web-developer/)
- 💻 [GitHub](https://github.com/kevindeveloper95?tab=repositories)

---

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.
