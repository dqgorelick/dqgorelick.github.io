var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');
var minifyCss = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');

livereload({ start: true });

gulp.task('styles', function(){
	return gulp.src([
		'assets/styles/**.scss'
		])
		.pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('css'))
		.pipe(livereload());
})

gulp.task('jshint', function () {
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('htmls', function() {
    return gulp.src('**.html')
    .pipe(livereload());
});

gulp.task('server', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('watch', function() {
	livereload.listen();
  gulp.watch('js/*.js', ['jshint']);
	gulp.watch('assets/styles/**.scss', ['styles']);
	gulp.watch('**.html', ['htmls']);
  gulp.watch('perspective/*', ['styles']);
})

gulp.task('default', ['watch','styles','jshint','server']);
