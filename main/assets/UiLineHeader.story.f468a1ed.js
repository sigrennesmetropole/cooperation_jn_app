import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aB as createVNode, aH as createBaseVNode, aL as toDisplayString, ax as resolveComponent, ay as createBlock, az as withCtx } from "./vendor.683ed149.js";
import { I as IconLine } from "./IconLine.6ad7eb83.js";
import { I as IconTwoDirectionArrow } from "./IconTwoDirectionArrow.3cc1d0dd.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./color.12f233df.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiLineHeader",
  props: {
    line: {
      type: Number,
      required: true
    },
    name: String,
    start: String,
    end: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, IconLine, IconTwoDirectionArrow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center px-0 py-3 gap-3 font-dm-sans" };
const _hoisted_2 = ["title"];
const _hoisted_3 = { class: "text-2xl font-bold" };
const _hoisted_4 = { class: "flex items-center p-0 gap-2" };
const _hoisted_5 = { class: "font-normal text-base text-neutral-800" };
const _hoisted_6 = { class: "font-normal text-base text-neutral-800" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["IconLine"], {
      line: $props.line,
      size: "xl"
    }, null, 8, ["line"]),
    createBaseVNode("div", {
      class: "flex flex-col items-start p-0 grow",
      title: `De ${$setup.props.start} \xE0 ${$setup.props.end}`
    }, [
      createBaseVNode("h2", _hoisted_3, toDisplayString($setup.props.name), 1),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, toDisplayString($setup.props.start), 1),
        createVNode($setup["IconTwoDirectionArrow"]),
        createBaseVNode("div", _hoisted_6, toDisplayString($setup.props.end), 1)
      ])
    ], 8, _hoisted_2)
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiLineHeader.vue";
const UiLineHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiLineHeader.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLineHeader.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        id: 1,
        name: "Ligne T1",
        start: "Stade Rennais",
        end: "Br\xE9c\xE9"
      };
    }
    const __returned__ = { initState, UiLineHeader };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiLineHeader",
    layout: {
      type: "grid",
      width: 500
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiLineHeader"], {
        line: state.id,
        name: state.name,
        start: state.start,
        end: state.end
      }, null, 8, ["line", "name", "start", "end"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiLineHeader.story.vue";
const UiLineHeader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/ui/UiLineHeader.story.vue"]]);
export {
  UiLineHeader_story as default
};
