import { aw as defineComponent, aC as reactive, aD as onMounted, aM as Jt, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aB as createVNode, az as withCtx, aF as Fragment, aG as renderList, ay as createBlock, aN as createTextVNode, ax as resolveComponent } from "./vendor.2f869a32.js";
import { a as apiClientService } from "./api.client.880afc83.js";
import { U as UiTravelTime } from "./UiTravelTime.d22a05e3.js";
import { U as UiOverflowContainer } from "./UiOverflowContainer.d44a96b2.js";
import { U as UiLinkPrimary } from "./UiLinkPrimary.3a0a10b6.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./stations.ab4d6f53.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./IconLine.0ae66c32.js";
import "./color.12f233df.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TravelTimes",
  setup(__props, { expose }) {
    expose();
    const state = reactive({
      travelTimes: null
    });
    onMounted(async () => {
      state.travelTimes = await apiClientService.fetchTravelTime(3);
    });
    const __returned__ = { state, UiTravelTime, UiOverflowContainer, UiLinkPrimary, UiButtonWithTooltip: Jt };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6" }, " Temps de parcours th\xE9orique ", -1);
const _hoisted_3 = { class: "ml-2" };
const _hoisted_4 = { class: "flex flex-col items-start gap-3 pt-0 pr-9 pb-0 pl-0" };
const _hoisted_5 = {
  class: "flex flex-row items-start gap-2 w-[450px]",
  title: "Liste des temps de parcours"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Voir plus ");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 mb-3" }, null, -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      _hoisted_2,
      createBaseVNode("div", _hoisted_3, [
        createVNode($setup["UiButtonWithTooltip"], {
          widthButton: "4",
          heightButton: "4",
          positionRight: "130px",
          positionTop: "5px",
          text: "Ces temps de parcours sont calcul\xE9s \xE0 l\u2019heure de pointe du matin en direction Rennes. Ils sont compar\xE9s au temps actuel de trajet en transport en commun.",
          widthBoxText: "w-[230px]"
        })
      ])
    ]),
    createBaseVNode("div", _hoisted_4, [
      createVNode($setup["UiOverflowContainer"], { class: "w-[450px] -mx-6" }, {
        default: withCtx(() => [
          createBaseVNode("ul", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.travelTimes, (travelTime) => {
              return openBlock(), createBlock($setup["UiTravelTime"], {
                class: "w-80 flex-none",
                key: travelTime.line,
                newDuration: travelTime.new,
                oldDuration: travelTime.old,
                lineNumber: travelTime.line,
                startStation: travelTime.start,
                endStation: travelTime.end
              }, null, 8, ["newDuration", "oldDuration", "lineNumber", "startStation", "endStation"]);
            }), 128))
          ])
        ]),
        _: 1
      }),
      createVNode($setup["UiLinkPrimary"], {
        url: "/traveltimes",
        arrowStrokeColor: "stroke-red-600",
        underlineColor: "bg-red-600",
        "aria-label": "Voir plus de futurs temps de parcours"
      }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      })
    ]),
    _hoisted_7
  ], 64);
}
_sfc_main$1.__file = "src/components/home/TravelTimes.vue";
const TravelTimes = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/TravelTimes.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TravelTimes.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { TravelTimes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "TravelTime",
    layout: {
      type: "grid",
      width: 500
    },
    group: "sidepanel"
  }, {
    default: withCtx(() => [
      createVNode($setup["TravelTimes"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/home/TravelTimes.story.vue";
const TravelTimes_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/TravelTimes.story.vue"]]);
export {
  TravelTimes_story as default
};
