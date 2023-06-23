import path from 'path';

const projectDirName = path.basename(path.resolve());
const buildFolder = `./dist`;
const srcFolder = `./src`;

const filePaths = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    static: `${buildFolder}/static/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    static: `${srcFolder}/static/**/*.*`,
    svgIcons: `${srcFolder}/img/icons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    img: `${srcFolder}/**/*.{jpg,jpeg,png,gif,webp,ico}`,
    static: `${srcFolder}/static/**/*.*`,
    svgIcons: `${srcFolder}/img/icons/*.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  projectDirName,
  ftp: ``, // Путь к нужной папке на удаленном сервере. Gulp добавит имя папки проекта автоматически
};

export { filePaths };