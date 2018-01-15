var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var es = require('event-stream')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var zip = require('gulp-zip')
var minimist = require('minimist')
var fs = require('fs')
var _ = require('lodash')
var path = require('path')
var mergeStream = require('merge-stream')
var strip = require('gulp-strip-comments')
var babel = require('gulp-babel')

// to add 
const source = {
  www: {
      src: [
          // main module
          'www/modules/app.js',

          // module files
          'www/modules/**/*.module.js',

          // other js files [controllers, services, etc.]
          'www/modules/**/!(*.module)*.js'
      ]
  }
}

const destinations = {
  www: {
      js: 'www/build'
  }
}

const appWasBroken = {
  www: false
}


// concats angular files
gulp.task('www-js', function () {
    return es.merge(gulp.src(source.www.src))
        .pipe(babel({
            presets: ['es2015']
        }))
        // .pipe(uglify())
        .pipe(concat('app.js'))
        .on('error', swallowError)
        .pipe(gulp.dest(destinations.www.js))
})

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['dev']);
gulp.task('dev', ['www-js', 'sass'])

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['sass','www-js'], function() {
  gulp.watch(source.www.src, ['www-js'])
  gulp.watch(paths.sass, ['sass']);
});

const swallowError = function (src, task, error) {
    console.log(error.toString())
    this.emit('end')
}