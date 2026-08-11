#!/bin/sh
set -eu

TEMPLATE=/etc/nginx/nginx.conf.template
CONF=/etc/nginx/nginx.conf

ALLOWED_HOSTS="${ALLOWED_HOSTS:-localhost,127.0.0.1}"

SERVER_NAMES=""
OLD_IFS=$IFS
IFS=','
for raw in $ALLOWED_HOSTS; do
  host=$(printf '%s' "$raw" | tr -d '[:space:]')
  [ -z "$host" ] && continue
  case "$host" in
    *[!A-Za-z0-9._-]*)
      echo "entrypoint: invalid host in ALLOWED_HOSTS: $host" >&2
      exit 1
      ;;
  esac
  if [ -z "$SERVER_NAMES" ]; then
    SERVER_NAMES="$host"
  else
    SERVER_NAMES="$SERVER_NAMES $host"
  fi
done
IFS=$OLD_IFS

if [ -z "$SERVER_NAMES" ]; then
  echo "entrypoint: ALLOWED_HOSTS produced an empty allowlist" >&2
  exit 1
fi

sed "s/__SERVER_NAMES__/${SERVER_NAMES}/" "$TEMPLATE" >"$CONF"

echo "nginx ALLOWED_HOSTS (server_name): $SERVER_NAMES"
exec nginx -g 'daemon off;'
