FROM debian:bullseye

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get update && apt-get install -y --no-install-recommends nodejs \
  && apt-get purge --auto-remove \
  && rm -rf /tmp/* /var/lib/apt/lists/*

RUN mkdir -p /app
WORKDIR /app

COPY . ./

RUN npm i

CMD ["npm", "run", "dev"]