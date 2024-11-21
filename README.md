# Proyecto de Backend para Tienda en Línea

Este es un proyecto de backend para una tienda en línea, desarrollado con Node.js y TypeScript. El proyecto implementa funcionalidades esenciales como autenticación de usuarios, gestión de productos y un carrito de compras, utilizando Express.js y MongoDB.

## Requisitos Previos

- **Node.js** versión 22
- **NPM**
- **Docker** y **Docker Compose** (para ejecutar la aplicación y MongoDB en contenedores)
- **Git** (para clonar el repositorio)

## Instalación y Ejecución con Docker

### Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd ptec-meli-backend
```

### Instalar las dependencias:

```bash
npm install
```

### Configurar las variables de entorno:
Crea un archivo .env en la raíz del proyecto y agrega las variables necesarias, como la URL de conexión a MongoDB y el puerto. Un ejemplo de variables de entorno:

### Iniciar MongoDB con Docker:

Asegúrate de tener Docker instalado. Para levantar MongoDB, ejecuta:

```bash
docker-compose up -d
```

Esto iniciará un contenedor de MongoDB en segundo plano.

### Iniciar MongoDB y la aplicación con Docker:
Asegúrate de tener Docker instalado. Para levantar MongoDB y la aplicación, ejecuta:

```bash
docker-compose up -d
```

Esto iniciará los contenedores de MongoDB y de la aplicación en segundo plano.

### Verificar que todo esté funcionando:
Puedes verificar que los contenedores estén en funcionamiento con:

La aplicación estará corriendo en [http://localhost:5000](http://localhost:5000).

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

- Asegúrate de que los puertos 5000 (aplicación) y 27017 (MongoDB) estén disponibles en tu máquina local.
- Las solicitudes a rutas protegidas deben incluir el token de autenticación en el encabezado `Authorization` con el formato `Bearer <token>`.
- Para reconstruir la imagen de la aplicación (si cambias las dependencias), ejecuta:

```bash
docker-compose up -d --build
```
