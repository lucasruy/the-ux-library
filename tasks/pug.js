import gulp from 'gulp'
import pug from 'gulp-pug'
import notify from 'gulp-notify'

import { directories } from '../gulpfile.babel'

gulp.task('pug', () => {
  return gulp
    .src(directories.app.templates)
    .pipe(
      pug({ pretty: true }).on(
        'error',
        notify.onError(error => 'Message to the PUG Template: ' + error.message)
      )
    )
    .pipe(gulp.dest(directories.public.templates))
})
