import { aw as defineComponent, aC as inject, aD as reactive, aE as onMounted, aA as openBlock, aF as createElementBlock, aI as createBaseVNode, aB as createVNode, aG as Fragment, aH as renderList, ay as createBlock } from "./vendor.bdbdd6a2.js";
import { a as useViewsStore, e as useTraveltimeInteractionStore, b as useMap3dStore, g as useMapViewPointStore, c as useLineInteractionStore, v as viewList } from "./views.7fe58a02.js";
import { u as useLayersStore } from "./layers.a751972b.js";
import { u as useStationsStore, c as useLinesStore } from "./line.481f75a4.js";
import { B as BackButton } from "./BackButton.e9128814.js";
import { U as UiTravelTime } from "./UiTravelTime.8fb8fd54.js";
import { f as fetchTravelTime } from "./travelTime.4d1e76a2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./chevron-left.151e6030.js";
import "./UiButton.3d6f18f8.js";
import "./panels.94e00db0.js";
import "./IconLine.b467f2e1.js";
import "./color.12f233df.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TravelTimesView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const layerStore = useLayersStore();
    const traveltimeInteractionStore = useTraveltimeInteractionStore();
    const map3dStore = useMap3dStore();
    const mapViewPointStore = useMapViewPointStore();
    const stationsStore = useStationsStore();
    const lineInteractionStore = useLineInteractionStore();
    const rennesApp = inject("rennesApp");
    const linesStore = useLinesStore();
    const state = reactive({
      travelTimes: null
    });
    onMounted(async () => {
      viewStore.currentView = viewList.traveltimes;
      mapViewPointStore.updateViewpoint(`home`, true);
      stationsStore.traveltimesViewSetUpStationsToDisplay();
      lineInteractionStore.resetLinesLabels();
      layerStore.setVisibilities(map3dStore.is3D(), {
        trambusLines: true,
        trambusStops: true,
        parking: false,
        poi: false,
        metro: false,
        bus: false,
        bike: false,
        _traveltimeArrow: true
      });
      state.travelTimes = await fetchTravelTime(rennesApp);
    });
    function onTravelTimesClicked(travelTime) {
      if (travelTime == traveltimeInteractionStore.selectedTraveltime) {
        traveltimeInteractionStore.selectTraveltime(null);
        traveltimeInteractionStore.removeDisplayTravelTime();
        stationsStore.traveltimesViewSetUpStationsToDisplay();
      } else {
        stationsStore.updateStationsToDisplayFromTravelTimes(travelTime);
        traveltimeInteractionStore.removeDisplayTravelTime();
        traveltimeInteractionStore.selectTraveltime(travelTime);
        traveltimeInteractionStore.addDisplayTravelTime(travelTime);
      }
    }
    linesStore.$subscribe(async () => {
      if (linesStore.lineDesciptions.length > 0) {
        stationsStore.traveltimesViewSetUpStationsToDisplay();
      }
    });
    const __returned__ = { viewStore, layerStore, traveltimeInteractionStore, map3dStore, mapViewPointStore, stationsStore, lineInteractionStore, rennesApp, linesStore, state, onTravelTimesClicked, BackButton, UiTravelTime };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-start py-0 gap-2" };
const _hoisted_2 = { class: "flex items-center p-0 gap-4" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col items-start p-0 gap-2" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "font-dm-sans font-bold text-2xl" }, " Temps de parcours th\xE9orique ")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col items-start p-0 gap-3" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "flex items-center p-0 gap-4" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-medium text-sm text-neutral-800" }, " Les temps de parcours pr\xE9sent\xE9s sont estim\xE9s de fa\xE7on th\xE9orique. Ils sont calcul\xE9s \xE0 l'heure de pointe du matin en direction de Rennes et sont compar\xE9s aux temps de parcours th\xE9oriques actuels. ")
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
          clickable: true,
          colored: $setup.traveltimeInteractionStore.isOnlySelected(travelTime)
        }, null, 8, ["onClick", "newDuration", "oldDuration", "lineNumber", "startStation", "endStation", "colored"]);
      }), 128))
    ])
  ], 64);
}
_sfc_main.__file = "src/views/TravelTimesView.vue";
const TravelTimesView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/views/TravelTimesView.vue"]]);
export {
  TravelTimesView as default
};
