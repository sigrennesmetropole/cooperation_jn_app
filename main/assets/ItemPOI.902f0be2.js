import { aw as defineComponent, aL as ref, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aJ as toDisplayString } from "./vendor.9aefb857.js";
import { L as Localization } from "./localization-icon.7f563d77.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const poiNoImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAABRCAYAAAAeqX58AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANySURBVHgB7dyxT9tAGAXwz1YJBAkp3mBLNpgaNtjwyNQywgYbTBX/QOl/UBZGGBkpE2O6MZINNrzB5kgRAiIR995r3FoIpIJAqu7eT7o2JhGLn7/77hwc2SP9fn8piqLPbnxyh00Tn3QxBoPBtyRJsuobUfkiz/PG+Pj416Iovph4z13o3+/v7xGIHo/xD0JQq9U67mXbJCSoDinCEOMIlcAUghC1R+feIlcNmq4aXJoEazgcpvHY2NiOSdCwOMDU8NEkaFghRjc3N4VJ8GITMQVBRhQEIQVBSEEQUhCEFAQhBUFIQRBSEIQUBCEFQUhBEFIQhBQEIQVBSEEQUhCEFAQhBUFIQRD6YJ46Ozuzy8u3/budVqtl8/Pz5iMvg4AQdDodS9PU3hJ+J/gYBi+DcH19bYuLi+9ywlBlfAyClz3C3d2dTUxMmPw7b3uE18jz3LIsY4imp6ctSRILhYIwgvn/9PTUZmdnWVEwvayurtrMzIyFQEGw3/M+GszNzc0/VQA/Ozg4sO3t7SCmGe0jOBcXF2wuq1MBloqYHq6uriwECoKpuQQFwWm32+wPEIhSr9fjUI8QEEwDGHt7e9wjQCDOz89teXk5mEqhIIzgpGPFgOVjo9Gwra2toKYLr+81YJRwUlHmm80mr/6nlJUhRN4GAVd1dSsY5R5X+8nJCV/jPoSvN5Bew9sgPHV1z83N8X80gdhAwlhZWQm2ClQF2SOgWiAAmDqOjo5YGap3KrF3gJ3F6ucxfBZ0s4gAoBrs7+9zuigDUJ74slksl5IYWGr6KPhVA074xsYGw4CpY21t7dnVwnt82eV/oQ0l+ztVYO8gVArCSNlcYocxRApCxcLCgoLgE8zxaOxeChtOuOP4XB+AhrJer5uPvHwWM7r/w8NDntSXbhNXv6H01Hvr6+tefnPJ24dyoyK8dYeP7Wlfv76mp7MLqVkUUhCEFAQhBUFIQRBSEIQUBCEFQUhBEFIQhBQEIQVBSEEQUhCEFAQhBUFIQRBSEIQUBCEFQQhByExC142Hw+GxSei6Ub/fX4rjuGMSLHf+W/HU1NRPVxV2TYJUFMVuvV7PIhzked6o1WqoCn4+BUKe052cnEyjKOpx1ZAkSW8wGKSqDOFAJShDgOPo8Qdub2+bDw8PO+7lR/chVQi/ZC4Ax278QEtQfeMXPz43xM779bIAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ItemPOI",
  props: {
    img: { type: String, required: true },
    name: { type: String, required: true },
    distance: { type: Number, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    let ImgPOI = ref(poiNoImg);
    if (props.img) {
      ImgPOI.value = poiNoImg.replace("poi-no-img.png", props.img);
    }
    const __returned__ = { props, ImgPOI, localizationIcon: Localization };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = { class: "flex flex-col justify-center items-start py-0 px-3 gap-2" };
const _hoisted_4 = { class: "flex" };
const _hoisted_5 = { class: "font-dm-sans font-medium text-sm" };
const _hoisted_6 = { class: "flex gap-2" };
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "w-10 h-4 font-dm-sans font-normal text-xs text-gray-500" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("img", {
      class: "w-32 h-20 rounded",
      src: $setup.ImgPOI,
      alt: $setup.props.name
    }, null, 8, _hoisted_2),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("span", _hoisted_5, toDisplayString($setup.props.name), 1)
      ]),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("img", {
          class: "",
          src: $setup.localizationIcon
        }, null, 8, _hoisted_7),
        createBaseVNode("span", _hoisted_8, toDisplayString($setup.props.distance) + " m ", 1)
      ])
    ])
  ]);
}
_sfc_main.__file = "src/components/station/ItemPOI.vue";
const ItemPOI = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/station/ItemPOI.vue"]]);
export {
  ItemPOI as I
};
