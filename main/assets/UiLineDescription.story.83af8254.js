import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.d7213fe5.js";
import { U as UiLineDescription } from "./UiLineDescription.b67a0941.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./IconLine.bd3241d4.js";
import "./color.12f233df.js";
import "./IconTwoDirectionArrow.a5715f04.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLineDescription.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        id: 1,
        name: "Ligne T1",
        start: "Stade Rennais",
        end: "Br\xE9c\xE9",
        frequency: 7
      };
    }
    const __returned__ = { initState, UiLineDescriptionVue: UiLineDescription };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiLineDescription",
    layout: {
      type: "grid",
      width: 500
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiLineDescriptionVue"], {
        line: state.id,
        name: state.name,
        start: state.start,
        end: state.end,
        frequency: state.frequency
      }, null, 8, ["line", "name", "start", "end", "frequency"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiLineDescription.story.vue";
const UiLineDescription_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiLineDescription.story.vue"]]);
export {
  UiLineDescription_story as default
};
