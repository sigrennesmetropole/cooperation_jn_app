import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.27016d7f.js";
import { L as LegalLink } from "./LegalLink.be66809b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./UiLinkFooter.d208c955.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LegalLink.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { LegalLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Legal Links",
    layout: {
      type: "grid",
      width: 500
    },
    group: "sidepanel"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default Color" }, {
        default: withCtx(() => [
          createVNode($setup["LegalLink"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "neutral-900" }, {
        default: withCtx(() => [
          createVNode($setup["LegalLink"], { "text-color": "neutral-900" })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/home/LegalLink.story.vue";
const LegalLink_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/home/LegalLink.story.vue"]]);
export {
  LegalLink_story as default
};
