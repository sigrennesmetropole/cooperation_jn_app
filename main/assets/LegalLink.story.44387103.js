import { aw as defineComponent, ax as openBlock, ay as createElementBlock, az as createVNode, aA as withCtx, aB as createTextVNode, aC as resolveComponent, aD as createBlock } from "./vendor.f5f58977.js";
import { U as UiLinkFooter } from "./UiLinkFooter.b0074da1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$1.__file = "src/components/home/LegalLink.vue";
const LegalLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/LegalLink.vue"]]);
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
const LegalLink_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/LegalLink.story.vue"]]);
export {
  LegalLink_story as default
};
