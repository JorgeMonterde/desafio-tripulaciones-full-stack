# Establecer la imagen base con Node.js
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias del back-end (package.json y package-lock.json)
COPY package*.json ./

COPY index.js ./


# Instalar las dependencias
RUN npm install

# Copiar los archivos del back-end al contenedor
COPY . .

# Exponer el puerto en el que escucha el servidor del back-end (si es necesario)
EXPOSE 8080

# Comando para iniciar el servidor del back-end
CMD ["npm", "start"]
