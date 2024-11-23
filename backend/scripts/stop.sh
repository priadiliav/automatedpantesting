#!/bin/bash

CONTAINER_NAME=$1

# Stop the Docker container
docker stop $CONTAINER_NAME

# Delete the Docker container
docker rm $CONTAINER_NAME