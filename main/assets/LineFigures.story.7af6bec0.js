import { aw as defineComponent, aI as reactive, aJ as onMounted, ax as openBlock, ay as createElementBlock, aK as Fragment, aL as renderList, aF as createBaseVNode, az as createVNode, aD as createBlock, aM as createCommentVNode, aC as resolveComponent, aA as withCtx } from "./vendor.f5f58977.js";
import { s as stationIcon, a as apiClientService } from "./api.client.ece6f859.js";
import { U as UiNetworkFigure } from "./UiNetworkFigure.b1d92458.js";
import { U as UiVerticalSeparator } from "./UiVerticalSeparator.417ffe86.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./stations.bbf49d36.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./informationIcon.70adcac2.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LineFigures",
  props: {
    line: { type: null, required: true },
    nb_parking: { type: Number, required: true },
    nb_station: { type: Number, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const state = reactive({
      lineFigures: null
    });
    onMounted(async () => {
      state.lineFigures = [];
      state.lineFigures.push({
        id: "station",
        idLine: props.line,
        figure: props.nb_station,
        description: "Stations",
        icon: stationIcon
      });
      state.lineFigures.push({
        id: "parking",
        idLine: props.line,
        figure: props.nb_parking,
        description: props.nb_parking > 1 ? "Parkings relais" : "Parking relais"
      });
      const frequency = await apiClientService.fetchLineFrequency(props.line);
      state.lineFigures.push({
        id: "frequency",
        idLine: props.line,
        figure: frequency,
        description: "Fr\xE9quence",
        unit: "min",
        moreInformation: "Fr\xE9quence th\xE9orique en Heure de Pointe du matin"
      });
    });
    function getLength(networkFigures) {
      if (networkFigures == null) {
        return 0;
      }
      return networkFigures.length;
    }
    const __returned__ = { props, state, getLength, UiNetworkFigure, UiVerticalSeparator };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row px-4 py-3 gap-3 bg-slate-50 border rounded-lg border-slate-100" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.lineFigures, (networkFigure, index) => {
      return openBlock(), createElementBlock(Fragment, {
        key: networkFigure.id
      }, [
        createBaseVNode("article", null, [
          createVNode($setup["UiNetworkFigure"], {
            figure: networkFigure.figure,
            description: networkFigure.description,
            unit: networkFigure.unit,
            icon: networkFigure.icon,
            moreInformation: networkFigure.moreInformation,
            class: "w-28 h-20"
          }, null, 8, ["figure", "description", "unit", "icon", "moreInformation"])
        ]),
        index + 1 < $setup.getLength($setup.state.lineFigures) ? (openBlock(), createBlock($setup["UiVerticalSeparator"], { key: 0 })) : createCommentVNode("v-if", true)
      ], 64);
    }), 128))
  ]);
}
_sfc_main$1.__file = "src/components/line/LineFigures.vue";
const LineFigures = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/line/LineFigures.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LineFigures.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        id: 1,
        nb_parking: 2,
        nb_station: 30
      };
    }
    const __returned__ = { initState, LineFigures };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "LineFigure",
    layout: {
      type: "grid",
      width: 450
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["LineFigures"], {
        line: state.id,
        nb_parking: state.nb_parking,
        nb_station: state.nb_station
      }, null, 8, ["line", "nb_parking", "nb_station"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/line/LineFigures.story.vue";
const LineFigures_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/line/LineFigures.story.vue"]]);
export {
  LineFigures_story as default
};
