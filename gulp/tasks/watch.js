var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});

gulp.task('watch', ['cssInject'], function() {

  browserSync.init({
    notify: true,
    server: {
      baseDir: "app",
    },
    browser: false
  });

  gulp.watch('./app/index.html', browserSync.reload);

  gulp.watch('./app/assets/css/**/*.css', ['cssInject', browserSync.reload]);

});

