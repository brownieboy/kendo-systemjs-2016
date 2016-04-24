var gulp = require('gulp')
    , path = require("path")
    , Builder = require('systemjs-builder');


gulp.task('default', function () {

// optional constructor options
// sets the baseURL and loads the configuration file
    var builder = new Builder('./', {
        defaultJSExtensions: true,
        paths: {
            "kendo.*": "./bower_components/kendo-ui/src/js/kendo.*"
        },
        transpiler: "plugin-babel",
        map: {
            "plugin-babel": "./node_modules/systemjs-plugin-babel/plugin-babel.js",
            'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
            jquery: './node_modules/jquery/dist/jquery.min.js'
        }
    });

    builder
        .buildStatic('src/js/app.js', './dist/js/app-dist.js')
        .then(function () {
            console.log('Build complete');
        })
        .catch(function (err) {
            console.log('Build error');
            console.log(err);
        });

    gulp.src('src/css/**/*',{base: './src/'})
        .pipe(gulp.dest('./dist/'));
});