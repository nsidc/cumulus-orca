#!/bin/bash
## =============================================================================
##
## NAME: setup_testing.sh
##
## DESCRIPTION: Script used to setup manual testing environment for db_deploy
##
## USAGE: ./setup_testing.sh <setup|pgclient|python|stop>
## =============================================================================

if [ ! -f ".env" ]; then
    echo "ERROR: Please create an .env file from the env_template!"
    exit 1
fi

# Source our variables
. .env


# Get the directory stuff set
if [ ! -d "${DATA_DIR}" ]; then
    mkdir -p ${DATA_DIR}
fi

if [ ! -d "${TASK_DIR}" ]; then
    echo "Directory [$TASK_DIR] does not exist. Please point to the git repo for cumulus-orca."
    exit 1
fi

# Perform an action
case $1 in
    "setup")
        docker-compose up -d
    ;;

    "pgclient")
        docker run \
            -it --rm \
            --name orca-test-pg-client \
            -e "PGHOST=${DATABASE_HOST}" \
            -e "PGDATABASE=postgres" \
            -e "PGUSER=postgres" \
            -e "PGPASSWORD=${ROOT_PASSWORD}" \
            -e "PGPORT=5433" \
            -v "${TASK_DIR}:/data" \
            postgres:12 \
            /bin/bash

    ;;

    "python")
        docker run \
            -it --rm \
            --name orca-test-python \
            -e "ROOT_PASSWORD=${ROOT_PASSWORD}" \
            -e "APPLICATION_PASSWORD=${APPLICATION_PASSWORD}" \
            -e "DATABASE_HOST=${DATABASE_HOST}" \
            -v "${TASK_DIR}:/data" \
            python:3.7 \
            /bin/bash
    ;;

    "stop")
        docker-compose down
    ;;

    *)
        echo "Incorrect option provided!"
        echo "USAGE: ./setup_testing.sh <setup|pgclient|python|stop>"
        exit 1
    ;;
esac
