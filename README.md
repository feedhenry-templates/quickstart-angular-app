## FeedHenry 3 Studio
### QuickStart AngularJS Client-side Template 
==================================================================================================================

This repo is basic HTML5/ AngularJS Hybrid client side template for projects developed on the FeedHenry 3 Studio.
Visit [FeedHenry](http://www.feedhenry.com) Cloud Platform for more information on developing HTML5 apps with the 
FeedHenry Studio.

### Package Contents
+ **app** - Contains all client side JS files .
    + **modules** - Directory containing reuseable Angular modules.
        + **cloud.js** - Reuseable Service module wrapping the `$fh.cloud` API call.
    + **app.js** - Client-side app entry point.
    + **controllers.js** - Blank script ready to create all client-side controllers.
    + **directives.js** - Contains reuseable header and footer directives.
    + **services.js** - Blank script ready to create all custom client-side services.
    + **filters.js** - Blank script ready to create all custom client-side filters.
+ **css** - Directory containing template style sheets and dependencies.
    + **lib** - Directory containing dependencies.
        + **bootstrap** - Directory containing bootstrap css library.
        + **fonts** - Directory containing font files for project.
    + **app.css** - Templates main Styling entry point.
    + **main.css** - stylesheet containing all custom styling for template.
+ **imgs** - Template images directory.
+ **lib** - Directory containing templates JS dependencies library.
    + **angular** - Directory containing AngularJS library.
        + **angular.js** - Uncompressed AngularJS library.
        + **angular.min.js** - Compressed AngularJS library.
    + **angular-snap** - Directory containing directive modules for `snap.js`.
        + **angular-snap.js** - Uncompressed AngularJS directive module based on `snap.js`.
        + **angular-snap.min.js** - Compressed AngularJS directive module based on `snap.js`.
        + **angular-snap.css** - Associcated uncompressed CSS stylesheet for `angular-snap.js`.
        + **angular-snap.min.css** - Associcated compressed CSS stylesheet for `angular-snap.js`.
    + **angular-route** - Directory containing `ngRoute` module.
        + **angular-route.js** - Uncompressed AngularJS module for `ngRoute` dependency. 
        + **angular-route.min.js** - Compressed AngularJS module for `ngRoute` dependency.
    + **angular-resource** - Directory containing `ngResource` module.
        + **angular-resource.js** - Uncompressed AngularJS module for `ngResource` dependency.
        + **angular-resource.min.js** - Compressed AngularJS module for `ngResource` dependency.
    + **fh-modules** - Directory genaric AngularJs modules incorporating [FeedHenry](http://www.feedhenry.com) hybrid API functions .
        + **angular-fhcloud.js** - AngularJS Service module wrapping `$fh.cloud` API call.
    + **jQuery-2.1.0.js** - jQuery framework script.
    + **snap.js** - Snap.js library script, Angular-snap directive is dependent on this. 
    + **fh-modules** - Directory genaric AngularJs modules incorporating [FeedHenry](http://www.feedhenry.com) hybrid API functions .
+ **views** - Directory containing templates views/partcials.
    + **components** - Directory containing individual reuseable html components.
        + **header.html** - Template for header directive.
        + **footer.html** - template for footer directive.
    + **example.html** - templates main view/partial.
+ **README.md** - Repo contents.