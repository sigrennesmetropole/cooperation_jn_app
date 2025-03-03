import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aO as renderSlot } from "./vendor.243fe843.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiIconButton",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    disabled: $props.disabled,
    class: "shadow-lg w-12 h-12 bg-white items-center hover:bg-gray-100 focus:ring-2 focus:z-10 focus:ring-slate-400 focus:outline-none"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1);
}
_sfc_main.__file = "src/components/ui/UiIconButton.vue";
const UiIconButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiIconButton.vue"]]);
export {
  UiIconButton as U
};
