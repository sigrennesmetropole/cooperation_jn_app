import { aw as defineComponent, bl as useRoute, aN as ref, aC as reactive, aS as onBeforeMount, aD as onMounted, aE as createElementBlock, aH as createBaseVNode, aB as createVNode, az as withCtx, ay as createBlock, aI as createCommentVNode, aF as Fragment, aA as openBlock } from "./vendor.fd236c41.js";
import { b as useMapStore, a as useViewsStore, u as useLayersStore, c as useLineViewsStore, d as useStationViewsStore, v as viewList } from "./map.bcea4cc7.js";
import { r as router } from "./ThermometerStations.story.a75133d5.js";
import { C as ChevronArrowLeft } from "./chevron-left.dd0e6ed2.js";
import { U as UiStationHeader } from "./UiStationHeader.005c3ba1.js";
import { U as UiButton } from "./UiButton.de5d5bbd.js";
import { a as apiClientService } from "./api.client.a977d6f0.js";
import { F as FooterArea } from "./FooterArea.1edbfdaa.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./IconLine.7a514a7c.js";
import "./color.12f233df.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
import "./UiLinkFooter.9f4f2aff.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StationView",
  setup(__props, { expose }) {
    expose();
    const mapStore = useMapStore();
    const viewStore = useViewsStore();
    const layerStore = useLayersStore();
    const lineStore = useLineViewsStore();
    const stationStore = useStationViewsStore();
    const { params } = useRoute();
    const routeParams = ref(params);
    const stationId = ref(Number(routeParams.value.id));
    const lineNumber = ref(Number(routeParams.value.lineid));
    const state = reactive({
      lineDescription: null,
      stationDescription: null
    });
    onBeforeMount(async () => {
      lineStore.selectLine(lineNumber.value);
      state.lineDescription = await apiClientService.fetchLineDescription(
        lineStore.selectedLine
      );
      stationStore.setIdSelectedStation(stationId.value);
      await apiClientService.fetchStationDescription(stationId.value).then((station) => {
        stationStore.setNameSelectedStation(station.nom);
        state.stationDescription = station;
      });
    });
    onMounted(async () => {
      viewStore.currentView = viewList.station;
      const viewPoint = `line ${lineStore.selectedLine} | station ${stationStore.nameSelectedStation}`;
      mapStore.updateViewpoint(viewPoint, true);
      layerStore.setVisibilities(mapStore.is3D(), {
        trambusLines: true,
        trambusStops: true,
        parking: true,
        poi: true
      });
    });
    function backButtonClicked() {
      const line = lineNumber.value.toString();
      router.push("/line/" + line);
      mapStore.viewPoint = `line${line}`;
      stationStore.emptySelectedStation();
    }
    const __returned__ = { mapStore, viewStore, layerStore, lineStore, stationStore, params, routeParams, stationId, lineNumber, state, backButtonClicked, ChevronArrowLeft, UiStationHeader, UiButton, FooterArea };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-start py-0 gap-2" };
const _hoisted_2 = { class: "flex items-center p-0 gap-4" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300 my-3" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode($setup["UiButton"], {
          class: "shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0",
          onClick: $setup.backButtonClicked
        }, {
          default: withCtx(() => [
            createBaseVNode("img", { src: $setup.ChevronArrowLeft }, null, 8, _hoisted_3)
          ]),
          _: 1
        }),
        $setup.state.lineDescription && $setup.state.stationDescription ? (openBlock(), createBlock($setup["UiStationHeader"], {
          key: 0,
          line: (_a = $setup.state.lineDescription) == null ? void 0 : _a.id,
          nameStation: $setup.state.stationDescription.nom,
          frequency: $setup.state.lineDescription.frequency
        }, null, 8, ["line", "nameStation", "frequency"])) : createCommentVNode("v-if", true)
      ])
    ]),
    _hoisted_4,
    createVNode($setup["FooterArea"])
  ], 64);
}
_sfc_main.__file = "src/views/StationView.vue";
const StationView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/views/StationView.vue"]]);
export {
  StationView as default
};
