# hacker-news-firebase

To bring in dependencies run the following in the root of the project..
```
npm i
```

### Task overview
See the scripts section of the package.json for a fuller outline..

* **npm run start:node** - runs the page in a server http://localhost:3000 (requires npm run build first!)
* **npm run lint** - runs js and json linting tasks
* **npm test** - runs javascript tests
* **npm run compile** - outputs static files for css, js, and other static assets
* **npm run build** - lints, tests, amd compiles the site
* **npm run watch** - sets up watch tasks to help speed up development
* **npm run release** - bump the version number and create a release on github

### To run project..

```
npm run build
npm run start:node
```
### For production build..

```
NODE_ENV=production npm run build
NODE_ENV=production npm run start:node

```
