FROM node:22 AS builder
WORKDIR /app

COPY ./empathy-web-new .
RUN npm install
RUN npm run build


FROM nginx:stable-alpine AS final
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./infrastructure/robots.txt /usr/share/nginx/html
COPY ./infrastructure/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
