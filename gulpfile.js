var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var order = require('gulp-order');
var rename = require('gulp-rename');

var jsSource = 'src/js/**/*.js';
var jsDest = 'dist/js';
var cssEntry = 'src/scss/main.scss';
var cssSource = 'src/scss/**/*.scss';
var cssDest = 'dist/css';

gulp.task('build-sass', function() {
  return gulp.src(cssEntry)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(cssDest));
});

gulp.task('build-js', function() {
    gulp.src(jsSource)
        .pipe(order([
            'src/js/*.js',
            'src/js/main.js'
        ]))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(jsDest))
});

gulp.task('default', function () {
    gulp.watch(cssSource, ['build-sass']);
    gulp.watch(jsSource, ['build-js'])
});