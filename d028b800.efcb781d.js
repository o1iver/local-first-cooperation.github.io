(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),i=(n(0),n(124)),a={id:"autonomy",title:"Build Autonomous Parts"},c={unversionedId:"principles/autonomy",id:"principles/autonomy",isDocsHomePage:!1,title:"Build Autonomous Parts",description:"The ultimate goal of local-first cooperation is to obtain a system that is maximally useful, even under adverse conditions.",source:"@site/docs/principles/autonomy.md",slug:"/principles/autonomy",permalink:"/docs/principles/autonomy",editUrl:"https://github.com/local-first-cooperation/local-first-cooperation.github.io/edit/master/docs/principles/autonomy.md",version:"current",sidebar:"docsSidebar",previous:{title:"Communicate locally",permalink:"/docs/principles/communicate-locally"},next:{title:"Design Parts for Cooperation",permalink:"/docs/principles/cooperation"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ultimate goal of local-first cooperation is to obtain a system that is maximally useful, even under adverse conditions.\nAs long as one computing device is functioning, the apps on it shall be usable:\nwhile new information from other devices cannot be received, the user can still view the stored data and register new information or interact with locally modelled workflows.\nAs soon as a second functioning edge device comes into communication range, information can flow between them and allow inter-device workflows to be used, for example for the collaboration between their users."),Object(i.b)("p",null,"This is achieved by designing each part to assert its own autonomy, claim ownership of its local data, and function independently of everything else.\nSuch independence can only be achieved by using suitable communication protocols between the parts, meaning foremost between the computing devices.\nFrom an application developer\u2019s view it should always be possible to send data, where buffering is used in case the recipient can momentarily not be reached.\nSimilarly, reception of new data should be processed in an event-driven fashion, since the application developer cannot foresee when the transfer will occur\u200a\u2014\u200athey can only describe how the data shall be interpreted."),Object(i.b)("p",null,"The second part of this autonomy rests on the assumption of clearly defined data formats that are known to both the sender and the recipient.\nInternal data models may change at any time, but externally transferred data have more longevity precisely due to the autonomy of the recipients:\nit may well be that the information is interpreted at a much later point in time, when the software on the participating devices has undergone multiple version updates."),Object(i.b)("p",null,"This is to say that the collaboration with other edge devices must not be required for useful function, but of course it lies in the nature of some application functions that they are less useful while there are no communication partners."),Object(i.b)("p",null,"On the other hand, Edge Native applications are ultimately built for collaboration, they are not expected to be used without communication partners indefinitely. Therefore, such an application is coded with a focus on how information will be exchanged with other devices, collaboration is baked into it."),Object(i.b)("p",null,"An Edge Native application is capable of but not constantly tied to communication."))}u.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);