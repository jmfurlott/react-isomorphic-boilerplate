# React Isomorphic Demo app

This project serves as either a **very simple** boilerplate to start building an isomorphic application in React.js or as an example of one way that it can be done.

## Stack

- React.js
- Webpack
- Express
- react-router
- Babel
- Jade

## Next steps:

- Consider the best way to handle flux. There are many options that work in conjunction with the isomorphic server (namely [flummox](https://github.com/acdlite/flummox) or [fluxible](http://fluxible.io/)).  Both of these projects go into great detail about how to add their libraries into an isomorphic app.
- Improve the build task system. Using `npm scripts` is definitely the simplest but a quick look at the `package.json` shows how complicated it can quickly become.
- Separate out `dev` and `prod` environments using Jade and multiple webpack configuration files
- Improve the hierarchy of the folders. `server` is a mess right now and should be cleaned up/separated into a structure that makes more sense and is easier to maintain.
