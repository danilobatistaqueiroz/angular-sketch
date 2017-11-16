var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var htmlmin = require('gulp-htmlmin');
var gulpBowerFiles = require('gulp-bower-files');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var path = require('path');
var fs = require('fs');

gulp.task('clean', function (cb) {
    return del([
        'webapp/dist/**/*','lib/**/*','dist/lib/**/*'
    ], cb);
});

gulp.task('cssfiles', function () {
   return gulp.src(['webapp/app/styles/**/*.css','webapp/app/bower_components/bootswatch-dist/css/bootstrap.min.css'])
    .pipe(concatCss("bundle.min.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('webapp/dist/styles/'));
});

gulp.task('jsfiles', function () {
	// Get all bower components, but use the minified file if it already exists
	var bowerFiles = require('main-bower-files');
	var files = bowerFiles().map(convertFile);
	var concat = require('gulp-concat');
	//var uglify = require('gulp-uglify');
	gulp.src(files)
		//.pipe(uglify()) // Minify unminified files
		.pipe(concat('bundle.min.js')) // Concat all files into one file
		.pipe(gulp.dest('webapp/dist/js/')); // Write to destination folder
});

/** Convert the path to a JS file to the minified version, if it exists. */
function convertFile(file) {
  console.log(file);
	var ext = path.extname(file);
	var min = file.substr(0, file.length - ext.length);
	min += '.min' + ext;
	return fs.existsSync(min) ? min : file;
}

gulp.task('usemin', function () {
    return gulp.src(['webapp/app/*.html','./lib/**/*'])
		.pipe(htmlreplace({
			'css': 'styles/bundle.min.css',
			'js': 'js/bundle.min.js'
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('webapp/dist/'));
});

gulp.task('build', ['clean','cssfiles','jsfiles'], function () {
    gulp.run('usemin');
});
