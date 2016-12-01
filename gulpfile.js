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

gulp.task('sprites', function(){
    return gulp.src('icons/**/*.svg')
        .pipe(svg_sprite(configSvg))
        .pipe(gulp.dest('.'))
});

gulp.task('watch', function () {
    gulp.watch('./icons/**/*.*', ['sprites']);
	
});

gulp.task('default', ['sprites', 'watch']);