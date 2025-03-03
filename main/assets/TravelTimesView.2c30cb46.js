import { aw as defineComponent, aC as reactive, aD as onMounted, aE as createElementBlock, aH as createBaseVNode, aB as createVNode, az as withCtx, aF as Fragment, aG as renderList, aA as openBlock, ay as createBlock } from "./vendor.fd236c41.js";
import { r as router } from "./ThermometerStations.story.a75133d5.js";
import { a as useViewsStore, u as useLayersStore, e as useTravelTimesViewStore, b as useMapStore, v as viewList } from "./map.bcea4cc7.js";
import { a as apiClientService } from "./api.client.a977d6f0.js";
import { C as ChevronArrowLeft } from "./chevron-left.dd0e6ed2.js";
import { U as UiButton } from "./UiButton.de5d5bbd.js";
import { U as UiTravelTime } from "./UiTravelTime.599edcd2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./IconLine.7a514a7c.js";
import "./color.12f233df.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./informationIcon.70adcac2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TravelTimesView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const layerStore = useLayersStore();
    const travelTimeStore = useTravelTimesViewStore();
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
        poi: false
      });
      state.travelTimes = await apiClientService.fetchTravelTime();
    });
    function onTravelTimesClicked(travelTime) {
      if (travelTime == travelTimeStore.selectedTravelTime) {
        travelTimeStore.selectedTravelTime = null;
      } else {
        travelTimeStore.selectedTravelTime = travelTime;
      }
    }
    const __returned__ = { viewStore, layerStore, travelTimeStore, mapStore, state, onTravelTimesClicked, router, ChevronArrowLeft, UiButton, UiTravelTime };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-start py-0 gap-2" };
const _hoisted_2 = { class: "flex items-center p-0 gap-4" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col items-start p-0 gap-2" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "font-dm-sans font-bold text-2xl" }, " Les temps de parcours th\xE9oriques ")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col items-start p-0 gap-3" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "flex items-center p-0 gap-4" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-medium text-sm text-neutral-800" }, " Ces temps de parcours sont calcul\xE9s \xE0 l\u2019heure de pointe du matin en direction Rennes ")
  ])
], -1);
const _hoisted_6 = { class: "flex flex-col p-0 gap-3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode($setup["UiButton"], {
          class: "shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.router.go(-1))
        }, {
          default: withCtx(() => [
            createBaseVNode("img", { src: $setup.ChevronArrowLeft }, null, 8, _hoisted_3)
          ]),
          _: 1
        }),
        _hoisted_4
      ])
    ]),
    _hoisted_5,
    createBaseVNode("div", _hoisted_6, [
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
          colored: travelTime == $setup.travelTimeStore.selectedTravelTime
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
