const babel       = require("gulp-babel"),
      browserify  = require("browserify"),
      concat      = require("gulp-concat"),
      gulp        = require("gulp"),
      rename      = require("gulp-rename"),
      replace     = require("gulp-replace"),
      rollup      = require("gulp-rollup"),
      source      = require("vinyl-source-stream"),
      ts          = require("gulp-typescript");

const tsProject   = ts.createProject("tsconfig.json");

const rollupResolver  = function (code, id)
{
  if (id)
  {
    return "src/" + code + ".js";
  }
}

gulp.task("default", [
  "dts",
  "js"
]);

gulp.task("js", function()
{
  return  tsProject.src()
            .pipe(
              tsProject()
            ).js
            .pipe(
              rollup({
                "format"  : "cjs",
                "input"   : "src/app/gill/service.js",
                "plugins" : [{
                  "resolveId" : rollupResolver
                }]
              })
            )
            .pipe(
              babel({
                "presets" : [
                  "es2015"
                ]
              })
            )
            .pipe(
              rename("index.js")
            )
            .pipe(gulp.dest("."));
});

gulp.task("dts", function()
{
  return  gulp.src("src/lib/gill/**/*.type.ts")
            .pipe(
              concat("index.d.ts")
            )
            .pipe(
              replace(
                /^import .*;\n/mg,
                ""
              )
            )
            .pipe(
              replace(
                /^export default (\w+);/mg,
                "export { $1 };"
              )
            )
            .pipe(
              replace(
                /$/,
                "\ndeclare let gillService : GillService;\n" +
                "\nexport default gillService;\n"
              )
            )
            .pipe(
              gulp.dest(".")
            );
});

gulp.task("www-test", [
  "default"
], function()
{
  return  browserify("./browser.js")
            .bundle()
            .pipe(source("gill.js"))
            .pipe(gulp.dest("./test"));
});
