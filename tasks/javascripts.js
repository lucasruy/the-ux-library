import gulp from 'gulp'
import notify from 'gulp-notify'

import babelify from 'babelify'
import browserify from 'browserify'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'
import rename from 'gulp-rename'

import strip from 'gulp-strip-comments'
import uglify from 'gulp-uglify'

import { directories } from '../gulpfile.babel'

const compile = file => {
  file
    .bundle()
    .on(
      'error',
      notify.onError(error => 'Message to the Javascript: ' + error.message)
    )
    .pipe(source(directories.app.javascripts))
    .pipe(buffer())
    .pipe(strip())
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(directories.public.javascripts))
}

gulp.task('javascripts:script', () => {
  const bundler = browserify(directories.app.javascripts).transform(babelify, {
    presets: ['es2015']
  })
  compile(bundler)
})

gulp.task('javascripts', ['javascripts:script'])
