const createTask = require("./gulp/create-task");
const devextremeVue = require("./gulp/devextreme-vue");
const { task, series } = require("gulp");

task("devextreme", createTask("devextreme"));

task("devextreme-vue", devextremeVue);

task("babel-runtime", createTask("babel-runtime"));

task("devextreme-runtime", createTask("devextreme-runtime"));

task(
  "default",
  series("devextreme", "devextreme-vue", "babel-runtime", "devextreme-runtime")
);
