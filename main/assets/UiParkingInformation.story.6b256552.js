import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.8097ddee.js";
import { U as UiParkingInformation } from "./UiParkingInformation.48fa7bf0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./parkingRelais.71b850b9.js";
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
const UiParkingInformation_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/UiParkingInformation.story.vue"]]);
export {
  UiParkingInformation_story as default
};
