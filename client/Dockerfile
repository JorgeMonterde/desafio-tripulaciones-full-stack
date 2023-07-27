# Establecer la imagen base con Node.js
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias del front-end..
COPY package*.json ./

# Instala dependencias client

RUN npm install

# Copiar los archivos del front-end al contenedor
COPY . .

# Comando para construir la aplicación de React (si es necesario)
RUN npm run build

# Exponer el puerto en el que escucha el servidor del front-end (si es necesario)
EXPOSE 8080

# Comando para iniciar el servidor del front-end (por ejemplo, con serve)
CMD ["npx", "serve", "-s", "build"]