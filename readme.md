# kendo-systemjs-2016
A Kendo test for working with SystemJS; i.e. it doesn't!!

###The problem
SystemJS is not finding the dependent Kendo libraries.  It does load libraries that are loaded directly by my code.  For example,  in /src/js/app.js I am loading kendo.router.js, and SystemJS find that just find.  However, kendo.router.js then tries to load kendo.core.js, and for some reason SystemJs is unable to find that.

###Possible Causes
This appears to be a problem introduced with the 2016 versions of Kendo.  This repository uses version 2016.1.226+SP1.  Apparently, Telerik changed some of the AMD definitions in the 2016 versions.  The problem does not happen with the last 2015 version of Kendo, which you can check via a separate repository at https://github.com/brownieboy/kendo-systemjs-2015.



###Environment
The code in this repository uses Node/npm to install its dependencies.  Setup instructions are:

1. Install [Node/npm](https://nodejs.org/en/download/) if you don't have it already.  For Windows, you'll also need a bash shell, which you get if you install [Github for Windows] (https://desktop.github.com/) (make sure you tick the box to install the shell).
1. In a bash window, git clone this repository.
1. cd to the repository folder, then issue `npm install` to download the dependencies.
1. One of those dependencies will be Bower.  You can now use Bower to install Kendo Pro from the official Telerik Bower packages by issuing ` node_modules/.bin/bower install` at your command prompt.  You will be prompted to your Telerik ID and password at this stage, and may have to enter them twice.
1. Open the file src/index.html in your browser in a local web server.  I use Sublime Server for this.

###Further Notes
SystemJS uses Babel to transpile ES6 modules into ES5.


