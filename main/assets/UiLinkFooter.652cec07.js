import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aO as renderSlot } from "./vendor.c7102d13.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLinkFooter",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative w-fit" };
const _hoisted_2 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("a", {
      href: $setup.props.url,
      class: "font-normal text-xs text-neutral-500 before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 before:bg-neutral-500 hover:before:w-full hover:before:left-0",
      target: "_blank"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_2)
  ]);
}
_sfc_main.__file = "src/components/ui/UiLinkFooter.vue";
const UiLinkFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiLinkFooter.vue"]]);
export {
  UiLinkFooter as U
};
