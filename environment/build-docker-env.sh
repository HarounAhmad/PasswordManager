#! /bin/bash

cd ../
cd Docker
ls
cd frontend
ls
docker build --file=Dockerfile --tag=pm-frontend:latest --rm=true .

cd ../backend
ls
docker build --file=Dockerfile --tag=pm-backend:latest --rm=true .