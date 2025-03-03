import { bk as axios, aw as defineComponent, aC as reactive, aD as onMounted, aA as openBlock, aE as createElementBlock, aF as Fragment, aG as renderList, ay as createBlock, aS as onBeforeMount, bl as useRoute, aN as ref, aH as createBaseVNode, aB as createVNode, aI as createCommentVNode } from "./vendor.f640ceb8.js";
import { f as filterStationsByLineNumber, s as sortStationsByOrder, b as stationsFixtures, a as apiClientService } from "./api.client.eea61f38.js";
import { L as LineFigures } from "./LineFigures.6d20dad8.js";
import { U as UiTravelTime } from "./UiTravelTime.ebc889aa.js";
import { u as useTraveltimeInteractionStore, T as ThermometerStations } from "./ThermometerStations.story.46a1d60d.js";
import { U as UiParkingInformation } from "./UiParkingInformation.0de88be8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { F as FooterArea } from "./FooterArea.1bcf3b86.js";
import { b as useMapStore, a as useViewsStore, u as useLayersStore, c as useLineViewsStore, v as viewList } from "./map.a536029f.js";
import { U as UiLineHeader } from "./UiLineHeader.df84e9a6.js";
import { B as BackButton } from "./BackButton.37e5f5f1.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./UiNetworkFigure.2efd1c40.js";
import "./informationIcon.70adcac2.js";
import "./UiVerticalSeparator.3ea7899a.js";
import "./IconLine.331a9b93.js";
import "./color.12f233df.js";
import "./parkingRelais.71b850b9.js";
import "./UiLinkFooter.f65d1758.js";
import "./IconTwoDirectionArrow.b931bf2d.js";
import "./chevron-left.dd0e6ed2.js";
import "./UiButton.20d7a761.js";
const urlParking = "https://public.sig.rennesmetropole.fr/geoserver/ows?service=WFS&request=getFeature&typename=trp_coll:trambus_parc_relais&outputFormat=application/json&srsName=EPSG:4326";
async function fetchParkings() {
  let parkings = [];
  try {
    const res = await axios.get(urlParking);
    if (res.status === 200) {
      const features = res.data.features;
      const features_formatted = features.map((feature) => {
        return {
          id: feature.properties.id,
          li_code: feature.properties.li_code,
          arret_nom: feature.properties.arret_nom,
          nom: feature.properties.nom,
          nb_max_places: feature.properties.nb_max_places,
          nb_min_places: feature.properties.nb_min_places
        };
      });
      parkings = features_formatted;
    }
  } catch (error) {
    console.log(error);
  }
  return parkings;
}
async function fetchParkingsByLine(lineNumber) {
  const num_line = "T" + lineNumber.toString();
  let stations = stationsFixtures();
  stations = filterStationsByLineNumber(stations, num_line);
  stations = sortStationsByOrder(stations, lineNumber);
  const names_station = stations.map((station) => {
    return station.nom;
  });
  const parkings = await fetchParkings();
  return parkings.filter((parking) => names_station.includes(parking.arret_nom));
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ParkingsInformations",
  props: {
    line: {
      type: Number,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const state = reactive({
      parkings: null
    });
    onMounted(async () => {
      state.parkings = await fetchParkingsByLine(props.line);
    });
    const __returned__ = { props, state, UiParkingInformation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.parkings, (parking) => {
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LineView",
  setup(__props, { expose }) {
    expose();
    const mapStore = useMapStore();
    const viewStore = useViewsStore();
    const layerStore = useLayersStore();
    const lineStore = useLineViewsStore();
    const traveltimeInteractionStore = useTraveltimeInteractionStore();
    const state = reactive({
      lineDescription: null,
      travelTimes: null,
      photo: null
    });
    onBeforeMount(async () => {
      const { params } = useRoute();
      const routeParams = ref(params);
      lineStore.selectLine(Number(routeParams.value.id));
      state.lineDescription = await apiClientService.fetchLineDescription(
        lineStore.selectedLine
      );
      state.travelTimes = await apiClientService.fetchTravelTimeByLine(
        lineStore.selectedLine
      );
      state.photo = await apiClientService.fetchPhotoByLine(lineStore.selectedLine);
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
    });
    function onTravelTimesClicked(travelTime) {
      if (travelTime == traveltimeInteractionStore.selectedTraveltime) {
        traveltimeInteractionStore.selectTraveltime(null);
      } else {
        traveltimeInteractionStore.selectTraveltime(travelTime);
      }
    }
    const __returned__ = { mapStore, viewStore, layerStore, lineStore, traveltimeInteractionStore, state, onTravelTimesClicked, LineFigures, UiTravelTime, ThermometerStations, ParkingsInformations, FooterArea, UiLineHeader, BackButton };
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
  var _a, _b, _c, _d, _e, _f, _g;
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
    $setup.state.lineDescription ? (openBlock(), createBlock($setup["LineFigures"], {
      key: 1,
      line: (_e = $setup.state.lineDescription) == null ? void 0 : _e.id
    }, null, 8, ["line"])) : createCommentVNode("v-if", true),
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
    _hoisted_5,
    $setup.state.lineDescription ? (openBlock(), createBlock($setup["ParkingsInformations"], {
      key: 2,
      line: (_f = $setup.state.lineDescription) == null ? void 0 : _f.id
    }, null, 8, ["line"])) : createCommentVNode("v-if", true),
    _hoisted_6,
    $setup.state.lineDescription ? (openBlock(), createBlock($setup["ThermometerStations"], {
      key: 3,
      line: (_g = $setup.state.lineDescription) == null ? void 0 : _g.id
    }, null, 8, ["line"])) : createCommentVNode("v-if", true),
    _hoisted_7,
    createVNode($setup["FooterArea"])
  ], 64);
}
_sfc_main.__file = "src/views/LineView.vue";
const LineView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/views/LineView.vue"]]);
export {
  LineView as default
};
