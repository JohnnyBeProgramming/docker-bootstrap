#!/bin/bash

set -e

WORKING_DIR=$(echo $PWD)
TARGET_PATH="${WORKING_DIR}/certs"
SSL_SUBJECT="/C=EU/ST=Brussels/L=Brussels/O=example.com/OU=example.com/CN=local.example.com"

echo ">> DOCKER-ENTRYPOINT: GENERATING SSL CERT"
echo "   - SSL_SUBJECT: ${SSL_SUBJECT}"
echo "   - WORKING_DIR: ${WORKING_DIR}"
echo "   - TARGET_PATH: ${TARGET_PATH}"

mkdir -p "${TARGET_PATH}"
cd "${TARGET_PATH}"

openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
openssl rsa -passin pass:x -in server.pass.key -out server.key
rm server.pass.key
openssl req -new -key server.key -out server.csr -subj "${SSL_SUBJECT}"
openssl x509 -req -sha256 -days 300065 -in server.csr -signkey server.key -out server.crt

cd "${WORKING_DIR}"

echo ">> DOCKER-ENTRYPOINT: GENERATING SSL CERT ... DONE"
echo ">> DOCKER-ENTRYPOINT: EXECUTING CMD"

exec "$@"