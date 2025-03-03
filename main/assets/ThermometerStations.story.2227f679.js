import { aw as defineComponent, aK as ref, aA as openBlock, ay as createBlock, aR as createRouter, aS as createWebHistory, _ as __vitePreload, aO as computed, aE as createElementBlock, aH as createBaseVNode, aP as normalizeClass, aL as toDisplayString, aF as Fragment, aG as renderList, aI as createCommentVNode, aT as pushScopeId, aU as popScopeId, ax as resolveComponent, az as withCtx, aB as createVNode } from "./vendor.a7c7a003.js";
import { a as IconCircleText, I as IconLine } from "./IconLine.a047a61d.js";
import { a as getColorBus, g as getColorLine } from "./color.12f233df.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { u as useStationsStore } from "./stations.8e4f005b.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "IconBus",
  props: {
    bus: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const bgColor = ref(getColorBus("bg", props.bus));
    const busText = ref(props.size === "s" ? props.bus.replace("C", "") : props.bus);
    const __returned__ = { props, bgColor, busText, IconCircleText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["IconCircleText"], {
    text: $setup.busText,
    size: $setup.props.size,
    bgColor: $setup.bgColor
  }, null, 8, ["text", "size", "bgColor"]);
}
_sfc_main$4.__file = "src/components/ui/icons/IconBus.vue";
const IconBus = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/icons/IconBus.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "IconParking",
  props: {
    size: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const bgColor = ref("bg-black");
    const busText = ref("P+r");
    const __returned__ = { props, bgColor, busText, IconCircleText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["IconCircleText"], {
    text: $setup.busText,
    size: $setup.props.size,
    bgColor: $setup.bgColor
  }, null, 8, ["text", "size", "bgColor"]);
}
_sfc_main$3.__file = "src/components/ui/icons/IconParking.vue";
const IconParking = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/icons/IconParking.vue"]]);
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => __vitePreload(() => import("./HomeView.c87d9dcf.js"), true ? ["assets/HomeView.c87d9dcf.js","assets/vendor.a7c7a003.js","assets/api.client.e4663d44.js","assets/stations.8e4f005b.js","assets/lines.f3fb9c7c.js","assets/photo3.89e6fe14.js","assets/UiLineDescription.2c8c7893.js","assets/IconLine.a047a61d.js","assets/color.12f233df.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/IconTwoDirectionArrow.003933dd.js","assets/views.6b29e00d.js","assets/TravelTimes.864bdf75.js","assets/UiTravelTime.f7171a25.js","assets/UiOverflowContainer.52b0bf4b.js","assets/UiLinkPrimary.5100a02a.js","assets/UiTrambusTitle.0ce64e1d.js","assets/NetworkFigures.98f26b1d.js","assets/UiNetworkFigure.634e2933.js","assets/UiVerticalSeparator.b29e7bb0.js","assets/SkipLinks.e3cb8d33.js","assets/panels.500bf581.js"] : void 0)
  },
  {
    path: "/planning",
    name: "planning",
    component: () => __vitePreload(() => import("./PlanningView.7b614579.js"), true ? ["assets/PlanningView.7b614579.js","assets/vendor.a7c7a003.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/common.0cf28ec5.js","assets/line-planning-state.model.68b17276.js","assets/UiLineButton.2e3f6383.js","assets/color.12f233df.js","assets/UiButton.7fe0936c.js","assets/panels.500bf581.js","assets/timeLineItems.fixtures.40f457d9.js","assets/chevron-left.dd0e6ed2.js"] : void 0)
  },
  {
    path: "/line/:id",
    name: "line",
    component: () => __vitePreload(() => import("./LineView.1f0695f0.js"), true ? ["assets/LineView.1f0695f0.js","assets/vendor.a7c7a003.js","assets/api.client.e4663d44.js","assets/stations.8e4f005b.js","assets/lines.f3fb9c7c.js","assets/photo3.89e6fe14.js","assets/LineFigures.6b1a4414.js","assets/UiNetworkFigure.634e2933.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/UiVerticalSeparator.b29e7bb0.js","assets/UiTravelTime.f7171a25.js","assets/IconLine.a047a61d.js","assets/color.12f233df.js","assets/UiParkingInformation.f90ea7ff.js","assets/views.6b29e00d.js","assets/UiLineHeader.07b344d9.js","assets/IconTwoDirectionArrow.003933dd.js","assets/BackButton.47b41ea2.js","assets/chevron-left.dd0e6ed2.js","assets/UiButton.7fe0936c.js","assets/panels.500bf581.js","assets/poi.2638924f.js","assets/common.0cf28ec5.js","assets/SkipLinks.e3cb8d33.js"] : void 0)
  },
  {
    path: "/line/:lineid/station/:id",
    name: "station",
    component: () => __vitePreload(() => import("./StationView.5fb486de.js"), true ? ["assets/StationView.5fb486de.js","assets/vendor.a7c7a003.js","assets/views.6b29e00d.js","assets/api.client.e4663d44.js","assets/stations.8e4f005b.js","assets/lines.f3fb9c7c.js","assets/photo3.89e6fe14.js","assets/UiStationHeader.c68c9ce1.js","assets/IconLine.a047a61d.js","assets/color.12f233df.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/ServicesStation.3ac8a84c.js","assets/ItemPOI.5d0cf0cb.js","assets/BackButton.47b41ea2.js","assets/chevron-left.dd0e6ed2.js","assets/UiButton.7fe0936c.js","assets/panels.500bf581.js","assets/poi.2638924f.js","assets/common.0cf28ec5.js"] : void 0)
  },
  {
    path: "/traveltimes",
    name: "traveltimes",
    component: () => __vitePreload(() => import("./TravelTimesView.38f68d7d.js"), true ? ["assets/TravelTimesView.38f68d7d.js","assets/vendor.a7c7a003.js","assets/views.6b29e00d.js","assets/api.client.e4663d44.js","assets/stations.8e4f005b.js","assets/lines.f3fb9c7c.js","assets/photo3.89e6fe14.js","assets/BackButton.47b41ea2.js","assets/chevron-left.dd0e6ed2.js","assets/UiButton.7fe0936c.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/panels.500bf581.js","assets/UiTravelTime.f7171a25.js","assets/IconLine.a047a61d.js","assets/color.12f233df.js"] : void 0)
  }
];
const router = createRouter({
  history: createWebHistory("/cooperation_jn_trambus/main/"),
  routes
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ItemThermometerStations",
  props: {
    index: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    line: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    desserte: {
      type: String,
      required: true
    },
    li_code: {
      type: String,
      required: true
    },
    parking: {
      type: Boolean,
      required: false,
      default: false
    },
    is_last_elem: {
      type: Boolean,
      required: true,
      default: false
    },
    is_station_after_select: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const stationActive = ref(false);
    const stationInteractionOnMap = ref(false);
    const borderColor = ref(getColorLine("border", props.line, 600));
    let desserteSplit = props.desserte.split(" ").filter((bus) => bus !== void 0 && bus != "");
    const desserteTab = ref(
      desserteSplit.map((bus) => {
        let new_bus = bus;
        return new_bus;
      })
    );
    var lineTab = ref([]);
    if (props.li_code != "") {
      let li_code_split = props.li_code.split(" ");
      lineTab.value = li_code_split.map((line) => {
        let new_line = parseInt(line);
        return new_line;
      });
    }
    const stationsStore = useStationsStore();
    stationsStore.$subscribe(async () => {
      if (stationsStore.stationIsInStationsToDisplay(props.name) && !stationsStore.stationIsInStationsToDisplayPermanently(props.name)) {
        stationInteractionOnMap.value = true;
      } else if (stationInteractionOnMap.value) {
        stationInteractionOnMap.value = false;
      }
    });
    function getClassCircle() {
      let marginLeftNegative = "-ml-1";
      let border2px = "border-2";
      if (stationActive.value || stationInteractionOnMap.value) {
        return [
          "min-w-[16px]",
          "w-4",
          "h-4",
          "border-black",
          marginLeftNegative,
          "border-[3px]"
        ];
      }
      if (props.index == 1 || props.is_last_elem) {
        return [
          "min-w-[16px]",
          "w-4",
          "h-4",
          marginLeftNegative,
          borderColor.value,
          "border-4"
        ];
      }
      return ["min-w-[8px]", "w-2", "h-2", borderColor.value, border2px];
    }
    function getClassBeforeCircle() {
      if (props.index == 1) {
        return [];
      }
      var classBefore = [
        "before:absolute",
        "before:content-['']",
        "before:border-l-2",
        "before:" + borderColor.value
      ];
      let ml = "before:ml-px";
      let bottom = "before:bottom-[65%]";
      let height = "before:h-[91%]";
      if (stationActive.value || stationInteractionOnMap.value) {
        ml = "before:ml-[5px]";
        bottom = "before:bottom-[75%]";
        height = "before:h-[90%]";
      } else if (props.is_last_elem) {
        ml = "before:ml-[3px]";
        height = "before:h-[95%]";
      } else if (props.is_station_after_select) {
        height = "before:h-[80%]";
      }
      return classBefore.concat([ml, bottom, height]);
    }
    const classCircle = computed(() => {
      var classObject = ["rounded-full", "mr-2", "mb-3", "mt-2"];
      classObject = classObject.concat(getClassCircle());
      classObject = classObject.concat(getClassBeforeCircle());
      return classObject;
    });
    function goToStationPage() {
      router.push(`/line/${props.line}/station/${props.id}`);
    }
    const __returned__ = { props, stationActive, stationInteractionOnMap, borderColor, desserteSplit, desserteTab, lineTab, stationsStore, getClassCircle, getClassBeforeCircle, classCircle, goToStationPage, IconLine, IconBus, IconParking };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["aria-label"];
const _hoisted_2$1 = ["id"];
const _hoisted_3 = { class: "font-dm-sans font-bold text-base -tracking-[1%] w-80 h-6 mb-1" };
const _hoisted_4 = { class: "ml-auto mr-1" };
const _hoisted_5 = { class: "flex" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass(["flex items-center mb-1 cursor-pointer h-7", $setup.stationActive || $setup.stationInteractionOnMap ? "bg-slate-100" : ""]),
    "aria-label": `Station ${$props.name}.`,
    onMouseover: _cache[0] || (_cache[0] = ($event) => $setup.stationActive = true),
    onMouseleave: _cache[1] || (_cache[1] = ($event) => $setup.stationActive = false),
    tabindex: "0",
    onClick: _cache[2] || (_cache[2] = ($event) => $setup.goToStationPage()),
    href: "#"
  }, [
    createBaseVNode("div", {
      id: "divcircle-" + $props.name,
      class: normalizeClass($setup.classCircle)
    }, null, 10, _hoisted_2$1),
    createBaseVNode("p", _hoisted_3, toDisplayString($props.name), 1),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("div", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.lineTab, (line_connected, index) => {
          return openBlock(), createBlock($setup["IconLine"], {
            key: index,
            line: line_connected,
            size: "m",
            class: "mb-1 ml-px"
          }, null, 8, ["line"]);
        }), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.desserteTab, (bus, index) => {
          return openBlock(), createBlock($setup["IconBus"], {
            key: index,
            bus,
            size: "m",
            class: "mb-1 ml-px"
          }, null, 8, ["bus"]);
        }), 128)),
        $props.parking !== void 0 && $props.parking ? (openBlock(), createBlock($setup["IconParking"], {
          key: 0,
          size: "m",
          class: "mb-1 ml-px"
        })) : createCommentVNode("v-if", true)
      ])
    ])
  ], 42, _hoisted_1$1);
}
_sfc_main$2.__file = "src/components/line/ItemThermometerStations.vue";
const ItemThermometerStations = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/line/ItemThermometerStations.vue"]]);
const ThermometerStations_vue_vue_type_style_index_0_scoped_81f5b282_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThermometerStations",
  props: {
    line: { type: null, required: true },
    stations: { type: Array, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const stationsStore = useStationsStore();
    const idStationAfterSelectStation = ref(0);
    function mouseOverAndLeaveItem(action, stationName, index) {
      if (action == "leave" && stationsStore.stationIsInStationsToDisplay(stationName)) {
        stationsStore.deleteStationToDisplay(stationName);
      } else if (action == "over" && !stationsStore.stationIsInStationsToDisplay(stationName)) {
        stationsStore.addStationToDisplay(stationName);
      }
      if (index + 1 < props.stations.length) {
        idStationAfterSelectStation.value = props.stations[index + 1].id;
      }
    }
    const __returned__ = { props, stationsStore, idStationAfterSelectStation, mouseOverAndLeaveItem, ItemThermometerStations };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-81f5b282"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col items-start p-0 gap-2" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6" }, " Toutes les stations ")
], -1));
const _hoisted_2 = {
  key: 0,
  class: "list-stations",
  title: "Liste des nouvelles stations."
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("div", null, [
      $setup.props.stations.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.stations, (station, index) => {
          return openBlock(), createBlock($setup["ItemThermometerStations"], {
            key: index,
            onMouseover: ($event) => $setup.mouseOverAndLeaveItem("over", station.nom, index),
            onMouseleave: ($event) => $setup.mouseOverAndLeaveItem("leave", station.nom, index),
            onFocus: ($event) => $setup.mouseOverAndLeaveItem("over", station.nom, index),
            onBlur: ($event) => $setup.mouseOverAndLeaveItem("leave", station.nom, index),
            index: index + 1,
            id: station.id,
            line: $setup.props.line,
            name: station.nom,
            parking: station.parking,
            desserte: station.desserte,
            li_code: station.li_code,
            is_last_elem: index + 1 === $setup.props.stations.length,
            is_station_after_select: station.id === $setup.idStationAfterSelectStation
          }, null, 8, ["onMouseover", "onMouseleave", "onFocus", "onBlur", "index", "id", "line", "name", "parking", "desserte", "li_code", "is_last_elem", "is_station_after_select"]);
        }), 128))
      ])) : createCommentVNode("v-if", true)
    ])
  ], 64);
}
_sfc_main$1.__file = "src/components/line/ThermometerStations.vue";
const ThermometerStations = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-81f5b282"], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/line/ThermometerStations.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThermometerStations.story",
  setup(__props, { expose }) {
    expose();
    const stations = [
      {
        id: 1548,
        nom: "La Plesse",
        li_code: "3",
        ordre_t1: 1,
        ordre_t2: null,
        ordre_t3: 11,
        ordre_t4: null,
        parking: true,
        desserte: "C2",
        desserte_scolaire: "204",
        desserte_soirs_we: null,
        desserte_dimanche: null
      },
      {
        id: 1530,
        nom: "Cerisaie",
        li_code: "",
        ordre_t1: 2,
        ordre_t2: null,
        ordre_t3: null,
        ordre_t4: null,
        parking: false,
        desserte: "",
        desserte_scolaire: null,
        desserte_soirs_we: null,
        desserte_dimanche: null
      },
      {
        id: 1512,
        nom: "Grand Quartier",
        li_code: "",
        ordre_t1: 3,
        ordre_t2: null,
        ordre_t3: null,
        ordre_t4: null,
        parking: false,
        desserte: "C4",
        desserte_scolaire: null,
        desserte_soirs_we: null,
        desserte_dimanche: null
      },
      {
        id: 1511,
        nom: "Dulac",
        li_code: "",
        ordre_t1: 4,
        ordre_t2: null,
        ordre_t3: null,
        ordre_t4: null,
        parking: false,
        desserte: "C4",
        desserte_scolaire: null,
        desserte_soirs_we: null,
        desserte_dimanche: null
      },
      {
        id: 1545,
        nom: "L\xE9onard",
        li_code: "",
        ordre_t1: 5,
        ordre_t2: null,
        ordre_t3: null,
        ordre_t4: null,
        parking: false,
        desserte: "C4",
        desserte_scolaire: null,
        desserte_soirs_we: "52",
        desserte_dimanche: "52"
      }
    ];
    function initState() {
      return {
        lineNumber: 1,
        stations
      };
    }
    const __returned__ = { stations, initState, ThermometerStations };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "ThermometerStations",
    layout: {
      type: "grid",
      width: 450
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["ThermometerStations"], {
        line: state.lineNumber,
        stations: state.stations
      }, null, 8, ["line", "stations"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/line/ThermometerStations.story.vue";
const ThermometerStations_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/line/ThermometerStations.story.vue"]]);
const ThermometerStations_story$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ThermometerStations_story
}, Symbol.toStringTag, { value: "Module" }));
export {
  ThermometerStations as T,
  ThermometerStations_story$1 as a
};
