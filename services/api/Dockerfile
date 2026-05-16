FROM node:20-alpine
WORKDIR /app
RUN npm i -g pnpm@9.15.9
COPY package.json pnpm-workspace.yaml /app/
COPY packages /app/packages
COPY services/api/package.json /app/services/api/package.json
RUN pnpm install --filter @serviceshub/api --filter @serviceshub/shared --prod=false
COPY services/api/src /app/services/api/src
COPY services/api/.env.example /app/services/api/.env.example
WORKDIR /app/services/api
EXPOSE 4000
CMD ["pnpm", "start"]
