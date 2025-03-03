import { aw as defineComponent, aN as ref, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aJ as toDisplayString, aC as reactive, aS as onBeforeMount, aF as Fragment, aG as renderList, ay as createBlock, aI as createCommentVNode } from "./vendor.f640ceb8.js";
import { a as apiClientService } from "./api.client.eea61f38.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const TEXT_OF_SERVICE = {
  "ticket-machine": "Distributeur de titre",
  "box-bike": "Box v\xE9lo et casier s\xE9curis\xE9s",
  "newspaper-distributor": "Distributeur de journeaux",
  "vegetable-garden": "Potager",
  "bike-rack": "Arceau v\xE9lo",
  "usb-charging": "Prise recharge USB",
  "parcel-locker": "Casier livraison colis",
  "public-sanitary": "Sanitaire public"
};
const defaultImg = "/cooperation_jn_app/main/assets/newspaper-distributor.d21432df.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ItemService",
  props: {
    type: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    let urlImg = ref(defaultImg);
    if (props.type) {
      urlImg.value = defaultImg.replace("newspaper-distributor", props.type);
    }
    const __returned__ = { props, urlImg, TEXT_OF_SERVICE };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex w-44 h-8 py-2 gap-3" };
const _hoisted_2$1 = ["src", "alt"];
const _hoisted_3 = { class: "font-dm-sans text-sm -tracking-[1%]" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("img", {
      class: "w-4 h-4",
      src: $setup.urlImg,
      alt: $setup.props.type
    }, null, 8, _hoisted_2$1),
    createBaseVNode("p", _hoisted_3, toDisplayString($setup.props.type !== void 0 ? $setup.TEXT_OF_SERVICE[$setup.props.type] : ""), 1)
  ]);
}
_sfc_main$1.__file = "src/components/station/ItemService.vue";
const ItemService = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/station/ItemService.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServicesStation",
  props: {
    nameStation: { type: String, required: true },
    idStation: { type: Number, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const state = reactive({
      services: null
    });
    onBeforeMount(async () => {
      state.services = await apiClientService.fetchServicesByStation(
        props.idStation
      );
    });
    const __returned__ = { props, state, ItemService };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6 mb-2 mt-3" }, " Services disponibles ", -1);
const _hoisted_2 = { class: "px-4 py-3 bg-slate-50 border rounded-lg border-slate-100 grid grid-cols-2 gap-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.state.services && $setup.state.services.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.services, (service) => {
        return openBlock(), createBlock($setup["ItemService"], {
          key: service.type,
          type: service.type
        }, null, 8, ["type"]);
      }), 128))
    ])
  ], 64)) : createCommentVNode("v-if", true);
}
_sfc_main.__file = "src/components/station/ServicesStation.vue";
const ServicesStation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/station/ServicesStation.vue"]]);
export {
  ServicesStation as S
};
