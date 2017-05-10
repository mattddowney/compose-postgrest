compose-postgrest
=================

Postgres and Postgrest, conveniently wrapped up with docker-compose.

Place SQL into the `initdb` folder, get REST!

Usage
-----

Start the containers:

`docker-compose up -d`

Point your browser to http://localhost:3000

Try things like:
* [http://localhost:3000/test](http://localhost:3000/test)
* [http://localhost:3000/test?id=1](http://localhost:3000/test)
* [http://localhost:3000/test?id=gte.2](http://localhost:3000/test)
* [http://localhost:3000/test?id=gte.2&test=like.*STUFF](http://localhost:3000/test)
* [http://localhost:3000/test?test=like.*STUFF&select=test](http://localhost:3000/test)

Tearing down the containers:

`docker-compose down --remove-orphans -v`