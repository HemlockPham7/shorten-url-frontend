### Build ###

FROM node:24.19.0-alpine AS build

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY urlshorten/package*.json ./

RUN npm ci

COPY urlshorten/ ./

RUN npm run build


### Run ###

FROM node:24.19.0-alpine AS production

WORKDIR /app

COPY --from=build /opt/app/package*.json /app
COPY --from=build /opt/app/node_modules /app/node_modules
COPY --from=build /opt/app/dist /app/dist

EXPOSE 5173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]