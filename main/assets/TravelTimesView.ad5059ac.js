import { aw as defineComponent, aI as reactive, aJ as onMounted, aC as createElementBlock, aF as createBaseVNode, aB as createVNode, aK as Fragment, aL as renderList, aA as openBlock, ay as createBlock } from "./vendor.be708d50.js";
import { u as useViewsStore, a as useMapStore, v as viewList } from "./map.c5b50e17.js";
import { u as useLayersStore, a as apiClientService } from "./api.client.b501753d.js";
import { u as useStationsStore } from "./stations.7155d0d7.js";
import { u as useTraveltimeInteractionStore, B as BackButton } from "./BackButton.99390d15.js";
import { U as UiTravelTime } from "./UiTravelTime.7fdad7b1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./ThermometerStations.story.c01ee0a4.js";
import "./IconLine.f5f8cc49.js";
import "./color.12f233df.js";
import "./chevron-left.dd0e6ed2.js";
import "./UiButton.1faafd24.js";
import "./informationIcon.70adcac2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TravelTimesView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const layerStore = useLayersStore();
    const traveltimeInteractionStore = useTraveltimeInteractionStore();
    const mapStore = useMapStore();
    const stationsStore = useStationsStore();
    const state = reactive({
      travelTimes: null
    });
    onMounted(async () => {
      viewStore.currentView = viewList.traveltimes;
      mapStore.updateViewpoint(`home`, true);
      stationsStore.traveltimesViewSetUpStationsToDisplay();
      layerStore.setVisibilities(mapStore.is3D(), {
        trambusLines: true,
        trambusStops: true,
        parking: false,
        poi: false,
        _traveltimeArrow: true
      });
      state.travelTimes = await apiClientService.fetchTravelTime();
    });
    function onTravelTimesClicked(travelTime) {
      if (travelTime == traveltimeInteractionStore.selectedTraveltime) {
        traveltimeInteractionStore.selectTraveltime(null);
      } else {
        stationsStore.updateStationsToDisplayFromTravelTimes(travelTime);
        traveltimeInteractionStore.selectTraveltime(travelTime);
      }
    }
    const __returned__ = { viewStore, layerStore, traveltimeInteractionStore, mapStore, stationsStore, state, onTravelTimesClicked, BackButton, UiTravelTime };
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
