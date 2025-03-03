import { aw as defineComponent, aK as ref, aD as onMounted, aA as openBlock, aE as createElementBlock, aF as Fragment, aG as renderList, aH as createBaseVNode, aN as createTextVNode, aL as toDisplayString, aP as normalizeClass, aT as pushScopeId, aU as popScopeId } from "./vendor.ad773668.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const UiTimeline_vue_vue_type_style_index_0_scoped_a17183b5_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiTimeline",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    selectedIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ["selected-date"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    let circle = ref(null);
    let container = ref(null);
    let selectedIndexRef = ref(0);
    onMounted(() => {
      selectedIndexRef.value = props.selectedIndex;
      translateCircle(selectedIndexRef.value);
    });
    const translateCircle = (index) => {
      var _a, _b;
      selectedIndexRef.value = index;
      const circleSize = (_a = circle.value) == null ? void 0 : _a.getBoundingClientRect().width;
      const parentSize = (_b = container.value) == null ? void 0 : _b.getBoundingClientRect().width;
      if (!circleSize || !parentSize)
        return;
      const numberOfSections = props.items.length;
      const sectionWidth = parentSize / numberOfSections;
      const distance = Math.round(sectionWidth * (index + 0.5) - circleSize / 2);
      if (circle.value) {
        circle.value.style.left = `${distance}px`;
      }
    };
    const getDate = (index) => {
      const { year, semester } = props.items[index];
      if (year && semester) {
        return new Date(year, semester * 6, 1);
      }
      return void 0;
    };
    const setselectedIndex = (index) => {
      selectedIndexRef.value = index;
      translateCircle(index);
      emit("selected-date", getDate(index));
    };
    const __returned__ = { props, emit, circle, container, selectedIndexRef, translateCircle, getDate, setselectedIndex };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-a17183b5"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "h-32 bg-white relative flex text-black",
  ref: "container"
};
const _hoisted_2 = ["onClick"];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  class: "bottom-[calc(2rem-13px)] circle h-[30px] w-[30px] z-10 shadow border-gray-400 border-[0.2px] bg-white rounded-full absolute",
  ref: "circle"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
      return openBlock(), createElementBlock("div", {
        key: index,
        class: "flex-1 flex justify-center items-center relative pb-4 hover:font-medium w-24"
      }, [
        createBaseVNode("button", {
          class: normalizeClass(["text-center text-sm leading-5 color-black", [$props.selectedIndex === index ? "font-bold" : "font-normal"]]),
          onClick: () => $setup.setselectedIndex(index)
        }, [
          createTextVNode(" Semestre " + toDisplayString(item.semester) + " ", 1),
          _hoisted_3,
          createTextVNode(" " + toDisplayString(item.year), 1)
        ], 10, _hoisted_2),
        createBaseVNode("div", {
          class: normalizeClass(["h-[0.05rem] w-full mt-4 bg-gray-400 flex items-center absolute bottom-8", [
            0 === index ? "first-step w-1/2 ml-[50%] !justify-start" : "justify-center",
            $props.items.length - 1 === index ? "last-step w-1/2 mr-[50%] !justify-end" : "justify-center"
          ]])
        }, [
          createBaseVNode("button", {
            role: "button",
            class: "h-2 w-2 bg-gray-400 rounded-full",
            onClick: () => $setup.setselectedIndex(index)
          }, null, 8, _hoisted_4)
        ], 2)
      ]);
    }), 128)),
    createBaseVNode("div", _hoisted_5, null, 512)
  ], 512);
}
_sfc_main.__file = "src/components/ui/UiTimeline.vue";
const UiTimeline = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a17183b5"], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiTimeline.vue"]]);
const timeLineFixtures = () => [
  {
    semester: 1,
    year: 2025
  },
  {
    semester: 2,
    year: 2025
  },
  {
    semester: 1,
    year: 2026
  },
  {
    semester: 2,
    year: 2026
  },
  {
    semester: 1,
    year: 2027
  },
  {
    semester: 2,
    year: 2027
  },
  {
    semester: 1,
    year: 2028
  },
  {
    semester: 2,
    year: 2028
  },
  {
    semester: 1,
    year: 2029
  },
  {
    semester: 2,
    year: 2029
  },
  {
    semester: 1,
    year: 2030
  },
  {
    semester: 2,
    year: 2030
  }
];
export {
  UiTimeline as U,
  timeLineFixtures as t
};
