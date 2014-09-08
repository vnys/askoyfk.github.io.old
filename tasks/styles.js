var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
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

gulp.task('styles', function () {
    return gulp.src('src/scss/app.scss')
        .pipe(sass({
            style: 'expanded',
            sourcemap: true,
            sourcemapPath: '../scss'
        }))
        .on('error', console.error.bind(console))
        .pipe(prefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('app'));
});
