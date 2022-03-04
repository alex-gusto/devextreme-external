import DxButton from "devextreme-vue/button";
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";
import { Grid } from "vue-ts-webpack";
import { app } from "vue-ts";
import Vue from "vue";

app.$mount('#app2')

const dataSource = new DataSource({
  key: "id",
  store: new CustomStore({
    load: () => Promise.resolve([{ id: 1 }]),
  }),
});

new Vue({
  el: "#app",
  render: (h) => {
    const button = h(DxButton, { props: { text: "Hello" } });
    const grid = h(Grid);

    return h("div", [button, grid]);
  },
});
