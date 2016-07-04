var gulp = require('gulp'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  eslint = require('gulp-eslint'),
  gutil = require('gulp-util'),
  connect = require('gulp-connect'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  babelify = require('babelify'),
  server = require('./server'),
  STATIC_PATH = __dirname + '/public';

gulp.task('less', function () {
  return gulp.src(STATIC_PATH + '/css/src/*.less')
    .pipe(less())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(STATIC_PATH + '/css/dest/'))
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('browserify', ['lint'], function () {
  browserify(STATIC_PATH + '/js/src/main.js')
    .transform('babelify', {
      presets: ['es2015', 'react']
    })
    .bundle()
    .on('error', function (err) {
      gutil.log(err);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(STATIC_PATH + '/js/dest/'))
    .pipe(connect.reload());
});

gulp.task('lint', function () {
  return gulp.src(STATIC_PATH + '/js/src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('html', function () {
  gulp.src(STATIC_PATH + '/index.html')
    .pipe(connect.reload());
});

gulp.task('server', function () {
  server.start();
});

gulp.task('watch', function () {
  var settings = {cwd: STATIC_PATH};

  gulp.watch(['index.html'], settings, ['html']);

  gulp.watch(['css/src/**/*'], settings, ['less']);

  gulp.watch(['js/src/**/*'], settings, ['lint', 'browserify']);
});

gulp.task('dev', ['connect', 'server', 'watch']);
