# movies-test

## How to run

https://mmw-companieshouse-test.herokuapp.com/

### Links

Healthcheck: https://mmw-companieshouse-test.herokuapp.com/healthcheck
All movies: https://mmw-companieshouse-test.herokuapp.com/movies
Movie by movie_id: https://mmw-companieshouse-test.herokuapp.com/movies/1
Report: https://mmw-companieshouse-test.herokuapp.com/report

## Technology choices and justifications

For this project I have selected the following technologies:

### Express

Express, on top of being the most popular and best documented framework, aims to augment what is available with standalone node. The requirements of this task suit express well. If I desired greater control over how the key features of node were implemented I would perhaps have chosen Koa. Koa is syntactially similar and is compatible with many modules designed for use with express. Koa is barebones, and would thus offer more flexibility in modifying how the router might work, for example.

### MongoDB

I have chosen MongoDB for a few reasons, chiefly because it is built for agile development. If this technical test were actually, say, one of my projects in the half day scheme, It would be feasible that the project could grow from something I spent four hours on each week to a large-scale project with an entire team assigned to it.  Using MongoDB from the outset would allow the project to “evolve without requiring expensive migrations” (MongoDB, 2019).

### Jest

My justifications for choosing Jest are very similar to those used for Express. Jest works right out of the box. The testing I shall be carrying out will be very basic, and therefore requires no additional configuration. If I desired complete control over this my testing framework of choice would be Mocha.

### Heroku

Again, Heroku is well-suited to a small project that requires little configuration. Heroku also has low computational demands. Cost would not be an issue unless the app became exponentially larger  both in terms of scale and traffic.

___

In conclusion, my choices are influenced by my experience, a desire to be familiar with technologies inline with Companies House, and most importantly, they reflect the business rules of the project.


___

#### References

MongoDB. (2019). Agile Development. [online] Available at: https://www.mongodb.com/agile-development [Accessed 23 Nov. 2019]. 
