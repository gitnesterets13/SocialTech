var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

function css_style(done) {

	gulp.src('./scss/**/*')
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 versions'],
			cascade: false 
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe( gulp.dest('./css/') );

	done();
}

function print(done) {
	console.log('Start');
	done();
}

function watchSass() {
	gulp.watch('./scss/**/*', css_style);
}

gulp.task('default', gulp.series(print, watchSass));