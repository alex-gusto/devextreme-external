const { task, src, dest, series } = require("gulp");
const babel = require("gulp-babel");
const pathes = require("./pathes");
const del = require("del");

module.exports = (taskName) => {
  const srcFolder = pathes.src[taskName];
  const distFolder = pathes.dist[taskName];

  if (!srcFolder || !distFolder) throw new Error("Source or distination folder not set!");

  const cleanTaskName = `${taskName}:clean`;
  const buildTaskName = `${taskName}:build`;

  task(cleanTaskName, () => {
    return del([distFolder]);
  });

  task(buildTaskName, function () {
    return src(srcFolder).pipe(babel()).pipe(dest(distFolder));
  });

  return series(cleanTaskName, buildTaskName);
};
