import { aw as defineComponent, aC as reactive, b4 as useRouter, aD as onMounted, aK as ref, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aF as Fragment, aG as renderList, ay as createBlock, aP as normalizeClass, aB as createVNode, b5 as Gt } from "./vendor.e680bac2.js";
import { a as apiClientService, u as useLayersStore } from "./api.client.f8bcff33.js";
import { U as UiLineDescription } from "./UiLineDescription.dfe5ae2b.js";
import { u as useHomeViewsStore, a as useViewsStore, b as useMap3dStore, c as useLineInteractionStore } from "./views.b545aa25.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { T as TravelTimes } from "./TravelTimes.4b10d835.js";
import { U as UiTrambusTitle } from "./UiTrambusTitle.6b8187ca.js";
import { S as SkipLinks } from "./SkipLinks.27f608d5.js";
import { u as usePanelsStore } from "./panels.9bd0a560.js";
import "./stations.22151932.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./IconLine.2461ca18.js";
import "./color.12f233df.js";
import "./IconTwoDirectionArrow.ed14b91e.js";
import "./UiTravelTime.767e29db.js";
import "./UiOverflowContainer.1ca8cce6.js";
import "./UiLinkPrimary.7a13a583.js";
import "./NetworkFigures.b695d489.js";
import "./UiNetworkFigure.4b4d7d20.js";
import "./UiVerticalSeparator.5a3073a8.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LineDescriptions",
  setup(__props, { expose }) {
    expose();
    const state = reactive({
      lineDescription: null
    });
    const router = useRouter();
    const homeViewStore = useHomeViewsStore();
    onMounted(async () => {
      state.lineDescription = await apiClientService.fetchLineDescriptions();
    });
    function goToLinePage(line) {
      homeViewStore.selectedLineOnHomePage = null;
      router.push(`/line/${line}`);
    }
    const lineActive = ref(null);
    function overLine(line) {
      if (lineActive.value === null) {
        lineActive.value = line;
      } else {
        return;
      }
      homeViewStore.selectedLineOnHomePage = line;
    }
    function leaveLine() {
      lineActive.value = null;
      homeViewStore.selectedLineOnHomePage = null;
    }
    const __returned__ = { state, router, homeViewStore, goToLinePage, lineActive, overLine, leaveLine, UiLineDescription };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex flex-col p-0 gap-2" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6" }, " Les nouvelles lignes ", -1);
const _hoisted_3$1 = {
  class: "flex flex-col p-0 gap-2 grow",
  "aria-label": "Liste des nouvelles lignes"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _hoisted_2$1,
    createBaseVNode("ul", _hoisted_3$1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.lineDescription, (lineDescription) => {
        return openBlock(), createBlock($setup["UiLineDescription"], {
          role: "button",
          onClick: ($event) => $setup.goToLinePage(lineDescription.id),
          onMouseover: ($event) => $setup.overLine(lineDescription.id),
          onMouseleave: _cache[0] || (_cache[0] = ($event) => $setup.leaveLine()),
          class: normalizeClass($setup.lineActive === lineDescription.id ? "bg-slate-100" : ""),
          key: lineDescription.id,
          line: lineDescription.id,
          name: lineDescription.name,
          start: lineDescription.start,
          end: lineDescription.end,
          frequency: lineDescription.frequency
        }, null, 8, ["onClick", "onMouseover", "class", "line", "name", "start", "end", "frequency"]);
      }), 128))
    ])
  ]);
}
_sfc_main$2.__file = "src/components/home/LineDescriptions.vue";
const LineDescriptions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/LineDescriptions.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SkipLinksHome",
  setup(__props, { expose }) {
    expose();
    const links = [
      { id: "travel-times", title: "Temps de parcours th\xE9orique" },
      { id: "line-descriptions", title: "Les nouvelles lignes" },
      { id: "head-toolbar", title: "Barre de navigation carte" },
      { id: "footer", title: "Pied de page" }
    ];
    const __returned__ = { links, SkipLinks };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["SkipLinks"], { links: $setup.links });
}
_sfc_main$1.__file = "src/components/accessibility/SkipLinksHome.vue";
const SkipLinksHome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/accessibility/SkipLinksHome.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props, { expose }) {
    expose();
    const layerStore = useLayersStore();
    const viewStore = useViewsStore();
    const map3dStore = useMap3dStore();
    const lineInteractionStore = useLineInteractionStore();
    const panelsStore = usePanelsStore();
    onMounted(() => {
      viewStore.setHomeAsCurrentView();
      lineInteractionStore.resetLinesLabels();
      layerStore.setVisibilities(map3dStore.is3D(), {
        trambusLines: true,
        trambusStops: false,
        parking: true,
        poi: true,
        metro: false,
        bus: false,
        bike: false,
        _traveltimeArrow: false
      });
      panelsStore.toggleGallery();
    });
    const __returned__ = { layerStore, viewStore, map3dStore, lineInteractionStore, panelsStore, LineDescriptions, TravelTimes, UiTrambusTitle, FooterArea: Gt, SkipLinksHome };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  id: "reseau-trambus",
  class: "flex flex-col p-0 gap-3 font-dm-sans"
};
const _hoisted_2 = {
  id: "travel-times",
  class: "flex flex-col gap-2"
};
const _hoisted_3 = { id: "line-descriptions" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode($setup["SkipLinksHome"]),
    createBaseVNode("section", _hoisted_1, [
      createVNode($setup["UiTrambusTitle"])
    ]),
    createBaseVNode("section", _hoisted_2, [
      createVNode($setup["TravelTimes"])
    ]),
    createBaseVNode("section", _hoisted_3, [
      createVNode($setup["LineDescriptions"], { class: "grow border-b border-neutral-300" })
    ]),
    createVNode($setup["FooterArea"])
  ], 64);
}
_sfc_main.__file = "src/views/HomeView.vue";
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/views/HomeView.vue"]]);
export {
  HomeView as default
};
