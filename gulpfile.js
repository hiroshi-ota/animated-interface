var gulp = require('gulp');

//settings
var dev = true; //false to get distribution build

// modules
var clean = require('gulp-clean');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var filesize = require('gulp-filesize');
var uglify = require('gulp-uglify');
var series = require('stream-series');
var ify = require('gulp-if');
var compass = require('gulp-compass');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('clean', function () {
  return gulp.src('/build', {read: false})
    .pipe(clean());
});

gulp.task('scripts', function () {
  return series(gulp.src('js/vendor/*.js'), gulp.src('js/!(vendor)/*.js'))
    .pipe(concat('main.js'))
    .pipe(ify(!dev, uglify()))
    .pipe(gulp.dest('build/scripts/'))
    .pipe(filesize())
});

gulp.task('styles', function () {
  return series(gulp.src('sass/settings/*.scss'), gulp.src('sass/!(settings)/*.scss'))
	.pipe(concat('all.scss'))
    .pipe(sass())
    .pipe(autoprefix('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('main.css'))
    .pipe(ify(!dev, minifyCss()))
    .pipe(gulp.dest('build/styles/'))
    .pipe(filesize())
});

gulp.task('build', ['clean', 'styles', 'scripts']);

