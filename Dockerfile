# =============================================================================
# Stage 1: production build of the Angular SPA
# =============================================================================
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Output: dist/alexistrejo-stite/browser
RUN npm run build


# =============================================================================
# Stage 2: nginx serves static files over HTTP only
# TLS + reverse proxy: Cloudflare on the VPS (not in this image).
# =============================================================================
FROM nginx:1.27-alpine AS runtime

# Drop default site; we generate config from ALLOWED_HOSTS at start.
RUN rm -f /etc/nginx/conf.d/default.conf

COPY docker/nginx.conf.template /etc/nginx/nginx.conf.template
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY --from=build /app/dist/alexistrejo-stite/browser /usr/share/nginx/html

ENV ALLOWED_HOSTS=localhost,127.0.0.1

EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- --header='Host: localhost' http://127.0.0.1:4000/ > /dev/null || exit 1

ENTRYPOINT ["/entrypoint.sh"]
