import { aw as defineComponent, aK as ref, aA as openBlock, aE as createElementBlock, aF as Fragment, aG as renderList, ay as createBlock, aH as createBaseVNode, bl as useRoute, aC as reactive, aS as onBeforeMount, aD as onMounted, aB as createVNode, aI as createCommentVNode } from "./vendor.8d27f1eb.js";
import { b as useMapStore, u as useStationsStore, a as apiClientService } from "./api.client.0177e45f.js";
import { a as useViewsStore, u as useLayersStore, b as useLineViewsStore, v as viewList } from "./views.d72a3a39.js";
import { U as UiStationHeader } from "./UiStationHeader.13ffefdf.js";
import { F as FooterArea } from "./FooterArea.8871382f.js";
import { S as ServicesStation } from "./ServicesStation.ef573c22.js";
import { I as ItemPOI } from "./ItemPOI.918ecdd5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { B as BackButton } from "./BackButton.eda2515e.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./IconLine.993b2f67.js";
import "./color.12f233df.js";
import "./UiLinkFooter.4a7344a6.js";
import "./ThermometerStations.story.08ddf1ad.js";
import "./chevron-left.dd0e6ed2.js";
import "./UiButton.41b8b2e3.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PointsOfInterestsStation",
  setup(__props, { expose }) {
    expose();
    const pointsOfInterests = ref([
      {
        img: "",
        name: "Ville de Rennes - Service formalit\xE9s Centre",
        distance: 400
      },
      {
        img: "bains-douches-saint-georges.png",
        name: "Bains douches Saint-Georges",
        distance: 400
      },
      {
        img: "",
        name: "Rennes M\xE9troppole - Direction des risques",
        distance: 300
      },
      {
        img: "direction-ressources.png",
        name: "Ville de Rennes - Rennes M\xE9tropole - Direction ressources",
        distance: 400
      }
    ]);
    const __returned__ = { pointsOfInterests, ItemPOI };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6 mb-2 mt-3" }, " Centres d'int\xE9r\xEAt ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$1,
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.pointsOfInterests, (poi) => {
      return openBlock(), createBlock($setup["ItemPOI"], {
        key: poi.name,
        img: poi.img,
        name: poi.name,
        distance: poi.distance
      }, null, 8, ["img", "name", "distance"]);
    }), 128))
  ], 64);
}
_sfc_main$1.__file = "src/components/station/PointsOfInterestsStation.vue";
const PointsOfInterestsStation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/station/PointsOfInterestsStation.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StationView",
  setup(__props, { expose }) {
    expose();
    const mapStore = useMapStore();
    const viewStore = useViewsStore();
    const layerStore = useLayersStore();
    const lineStore = useLineViewsStore();
    const stationsStore = useStationsStore();
    const { params } = useRoute();
    const routeParams = ref(params);
    const stationId = ref(Number(routeParams.value.id));
    const lineNumber = ref(Number(routeParams.value.lineid));
    const state = reactive({
      lineDescription: null,
      stationDescription: null
    });
    onBeforeMount(async () => {
      lineStore.selectLine(lineNumber.value);
      state.lineDescription = await apiClientService.fetchLineDescription(
        lineStore.selectedLine
      );
      await apiClientService.fetchStationDescription(stationId.value).then((station) => {
        stationsStore.stationViewSetUpStationsToDisplay(
          station.nom,
          state.lineDescription.id
        );
        state.stationDescription = station;
      });
    });
    onMounted(async () => {
      viewStore.currentView = viewList.station;
      const viewPoint = `line ${lineStore.selectedLine} | station ${stationsStore.currentStationView}`;
      mapStore.updateViewpoint(viewPoint, true);
      layerStore.setVisibilities(mapStore.is3D(), {
        trambusLines: true,
        trambusStops: true,
        parking: true,
        poi: true,
        _traveltimeArrow: false,
        _poiArrow: true
      });
    });
    const __returned__ = { mapStore, viewStore, layerStore, lineStore, stationsStore, params, routeParams, stationId, lineNumber, state, UiStationHeader, FooterArea, ServicesStation, PointsOfInterestsStation, BackButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-start py-0 gap-2" };
const _hoisted_2 = { class: "flex items-center p-0 gap-4" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 mt-2 -mx-6" }, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 my-3" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode($setup["BackButton"], {
          url: "/line/" + $setup.lineNumber
        }, null, 8, ["url"]),
        $setup.state.lineDescription && $setup.state.stationDescription ? (openBlock(), createBlock($setup["UiStationHeader"], {
          key: 0,
          line: (_a = $setup.state.lineDescription) == null ? void 0 : _a.id,
          nameStation: $setup.state.stationDescription.nom,
          frequency: $setup.state.lineDescription.frequency
        }, null, 8, ["line", "nameStation", "frequency"])) : createCommentVNode("v-if", true)
      ])
    ]),
    _hoisted_3,
    ((_b = $setup.state.stationDescription) == null ? void 0 : _b.id) ? (openBlock(), createBlock($setup["ServicesStation"], {
      key: 0,
      nameStation: $setup.state.stationDescription.nom,
      idStation: $setup.state.stationDescription.id
    }, null, 8, ["nameStation", "idStation"])) : createCommentVNode("v-if", true),
    ((_c = $setup.state.stationDescription) == null ? void 0 : _c.id) ? (openBlock(), createBlock($setup["PointsOfInterestsStation"], { key: 1 })) : createCommentVNode("v-if", true),
    _hoisted_4,
    createVNode($setup["FooterArea"])
  ], 64);
}
_sfc_main.__file = "src/views/StationView.vue";
const StationView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/views/StationView.vue"]]);
export {
  StationView as default
};
