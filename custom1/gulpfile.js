const gulp = require("gulp");
var del = require("del");
const googleWebFonts = require("../");

const options = {
  fontsDir: "fonts/",
  cssDir: "css/",
  //   cssFilename: "myGoogleFonts.css",
};

const woff_options = {
  ...options,
  format: "woff",
  cssFilename: "fonts.woff.css",
};

const woff2_options = {
  ...options,
  format: "woff2",
  cssFilename: "fonts.woff2.css",
};

const clean = function () {
  return del(["out/export"]);
};

const woff = function () {
  return gulp
    .src("./fonts.list")
    .pipe(googleWebFonts(woff_options))
    .pipe(gulp.dest("out/export"));
};

const woff2 = function () {
  return gulp
    .src("./fonts.list")
    .pipe(googleWebFonts(woff2_options))
    .pipe(gulp.dest("out/export"));
};

gulp.task("default", gulp.series(clean, gulp.parallel(woff, woff2)));
