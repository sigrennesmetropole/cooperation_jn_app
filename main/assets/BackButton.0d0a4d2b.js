import { aw as defineComponent, aA as openBlock, ay as createBlock, az as withCtx, aH as createBaseVNode } from "./vendor.9332c6fe.js";
import { u as useTraveltimeInteractionStore, r as router } from "./ThermometerStations.story.fc98d3bd.js";
import { C as ChevronArrowLeft } from "./chevron-left.dd0e6ed2.js";
import { U as UiButton } from "./UiButton.eab63d79.js";
import { b as useMapStore } from "./map.ad9aecab.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackButton",
  setup(__props, { expose }) {
    expose();
    const mapStore = useMapStore();
    const traveltimeInteractionStore = useTraveltimeInteractionStore();
    function backButtonClicked() {
      router.push("/home");
      mapStore.viewPoint = `home`;
      traveltimeInteractionStore.selectTraveltime(null);
    }
    const __returned__ = { mapStore, traveltimeInteractionStore, backButtonClicked, ChevronArrowLeft, UiButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiButton"], {
    class: "shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0 visible",
    onClick: $setup.backButtonClicked
  }, {
    default: withCtx(() => [
      createBaseVNode("img", { src: $setup.ChevronArrowLeft }, null, 8, _hoisted_1)
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/home/BackButton.vue";
const BackButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/home/BackButton.vue"]]);
export {
  BackButton as B
};
