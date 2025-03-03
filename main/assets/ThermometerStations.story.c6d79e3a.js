import { aw as defineComponent, aM as ref, aA as openBlock, ay as createBlock, aS as createRouter, aT as createWebHistory, _ as __vitePreload, aP as computed, aF as createElementBlock, aI as createBaseVNode, aQ as normalizeClass, aK as toDisplayString, aG as Fragment, aH as renderList, aJ as createCommentVNode, aU as pushScopeId, aV as popScopeId, ax as resolveComponent, az as withCtx, aB as createVNode } from "./vendor.793d0727.js";
import { a as IconCircleText, I as IconLine } from "./IconLine.e4d38361.js";
import { a as getColorBus, g as getColorLine } from "./color.12f233df.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { u as useStationsStore } from "./line.593b1bd9.js";
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
    component: () => __vitePreload(() => import("./HomeView.f16a833e.js"), true ? ["assets/HomeView.f16a833e.js","assets/vendor.793d0727.js","assets/UiLineDescription.80e4f50c.js","assets/IconLine.e4d38361.js","assets/color.12f233df.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/IconTwoDirectionArrow.e82c5d6f.js","assets/views.117ce80b.js","assets/layers.2e2de208.js","assets/line.593b1bd9.js","assets/TravelTimes.9b0aff41.js","assets/UiTravelTime.86855069.js","assets/UiOverflowContainer.64cd935e.js","assets/UiLinkPrimary.26083db8.js","assets/travelTime.e06f706b.js","assets/UiTrambusTitle.7095bc13.js","assets/NetworkFigures.c44022cd.js","assets/UiNetworkFigure.70e5fd3b.js","assets/station.db8c7246.js","assets/lines.f3fb9c7c.js","assets/SkipLinks.0ff1f902.js","assets/FooterAreaLink.1f221e0f.js","assets/legalLinks.47be5507.js"] : void 0)
  },
  {
    path: "/planning",
    name: "planning",
    component: () => __vitePreload(() => import("./PlanningView.939296c5.js"), true ? ["assets/PlanningView.939296c5.js","assets/vendor.793d0727.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/common.1f108122.js","assets/line-planning-state.model.218dd21b.js","assets/UiLineButton.af88f097.js","assets/color.12f233df.js","assets/UiButton.9cffdb2c.js","assets/panels.4bd09bb8.js","assets/timeLineItems.fixtures.21556324.js","assets/chevron-left.151e6030.js"] : void 0)
  },
  {
    path: "/line/:id",
    name: "line",
    component: () => __vitePreload(() => import("./LineView.eb6ed9fb.js"), true ? ["assets/LineView.eb6ed9fb.js","assets/vendor.793d0727.js","assets/api.client.6ae555c6.js","assets/photo3.89e6fe14.js","assets/LineFigures.ffcbc7cc.js","assets/UiNetworkFigure.70e5fd3b.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/station.db8c7246.js","assets/line.593b1bd9.js","assets/layers.2e2de208.js","assets/UiTravelTime.86855069.js","assets/IconLine.e4d38361.js","assets/color.12f233df.js","assets/UiParkingInformation.92b63c80.js","assets/views.117ce80b.js","assets/UiLineHeader.3ea6a1ac.js","assets/IconTwoDirectionArrow.e82c5d6f.js","assets/BackButton.8da0f565.js","assets/chevron-left.151e6030.js","assets/UiButton.9cffdb2c.js","assets/panels.4bd09bb8.js","assets/poi.64c93a52.js","assets/common.1f108122.js","assets/SkipLinks.0ff1f902.js","assets/FooterAreaLink.1f221e0f.js","assets/legalLinks.47be5507.js","assets/travelTime.e06f706b.js"] : void 0)
  },
  {
    path: "/line/:lineid/station/:id",
    name: "station",
    component: () => __vitePreload(() => import("./StationView.b9dbddc8.js"), true ? ["assets/StationView.b9dbddc8.js","assets/vendor.793d0727.js","assets/views.117ce80b.js","assets/layers.2e2de208.js","assets/line.593b1bd9.js","assets/UiStationHeader.2534a2eb.js","assets/IconLine.e4d38361.js","assets/color.12f233df.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/ServicesStation.fad1baf2.js","assets/api.client.6ae555c6.js","assets/photo3.89e6fe14.js","assets/ItemPOI.fd958816.js","assets/localization-icon.7f563d77.js","assets/BackButton.8da0f565.js","assets/chevron-left.151e6030.js","assets/UiButton.9cffdb2c.js","assets/panels.4bd09bb8.js","assets/poi.64c93a52.js","assets/common.1f108122.js","assets/FooterAreaLink.1f221e0f.js","assets/legalLinks.47be5507.js"] : void 0)
  },
  {
    path: "/traveltimes",
    name: "traveltimes",
    component: () => __vitePreload(() => import("./TravelTimesView.d53d8a4c.js"), true ? ["assets/TravelTimesView.d53d8a4c.js","assets/vendor.793d0727.js","assets/views.117ce80b.js","assets/layers.2e2de208.js","assets/line.593b1bd9.js","assets/BackButton.8da0f565.js","assets/chevron-left.151e6030.js","assets/UiButton.9cffdb2c.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/panels.4bd09bb8.js","assets/UiTravelTime.86855069.js","assets/IconLine.e4d38361.js","assets/color.12f233df.js","assets/travelTime.e06f706b.js"] : void 0)
  },
  {
    path: "/legalnotice/:legallink",
    name: "legalnotice",
    component: () => __vitePreload(() => import("./LegalNoticeView.7a122aa8.js"), true ? ["assets/LegalNoticeView.7a122aa8.js","assets/vendor.793d0727.js","assets/views.117ce80b.js","assets/layers.2e2de208.js","assets/line.593b1bd9.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/legalLinks.47be5507.js"] : void 0)
  },
  {
    path: "/consultation",
    name: "consultation",
    component: () => __vitePreload(() => import("./ConsultationView.92b0b06e.js"), true ? ["assets/ConsultationView.92b0b06e.js","assets/vendor.793d0727.js","assets/views.117ce80b.js","assets/layers.2e2de208.js","assets/line.593b1bd9.js","assets/chevron-left.151e6030.js","assets/localization-icon.7f563d77.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0)
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
