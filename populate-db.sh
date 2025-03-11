#!/bin/bash
source .env
docker exec -i wiki-db psql -U ${DB_USER} -d ${DB_DB} < ./server/db/dump.sql