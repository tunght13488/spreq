FROM nginx:1.9

MAINTAINER Tung Ha "tunght13488@gmail.com"

ENV PHP_FPM_SOCKET "php:9000"
ENV DOCUMENT_ROOT /var/www/symfony/web
ENV INDEX_FILE app.php

COPY nginx.conf /etc/nginx/
COPY default.conf /etc/nginx/conf.d

RUN echo "upstream php-upstream { server $PHP_FPM_SOCKET; }" > /etc/nginx/conf.d/upstream.conf && \
    sed -i "s|DOCUMENT_ROOT|$DOCUMENT_ROOT|g" /etc/nginx/conf.d/default.conf && \
    sed -i "s|INDEX_FILE|$INDEX_FILE|g" /etc/nginx/conf.d/default.conf

RUN usermod -u 1000 www-data
