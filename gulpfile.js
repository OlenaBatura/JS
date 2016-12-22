const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const protractor = require("gulp-protractor").protractor;

gulp.task('default', () =>
    gulp.src('./src/test/LegoTest.js')
            .pipe(jasmine())
            .pipe(protractor({
                configFile: "./conf.js"
            }))
);