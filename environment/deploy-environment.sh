#! /bin/bash

cd manifests

kubectl apply -f pm-database --namespace=dev
kubectl apply -f pm-backend --namespace=dev
kubectl apply -f pm-frontend --namespace=dev