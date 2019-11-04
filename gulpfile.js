'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');

// start development server
gulp.task('serve', shell.task(['vue-cli-service serve']));

// build for production
gulp.task('build', shell.task(['vue-cli-service build']));

// inspect internal webpack config
gulp.task('inspect', shell.task(['vue-cli-service inspect']));

// run unit tests with mochapack
gulp.task('test:unit', shell.task(['vue-cli-service test:unit']));

// lint and fix source files
gulp.task('lint', shell.task(['vue-cli-service lint']));

// default
gulp.task('default', gulp.series(['serve']));
