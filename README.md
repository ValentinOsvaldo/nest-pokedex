<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Execute in dev mode

1. Clonar this repository
2. Execute `pnpm install`
3. Must be have nest CLI installed

```
npm i -g @nestjs/cli
```

4. Start database in your local

```
docker-compose up -d
```

5. Clone `.env.template`

6. Rebuild the database with the seed

```
/api/v2/seed
```

7. Run the application

```
pnpm start:dev
```

# Production build

1. Create `env.prod` file

2. Complete environment variables

3. Build the image

```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```

# Stack

- Nestjs
- Mongo
- Docker
