## Development

```bash
npm start
# start client only (Angular, http://localhost:4200):
# start server only (Node.js, http://localhost:1410):
```

## Production

```bash
npm build

# from dev (http://localhost:1410):
NODE_ENV=staging PORT=1410 node dist/server/app.js

# from stg/prod:
NODE_ENV=staging PORT=1410 node server/app.js
```


