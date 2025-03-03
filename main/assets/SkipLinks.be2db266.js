import { aw as defineComponent, aA as openBlock, aF as createElementBlock, aI as createBaseVNode, aG as Fragment, aH as renderList, aK as toDisplayString } from "./vendor.bdbdd6a2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const SkipLinks_vue_vue_type_style_index_0_scoped_74347503_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SkipLinks",
  props: {
    links: { type: Array, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  role: "navigation",
  "aria-label": "Acc\xE8s rapide"
};
const _hoisted_2 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", _hoisted_1, [
    createBaseVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.links, (link) => {
        return openBlock(), createElementBlock("li", {
          key: link.id
        }, [
          createBaseVNode("a", {
            href: "#" + link.id,
            class: "fr-link bg-white p-1"
          }, toDisplayString(link.title), 9, _hoisted_2)
        ]);
      }), 128))
    ])
  ]);
}
_sfc_main.__file = "src/components/accessibility/SkipLinks.vue";
const SkipLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74347503"], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/accessibility/SkipLinks.vue"]]);
export {
  SkipLinks as S
};
