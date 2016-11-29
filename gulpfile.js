'use strict';

let gulp = require('gulp'),
    ghPages = require('gulp-gh-pages'),
    bower = require('gulp-bower'),
    clean = require('gulp-clean'),
    protractor = require('gulp-angular-protractor'),
    peterGhRemote = 'https://github.com/peterhendrick/peterhendrick.github.io',
    thomasGhRemote = 'https://github.com/ThomasHendrick/ThomasHendrick.github.io',
    sourceFiles = [
        './bower_components/**',
        './css/**',
        './images/**',
        './js/**',
        './pages/**',
        '404.html',
        'CNAME',
        'favicon.ico',
        'index.html'
    ];

gulp.task('bowerInstall', () => {
    return bower();
});

gulp.task('protractor', ['bowerInstall'], (callback) => {
    gulp.src(['test.js'])
        .pipe(protractor({
            'configFile': 'conf.js',
            'debug': false,
            'args': ['--baseUrl', 'http://localhost:8080'],
            'autoStartStopServer': false,
            'verbose': false
        }))
        .on('error', (e) => {
            console.log(e);
            process.exit(1);
        })
        .on('end', () => callback);
});

gulp.task('clean', ['protractor'], () => {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('deployPeter', ['clean'], () => {
    return gulp.src(sourceFiles, {base: '.'})
        .pipe(ghPages(_options(peterGhRemote)));
});

gulp.task('deploy', ['clean'], () => {
    return gulp.src(sourceFiles, {base: '.'})
        .pipe(ghPages(_options(thomasGhRemote)));
});

function _options(remoteUrl) {
    return {
        remoteUrl: remoteUrl,
        origin: 'origin',
        branch: 'master',
        cacheDir: 'dist/',
        push: true,
        force: true,
        message: 'Gulp Deployment'
    }
}