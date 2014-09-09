var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('clone', function(){

  git.clone('https://github.com/h5bp/html5-boilerplate', { cwd: 'dependencies' }, function (err) {
      if (err) throw err;
  });

  git.clone('https://github.com/google/web-starter-kit', { cwd: 'dependencies' }, function (err) {
      if (err) throw err;
  });

  git.clone('https://github.com/askoyfk/football-elements', { cwd: 'node_modules' }, function (err) {
      if (err) throw err;
  });

});
