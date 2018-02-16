var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});

gulp.task('watch', ['cssInject'], function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app",
    },
    browser: false
  });

  gulp.watch('./app/index.html', browserSync.reload);

  gulp.watch('./app/assets/styles/**/*.css', ['cssInject', browserSync.reload]);

  gulp.watch('./app/assets/scripts/**/*.js', ['scriptsRefresh']);

});

