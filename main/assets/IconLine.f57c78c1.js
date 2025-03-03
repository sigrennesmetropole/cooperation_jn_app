import { aw as defineComponent, aO as computed, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aL as toDisplayString, aP as normalizeClass, aK as ref, ay as createBlock } from "./vendor.f8e31339.js";
import { g as getColorLine } from "./color.12f233df.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IconCircleText",
  props: {
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const circleStyle = computed(() => {
      const iconSizes = {
        s: "w-4 h-4",
        m: "w-6 h-6",
        l: "w-8 h-8",
        xl: "w-12 h-12"
      };
      return [props.bgColor, iconSizes[props.size]];
    });
    const textStyle = computed(() => {
      const textStyles = {
        s: "font-normal text-xs",
        m: "font-bold text-xs",
        l: "font-bold text-lg",
        xl: "font-bold text-xl"
      };
      return textStyles[props.size];
    });
    const __returned__ = { props, circleStyle, textStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["flex items-center rounded-full justify-center", $setup.circleStyle])
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["font-dm-sans font-bold text-white items-end", $setup.textStyle]),
      "aria-hidden": "true"
    }, toDisplayString($props.text), 3)
  ], 2);
}
_sfc_main$1.__file = "src/components/ui/icons/IconCircleText.vue";
const IconCircleText = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/icons/IconCircleText.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconLine",
  props: {
    line: {
      type: Number,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const bgColor = ref(getColorLine("bg", props.line, 600));
    const lineText = ref(props.size === "s" ? `${props.line}` : `T${props.line}`);
    const __returned__ = { props, bgColor, lineText, IconCircleText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["IconCircleText"], {
    text: $setup.lineText,
    size: $setup.props.size,
    bgColor: $setup.bgColor
  }, null, 8, ["text", "size", "bgColor"]);
}
_sfc_main.__file = "src/components/ui/icons/IconLine.vue";
const IconLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/icons/IconLine.vue"]]);
export {
  IconLine as I,
  IconCircleText as a
};
