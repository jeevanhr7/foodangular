# foodangular

#Node task
Node Task 1:
● Create a sample project using https://github.com/DaftMonk/generator-angular-fullstack or the
framework of your choice
Solution: https://github.com/jeevanhr7/foodangular

● Demonstrate mongo db connection
Solution: https://github.com/jeevanhr7/foodangular/blob/master/server/app.js#L14

● Demonstrate async
https://github.com/jeevanhr7/foodangular/blob/master/server/api/todo/todo.controller.js#L81

● Demonstrate calling external api (pick any api of your choice - rottentomatoes, facebook, google, yelp,
etc.,)
Using Slack incoming Webhooks api
https://github.com/jeevanhr7/foodangular/blob/master/server/api/todo/todo.controller.js#L81
https://github.com/jeevanhr7/foodangular/blob/master/server/api/todo/todo.controller.js#L124

● Demonstrate Authentication

https://github.com/jeevanhr7/foodangular/blob/master/server/auth/auth.service.js
https://github.com/jeevanhr7/foodangular/blob/master/server/api/user/index.js#L11

● Demonstrate Authorization
https://github.com/jeevanhr7/foodangular/blob/master/server/auth/auth.service.js#L53
https://github.com/jeevanhr7/foodangular/blob/master/server/api/user/index.js#L10

● Write API spec for below API using Swagger

https://github.com/jeevanhr7/foodangular/blob/master/todos.swagger.yaml

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.3.0.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

