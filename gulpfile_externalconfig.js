var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs')
var util = require('gulp-util');
var gulpprint = require('gulp-print'); // show what is analyzing
var gulpif = require('gulp-if');
var args = require('yargs').args

// External config
var config = require('./gulp.config')(); // require and run to get

gulp.task('check', function () {
    gulp.src(config.alljs)
    //.pipe(gulprint())
    .pipe(gulpif(args.verbose,gulprint()) // gulp check --verbose
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {verbose:true}))
    .pipe(jshint.reporter('fail')); // in case of fail
});

gulp.task('hello', function () {
    console.log('Hello Gulp');
});

function myCoolLog(msg) {
    console.log('MyGulp> ' + msg);
    if (typeof(msg) === 'object') {
        if (msg.hasOwnProperty(value)) {
            util.log(util.colors.green(msg.value))
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}

