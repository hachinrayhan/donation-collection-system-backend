## Installation

```bash
$ npm install
```

## Connecting to Database

Create and Configure the .env file:

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=12345
DB_DATABASE=donation_collection_system
Make sure to replace the 'username', 'password', and 'database' fields with your actual MySQL credentials.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
