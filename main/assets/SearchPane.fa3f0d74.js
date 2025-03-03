import { d as defineComponent, u as useCssVars, r as ref, a9 as toRefs, aa as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, V as markRaw, a$ as useFocus, k as watch, b0 as refDebounced, c as computed, y as withDirectives, ac as vModelText, m as withKeys, a1 as withModifiers, _ as __vitePreload, b1 as flexsearch_bundle } from "./vendor.be48ab6a.js";
import { u as useStoryStore } from "./story.2781c492.js";
import { B as BaseEmpty } from "./BaseEmpty.f57730cd.js";
import { o as onKeyboardShortcut } from "./bundle-main.080568c1.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.4ecdfa00.js";
import "./GenericMountStory.d8f71dc1.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"l":[0,1,2,7,8,36,37,38,39,40,70,71,72,73,74,75,76,77,78,79,80,81,82,83],"le":[0,1,2,7,8,36,37,38,39,40,70,71,72,73,74,75,76,77,78,79,80,81,82,83],"lek":[0,1,2],"leka":[0,1,2],"lekal":[0,1,2],"m":[3,4],"me":[3,4],"met":[3,4],"metf":[3,4],"metfo":[3,4],"metfor":[3,4],"metfork":[3,4],"t":[5,6,9,10,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"tr":[5,6],"tra":[5,6],"traf":[5,6],"trafe":[5,6],"trafel":[5,6],"lem":[7,8,36,37,38,39,40,70,71,72,73,74,75,76,77,78,79,80,81,82,83],"leme":[7,8,70,71,72,73,74,75,76,77,78,79,80,81,82,83],"te":[9,10],"ter":[9,10],"term":[9,10],"termo":[9,10],"termom":[9,10],"termome":[9,10],"termomet":[9,10],"termomete":[9,10],"termometer":[9,10],"e":[11,12],"et":[11,12],"ete":[11,12],"etem":[11,12],"s":[13,14],"se":[13,14],"ser":[13,14],"serf":[13,14],"serfe":[13,14],"serfek":[13,14],"serfeke":[13,14],"serfekes":[13,14],"o":[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,41,42,43,44,45,46,47,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69],"lemk":[36,37,38,39,40],"of":[46,47],"ofe":[46,47],"ofer":[46,47],"oferf":[46,47],"oferfl":[46,47],"oferflo":[46,47],"oferflof":[46,47],"p":[48,49,50,51,52],"pa":[48,49,50,51,52],"pam":[48,49,50,51,52],"pame":[48,49,50,51,52],"pamel":[48,49,50,51,52],"op":[57,58,59],"opl":[57,58,59],"opla":[57,58,59],"oplam":[57,58,59],"oplame":[57,58,59],"oplamem":[57,58,59],"oplamemk":[57,58,59],"ta":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"tal":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talf":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talfe":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talfem":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talfemt":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]},{"lem":[0,1,2,32,33,34,35,94],"lemk":[0,1,2],"lemks":[0,1,2],"f":[3,4,7,8,36,37,55,56,90,91,92,98,100],"fe":[3,4,7,8,98],"fek":[3,4,7,8],"feko":[3,4,7,8],"fekor":[3,4,7,8],"fekore":[3,4,7,8],"fekores":[3,4],"te":[5,6,62,63,64,86],"tem":[5,6,62,63,64],"teme":[5,6,62,63,64],"s":[9,10,60,61],"st":[9,10,13,14,60,61],"sta":[9,10,13,14,60,61],"stat":[9,10,13,14,60,61],"state":[9,10,13,14,60,61],"stateo":[9,10,13,14,60,61],"stateom":[9,10,13,14,60,61],"stateoms":[9,10],"p":[11,12,15,16,17,18,19,20,21,22,23,24,25,26,27,38,39,40,53,54,70,71,72,73,74,75,76,77,78,85,87,88,96,97],"po":[11,12,15,16,17,18,19,20,21,22,23,24,25,26,27,70,71,72,73,74,75,76,77,78,87,96,97],"pot":[15,16,17,18,19,20,21,22,23,24,25,26,27,70,71,72,73,74,75,76,77,78],"poto":[15,16,17,18,19,20,21,22,23,24,25,26,27,70,71,72,73,74,75,76,77,78],"potom":[15,16,17,18,19,20,21,22,23,24,25,26,27,70,71,72,73,74,75,76,77,78],"e":[28,29,30,31,79,80,81,82,83,99],"ek":[28,29,30,31,79,80,81,82,83,99],"eko":[28,29,30,31,79,80,81,82,83],"ekom":[28,29,30,31,79,80,81,82,83],"l":[32,33,34,35,57,58,59,93,94],"le":[32,33,34,35,57,58,59,93,94],"leme":[32,33,34,35,94],"fo":[36,37,55,56,90,91,92,100],"fot":[36,37,55,56],"fote":[36,37],"foter":[36,37],"pr":[38,39,40],"pre":[38,39,40],"prem":[38,39,40],"prema":[38,39,40],"premar":[38,39,40],"premare":[38,39,40],"m":[41,42,43,44,45,89],"me":[41,42,43,44,45],"met":[41,42,43,44,45],"metf":[41,42,43,44,45],"metfo":[41,42,43,44,45],"metfor":[41,42,43,44,45],"metfork":[41,42,43,44,45],"k":[46,47,48,49,50,51,52],"ko":[46,47,48,49,50,51,52],"kom":[46,47,48,49,50,51,52],"komt":[46,47,48,49,50,51,52],"komta":[46,47],"komtam":[46,47],"komtame":[46,47],"komtamer":[46,47],"komtr":[48,49,50,51,52],"komtro":[48,49,50,51,52],"komtrol":[48,49,50,51,52],"pa":[53,54,85,88],"par":[53,54],"park":[53,54],"parke":[53,54],"parkem":[53,54],"parkemk":[53,54],"foto":[55,56],"lek":[57,58,59],"leke":[57,58,59],"lekem":[57,58,59],"lekemt":[57,58,59],"t":[62,63,64,65,66,67,68,69],"temel":[62,63,64],"temele":[62,63,64],"temelem":[62,63,64],"temeleme":[62,63,64],"tr":[65,66,67,68,69,95],"tra":[65,66,67,68,69],"tram":[65,66],"tramp":[65,66],"trampo":[65,66],"trampos":[65,66],"traf":[67,68,69],"trafe":[67,68,69],"trafel":[67,68,69],"potoms":[70,71,72,73,74,75,76,77,78],"pak":[85],"pakr":[85],"pakro":[85],"pakrom":[85],"pakromt":[85],"tes":[86],"test":[86],"por":[87,96,97],"port":[87,96,97],"porte":[87,96,97],"porter":[87,96,97],"pat":[88],"pate":[88],"patem":[88],"patemk":[88],"ma":[89],"mar":[89],"mark":[89],"marke":[89],"markem":[89],"fom":[90,91,92],"fomt":[90,91,92],"let":[93],"lete":[93],"leter":[93],"tro":[95],"trop":[95],"fet":[98],"ekt":[99],"fol":[100]},{"t":[1,4,8,14,32,33,37,39,47,71,72,73,74,75,76,77,78],"te":[1,4,8,14,32,33,37,39,47,65,66,67,68,69],"tef":[1,4,6,8,10,14,37,39],"tefa":[1,4,6,8,10,14,37,39],"tefao":[1,4,6,8,10,14,37,39],"tefaol":[1,4,6,8,10,14,37,39],"tefaolt":[1,4,6,8,10,14,37,39],"m":[2,81],"me":[2,81],"meo":[2],"meot":[2],"meotr":[2],"meotra":[2],"meotral":[2],"f":[16,17,18,25,41,42,43,44,45,64,97],"fl":[16,17,18,25],"flo":[16,17,18,25],"floa":[16,17,18,25],"float":[16,17,18,25],"floate":[16,17,18,25],"floatem":[16,17,18,25],"floatemk":[16,17,18,25],"pr":[19,20,21,26],"pre":[19,20,21,26],"prem":[19,20,21,26],"prema":[19,20,21,26],"premar":[19,20,21,26],"premare":[19,20,21,26],"s":[22,23,24,27,80,90,93,95],"se":[22,23,24,27,90],"sek":[22,23,24,27],"seko":[22,23,24,27],"sekom":[22,23,24,27],"sekomt":[22,23,24,27],"sekomta":[22,23,24,27],"sekomtar":[22,23,24,27],"sekomtare":[22,23,24,27],"p":[28,29,30,31],"po":[28,29,30,31,48,49,50,51,52],"pot":[28,29,30,31,48,49,50,51,52],"poto":[28,29,30,31,48,49,50,51,52],"potom":[28,29,30,31,48,49,50,51,52],"tes":[32,33,47],"tesk":[32,33],"teskr":[32,33],"teskre":[32,33],"teskrep":[32,33],"teskrept":[32,33],"teskrepte":[32,33],"teskrepteo":[32,33],"teskrepteom":[32,33],"e":[34,35,53,54,60,61,94],"ea":[34,35,60,61],"eat":[34,35,60,61],"eate":[34,35,60,61],"eater":[34,35,60,61],"r":[40,96],"re":[40],"ret":[40],"fe":[41,42,43,44,45,64,91,97],"fek":[41,42,43,44,45,91],"feko":[41,42,43,44,45],"fekor":[41,42,43,44,45],"fekore":[41,42,43,44,45],"test":[47],"em":[53,54],"emf":[53,54],"emfo":[53,54],"emfor":[53,54],"emform":[53,54],"emforma":[53,54],"emformat":[53,54],"emformate":[53,54],"emformateo":[53,54],"emformateom":[53,54],"k":[55,56,63,85,86,87,100],"ka":[55,56],"kal":[55,56],"kale":[55,56],"kaler":[55,56],"kalere":[55,56],"a":[58],"al":[58],"om":[59],"ome":[59],"ko":[63,85,86,87,100],"kor":[63],"kore":[63],"korem":[63],"koremt":[63],"fet":[64,97],"tet":[65,66],"tetl":[65,66],"tetle":[65,66],"tem":[67,68,69],"teme":[67,68,69],"t1":[71,75],"t2":[72,76],"t3":[73,77],"t4":[74,78],"sm":[80],"sma":[80],"smal":[80],"met":[81],"mete":[81],"meteo":[81],"meteom":[81],"la":[82],"lar":[82],"lark":[82],"larke":[82],"es":[83],"est":[83],"estr":[83],"estra":[83],"kol":[85,86,87],"kolo":[85,86,87],"kolor":[85,86,87],"ses":[90],"sese":[90],"fekt":[91],"fa":[92],"fam":[92],"fame":[92],"famel":[92],"famele":[92],"sp":[93],"spa":[93],"spak":[93],"spake":[93],"spakem":[93],"spakemk":[93],"ek":[94],"ekt":[94],"sa":[95],"sat":[95],"sato":[95],"satof":[95],"ra":[96],"rat":[96],"rate":[96],"rateo":[96],"rateos":[96],"kom":[100],"komf":[100],"komfe":[100],"komfek":[100]},{"6":[40],"9":[2],"60":[40],"90":[2],"k":[1,39,68,69],"ko":[1,39,68,69],"kol":[1,39,68,69],"kolo":[1,39,68,69],"kolor":[1,39,68,69],"t":[12,18,21,24,29,35,54,56,61],"te":[12,18,21,24,29,35,54,56,61],"tef":[12,33,35,54,56,61,64,66],"tefa":[12,33,35,54,56,61,66],"tefao":[12,33,35,54,56,61,66],"tefaol":[12,33,35,54,56,61,66],"tefaolt":[12,33,35,54,56,61,66],"e":[16,17,19,20,22,23,75,76,77,78],"ek":[16,17,19,20,22,23],"eko":[16,17,19,20,22,23],"ekom":[16,17,19,20,22,23],"tes":[18,21,24,29],"test":[18,21,24,29],"s":[25,26,58,59],"sm":[25,26,27],"sma":[25,26,27],"smal":[25,26,27],"mo":[43],"l":[44,45],"le":[44,45],"lem":[44,45],"leme":[44,45],"a":[49,50,51,52,71,72,73,74],"at":[49,50,51,52],"ata":[49,50,51,52],"atak":[49,50,51,52],"atake":[49,50,51,52],"ataket":[49,50,51,52],"se":[58,59],"sel":[58,59],"sele":[58,59],"selek":[58,59],"selekt":[58,59],"selekte":[58,59],"selektet":[58,59],"tefr":[64],"tefre":[64],"tefrem":[64],"tefremt":[64],"kolore":[68,69],"koloret":[68,69],"ak":[71,72,73,74],"akt":[71,72,73,74],"akte":[71,72,73,74],"aktef":[71,72,73,74],"aktefe":[71,72,73,74],"em":[75,76,77,78],"ema":[75,76,77,78],"emak":[75,76,77,78],"emakt":[75,76,77,78],"emakte":[75,76,77,78],"emaktef":[75,76,77,78],"emaktefe":[75,76,77,78],"la":[83],"lar":[83],"lark":[83],"larke":[83]},{"t":[16,17,19,20,22,23,49,50,51,52],"te":[16,17,19,20,22,23],"tes":[16,17,19,20,22,23],"test":[16,17,19,20,22,23],"a":[31],"am":[31],"amt":[31],"om":[43],"ome":[43],"omet":[43],"to":[49,50,51,52],"e":[64],"et":[64],"ete":[64],"etem":[64],"etems":[64],"f":[69],"fa":[69],"fal":[69],"fals":[69],"false":[69],"m":[71,74,76,77],"mo":[71,74,76,77],"k":[72,73,75,78],"ke":[72,73,75,78],"kef":[72,73,75,78],"kefr":[72,73,75,78],"kefro":[72,73,75,78],"kefrom":[72,73,75,78]},{"m":[16,19,22],"mo":[16,19,22,42,44],"mot":[16,19,22],"mote":[16,19,22],"motef":[16,19,22],"t":[31],"te":[31],"tes":[31],"test":[31],"p":[45],"pl":[45],"pla":[45],"plam":[45],"l":[49,50],"le":[49,50],"lef":[49,50],"left":[49,50],"k":[71,74,76,77],"ke":[71,74,76,77],"kef":[71,74,76,77],"kefr":[71,74,76,77],"kefro":[71,74,76,77],"kefrom":[71,74,76,77]},{"e":[42,44],"em":[42],"emf":[42],"emfo":[42],"ek":[44],"eko":[44],"ekom":[44],"o":[49,51],"op":[49,51],"ope":[49,51],"opem":[49,51],"kl":[50,52],"klo":[50,52],"klos":[50,52],"klose":[50,52],"kloset":[50,52]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-legallink-story-vue", "kind": "story" }, "1": { "id": "src-components-home-legallink-story-vue:src-components-home-legallink-story-vue-0", "kind": "variant" }, "2": { "id": "src-components-home-legallink-story-vue:src-components-home-legallink-story-vue-1", "kind": "variant" }, "3": { "id": "src-components-home-networkfigures-story-vue", "kind": "story" }, "4": { "id": "src-components-home-networkfigures-story-vue:_default", "kind": "variant" }, "5": { "id": "src-components-home-traveltimes-story-vue", "kind": "story" }, "6": { "id": "src-components-home-traveltimes-story-vue:_default", "kind": "variant" }, "7": { "id": "src-components-line-linefigures-story-vue", "kind": "story" }, "8": { "id": "src-components-line-linefigures-story-vue:_default", "kind": "variant" }, "9": { "id": "src-components-line-thermometerstations-story-vue", "kind": "story" }, "10": { "id": "src-components-line-thermometerstations-story-vue:_default", "kind": "variant" }, "11": { "id": "src-components-station-itempoi-story-vue", "kind": "story" }, "12": { "id": "src-components-station-itempoi-story-vue:_default", "kind": "variant" }, "13": { "id": "src-components-station-servicesstation-story-vue", "kind": "story" }, "14": { "id": "src-components-station-servicesstation-story-vue:_default", "kind": "variant" }, "15": { "id": "src-components-ui-uibutton-story-vue", "kind": "story" }, "16": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-0", "kind": "variant" }, "17": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-1", "kind": "variant" }, "18": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-2", "kind": "variant" }, "19": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-3", "kind": "variant" }, "20": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-4", "kind": "variant" }, "21": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-5", "kind": "variant" }, "22": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-6", "kind": "variant" }, "23": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-7", "kind": "variant" }, "24": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-8", "kind": "variant" }, "25": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-9", "kind": "variant" }, "26": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-10", "kind": "variant" }, "27": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-11", "kind": "variant" }, "28": { "id": "src-components-ui-uiiconbutton-story-vue", "kind": "story" }, "29": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-0", "kind": "variant" }, "30": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-1", "kind": "variant" }, "31": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-2", "kind": "variant" }, "32": { "id": "src-components-ui-uilinedescription-story-vue", "kind": "story" }, "33": { "id": "src-components-ui-uilinedescription-story-vue:_default", "kind": "variant" }, "34": { "id": "src-components-ui-uilineheader-story-vue", "kind": "story" }, "35": { "id": "src-components-ui-uilineheader-story-vue:_default", "kind": "variant" }, "36": { "id": "src-components-ui-uilinkfooter-story-vue", "kind": "story" }, "37": { "id": "src-components-ui-uilinkfooter-story-vue:_default", "kind": "variant" }, "38": { "id": "src-components-ui-uilinkprimary-story-vue", "kind": "story" }, "39": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-0", "kind": "variant" }, "40": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-1", "kind": "variant" }, "41": { "id": "src-components-ui-uinetworkfigure-story-vue", "kind": "story" }, "42": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-0", "kind": "variant" }, "43": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-1", "kind": "variant" }, "44": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-2", "kind": "variant" }, "45": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-3", "kind": "variant" }, "46": { "id": "src-components-ui-uioverflowcontainer-story-vue", "kind": "story" }, "47": { "id": "src-components-ui-uioverflowcontainer-story-vue:src-components-ui-uioverflowcontainer-story-vue-0", "kind": "variant" }, "48": { "id": "src-components-ui-uipanelcontrolbutton-story-vue", "kind": "story" }, "49": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-0", "kind": "variant" }, "50": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-1", "kind": "variant" }, "51": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-2", "kind": "variant" }, "52": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-3", "kind": "variant" }, "53": { "id": "src-components-ui-uiparkinginformation-story-vue", "kind": "story" }, "54": { "id": "src-components-ui-uiparkinginformation-story-vue:_default", "kind": "variant" }, "55": { "id": "src-components-ui-uiphotogalery-story-vue", "kind": "story" }, "56": { "id": "src-components-ui-uiphotogalery-story-vue:_default", "kind": "variant" }, "57": { "id": "src-components-ui-uiplanninglegend-story-vue", "kind": "story" }, "58": { "id": "src-components-ui-uiplanninglegend-story-vue:src-components-ui-uiplanninglegend-story-vue-0", "kind": "variant" }, "59": { "id": "src-components-ui-uiplanninglegend-story-vue:src-components-ui-uiplanninglegend-story-vue-1", "kind": "variant" }, "60": { "id": "src-components-ui-uistationheader-story-vue", "kind": "story" }, "61": { "id": "src-components-ui-uistationheader-story-vue:_default", "kind": "variant" }, "62": { "id": "src-components-ui-uitimeline-story-vue", "kind": "story" }, "63": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-0", "kind": "variant" }, "64": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-1", "kind": "variant" }, "65": { "id": "src-components-ui-uitrambustitle-story-vue", "kind": "story" }, "66": { "id": "src-components-ui-uitrambustitle-story-vue:_default", "kind": "variant" }, "67": { "id": "src-components-ui-uitraveltime-story-vue", "kind": "story" }, "68": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-0", "kind": "variant" }, "69": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-1", "kind": "variant" }, "70": { "id": "src-components-map-buttons-uilinebutton-story-vue", "kind": "story" }, "71": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-0", "kind": "variant" }, "72": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-1", "kind": "variant" }, "73": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-2", "kind": "variant" }, "74": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-3", "kind": "variant" }, "75": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-4", "kind": "variant" }, "76": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-5", "kind": "variant" }, "77": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-6", "kind": "variant" }, "78": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-7", "kind": "variant" }, "79": { "id": "src-components-ui-icons-iconline-story-vue", "kind": "story" }, "80": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-0", "kind": "variant" }, "81": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-1", "kind": "variant" }, "82": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-2", "kind": "variant" }, "83": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-3", "kind": "variant" }, "84": { "id": "tailwind", "kind": "story" }, "85": { "id": "tailwind:background-color", "kind": "variant" }, "86": { "id": "tailwind:text-color", "kind": "variant" }, "87": { "id": "tailwind:border-color", "kind": "variant" }, "88": { "id": "tailwind:padding", "kind": "variant" }, "89": { "id": "tailwind:margin", "kind": "variant" }, "90": { "id": "tailwind:font-size", "kind": "variant" }, "91": { "id": "tailwind:font-weight", "kind": "variant" }, "92": { "id": "tailwind:font-family", "kind": "variant" }, "93": { "id": "tailwind:letter-spacing", "kind": "variant" }, "94": { "id": "tailwind:line-height", "kind": "variant" }, "95": { "id": "tailwind:drop-shadow", "kind": "variant" }, "96": { "id": "tailwind:border-radius", "kind": "variant" }, "97": { "id": "tailwind:border-width", "kind": "variant" }, "98": { "id": "tailwind:width", "kind": "variant" }, "99": { "id": "tailwind:height", "kind": "variant" }, "100": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.60dedc1e.js"), true ? ["assets/search-docs-data.60dedc1e.js","assets/vendor.be48ab6a.js"] : void 0);
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
