FROM node:22

RUN apt-get update && \
    apt-get install -y python3 python3-pip

RUN pip3 install yt-dlp

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
