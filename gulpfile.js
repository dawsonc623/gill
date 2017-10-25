const babel       = require("gulp-babel"),
      browserify  = require("browserify"),
      del         = require("del"),
      gulp        = require("gulp"),
      source      = require("vinyl-source-stream"),
      ts          = require("gulp-typescript");

const tsProject   = ts.createProject("tsconfig.json");

gulp.task("clean", function()
{
  return del("dist");
});

gulp.task("default", [
  "clean"
], function()
{
  return  tsProject.src()
          .pipe(tsProject()).js
          .pipe(babel({
            "presets": [
              "es2015"
            ]
          }))
          .pipe(gulp.dest("dist"));
});

gulp.task("www-test", [
  "default"
], function()
{
  return  browserify("./dist/app/gill/test.js", {
            "paths": [
              "dist"
            ]
          })
          .bundle()
          .pipe(source("gill.js"))
          .pipe(gulp.dest("./test"));
});
