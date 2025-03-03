import { aw as defineComponent, bm as inject, aK as ref, aD as onMounted, aA as openBlock, aE as createElementBlock, aF as Fragment, aG as renderList, ay as createBlock, aI as createCommentVNode, aH as createBaseVNode, bG as useRoute, aC as reactive, aV as onBeforeMount, aB as createVNode, b5 as Rt } from "./vendor.a6e2ba71.js";
import { b as useMap3dStore, a as useViewsStore, f as usePoiParkingStore, c as useLineInteractionStore, v as viewList } from "./views.aaaf9a68.js";
import { R as RENNES_LAYER, u as useLayersStore, a as apiClientService } from "./api.client.7316cbd6.js";
import { u as useStationsStore } from "./stations.4cfe7dbf.js";
import { U as UiStationHeader } from "./UiStationHeader.3ff7da0e.js";
import { S as ServicesStation } from "./ServicesStation.5e095441.js";
import { I as ItemPOI } from "./ItemPOI.72bb5ef8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { B as BackButton } from "./BackButton.cd021143.js";
import { p as poiStoreSubcribe } from "./poi.3942cd38.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./IconLine.0c05e16d.js";
import "./color.12f233df.js";
import "./chevron-left.dd0e6ed2.js";
import "./UiButton.7994f55f.js";
import "./panels.ce91e3c4.js";
import "./common.68cf250a.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PointsOfInterestsStation",
  props: {
    nameStation: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const rennesApp = inject("rennesApp");
    const pointsOfInterests = ref([]);
    onMounted(async () => {
      const poiFeatures = await rennesApp.getFeaturesByAttributeFromLayer(
        RENNES_LAYER.poi,
        "station_nom",
        props.nameStation
      );
      poiFeatures.forEach((feature) => {
        pointsOfInterests.value.push({
          img: "",
          name: feature.get("site_nom"),
          distance: feature.get("distance")
        });
      });
    });
    const __returned__ = { props, rennesApp, pointsOfInterests, ItemPOI };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6 mb-2 mt-3" }, " Centres d'int\xE9r\xEAt ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.pointsOfInterests.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
    _hoisted_1$1,
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.pointsOfInterests, (poi) => {
      return openBlock(), createBlock($setup["ItemPOI"], {
        key: poi.name,
        img: poi.img,
        name: poi.name,
        distance: poi.distance
      }, null, 8, ["img", "name", "distance"]);
    }), 128))
  ], 64)) : createCommentVNode("v-if", true);
}
_sfc_main$1.__file = "src/components/station/PointsOfInterestsStation.vue";
const PointsOfInterestsStation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/station/PointsOfInterestsStation.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StationView",
  setup(__props, { expose }) {
    expose();
    const map3dStore = useMap3dStore();
    const viewStore = useViewsStore();
    const layerStore = useLayersStore();
    const stationsStore = useStationsStore();
    const poiStore = usePoiParkingStore();
    const lineInteractionStore = useLineInteractionStore();
    const { params } = useRoute();
    const routeParams = ref(params);
    const stationId = ref(Number(routeParams.value.id));
    const lineNumber = ref(Number(routeParams.value.lineid));
    const state = reactive({
      lineDescription: null,
      stationDescription: null
    });
    const rennesApp = inject("rennesApp");
    onBeforeMount(async () => {
      state.lineDescription = await apiClientService.fetchLineDescription(
        lineNumber.value
      );
      stationsStore.setLineOfStation(state.lineDescription.id);
      await apiClientService.fetchStationDescription(stationId.value).then((station) => {
        stationsStore.stationViewSetUpStationsToDisplay(
          station.nom,
          state.lineDescription.id
        );
        let isFromStationToStation = false;
        if (viewStore.currentView === viewList.station) {
          isFromStationToStation = true;
        }
        viewStore.setCurrentView(
          viewList.station,
          lineNumber.value,
          stationsStore.currentStationView
        );
        poiStore.activeStationProfile(station.nom);
        state.stationDescription = station;
        if (isFromStationToStation) {
          poiStoreSubcribe(rennesApp);
        }
      });
    });
    onMounted(async () => {
      lineInteractionStore.resetLinesLabels();
      layerStore.setVisibilities(map3dStore.is3D(), {
        trambusLines: true,
        trambusStops: true,
        parking: true,
        poi: true,
        metro: false,
        bus: false,
        bike: false,
        _traveltimeArrow: false
      });
    });
    const __returned__ = { map3dStore, viewStore, layerStore, stationsStore, poiStore, lineInteractionStore, params, routeParams, stationId, lineNumber, state, rennesApp, UiStationHeader, FooterArea: Rt, ServicesStation, PointsOfInterestsStation, BackButton };
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
    ((_c = $setup.state.stationDescription) == null ? void 0 : _c.id) ? (openBlock(), createBlock($setup["PointsOfInterestsStation"], {
      key: 1,
      nameStation: $setup.state.stationDescription.nom
    }, null, 8, ["nameStation"])) : createCommentVNode("v-if", true),
    _hoisted_4,
    createVNode($setup["FooterArea"])
  ], 64);
}
_sfc_main.__file = "src/views/StationView.vue";
const StationView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/views/StationView.vue"]]);
export {
  StationView as default
};
