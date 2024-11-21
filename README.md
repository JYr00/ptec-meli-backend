# Proyecto de Backend para Tienda en Línea

Este es un proyecto de backend para una tienda en línea, desarrollado con Node.js y TypeScript. El proyecto implementa funcionalidades esenciales como autenticación de usuarios, gestión de productos y un carrito de compras, utilizando Express.js y MongoDB.

## Requisitos Previos

- Node.js versión 22
- NPM
- Docker y Docker Compose (para ejecutar MongoDB)

## Instalación y Ejecución en Local

### Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd ptec-meli-backend
```

### Instalar las dependencias:

```bash
npm install
```

### Iniciar MongoDB con Docker:

Asegúrate de tener Docker instalado. Para levantar MongoDB, ejecuta:

```bash
docker-compose up -d
```

Esto iniciará un contenedor de MongoDB en segundo plano.

### Configurar las variables de entorno:

Crea un archivo `.env` en la raíz del proyecto y agrega las variables necesarias, como la URL de conexión a MongoDB y el puerto.

### Iniciar la aplicación:

```bash
node --run dev
```

La aplicación estará corriendo en [http://localhost:5000](http://localhost:5010).

## Endpoints Disponibles

### Autenticación (/api/auth)

- `POST /login`: Iniciar sesión y obtener un token de autenticación.
- `POST /register`: Registrar un nuevo usuario.

### Productos (/api/products)

- `GET /`: Obtener una lista de productos.

### Carrito de Compras (/api/cart)

- `POST /add`: Agregar un producto al carrito.
- `PUT /update`: Actualizar la cantidad de un producto en el carrito.
- `GET /`: Obtener los productos del carrito del usuario.
- `POST /remove`: Eliminar un producto del carrito.
- `DELETE /clear`: Vaciar el carrito de compras.

## Notas Adicionales

- Asegúrate de tener Docker instalado y en ejecución.
- Para levantar MongoDB, utiliza el comando `docker-compose up -d`.
- Las solicitudes a rutas protegidas deben incluir el token de autenticación en el encabezado `Authorization` con el formato `Bearer <token>`.
