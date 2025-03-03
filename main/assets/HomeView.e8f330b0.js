import { aw as defineComponent, aI as reactive, aJ as onMounted, aA as openBlock, aC as createElementBlock, aF as createBaseVNode, aK as Fragment, aL as renderList, ay as createBlock, aB as createVNode } from "./vendor.be48ab6a.js";
import { u as usePoiStore, F as FooterArea } from "./poi.3270bc70.js";
import { r as router } from "./ThermometerStations.story.903368bf.js";
import { a as apiClientService, u as useLayersStore } from "./api.client.5dab60b4.js";
import { U as UiLineDescription } from "./UiLineDescription.878ede95.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { T as TravelTimes } from "./TravelTimes.5ea22eda.js";
import { U as UiTrambusTitle } from "./UiTrambusTitle.0b5da9d1.js";
import { u as useViewsStore, a as useMapStore, b as useLineViewsStore, c as useLineInteractionStore, v as viewList, S as SelectedTrambusLine } from "./interactionMap.9048f61f.js";
import { u as useStationsStore } from "./stations.c5b5eb0f.js";
import "./LegalLink.6bcd62d2.js";
import "./UiLinkFooter.9648d447.js";
import "./IconLine.530bad41.js";
import "./color.12f233df.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./IconTwoDirectionArrow.687755d7.js";
import "./UiTravelTime.1080294a.js";
import "./informationIcon.70adcac2.js";
import "./UiOverflowContainer.61fe102a.js";
import "./UiLinkPrimary.500a09d5.js";
import "./NetworkFigures.ec3b5930.js";
import "./UiNetworkFigure.c497faa3.js";
import "./UiVerticalSeparator.883ae758.js";
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
    const lineInteractionStore = useLineInteractionStore();
    onMounted(() => {
      viewStore.currentView = viewList.home;
      mapStore.updateViewpoint(`home`, true);
      lineViewsStore.selectLine(SelectedTrambusLine.NONE);
      poiStore.disablePoi();
      lineInteractionStore.resetLinesLabels();
      layerStore.setVisibilities(mapStore.is3D(), {
        trambusLines: true,
        trambusStops: false,
        parking: true,
        poi: false,
        _traveltimeArrow: false
      });
      stationsStore.homeViewSetUpStationsToDisplay();
    });
    const __returned__ = { layerStore, viewStore, mapStore, lineViewsStore, stationsStore, poiStore, lineInteractionStore, FooterArea, LineDescriptions, TravelTimes, UiTrambusTitle };
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
