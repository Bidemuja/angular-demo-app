# Etapa de construcción
FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

# Etapa de producción (NGINX)
FROM nginx:alpine
# Copiamos el build al directorio público de NGINX
COPY --from=builder /app/dist/browser /usr/share/nginx/html
# Copiamos configuración personalizada (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
