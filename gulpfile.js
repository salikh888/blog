const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');

gulp.task('default',gulp.parallel('css'), function() {
    return gulp
        .src('dev/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(
            autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
                cascade: true
            })
        )
        // // .pipe(cssnano())
        .pipe(gulp.dest('public/stylesheets'))

});



gulp.task('default',gulp.parallel('scss'), function()  {
    gulp.watch('dev/scss/**/*.scss', ['scss']);
});