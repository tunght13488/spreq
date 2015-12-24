FROM node:5.3

MAINTAINER Tung Ha "tunght13488@gmail.com"

RUN npm install -g pm2

ADD start.sh /start.sh
RUN chmod +x /start.sh

ENV DOCUMENT_ROOT /app
ENV INDEX_FILE index.js
ENV NODE_ENV development

CMD [ "/start.sh" ]