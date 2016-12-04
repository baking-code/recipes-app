# recipes-app

Simple React app to show, edit and search for recipes. Redux state stored on a
node app, using sockets.

To run the server, which currently contains a small amount of demo data:
```
npm run server
```

Then running the client side webpack build:
```
npm start
```

Then navigate to `localhost:4441/recipes`.

### TODO (for first release)

* Improve mobile grid layout
* Padding on non-editing collection items
* Add duration somewhere in UI
* Saving of store server-side

### Future Features

* More information on items in landing page
* Crawl from popular recipe websites
