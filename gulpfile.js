const { src, dest, watch: gulpWatch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function scss() {
    return src('./scss/styles.scss')
            .pipe(sass({
                indentWidth: 4,
            }))
            .pipe(autoprefixer({
                overrideBrowserslist:  ['last 2 versions'],
            }))
            .pipe(dest('./'));
}

function watch() {
    gulpWatch('./scss/**/*.scss', scss);
}

exports.build = scss;
exports.watch = watch;
