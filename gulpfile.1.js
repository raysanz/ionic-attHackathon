var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

// to add 
const source = {
  public: {
      src: [
          // main module
          'www/modules/app.js',

          // module files
          'www/modules/**/*.module.js',

          // other js files [controllers, services, etc.]
          'www/modules/**/!(module)*.js'
      ]
  }
}

const destinations = {
  public: {
      js: 'public-unrestricted/build'
  }
}

const appWasBroken = {
  public: false
}

gulp.task('public-js', buildApp('public'))


// creates task to concat angular files
function buildApp(fileset) {
  return function () {
      let isBroken = false

      gulp.src(source[fileset].src)
          .pipe(plumber({
              errorHandler: error => {
                  isBroken = true
                  appWasBroken[fileset] = true
                  const strippedError = Object.create(error)
                  strippedError.stack = stripAnsi(error.stack)
                  return notify.onError("<%= error.stack %>")(strippedError)
              }
          }))
          .pipe(babel({
              presets: ['es2015']
          }))
          // .pipe(uglify())
          .pipe(concat('app.js'))
          .pipe(gulp.dest(destinations[fileset].js))
          .pipe(gulpif(
              file => {
                  if (!appWasBroken[fileset] || isBroken) return false
                  appWasBroken[fileset] = false
                  return true
              },
              notify(`${fileset} app fixed!`)
          ))
  }
}

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

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

gulp.task('watch', ['sass','public-js'], function() {
  gulp.watch(source.public.src, ['public-js'])
  gulp.watch(paths.sass, ['sass']);
});
