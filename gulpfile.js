'use strict';

// Tool
const gulp = require('gulp');
const concat = require('gulp-concat'); // 合并文件
const runSequence = require('run-sequence'); // Task同步执行工具
const plumber = require('gulp-plumber');
const del = require('del'); // 文件删除
const notify = require('gulp-notify'); // Gulp 提示工具

// CSS
const autoprefixer = require('gulp-autoprefixer'); // CSS自动添加前缀
const sass = require('gulp-sass'); // 编译 SASS
const postcss = require('gulp-postcss'); // CSS 编译器
const minify = require('gulp-minify-css')

// JS
const rollup = require('rollup'); // JS打包工具
const babel = require('rollup-plugin-babel'); // JS babel
const commonjs = require('rollup-plugin-babel'); // Common JS
const resolve = require ('rollup-plugin-node-resolve'); // 使 Rollup 支持 NPM 模块
const uglify = require('rollup-plugin-uglify');

/* -------------------------------------------------------- */
/* ------------------------  CSS  ------------------------- */

gulp.task('css', function () {
  return gulp.src([
        'assets/stylesheets/reset.css',
        'assets/stylesheets/style.scss'
      ])
      .pipe(plumber({
        errorHandler: errorAlert
      }))
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer('last 2 version'))
      .pipe(concat('build.css'))
      .pipe(minify())
      .pipe(gulp.dest('assets/dist'));
});

gulp.task('build-css', function (callback) {
  runSequence(['clean-files'], ['css'], callback)
});

/* -------------------------------------------------------- */
/* ---------------------  JavaScript  --------------------- */

gulp.task('js', async function () {
  const bundle = await rollup.rollup({
    input: './assets/javascripts/app.js',
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      uglify.uglify()
    ]
  })
  await bundle.write({
    file: './assets/dist/build.js',
    format: 'iife'
  })
});

gulp.task('build-js', function (callback) {
  runSequence(['clean-files'], ['js'], callback)
});


/* -------------------------------------------------------- */

// 清理旧文件
gulp.task('clean-files', function(cb) {
  return del([
    'assets/dist/*'
  ], cb);
});

//监测任务
gulp.task('watch', function() {

  // Watch .scss
  const cssVendors = [
    'assets/stylesheets/*.css',
    'assets/stylesheets/*.scss'
  ];

  // Watch .js
  const jsVendors = [
    'assets/javascripts/*.js'
  ];

  gulp.watch(cssVendors, ['build-css', 'build-js']);
  gulp.watch(jsVendors, ['build-css', 'build-js']);

});

/* -------------------------------------------------------- */

// development workflow task
gulp.task('dev', function (cb) {
  runSequence(['build-css', 'build-js'], ['watch'], cb);
});

gulp.task('default', ['dev']);


/* -------------------------------------------------------- */

// handle errors
function errorAlert(error){
  notify.onError({
    title: "Error in plugin '" + error.plugin + "'",
    message: 'Check your terminal',
    sound: 'Sosumi'
  })(error);
  console.log(error.toString());
  this.emit('end');
}
