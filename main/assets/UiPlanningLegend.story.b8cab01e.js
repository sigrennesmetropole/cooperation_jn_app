import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.be48ab6a.js";
import { U as UiPlanningLegend, L as LinePlanningStateTypes } from "./line-planning-state.model.e54338d8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiPlanningLegend.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        items: [
          LinePlanningStateTypes.UNSTARTED,
          LinePlanningStateTypes.UNDER_CONSTRUCTION,
          LinePlanningStateTypes.CONSTRUCTION_FINISHED,
          LinePlanningStateTypes.COMMISIONING
        ]
      };
    }
    const __returned__ = { initState, UIPlanningLegend: UiPlanningLegend, LinePlanningStateTypes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UIPlanningLegend",
    layout: {
      type: "grid",
      width: 500
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "All selected",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UIPlanningLegend"], {
            items: state.items,
            "highlighted-item-id": void 0
          }, null, 8, ["items"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "One selected",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UIPlanningLegend"], {
            items: state.items,
            "highlighted-item-id": $setup.LinePlanningStateTypes.UNSTARTED.id
          }, null, 8, ["items", "highlighted-item-id"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiPlanningLegend.story.vue";
const UiPlanningLegend_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiPlanningLegend.story.vue"]]);
export {
  UiPlanningLegend_story as default
};
