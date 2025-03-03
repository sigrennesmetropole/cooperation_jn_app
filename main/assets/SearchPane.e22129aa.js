import { d as defineComponent, u as useCssVars, r as ref, a9 as toRefs, aa as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, V as markRaw, b2 as useFocus, k as watch, b3 as refDebounced, c as computed, y as withDirectives, ac as vModelText, m as withKeys, a1 as withModifiers, _ as __vitePreload, b4 as flexsearch_bundle } from "./vendor.f2e4759e.js";
import { u as useStoryStore } from "./story.c3503035.js";
import { B as BaseEmpty } from "./BaseEmpty.7fb0b939.js";
import { o as onKeyboardShortcut } from "./bundle-main.d00dbe96.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.de761410.js";
import "./GenericMountStory.460b8ce0.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"m":[0,1],"me":[0,1],"met":[0,1],"metf":[0,1],"metfo":[0,1],"metfor":[0,1],"metfork":[0,1],"t":[2,3,6,7,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93],"tr":[2,3],"tra":[2,3],"traf":[2,3],"trafe":[2,3],"trafel":[2,3],"l":[4,5,29,30,31,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"le":[4,5,29,30,31,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"lem":[4,5,29,30,31,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"leme":[4,5,63,64,65,66,67,68,69,70,71,72,73,74,75,76],"te":[6,7],"ter":[6,7],"term":[6,7],"termo":[6,7],"termom":[6,7],"termome":[6,7],"termomet":[6,7],"termomete":[6,7],"termometer":[6,7],"e":[8,9],"et":[8,9],"ete":[8,9],"etem":[8,9],"s":[10,11],"se":[10,11],"ser":[10,11],"serf":[10,11],"serfe":[10,11],"serfek":[10,11],"serfeke":[10,11],"serfekes":[10,11],"o":[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,32,33,34,35,36,37,38,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62],"lemk":[29,30,31],"of":[37,38],"ofe":[37,38],"ofer":[37,38],"oferf":[37,38],"oferfl":[37,38],"oferflo":[37,38],"oferflof":[37,38],"p":[39,40,41,42,43],"pa":[39,40,41,42,43],"pam":[39,40,41,42,43],"pame":[39,40,41,42,43],"pamel":[39,40,41,42,43],"op":[50,51,52],"opl":[50,51,52],"opla":[50,51,52],"oplam":[50,51,52],"oplame":[50,51,52],"oplamem":[50,51,52],"oplamemk":[50,51,52],"ta":[77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93],"tal":[77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93],"talf":[77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93],"talfe":[77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93],"talfem":[77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93],"talfemt":[77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93]},{"f":[0,1,4,5,46,47,48,49,83,84,85,91,93],"fe":[0,1,4,5,91],"fek":[0,1,4,5],"feko":[0,1,4,5],"fekor":[0,1,4,5],"fekore":[0,1,4,5],"fekores":[0,1],"te":[2,3,55,56,57,79],"tem":[2,3,55,56,57],"teme":[2,3,55,56,57],"s":[6,7,53,54],"st":[6,7,10,11,53,54],"sta":[6,7,10,11,53,54],"stat":[6,7,10,11,53,54],"state":[6,7,10,11,53,54],"stateo":[6,7,10,11,53,54],"stateom":[6,7,10,11,53,54],"stateoms":[6,7],"p":[8,9,12,13,14,15,16,17,18,19,20,21,22,23,24,29,30,31,44,45,63,64,65,66,67,68,69,70,71,78,80,81,89,90],"po":[8,9,12,13,14,15,16,17,18,19,20,21,22,23,24,63,64,65,66,67,68,69,70,71,80,89,90],"pot":[12,13,14,15,16,17,18,19,20,21,22,23,24,63,64,65,66,67,68,69,70,71],"poto":[12,13,14,15,16,17,18,19,20,21,22,23,24,63,64,65,66,67,68,69,70,71],"potom":[12,13,14,15,16,17,18,19,20,21,22,23,24,63,64,65,66,67,68,69,70,71],"l":[25,26,27,28,50,51,52,86,87],"le":[25,26,27,28,50,51,52,86,87],"lem":[25,26,27,28,87],"leme":[25,26,27,28,87],"pr":[29,30,31],"pre":[29,30,31],"prem":[29,30,31],"prema":[29,30,31],"premar":[29,30,31],"premare":[29,30,31],"m":[32,33,34,35,36,82],"me":[32,33,34,35,36],"met":[32,33,34,35,36],"metf":[32,33,34,35,36],"metfo":[32,33,34,35,36],"metfor":[32,33,34,35,36],"metfork":[32,33,34,35,36],"k":[37,38,39,40,41,42,43],"ko":[37,38,39,40,41,42,43],"kom":[37,38,39,40,41,42,43],"komt":[37,38,39,40,41,42,43],"komta":[37,38],"komtam":[37,38],"komtame":[37,38],"komtamer":[37,38],"komtr":[39,40,41,42,43],"komtro":[39,40,41,42,43],"komtrol":[39,40,41,42,43],"pa":[44,45,78,81],"par":[44,45],"park":[44,45],"parke":[44,45],"parkem":[44,45],"parkemk":[44,45],"fo":[46,47,48,49,83,84,85,93],"fot":[46,47,48,49],"foto":[46,47,48,49],"lek":[50,51,52],"leke":[50,51,52],"lekem":[50,51,52],"lekemt":[50,51,52],"t":[55,56,57,58,59,60,61,62],"temel":[55,56,57],"temele":[55,56,57],"temelem":[55,56,57],"temeleme":[55,56,57],"tr":[58,59,60,61,62,88],"tra":[58,59,60,61,62],"tram":[58,59],"tramp":[58,59],"trampo":[58,59],"trampos":[58,59],"traf":[60,61,62],"trafe":[60,61,62],"trafel":[60,61,62],"potoms":[63,64,65,66,67,68,69,70,71],"e":[72,73,74,75,76,92],"ek":[72,73,74,75,76,92],"eko":[72,73,74,75,76],"ekom":[72,73,74,75,76],"pak":[78],"pakr":[78],"pakro":[78],"pakrom":[78],"pakromt":[78],"tes":[79],"test":[79],"por":[80,89,90],"port":[80,89,90],"porte":[80,89,90],"porter":[80,89,90],"pat":[81],"pate":[81],"patem":[81],"patemk":[81],"ma":[82],"mar":[82],"mark":[82],"marke":[82],"markem":[82],"fom":[83,84,85],"fomt":[83,84,85],"let":[86],"lete":[86],"leter":[86],"tro":[88],"trop":[88],"fet":[91],"ekt":[92],"fol":[93]},{"t":[1,5,11,25,26,30,38,64,65,66,67,68,69,70,71],"te":[1,5,11,25,26,30,38,58,59,60,61,62],"tef":[1,3,5,7,11,30],"tefa":[1,3,5,7,11,30],"tefao":[1,3,5,7,11,30],"tefaol":[1,3,5,7,11,30],"tefaolt":[1,3,5,7,11,30],"f":[13,14,15,22,32,33,34,35,36,57,90],"fl":[13,14,15,22],"flo":[13,14,15,22],"floa":[13,14,15,22],"float":[13,14,15,22],"floate":[13,14,15,22],"floatem":[13,14,15,22],"floatemk":[13,14,15,22],"pr":[16,17,18,23],"pre":[16,17,18,23],"prem":[16,17,18,23],"prema":[16,17,18,23],"premar":[16,17,18,23],"premare":[16,17,18,23],"s":[19,20,21,24,73,83,86,88],"se":[19,20,21,24,83],"sek":[19,20,21,24],"seko":[19,20,21,24],"sekom":[19,20,21,24],"sekomt":[19,20,21,24],"sekomta":[19,20,21,24],"sekomtar":[19,20,21,24],"sekomtare":[19,20,21,24],"tes":[25,26,38],"tesk":[25,26],"teskr":[25,26],"teskre":[25,26],"teskrep":[25,26],"teskrept":[25,26],"teskrepte":[25,26],"teskrepteo":[25,26],"teskrepteom":[25,26],"e":[27,28,44,45,53,54,87],"ea":[27,28,53,54],"eat":[27,28,53,54],"eate":[27,28,53,54],"eater":[27,28,53,54],"r":[31,89],"re":[31],"ret":[31],"fe":[32,33,34,35,36,57,84,90],"fek":[32,33,34,35,36,84],"feko":[32,33,34,35,36],"fekor":[32,33,34,35,36],"fekore":[32,33,34,35,36],"test":[38],"po":[39,40,41,42,43],"pot":[39,40,41,42,43],"poto":[39,40,41,42,43],"potom":[39,40,41,42,43],"em":[44,45],"emf":[44,45],"emfo":[44,45],"emfor":[44,45],"emform":[44,45],"emforma":[44,45],"emformat":[44,45],"emformate":[44,45],"emformateo":[44,45],"emformateom":[44,45],"k":[46,47,48,49,56,78,79,80,93],"ka":[46,47,48,49],"kar":[46,47],"karo":[46,47],"karos":[46,47],"karose":[46,47],"karosel":[46,47],"kal":[48,49],"kale":[48,49],"kaler":[48,49],"kalere":[48,49],"a":[51],"al":[51],"om":[52],"ome":[52],"ko":[56,78,79,80,93],"kor":[56],"kore":[56],"korem":[56],"koremt":[56],"fet":[57,90],"tet":[58,59],"tetl":[58,59],"tetle":[58,59],"tem":[60,61,62],"teme":[60,61,62],"t1":[64,68],"t2":[65,69],"t3":[66,70],"t4":[67,71],"sm":[73],"sma":[73],"smal":[73],"m":[74],"me":[74],"met":[74],"mete":[74],"meteo":[74],"meteom":[74],"la":[75],"lar":[75],"lark":[75],"larke":[75],"es":[76],"est":[76],"estr":[76],"estra":[76],"kol":[78,79,80],"kolo":[78,79,80],"kolor":[78,79,80],"ses":[83],"sese":[83],"fekt":[84],"fa":[85],"fam":[85],"fame":[85],"famel":[85],"famele":[85],"sp":[86],"spa":[86],"spak":[86],"spake":[86],"spakem":[86],"spakemk":[86],"ek":[87],"ekt":[87],"sa":[88],"sat":[88],"sato":[88],"satof":[88],"ra":[89],"rat":[89],"rate":[89],"rateo":[89],"rateos":[89],"kom":[93],"komf":[93],"komfe":[93],"komfek":[93]},{"6":[31],"60":[31],"t":[9,15,18,21,28,45,47,49,54],"te":[9,15,18,21,28,45,47,49,54],"tef":[9,26,28,45,47,49,54,57,59],"tefa":[9,26,28,45,47,49,54,59],"tefao":[9,26,28,45,47,49,54,59],"tefaol":[9,26,28,45,47,49,54,59],"tefaolt":[9,26,28,45,47,49,54,59],"e":[13,14,16,17,19,20,68,69,70,71],"ek":[13,14,16,17,19,20],"eko":[13,14,16,17,19,20],"ekom":[13,14,16,17,19,20],"tes":[15,18,21],"test":[15,18,21],"s":[22,23,51,52],"sm":[22,23,24],"sma":[22,23,24],"smal":[22,23,24],"k":[30,61,62],"ko":[30,61,62],"kol":[30,61,62],"kolo":[30,61,62],"kolor":[30,61,62],"mo":[34],"l":[35,36],"le":[35,36],"lem":[35,36],"leme":[35,36],"a":[40,41,42,43,64,65,66,67],"at":[40,41,42,43],"ata":[40,41,42,43],"atak":[40,41,42,43],"atake":[40,41,42,43],"ataket":[40,41,42,43],"se":[51,52],"sel":[51,52],"sele":[51,52],"selek":[51,52],"selekt":[51,52],"selekte":[51,52],"selektet":[51,52],"tefr":[57],"tefre":[57],"tefrem":[57],"tefremt":[57],"kolore":[61,62],"koloret":[61,62],"ak":[64,65,66,67],"akt":[64,65,66,67],"akte":[64,65,66,67],"aktef":[64,65,66,67],"aktefe":[64,65,66,67],"em":[68,69,70,71],"ema":[68,69,70,71],"emak":[68,69,70,71],"emakt":[68,69,70,71],"emakte":[68,69,70,71],"emaktef":[68,69,70,71],"emaktefe":[68,69,70,71],"la":[76],"lar":[76],"lark":[76],"larke":[76]},{"t":[13,14,16,17,19,20,40,41,42,43],"te":[13,14,16,17,19,20],"tes":[13,14,16,17,19,20],"test":[13,14,16,17,19,20],"om":[34],"ome":[34],"omet":[34],"to":[40,41,42,43],"e":[57],"et":[57],"ete":[57],"etem":[57],"etems":[57],"f":[62],"fa":[62],"fal":[62],"fals":[62],"false":[62],"m":[64,67,69,70],"mo":[64,67,69,70],"k":[65,66,68,71],"ke":[65,66,68,71],"kef":[65,66,68,71],"kefr":[65,66,68,71],"kefro":[65,66,68,71],"kefrom":[65,66,68,71]},{"m":[13,16,19],"mo":[13,16,19,33,35],"mot":[13,16,19],"mote":[13,16,19],"motef":[13,16,19],"p":[36],"pl":[36],"pla":[36],"plam":[36],"l":[40,41],"le":[40,41],"lef":[40,41],"left":[40,41],"k":[64,67,69,70],"ke":[64,67,69,70],"kef":[64,67,69,70],"kefr":[64,67,69,70],"kefro":[64,67,69,70],"kefrom":[64,67,69,70]},{"e":[33,35],"em":[33],"emf":[33],"emfo":[33],"ek":[35],"eko":[35],"ekom":[35],"o":[40,42],"op":[40,42],"ope":[40,42],"opem":[40,42],"kl":[41,43],"klo":[41,43],"klos":[41,43],"klose":[41,43],"kloset":[41,43]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-networkfigures-story-vue", "kind": "story" }, "1": { "id": "src-components-home-networkfigures-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-home-traveltimes-story-vue", "kind": "story" }, "3": { "id": "src-components-home-traveltimes-story-vue:_default", "kind": "variant" }, "4": { "id": "src-components-line-linefigures-story-vue", "kind": "story" }, "5": { "id": "src-components-line-linefigures-story-vue:_default", "kind": "variant" }, "6": { "id": "src-components-line-thermometerstations-story-vue", "kind": "story" }, "7": { "id": "src-components-line-thermometerstations-story-vue:_default", "kind": "variant" }, "8": { "id": "src-components-station-itempoi-story-vue", "kind": "story" }, "9": { "id": "src-components-station-itempoi-story-vue:_default", "kind": "variant" }, "10": { "id": "src-components-station-servicesstation-story-vue", "kind": "story" }, "11": { "id": "src-components-station-servicesstation-story-vue:_default", "kind": "variant" }, "12": { "id": "src-components-ui-uibutton-story-vue", "kind": "story" }, "13": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-0", "kind": "variant" }, "14": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-1", "kind": "variant" }, "15": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-2", "kind": "variant" }, "16": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-3", "kind": "variant" }, "17": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-4", "kind": "variant" }, "18": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-5", "kind": "variant" }, "19": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-6", "kind": "variant" }, "20": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-7", "kind": "variant" }, "21": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-8", "kind": "variant" }, "22": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-9", "kind": "variant" }, "23": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-10", "kind": "variant" }, "24": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-11", "kind": "variant" }, "25": { "id": "src-components-ui-uilinedescription-story-vue", "kind": "story" }, "26": { "id": "src-components-ui-uilinedescription-story-vue:_default", "kind": "variant" }, "27": { "id": "src-components-ui-uilineheader-story-vue", "kind": "story" }, "28": { "id": "src-components-ui-uilineheader-story-vue:_default", "kind": "variant" }, "29": { "id": "src-components-ui-uilinkprimary-story-vue", "kind": "story" }, "30": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-0", "kind": "variant" }, "31": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-1", "kind": "variant" }, "32": { "id": "src-components-ui-uinetworkfigure-story-vue", "kind": "story" }, "33": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-0", "kind": "variant" }, "34": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-1", "kind": "variant" }, "35": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-2", "kind": "variant" }, "36": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-3", "kind": "variant" }, "37": { "id": "src-components-ui-uioverflowcontainer-story-vue", "kind": "story" }, "38": { "id": "src-components-ui-uioverflowcontainer-story-vue:src-components-ui-uioverflowcontainer-story-vue-0", "kind": "variant" }, "39": { "id": "src-components-ui-uipanelcontrolbutton-story-vue", "kind": "story" }, "40": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-0", "kind": "variant" }, "41": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-1", "kind": "variant" }, "42": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-2", "kind": "variant" }, "43": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-3", "kind": "variant" }, "44": { "id": "src-components-ui-uiparkinginformation-story-vue", "kind": "story" }, "45": { "id": "src-components-ui-uiparkinginformation-story-vue:_default", "kind": "variant" }, "46": { "id": "src-components-ui-uiphotocarrousel-story-vue", "kind": "story" }, "47": { "id": "src-components-ui-uiphotocarrousel-story-vue:_default", "kind": "variant" }, "48": { "id": "src-components-ui-uiphotogalery-story-vue", "kind": "story" }, "49": { "id": "src-components-ui-uiphotogalery-story-vue:_default", "kind": "variant" }, "50": { "id": "src-components-ui-uiplanninglegend-story-vue", "kind": "story" }, "51": { "id": "src-components-ui-uiplanninglegend-story-vue:src-components-ui-uiplanninglegend-story-vue-0", "kind": "variant" }, "52": { "id": "src-components-ui-uiplanninglegend-story-vue:src-components-ui-uiplanninglegend-story-vue-1", "kind": "variant" }, "53": { "id": "src-components-ui-uistationheader-story-vue", "kind": "story" }, "54": { "id": "src-components-ui-uistationheader-story-vue:_default", "kind": "variant" }, "55": { "id": "src-components-ui-uitimeline-story-vue", "kind": "story" }, "56": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-0", "kind": "variant" }, "57": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-1", "kind": "variant" }, "58": { "id": "src-components-ui-uitrambustitle-story-vue", "kind": "story" }, "59": { "id": "src-components-ui-uitrambustitle-story-vue:_default", "kind": "variant" }, "60": { "id": "src-components-ui-uitraveltime-story-vue", "kind": "story" }, "61": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-0", "kind": "variant" }, "62": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-1", "kind": "variant" }, "63": { "id": "src-components-map-buttons-uilinebutton-story-vue", "kind": "story" }, "64": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-0", "kind": "variant" }, "65": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-1", "kind": "variant" }, "66": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-2", "kind": "variant" }, "67": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-3", "kind": "variant" }, "68": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-4", "kind": "variant" }, "69": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-5", "kind": "variant" }, "70": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-6", "kind": "variant" }, "71": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-7", "kind": "variant" }, "72": { "id": "src-components-ui-icons-iconline-story-vue", "kind": "story" }, "73": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-0", "kind": "variant" }, "74": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-1", "kind": "variant" }, "75": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-2", "kind": "variant" }, "76": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-3", "kind": "variant" }, "77": { "id": "tailwind", "kind": "story" }, "78": { "id": "tailwind:background-color", "kind": "variant" }, "79": { "id": "tailwind:text-color", "kind": "variant" }, "80": { "id": "tailwind:border-color", "kind": "variant" }, "81": { "id": "tailwind:padding", "kind": "variant" }, "82": { "id": "tailwind:margin", "kind": "variant" }, "83": { "id": "tailwind:font-size", "kind": "variant" }, "84": { "id": "tailwind:font-weight", "kind": "variant" }, "85": { "id": "tailwind:font-family", "kind": "variant" }, "86": { "id": "tailwind:letter-spacing", "kind": "variant" }, "87": { "id": "tailwind:line-height", "kind": "variant" }, "88": { "id": "tailwind:drop-shadow", "kind": "variant" }, "89": { "id": "tailwind:border-radius", "kind": "variant" }, "90": { "id": "tailwind:border-width", "kind": "variant" }, "91": { "id": "tailwind:width", "kind": "variant" }, "92": { "id": "tailwind:height", "kind": "variant" }, "93": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.57d6ca1d.js"), true ? ["assets/search-docs-data.57d6ca1d.js","assets/vendor.f2e4759e.js"] : void 0);
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
