import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aL as toDisplayString, ax as resolveComponent, ay as createBlock, az as withCtx, aB as createVNode } from "./vendor.5ff27032.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const ParkingIcon = "data:image/png;base64,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";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiParkingInformation",
  props: {
    name: String,
    station: String,
    place: Number
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, ParkingIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row items-center gap-4 h-20" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "flex flex-col items-start justify-center p-0 h-16" };
const _hoisted_4 = { class: "font-dm-sans font-bold text-base leading-6" };
const _hoisted_5 = { class: "flex flex-row items-center p-0 gap-3 h-5" };
const _hoisted_6 = { class: "h-5 font-dm-sans font-normal text-sm leading-5" };
const _hoisted_7 = { class: "box-border h-[52px] w-[60px] ml-auto flex flex-col items-start py-2 px-3 border-slate-200 rounded border-2 border-solid" };
const _hoisted_8 = { class: "w-7 h-5 font-dm-sans font-bold text-sm leading-5 text-neutral-800" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "w-9 h-4 font-dm-sans font-normal text-xs leading-4 text-neutral-800" }, " places ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("img", { src: $setup.ParkingIcon }, null, 8, _hoisted_2),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, " Parking " + toDisplayString($setup.props.name), 1),
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("div", _hoisted_6, toDisplayString($setup.props.station), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("div", _hoisted_8, toDisplayString($setup.props.place), 1),
      _hoisted_9
    ])
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiParkingInformation.vue";
const UiParkingInformation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiParkingInformation.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiParkingInformation.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        name: "Parking Lorem",
        station: "Station Champs-Daguet",
        place: 300
      };
    }
    const __returned__ = { initState, UiParkingInformation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiParkingInformation",
    layout: {
      type: "grid",
      width: 450
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiParkingInformation"], {
        name: state.name,
        station: state.station,
        place: state.place
      }, null, 8, ["name", "station", "place"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiParkingInformation.story.vue";
const UiParkingInformation_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiParkingInformation.story.vue"]]);
export {
  UiParkingInformation_story as default
};
