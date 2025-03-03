import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.39b3f40e.js";
import { U as UiStationHeader } from "./UiStationHeader.82a1eaac.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./IconLine.c29821d2.js";
import "./color.12f233df.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiStationHeader.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        line: 1,
        nameStation: "Mus\xE9e Beaux Arts",
        frequency: 6
      };
    }
    const __returned__ = { initState, UiStationHeader };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiStationHeader",
    layout: {
      type: "grid",
      width: 500
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiStationHeader"], {
        line: state.line,
        nameStation: state.nameStation,
        frequency: state.frequency
      }, null, 8, ["line", "nameStation", "frequency"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiStationHeader.story.vue";
const UiStationHeader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiStationHeader.story.vue"]]);
export {
  UiStationHeader_story as default
};
