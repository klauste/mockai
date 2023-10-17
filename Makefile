# ======================================
# You can add help comments by:
# `## Comment here` - for recipe targets
# `#### Comment here` - for variables
# ======================================
.DEFAULT_GOAL := help

# This is the offical project name used for deployments/base images
# ------------------------------------
# IMPORTANT - remote docker image repositories are created with this name
# if you change this, you risk orphaning artifacts
# ------------------------------------
PROJECT_NAME = api-mockai


# The default environment for LDE
ENV ?= dev

CONTAINER_NGINX = nginx
CONTAINER_NODE = node
CONTAINER_NODE_CLI = node-cli
NODE_CMD = ${DOCKER_COMPOSE_CLI} ${CONTAINER_NODE_CLI}
YARN= ${NODE_CMD} yarn

# These are the base images built by this project
# Strict enforcement here makes it easier to keep neat for downstream systems
# ------------------------------------
# NOTE: These are images we build ourselves (i.e. we have a Dockerfile for)
# Any image we use directly from a public repo we can exclude from this list
# ------------------------------------
DOCKER_BASE_IMAGES ?= ${CONTAINER_NGINX} \
${CONTAINER_NODE} \
${CONTAINER_NODE_CLI}
## END LIST

# Build everything listed with a Dockerfile and pull the rest
project-images: build-base-images pull-docker-images

build-node:
	$(YARN) install --ignore-optional

lde: project-images build-node

# ======================================
# Docker Deployment and other recipes used in automation
# ======================================

# The deployment images will be determined from the project name
DOCKER_DEPLOYMENT_IMAGES = \
			   ${CONTAINER_NGINX} \
			   ${CONTAINER_NODE} \
			   ${CONTAINER_NODE_CLI}
			   # end

# When building this project for deployment, this is the space separated list of recipes to run
# This build recipe here doesn't really do anything useful, except provide an example
DOCKER_BUILD_RECIPE = build

# Include a lot of useful utility and boilerplate for this project
-include .project_extension/makefiles/Makefile-common*.make \
	.project_extension/makefiles/Makefile-docker*.make
