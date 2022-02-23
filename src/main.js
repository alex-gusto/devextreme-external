import DxButton from "devextreme-vue/button";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import Vue from "vue";

new Vue({
  el: "#app",
  render: (h) => {
    return h(DxButton, { props: { text: "Hello" } });
  },
});
