import { aw as defineComponent, aI as reactive, aJ as onMounted, aA as openBlock, aC as createElementBlock, aF as createBaseVNode, aK as Fragment, aL as renderList, ay as createBlock, aB as createVNode } from "./vendor.b1ae577d.js";
import { u as usePoiStore, F as FooterArea } from "./poi.1fe44c86.js";
import { r as router } from "./ThermometerStations.story.8ec7b024.js";
import { a as apiClientService, u as useLayersStore } from "./api.client.270f78ec.js";
import { U as UiLineDescription } from "./UiLineDescription.975080a7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { T as TravelTimes } from "./TravelTimes.3a282fe4.js";
import { U as UiTrambusTitle } from "./UiTrambusTitle.a32a7c13.js";
import { u as useViewsStore, a as useMapStore, b as useLineViewsStore, c as useLineInteractionStore, v as viewList, S as SelectedTrambusLine } from "./interactionMap.0c639e22.js";
import { u as useStationsStore } from "./stations.609042c4.js";
import "./LegalLink.0424ce9c.js";
import "./UiLinkFooter.00c7a595.js";
import "./IconLine.c7d4f02e.js";
import "./color.12f233df.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./IconTwoDirectionArrow.74a3a0d1.js";
import "./UiTravelTime.16fc5d96.js";
import "./informationIcon.70adcac2.js";
import "./UiOverflowContainer.cc4b03dc.js";
import "./UiLinkPrimary.f0e88de5.js";
import "./NetworkFigures.4314263f.js";
import "./UiNetworkFigure.cbf662e1.js";
import "./UiVerticalSeparator.476b810b.js";
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
const LineDescriptions = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/LineDescriptions.vue"]]);
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
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/views/HomeView.vue"]]);
export {
  HomeView as default
};
