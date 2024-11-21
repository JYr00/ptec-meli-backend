# Usar la imagen oficial de Node.js versión 20
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto que utiliza la aplicación (ajusta si es necesario)
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]