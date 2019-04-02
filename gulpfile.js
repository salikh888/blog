var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');

gulp.task('default', function() {
    return gulp
        .src('dev/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(
            autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
                cascade: true
            })
        )
        .pipe(cssnano())
        .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('scripts', function() {
    return gulp
        .src([
            'dev/js/auth.js'
        ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'))
});

gulp.task('watch:styles', function() {
    return gulp.watch('dev/scss/**/*.scss', gulp.parallel('default'))
});

gulp.task('watch:js', function() {
    return gulp.watch('dev/js/**/*.js', gulp.series('scripts'))
});