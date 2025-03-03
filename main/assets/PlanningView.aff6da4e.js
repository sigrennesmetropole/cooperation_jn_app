import { aw as defineComponent, aL as ref, aD as onMounted, bn as inject, aA as openBlock, aE as createElementBlock, ay as createBlock, bo as st, aH as createBaseVNode, aB as createVNode, az as withCtx, aN as createTextVNode, bp as Map, bq as provide, br as get, bs as getWidth, bt as WMTSTileGrid, bu as TileLayer, bv as WMTS, bw as Style, bx as Stroke, by as VectorLayer, bz as VectorSource, bA as GeoJSON, bB as View, bC as fromLonLat, aI as createCommentVNode, aF as Fragment, bD as Overlay, aO as computed } from "./vendor.fe3c811e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { g as getTrambusLineNumber, l as lineColors } from "./common.01bd8e18.js";
import { u as usePlanningStore, L as LinePlanningStateTypes, U as UiPlanningLegend, a as LineName } from "./line-planning-state.model.069bbdef.js";
import { U as UiLineButton } from "./UiLineButton.4dd540b9.js";
import { U as UiButton } from "./UiButton.c52731f8.js";
import { u as usePanelsStore } from "./panels.69caded3.js";
import { t as timeLineFixtures, U as UiTimeline } from "./timeLineItems.fixtures.0aebbbad.js";
import { C as ChevronArrowRight } from "./chevron-left.151e6030.js";
import "./color.12f233df.js";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UiOLMap",
  setup(__props, { expose }) {
    expose();
    const mapContainer = ref(null);
    onMounted(async () => {
      if (mapContainer.value) {
        const map = inject("map");
        map.setTarget(mapContainer.value);
      }
    });
    const __returned__ = { mapContainer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = {
  ref: "mapContainer",
  class: "h-full w-full bg-gray-100"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, null, 512);
}
_sfc_main$5.__file = "src/components/ui/UiOLMap.vue";
const UiOLMap = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiOLMap.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PlanningLegend",
  setup(__props, { expose }) {
    expose();
    const planningStore = usePlanningStore();
    let items = [
      LinePlanningStateTypes.UNSTARTED,
      LinePlanningStateTypes.UNDER_CONSTRUCTION,
      LinePlanningStateTypes.COMMISIONING
    ];
    let lines = [LineName.LINE_1, LineName.LINE_2, LineName.LINE_3, LineName.LINE_4];
    const updateLineState = (lineState) => {
      planningStore.setLinePlanningState(lineState);
    };
    const __returned__ = { planningStore, items, lines, updateLineState, UiPlanningLegend };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiPlanningLegend"], {
    items: $setup.items,
    lines: $setup.lines,
    onUpdateLinePlanningState: $setup.updateLineState,
    class: "absolute right-8 top-8"
  }, null, 8, ["items", "lines"]);
}
_sfc_main$4.__file = "src/components/map/planning/PlanningLegend.vue";
const PlanningLegend = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/map/planning/PlanningLegend.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OlNavigationButtons",
  setup(__props, { expose }) {
    expose();
    const olMap = inject("map");
    async function zoom(out = false, zoomDistance = 0.5) {
      const view = olMap.getView();
      const zoom2 = view.getZoom() || view.getMinZoom();
      const amount = out ? -zoomDistance : zoomDistance;
      let newZoom = zoom2 + amount;
      if (newZoom >= view.getMaxZoom()) {
        newZoom = view.getMaxZoom();
      }
      if (newZoom <= view.getMinZoom()) {
        newZoom = view.getMinZoom();
      }
      view.animate({ zoom: newZoom });
    }
    const __returned__ = { olMap, zoom, UiIconButton: st };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "h-90 transition-[height] absolute right-2 bottom-10 flex flex-col [&>*]:m-2 text-gray-dark items-center overflow-hidden w-32 select-none" };
const _hoisted_2$1 = {
  class: "flex flex-col zoom-buttons text-2xl [&>*]:p-2",
  role: "group"
};
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode("+");
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode("-");
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$1, [
      createVNode($setup["UiIconButton"], {
        class: "rounded-t-lg",
        onClick: _cache[0] || (_cache[0] = () => $setup.zoom(false))
      }, {
        default: withCtx(() => [
          _hoisted_3$1
        ]),
        _: 1
      }),
      createVNode($setup["UiIconButton"], {
        class: "rounded-b-lg",
        onClick: _cache[1] || (_cache[1] = () => $setup.zoom(true))
      }, {
        default: withCtx(() => [
          _hoisted_4$1
        ]),
        _: 1
      })
    ])
  ]);
}
_sfc_main$3.__file = "src/components/map/buttons/OlNavigationButtons.vue";
const OlNavigationButtons = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/map/buttons/OlNavigationButtons.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PlanningMapComponent",
  setup(__props, { expose }) {
    expose();
    const planningStore = usePlanningStore();
    let map = new Map({ controls: [] });
    provide("map", map);
    const mapLoaded = ref(false);
    const line1 = ref(null);
    const line2 = ref(null);
    const line3 = ref(null);
    const line4 = ref(null);
    const resolutions = [];
    const matrixIds = [];
    const proj3857 = get("EPSG:3857");
    const maxResolution = getWidth(proj3857.getExtent()) / 256;
    for (let i = 0; i < 20; i++) {
      matrixIds[i] = "EPSG:3857:" + i.toString();
      resolutions[i] = maxResolution / Math.pow(2, i);
    }
    const tileGrid = new WMTSTileGrid({
      origin: [-20037508, 20037508],
      resolutions,
      matrixIds
    });
    const rennesBaseMap = new TileLayer({
      source: new WMTS({
        url: "https://public.sig.rennesmetropole.fr/geowebcache/service/wmts",
        layer: "ref_fonds:pvci_simple_gris",
        matrixSet: "EPSG:3857",
        format: "image/png",
        projection: "EPSG:3857",
        tileGrid,
        style: "normal"
      })
    });
    const innerWhiteStyle = new Style({
      stroke: new Stroke({
        color: "#FFFFFF",
        width: 7
      }),
      zIndex: 1
    });
    const blackBorderStyle = new Style({
      stroke: new Stroke({
        color: "#0F172A",
        width: 9
      }),
      zIndex: 0
    });
    function activeLineBorderStyle(line) {
      return new Style({
        stroke: new Stroke({
          color: lineColors[line],
          width: 9
        }),
        zIndex: 0
      });
    }
    function lineStatusStyle(lineState) {
      return new Style({
        stroke: new Stroke({
          color: lineState.color,
          width: 4
        }),
        zIndex: 2
      });
    }
    const inactiveLineStyle = [
      new Style({
        stroke: new Stroke({
          color: "#FFFFFF",
          width: 2
        }),
        zIndex: 1
      }),
      new Style({
        stroke: new Stroke({
          color: "#525252",
          width: 4
        }),
        zIndex: 0
      })
    ];
    function convertAttributeToDate(attribute) {
      const year = parseInt(attribute.split(" ")[0]);
      const month = attribute.split(" ")[1] == "S1" ? 1 : 7;
      return new Date(year, month);
    }
    function getState(feature) {
      const inProgressDate = convertAttributeToDate(
        String(feature.get("phase_travaux"))
      );
      const commisionedDate = convertAttributeToDate(
        String(feature.get("phase_livre"))
      );
      const selectedDate = planningStore.getSelectedDate();
      if (selectedDate >= commisionedDate) {
        return LinePlanningStateTypes.COMMISIONING;
      } else if (selectedDate >= inProgressDate && selectedDate < commisionedDate) {
        return LinePlanningStateTypes.UNDER_CONSTRUCTION;
      } else {
        return LinePlanningStateTypes.UNSTARTED;
      }
    }
    function isLineSelected(feature) {
      return planningStore.selectedLine == getTrambusLineNumber(feature);
    }
    function isLinePlanningStateActivated() {
      return planningStore.selectedLineState !== null;
    }
    function isLinePlanningStateSelected(feature) {
      return planningStore.isLinePlanningStateHighlighted(getState(feature));
    }
    const styleFunction = function(feature) {
      if (isLinePlanningStateActivated() && !isLinePlanningStateSelected(feature)) {
        if (isLineSelected(feature)) {
          return [
            activeLineBorderStyle(getTrambusLineNumber(feature)),
            innerWhiteStyle
          ];
        }
        return inactiveLineStyle;
      }
      if ([1, 2, 3, 4].indexOf(planningStore.selectedLine) == -1)
        return [
          lineStatusStyle(getState(feature)),
          innerWhiteStyle,
          blackBorderStyle
        ];
      if (isLineSelected(feature)) {
        return [
          lineStatusStyle(getState(feature)),
          activeLineBorderStyle(getTrambusLineNumber(feature)),
          innerWhiteStyle
        ];
      }
      return inactiveLineStyle;
    };
    const planningLayer = new VectorLayer({
      source: new VectorSource({
        url: "https://public.sig.rennesmetropole.fr/geoserver/ows?service=WFS&request=getFeature&typename=trp_coll:trambus_lignes_planification&outputFormat=application/json&srsName=EPSG:4326",
        format: new GeoJSON()
      }),
      style: styleFunction
    });
    function addOverlay(olMap, lng, lat, lineButtonComponent) {
      var _a;
      const anchor = (_a = lineButtonComponent == null ? void 0 : lineButtonComponent.$props.corner) != null ? _a : "tl";
      const positioning = {
        br: "bottom-right",
        bl: "bottom-left",
        tr: "top-right",
        tl: "top-left"
      };
      const overlay = new Overlay({
        element: lineButtonComponent == null ? void 0 : lineButtonComponent.$el,
        position: fromLonLat([lng, lat]),
        positioning: positioning[anchor]
      });
      olMap.addOverlay(overlay);
    }
    function setupMap() {
      map.setTarget("mapContainer");
      map.setView(
        new View({
          center: fromLonLat([-1.67, 48.101]),
          zoom: 12,
          maxZoom: 15,
          minZoom: 12
        })
      );
      map.setLayers([rennesBaseMap, planningLayer]);
      addOverlay(map, -1.69963979, 48.13097969, line1.value);
      addOverlay(map, -1.59290358, 48.11698771, line2.value);
      addOverlay(map, -1.59973872, 48.08178725, line3.value);
      addOverlay(map, -1.71701545, 48.07001307, line4.value);
      mapLoaded.value = true;
    }
    onMounted(async () => {
      setupMap();
    });
    planningStore.$subscribe(() => {
      planningLayer.setStyle(styleFunction);
    });
    function setSelectedLine(line) {
      if (planningStore.selectedLine == line) {
        planningStore.selectedLine = 0;
      } else {
        planningStore.selectedLine = line;
      }
    }
    const __returned__ = { planningStore, map, mapLoaded, line1, line2, line3, line4, resolutions, matrixIds, proj3857, maxResolution, tileGrid, rennesBaseMap, innerWhiteStyle, blackBorderStyle, activeLineBorderStyle, lineStatusStyle, inactiveLineStyle, convertAttributeToDate, getState, isLineSelected, isLinePlanningStateActivated, isLinePlanningStateSelected, styleFunction, planningLayer, addOverlay, setupMap, setSelectedLine, UiOLMap, PlanningLegend, UiLineButton, OlNavigationButtons };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "absolute left-10 top-10 flex flex-row gap-1" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    $setup.mapLoaded ? (openBlock(), createBlock($setup["UiOLMap"], { key: 0 })) : createCommentVNode("v-if", true),
    createVNode($setup["OlNavigationButtons"]),
    createBaseVNode("div", _hoisted_1$1, [
      createVNode($setup["UiLineButton"], {
        ref: "line1",
        line: 1,
        chevron: false,
        active: [2, 3, 4].indexOf($setup.planningStore.selectedLine) == -1,
        corner: "br",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.setSelectedLine(1))
      }, null, 8, ["active"]),
      createVNode($setup["UiLineButton"], {
        ref: "line2",
        line: 2,
        chevron: false,
        active: [1, 3, 4].indexOf($setup.planningStore.selectedLine) == -1,
        corner: "bl",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.setSelectedLine(2))
      }, null, 8, ["active"]),
      createVNode($setup["UiLineButton"], {
        ref: "line3",
        line: 3,
        chevron: false,
        active: [1, 2, 4].indexOf($setup.planningStore.selectedLine) == -1,
        corner: "tl",
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.setSelectedLine(3))
      }, null, 8, ["active"]),
      createVNode($setup["UiLineButton"], {
        ref: "line4",
        line: 4,
        chevron: false,
        active: [1, 2, 3].indexOf($setup.planningStore.selectedLine) == -1,
        corner: "br",
        onClick: _cache[3] || (_cache[3] = ($event) => $setup.setSelectedLine(4))
      }, null, 8, ["active"])
    ]),
    createVNode($setup["PlanningLegend"])
  ], 64);
}
_sfc_main$2.__file = "src/components/map/planning/PlanningMapComponent.vue";
const PlanningMapComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/map/planning/PlanningMapComponent.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TimelineController",
  setup(__props, { expose }) {
    expose();
    const planningStore = usePlanningStore();
    const timeLineItems = timeLineFixtures();
    const updateDate = (date) => {
      planningStore.setDate(date);
    };
    const selectedIndex = computed(() => {
      var _a, _b;
      const selectedDate = planningStore.getSelectedDate();
      const year = selectedDate.getUTCFullYear();
      const semester = selectedDate.getUTCMonth() + 1 < 7 ? 1 : 2;
      for (let index = 0; index < timeLineItems.length; index++) {
        if (((_a = timeLineItems.at(index)) == null ? void 0 : _a.semester) == semester && ((_b = timeLineItems.at(index)) == null ? void 0 : _b.year) == year)
          return index;
      }
      return 0;
    });
    const __returned__ = { planningStore, timeLineItems, updateDate, selectedIndex, UiTimeline };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiTimeline"], {
    items: $setup.timeLineItems,
    onSelectedDate: $setup.updateDate,
    "selected-index": $setup.selectedIndex
  }, null, 8, ["items", "selected-index"]);
}
_sfc_main$1.__file = "src/components/home/TimelineController.vue";
const TimelineController = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/TimelineController.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PlanningView",
  setup(__props, { expose }) {
    expose();
    const panelStore = usePanelsStore();
    const __returned__ = { panelStore, PlanningMapComponent, UiButton, TimelineController, ChevronArrowRight };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "h-screen flex flex-col" };
const _hoisted_2 = { class: "p-4 bg-white flex flex-row gap-2 items-center shadow-xl overflow-x-auto overflow-y-hidden" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans grow font-bold text-2xl" }, " Planning d\u2019am\xE9nagement du r\xE9seau trambus ", -1);
const _hoisted_5 = { class: "grow flex justify-end" };
const _hoisted_6 = { class: "flex grow relative" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["UiButton"], {
        class: "shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0 mr-2",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.panelStore.isPlanningViewShown = false)
      }, {
        default: withCtx(() => [
          createBaseVNode("img", { src: $setup.ChevronArrowRight }, null, 8, _hoisted_3)
        ]),
        _: 1
      }),
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createVNode($setup["TimelineController"])
      ])
    ]),
    createBaseVNode("div", _hoisted_6, [
      createVNode($setup["PlanningMapComponent"])
    ])
  ]);
}
_sfc_main.__file = "src/views/PlanningView.vue";
const PlanningView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/views/PlanningView.vue"]]);
export {
  PlanningView as default
};
