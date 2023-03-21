import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { clear } from "./gulp/tasks/clear.js";
import { styles } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";

function watcher() {
  gulp.watch(path.watch.styles, styles);
  gulp.watch(path.watch.scripts, scripts);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.html, html);
}


const mainTask = gulp.parallel(html, styles, scripts, images);
const dev = gulp.series(clear, mainTask, gulp.parallel(watcher, server));
const image = gulp.series(clear, images);
const build = gulp.series(clear, mainTask);

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

export { dev }
export { image }
export { build }

gulp.task("default", dev)