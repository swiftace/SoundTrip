#!/usr/bin/env bash

# Read config parameters
source /vagrant/vagrantBootstrap/bootstrap.config.sh

# Ensure package info is all up-to-date
apt-get update

# Add PPA repo for getting PHP 5.4.*
apt-get install python-software-properties -y
add-apt-repository ppa:ondrej/php5 -y
apt-get update

# Install Apache and map default web dir to Symfony web root on host
apt-get install -y apache2
rm -rf /var/www
mkdir /var/www
ln -fs /vagrant/ /var/www/html

# Install vim
apt-get install vim -y

# Install PHP 5 and associated Apache module
apt-get install php5 -y
apt-get install php5-mysql -y
apt-get install php5-intl -y
apt-get install libapache2-mod-php5 -y
apt-get install php5-curl -y
apt-get install php5-tidy -y

# Update PHP config date.timezone:
sed -i 's/^.*date\.timezone =.*$/date.timezone = Europe\/London/' /etc/php5/apache2/php.ini
# intl extension (used for validators):
apt-get install php5-intl -y
# PHP short_open_tag recommended off:
sed -i 's/^.*short_open_tag =.*$/short_open_tag = Off/' /etc/php5/apache2/php.ini

# Ensure all other dependencies are present
apt-get install git -y

apt-get purge nodejs npm -y
apt-get update
apt-get install python-software-properties -y
add-apt-repository ppa:chris-lea/node.js -y
apt-get update
apt-get install nodejs -y

npm install -g bower

bower install

# Add /etc/hosts local domain names
echo "" >> /etc/hosts
echo "# Local domain names" >> /etc/hosts
echo "127.0.0.1       mail.dev" >> /etc/hosts
echo "127.0.0.1       soundtrip.dev" >> /etc/hosts

# Restart Apache
service apache2 restart