import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.cbcf6827.js";
import { U as UiTimeline, t as timeLineFixtures } from "./timeLineItems.fixtures.59c47b87.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiTimeline.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        items: timeLineFixtures(),
        itemsPrototype: [
          {
            semester: 1,
            year: 2025
          },
          {
            semester: 2,
            year: 2025
          },
          {
            semester: 1,
            year: 2026
          },
          {
            semester: 2,
            year: 2026
          },
          {
            semester: 1,
            year: 2027
          }
        ]
      };
    }
    const __returned__ = { initState, UiTimeline };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiTimeline",
    layout: {
      type: "grid",
      width: 1350
    },
    group: "homepage"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Current",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiTimeline"], {
            items: state.items
          }, null, 8, ["items"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "With diffrent items",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiTimeline"], {
            items: state.itemsPrototype
          }, null, 8, ["items"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiTimeline.story.vue";
const UiTimeline_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiTimeline.story.vue"]]);
export {
  UiTimeline_story as default
};
