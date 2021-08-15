# arxiv-checker
## preparation
```
$ git clone --recursive https://github.com/izuna385/arxiv-checker
```

### development
```
$ cd frontend
$ yarn install
$ cd ..
$ docker-compose up --build
# (at Browser: localhost:3000)
# (When you finish coding)
$ docker-compose down
```

### production
```
$ docker-compose -f docker-compose.prod.yml up -d --build
# (at Browser: localhost)
$ docker-compose down
```
