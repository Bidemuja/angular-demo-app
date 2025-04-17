# Etapa de construcción
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

# Etapa de producción (NGINX)
FROM nginx:alpine
# Copiamos el build al directorio público de NGINX
COPY --from=builder /app/dist /usr/share/nginx/html  # La carpeta dist directamente
# Copiamos configuración personalizada (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
