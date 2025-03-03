import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aB as createVNode, az as withCtx, aK as createTextVNode } from "./vendor.44d840a5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { U as UiLinkFooter } from "./UiLinkFooter.235df8d6.js";
const rennesLogo = "data:image/png;base64,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";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiRennesLogo",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { rennesLogo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("img", { src: $setup.rennesLogo }, null, 8, _hoisted_1$1);
}
_sfc_main$1.__file = "src/components/ui/UiRennesLogo.vue";
const UiRennesLogo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiRennesLogo.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FooterArea",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiRennesLogo, UiLinkFooter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col p-2 gap-4 font-dm-sans divide-y divide-neutral-200" };
const _hoisted_2 = { class: "flex p-0 gap-6" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "font-normal text-xs" }, " Visualisez les donn\xE9es th\xE9matiques de notre territoire sur sa maquette 3D. ", -1);
const _hoisted_4 = { class: "flex gap-3 justify-center" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Mentions l\xE9gales");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Politique de protection des donn\xE9es personnelles");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["UiRennesLogo"], { class: "w-36 h-7" }),
      _hoisted_3
    ]),
    createBaseVNode("div", _hoisted_4, [
      createVNode($setup["UiLinkFooter"], { url: "https://metropole.rennes.fr/mentions-legales" }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      }, 8, ["url"]),
      createVNode($setup["UiLinkFooter"], { url: "https://fabriquecitoyenne.fr/privacy" }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      }, 8, ["url"])
    ])
  ]);
}
_sfc_main.__file = "src/components/home/FooterArea.vue";
const FooterArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/home/FooterArea.vue"]]);
export {
  FooterArea as F
};
