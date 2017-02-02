const gulp           = require('gulp');
const watch          = require('gulp-watch');
const svg_sprite     = require('gulp-svg-sprite');
const color          = require('gulp-color');

// - Sprites Generator
// - Icons
const configSvg = {
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
    return watch('./icons/svg/**/*.svg', { ignoreInitial: false }, function () {
      gulp.src('./icons/svg/**/*.svg')
      .pipe(svg_sprite(configSvg))
      .pipe(gulp.dest('./icons'))
      console.log(color('[SVG-ICON _sprite generated]', 'GREEN'));
    });
});

gulp.task('default', ['sprites']);