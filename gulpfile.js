var gulp = require("gulp"),
	minifycss = require("gulp-minify-css"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	jshint = require("gulp-jshint"),
	del = require("del");

gulp.task("clean", function() {
	del("dist/*");
});

gulp.task("jshint", function() {
	return gulp.src("web/js/*.js")
	.pipe(jshint())
	.pipe(jshint.reporter("default"));
});

gulp.task("minifycss", function() {
	return gulp.src("web/css/*.css")
	.pipe(rename({suffix: ".min"}))
	.pipe(minifycss())
	.pipe(gulp.dest("Css"));
});

gulp.task('minifyjs', function () {
	gulp.src('web/js/*.js')
	.pipe(concat("main.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(rename({suffix: ".min"}))
	.pipe(uglify({
		mangle: {
			toplevel: true
		},
		compress: true
	}))
	.pipe(gulp.dest('dist/js'));
});

gulp.task("html", function() {
	gulp.src("web/*.html")
	.pipe(gulp.dest("dist"));
});

gulp.task("default", ["jshint", "clean"], function() {
	gulp.start("clean", "minifycss", "minifyjs", "html");
});
