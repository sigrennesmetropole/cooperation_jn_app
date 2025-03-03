import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.ff13d028.js";
import { U as UiLineHeader } from "./UiLineHeader.e3e48091.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./IconLine.2c04370c.js";
import "./color.12f233df.js";
import "./IconTwoDirectionArrow.43f67abd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLineHeader.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        id: 1,
        name: "Ligne T1",
        start: "Stade Rennais",
        end: "Br\xE9c\xE9"
      };
    }
    const __returned__ = { initState, UiLineHeader };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiLineHeader",
    layout: {
      type: "grid",
      width: 500
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiLineHeader"], {
        line: state.id,
        name: state.name,
        start: state.start,
        end: state.end
      }, null, 8, ["line", "name", "start", "end"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiLineHeader.story.vue";
const UiLineHeader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiLineHeader.story.vue"]]);
export {
  UiLineHeader_story as default
};
