import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./dist`;
const sourceFolder = `./source`;

export const path = {
  build: {
    assets: `${buildFolder}/static`,
    scripts: `${buildFolder}/static/js`,
    styles: `${buildFolder}/static/style`,
    images: `${buildFolder}/static/images/`,
    html: `${buildFolder}/`
  },
  source: {
    assets: `${sourceFolder}/static/{favicon,fonts}/*.*`,
    scripts: `${sourceFolder}/static/js/main.js`,
    styles: `${sourceFolder}/static/style/main.scss`,
    images: `${sourceFolder}/static/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${sourceFolder}/static/images/**/*.svg`,
    html: `${sourceFolder}/*.html`
  },
  watch: {
    scripts: `${sourceFolder}/static/js/**/*.js`,
    styles: `${sourceFolder}/static/style/**/*.scss`,
    images: `${sourceFolder}/static/images/**/*.{jpg,jpeg,png,gif,webp}`,
    html: `${sourceFolder}/*.html`
  },
  clean: buildFolder,
  buildFolder,
  sourceFolder,
  rootFolder
}