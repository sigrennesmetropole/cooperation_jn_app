import { aw as defineComponent, aK as ref, aO as computed, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aQ as renderSlot, aP as normalizeClass } from "./vendor.e680bac2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const leftArrow = "/cooperation_jn_trambus/main/assets/arrows-left.9f9ebcc8.svg";
const rightArrow = "/cooperation_jn_trambus/main/assets/arrows-right.34cf0823.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiOverflowContainer",
  setup(__props, { expose }) {
    expose();
    const scrollBar = ref(null);
    const currentScrollPosition = ref(0);
    function scroll(amount) {
      var _a, _b, _c, _d;
      const currentScroll = ((_a = scrollBar.value) == null ? void 0 : _a.scrollLeft) || 0;
      (_b = scrollBar.value) == null ? void 0 : _b.scrollTo({
        left: currentScroll + amount,
        behavior: "smooth"
      });
      const maxScroll = (((_c = scrollBar.value) == null ? void 0 : _c.scrollWidth) || 0) - (((_d = scrollBar.value) == null ? void 0 : _d.clientWidth) || 0);
      currentScrollPosition.value = currentScrollPosition.value.valueOf() + amount;
      if (currentScrollPosition.value < 0) {
        currentScrollPosition.value = 0;
      } else if (currentScrollPosition.value > maxScroll) {
        currentScrollPosition.value = maxScroll;
      }
    }
    const isMostRightPosition = computed(() => {
      var _a, _b;
      const maxScroll = (((_a = scrollBar.value) == null ? void 0 : _a.scrollWidth) || 0) - (((_b = scrollBar.value) == null ? void 0 : _b.clientWidth) || 0);
      if (currentScrollPosition.value == 0) {
        return false;
      }
      return currentScrollPosition.value == maxScroll;
    });
    const isMostLeftPosition = computed(() => {
      return currentScrollPosition.value == 0;
    });
    const marginContents = computed(() => {
      if (isMostLeftPosition.value) {
        return "ml-6";
      }
      return "";
    });
    const __returned__ = { scrollBar, currentScrollPosition, scroll, isMostRightPosition, isMostLeftPosition, marginContents, leftArrow, rightArrow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative" };
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      ref: "scrollBar",
      class: normalizeClass(["flex p-0 gap-3 items-start overflow-x-auto scrollbar-hide", $setup.marginContents])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    createBaseVNode("button", {
      class: normalizeClass(["absolute z-10 bg-white w-9 h-9 shadow-lg top-1/2 left-2 transform -translate-y-1/2 rounded-lg flex items-start p-2.5", { hidden: $setup.isMostLeftPosition }]),
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.scroll(-250))
    }, [
      createBaseVNode("img", { src: $setup.leftArrow }, null, 8, _hoisted_2)
    ], 2),
    createBaseVNode("button", {
      class: normalizeClass(["absolute z-10 bg-white w-9 h-9 shadow-lg top-1/2 right-2 transform -translate-y-1/2 rounded-lg flex items-start p-2.5", { hidden: $setup.isMostRightPosition }]),
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.scroll(250))
    }, [
      createBaseVNode("img", { src: $setup.rightArrow }, null, 8, _hoisted_3)
    ], 2)
  ]);
}
_sfc_main.__file = "src/components/ui/UiOverflowContainer.vue";
const UiOverflowContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiOverflowContainer.vue"]]);
export {
  UiOverflowContainer as U
};
