FROM node:10.13.0-alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN npm run build

FROM nginx:stable-alpine as production
WORKDIR /app
COPY --from=build /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]