# 🛒 Kiosco El Rapido - Backend (API REST)
Backend desarrollado con **FastAPI** y **SQLite** para la gestion de productos y procesamiento de pedidos del sistema "Kiosco El Rapido".

---
## 🚀 Tecnologias Utilizadas
- **Python** (version 3.9 o superior recomendada)
- **FastAPI** (framework web de alto rendimiento)
- **Uvicorn** (servidor ASGI)
- **SQLAlchemy / SQLite** (persistencia y base de datos relacional)
- **Pydantic** (validacion de esquemas de datos)

---
## 📂 Estructura del Proyecto (Backend)
backend/
│
├── main.py            # Punto de entrada de la aplicacion FastAPI y rutas principales
├── database.py        # Configuracion de la conexion a SQLite y SQLAlchemy
├── models.py          # Definicion de modelos de la base de datos (Tablas)
├── schemas.py         # Esquemas Pydantic para validacion de entrada/salida
├── requirements.txt   # Dependencias del proyecto
└── kiosco.db          # Base de datos SQLite (se genera automaticamente)
---

## ⚙️ Instrucciones de Instalacion y Ejecucion
1. **Clonar o descargar** 
2. Abrir una terminal y ubicarse dentro de la carpeta del backend:
    -cd backend
3. Crear y activar un entorno virtual
     **En Windows:**
    -python -m venv venv
    -venv\Scripts\activate
    * **En macOS / Linux:**
    -python3 -m venv venv
    -source venv/bin/activate
4. Instalar las dependencias
    -pip install -r requirements.txt
5. Ejecutar el servidor de desarrollo
    -uvicorn main:app --reload 
6. Fin

---
## 📌 Endpoints Principales de la API
Una vez que el servidor este activo, puedes acceder a la documentacion interactiva automatica (Swagger UI) en:

### 🟢 **Productos (`/products`)**
* `GET /products` -> Retorna el listado completo de productos del kiosco (con opcion de filtrar por categoria).
* `GET /products/{id}` -> Retorna el detalle de un producto especifico segun su ID.

### 🟢 **Pedidos (`/orders`)**
* `POST /orders` -> Registra una nueva orden de compra, valida el stock disponible y descuenta automaticamente las cantidades de la base de datos.

## 👥 Autor
- **Alumna:** Beltran, Maira Melina
- **Comision:** 11