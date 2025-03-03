import { aw as defineComponent, aI as reactive, aJ as onMounted, aA as openBlock, aC as createElementBlock, aF as createBaseVNode, aK as Fragment, aL as renderList, ay as createBlock, aB as createVNode } from "./vendor.91f7a260.js";
import { u as usePoiStore, F as FooterArea } from "./poi.ca3ef3b1.js";
import { r as router } from "./ThermometerStations.story.b16a3a28.js";
import { a as apiClientService, b as useMapStore, u as useStationsStore } from "./api.client.b881d932.js";
import { U as UiLineDescription } from "./UiLineDescription.51eb86cf.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { T as TravelTimes } from "./TravelTimes.2b2915e4.js";
import { U as UiTrambusTitle } from "./UiTrambusTitle.e50b1d2a.js";
import { u as useLayersStore, a as useViewsStore, b as useLineViewsStore, v as viewList, S as SelectedTrambusLine } from "./views.f2b8a89f.js";
import "./LegalLink.6e634e73.js";
import "./UiLinkFooter.9c3ca671.js";
import "./IconLine.5047978b.js";
import "./color.12f233df.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./IconTwoDirectionArrow.2b4eb246.js";
import "./UiTravelTime.faa2a65e.js";
import "./informationIcon.70adcac2.js";
import "./UiOverflowContainer.1603a3a4.js";
import "./UiLinkPrimary.c202ee36.js";
import "./NetworkFigures.a472095b.js";
import "./UiNetworkFigure.f74ccc97.js";
import "./UiVerticalSeparator.0e7a7f26.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LineDescriptions",
  setup(__props, { expose }) {
    expose();
    const state = reactive({
      lineDescription: null
    });
    onMounted(async () => {
      state.lineDescription = await apiClientService.fetchLineDescriptions();
    });
    function goToLinePage(line) {
      router.push(`/line/${line}`);
    }
    const __returned__ = { state, goToLinePage, UiLineDescription };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col p-0 gap-2" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6" }, " Les nouvelles lignes ", -1);
const _hoisted_3 = { class: "flex flex-col p-0 gap-2 grow" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.lineDescription, (lineDescription) => {
        return openBlock(), createBlock($setup["UiLineDescription"], {
          role: "button",
          onClick: ($event) => $setup.goToLinePage(lineDescription.id),
          key: lineDescription.id,
          line: lineDescription.id,
          name: lineDescription.name,
          start: lineDescription.start,
          end: lineDescription.end,
          frequency: lineDescription.frequency
        }, null, 8, ["onClick", "line", "name", "start", "end", "frequency"]);
      }), 128))
    ])
  ]);
}
_sfc_main$1.__file = "src/components/home/LineDescriptions.vue";
const LineDescriptions = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/home/LineDescriptions.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props, { expose }) {
    expose();
    const layerStore = useLayersStore();
    const viewStore = useViewsStore();
    const mapStore = useMapStore();
    const lineViewsStore = useLineViewsStore();
    const stationsStore = useStationsStore();
    const poiStore = usePoiStore();
    onMounted(() => {
      viewStore.currentView = viewList.home;
      mapStore.updateViewpoint(`home`, true);
      lineViewsStore.selectLine(SelectedTrambusLine.NONE);
      poiStore.disablePoi();
      layerStore.setVisibilities(mapStore.is3D(), {
        trambusLines: true,
        trambusStops: false,
        parking: true,
        poi: false,
        _traveltimeArrow: false,
        _poiArrow: false
      });
      stationsStore.homeViewSetUpStationsToDisplay();
    });
    const __returned__ = { layerStore, viewStore, mapStore, lineViewsStore, stationsStore, poiStore, FooterArea, LineDescriptions, TravelTimes, UiTrambusTitle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode($setup["UiTrambusTitle"]),
    createVNode($setup["TravelTimes"], { class: "border-b border-neutral-300 pb-2" }),
    createVNode($setup["LineDescriptions"], { class: "grow border-b border-neutral-300" }),
    createVNode($setup["FooterArea"])
  ], 64);
}
_sfc_main.__file = "src/views/HomeView.vue";
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/views/HomeView.vue"]]);
export {
  HomeView as default
};
