var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  runSequence(
      'clean',
      ['sass','watch']
  );
});

var requireDir = require('require-dir');
requireDir('gulp/tasks');
