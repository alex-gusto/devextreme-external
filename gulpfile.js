const createTask = require("./gulp/create-task");
const devextremeVue = require("./gulp/devextreme-vue");
const { task, parallel } = require("gulp");

task("devextreme", createTask("devextreme"));

task("devextreme-vue", devextremeVue());

task("babel-runtime", createTask("babel-runtime"));

task("devextreme-runtime", createTask("devextreme-runtime"));

task(
  "default",
  parallel("devextreme", "devextreme-vue", "babel-runtime", "devextreme-runtime")
);
