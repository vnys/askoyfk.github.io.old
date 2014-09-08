var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var root = 'app', port = 9000;

gulp.task('browserify', function () {
    return browserify({
        entries: ['./src/js/app.js']
    }).bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest(root))
});
