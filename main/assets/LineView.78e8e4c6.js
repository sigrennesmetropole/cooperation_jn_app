import { aw as defineComponent, aA as openBlock, aC as createElementBlock, aK as Fragment, aL as renderList, ay as createBlock, b2 as inject, aI as reactive, aU as onBeforeMount, bk as useRoute, aO as ref, aJ as onMounted, aF as createBaseVNode, aB as createVNode, aM as createCommentVNode } from "./vendor.be708d50.js";
import { R as RENNES_LAYER, u as useLayersStore, a as apiClientService, f as fetchStationsByLine, c as completeStationsData } from "./api.client.b501753d.js";
import { L as LineFigures } from "./LineFigures.dd6a177f.js";
import { U as UiTravelTime } from "./UiTravelTime.7fdad7b1.js";
import { T as ThermometerStations } from "./ThermometerStations.story.c01ee0a4.js";
import { U as UiParkingInformation } from "./UiParkingInformation.cab93d3a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { u as usePoiStore, F as FooterArea } from "./poi.3484c588.js";
import { a as useMapStore, u as useViewsStore, b as useLineViewsStore, v as viewList } from "./map.c5b50e17.js";
import { u as useStationsStore } from "./stations.7155d0d7.js";
import { U as UiLineHeader } from "./UiLineHeader.e92a9029.js";
import { u as useTraveltimeInteractionStore, B as BackButton } from "./BackButton.99390d15.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./UiNetworkFigure.57ff99e4.js";
import "./informationIcon.70adcac2.js";
import "./UiVerticalSeparator.a199fdbb.js";
import "./IconLine.f5f8cc49.js";
import "./color.12f233df.js";
import "./parkingRelais.71b850b9.js";
import "./LegalLink.31e94e8d.js";
import "./UiLinkFooter.482c1f0d.js";
import "./IconTwoDirectionArrow.c2b6136f.js";
import "./chevron-left.dd0e6ed2.js";
import "./UiButton.1faafd24.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ParkingsInformations",
  props: {
    parkings: { type: Array, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, UiParkingInformation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.parkings, (parking) => {
      return openBlock(), createBlock($setup["UiParkingInformation"], {
        key: parking.id,
        name: parking.nom,
        station: parking.arret_nom,
        place: parking.nb_max_places
      }, null, 8, ["name", "station", "place"]);
    }), 128))
  ]);
}
_sfc_main$1.__file = "src/components/line/ParkingsInformations.vue";
const ParkingsInformations = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/line/ParkingsInformations.vue"]]);
async function fetchParkingsByLine(rennesApp, lineNumber) {
  const num_line = "T" + lineNumber.toString();
  const parkings = [];
  const parkingsFeatures = await rennesApp.getFeaturesByAttributeFromLayer(
    RENNES_LAYER.parking,
    "li_code",
    num_line
  );
  parkingsFeatures.forEach((feature) => {
    parkings.push({
      id: feature.get("id"),
      arret_nom: feature.get("arret_nom"),
      li_code: feature.get("li_code"),
      nom: feature.get("nom"),
      nb_max_places: feature.get("nb_max_places"),
      nb_min_places: feature.get("nb_min_places")
    });
  });
  return parkings;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LineView",
  setup(__props, { expose }) {
    expose();
    const mapStore = useMapStore();
    const viewStore = useViewsStore();
    const layerStore = useLayersStore();
    const lineStore = useLineViewsStore();
    const stationsStore = useStationsStore();
    const traveltimeInteractionStore = useTraveltimeInteractionStore();
    const poiStore = usePoiStore();
    const rennesApp = inject("rennesApp");
    const state = reactive({
      lineDescription: null,
      travelTimes: null,
      photo: null,
      parkings: null,
      stations: null
    });
    onBeforeMount(async () => {
      const { params } = useRoute();
      const routeParams = ref(params);
      lineStore.selectLine(Number(routeParams.value.id));
      state.lineDescription = await apiClientService.fetchLineDescription(
        lineStore.selectedLine
      );
      stationsStore.lineViewSetUpStationsToDisplay(state.lineDescription.id);
      state.travelTimes = await apiClientService.fetchTravelTimeByLine(
        lineStore.selectedLine
      );
      state.photo = await apiClientService.fetchPhotoByLine(lineStore.selectedLine);
      state.parkings = await fetchParkingsByLine(rennesApp, lineStore.selectedLine);
      const stations = await fetchStationsByLine(rennesApp, lineStore.selectedLine);
      state.stations = await completeStationsData(
        rennesApp,
        stations,
        lineStore.selectedLine,
        state.parkings
      );
    });
    onMounted(async () => {
      viewStore.currentView = viewList.line;
      mapStore.updateViewpoint(`line${lineStore.selectedLine}`, true);
      layerStore.setVisibilities(mapStore.is3D(), {
        trambusLines: true,
        trambusStops: true,
        parking: true,
        poi: true,
        _traveltimeArrow: true
      });
      poiStore.activeLineProfile();
      stationsStore.clearAllStations();
    });
    function onTravelTimesClicked(travelTime) {
      if (travelTime == traveltimeInteractionStore.selectedTraveltime) {
        traveltimeInteractionStore.selectTraveltime(null);
      } else {
        traveltimeInteractionStore.selectTraveltime(travelTime);
      }
    }
    const __returned__ = { mapStore, viewStore, layerStore, lineStore, stationsStore, traveltimeInteractionStore, poiStore, rennesApp, state, onTravelTimesClicked, LineFigures, UiTravelTime, ThermometerStations, ParkingsInformations, FooterArea, UiLineHeader, BackButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-start py-0 gap-2" };
const _hoisted_2 = { class: "flex items-center p-0 gap-4" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6" }, " Nouveaux temps de parcours ", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 mt-2" }, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 mb-3" }, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 my-3" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f;
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode($setup["BackButton"]),
        $setup.state.lineDescription ? (openBlock(), createBlock($setup["UiLineHeader"], {
          key: 0,
          line: (_a = $setup.state.lineDescription) == null ? void 0 : _a.id,
          name: (_b = $setup.state.lineDescription) == null ? void 0 : _b.name,
          start: (_c = $setup.state.lineDescription) == null ? void 0 : _c.start,
          end: (_d = $setup.state.lineDescription) == null ? void 0 : _d.end
        }, null, 8, ["line", "name", "start", "end"])) : createCommentVNode("v-if", true)
      ])
    ]),
    $setup.state.photo !== null && $setup.state.photo !== void 0 ? (openBlock(), createElementBlock("img", {
      key: $setup.state.photo.url,
      src: $setup.state.photo.url,
      class: "h-[184px] -mx-6 max-w-7xl mb-2"
    }, null, 8, _hoisted_3)) : createCommentVNode("v-if", true),
    $setup.state.lineDescription && $setup.state.parkings && $setup.state.stations ? (openBlock(), createBlock($setup["LineFigures"], {
      key: 1,
      line: (_e = $setup.state.lineDescription) == null ? void 0 : _e.id,
      nb_parking: $setup.state.parkings.length,
      nb_station: $setup.state.stations.length
    }, null, 8, ["line", "nb_parking", "nb_station"])) : createCommentVNode("v-if", true),
    _hoisted_4,
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.travelTimes, (travelTime) => {
      return openBlock(), createBlock($setup["UiTravelTime"], {
        role: "button",
        onClick: ($event) => $setup.onTravelTimesClicked(travelTime),
        key: travelTime.line,
        newDuration: travelTime.new,
        oldDuration: travelTime.old,
        lineNumber: travelTime.line,
        startStation: travelTime.start,
        endStation: travelTime.end,
        colored: travelTime == $setup.traveltimeInteractionStore.selectedTraveltime
      }, null, 8, ["onClick", "newDuration", "oldDuration", "lineNumber", "startStation", "endStation", "colored"]);
    }), 128)),
    $setup.state.parkings && $setup.state.parkings.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      _hoisted_5,
      createVNode($setup["ParkingsInformations"], {
        parkings: $setup.state.parkings
      }, null, 8, ["parkings"])
    ], 64)) : createCommentVNode("v-if", true),
    _hoisted_6,
    $setup.state.lineDescription && $setup.state.stations ? (openBlock(), createBlock($setup["ThermometerStations"], {
      key: 3,
      line: (_f = $setup.state.lineDescription) == null ? void 0 : _f.id,
      stations: $setup.state.stations
    }, null, 8, ["line", "stations"])) : createCommentVNode("v-if", true),
    _hoisted_7,
    createVNode($setup["FooterArea"])
  ], 64);
}
_sfc_main.__file = "src/views/LineView.vue";
const LineView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/views/LineView.vue"]]);
export {
  LineView as default
};
