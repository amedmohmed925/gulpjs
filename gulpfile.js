const gulp = require('gulp');
const livereload = require('gulp-livereload');
const { parallel } = require('gulp');
// To Concat Files
const concat = require('gulp-concat');
// To Minify Html 
const htmlmin = require('gulp-htmlmin');
// To Minify css
const cleanCSS = require('gulp-clean-css');

function minifyHtml() {
    return gulp
    .src('src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
  }
function minifycss() {
    return gulp
    .src(['src/eny.css', 'src/style.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
}
  exports.default = function () {
    require("./server.js");
    livereload.listen();
  
    gulp.watch( ["src/index.html"]  , parallel(minifyHtml, minifycss)  );
  };
  