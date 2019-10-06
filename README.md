Simple React + Backend application that allows to create, read, update and delete a list of contacts.
Each contact has: First name, Last name, Email and phone number. All the fields are mandatory and there can’t be two contacts with the same email. The contacts are persisted in the database.

## Setup

```shell
bundle install
yarn install

bundle exec rails db:migrate
bundle exec rails db:seed
```

## Run server

```shell
bundle exec rails server
```

## Run tests

```shell
bundle exec rspec
bundle exec yarn test
```

## Using Docker

### Build image: 

```shell
docker build -t contacts .
```

### Run tests:

```shell
docker run -it --rm contacts bundle exec rspec
docker run -it --rm contacts bundle exec yarn test
```

### Run server:

```shell
docker run -it --rm -p 3000:3000 contacts
```