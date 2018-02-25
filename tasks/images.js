import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import svg from 'gulp-svg-sprite';

import { directories } from '../gulpfile.babel';

gulp.task('images:files', () => {
  gulp.src(directories.app.images)
    .pipe(imagemin())
    .pipe(gulp.dest(directories.public.images));
});

gulp.task('images:svg', () => {
  return gulp.src(directories.app.svg)
  .pipe(svg({
    mode: {
      symbol: {
        render: {
          css: false,
          scss: false
        },
        dest: 'svg',
        sprite: 'icons.svg',
      }
    }
  }))
  .pipe(gulp.dest(directories.public.images));
});

gulp.task('images', ['images:files', 'images:svg']);
