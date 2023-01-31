FROM node:latest AS build
WORKDIR /AdminDashboard
COPY . .
COPY package*.json ./

RUN npm install -g @angular/cli@latest && \
    npm install && \
    ng build
COPY . .

# Stage 2
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /AdminDashboard/dist/admin-dashboard .
EXPOSE 80


# docker build -t nginx-admindash -f Dockerfile .
# docker run -p 80:80 nginx-admindash