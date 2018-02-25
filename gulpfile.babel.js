import gulp from 'gulp';
import requireDir from 'require-dir';

export const directories = {
  app: {
    images: './app/static/images/*',
    svg: './app/static/images/svg/*.svg',
    templates: 'app/static/templates/index.pug',
    stylesheets: 'app/static/stylesheets/application.styl',
    javascripts: 'app/src/app.js',
  },
  public: {
    templates: './dist/',
    images: './dist/assets/images',
    stylesheets: './dist/assets/stylesheets',
    javascripts: './dist/assets/javascripts',
  },
};

requireDir('./tasks');

gulp.task('default', ['pug', 'stylus', 'images', 'javascripts', 'browserSync', 'watch']);
