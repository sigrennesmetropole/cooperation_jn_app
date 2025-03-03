import { aw as defineComponent, aA as openBlock, aF as createElementBlock, aB as createVNode, aI as createBaseVNode, aK as toDisplayString } from "./vendor.793d0727.js";
import { I as IconLine } from "./IconLine.e4d38361.js";
import { I as IconTwoDirectionArrow } from "./IconTwoDirectionArrow.e82c5d6f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLineHeader",
  props: {
    line: {
      type: Number,
      required: true
    },
    name: String,
    start: String,
    end: String
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
const _hoisted_2 = ["title"];
const _hoisted_3 = { class: "text-2xl font-bold" };
const _hoisted_4 = { class: "flex items-center p-0 gap-2" };
const _hoisted_5 = { class: "font-normal text-base text-neutral-800" };
const _hoisted_6 = { class: "font-normal text-base text-neutral-800" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["IconLine"], {
      line: $props.line,
      size: "xl"
    }, null, 8, ["line"]),
    createBaseVNode("div", {
      class: "flex flex-col items-start p-0 grow",
      title: `De ${$setup.props.start} \xE0 ${$setup.props.end}`
    }, [
      createBaseVNode("h1", _hoisted_3, toDisplayString($setup.props.name), 1),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, toDisplayString($setup.props.start), 1),
        createVNode($setup["IconTwoDirectionArrow"]),
        createBaseVNode("div", _hoisted_6, toDisplayString($setup.props.end), 1)
      ])
    ], 8, _hoisted_2)
  ]);
}
_sfc_main.__file = "src/components/ui/UiLineHeader.vue";
const UiLineHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiLineHeader.vue"]]);
export {
  UiLineHeader as U
};
