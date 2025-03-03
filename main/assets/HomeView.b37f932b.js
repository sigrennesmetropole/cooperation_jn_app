import { aw as defineComponent, aC as reactive, aD as onMounted, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aF as Fragment, aG as renderList, ay as createBlock, aB as createVNode } from "./vendor.f640ceb8.js";
import { F as FooterArea } from "./FooterArea.1bcf3b86.js";
import { r as router } from "./ThermometerStations.story.46a1d60d.js";
import { a as apiClientService } from "./api.client.eea61f38.js";
import { U as UiLineDescription } from "./UiLineDescription.54914487.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { T as TravelTimes } from "./TravelTimes.8b872fa4.js";
import { U as UiTrambusTitle } from "./UiTrambusTitle.711b64d8.js";
import { u as useLayersStore, a as useViewsStore, b as useMapStore, c as useLineViewsStore, v as viewList, S as SelectedTrambusLine } from "./map.a536029f.js";
import "./UiLinkFooter.f65d1758.js";
import "./IconLine.331a9b93.js";
import "./color.12f233df.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./IconTwoDirectionArrow.b931bf2d.js";
import "./UiTravelTime.ebc889aa.js";
import "./informationIcon.70adcac2.js";
import "./UiOverflowContainer.65d2a636.js";
import "./UiLinkPrimary.52594b74.js";
import "./NetworkFigures.d2806251.js";
import "./UiNetworkFigure.2efd1c40.js";
import "./UiVerticalSeparator.3ea7899a.js";
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
    onMounted(() => {
      viewStore.currentView = viewList.home;
      mapStore.updateViewpoint(`home`, true);
      lineViewsStore.selectLine(SelectedTrambusLine.NONE);
      layerStore.setVisibilities(mapStore.is3D(), {
        trambusLines: true,
        trambusStops: false,
        parking: true,
        poi: false,
        _traveltimeArrow: false
      });
    });
    const __returned__ = { layerStore, viewStore, mapStore, lineViewsStore, FooterArea, LineDescriptions, TravelTimes, UiTrambusTitle };
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
