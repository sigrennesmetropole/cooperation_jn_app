import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aL as toDisplayString, aB as createVNode, ax as resolveComponent, ay as createBlock, az as withCtx } from "./vendor.5b4eaa04.js";
import { I as IconLine } from "./IconLine.2fca9d21.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./color.12f233df.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$1.__file = "src/components/ui/UiStationHeader.vue";
const UiStationHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiStationHeader.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiStationHeader.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        line: 1,
        nameStation: "Mus\xE9e Beaux Arts",
        frequency: 6
      };
    }
    const __returned__ = { initState, UiStationHeader };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiStationHeader",
    layout: {
      type: "grid",
      width: 500
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiStationHeader"], {
        line: state.line,
        nameStation: state.nameStation,
        frequency: state.frequency
      }, null, 8, ["line", "nameStation", "frequency"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiStationHeader.story.vue";
const UiStationHeader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiStationHeader.story.vue"]]);
export {
  UiStationHeader_story as default
};
