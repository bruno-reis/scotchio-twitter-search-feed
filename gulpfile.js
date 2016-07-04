var browserify = require('browserify');
var gulp = require('gulp');
var source  = require('vinyl-source-stream');
var reactify = require('reactify');
var babelify = require('babelify');

gulp.task('browserify', function () {
  return browserify({entries: ['src/app.jsx'], debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.js', ['browserify']);
  gulp.watch('src/*.jsx', ['browserify']);
});

gulp.task('default', ['watch', 'browserify']);