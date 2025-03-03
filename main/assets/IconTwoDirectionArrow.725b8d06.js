import { aw as defineComponent, aO as computed, aA as openBlock, aE as createElementBlock, aP as normalizeClass, aH as createBaseVNode } from "./vendor.d0e10da9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconTwoDirectionArrow",
  props: {
    strokeColor: {
      type: String,
      default: "stroke-neutral-400"
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const styleClass = computed(() => {
      return props.strokeColor;
    });
    const __returned__ = { props, styleClass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.5 7H0.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.5 4L0.5 7L3.5 10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10.5 4L13.5 7L10.5 10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4 = [
  _hoisted_1,
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: normalizeClass($setup.styleClass)
  }, _hoisted_4, 2);
}
_sfc_main.__file = "src/components/ui/icons/IconTwoDirectionArrow.vue";
const IconTwoDirectionArrow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/icons/IconTwoDirectionArrow.vue"]]);
export {
  IconTwoDirectionArrow as I
};
