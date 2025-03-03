import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.86161968.js";
import { T as TravelTimes } from "./TravelTimes.90ba9477.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./api.client.00fbeec7.js";
import "./stations.cd525b57.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./UiTravelTime.1e9d11f6.js";
import "./IconLine.485b074b.js";
import "./color.12f233df.js";
import "./UiOverflowContainer.b790406f.js";
import "./UiLinkPrimary.31893d92.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TravelTimes.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { TravelTimes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "TravelTime",
    layout: {
      type: "grid",
      width: 500
    },
    group: "sidepanel"
  }, {
    default: withCtx(() => [
      createVNode($setup["TravelTimes"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/home/TravelTimes.story.vue";
const TravelTimes_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/TravelTimes.story.vue"]]);
export {
  TravelTimes_story as default
};
