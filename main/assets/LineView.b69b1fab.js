import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aF as Fragment, aG as renderList, ay as createBlock, bn as inject, aC as reactive, aV as onBeforeMount, bH as useRoute, aL as ref, aD as onMounted, aB as createVNode, aH as createBaseVNode, aI as createCommentVNode } from "./vendor.f6710be0.js";
import { a as apiClientService, f as fetchStationsByLine, c as completeStationsData } from "./api.client.58dcf6df.js";
import { L as LineFigures } from "./LineFigures.f438f59b.js";
import { U as UiTravelTime } from "./UiTravelTime.9bbf9683.js";
import { T as ThermometerStations } from "./ThermometerStations.story.69ddd883.js";
import { U as UiParkingInformation } from "./UiParkingInformation.bef4be42.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { b as useMap3dStore, a as useViewsStore, d as useLineViewsStore, e as useTraveltimeInteractionStore, c as useLineInteractionStore, v as viewList } from "./views.d9551082.js";
import { R as RENNES_LAYER, u as useLayersStore } from "./layers.d308b875.js";
import { U as UiLineHeader } from "./UiLineHeader.b1bc4d09.js";
import { B as BackButton } from "./BackButton.f6ed039c.js";
import { p as poiStoreSubcribe } from "./poi.3ae76c71.js";
import { u as useStationsStore } from "./stations.18a78160.js";
import { S as SkipLinks } from "./SkipLinks.3a6bd45d.js";
import { F as FooterAreaLink } from "./FooterAreaLink.381bdd28.js";
import { l as legalList } from "./legalLinks.47be5507.js";
import "./photo3.89e6fe14.js";
import "./lines.f3fb9c7c.js";
import "./UiNetworkFigure.a5669c53.js";
import "./UiVerticalSeparator.65906271.js";
import "./IconLine.6ac51d75.js";
import "./color.12f233df.js";
import "./IconTwoDirectionArrow.4f37abce.js";
import "./chevron-left.151e6030.js";
import "./UiButton.1ea210f6.js";
import "./panels.20bca1ed.js";
import "./common.4c92ede3.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$2.__file = "src/components/line/ParkingsInformations.vue";
const ParkingsInformations = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/line/ParkingsInformations.vue"]]);
async function fetchParkingsByStations(rennesApp, stations) {
  const parkings = [];
  const parkingsFeatures = await rennesApp.getFeaturesFromLayer(
    RENNES_LAYER.parking
  );
  stations.forEach((station) => {
    const nom_station = station["nom"];
    const parkings_on_station = parkingsFeatures.filter(
      (feature) => feature.getProperty("arret_nom") === nom_station
    );
    if (parkings_on_station.length > 0) {
      parkings_on_station.forEach((feature) => {
        parkings.push({
          id: feature.get("id"),
          arret_nom: feature.get("arret_nom"),
          li_code: feature.get("li_code"),
          nom: feature.get("nom"),
          nb_max_places: feature.get("nb_max_places"),
          nb_min_places: feature.get("nb_min_places")
        });
      });
    }
  });
  return parkings;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SkipLinksLineView",
  setup(__props, { expose }) {
    expose();
    const links = [
      { id: "new-travel-times", title: "Nouveaux temps de parcours" },
      { id: "stations-list", title: "Liste des nouvelles stations" },
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
_sfc_main$1.__file = "src/components/accessibility/SkipLinksLineView.vue";
const SkipLinksLineView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/accessibility/SkipLinksLineView.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LineView",
  setup(__props, { expose }) {
    expose();
    const openLink = (link) => {
      window.open(link, "_blank");
    };
    const map3dStore = useMap3dStore();
    const viewStore = useViewsStore();
    const stationStore = useStationsStore();
    const layerStore = useLayersStore();
    const lineStore = useLineViewsStore();
    const traveltimeInteractionStore = useTraveltimeInteractionStore();
    const lineInteractionStore = useLineInteractionStore();
    const rennesApp = inject("rennesApp");
    const state = reactive({
      lineDescription: null,
      travelTimes: null,
      photo: null,
      parkings: null,
      stations: null
    });
    let currentLine;
    onBeforeMount(async () => {
      const { params } = useRoute();
      const routeParams = ref(params);
      currentLine = Number(routeParams.value.id);
      let isFromLineToLine = false;
      if (viewStore.currentView === viewList.line) {
        isFromLineToLine = true;
      }
      viewStore.setCurrentView(viewList.line, currentLine, null);
      if (isFromLineToLine) {
        poiStoreSubcribe(rennesApp);
      }
      const travelTimes = await apiClientService.fetchTravelTimeByLine(currentLine);
      traveltimeInteractionStore.setDisplayTravelTimes(travelTimes);
      state.lineDescription = await apiClientService.fetchLineDescription(
        lineStore.selectedLine
      );
      state.travelTimes = await apiClientService.fetchTravelTimeByLine(
        lineStore.selectedLine
      );
      state.travelTimes.forEach((tt) => {
        stationStore.addStationToDisplayPermanently(tt.start);
        stationStore.addStationToDisplayPermanently(tt.end);
      });
      state.photo = await apiClientService.fetchPhotoByLine(lineStore.selectedLine);
      const stations = await fetchStationsByLine(rennesApp, lineStore.selectedLine);
      state.parkings = await fetchParkingsByStations(rennesApp, stations);
      const stationsOrder = await apiClientService.fetchStationsOrderByLine(
        lineStore.selectedLine
      );
      state.stations = await completeStationsData(
        rennesApp,
        stations,
        lineStore.selectedLine,
        stationsOrder,
        state.parkings
      );
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
    const __returned__ = { openLink, map3dStore, viewStore, stationStore, layerStore, lineStore, traveltimeInteractionStore, lineInteractionStore, rennesApp, state, currentLine, onTravelTimesClicked, LineFigures, UiTravelTime, ThermometerStations, ParkingsInformations, UiLineHeader, BackButton, SkipLinksLineView, FooterAreaLink, legalList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-start py-0 gap-2" };
const _hoisted_2 = { class: "flex items-center p-0 gap-4" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { id: "new-travel-times" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6" }, " Nouveaux temps de parcours ", -1);
const _hoisted_6 = { title: "Liste des temps de parcours." };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 mt-2" }, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 mb-3" }, null, -1);
const _hoisted_9 = { id: "stations-list" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 my-3" }, null, -1);
const _hoisted_11 = { id: "footer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode($setup["SkipLinksLineView"]),
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode($setup["BackButton"], { title: "Retour vers la page d'accueil." }),
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
      alt: "photomontage simulant l'int\xE9gration de la ligne dans le paysage urbain",
      class: "h-[184px] -mx-6 max-w-7xl mb-2"
    }, null, 8, _hoisted_3)) : createCommentVNode("v-if", true),
    $setup.state.lineDescription && $setup.state.parkings && $setup.state.stations ? (openBlock(), createBlock($setup["LineFigures"], {
      key: 1,
      line: (_e = $setup.state.lineDescription) == null ? void 0 : _e.id,
      nb_parking: $setup.state.parkings.length,
      nb_station: $setup.state.stations.length
    }, null, 8, ["line", "nb_parking", "nb_station"])) : createCommentVNode("v-if", true),
    createBaseVNode("section", _hoisted_4, [
      _hoisted_5,
      createBaseVNode("div", _hoisted_6, [
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
            colored: travelTime == $setup.traveltimeInteractionStore.selectedTraveltime,
            clickable: true
          }, null, 8, ["onClick", "newDuration", "oldDuration", "lineNumber", "startStation", "endStation", "colored"]);
        }), 128))
      ])
    ]),
    $setup.state.parkings && $setup.state.parkings.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      _hoisted_7,
      createVNode($setup["ParkingsInformations"], {
        parkings: $setup.state.parkings
      }, null, 8, ["parkings"])
    ], 64)) : createCommentVNode("v-if", true),
    _hoisted_8,
    createBaseVNode("section", _hoisted_9, [
      $setup.state.lineDescription && $setup.state.stations ? (openBlock(), createBlock($setup["ThermometerStations"], {
        key: 0,
        line: (_f = $setup.state.lineDescription) == null ? void 0 : _f.id,
        stations: $setup.state.stations
      }, null, 8, ["line", "stations"])) : createCommentVNode("v-if", true)
    ]),
    _hoisted_10,
    createBaseVNode("section", _hoisted_11, [
      createVNode($setup["FooterAreaLink"], {
        class: "mt-auto",
        onOpenLink: _cache[0] || (_cache[0] = ($event) => $setup.openLink($event)),
        legalList: $setup.legalList
      }, null, 8, ["legalList"])
    ])
  ], 64);
}
_sfc_main.__file = "src/views/LineView.vue";
const LineView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/views/LineView.vue"]]);
export {
  LineView as default
};
