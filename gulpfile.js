const gulp = require('gulp');
const liveReload = require('gulp-livereload');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

gulp.task('default', ['server']);
gulp.task('server', ['assets', 'webpack-dev-server', 'nodemon'], () => {
  gulp.watch(['app/**/*'], ['js'])
});
gulp.task('assets', ['js']);
gulp.task('js', (cb) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
    cb();
  })
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
    noInfo: true
  }).listen(8080, 'localhost', (err) => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
});
