import { d as defineComponent, u as useCssVars, r as ref, a9 as toRefs, aa as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, V as markRaw, a$ as useFocus, k as watch, b0 as refDebounced, c as computed, y as withDirectives, ac as vModelText, m as withKeys, a1 as withModifiers, _ as __vitePreload, b1 as flexsearch_bundle } from "./vendor.f640ceb8.js";
import { u as useStoryStore } from "./story.4370a70c.js";
import { B as BaseEmpty } from "./BaseEmpty.022309d3.js";
import { o as onKeyboardShortcut } from "./bundle-main.a632840b.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.9b8bc4cf.js";
import "./GenericMountStory.29e3df7a.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
var charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
var language = { filter, stemmer, matcher };
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2$1 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7333f29c": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createVNode(unref(Icon), {
                icon: (_a = __props.result.icon) != null ? _a : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_b = __props.result.path) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "htw-flex htw-items-center htw-gap-0.5"
                    }, [
                      index > 0 ? (openBlock(), createBlock(unref(Icon), {
                        key: 0,
                        icon: "carbon:chevron-right",
                        class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(p), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
var SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3fb261e4"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"m":[0,1],"me":[0,1],"met":[0,1],"metf":[0,1],"metfo":[0,1],"metfor":[0,1],"metfork":[0,1],"t":[2,3,6,7,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"tr":[2,3],"tra":[2,3],"traf":[2,3],"trafe":[2,3],"trafel":[2,3],"l":[4,5,33,34,35,36,37,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"le":[4,5,33,34,35,36,37,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"lem":[4,5,33,34,35,36,37,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"leme":[4,5,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"te":[6,7],"ter":[6,7],"term":[6,7],"termo":[6,7],"termom":[6,7],"termome":[6,7],"termomet":[6,7],"termomete":[6,7],"termometer":[6,7],"e":[8,9],"et":[8,9],"ete":[8,9],"etem":[8,9],"s":[10,11],"se":[10,11],"ser":[10,11],"serf":[10,11],"serfe":[10,11],"serfek":[10,11],"serfeke":[10,11],"serfekes":[10,11],"o":[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,38,39,40,41,42,43,44,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],"lemk":[33,34,35,36,37],"of":[43,44],"ofe":[43,44],"ofer":[43,44],"oferf":[43,44],"oferfl":[43,44],"oferflo":[43,44],"oferflof":[43,44],"p":[45,46,47,48,49],"pa":[45,46,47,48,49],"pam":[45,46,47,48,49],"pame":[45,46,47,48,49],"pamel":[45,46,47,48,49],"op":[54,55,56],"opl":[54,55,56],"opla":[54,55,56],"oplam":[54,55,56],"oplame":[54,55,56],"oplamem":[54,55,56],"oplamemk":[54,55,56],"ta":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"tal":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"talf":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"talfe":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"talfem":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"talfemt":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97]},{"f":[0,1,4,5,33,34,52,53,87,88,89,95,97],"fe":[0,1,4,5,95],"fek":[0,1,4,5],"feko":[0,1,4,5],"fekor":[0,1,4,5],"fekore":[0,1,4,5],"fekores":[0,1],"te":[2,3,59,60,61,83],"tem":[2,3,59,60,61],"teme":[2,3,59,60,61],"s":[6,7,57,58],"st":[6,7,10,11,57,58],"sta":[6,7,10,11,57,58],"stat":[6,7,10,11,57,58],"state":[6,7,10,11,57,58],"stateo":[6,7,10,11,57,58],"stateom":[6,7,10,11,57,58],"stateoms":[6,7],"p":[8,9,12,13,14,15,16,17,18,19,20,21,22,23,24,35,36,37,50,51,67,68,69,70,71,72,73,74,75,82,84,85,93,94],"po":[8,9,12,13,14,15,16,17,18,19,20,21,22,23,24,67,68,69,70,71,72,73,74,75,84,93,94],"pot":[12,13,14,15,16,17,18,19,20,21,22,23,24,67,68,69,70,71,72,73,74,75],"poto":[12,13,14,15,16,17,18,19,20,21,22,23,24,67,68,69,70,71,72,73,74,75],"potom":[12,13,14,15,16,17,18,19,20,21,22,23,24,67,68,69,70,71,72,73,74,75],"e":[25,26,27,28,76,77,78,79,80,96],"ek":[25,26,27,28,76,77,78,79,80,96],"eko":[25,26,27,28,76,77,78,79,80],"ekom":[25,26,27,28,76,77,78,79,80],"l":[29,30,31,32,54,55,56,90,91],"le":[29,30,31,32,54,55,56,90,91],"lem":[29,30,31,32,91],"leme":[29,30,31,32,91],"fo":[33,34,52,53,87,88,89,97],"fot":[33,34,52,53],"fote":[33,34],"foter":[33,34],"pr":[35,36,37],"pre":[35,36,37],"prem":[35,36,37],"prema":[35,36,37],"premar":[35,36,37],"premare":[35,36,37],"m":[38,39,40,41,42,86],"me":[38,39,40,41,42],"met":[38,39,40,41,42],"metf":[38,39,40,41,42],"metfo":[38,39,40,41,42],"metfor":[38,39,40,41,42],"metfork":[38,39,40,41,42],"k":[43,44,45,46,47,48,49],"ko":[43,44,45,46,47,48,49],"kom":[43,44,45,46,47,48,49],"komt":[43,44,45,46,47,48,49],"komta":[43,44],"komtam":[43,44],"komtame":[43,44],"komtamer":[43,44],"komtr":[45,46,47,48,49],"komtro":[45,46,47,48,49],"komtrol":[45,46,47,48,49],"pa":[50,51,82,85],"par":[50,51],"park":[50,51],"parke":[50,51],"parkem":[50,51],"parkemk":[50,51],"foto":[52,53],"lek":[54,55,56],"leke":[54,55,56],"lekem":[54,55,56],"lekemt":[54,55,56],"t":[59,60,61,62,63,64,65,66],"temel":[59,60,61],"temele":[59,60,61],"temelem":[59,60,61],"temeleme":[59,60,61],"tr":[62,63,64,65,66,92],"tra":[62,63,64,65,66],"tram":[62,63],"tramp":[62,63],"trampo":[62,63],"trampos":[62,63],"traf":[64,65,66],"trafe":[64,65,66],"trafel":[64,65,66],"potoms":[67,68,69,70,71,72,73,74,75],"pak":[82],"pakr":[82],"pakro":[82],"pakrom":[82],"pakromt":[82],"tes":[83],"test":[83],"por":[84,93,94],"port":[84,93,94],"porte":[84,93,94],"porter":[84,93,94],"pat":[85],"pate":[85],"patem":[85],"patemk":[85],"ma":[86],"mar":[86],"mark":[86],"marke":[86],"markem":[86],"fom":[87,88,89],"fomt":[87,88,89],"let":[90],"lete":[90],"leter":[90],"tro":[92],"trop":[92],"fet":[95],"ekt":[96],"fol":[97]},{"t":[1,5,11,29,30,34,36,44,68,69,70,71,72,73,74,75],"te":[1,5,11,29,30,34,36,44,62,63,64,65,66],"tef":[1,3,5,7,11,34,36],"tefa":[1,3,5,7,11,34,36],"tefao":[1,3,5,7,11,34,36],"tefaol":[1,3,5,7,11,34,36],"tefaolt":[1,3,5,7,11,34,36],"f":[13,14,15,22,38,39,40,41,42,61,94],"fl":[13,14,15,22],"flo":[13,14,15,22],"floa":[13,14,15,22],"float":[13,14,15,22],"floate":[13,14,15,22],"floatem":[13,14,15,22],"floatemk":[13,14,15,22],"pr":[16,17,18,23],"pre":[16,17,18,23],"prem":[16,17,18,23],"prema":[16,17,18,23],"premar":[16,17,18,23],"premare":[16,17,18,23],"s":[19,20,21,24,77,87,90,92],"se":[19,20,21,24,87],"sek":[19,20,21,24],"seko":[19,20,21,24],"sekom":[19,20,21,24],"sekomt":[19,20,21,24],"sekomta":[19,20,21,24],"sekomtar":[19,20,21,24],"sekomtare":[19,20,21,24],"p":[25,26,27,28],"po":[25,26,27,28,45,46,47,48,49],"pot":[25,26,27,28,45,46,47,48,49],"poto":[25,26,27,28,45,46,47,48,49],"potom":[25,26,27,28,45,46,47,48,49],"tes":[29,30,44],"tesk":[29,30],"teskr":[29,30],"teskre":[29,30],"teskrep":[29,30],"teskrept":[29,30],"teskrepte":[29,30],"teskrepteo":[29,30],"teskrepteom":[29,30],"e":[31,32,50,51,57,58,91],"ea":[31,32,57,58],"eat":[31,32,57,58],"eate":[31,32,57,58],"eater":[31,32,57,58],"r":[37,93],"re":[37],"ret":[37],"fe":[38,39,40,41,42,61,88,94],"fek":[38,39,40,41,42,88],"feko":[38,39,40,41,42],"fekor":[38,39,40,41,42],"fekore":[38,39,40,41,42],"test":[44],"em":[50,51],"emf":[50,51],"emfo":[50,51],"emfor":[50,51],"emform":[50,51],"emforma":[50,51],"emformat":[50,51],"emformate":[50,51],"emformateo":[50,51],"emformateom":[50,51],"k":[52,53,60,82,83,84,97],"ka":[52,53],"kal":[52,53],"kale":[52,53],"kaler":[52,53],"kalere":[52,53],"a":[55],"al":[55],"om":[56],"ome":[56],"ko":[60,82,83,84,97],"kor":[60],"kore":[60],"korem":[60],"koremt":[60],"fet":[61,94],"tet":[62,63],"tetl":[62,63],"tetle":[62,63],"tem":[64,65,66],"teme":[64,65,66],"t1":[68,72],"t2":[69,73],"t3":[70,74],"t4":[71,75],"sm":[77],"sma":[77],"smal":[77],"m":[78],"me":[78],"met":[78],"mete":[78],"meteo":[78],"meteom":[78],"la":[79],"lar":[79],"lark":[79],"larke":[79],"es":[80],"est":[80],"estr":[80],"estra":[80],"kol":[82,83,84],"kolo":[82,83,84],"kolor":[82,83,84],"ses":[87],"sese":[87],"fekt":[88],"fa":[89],"fam":[89],"fame":[89],"famel":[89],"famele":[89],"sp":[90],"spa":[90],"spak":[90],"spake":[90],"spakem":[90],"spakemk":[90],"ek":[91],"ekt":[91],"sa":[92],"sat":[92],"sato":[92],"satof":[92],"ra":[93],"rat":[93],"rate":[93],"rateo":[93],"rateos":[93],"kom":[97],"komf":[97],"komfe":[97],"komfek":[97]},{"6":[37],"60":[37],"t":[9,15,18,21,26,32,51,53,58],"te":[9,15,18,21,26,32,51,53,58],"tef":[9,30,32,51,53,58,61,63],"tefa":[9,30,32,51,53,58,63],"tefao":[9,30,32,51,53,58,63],"tefaol":[9,30,32,51,53,58,63],"tefaolt":[9,30,32,51,53,58,63],"e":[13,14,16,17,19,20,72,73,74,75],"ek":[13,14,16,17,19,20],"eko":[13,14,16,17,19,20],"ekom":[13,14,16,17,19,20],"tes":[15,18,21,26],"test":[15,18,21,26],"s":[22,23,55,56],"sm":[22,23,24],"sma":[22,23,24],"smal":[22,23,24],"k":[36,65,66],"ko":[36,65,66],"kol":[36,65,66],"kolo":[36,65,66],"kolor":[36,65,66],"mo":[40],"l":[41,42],"le":[41,42],"lem":[41,42],"leme":[41,42],"a":[46,47,48,49,68,69,70,71],"at":[46,47,48,49],"ata":[46,47,48,49],"atak":[46,47,48,49],"atake":[46,47,48,49],"ataket":[46,47,48,49],"se":[55,56],"sel":[55,56],"sele":[55,56],"selek":[55,56],"selekt":[55,56],"selekte":[55,56],"selektet":[55,56],"tefr":[61],"tefre":[61],"tefrem":[61],"tefremt":[61],"kolore":[65,66],"koloret":[65,66],"ak":[68,69,70,71],"akt":[68,69,70,71],"akte":[68,69,70,71],"aktef":[68,69,70,71],"aktefe":[68,69,70,71],"em":[72,73,74,75],"ema":[72,73,74,75],"emak":[72,73,74,75],"emakt":[72,73,74,75],"emakte":[72,73,74,75],"emaktef":[72,73,74,75],"emaktefe":[72,73,74,75],"la":[80],"lar":[80],"lark":[80],"larke":[80]},{"t":[13,14,16,17,19,20,46,47,48,49],"te":[13,14,16,17,19,20],"tes":[13,14,16,17,19,20],"test":[13,14,16,17,19,20],"a":[28],"am":[28],"amt":[28],"om":[40],"ome":[40],"omet":[40],"to":[46,47,48,49],"e":[61],"et":[61],"ete":[61],"etem":[61],"etems":[61],"f":[66],"fa":[66],"fal":[66],"fals":[66],"false":[66],"m":[68,71,73,74],"mo":[68,71,73,74],"k":[69,70,72,75],"ke":[69,70,72,75],"kef":[69,70,72,75],"kefr":[69,70,72,75],"kefro":[69,70,72,75],"kefrom":[69,70,72,75]},{"m":[13,16,19],"mo":[13,16,19,39,41],"mot":[13,16,19],"mote":[13,16,19],"motef":[13,16,19],"t":[28],"te":[28],"tes":[28],"test":[28],"p":[42],"pl":[42],"pla":[42],"plam":[42],"l":[46,47],"le":[46,47],"lef":[46,47],"left":[46,47],"k":[68,71,73,74],"ke":[68,71,73,74],"kef":[68,71,73,74],"kefr":[68,71,73,74],"kefro":[68,71,73,74],"kefrom":[68,71,73,74]},{"e":[39,41],"em":[39],"emf":[39],"emfo":[39],"ek":[41],"eko":[41],"ekom":[41],"o":[46,48],"op":[46,48],"ope":[46,48],"opem":[46,48],"kl":[47,49],"klo":[47,49],"klos":[47,49],"klose":[47,49],"kloset":[47,49]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-networkfigures-story-vue", "kind": "story" }, "1": { "id": "src-components-home-networkfigures-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-home-traveltimes-story-vue", "kind": "story" }, "3": { "id": "src-components-home-traveltimes-story-vue:_default", "kind": "variant" }, "4": { "id": "src-components-line-linefigures-story-vue", "kind": "story" }, "5": { "id": "src-components-line-linefigures-story-vue:_default", "kind": "variant" }, "6": { "id": "src-components-line-thermometerstations-story-vue", "kind": "story" }, "7": { "id": "src-components-line-thermometerstations-story-vue:_default", "kind": "variant" }, "8": { "id": "src-components-station-itempoi-story-vue", "kind": "story" }, "9": { "id": "src-components-station-itempoi-story-vue:_default", "kind": "variant" }, "10": { "id": "src-components-station-servicesstation-story-vue", "kind": "story" }, "11": { "id": "src-components-station-servicesstation-story-vue:_default", "kind": "variant" }, "12": { "id": "src-components-ui-uibutton-story-vue", "kind": "story" }, "13": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-0", "kind": "variant" }, "14": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-1", "kind": "variant" }, "15": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-2", "kind": "variant" }, "16": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-3", "kind": "variant" }, "17": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-4", "kind": "variant" }, "18": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-5", "kind": "variant" }, "19": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-6", "kind": "variant" }, "20": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-7", "kind": "variant" }, "21": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-8", "kind": "variant" }, "22": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-9", "kind": "variant" }, "23": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-10", "kind": "variant" }, "24": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-11", "kind": "variant" }, "25": { "id": "src-components-ui-uiiconbutton-story-vue", "kind": "story" }, "26": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-0", "kind": "variant" }, "27": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-1", "kind": "variant" }, "28": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-2", "kind": "variant" }, "29": { "id": "src-components-ui-uilinedescription-story-vue", "kind": "story" }, "30": { "id": "src-components-ui-uilinedescription-story-vue:_default", "kind": "variant" }, "31": { "id": "src-components-ui-uilineheader-story-vue", "kind": "story" }, "32": { "id": "src-components-ui-uilineheader-story-vue:_default", "kind": "variant" }, "33": { "id": "src-components-ui-uilinkfooter-story-vue", "kind": "story" }, "34": { "id": "src-components-ui-uilinkfooter-story-vue:_default", "kind": "variant" }, "35": { "id": "src-components-ui-uilinkprimary-story-vue", "kind": "story" }, "36": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-0", "kind": "variant" }, "37": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-1", "kind": "variant" }, "38": { "id": "src-components-ui-uinetworkfigure-story-vue", "kind": "story" }, "39": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-0", "kind": "variant" }, "40": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-1", "kind": "variant" }, "41": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-2", "kind": "variant" }, "42": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-3", "kind": "variant" }, "43": { "id": "src-components-ui-uioverflowcontainer-story-vue", "kind": "story" }, "44": { "id": "src-components-ui-uioverflowcontainer-story-vue:src-components-ui-uioverflowcontainer-story-vue-0", "kind": "variant" }, "45": { "id": "src-components-ui-uipanelcontrolbutton-story-vue", "kind": "story" }, "46": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-0", "kind": "variant" }, "47": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-1", "kind": "variant" }, "48": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-2", "kind": "variant" }, "49": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-3", "kind": "variant" }, "50": { "id": "src-components-ui-uiparkinginformation-story-vue", "kind": "story" }, "51": { "id": "src-components-ui-uiparkinginformation-story-vue:_default", "kind": "variant" }, "52": { "id": "src-components-ui-uiphotogalery-story-vue", "kind": "story" }, "53": { "id": "src-components-ui-uiphotogalery-story-vue:_default", "kind": "variant" }, "54": { "id": "src-components-ui-uiplanninglegend-story-vue", "kind": "story" }, "55": { "id": "src-components-ui-uiplanninglegend-story-vue:src-components-ui-uiplanninglegend-story-vue-0", "kind": "variant" }, "56": { "id": "src-components-ui-uiplanninglegend-story-vue:src-components-ui-uiplanninglegend-story-vue-1", "kind": "variant" }, "57": { "id": "src-components-ui-uistationheader-story-vue", "kind": "story" }, "58": { "id": "src-components-ui-uistationheader-story-vue:_default", "kind": "variant" }, "59": { "id": "src-components-ui-uitimeline-story-vue", "kind": "story" }, "60": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-0", "kind": "variant" }, "61": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-1", "kind": "variant" }, "62": { "id": "src-components-ui-uitrambustitle-story-vue", "kind": "story" }, "63": { "id": "src-components-ui-uitrambustitle-story-vue:_default", "kind": "variant" }, "64": { "id": "src-components-ui-uitraveltime-story-vue", "kind": "story" }, "65": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-0", "kind": "variant" }, "66": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-1", "kind": "variant" }, "67": { "id": "src-components-map-buttons-uilinebutton-story-vue", "kind": "story" }, "68": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-0", "kind": "variant" }, "69": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-1", "kind": "variant" }, "70": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-2", "kind": "variant" }, "71": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-3", "kind": "variant" }, "72": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-4", "kind": "variant" }, "73": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-5", "kind": "variant" }, "74": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-6", "kind": "variant" }, "75": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-7", "kind": "variant" }, "76": { "id": "src-components-ui-icons-iconline-story-vue", "kind": "story" }, "77": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-0", "kind": "variant" }, "78": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-1", "kind": "variant" }, "79": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-2", "kind": "variant" }, "80": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-3", "kind": "variant" }, "81": { "id": "tailwind", "kind": "story" }, "82": { "id": "tailwind:background-color", "kind": "variant" }, "83": { "id": "tailwind:text-color", "kind": "variant" }, "84": { "id": "tailwind:border-color", "kind": "variant" }, "85": { "id": "tailwind:padding", "kind": "variant" }, "86": { "id": "tailwind:margin", "kind": "variant" }, "87": { "id": "tailwind:font-size", "kind": "variant" }, "88": { "id": "tailwind:font-weight", "kind": "variant" }, "89": { "id": "tailwind:font-family", "kind": "variant" }, "90": { "id": "tailwind:letter-spacing", "kind": "variant" }, "91": { "id": "tailwind:line-height", "kind": "variant" }, "92": { "id": "tailwind:drop-shadow", "kind": "variant" }, "93": { "id": "tailwind:border-radius", "kind": "variant" }, "94": { "id": "tailwind:border-width", "kind": "variant" }, "95": { "id": "tailwind:width", "kind": "variant" }, "96": { "id": "tailwind:height", "kind": "variant" }, "97": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" No results ");
const _hoisted_2 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.ebbab033.js"), true ? ["assets/search-docs-data.ebbab033.js","assets/vendor.f640ceb8.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundle.exports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor,
        type
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor,
        type
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
