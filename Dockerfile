# Acid Master GUI — independent Next.js frontend
FROM node:20-slim AS build
WORKDIR /app
COPY package.json package-lock.json* ./
COPY packages ./packages
RUN npm install
COPY . .
ARG NEXT_PUBLIC_ACID_API_URL=http://127.0.0.1:8001/api
ENV NEXT_PUBLIC_ACID_API_URL=$NEXT_PUBLIC_ACID_API_URL
RUN npm run build

FROM node:20-slim AS run
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["npm", "run", "start"]
