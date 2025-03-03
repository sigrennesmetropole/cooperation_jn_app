import { aw as defineComponent, aC as reactive, aD as onMounted, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aF as Fragment, aG as renderList, ay as createBlock, aB as createVNode } from "./vendor.1e614073.js";
import { F as FooterArea } from "./FooterArea.f7827319.js";
import { r as router } from "./ThermometerStations.story.aed78aa7.js";
import { a as apiClientService } from "./api.client.a977d6f0.js";
import { U as UiLineDescription } from "./UiLineDescription.16c442a9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { T as TravelTimes } from "./TravelTimes.9a55b80e.js";
import { U as UiTrambusTitle } from "./UiTrambusTitle.b70ec0b0.js";
import { u as useLayersStore, a as useViewsStore, b as useMapStore, c as useLineViewsStore, v as viewList, S as SelectedTrambusLine } from "./map.9bf099af.js";
import "./UiLinkFooter.2820cace.js";
import "./IconLine.69312365.js";
import "./color.12f233df.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./IconTwoDirectionArrow.20e28c92.js";
import "./UiTravelTime.d34eaf7d.js";
import "./informationIcon.70adcac2.js";
import "./UiOverflowContainer.90f2a5ed.js";
import "./UiLinkPrimary.4f646da3.js";
import "./NetworkFigures.23891b94.js";
import "./UiNetworkFigure.214a5a2b.js";
import "./UiVerticalSeparator.7356e0e6.js";
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
        poi: false
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
