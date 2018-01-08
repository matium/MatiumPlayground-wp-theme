var gulp = require('gulp');
var compass = require('gulp-compass');
var cssmin = require('gulp-cssmin');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('ts.compile', function(){
	var tsResult = tsProject.src()
		.pipe(plumber())
		.pipe(tsProject());

	tsResult.js.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});


gulp.task('scss.compile', function(){
	gulp.src('sass/**/*.scss')
		.pipe(plumber())
		.pipe(compass({
			config_file: 'config.rb',
			css: './',
			sass: 'src/scss'
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('./'));
});


gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: "localhost/matium-pg"
	});
});

gulp.task('bs-reload', function() {
	browserSync.reload();
});

/**
 * watch
 * watchでcompassを自動で書きだす
 */
// Watch
gulp.task('watch', function(){
	gulp.watch('src/ts/**/*.ts', function(event) {
		gulp.run('ts.compile');
	});

	gulp.watch('src/scss/**/*.scss', function(event) {
		gulp.run('scss.compile');
	});

	gulp.watch('style.css', ['bs-reload']);
	gulp.watch('css/*.css', ['bs-reload']);
	gulp.watch('./js/**/*.js', ['bs-reload']);
	gulp.watch('./**/*.php', ['bs-reload']);
});

gulp.task('default', function(){
	gulp.run('browser-sync');
	gulp.run('watch');
});
