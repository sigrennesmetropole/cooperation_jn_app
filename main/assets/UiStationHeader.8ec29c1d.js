import { aw as defineComponent, aA as openBlock, aF as createElementBlock, aI as createBaseVNode, aK as toDisplayString, aB as createVNode } from "./vendor.bdbdd6a2.js";
import { I as IconLine } from "./IconLine.b467f2e1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiStationHeader",
  props: {
    line: {
      type: Number,
      required: true
    },
    nameStation: String,
    frequency: Number
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, IconLine };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col px-0 gap-1 font-dm-sans" };
const _hoisted_2 = { class: "text-2xl font-bold -tracking-[1%]" };
const _hoisted_3 = { class: "flex flex-row p-0 gap-2" };
const _hoisted_4 = { class: "-tracking-[1%] text-neutral-800" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", _hoisted_2, toDisplayString($setup.props.nameStation), 1),
    createBaseVNode("div", _hoisted_3, [
      createVNode($setup["IconLine"], {
        line: $props.line,
        size: "m"
      }, null, 8, ["line"]),
      createBaseVNode("div", _hoisted_4, " Toutes les " + toDisplayString($setup.props.frequency) + " min ", 1)
    ])
  ]);
}
_sfc_main.__file = "src/components/ui/UiStationHeader.vue";
const UiStationHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiStationHeader.vue"]]);
export {
  UiStationHeader as U
};
