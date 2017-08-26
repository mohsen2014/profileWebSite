var gulp = require('gulp'),
	clean = require('gulp-clean'),
	gulpSequence = require('gulp-sequence')


let bowerFolder = 'bower_components',
	publicFolder = 'public',
	srcFolder = 'src'

gulp.task('clean' ,function() {
	return gulp.src(publicFolder)
		.pipe(clean());	
})

gulp.task('index' ,function(){
	return gulp.src(srcFolder + '/index.html')
		.pipe(gulp.dest(publicFolder));
})

gulp.task('bootstrap' ,function() {
	return gulp.src(bowerFolder + '/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest(publicFolder + '/styles/'));
});

gulp.task('default',function(){
	gulpSequence('clean',['index' ,'bootstrap'])(function(err){
		console.log(err);
	});
});