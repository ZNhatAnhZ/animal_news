FROM node:16-alpine AS build

# Define build arguments for environment variables
ARG BACKEND_URL

# Set environment variables during the build process
ENV BACKEND_URL=$BACKEND_URL

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD [ "nginx", "-g",  "daemon off;"]
