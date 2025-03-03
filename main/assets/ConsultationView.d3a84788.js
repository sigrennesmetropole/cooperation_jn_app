import { aw as defineComponent, aO as computed, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aJ as toDisplayString, aP as normalizeClass, aV as onBeforeMount, ax as resolveComponent, aB as createVNode, az as withCtx } from "./vendor.f6710be0.js";
import { a as useViewsStore, v as viewList } from "./views.d9551082.js";
import { C as ChevronArrowRight } from "./chevron-left.151e6030.js";
import { L as Localization } from "./localization-icon.7f563d77.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./layers.d308b875.js";
import "./stations.18a78160.js";
const Calendar = "/cooperation_jn_trambus/main/assets/calendar.4ab51daf.svg";
const chatBubble = "/cooperation_jn_trambus/main/assets/chat-bubble.1ea8d72e.svg";
const likeThumb = "/cooperation_jn_trambus/main/assets/like-thumb.5e2b62d5.svg";
const multiplePerson = "/cooperation_jn_trambus/main/assets/multiple-person.fae611da.svg";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConsultationMeeting",
  props: {
    illustration: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: "01/01/2001"
    },
    place: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    comment: {
      type: Number,
      default: 0
    },
    like: {
      type: Number,
      default: 0
    },
    person: {
      type: Number,
      default: 0
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const style = computed(() => {
      if (props.status === "open") {
        return {
          buttonStyle: "bg-amber-400",
          textStyle: "text-black",
          textContent: "Ouverte"
        };
      } else if (props.status === "inAnalysis") {
        return {
          buttonStyle: "bg-slate-500",
          textStyle: "text-white",
          textContent: "En analyse"
        };
      } else {
        return {
          buttonStyle: "bg-white border border-neutral-300",
          textStyle: "text-black",
          textContent: "Termin\xE9e"
        };
      }
    });
    const __returned__ = { props, style, Calendar, Localization, chatBubble, likeThumb, multiplePerson };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "flex flex-row gap-4 py-4 border-b border-b-slate-200" };
const _hoisted_2$2 = ["src"];
const _hoisted_3$2 = { class: "flex flex-col gap-2" };
const _hoisted_4$1 = { class: "font-dm-sans font-bold text-base" };
const _hoisted_5$1 = { class: "flex flex-row gap-3 h-8" };
const _hoisted_6$1 = { class: "flex flex-row gap-1.5 items-center" };
const _hoisted_7$1 = ["src"];
const _hoisted_8$1 = { class: "font-dm-sans font-normal text-xs" };
const _hoisted_9 = { class: "flex flex-row gap-1.5 items-center" };
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "font-dm-sans font-normal text-xs" };
const _hoisted_12 = { class: "font-dm-sans font-normal text-xs" };
const _hoisted_13 = { class: "flex flex-row gap-3 py-3" };
const _hoisted_14 = { class: "flex flex-row gap-1.5 items-center" };
const _hoisted_15 = ["src"];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "border border-l border-slate-200" }, null, -1);
const _hoisted_17 = { class: "flex flex-row gap-1.5 items-center" };
const _hoisted_18 = ["src"];
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "border border-l border-slate-200" }, null, -1);
const _hoisted_20 = { class: "flex flex-row gap-1.5 items-center" };
const _hoisted_21 = ["src"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("img", {
      src: $setup.props.illustration,
      class: "h-[133px] w-[200px] rounded-lg"
    }, null, 8, _hoisted_2$2),
    createBaseVNode("div", _hoisted_3$2, [
      createBaseVNode("p", _hoisted_4$1, toDisplayString($setup.props.title), 1),
      createBaseVNode("div", _hoisted_5$1, [
        createBaseVNode("button", {
          class: normalizeClass([$setup.style.buttonStyle, "flex items-center py-1 px-2 rounded h-[28px]"])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["font-medium font-dm-sans text-sm text-center items-center", $setup.style.textStyle])
          }, toDisplayString($setup.style.textContent), 3)
        ], 2),
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("img", {
            src: $setup.Calendar,
            class: "w-[15px] h-[15px]"
          }, null, 8, _hoisted_7$1),
          createBaseVNode("p", _hoisted_8$1, " Clotur\xE9e le " + toDisplayString($setup.props.date), 1)
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("img", {
            src: $setup.Localization,
            class: "w-4 h-4"
          }, null, 8, _hoisted_10),
          createBaseVNode("p", _hoisted_11, toDisplayString($setup.props.place), 1)
        ])
      ]),
      createBaseVNode("p", _hoisted_12, toDisplayString($setup.props.content), 1),
      createBaseVNode("div", _hoisted_13, [
        createBaseVNode("div", _hoisted_14, [
          createBaseVNode("img", {
            src: $setup.chatBubble,
            class: "w-4 h-4"
          }, null, 8, _hoisted_15),
          createBaseVNode("p", null, toDisplayString($setup.props.comment), 1)
        ]),
        _hoisted_16,
        createBaseVNode("div", _hoisted_17, [
          createBaseVNode("img", {
            src: $setup.likeThumb,
            class: "w-4 h-4"
          }, null, 8, _hoisted_18),
          createBaseVNode("p", null, toDisplayString($setup.props.like), 1)
        ]),
        _hoisted_19,
        createBaseVNode("div", _hoisted_20, [
          createBaseVNode("img", {
            src: $setup.multiplePerson,
            class: "w-4 h-4"
          }, null, 8, _hoisted_21),
          createBaseVNode("p", null, toDisplayString($setup.props.person), 1)
        ])
      ])
    ])
  ]);
}
_sfc_main$2.__file = "src/components/consultation/ConsultationMeeting.vue";
const ConsultationMeeting = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/consultation/ConsultationMeeting.vue"]]);
const fabriqueCitoyenne = "/cooperation_jn_trambus/main/assets/fabrique-citoyenne-logo.63c138a4.png";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExplanationComponent",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { fabriqueCitoyenne };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "bg-[#f0eeff] px-8 py-6 flex flex-row gap-6 items-center" };
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans text-[#312783]" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "text-2xl font-bold" }, " Bienvenue dans l'espace des concertations "),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-sm font-normal" }, " Aidez nous \xE0 am\xE9liorer votre projet en contribuant aux concertations. ")
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("img", {
      src: $setup.fabriqueCitoyenne,
      class: "w-[192px] h-[128px]"
    }, null, 8, _hoisted_2$1),
    _hoisted_3$1
  ]);
}
_sfc_main$1.__file = "src/components/consultation/ExplanationComponent.vue";
const ExplanationComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/consultation/ExplanationComponent.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConsultationView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    onBeforeMount(() => {
      viewStore.currentView = viewList["consultation"];
    });
    const __returned__ = { viewStore, viewList, ChevronArrowRight, ConsultationMeeting, ExplanationComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "h-screen" };
const _hoisted_2 = { class: "flex flex-row" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans grow font-bold text-2xl" }, "Concertations", -1);
const _hoisted_5 = { class: "-mx-6 mt-6" };
const _hoisted_6 = { class: "flex flex-col" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6 mt-6 pb-6 border-b border-b-slate-200" }, " Les concertations ouvertes ", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6 border-b border-b-slate-200 mt-6 pb-6" }, " Les concertations termin\xE9es ", -1);
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
    ]),
    createBaseVNode("div", _hoisted_5, [
      createVNode($setup["ExplanationComponent"])
    ]),
    createBaseVNode("div", _hoisted_6, [
      _hoisted_7,
      createVNode($setup["ConsultationMeeting"], {
        illustration: "src/assets/illustrations/ex_consultation.png",
        title: "Vos r\xE9actions au futur am\xE9nagement du r\xE9seau trambus",
        status: "open",
        date: "15/10/2023",
        place: "Zone g\xE9ographique",
        content: "Appaisement du traffic et v\xE9g\xE9talisation des espaces. La rue chicogn\xE9 va faire l\u2019objet d\u2019une requalification",
        comment: 481,
        like: 1291,
        person: 353
      }, null, 8, ["illustration", "content"]),
      createVNode($setup["ConsultationMeeting"], {
        illustration: "src/assets/illustrations/ex_consultation.png",
        title: "Trambus",
        status: "inAnalysis",
        date: "15/10/2023",
        place: "Ligne 4",
        content: "Appaisement du traffic et v\xE9g\xE9talisation des espaces. La rue chicogn\xE9 va faire l\u2019objet d\u2019une requalification",
        comment: 120,
        like: 364,
        person: 56
      }, null, 8, ["illustration", "content"]),
      _hoisted_8,
      createVNode($setup["ConsultationMeeting"], {
        illustration: "src/assets/illustrations/ex_consultation.png",
        title: "Trambus",
        status: "closed",
        date: "15/10/2023",
        place: "Gare",
        content: "Appaisement du traffic et v\xE9g\xE9talisation des espaces. La rue chicogn\xE9 va faire l\u2019objet d\u2019une requalification",
        comment: 61,
        like: 579,
        person: 237
      }, null, 8, ["illustration", "content"])
    ])
  ]);
}
_sfc_main.__file = "src/views/ConsultationView.vue";
const ConsultationView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/views/ConsultationView.vue"]]);
export {
  ConsultationView as default
};
