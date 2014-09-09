var gulp = require('gulp');

gulp.task('setup', function () {
    gulp.src('dependencies/html5-boilerplate/dist/css/*')
        .pipe(gulp.dest('src/less/html5-boilerplate'))
})
