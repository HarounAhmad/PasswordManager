#! /bin/bash

cd manifests

kubectl apply -f pm-database --namespace=dev
kubectl apply -f pm-backend --namespace=dev
kubectl apply -f pm-frontend --namespace=dev
#helm repo add nginx-stable https://helm.nginx.com/stable
#helm repo update
#helm install stable/nginx-ingress --generate-name

minikube tunnel

