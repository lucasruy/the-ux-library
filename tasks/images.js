import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

import { directories } from '../gulpfile.babel';

gulp.task('images', () => {
  gulp.src(directories.app.images)
    .pipe(imagemin())
    .pipe(gulp.dest(directories.public.images));
});
