var gulp = require('gulp');
var args = require('yargs').args

// This will load plugins lazily
var $ = require('gulp-load-plugins')({lazy: true});
// replace any plugins starting with gulp with $.

//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs')
//var util = require('gulp-util');
//var gulpprint = require('gulp-print'); // show what is analyzing
//var gulpif = require('gulp-if');

gulp.task('check', function () {
    gulp.src([
        './src/**/*.js',
        './*.js'
    ])
    //.pipe(gulprint())
    .pipe($.if(args.verbose,$.print()) // gulp check --verbose
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose:true}))
    .pipe($.jshint.reporter('fail')); // in case of fail
});

gulp.task('hello', function () {
    console.log('Hello Gulp');
});

function myCoolLog(msg) {
    console.log('MyGulp> ' + msg);
    if (typeof(msg) === 'object') {
        if (msg.hasOwnProperty(value)) {
            $.util.log($.util.colors.green(msg.value))
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

