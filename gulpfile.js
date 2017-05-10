var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    autopref = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('./src/sass/main.scss')
        .pipe( sass({
            includePaths: require('node-normalize-scss').includePaths
        }) )
        .pipe( sass())
        .pipe( autopref() )
        .pipe( gulp.dest('build/css') );
});

gulp.task('pug', function() {
    gulp.src('./src/templates/index.pug')
        .pipe( pug() )
        .pipe( gulp.dest('build/') );
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/templates/**/*.pug', ['pug']);
});

gulp.task('build', ['sass', 'pug']);