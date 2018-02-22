var gulp = require('gulp'),
  modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      'classPrefix': 'has-',
      'options': [
        'setClasses'
      ],
      'feature-detects': []
    }))
  .pipe(gulp.dest('./app/temp/scripts/'));
});
