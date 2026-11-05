# Kiosco El Rapido - Frontend (TP4)

Aplicacion web desarrollada en **React**, **TypeScript** y **Vite** para la gestión del frontend de un sistema de kiosco, correspondiente a la Parte 1 del trabajo práctico.

## 🚀 Tecnologias Utilizadas
* **React** (con Hooks y Context API)
* **TypeScript**
* **Vite** (como empaquetador y entorno de desarrollo)
* **React Router DOM** (para la gestion de rutas y navegacion)

## 📋 Funcionalidades Principales
* **Layout global**: Encabezado y pie de pagina persistentes en todas las vistas.
* **Navegacion**: Rutas configuradas para Inicio, Catalogo de Productos, Detalle de Producto, Carrito de Compras y Manejo de errores (404).
* **Filtros de Catalogo**: Filtrado dinamico por categorias mediante *Query Params* (`?category=...`).
* **Detalle de Producto**: Vista individual dinamica utilizando *Path Params* (`/products/:id`).
* **Carrito de Compras**: Gestion global de estado mediante `Context API` (agregar, actualizar cantidades, eliminar productos, calcular totales y simulacion de finalizacion de compra).
* **Estetica**: Diseño moderno en modo claro con detalles en tonos violetas profesionales.

## ⚙️ Instrucciones de Instalacion y Ejecucion
Sigue estos pasos para correr el proyecto localmente en tu maquina:

1. **Clonar o descargar** 
2. Abrir una terminal y ubicarse dentro de la carpeta del frontend:
   -cd frontend
3. Instalar las dependencias necesarias:
   -npm install
4. Iniciar el servidor de desarrollo local con Vite:
   -npm run dev
5. Abrir el navegador e ingresar a la URL que indica la terminal.
6. Fin

## 👥 Autor
Alumna: Beltrán, Maira Melina
Comicion: 11