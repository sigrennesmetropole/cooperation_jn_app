import { aw as defineComponent, aA as openBlock, aC as createElementBlock, aF as createBaseVNode, aP as toDisplayString } from "./vendor.91f7a260.js";
import { p as parkingIcon } from "./parkingRelais.71b850b9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiParkingInformation",
  props: {
    name: String,
    station: String,
    place: Number
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, ParkingIcon: parkingIcon };
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main.__file = "src/components/ui/UiParkingInformation.vue";
const UiParkingInformation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiParkingInformation.vue"]]);
export {
  UiParkingInformation as U
};
