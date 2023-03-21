import babel from "gulp-babel";
import uglify from "gulp-uglify";
import concat from "gulp-concat";

export const scripts = () => {
  return app.gulp.src(app.path.source.scripts, { sourcemaps: true })
    .pipe(app.plugins.plumber())
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(app.gulp.dest(app.path.build.scripts))
    .pipe(app.plugins.browsersync.stream())
}