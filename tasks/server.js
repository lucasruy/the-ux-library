import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task ('server', () => {
  return browserSync.init({
    open: 'external',
    files: [
      'dist/index.html',
      'dist/assets/stylesheets/*.css',
      'dist/assets/javascripts/*.js',
    ],
    server: {
      baseDir: './dist/',
    },
  });
});

gulp.task('browserSync', ['server']);
