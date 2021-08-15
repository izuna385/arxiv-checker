# arxiv-checker
## preparation
```
$ git clone --recursive https://github.com/izuna385/arxiv-checker
$ cd frontend
$ yarn install
$ cd ..
```

### development
```
$ docker-compose up --build
# (When you finish coding)
$ docker-compose down
```

### production
`docker-compose -f docker-compose.prod.yml up -d --build`
