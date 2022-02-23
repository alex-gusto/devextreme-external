const { task, src, series, dest } = require("gulp");
const pathes = require("./pathes");
const del = require("del");
const webpack = require("webpack-stream");
const fg = require("fast-glob");

const srcFolder = pathes.src["devextreme-vue"];
const distFolder = pathes.dist["devextreme-vue"];

const webpackConfig = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
  },
  mode: "production",
  output: {
    filename: "[name].js",
    libraryTarget: "system",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
  },
  externals: ["vue", /^devextreme\//],
};

task("devextreme-vue:clean", async () => {
  return del([distFolder]);
});

task("devextreme-vue:build", async () => {
  const entryPathes = await fg(srcFolder, { dot: true });
  const entry = entryPathes.reduce((acc, path) => {
    const match = path.match(/[a-z-]+\.js$/);
    const [fileName] = match;
    acc[fileName.replace(".js", "")] = path;
    return acc;
  }, {});

  return src(".")
    .pipe(
      webpack({
        ...webpackConfig,
        entry,
      })
    )
    .pipe(dest(distFolder));
});

module.exports = series("devextreme-vue:clean", "devextreme-vue:build");
