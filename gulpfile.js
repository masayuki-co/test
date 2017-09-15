let gulp = require('gulp');
let imagemin = require('imagemin');
let data = require('gulp-data');
let stylus = require('gulp-stylus');
let plumber = require('gulp-plumber');
let pug = require('gulp-pug');


gulp.task('stylus', () => {
	return gulp.src('./_dev/css/style.styl')
		.pipe(stylus())
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err.messageFormatted);
			}
		}))
		.pipe(gulp.dest('./htdocs/css'));
});


gulp.task('jade', () => {
	return gulp.src(['./_dev/template/*.jade', '!./_dev/**/_*.jade'])
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./html/'));
});


gulp.task('imagemin', function () {
	return gulp.src('./_dev/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./htdocs/img'));
});


gulp.task('watch', function () {
	gulp.watch('./_dev/css/*.styl', ['stylus']);
});


gulp.task('default', ['stylus','watch']);
