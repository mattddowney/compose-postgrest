compose-postgrest
=================

Postgres, PostGraphQL and Postgrest, conveniently wrapped up with docker-compose.

Place SQL into the `initdb` folder, get REST and GraphQL! 
Includes world sample database.

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
* [http://localhost:3000/city](http://localhost:3000/test)
* [http://localhost:3000/country](http://localhost:3000/country)
* [http://localhost:3000/countrylanguage](http://localhost:3000/countrylanguage)
* [http://localhost:3000/city?name=eq.Denver](http://localhost:3000/city?name=eq.Denver)
* [http://localhost:3000/city?population=gte.5000000](http://localhost:3000/city?population=gte.5000000)
* [http://localhost:3000/city?district=like.*Island](http://localhost:3000/city?district=like.*Island)
* [http://localhost:3000/city?district=like.*Island&population=lt.1000&select=id,name](http://localhost:3000/city?district=like.*Island&population=lt.1000&select=id,name)

Tearing down the containers:

`docker-compose down --remove-orphans -v`