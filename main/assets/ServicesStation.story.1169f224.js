import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.b1ae577d.js";
import { S as ServicesStation } from "./ServicesStation.1e858596.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./api.client.270f78ec.js";
import "./stations.609042c4.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServicesStation.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        nameStation: "Dulac",
        idStation: 1511
      };
    }
    const __returned__ = { initState, ServicesStation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "ServicesStation",
    layout: {
      type: "grid",
      width: 450
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["ServicesStation"], {
        nameStation: state.nameStation,
        idStation: state.idStation
      }, null, 8, ["nameStation", "idStation"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/station/ServicesStation.story.vue";
const ServicesStation_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/station/ServicesStation.story.vue"]]);
export {
  ServicesStation_story as default
};
