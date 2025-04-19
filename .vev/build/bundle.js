System.register("GwLOVali0VvGi8N7Whr2", ["react", "react-dom", "vev"], function (exports) {
  "use strict";
  var global = {};
  const ReactDOM = {};
  var ReactRouterDOM = {};
  var Vev = {};
  var Silke = {};
  return {
    setters: [
      function (module) {},
      function (module) {
        Object.assign(ReactDOM, module);
      },
      function (module) {
        Vev.registerVevComponent = () => undefined;
        Vev.Image = module.Image;
      },
    ],
    execute: function () {
      var packageBuild=(()=>{var B=Object.create;var u=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var V=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty;var _=(e,t)=>u(e,"name",{value:t,configurable:!0});var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),O=(e,t)=>{for(var a in t)u(e,a,{get:t[a],enumerable:!0})},M=(e,t,a,f)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of L(t))!W.call(e,s)&&s!==a&&u(e,s,{get:()=>t[s],enumerable:!(f=P(t,s))||f.enumerable});return e};var b=(e,t,a)=>(a=e!=null?B(V(e)):{},M(t||!e||!e.__esModule?u(a,"default",{value:e,enumerable:!0}):a,e)),A=e=>M(u({},"__esModule",{value:!0}),e);var $=E((w,H)=>{H.exports=React});var h=E((z,N)=>{N.exports=Vev});var S={};O(S,{ModularTitleHero:()=>C});var o=b($()),y=b(h());var r={heroContainer:"heroContainer__ModularTitleHero",contentWrapper:"contentWrapper__ModularTitleHero",titleContainer:"titleContainer__ModularTitleHero",title:"title__ModularTitleHero",titlePart:"titlePart__ModularTitleHero",fromLeft:"fromLeft__ModularTitleHero",fromRight:"fromRight__ModularTitleHero",fromBottom:"fromBottom__ModularTitleHero",visible:"visible__ModularTitleHero",ingress:"ingress__ModularTitleHero",imageContainer:"imageContainer__ModularTitleHero",heroImage:"heroImage__ModularTitleHero",imageOverlay:"imageOverlay__ModularTitleHero"};var G=_(({titlePart1:e="Denne tjenesten",titlePart2:t="revolusjonerer",titlePart3:a="reisehverdagen for bedrifter",ingress:f="For innkj\xF8psorganisasjonen Agrikj\xF8p er god kontroll p\xE5 forretningsreiser et viktig ansvar. Med n\xE6rmere 60.000 ansatte i medlemsbedrifter som Tine, Nortura og Felleskj\xF8pet, blir det mange reiser \xE5 holde styr p\xE5.",heroImage:s=null,animationDelay:c=.5,backgroundColor:v="#f8f9fa",textColor:T="#333333",accentColor:k="#2563eb",paddingTop:x=100,paddingBottom:j=100,overlayOpacity:F=.7})=>{let[g,d]=(0,o.useState)({part1:!1,part2:!1,part3:!1,ingress:!1});(0,o.useEffect)(()=>{let i=setTimeout(()=>d(l=>({...l,part1:!0})),c*1e3),n=setTimeout(()=>d(l=>({...l,part2:!0})),(c+.8)*1e3),m=setTimeout(()=>d(l=>({...l,part3:!0})),(c+1.6)*1e3),p=setTimeout(()=>d(l=>({...l,ingress:!0})),(c+2.8)*1e3);return()=>{clearTimeout(i),clearTimeout(n),clearTimeout(m),clearTimeout(p)}},[c]);let I=_((i,n)=>{let m=parseInt(i.slice(1,3),16),p=parseInt(i.slice(3,5),16),l=parseInt(i.slice(5,7),16);return`rgba(${m}, ${p}, ${l}, ${n})`},"getRGBA"),R=_(i=>i.split(`
`).map((n,m,p)=>m===p.length-1?n:o.default.createElement(o.default.Fragment,{key:m},n,o.default.createElement("br",null))),"formatWithLineBreaks");return o.default.createElement("section",{className:r.heroContainer,style:{backgroundColor:v,paddingTop:x,paddingBottom:j}},s&&o.default.createElement("div",{className:r.imageContainer},o.default.createElement(y.Image,{src:s,className:r.heroImage}),o.default.createElement("div",{className:r.imageOverlay,style:{backgroundColor:I(v,F)}})),o.default.createElement("div",{className:r.contentWrapper},o.default.createElement("div",{className:r.titleContainer},o.default.createElement("h1",{className:r.title},o.default.createElement("span",{className:`${r.titlePart} ${g.part1?r.visible:""} ${r.fromLeft}`,style:{color:T}},e),o.default.createElement("span",{className:`${r.titlePart} ${g.part2?r.visible:""} ${r.fromRight}`,style:{color:k}},t),o.default.createElement("span",{className:`${r.titlePart} ${g.part3?r.visible:""} ${r.fromBottom}`,style:{color:T}},a)),o.default.createElement("p",{className:`${r.ingress} ${g.ingress?r.visible:""}`,style:{color:T}},R(f)))))},"ModularTitleHero"),C=G;return A(S);})();

      exports("GwLOVali0VvGi8N7Whr2_ModularTitleHero", packageBuild.ModularTitleHero);
    },
  };
});
//# sourceMappingURL=http://localhost:9876/stdin.js.map