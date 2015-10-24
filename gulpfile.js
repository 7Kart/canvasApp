var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var path = require('path');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('less', function() {
    console.log('compiling LESS');

    return gulp.src('./assets/less/main.less')  // only compile the entry file
        .pipe(less({
            paths: ['./assets/less/']
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public/'))
        .pipe(livereload());

    console.log('LESS compiled!');
});

var js_files = {
    'main.js': [
        './bower_components/angular/angular.min.js',
        './assets/js/scripts/app.js'
    ]
};

gulp.task('js', function() {
    console.log('compiling js...');

    for (filename in js_files) {
        source_files = js_files[filename];

        gulp.src(source_files)
            .pipe(concat(filename))
            //.pipe(uglify())
            .pipe(gulp.dest('./public/js/'))
    }

    console.log('Js compiled!');
});

gulp.task('watch', function() {
    gulp.watch('./assets/*.less', ['less']);
    gulp.watch('./assets/*/**.less', ['less']);
    gulp.watch('./assets/*/**.js', ['js']);
    gulp.watch('./assets/*.js', ['js']);
    gulp.watch('./assets/**.js', ['js']);
    gulp.watch('./assets/js/*/**.js', ['js']);


});

gulp.task('default', ['js', 'less', 'watch']);