var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var prefixer = require('gulp-autoprefixer');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('less', function() {
    gulp.src('./src/less/app.less')
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./app/css'));
});
