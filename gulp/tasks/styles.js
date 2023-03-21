import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";

const sass = gulpSass(dartSass);

export const styles = () => {
  return app.gulp.src(app.path.source.styles)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(sourcemaps.write("."))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.browsersync.stream())
}
