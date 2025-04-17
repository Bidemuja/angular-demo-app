# Etapa 1: Construcción
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

# Etapa 2: Servidor NGINX para producción
FROM nginx:alpine
COPY --from=builder /app/dist/angular-demo-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
