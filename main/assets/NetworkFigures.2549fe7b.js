import { aw as defineComponent, aC as inject, aD as reactive, aE as onMounted, aA as openBlock, aF as createElementBlock, aG as Fragment, aH as renderList, aI as createBaseVNode, aB as createVNode, ay as createBlock, aJ as createCommentVNode } from "./vendor.2fe705a9.js";
import { U as UiNetworkFigure } from "./UiNetworkFigure.5a2f311c.js";
import { s as stationIcon, U as UiVerticalSeparator } from "./station.4c32434c.js";
import { g as getLinesId } from "./line.2aa20c65.js";
import { l as linesIcon } from "./lines.f3fb9c7c.js";
import { R as RENNES_LAYER } from "./layers.38c022d9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
function buildStationModelFromStationFeature(feature) {
  return {
    id: feature.get("id"),
    nom: feature.get("nom"),
    li_code: feature.get("li_code"),
    ordre_t1: feature.get("ordre_t1"),
    ordre_t2: feature.get("ordre_t2"),
    ordre_t3: feature.get("ordre_t3"),
    ordre_t4: feature.get("ordre_t4"),
    parking: false,
    desserte: feature.get("desserte"),
    desserte_scolaire: feature.get("desserte_scolaire"),
    desserte_soirs_we: feature.get("desserte_soirs_we"),
    desserte_dimanche: feature.get("desserte_dimanche")
  };
}
async function getStations(rennesApp) {
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.trambusStops);
  const stations = [];
  layer.getFeatures().forEach((feature) => {
    stations.push(buildStationModelFromStationFeature(feature));
  });
  return stations;
}
const bikeIcon = "/cooperation_jn_trambus/main/assets/bike.71284de4.svg";
const CYCLING_DISTANCE = 128;
async function fetchNetworkFigure(rennesApp) {
  const networkFigures = [];
  const lines = await getLinesId(rennesApp);
  networkFigures.push({
    id: "lines",
    figure: lines.length,
    description: "Nouvelles lignes",
    icon: linesIcon
  });
  const stations = await getStations(rennesApp);
  networkFigures.push({
    id: "stations",
    figure: stations.length,
    description: "Nouvelles stations",
    icon: stationIcon
  });
  networkFigures.push({
    id: "bike",
    figure: CYCLING_DISTANCE,
    description: "Am\xE9nagement cyclables",
    unit: "km",
    icon: bikeIcon
  });
  return networkFigures;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NetworkFigures",
  setup(__props, { expose }) {
    expose();
    const rennesApp = inject("rennesApp");
    const state = reactive({
      networkFigures: null
    });
    onMounted(async () => {
      state.networkFigures = await fetchNetworkFigure(rennesApp);
    });
    function getLength(networkFigures) {
      if (networkFigures == null) {
        return 0;
      }
      return networkFigures.length;
    }
    const __returned__ = { rennesApp, state, getLength, UiNetworkFigure, UiVerticalSeparator };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row px-4 py-3 gap-3 bg-slate-50 border rounded-lg border-slate-100 items-center" };
const _hoisted_2 = { class: "w-[110px] grow" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.networkFigures, (networkFigure, index) => {
      return openBlock(), createElementBlock(Fragment, {
        key: networkFigure.id
      }, [
        createBaseVNode("article", _hoisted_2, [
          createVNode($setup["UiNetworkFigure"], {
            figure: networkFigure.figure,
            description: networkFigure.description,
            unit: networkFigure.unit,
            icon: networkFigure.icon,
            moreInformation: networkFigure.moreInformation
          }, null, 8, ["figure", "description", "unit", "icon", "moreInformation"])
        ]),
        index + 1 < $setup.getLength($setup.state.networkFigures) ? (openBlock(), createBlock($setup["UiVerticalSeparator"], { key: 0 })) : createCommentVNode("v-if", true)
      ], 64);
    }), 128))
  ]);
}
_sfc_main.__file = "src/components/home/NetworkFigures.vue";
const NetworkFigures = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/NetworkFigures.vue"]]);
export {
  NetworkFigures as N
};
