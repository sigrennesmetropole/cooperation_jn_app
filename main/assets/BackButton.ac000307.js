import { aw as defineComponent, b4 as useRouter, aA as openBlock, ay as createBlock, az as withCtx, aH as createBaseVNode } from "./vendor.ff13d028.js";
import { C as ChevronArrowLeft } from "./chevron-left.dd0e6ed2.js";
import { U as UiButton } from "./UiButton.258fc306.js";
import { u as usePanelsStore } from "./panels.763ea250.js";
import { e as useTraveltimeInteractionStore } from "./views.1e6e4702.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackButton",
  props: {
    url: {
      type: String,
      default: "/home"
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const traveltimeInteractionStore = useTraveltimeInteractionStore();
    const router = useRouter();
    const panelStore = usePanelsStore();
    function backButtonClicked() {
      router.push(props.url);
      traveltimeInteractionStore.selectTraveltime(null);
      panelStore.isInformationPanelShown = true;
    }
    const __returned__ = { traveltimeInteractionStore, router, panelStore, props, backButtonClicked, ChevronArrowLeft, UiButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiButton"], {
    class: "shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0 visible ui-btn-floating",
    onClick: $setup.backButtonClicked
  }, {
    default: withCtx(() => [
      createBaseVNode("img", { src: $setup.ChevronArrowLeft }, null, 8, _hoisted_1)
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/home/BackButton.vue";
const BackButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/home/BackButton.vue"]]);
export {
  BackButton as B
};
