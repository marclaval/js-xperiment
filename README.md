js-xperiment
============
A study of various templating javascript frameworks.  
The idea is to implement the same simple application with each of them:
- [Angular](http://angularjs.org/)
- [Hashspace](https://github.com/ariatemplates/hashspace)
- [Polymer](http://www.polymer-project.org/)
- [Ractive](http://www.ractivejs.org/)
- [React](http://facebook.github.io/react/index.html)
  
The application must remain simple and be hostable on any webserver (e.g. GitHub pages).  
Its design is based on [Bootstrap](http://getbootstrap.com/) and the [Flat-UI](http://designmodo.github.io/Flat-UI/) theme.  
  
Demo website: http://mlaval.github.io/js-xperiment/  

## Specifications ##
Functional: https://github.com/mlaval/js-xperiment/tree/master/mockup  
Mockups: http://mlaval.github.io/js-xperiment/mockup  

## Technical requirements ##
The goal is to go further than [TodoMVC](http://todomvc.com/) and to face more advanced challenges:
- Components
- CRUD based on remote REST API: [MongoLab](https://mongolab.com/)
- Routing
- Packaging
- Unit tests
- Mobile support
- Offline support

The project can be phased as follows:

### Step 1 ###
Implement the application in dev mode with well organised code:
- one file per page
- one file per component  
This version should be available on the demo website.

### Step 2 ###
Add unit tests  
Set up the build (CI, compilation, packaging and minification) of the application and the framework itself if possible.  
Have it run in [Travis](https://travis-ci.org/) and publish the output on the demo website.

### Step 3 ###
Add more features:
- Support of mobile browsers
- CSS3 transitions between pages
- Offline mode

## Development

The **master** branch will be kept clean ta maintain specifications and mockups.  
Pull requests are welcome on these topics.

### Preparing your environment

- install Grunt cli globally: `npm install -g grunt-cli`
- install local npm modules: `npm install`

### Running local server
Run `grunt` to start a local server, and then go to [http://localhost:8080/](http://localhost:8080/)
