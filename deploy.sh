#!/bin/bash

# Angular-Projekt bauen
ng build

sudo rm -r /var/www/html
sudo mkdir /var/www/html

sudo cp -r dist/heartfull-mind-homepage/browser/* /var/www/html

sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

echo "Deployment abgeschlossen!"
