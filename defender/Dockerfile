
# Dockerfile for Defender container
FROM ubuntu:20.04

RUN apt-get update && apt-get install -y nginx iptables

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/site/ /var/www/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
