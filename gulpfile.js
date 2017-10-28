/// <binding BeforeBuild='build-all' Clean='clean, clean-test' ProjectOpened='watch, watch-test' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var onError = function (err) {
	//console.log(err);
};




gulp.task('watch', function () {
	gulp.watch("src/**/*.ts", ["build"]);
});

gulp.task('clean', function () {
	return del(["./wwwroot/dist/*"]);
});


gulp.task('build', ['clean'], function () {
	var proj = ts.createProject('tsconfig.json');
	var task = proj.src()
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(sourcemaps.init()).pipe(proj());

	return merge([
		task.js.pipe(sourcemaps.write('.')).pipe(gulp.dest('./wwwroot/dist')),
		task.dts.pipe(gulp.dest('./wwwroot/dist'))
	]);	
});


gulp.task('watch-test', function () {
	gulp.watch(["test/*.js", "test/**/*.ts"], ["build-test"]);
});

gulp.task('clean-test', function () {
	return del(["./wwwroot/test/*"]);
});

gulp.task('build-test', ['clean-test', 'build'], function () {
	var proj = ts.createProject('tsconfig-test.json');
	var task = proj.src().pipe(sourcemaps.init()).pipe(proj());

	return merge([
		task.js.pipe(sourcemaps.write('.')).pipe(gulp.dest('./wwwroot/test')),
		task.dts.pipe(gulp.dest('./wwwroot/test'))
	]);	
});

gulp.task('build-all', ['build', 'build-test']);