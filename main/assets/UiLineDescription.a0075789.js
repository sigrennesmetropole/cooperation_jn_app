import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aB as createVNode, aH as createBaseVNode, aJ as toDisplayString, aX as withDirectives, aY as vShow } from "./vendor.fd236c41.js";
import { I as IconLine } from "./IconLine.7a514a7c.js";
import { I as IconTwoDirectionArrow } from "./IconTwoDirectionArrow.d09ecbe9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLineDescription",
  props: {
    line: {
      type: Number,
      required: true
    },
    name: String,
    start: String,
    end: String,
    frequency: Number,
    duration: {
      type: Boolean,
      default: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, IconLine, IconTwoDirectionArrow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center px-0 py-3 gap-3 font-dm-sans" };
const _hoisted_2 = { class: "flex flex-col items-start p-0 grow" };
const _hoisted_3 = { class: "text-base font-bold" };
const _hoisted_4 = { class: "flex items-center p-0 gap-2" };
const _hoisted_5 = { class: "text-sm font-normal text-neutral-800" };
const _hoisted_6 = { class: "text-sm font-normal text-neutral-800" };
const _hoisted_7 = { class: "flex flex-col items-start p-0 px-3 py-2 border border-slate-200 rounded" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xs text-neutral-700 font-normal" }, "Toutes les", -1);
const _hoisted_9 = { class: "font-bold text-sm text-neutral-800" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["IconLine"], {
      line: $props.line,
      size: "xl"
    }, null, 8, ["line"]),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, toDisplayString($setup.props.name), 1),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, toDisplayString($setup.props.start), 1),
        createVNode($setup["IconTwoDirectionArrow"]),
        createBaseVNode("div", _hoisted_6, toDisplayString($setup.props.end), 1)
      ])
    ]),
    withDirectives(createBaseVNode("div", _hoisted_7, [
      _hoisted_8,
      createBaseVNode("div", _hoisted_9, toDisplayString($setup.props.frequency) + " min ", 1)
    ], 512), [
      [vShow, $setup.props.duration]
    ])
  ]);
}
_sfc_main.__file = "src/components/ui/UiLineDescription.vue";
const UiLineDescription = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiLineDescription.vue"]]);
export {
  UiLineDescription as U
};
