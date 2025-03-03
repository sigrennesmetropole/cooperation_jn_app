import { aw as defineComponent, aC as reactive, aD as onMounted, aA as openBlock, aE as createElementBlock, aF as Fragment, aG as renderList, aH as createBaseVNode, aB as createVNode, ay as createBlock, aI as createCommentVNode } from "./vendor.8097ddee.js";
import { a as apiClientService } from "./api.client.1ec4c78c.js";
import { U as UiNetworkFigure } from "./UiNetworkFigure.2ead9d45.js";
import { U as UiVerticalSeparator } from "./UiVerticalSeparator.3b26b6b9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LineFigures",
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
      lineFigures: null
    });
    onMounted(async () => {
      state.lineFigures = await apiClientService.fetchLineFigure(props.line);
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main.__file = "src/components/line/LineFigures.vue";
const LineFigures = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/line/LineFigures.vue"]]);
export {
  LineFigures as L
};
