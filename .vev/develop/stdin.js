var packageBuild = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // globals:react
  var require_react = __commonJS({
    "globals:react"(exports, module) {
      module.exports = React;
    }
  });

  // globals:@vev/react
  var require_react2 = __commonJS({
    "globals:@vev/react"(exports, module) {
      module.exports = Vev;
    }
  });

  // src/____index.js
  var index_exports = {};
  __export(index_exports, {
    ModularTitleHero: () => ModularTitleHero_default2
  });

  // src/ModularTitleHero.jsx
  var import_react = __toESM(require_react());
  var import_react2 = __toESM(require_react2());

  // src/ModularTitleHero.module.css
  var ModularTitleHero_default = { "heroContainer": "heroContainer__ModularTitleHero", "contentWrapper": "contentWrapper__ModularTitleHero", "titleContainer": "titleContainer__ModularTitleHero", "title": "title__ModularTitleHero", "titlePart": "titlePart__ModularTitleHero", "fromLeft": "fromLeft__ModularTitleHero", "fromRight": "fromRight__ModularTitleHero", "fromBottom": "fromBottom__ModularTitleHero", "visible": "visible__ModularTitleHero", "ingress": "ingress__ModularTitleHero", "imageContainer": "imageContainer__ModularTitleHero", "heroImage": "heroImage__ModularTitleHero", "imageOverlay": "imageOverlay__ModularTitleHero" };

  // src/ModularTitleHero.jsx
  var ModularTitleHero = /* @__PURE__ */ __name(({
    titlePart1 = "Denne tjenesten",
    titlePart2 = "revolusjonerer",
    titlePart3 = "reisehverdagen for bedrifter",
    ingress = "For innkj\xF8psorganisasjonen Agrikj\xF8p er god kontroll p\xE5 forretningsreiser et viktig ansvar. Med n\xE6rmere 60.000 ansatte i medlemsbedrifter som Tine, Nortura og Felleskj\xF8pet, blir det mange reiser \xE5 holde styr p\xE5.",
    heroImage = null,
    animationDelay = 0.5,
    backgroundColor = "#f8f9fa",
    textColor = "#333333",
    accentColor = "#2563eb",
    paddingTop = 100,
    paddingBottom = 100,
    overlayOpacity = 0.7
  }) => {
    const [titleVisible, setTitleVisible] = (0, import_react.useState)({
      part1: false,
      part2: false,
      part3: false,
      ingress: false
    });
    (0, import_react.useEffect)(() => {
      const timer1 = setTimeout(() => setTitleVisible((prev) => ({ ...prev, part1: true })), animationDelay * 1e3);
      const timer2 = setTimeout(() => setTitleVisible((prev) => ({ ...prev, part2: true })), (animationDelay + 0.8) * 1e3);
      const timer3 = setTimeout(() => setTitleVisible((prev) => ({ ...prev, part3: true })), (animationDelay + 1.6) * 1e3);
      const timer4 = setTimeout(() => setTitleVisible((prev) => ({ ...prev, ingress: true })), (animationDelay + 2.8) * 1e3);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }, [animationDelay]);
    const getRGBA = /* @__PURE__ */ __name((hex, opacity) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }, "getRGBA");
    const formatWithLineBreaks = /* @__PURE__ */ __name((text) => {
      return text.split("\n").map(
        (line, index, array) => index === array.length - 1 ? line : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, { key: index }, line, /* @__PURE__ */ import_react.default.createElement("br", null))
      );
    }, "formatWithLineBreaks");
    return /* @__PURE__ */ import_react.default.createElement(
      "section",
      {
        className: ModularTitleHero_default.heroContainer,
        style: {
          backgroundColor,
          paddingTop,
          paddingBottom
        }
      },
      heroImage && /* @__PURE__ */ import_react.default.createElement("div", { className: ModularTitleHero_default.imageContainer }, /* @__PURE__ */ import_react.default.createElement(
        import_react2.Image,
        {
          src: heroImage,
          className: ModularTitleHero_default.heroImage
        }
      ), /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          className: ModularTitleHero_default.imageOverlay,
          style: { backgroundColor: getRGBA(backgroundColor, overlayOpacity) }
        }
      )),
      /* @__PURE__ */ import_react.default.createElement("div", { className: ModularTitleHero_default.contentWrapper }, /* @__PURE__ */ import_react.default.createElement("div", { className: ModularTitleHero_default.titleContainer }, /* @__PURE__ */ import_react.default.createElement("h1", { className: ModularTitleHero_default.title }, /* @__PURE__ */ import_react.default.createElement(
        "span",
        {
          className: `${ModularTitleHero_default.titlePart} ${titleVisible.part1 ? ModularTitleHero_default.visible : ""} ${ModularTitleHero_default.fromLeft}`,
          style: { color: textColor }
        },
        titlePart1
      ), /* @__PURE__ */ import_react.default.createElement(
        "span",
        {
          className: `${ModularTitleHero_default.titlePart} ${titleVisible.part2 ? ModularTitleHero_default.visible : ""} ${ModularTitleHero_default.fromRight}`,
          style: { color: accentColor }
        },
        titlePart2
      ), /* @__PURE__ */ import_react.default.createElement(
        "span",
        {
          className: `${ModularTitleHero_default.titlePart} ${titleVisible.part3 ? ModularTitleHero_default.visible : ""} ${ModularTitleHero_default.fromBottom}`,
          style: { color: textColor }
        },
        titlePart3
      )), /* @__PURE__ */ import_react.default.createElement(
        "p",
        {
          className: `${ModularTitleHero_default.ingress} ${titleVisible.ingress ? ModularTitleHero_default.visible : ""}`,
          style: { color: textColor }
        },
        formatWithLineBreaks(ingress)
      )))
    );
  }, "ModularTitleHero");
  (0, import_react2.registerVevComponent)(ModularTitleHero, {
    name: "Modular Title Hero",
    type: "section",
    props: [
      {
        name: "titlePart1",
        type: "string",
        title: "Tittel del 1",
        initialValue: "Denne tjenesten"
      },
      {
        name: "titlePart2",
        type: "string",
        title: "Tittel del 2",
        initialValue: "revolusjonerer"
      },
      {
        name: "titlePart3",
        type: "string",
        title: "Tittel del 3",
        initialValue: "reisehverdagen for bedrifter"
      },
      {
        name: "ingress",
        type: "string",
        title: "Ingress",
        options: {
          multiline: true
        },
        initialValue: "For innkj\xF8psorganisasjonen Agrikj\xF8p er god kontroll p\xE5 forretningsreiser et viktig ansvar. Med n\xE6rmere 60.000 ansatte i medlemsbedrifter som Tine, Nortura og Felleskj\xF8pet, blir det mange reiser \xE5 holde styr p\xE5."
      },
      {
        name: "heroImage",
        type: "image",
        title: "Hero-bilde"
      },
      {
        name: "animationDelay",
        type: "number",
        title: "Forsinkelse for animasjon (sekunder)",
        initialValue: 0.5
      },
      {
        name: "backgroundColor",
        type: "string",
        title: "Bakgrunnsfarge",
        initialValue: "#f8f9fa"
      },
      {
        name: "textColor",
        type: "string",
        title: "Tekstfarge",
        initialValue: "#333333"
      },
      {
        name: "accentColor",
        type: "string",
        title: "Aksentfarge (for tittel del 2)",
        initialValue: "#2563eb"
      },
      {
        name: "overlayOpacity",
        type: "number",
        title: "Opacity p\xE5 overlay (0-1)",
        initialValue: 0.7,
        options: {
          min: 0,
          max: 1,
          step: 0.1
        }
      },
      {
        name: "paddingTop",
        type: "number",
        title: "Padding Topp (px)",
        initialValue: 100
      },
      {
        name: "paddingBottom",
        type: "number",
        title: "Padding Bunn (px)",
        initialValue: 100
      }
    ],
    editableCSS: [
      {
        selector: ModularTitleHero_default.heroContainer,
        properties: ["background"]
      },
      {
        selector: ModularTitleHero_default.contentWrapper,
        properties: ["max-width", "padding"]
      },
      {
        selector: ModularTitleHero_default.titleContainer,
        properties: ["padding", "margin"]
      },
      {
        selector: ModularTitleHero_default.title,
        properties: ["font-family", "font-size", "line-height", "margin", "display", "font-weight", "font-style"]
      },
      {
        selector: ModularTitleHero_default.titlePart,
        properties: ["font-family", "font-weight", "margin-bottom", "font-style"]
      },
      {
        selector: ModularTitleHero_default.ingress,
        properties: ["font-family", "font-size", "line-height", "margin", "max-width", "font-weight", "font-style"]
      },
      {
        selector: ModularTitleHero_default.imageContainer,
        properties: ["max-height", "border-radius", "overflow"]
      }
    ]
  });
  var ModularTitleHero_default2 = ModularTitleHero;
  return __toCommonJS(index_exports);
})();
