var gulp = require('gulp'),
    ngTemplateCache = require('gulp-angular-templatecache'),
    ngAnnotate = require('gulp-ng-annotate');

var DEST = 'build/';

gulp.task('default', function() {
    gulp.src('src/demo/*.*')
        .pipe(gulp.dest(DEST))
        
    gulp.src('src/*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest(DEST))

    gulp.src('src/templates/**/*.html')
        .pipe(ngTemplateCache())
        .pipe(gulp.dest(DEST + 'templates/'))
});