compose-postgrest
=================

Postgres, PostGraphQL and Postgrest, conveniently wrapped up with docker-compose.

Place SQL into the `initdb` folder, get REST and GraphQL!

Usage
-----

Start the containers:

`docker-compose up -d`

**PostGraphQL**

GraphQL located at [http://localhost:5000/graphql](http://localhost:5000/graphql)
GraphiQL located at [http://localhost:5000/graphiql](http://localhost:5000/graphiql)

**Postgrest**

Located at [http://localhost:3000](http://localhost:3000)

Try things like:
* [http://localhost:3000/test](http://localhost:3000/test)
* [http://localhost:3000/test?id=1](http://localhost:3000/test?id=1)
* [http://localhost:3000/test?id=gte.2](http://localhost:3000/test?id=gte.2)
* [http://localhost:3000/test?id=gte.2&test=like.*STUFF](http://localhost:3000/test?id=gte.2&test=like.*STUFF)
* [http://localhost:3000/test?test=like.*STUFF&select=test](http://localhost:3000/test?test=like.*STUFF&select=test)

Tearing down the containers:

`docker-compose down --remove-orphans -v`