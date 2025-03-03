import { aw as defineComponent, aC as reactive, aD as onMounted, aE as createElementBlock, aH as createBaseVNode, aB as createVNode, aF as Fragment, aG as renderList, aA as openBlock, ay as createBlock } from "./vendor.8097ddee.js";
import { a as useViewsStore, u as useLayersStore, b as useMapStore, v as viewList } from "./map.c948ae4f.js";
import { a as apiClientService } from "./api.client.1ec4c78c.js";
import { B as BackButton } from "./BackButton.f3d77001.js";
import { U as UiTravelTime } from "./UiTravelTime.a896b647.js";
import { u as useTraveltimeInteractionStore } from "./ThermometerStations.story.92e05c31.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./chevron-left.dd0e6ed2.js";
import "./UiButton.9890effe.js";
import "./IconLine.0baf915c.js";
import "./color.12f233df.js";
import "./informationIcon.70adcac2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TravelTimesView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const layerStore = useLayersStore();
    const traveltimeInteractionStore = useTraveltimeInteractionStore();
    const mapStore = useMapStore();
    const state = reactive({
      travelTimes: null
    });
    onMounted(async () => {
      viewStore.currentView = viewList.traveltimes;
      mapStore.updateViewpoint(`home`, true);
      layerStore.setVisibilities(mapStore.is3D(), {
        trambusLines: true,
        trambusStops: true,
        parking: false,
        poi: false,
        _traveltimeArrow: true,
        _poiArrow: false
      });
      state.travelTimes = await apiClientService.fetchTravelTime();
    });
    function onTravelTimesClicked(travelTime) {
      if (travelTime == traveltimeInteractionStore.selectedTraveltime) {
        traveltimeInteractionStore.selectTraveltime(null);
      } else {
        traveltimeInteractionStore.selectTraveltime(travelTime);
      }
    }
    const __returned__ = { viewStore, layerStore, traveltimeInteractionStore, mapStore, state, onTravelTimesClicked, BackButton, UiTravelTime };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-start py-0 gap-2" };
const _hoisted_2 = { class: "flex items-center p-0 gap-4" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col items-start p-0 gap-2" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "font-dm-sans font-bold text-2xl" }, " Les temps de parcours th\xE9oriques ")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col items-start p-0 gap-3" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "flex items-center p-0 gap-4" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-medium text-sm text-neutral-800" }, " Ces temps de parcours sont calcul\xE9s \xE0 l\u2019heure de pointe du matin en direction Rennes ")
  ])
], -1);
const _hoisted_5 = { class: "flex flex-col p-0 gap-3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode($setup["BackButton"]),
        _hoisted_3
      ])
    ]),
    _hoisted_4,
    createBaseVNode("div", _hoisted_5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.travelTimes, (travelTime, index) => {
        return openBlock(), createBlock($setup["UiTravelTime"], {
          class: "grow",
          role: "button",
          onClick: ($event) => $setup.onTravelTimesClicked(travelTime),
          key: index,
          newDuration: travelTime.new,
          oldDuration: travelTime.old,
          lineNumber: travelTime.line,
          startStation: travelTime.start,
          endStation: travelTime.end,
          colored: travelTime == $setup.traveltimeInteractionStore.selectedTraveltime
        }, null, 8, ["onClick", "newDuration", "oldDuration", "lineNumber", "startStation", "endStation", "colored"]);
      }), 128))
    ])
  ], 64);
}
_sfc_main.__file = "src/views/TravelTimesView.vue";
const TravelTimesView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/views/TravelTimesView.vue"]]);
export {
  TravelTimesView as default
};
