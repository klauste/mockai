ARG BASE_LDE_IMAGE

FROM ${BASE_LDE_IMAGE}

WORKDIR /srv/api/mockai

COPY ./ /srv/api/mockai

# Run the application:
CMD [ "node", "./src/index.js" ]

