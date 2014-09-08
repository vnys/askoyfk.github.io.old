var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: ['app']
    }
  });

 gulp.watch(['app/**/*.*'], reload);
 gulp.watch(['src/**/*.js'], ['browserify']);
 gulp.watch(['src/**/*.{json,hbs}'], ['render']);
 gulp.watch(['src/**/*.scss'], ['styles']);
});
