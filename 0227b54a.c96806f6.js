(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(124)),i={id:"field-workers",title:"Field Workers"},s={unversionedId:"use-cases/field-workers",id:"use-cases/field-workers",isDocsHomePage:!1,title:"Field Workers",description:"- description:",source:"@site/docs/use-cases/field-workers.md",slug:"/use-cases/field-workers",permalink:"/docs/use-cases/field-workers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/use-cases/field-workers.md",version:"current",sidebar:"docsSidebar",previous:{title:"Local Information",permalink:"/docs/use-cases/local-information"},next:{title:"Smart Home",permalink:"/docs/use-cases/smart-home"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"description:"),Object(o.b)("p",{parentName:"li"},"workers on a cargo ship or an oil rig, farmers in rural areas, development aid workers, military personnel in remote locations all benefit from a computing infrastructure that helps them locally;\nbasic functions like recording observations, communicating them and about them, handing off processes and their data to another device or person")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"techniques:"),Object(o.b)("p",{parentName:"li"},"DDD, event sourcing, edge computing, peer-to-peer, distributed event log")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"types of data:"),Object(o.b)("p",{parentName:"li"},"generated at various places by sensors, machines, humans; may be controlled by the business in whose context the data arise, otherwise controlled by their creator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"expected connectivity:"),Object(o.b)("p",{parentName:"li"},"only local connectivity needed for parties working together, passing data along with physical objects and processes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"stay responsive:"),Object(o.b)("p",{parentName:"li"},"the local process must always be working, non-local failures are not tolerable (reduce resilience);\nit needs to feel like a local standalone app with the addition of seeing data from other sources and sharing data with them;\nthis is achieved by keeping needed process data on the local device and allowing read/write interaction at all times, then synchronising with other devices whenever possible")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"local communication:"),Object(o.b)("p",{parentName:"li"},"communication is necessary only between participants in a given process, e.g. a human collecting buffered data from a field sensor and annotating it with contextual information;\nthese are close to each other which allows direct communication links to be used;\nwhen needed to communicate over longer distances, like providing an asynchronous overview to an observer elsewhere, events are relayed from one participant to the next (could in important cases also use satellite links when affordable)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"accept uncertainty:"),Object(o.b)("p",{parentName:"li"},"if the interaction model is \u201cas if it were pure humans\u201d then there is no issue: the same potential for conflicts and the same mitigation or compensation strategies apply; otherwise it may be extremely costly to establish consensus in an environment where communication is only sporadically possible")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"assert autonomy:"),Object(o.b)("p",{parentName:"li"},"the key to staying responsive on local devices is to allow local decisions based on incomplete but understandable knowledge: stick to well-documented data formats when publishing events, prefer sending events over sending state to allow other devices to derive the state they need")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"handle dynamics:"),Object(o.b)("p",{parentName:"li"},"the basic principle is to outfit each participant with a computing device that is capable of handling the locally needed processes, this way the system is inherently scalable to any number of participants")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"tailor consistency:"),Object(o.b)("p",{parentName:"li"},"the system is already useful when it does not provide decisions but only records them, and for this no coordination is needed;\nit is very helpful to record causality information, though, so that the interpretation of recorded data can reconstitute the local state that was present when the event was written"))))}p.isMDXComponent=!0}}]);