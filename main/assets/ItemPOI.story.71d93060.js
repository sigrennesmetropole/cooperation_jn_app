import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.44d840a5.js";
import { I as ItemPOI } from "./ItemPOI.053d14a0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ItemPOI.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        img: "bains-douches-saint-georges.png",
        name: "Bains douches Saint-Georges",
        distance: 400
      };
    }
    const __returned__ = { initState, ItemPOI };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "ItemPOI",
    layout: {
      type: "grid",
      width: 450
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["ItemPOI"], {
        img: state.img,
        name: state.name,
        distance: state.distance
      }, null, 8, ["img", "name", "distance"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/station/ItemPOI.story.vue";
const ItemPOI_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/station/ItemPOI.story.vue"]]);
export {
  ItemPOI_story as default
};
