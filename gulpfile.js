var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// var concat =require('gulp-concat');



gulp.task('jsBrowserify', function()  //need to add ['concatInterface']
  return browserify({ entries: ['./js/year-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

// gulp.task('concatInterface', function() {
//   return gulp.src(['./js/pingpong-interface.js', './js/signup-interface.js'])
//     .pipe(concat('allConcat.js'))
//     .pipe(gulp.dest('./tmp'));
// });
