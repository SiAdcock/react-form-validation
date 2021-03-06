const gulp = require('gulp');
const liveReload = require('gulp-livereload');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

gulp.task('default', ['server']);
gulp.task('server', ['assets', 'webpack-dev-server', 'nodemon'], () => {
  gulp.watch(['app/**/*'], ['js']);
  gulp.watch(['app/styles/**/*.scss'], ['scss']);
});
gulp.task('assets', ['js:stream', 'scss']);
gulp.task('js', (cb) => {
  webpack(webpackConfig, (err) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    cb();
  });
});
gulp.task('js:stream', () => {
  return gulp.src('./client.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('./build/assets'));
});
gulp.task('scss', () => {
  return gulp.src('./app/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/assets'));
});
gulp.task('nodemon', () => {
  liveReload.listen();
  nodemon({
    script: 'index.js'
  });
});
gulp.task('webpack-dev-server', () => {
  return new WebpackDevServer(webpack(webpackConfig), {
    stats: {
      colors: true
    },
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    quiet: true,
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }).listen(8080, 'localhost', (err) => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
});
gulp.task('lint', () => {
  return gulp.src([
      '*.js',
      'app/**/*.js',
      'lib/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
