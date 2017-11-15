var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var htmlmin = require('gulp-htmlmin');
var gulpBowerFiles = require('gulp-bower-files');

gulp.task('clean', function (cb) {
    return del([
        'webapp/dist/**/*'
    ], cb);
});

gulp.task("bower-files", function(){
    gulpBowerFiles().pipe(gulp.dest("./lib"));
});

gulp.task('usemin', function () {
    return gulp.src('webapp/app/*.html')
		.pipe(htmlreplace({
			'css': 'styles.min.css',
			'js': 'bundle.min.js',
			'ng': 'angular.min.js'
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('webapp/dist/'));
});

gulp.task('copy', function () {
	gulp.src('webapp', {cwd: 'app/**'})
	.pipe(gulp.dest(bases.dist));
});

gulp.task('build', ['clean','bower-files'], function () {
    gulp.run('usemin');
});