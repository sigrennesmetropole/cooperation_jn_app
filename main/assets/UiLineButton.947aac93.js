import { aw as defineComponent, aE as computed, aA as openBlock, aC as createElementBlock, aH as normalizeClass, aF as createBaseVNode, aP as toDisplayString, aB as createVNode } from "./vendor.27016d7f.js";
import { g as getColorLine } from "./color.12f233df.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChevronArrowRight",
  props: {
    strokeColor: {
      type: String,
      default: "stroke-black"
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
  d: "M9 5.25L15.75 12L9 18.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass(["stroke-2", $setup.styleClass]),
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_2, 2);
}
_sfc_main$1.__file = "src/components/ui/icons/ChevronArrowRight.vue";
const ChevronArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/icons/ChevronArrowRight.vue"]]);
const _sfc_main = defineComponent({
  __name: "UiLineButton",
  props: {
    line: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    chevron: {
      type: Boolean,
      default: false
    },
    corner: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const buttonStyle = computed(() => {
      let bgColor = getColorLine("bg", props.line, 600);
      if (!props.active) {
        bgColor = "bg-white";
      }
      let cornerStyle = "rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl";
      cornerStyle = cornerStyle.replace(
        `rounded-${props.corner}-xl`,
        `rounded-${props.corner}-none`
      );
      return [bgColor, cornerStyle];
    });
    const textStyle = computed(() => {
      if (props.active) {
        return "text-white";
      }
      const textColor = getColorLine("text", props.line, 600);
      return [textColor];
    });
    const arrowStrokeColor = computed(() => {
      if (props.active) {
        return "stroke-white";
      }
      const strokeColor = getColorLine("stroke", props.line, 600);
      return strokeColor;
    });
    const __returned__ = { props, buttonStyle, textStyle, arrowStrokeColor, ChevronArrowRight };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([$setup.buttonStyle, "flex items-center py-0.5 px-2 gap-1 shadow-lg min-w-fit"])
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["font-bold font-dm-sans text-sm text-center items-center", $setup.textStyle])
    }, toDisplayString("T" + $setup.props.line), 3),
    createVNode($setup["ChevronArrowRight"], {
      class: normalizeClass({ hidden: !$setup.props.chevron }),
      strokeColor: $setup.arrowStrokeColor
    }, null, 8, ["class", "strokeColor"])
  ], 2);
}
_sfc_main.__file = "src/components/map/buttons/UiLineButton.vue";
const UiLineButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/map/buttons/UiLineButton.vue"]]);
export {
  UiLineButton as U
};
