import { aw as defineComponent, aV as onBeforeMount, ax as resolveComponent, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aB as createVNode, az as withCtx } from "./vendor.5e9f5fc5.js";
import { a as useViewsStore, v as viewList } from "./views.9200104e.js";
import { C as ChevronArrowRight } from "./chevron-left.151e6030.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./layers.4b2e7625.js";
import "./stations.5d47ec21.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConsultationView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    onBeforeMount(() => {
      viewStore.currentView = viewList["consultation"];
    });
    const __returned__ = { viewStore, viewList, ChevronArrowRight };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "h-screen" };
const _hoisted_2 = { class: "flex flex-row" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans grow font-bold text-2xl" }, "Concertations", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_UiButton = resolveComponent("UiButton");
  return openBlock(), createElementBlock("main", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_UiButton, {
        class: "shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0 mr-4",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push($setup.viewList.home))
      }, {
        default: withCtx(() => [
          createBaseVNode("img", { src: $setup.ChevronArrowRight }, null, 8, _hoisted_3)
        ]),
        _: 1
      }),
      _hoisted_4
    ])
  ]);
}
_sfc_main.__file = "src/views/ConsultationView.vue";
const ConsultationView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/views/ConsultationView.vue"]]);
export {
  ConsultationView as default
};
