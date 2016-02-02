
var gulp = require('gulp');

// modules
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var filesize = require('gulp-filesize');

gulp.task('clean', function() {
  return gulp.src('/build', {read: false})
    .pipe(clean());
});

gulp.task('scripts', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/scripts/'))
});

gulp.task('styles', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/styles/'))
});
