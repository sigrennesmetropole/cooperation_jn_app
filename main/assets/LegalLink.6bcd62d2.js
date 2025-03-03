import { aw as defineComponent, aA as openBlock, aC as createElementBlock, aB as createVNode, az as withCtx, aD as createTextVNode } from "./vendor.be48ab6a.js";
import { U as UiLinkFooter } from "./UiLinkFooter.9648d447.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LegalLink",
  props: {
    textColor: {
      type: String,
      required: false,
      default: "neutral-500"
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, UiLinkFooter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex gap-3 justify-center font-dm-sans" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Mentions l\xE9gales");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Politique de protection des donn\xE9es personnelles");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["UiLinkFooter"], {
      url: "https://metropole.rennes.fr/mentions-legales",
      textColor: $setup.props.textColor
    }, {
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }, 8, ["url", "textColor"]),
    createVNode($setup["UiLinkFooter"], {
      url: "https://fabriquecitoyenne.fr/privacy",
      textColor: $setup.props.textColor
    }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }, 8, ["url", "textColor"])
  ]);
}
_sfc_main.__file = "src/components/home/LegalLink.vue";
const LegalLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/home/LegalLink.vue"]]);
export {
  LegalLink as L
};
