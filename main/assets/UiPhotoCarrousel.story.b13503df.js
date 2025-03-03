import { aw as defineComponent, aK as ref, aD as onMounted, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, ax as resolveComponent, ay as createBlock, az as withCtx, aB as createVNode } from "./vendor.a7c7a003.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { p as photo1, a as photo2, b as photo3 } from "./photo3.89e6fe14.js";
const iconMultiply = "/cooperation_jn_trambus/main/assets/icon-multiply.bc3a57dc.svg";
const iconArrowRight = "/cooperation_jn_trambus/main/assets/arrow-right-caroussel.3d9dcd3c.svg";
const iconArrowLeft = "/cooperation_jn_trambus/main/assets/arrow-left-caroussel.0072b606.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiPhotoCaroussel",
  props: {
    photos: {
      type: Array,
      default: () => []
    },
    currentImage: {
      type: String,
      default: null
    }
  },
  emits: ["closeCaroussel"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const indexCurrentImage = ref(0);
    onMounted(async () => {
      props.photos.forEach((photo, index) => {
        if (photo == props.currentImage) {
          indexCurrentImage.value = index;
        }
      });
    });
    const __returned__ = { props, indexCurrentImage, emit, iconMultiply, iconArrowRight, iconArrowLeft };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "fixed top-0 left-0 w-full h-full z-20 bg-slate-900 bg-opacity-60" };
const _hoisted_2 = { class: "flex flex-row mt-14 mx-auto h-[85%] w-[80%] justify-center" };
const _hoisted_3 = { class: "flex flex-col" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "bg-white p-3 rounded-lg mr-3" };
const _hoisted_6 = ["src"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-normal text-base" }, " Simulation 3D d\u2019une voie am\xE9nag\xE9e avec un couloir de bus avec piste cyclable, une voie automobile, une piste cyclable , une bande v\xE9g\xE9tale et 2 voies pi\xE9tonnes dans une rue r\xE9sidentielle. ", -1);
const _hoisted_8 = { class: "flex flex-col" };
const _hoisted_9 = ["src"];
const _hoisted_10 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", {
          class: "w-9 h-9 bg-white p-2 mr-3 rounded flex justify-center items-center my-auto cursor-pointer",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.indexCurrentImage > 0 ? $setup.indexCurrentImage-- : $setup.indexCurrentImage = $setup.props.photos.length - 1)
        }, [
          createBaseVNode("img", {
            src: $setup.iconArrowLeft,
            class: "w-4 h-4"
          }, null, 8, _hoisted_4)
        ])
      ]),
      createBaseVNode("div", _hoisted_5, [
        (openBlock(), createElementBlock("img", {
          key: $setup.props.photos[$setup.indexCurrentImage],
          src: $setup.props.photos[$setup.indexCurrentImage],
          class: "w-full h-[90%]"
        }, null, 8, _hoisted_6)),
        _hoisted_7
      ]),
      createBaseVNode("div", _hoisted_8, [
        createBaseVNode("img", {
          src: $setup.iconMultiply,
          class: "w-4 h-4 cursor-pointer -mb-6",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.emit("closeCaroussel"))
        }, null, 8, _hoisted_9),
        createBaseVNode("div", {
          class: "w-9 h-9 bg-white p-2 mr-3 rounded flex justify-center items-center my-auto cursor-pointer",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.indexCurrentImage < $setup.props.photos.length - 1 ? $setup.indexCurrentImage++ : $setup.indexCurrentImage = 0)
        }, [
          createBaseVNode("img", {
            src: $setup.iconArrowRight,
            class: "w-4 h-4"
          }, null, 8, _hoisted_10)
        ])
      ])
    ])
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiPhotoCaroussel.vue";
const UiPhotoCaroussel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiPhotoCaroussel.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiPhotoCarrousel.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        photos: [photo1, photo2, photo3],
        currentImage: photo1
      };
    }
    const __returned__ = { initState, UiPhotoCaroussel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "h-[900px]" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiPhotoCaroussel",
    layout: {
      type: "grid",
      width: 1500
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["UiPhotoCaroussel"], {
          photos: state.photos,
          currentImage: state.currentImage
        }, null, 8, ["photos", "currentImage"])
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiPhotoCarrousel.story.vue";
const UiPhotoCarrousel_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiPhotoCarrousel.story.vue"]]);
export {
  UiPhotoCarrousel_story as default
};
