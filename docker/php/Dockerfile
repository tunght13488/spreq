FROM php:7.0-fpm

MAINTAINER Tung Ha "tunght13488@gmail.com"

RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libicu-dev \
    g++ \
  && apt-get clean -q -y \
  && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-configure \
    intl

RUN docker-php-ext-install \
    pdo_mysql \
    intl \
    opcache

RUN usermod -u 1000 www-data

COPY php.ini /usr/local/etc/php
