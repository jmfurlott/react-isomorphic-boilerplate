# React Isomorphic Demo app

This project serves as either a **very simple** boilerplate to start building an isomorphic application in React.js or as an example of one way that it can be done.

Please see the [walkthrough](http://jmfurlott.com/tutorial-setting-up-a-simple-isomorphic-react-app/) for a more thorough explanation of the code.

## Stack

- React.js
- Webpack
- Express
- react-router
- Babel
- Jade

## Installation instructions

 In the project's directory, run the following commands:
```
 $ npm install
 $ npm start
```
 
In Windows npm can not yet run operation in parallel so we add in npm-run-all<br />
Change the start command in package.json to:<br />
"start": "npm-run-all --parallel watch-js dev-server server",
 ```
 $ npm install
 $ npm install --save-dev npm-run-all
 $ npm start
 ```

When the servers are started, visit `http://localhost:3000` to see a Hello world page.

## Next steps:

- Consider the best way to handle flux. There are many options that work in conjunction with the isomorphic server (namely [flummox](https://github.com/acdlite/flummox) or [fluxible](http://fluxible.io/)).  Both of these projects go into great detail about how to add their libraries into an isomorphic app.
- Improve the build task system. Using `npm scripts` is definitely the simplest but a quick look at the `package.json` shows how complicated it can quickly become.
- Separate out `dev` and `prod` environments using Jade and multiple webpack configuration files
- Improve the hierarchy of the folders. `server` is a mess right now and should be cleaned up/separated into a structure that makes more sense and is easier to maintain.
- Make the server rendering and client rendering asynchronous

## Thanks

While outdated, this repo was heavily inspired by [acdlite](http://github.com/acdlite) and his [demo app for flummox](https://github.com/acdlite/flummox-isomorphic-demo) 
