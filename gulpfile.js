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
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');
var jsImports = require('gulp-imports');

gulp.task('clean', function () {
  return gulp.src('/build', {read: false})
    .pipe(clean());
});

gulp.task('scripts', function () {
  gulp.src(['js/scripts.js'])
    .pipe(jsImports())
    .pipe(concat('main.js'))
    .pipe(ify(!dev, uglify()))
    .pipe(gulp.dest('build/scripts/'))
    .pipe(filesize())
});

gulp.task('styles', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(autoprefix({browsers: ['last 4 version']}))
    .pipe(concat('main.css'))
    .pipe(ify(!dev, minifyCss()))
    .pipe(gulp.dest('build/styles/'))
    .pipe(filesize())
});

gulp.task('build', ['clean', 'styles', 'scripts'], function() {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('js/!(vendor)/*.js', ['scripts']);
});

