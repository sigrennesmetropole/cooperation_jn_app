import { d as defineComponent, u as useCssVars, r as ref, a9 as toRefs, aa as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, V as markRaw, aY as useFocus, k as watch, aZ as refDebounced, c as computed, y as withDirectives, ac as vModelText, m as withKeys, a1 as withModifiers, _ as __vitePreload, a_ as flexsearch_bundle } from "./vendor.5dbaf5f7.js";
import { u as useStoryStore } from "./story.8b737c76.js";
import { B as BaseEmpty } from "./BaseEmpty.446dd4ee.js";
import { o as onKeyboardShortcut } from "./bundle-main.7fe41e5d.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.efb6095b.js";
import "./GenericMountStory.e0b393ed.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"m":[0,1],"me":[0,1],"met":[0,1],"metf":[0,1],"metfo":[0,1],"metfor":[0,1],"metfork":[0,1],"t":[2,3,6,7,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87],"tr":[2,3],"tra":[2,3],"traf":[2,3],"trafe":[2,3],"trafel":[2,3],"l":[4,5,27,28,29,30,31,57,58,59,60,61,62,63,64,65,66,67,68,69,70],"le":[4,5,27,28,29,30,31,57,58,59,60,61,62,63,64,65,66,67,68,69,70],"lem":[4,5,27,28,29,30,31,57,58,59,60,61,62,63,64,65,66,67,68,69,70],"leme":[4,5,57,58,59,60,61,62,63,64,65,66,67,68,69,70],"te":[6,7],"ter":[6,7],"term":[6,7],"termo":[6,7],"termom":[6,7],"termome":[6,7],"termomet":[6,7],"termomete":[6,7],"termometer":[6,7],"o":[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,32,33,34,35,36,37,38,44,45,46,47,48,49,50,51,52,53,54,55,56],"lemk":[27,28,29,30,31],"of":[37,38],"ofe":[37,38],"ofer":[37,38],"oferf":[37,38],"oferfl":[37,38],"oferflo":[37,38],"oferflof":[37,38],"p":[39,40,41,42,43],"pa":[39,40,41,42,43],"pam":[39,40,41,42,43],"pame":[39,40,41,42,43],"pamel":[39,40,41,42,43],"op":[46,47,48],"opl":[46,47,48],"opla":[46,47,48],"oplam":[46,47,48],"oplame":[46,47,48],"oplamem":[46,47,48],"oplamemk":[46,47,48],"ta":[71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87],"tal":[71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87],"talf":[71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87],"talfe":[71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87],"talfem":[71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87],"talfemt":[71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87]},{"f":[0,1,4,5,27,28,44,45,77,78,79,85,87],"fe":[0,1,4,5,85],"fek":[0,1,4,5],"feko":[0,1,4,5],"fekor":[0,1,4,5],"fekore":[0,1,4,5],"fekores":[0,1],"te":[2,3,49,50,51,73],"tem":[2,3,49,50,51],"teme":[2,3,49,50,51],"s":[6,7],"st":[6,7],"sta":[6,7],"stat":[6,7],"state":[6,7],"stateo":[6,7],"stateom":[6,7],"stateoms":[6,7],"p":[8,9,10,11,12,13,14,15,16,17,18,19,20,29,30,31,57,58,59,60,61,62,63,64,65,72,74,75,83,84],"po":[8,9,10,11,12,13,14,15,16,17,18,19,20,57,58,59,60,61,62,63,64,65,74,83,84],"pot":[8,9,10,11,12,13,14,15,16,17,18,19,20,57,58,59,60,61,62,63,64,65],"poto":[8,9,10,11,12,13,14,15,16,17,18,19,20,57,58,59,60,61,62,63,64,65],"potom":[8,9,10,11,12,13,14,15,16,17,18,19,20,57,58,59,60,61,62,63,64,65],"e":[21,22,23,24,66,67,68,69,70,86],"ek":[21,22,23,24,66,67,68,69,70,86],"eko":[21,22,23,24,66,67,68,69,70],"ekom":[21,22,23,24,66,67,68,69,70],"l":[25,26,46,47,48,80,81],"le":[25,26,46,47,48,80,81],"lem":[25,26,81],"leme":[25,26,81],"fo":[27,28,44,45,77,78,79,87],"fot":[27,28,44,45],"fote":[27,28],"foter":[27,28],"pr":[29,30,31],"pre":[29,30,31],"prem":[29,30,31],"prema":[29,30,31],"premar":[29,30,31],"premare":[29,30,31],"m":[32,33,34,35,36,76],"me":[32,33,34,35,36],"met":[32,33,34,35,36],"metf":[32,33,34,35,36],"metfo":[32,33,34,35,36],"metfor":[32,33,34,35,36],"metfork":[32,33,34,35,36],"k":[37,38,39,40,41,42,43],"ko":[37,38,39,40,41,42,43],"kom":[37,38,39,40,41,42,43],"komt":[37,38,39,40,41,42,43],"komta":[37,38],"komtam":[37,38],"komtame":[37,38],"komtamer":[37,38],"komtr":[39,40,41,42,43],"komtro":[39,40,41,42,43],"komtrol":[39,40,41,42,43],"foto":[44,45],"lek":[46,47,48],"leke":[46,47,48],"lekem":[46,47,48],"lekemt":[46,47,48],"t":[49,50,51,52,53,54,55,56],"temel":[49,50,51],"temele":[49,50,51],"temelem":[49,50,51],"temeleme":[49,50,51],"tr":[52,53,54,55,56,82],"tra":[52,53,54,55,56],"tram":[52,53],"tramp":[52,53],"trampo":[52,53],"trampos":[52,53],"traf":[54,55,56],"trafe":[54,55,56],"trafel":[54,55,56],"potoms":[57,58,59,60,61,62,63,64,65],"pa":[72,75],"pak":[72],"pakr":[72],"pakro":[72],"pakrom":[72],"pakromt":[72],"tes":[73],"test":[73],"por":[74,83,84],"port":[74,83,84],"porte":[74,83,84],"porter":[74,83,84],"pat":[75],"pate":[75],"patem":[75],"patemk":[75],"ma":[76],"mar":[76],"mark":[76],"marke":[76],"markem":[76],"fom":[77,78,79],"fomt":[77,78,79],"let":[80],"lete":[80],"leter":[80],"tro":[82],"trop":[82],"fet":[85],"ekt":[86],"fol":[87]},{"t":[1,5,25,26,28,30,38,58,59,60,61,62,63,64,65],"te":[1,5,25,26,28,30,38,52,53,54,55,56],"tef":[1,3,5,7,28,30],"tefa":[1,3,5,7,28,30],"tefao":[1,3,5,7,28,30],"tefaol":[1,3,5,7,28,30],"tefaolt":[1,3,5,7,28,30],"f":[9,10,11,18,32,33,34,35,36,51,84],"fl":[9,10,11,18],"flo":[9,10,11,18],"floa":[9,10,11,18],"float":[9,10,11,18],"floate":[9,10,11,18],"floatem":[9,10,11,18],"floatemk":[9,10,11,18],"pr":[12,13,14,19],"pre":[12,13,14,19],"prem":[12,13,14,19],"prema":[12,13,14,19],"premar":[12,13,14,19],"premare":[12,13,14,19],"s":[15,16,17,20,67,77,80,82],"se":[15,16,17,20,77],"sek":[15,16,17,20],"seko":[15,16,17,20],"sekom":[15,16,17,20],"sekomt":[15,16,17,20],"sekomta":[15,16,17,20],"sekomtar":[15,16,17,20],"sekomtare":[15,16,17,20],"p":[21,22,23,24],"po":[21,22,23,24,39,40,41,42,43],"pot":[21,22,23,24,39,40,41,42,43],"poto":[21,22,23,24,39,40,41,42,43],"potom":[21,22,23,24,39,40,41,42,43],"tes":[25,26,38],"tesk":[25,26],"teskr":[25,26],"teskre":[25,26],"teskrep":[25,26],"teskrept":[25,26],"teskrepte":[25,26],"teskrepteo":[25,26],"teskrepteom":[25,26],"r":[31,83],"re":[31],"ret":[31],"fe":[32,33,34,35,36,51,78,84],"fek":[32,33,34,35,36,78],"feko":[32,33,34,35,36],"fekor":[32,33,34,35,36],"fekore":[32,33,34,35,36],"test":[38],"k":[44,45,50,72,73,74,87],"ka":[44,45],"kal":[44,45],"kale":[44,45],"kaler":[44,45],"kalere":[44,45],"a":[47],"al":[47],"om":[48],"ome":[48],"ko":[50,72,73,74,87],"kor":[50],"kore":[50],"korem":[50],"koremt":[50],"fet":[51,84],"tet":[52,53],"tetl":[52,53],"tetle":[52,53],"tem":[54,55,56],"teme":[54,55,56],"t1":[58,62],"t2":[59,63],"t3":[60,64],"t4":[61,65],"sm":[67],"sma":[67],"smal":[67],"m":[68],"me":[68],"met":[68],"mete":[68],"meteo":[68],"meteom":[68],"la":[69],"lar":[69],"lark":[69],"larke":[69],"es":[70],"est":[70],"estr":[70],"estra":[70],"kol":[72,73,74],"kolo":[72,73,74],"kolor":[72,73,74],"ses":[77],"sese":[77],"fekt":[78],"fa":[79],"fam":[79],"fame":[79],"famel":[79],"famele":[79],"sp":[80],"spa":[80],"spak":[80],"spake":[80],"spakem":[80],"spakemk":[80],"e":[81],"ek":[81],"ekt":[81],"sa":[82],"sat":[82],"sato":[82],"satof":[82],"ra":[83],"rat":[83],"rate":[83],"rateo":[83],"rateos":[83],"kom":[87],"komf":[87],"komfe":[87],"komfek":[87]},{"6":[31],"60":[31],"e":[9,10,12,13,15,16,62,63,64,65],"ek":[9,10,12,13,15,16],"eko":[9,10,12,13,15,16],"ekom":[9,10,12,13,15,16],"t":[11,14,17,22,45],"te":[11,14,17,22,45],"tes":[11,14,17,22],"test":[11,14,17,22],"s":[18,19,47,48],"sm":[18,19,20],"sma":[18,19,20],"smal":[18,19,20],"tef":[26,45,51,53],"tefa":[26,45,53],"tefao":[26,45,53],"tefaol":[26,45,53],"tefaolt":[26,45,53],"k":[30,55,56],"ko":[30,55,56],"kol":[30,55,56],"kolo":[30,55,56],"kolor":[30,55,56],"mo":[34],"l":[35,36],"le":[35,36],"lem":[35,36],"leme":[35,36],"a":[40,41,42,43,58,59,60,61],"at":[40,41,42,43],"ata":[40,41,42,43],"atak":[40,41,42,43],"atake":[40,41,42,43],"ataket":[40,41,42,43],"se":[47,48],"sel":[47,48],"sele":[47,48],"selek":[47,48],"selekt":[47,48],"selekte":[47,48],"selektet":[47,48],"tefr":[51],"tefre":[51],"tefrem":[51],"tefremt":[51],"kolore":[55,56],"koloret":[55,56],"ak":[58,59,60,61],"akt":[58,59,60,61],"akte":[58,59,60,61],"aktef":[58,59,60,61],"aktefe":[58,59,60,61],"em":[62,63,64,65],"ema":[62,63,64,65],"emak":[62,63,64,65],"emakt":[62,63,64,65],"emakte":[62,63,64,65],"emaktef":[62,63,64,65],"emaktefe":[62,63,64,65],"la":[70],"lar":[70],"lark":[70],"larke":[70]},{"t":[9,10,12,13,15,16,40,41,42,43],"te":[9,10,12,13,15,16],"tes":[9,10,12,13,15,16],"test":[9,10,12,13,15,16],"a":[24],"am":[24],"amt":[24],"om":[34],"ome":[34],"omet":[34],"to":[40,41,42,43],"e":[51],"et":[51],"ete":[51],"etem":[51],"etems":[51],"f":[56],"fa":[56],"fal":[56],"fals":[56],"false":[56],"m":[58,61,63,64],"mo":[58,61,63,64],"k":[59,60,62,65],"ke":[59,60,62,65],"kef":[59,60,62,65],"kefr":[59,60,62,65],"kefro":[59,60,62,65],"kefrom":[59,60,62,65]},{"m":[9,12,15],"mo":[9,12,15,33,35],"mot":[9,12,15],"mote":[9,12,15],"motef":[9,12,15],"t":[24],"te":[24],"tes":[24],"test":[24],"p":[36],"pl":[36],"pla":[36],"plam":[36],"l":[40,41],"le":[40,41],"lef":[40,41],"left":[40,41],"k":[58,61,63,64],"ke":[58,61,63,64],"kef":[58,61,63,64],"kefr":[58,61,63,64],"kefro":[58,61,63,64],"kefrom":[58,61,63,64]},{"e":[33,35],"em":[33],"emf":[33],"emfo":[33],"ek":[35],"eko":[35],"ekom":[35],"o":[40,42],"op":[40,42],"ope":[40,42],"opem":[40,42],"kl":[41,43],"klo":[41,43],"klos":[41,43],"klose":[41,43],"kloset":[41,43]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-networkfigures-story-vue", "kind": "story" }, "1": { "id": "src-components-home-networkfigures-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-home-traveltimes-story-vue", "kind": "story" }, "3": { "id": "src-components-home-traveltimes-story-vue:_default", "kind": "variant" }, "4": { "id": "src-components-line-linefigures-story-vue", "kind": "story" }, "5": { "id": "src-components-line-linefigures-story-vue:_default", "kind": "variant" }, "6": { "id": "src-components-line-thermometerstations-story-vue", "kind": "story" }, "7": { "id": "src-components-line-thermometerstations-story-vue:_default", "kind": "variant" }, "8": { "id": "src-components-ui-uibutton-story-vue", "kind": "story" }, "9": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-0", "kind": "variant" }, "10": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-1", "kind": "variant" }, "11": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-2", "kind": "variant" }, "12": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-3", "kind": "variant" }, "13": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-4", "kind": "variant" }, "14": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-5", "kind": "variant" }, "15": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-6", "kind": "variant" }, "16": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-7", "kind": "variant" }, "17": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-8", "kind": "variant" }, "18": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-9", "kind": "variant" }, "19": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-10", "kind": "variant" }, "20": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-11", "kind": "variant" }, "21": { "id": "src-components-ui-uiiconbutton-story-vue", "kind": "story" }, "22": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-0", "kind": "variant" }, "23": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-1", "kind": "variant" }, "24": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-2", "kind": "variant" }, "25": { "id": "src-components-ui-uilinedescription-story-vue", "kind": "story" }, "26": { "id": "src-components-ui-uilinedescription-story-vue:_default", "kind": "variant" }, "27": { "id": "src-components-ui-uilinkfooter-story-vue", "kind": "story" }, "28": { "id": "src-components-ui-uilinkfooter-story-vue:_default", "kind": "variant" }, "29": { "id": "src-components-ui-uilinkprimary-story-vue", "kind": "story" }, "30": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-0", "kind": "variant" }, "31": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-1", "kind": "variant" }, "32": { "id": "src-components-ui-uinetworkfigure-story-vue", "kind": "story" }, "33": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-0", "kind": "variant" }, "34": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-1", "kind": "variant" }, "35": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-2", "kind": "variant" }, "36": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-3", "kind": "variant" }, "37": { "id": "src-components-ui-uioverflowcontainer-story-vue", "kind": "story" }, "38": { "id": "src-components-ui-uioverflowcontainer-story-vue:src-components-ui-uioverflowcontainer-story-vue-0", "kind": "variant" }, "39": { "id": "src-components-ui-uipanelcontrolbutton-story-vue", "kind": "story" }, "40": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-0", "kind": "variant" }, "41": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-1", "kind": "variant" }, "42": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-2", "kind": "variant" }, "43": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-3", "kind": "variant" }, "44": { "id": "src-components-ui-uiphotogalery-story-vue", "kind": "story" }, "45": { "id": "src-components-ui-uiphotogalery-story-vue:_default", "kind": "variant" }, "46": { "id": "src-components-ui-uiplanninglegend-story-vue", "kind": "story" }, "47": { "id": "src-components-ui-uiplanninglegend-story-vue:src-components-ui-uiplanninglegend-story-vue-0", "kind": "variant" }, "48": { "id": "src-components-ui-uiplanninglegend-story-vue:src-components-ui-uiplanninglegend-story-vue-1", "kind": "variant" }, "49": { "id": "src-components-ui-uitimeline-story-vue", "kind": "story" }, "50": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-0", "kind": "variant" }, "51": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-1", "kind": "variant" }, "52": { "id": "src-components-ui-uitrambustitle-story-vue", "kind": "story" }, "53": { "id": "src-components-ui-uitrambustitle-story-vue:_default", "kind": "variant" }, "54": { "id": "src-components-ui-uitraveltime-story-vue", "kind": "story" }, "55": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-0", "kind": "variant" }, "56": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-1", "kind": "variant" }, "57": { "id": "src-components-map-buttons-uilinebutton-story-vue", "kind": "story" }, "58": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-0", "kind": "variant" }, "59": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-1", "kind": "variant" }, "60": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-2", "kind": "variant" }, "61": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-3", "kind": "variant" }, "62": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-4", "kind": "variant" }, "63": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-5", "kind": "variant" }, "64": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-6", "kind": "variant" }, "65": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-7", "kind": "variant" }, "66": { "id": "src-components-ui-icons-iconline-story-vue", "kind": "story" }, "67": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-0", "kind": "variant" }, "68": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-1", "kind": "variant" }, "69": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-2", "kind": "variant" }, "70": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-3", "kind": "variant" }, "71": { "id": "tailwind", "kind": "story" }, "72": { "id": "tailwind:background-color", "kind": "variant" }, "73": { "id": "tailwind:text-color", "kind": "variant" }, "74": { "id": "tailwind:border-color", "kind": "variant" }, "75": { "id": "tailwind:padding", "kind": "variant" }, "76": { "id": "tailwind:margin", "kind": "variant" }, "77": { "id": "tailwind:font-size", "kind": "variant" }, "78": { "id": "tailwind:font-weight", "kind": "variant" }, "79": { "id": "tailwind:font-family", "kind": "variant" }, "80": { "id": "tailwind:letter-spacing", "kind": "variant" }, "81": { "id": "tailwind:line-height", "kind": "variant" }, "82": { "id": "tailwind:drop-shadow", "kind": "variant" }, "83": { "id": "tailwind:border-radius", "kind": "variant" }, "84": { "id": "tailwind:border-width", "kind": "variant" }, "85": { "id": "tailwind:width", "kind": "variant" }, "86": { "id": "tailwind:height", "kind": "variant" }, "87": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.154136e4.js"), true ? ["assets/search-docs-data.154136e4.js","assets/vendor.5dbaf5f7.js"] : void 0);
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
