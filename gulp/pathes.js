const path = require("path");

const publicFolder = path.resolve(__dirname, "../public");

module.exports = {
  public: publicFolder,

  src: {
    devextreme: path.resolve(
      __dirname,
      "../node_modules/devextreme/esm/**/*.js"
    ),
    "devextreme-runtime": path.resolve(
      __dirname,
      "../node_modules/@devextreme/runtime/esm/**/*.js"
    ),
    "devextreme-vue": './node_modules/devextreme-vue/*.js',
    "babel-runtime": path.resolve(
      __dirname,
      "../node_modules/@babel/runtime/helpers/esm/**/*.js"
    ),
  },

  dist: {
    devextreme: path.join(publicFolder, "devextreme"),
    'devextreme-vue': path.join(publicFolder, "devextreme-vue"),
    "devextreme-runtime": path.join(publicFolder, "devextreme-runtime"),
    "babel-runtime": path.join(publicFolder, "babel/runtime/helpers/esm"),
  },
};
