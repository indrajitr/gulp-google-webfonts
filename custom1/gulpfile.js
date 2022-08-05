const gulp = require("gulp");
const del = require("del");
const googleWebFonts = require("../");

const formats = ["woff", "woff2", "eot", "ttf", "svg"];
const options = { fontsDir: "fonts/", cssDir: "css/" };

const clean = () => del(["out/export"]);

const retrieve =
  (fmt = "woff") =>
  () =>
    gulp
      .src("./fonts.list")
      .pipe(
        googleWebFonts({
          ...options,
          format: fmt,
          cssFilename: `fonts.${fmt}.css`,
        })
      )
      .pipe(gulp.dest("out/export"));

gulp.task(
  "default",
  gulp.series(clean, gulp.parallel(formats.map((f) => retrieve(f))))
);
