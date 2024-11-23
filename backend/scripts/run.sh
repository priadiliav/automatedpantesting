#!/bin/bash

REPO_NAME=$1
CONTAINER_NAME=$2

# Build the Docker image
docker build -t $CONTAINER_NAME ./$REPO_NAME

# Run the Docker container with the specified name
docker run -d -p 3000:3000 --name $CONTAINER_NAME $CONTAINER_NAME