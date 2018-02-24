import gulp       from 'gulp';
import stylus     from 'gulp-stylus';
import sourcemaps from 'gulp-sourcemaps';
import notify     from 'gulp-notify';

import { directories } from '../gulpfile.babel';

gulp.task('stylus', () => {
  return gulp.src(directories.app.stylesheets)
    .pipe(sourcemaps.init())
    .pipe(stylus({ compress: true }).on('error', notify.onError(error => 'Message to the Stylus: ' + error.message)))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(directories.public.stylesheets));
});
