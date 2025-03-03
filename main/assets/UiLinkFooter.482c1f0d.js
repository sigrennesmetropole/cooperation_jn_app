import { aw as defineComponent, aE as computed, aA as openBlock, aC as createElementBlock, aF as createBaseVNode, aG as renderSlot, aH as normalizeClass } from "./vendor.be708d50.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLinkFooter",
  props: {
    url: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: false,
      default: "neutral-500"
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const textStyles = computed(() => {
      return [`text-${props.textColor}`, `before:bg-${props.textColor}`];
    });
    const __returned__ = { props, textStyles };
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
      class: normalizeClass(["font-normal text-xs before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0", $setup.textStyles]),
      target: "_blank"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 10, _hoisted_2)
  ]);
}
_sfc_main.__file = "src/components/ui/UiLinkFooter.vue";
const UiLinkFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiLinkFooter.vue"]]);
export {
  UiLinkFooter as U
};
