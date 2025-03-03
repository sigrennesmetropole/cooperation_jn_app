var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { aL as defineStore, aM as ref, aw as defineComponent, aA as openBlock, aF as createElementBlock, aG as Fragment, aH as renderList, b0 as normalizeStyle, aI as createBaseVNode, aK as toDisplayString, aZ as withDirectives, b1 as vModelRadio, aO as createTextVNode } from "./vendor.793d0727.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const usePlanningStore = defineStore("planning", () => {
  const selectedYear = ref(2025);
  const selectedSemester = ref(1);
  const selectedLineState = ref(null);
  const selectedLine = ref(0);
  function getSelectedDate() {
    const selectedMonth = selectedSemester.value % 2 == 1 ? 1 : 7;
    return new Date(selectedYear.value, selectedMonth);
  }
  function setDate(date) {
    selectedYear.value = date.getUTCFullYear();
    selectedSemester.value = date.getUTCMonth() < 7 ? 1 : 2;
  }
  function setLinePlanningState(lineState) {
    if (selectedLineState.value && selectedLineState.value.id === lineState.id) {
      selectedLineState.value = null;
    } else {
      selectedLineState.value = lineState;
    }
  }
  function isLinePlanningStateHighlighted(linePlanningState) {
    var _a;
    if (selectedLineState.value == null) {
      return true;
    }
    return ((_a = selectedLineState.value) == null ? void 0 : _a.id) == linePlanningState.id;
  }
  return {
    getSelectedDate,
    selectedSemester,
    selectedYear,
    setDate,
    selectedLine,
    selectedLineState,
    setLinePlanningState,
    isLinePlanningStateHighlighted
  };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiPlanningLegend",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    lines: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update-line-planning-state"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const planningStore = usePlanningStore();
    const selectedStatus = ref(null);
    const selectedLine = ref(null);
    const setLinePlanningState = (item) => {
      var _a;
      emit("update-line-planning-state", item);
      if (((_a = selectedStatus.value) == null ? void 0 : _a.id) === item.id) {
        selectedStatus.value = null;
      }
    };
    planningStore.$subscribe(() => {
      for (let line of props.lines) {
        if (planningStore.selectedLine == 0) {
          selectedLine.value = null;
        }
        if (line.number == planningStore.selectedLine) {
          selectedLine.value = line;
        }
      }
    });
    function setSelectedLine(line) {
      var _a;
      if (planningStore.selectedLine == line) {
        planningStore.selectedLine = 0;
      } else {
        planningStore.selectedLine = line;
      }
      if (((_a = selectedLine.value) == null ? void 0 : _a.number) === line) {
        selectedLine.value = null;
      }
    }
    const __returned__ = { planningStore, props, selectedStatus, selectedLine, emit, setLinePlanningState, setSelectedLine };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "w-[202px] flex flex-col bg-white rounded-lg shadow-lg gap-3 p-4" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-base font-bold" }, "Statut des travaux", -1);
const _hoisted_3 = ["for"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "mr-auto" }, null, -1);
const _hoisted_5 = ["id", "value", "onClick"];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300" }, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-base font-bold" }, "Lignes", -1);
const _hoisted_8 = ["for"];
const _hoisted_9 = ["src"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "mr-auto" }, null, -1);
const _hoisted_11 = ["id", "value", "onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.items, (item) => {
      return openBlock(), createElementBlock("div", {
        key: item.id,
        class: "flex-1 flex flex-row items-center relative hover:font-medium pl-4",
        style: normalizeStyle({
          borderLeft: "5px",
          borderLeftStyle: "solid",
          borderLeftColor: item.color
        })
      }, [
        createBaseVNode("label", {
          class: "cursor-pointer",
          for: item.id
        }, toDisplayString(item.printValue), 9, _hoisted_3),
        _hoisted_4,
        withDirectives(createBaseVNode("input", {
          role: "radio",
          type: "radio",
          name: "status",
          class: "checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:outline-none focus:ring-1 focus:ring-white cursor-pointer",
          id: item.id,
          value: item,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedStatus = $event),
          onClick: ($event) => $setup.setLinePlanningState(item)
        }, null, 8, _hoisted_5), [
          [vModelRadio, $setup.selectedStatus]
        ])
      ], 4);
    }), 128)),
    _hoisted_6,
    _hoisted_7,
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.lines, (line) => {
      return openBlock(), createElementBlock("div", {
        key: line.id,
        class: "flex-1 flex flex-row items-center relative hover:font-medium"
      }, [
        createBaseVNode("label", {
          class: "cursor-pointer flex flex-row",
          for: line.id
        }, [
          createBaseVNode("img", {
            src: line.img,
            class: "h-6 mr-3"
          }, null, 8, _hoisted_9),
          createTextVNode(toDisplayString(line.printValue), 1)
        ], 8, _hoisted_8),
        _hoisted_10,
        withDirectives(createBaseVNode("input", {
          type: "radio",
          name: "line",
          class: "checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:outline-none focus:ring-1 focus:ring-white cursor-pointer",
          id: line.id,
          value: line,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedLine = $event),
          onClick: ($event) => $setup.setSelectedLine(line.number)
        }, null, 8, _hoisted_11), [
          [vModelRadio, $setup.selectedLine]
        ])
      ]);
    }), 128))
  ]);
}
_sfc_main.__file = "src/components/ui/UiPlanningLegend.vue";
const UiPlanningLegend = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiPlanningLegend.vue"]]);
const Line1 = "/cooperation_jn_trambus/main/assets/line1.bd20c49c.svg";
const Line2 = "/cooperation_jn_trambus/main/assets/line2.79606b91.svg";
const Line3 = "/cooperation_jn_trambus/main/assets/line3.b02ad756.svg";
const Line4 = "/cooperation_jn_trambus/main/assets/line4.05dcaab6.svg";
const _LinePlanningStateTypes = class {
  constructor(id, printValue, color, deemphasizedColor) {
    this.id = id;
    this.printValue = printValue;
    this.color = color;
    this.deemphasizedColor = deemphasizedColor;
  }
  toString() {
    return this.printValue;
  }
};
let LinePlanningStateTypes = _LinePlanningStateTypes;
__publicField(LinePlanningStateTypes, "UNSTARTED", new _LinePlanningStateTypes(
  "unStarted",
  "En \xE9tude",
  "#858585",
  "#bebebe"
));
__publicField(LinePlanningStateTypes, "UNDER_CONSTRUCTION", new _LinePlanningStateTypes(
  "underConstruction",
  "En travaux",
  "#F43F5E",
  "#FDA4AF"
));
__publicField(LinePlanningStateTypes, "COMMISIONING", new _LinePlanningStateTypes(
  "commisioning",
  "En service",
  "#65A30D",
  "#BEF264"
));
const _LineName = class {
  constructor(id, printValue, img, number) {
    this.id = id;
    this.printValue = printValue;
    this.img = img;
    this.number = number;
  }
  toString() {
    return this.printValue;
  }
};
let LineName = _LineName;
__publicField(LineName, "LINE_1", new _LineName("line1", "Ligne 1", Line1, 1));
__publicField(LineName, "LINE_2", new _LineName("line2", "Ligne 2", Line2, 2));
__publicField(LineName, "LINE_3", new _LineName("line3", "Ligne 3", Line3, 3));
__publicField(LineName, "LINE_4", new _LineName("line4", "Ligne 4", Line4, 4));
export {
  LinePlanningStateTypes as L,
  UiPlanningLegend as U,
  LineName as a,
  usePlanningStore as u
};
