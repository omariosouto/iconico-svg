var gulp       = require('gulp');
var svg_sprite     = require('gulp-svg-sprite');

// - Sprites Generator
var configSvg = {
    mode: {
        symbol: {
            dest: 'sprite',
            sprite: 'svg_sprite.svg',
            example: true
        }
    },
    svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
    }
};

gulp.task('run-test', function(){
	console.log('Running!');
});
gulp.task('sprites', function(){
    return gulp.src('icons/**/*.svg')
        .pipe(svg_sprite(configSvg))
        .pipe(gulp.dest('.'))
});

gulp.task('watch', function () {
    gulp.watch('icons/**/*.*', ['sprites', 'run-test']).on('change', function(event) {
	  console.log('File ' + event.path + ' was ' + event.type);
	});
	
});

gulp.task('default', ['sprites', 'watch']);