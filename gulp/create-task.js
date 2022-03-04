const { src, dest, series } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const pathes = require("./pathes");
const del = require("del");

module.exports = (taskName) => {
  const srcFolder = pathes.src[taskName];
  const distFolder = pathes.dist[taskName];

  if (!srcFolder || !distFolder) {
    throw new Error("Source or distination folder not set!");
  }

  const cleanTask = () => del([distFolder]);

  const buildTask = () =>
    src(srcFolder)
      .pipe(
        babel({
          plugins: [
            "@babel/plugin-transform-modules-systemjs",
            function (babel) {
              const { parse } = babel;
              return {
                visitor: {
                  ExportDefaultDeclaration(path) {
                    const file = parse(`_export("__useDefault", true)`);
                    path.insertBefore(file.program.body[0]);
                  },
                },
              };
            },
          ],
        })
      )
      .pipe(uglify())
      .pipe(dest(distFolder));

  return series(cleanTask, buildTask);
};
