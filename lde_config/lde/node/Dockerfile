FROM node:18
WORKDIR /srv/api/aiproxy

# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
COPY ../../.. .

CMD [ "node", "./src/index.js" ]
