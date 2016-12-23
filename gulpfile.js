const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const protractor = require("gulp-protractor").protractor;

gulp.task('test', () =>
    gulp.src('./src/test/LegoTest.js')
            .pipe(protractor({
                configFile: "./conf.js"
            }))
);