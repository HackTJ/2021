/*! For license information please see 5.c0b99bf0.chunk.js.LICENSE.txt */
(this["webpackJsonphacktj-2021"]=this["webpackJsonphacktj-2021"]||[]).push([[5],{172:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(34),c=a(0),o=a.n(c),s=a(59),i=a(60),l=a(4),u=a(31),d=a(7),f=a.n(d),b=a(29),p=a.n(b),j=a(30),g={tag:j.i,className:f.a.string,cssModule:f.a.object,innerRef:f.a.oneOfType([f.a.object,f.a.string,f.a.func])},h=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,r=e.tag,c=Object(u.a)(e,["className","cssModule","innerRef","tag"]),s=Object(j.f)(p()(t,"card-body"),a);return o.a.createElement(r,Object(l.a)({},c,{className:s,ref:n}))};h.propTypes=g,h.defaultProps={tag:"div"};var m=h,v=a(61),O={tag:j.i,className:f.a.string,cssModule:f.a.object},y=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=Object(u.a)(e,["className","cssModule","tag"]),c=Object(j.f)(p()(t,"card-subtitle"),a);return o.a.createElement(n,Object(l.a)({},r,{className:c}))};y.propTypes=O,y.defaultProps={tag:"div"};var x=y,N=(a(58),function(e){var t=e.logo,a=e.iteration,r=e.year,c=e.url,o=e.disabled,l=void 0!==o&&o;return Object(n.jsxs)(s.a,{className:"history-section",children:[Object(n.jsx)(i.a,{left:!0,src:t,style:{width:"200px",height:"200px"},alt:"HackTJ ".concat(a)}),Object(n.jsxs)(m,{className:"info-container",children:[Object(n.jsxs)(v.a,{tag:"h3",className:"section-title",children:["HackTJ ",a]}),Object(n.jsx)(x,{tag:"h4",className:"section-year",children:r}),Object(n.jsx)("a",{className:"altbutton",style:{width:"100%"},href:l?void 0:c,target:"_blank",rel:"noopener noreferrer",children:"DevPost"})]})]})}),k=Object(c.memo)(N),M={tag:j.i,className:f.a.string,cssModule:f.a.object},E=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=Object(u.a)(e,["className","cssModule","tag"]),c=Object(j.f)(p()(t,"card-deck"),a);return o.a.createElement(n,Object(l.a)({},r,{className:c}))};E.propTypes=M,E.defaultProps={tag:"div"};var T=E,w=(a(62),function(){return Object(n.jsxs)("div",{className:"centered-box relative history",children:[Object(n.jsxs)("div",{className:"header-section",children:[Object(n.jsx)("div",{className:"icon icon-clock"}),Object(n.jsx)("h3",{className:"title",children:"A Walk Through Memory Lane"})]}),Object(n.jsxs)(T,{children:[Object(n.jsx)(k,{logo:"https://raw.githubusercontent.com/HackTJ/2020/master/src/images/logo.png",iteration:"7.0",year:"2020",url:"https://hacktj2020.devpost.com/",disabled:!0}),Object(n.jsx)(k,{logo:"https://hacktj.org/2019/img/logo2.png",iteration:"6.0",year:"2019",url:"https://hacktj2019.devpost.com/"}),Object(n.jsx)(k,{logo:"https://hacktj.org/2018/img/favicon.png",iteration:"5.0",year:"2018",url:"https://hacktj2018.devpost.com/"}),Object(n.jsx)(k,{logo:"https://raw.githubusercontent.com/HackTJ/2017/gh-pages/img/favicon.png",iteration:"4.0",year:"2017",url:"https://hacktj2017.devpost.com/"}),Object(n.jsx)(k,{logo:"https://hacktj.org/2016/img/favicon.png",iteration:"3.0",year:"2016",url:"https://hacktj2016.devpost.com/"}),Object(n.jsx)(k,{logo:"https://hacktj.org/2015/img/favicon.png",iteration:"2.0",year:"2015",url:"https://hacktj2015.devpost.com/"})]})]})});t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(r.a,{}),Object(n.jsx)(w,{})]})}},29:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},30:function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return s})),a.d(t,"h",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"j",(function(){return d})),a.d(t,"i",(function(){return f})),a.d(t,"d",(function(){return b})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return j})),a.d(t,"e",(function(){return y}));var n,r=a(7),c=a.n(r);function o(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function i(e,t){for(var a,n=Array.isArray(t)?t:[t],r=n.length,c={};r>0;)c[a=n[r-=1]]=e[a];return c}var l="object"===typeof window&&window.Element||function(){};function u(e,t,a){if(!(e[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var d=c.a.oneOfType([c.a.string,c.a.func,u,c.a.shape({current:c.a.any})]),f=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]),b={Fade:150,Collapse:350,Modal:300,Carousel:600},p=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],g=!("undefined"===typeof window||!window.document||!window.document.createElement);function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function m(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function v(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!m(e))return!1;var t=h(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&g){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function O(e){return null!==e&&(Array.isArray(e)||g&&"number"===typeof e.length)}function y(e,t){var a=v(e);return t?O(a)?a:null===a?[]:[a]:O(a)?a[0]:a}},31:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},32:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},34:function(e,t,a){"use strict";var n=a(1),r=a(37),c=a(38),o=a(39),s=a(40);a(35);t.a=function(){return Object(n.jsx)(r.a,{sticky:"top",className:"navcontainer",style:{position:"sticky",top:"0px",display:"flex",flexDirection:"row",zIndex:1e3,marginBottom:"100px"},children:Object(n.jsxs)(c.a,{className:"nav justify-content-center",children:[Object(n.jsx)(o.a,{children:Object(n.jsx)(s.a,{href:"#intro",children:"Intro"})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(s.a,{href:"#faq",children:"FAQ"})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(s.a,{href:"#sponsor",children:"Sponsors"})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(s.a,{href:"#schedule",children:"Schedule"})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(s.a,{href:"#team",children:"Team"})})]})})}},35:function(e,t,a){},37:function(e,t,a){"use strict";var n=a(4),r=a(31),c=a(0),o=a.n(c),s=a(7),i=a.n(s),l=a(29),u=a.n(l),d=a(30),f={light:i.a.bool,dark:i.a.bool,full:i.a.bool,fixed:i.a.string,sticky:i.a.string,color:i.a.string,role:i.a.string,tag:d.i,className:i.a.string,cssModule:i.a.object,expand:i.a.oneOfType([i.a.bool,i.a.string])},b=function(e){var t,a=e.expand,c=e.className,s=e.cssModule,i=e.light,l=e.dark,f=e.fixed,b=e.sticky,p=e.color,j=e.tag,g=Object(r.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),h=Object(d.f)(u()(c,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(a),((t={"navbar-light":i,"navbar-dark":l})["bg-"+p]=p,t["fixed-"+f]=f,t["sticky-"+b]=b,t)),s);return o.a.createElement(j,Object(n.a)({},g,{className:h}))};b.propTypes=f,b.defaultProps={tag:"nav",expand:!1},t.a=b},38:function(e,t,a){"use strict";var n=a(4),r=a(31),c=a(0),o=a.n(c),s=a(7),i=a.n(s),l=a(29),u=a.n(l),d=a(30),f={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:d.i,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tabs,s=e.pills,i=e.vertical,l=e.horizontal,f=e.justified,b=e.fill,p=e.navbar,j=e.card,g=e.tag,h=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),m=Object(d.f)(u()(t,p?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":c,"card-header-tabs":j&&c,"nav-pills":s,"card-header-pills":j&&s,"nav-justified":f,"nav-fill":b}),a);return o.a.createElement(g,Object(n.a)({},h,{className:m}))};b.propTypes=f,b.defaultProps={tag:"ul",vertical:!1},t.a=b},39:function(e,t,a){"use strict";var n=a(4),r=a(31),c=a(0),o=a.n(c),s=a(7),i=a.n(s),l=a(29),u=a.n(l),d=a(30),f={tag:d.i,active:i.a.bool,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.active,s=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),l=Object(d.f)(u()(t,"nav-item",!!c&&"active"),a);return o.a.createElement(s,Object(n.a)({},i,{className:l}))};b.propTypes=f,b.defaultProps={tag:"li"},t.a=b},40:function(e,t,a){"use strict";var n=a(4),r=a(31),c=a(32),o=a(8),s=a(0),i=a.n(s),l=a(7),u=a.n(l),d=a(29),f=a.n(d),b=a(30),p={tag:b.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(c.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.active,o=e.tag,s=e.innerRef,l=Object(r.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(b.f)(f()(t,"nav-link",{disabled:l.disabled,active:c}),a);return i.a.createElement(o,Object(n.a)({},l,{ref:s,onClick:this.onClick,className:u}))},t}(i.a.Component);j.propTypes=p,j.defaultProps={tag:"a"},t.a=j},58:function(e,t,a){},59:function(e,t,a){"use strict";var n=a(4),r=a(31),c=a(0),o=a.n(c),s=a(7),i=a.n(s),l=a(29),u=a.n(l),d=a(30),f={tag:d.i,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var t=e.className,a=e.cssModule,c=e.color,s=e.body,i=e.inverse,l=e.outline,f=e.tag,b=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(d.f)(u()(t,"card",!!i&&"text-white",!!s&&"card-body",!!c&&(l?"border":"bg")+"-"+c),a);return o.a.createElement(f,Object(n.a)({},p,{className:j,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},60:function(e,t,a){"use strict";var n=a(4),r=a(31),c=a(0),o=a.n(c),s=a(7),i=a.n(s),l=a(29),u=a.n(l),d=a(30),f={tag:d.i,top:i.a.bool,bottom:i.a.bool,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.top,s=e.bottom,i=e.tag,l=Object(r.a)(e,["className","cssModule","top","bottom","tag"]),f="card-img";c&&(f="card-img-top"),s&&(f="card-img-bottom");var b=Object(d.f)(u()(t,f),a);return o.a.createElement(i,Object(n.a)({},l,{className:b}))};b.propTypes=f,b.defaultProps={tag:"img"},t.a=b},61:function(e,t,a){"use strict";var n=a(4),r=a(31),c=a(0),o=a.n(c),s=a(7),i=a.n(s),l=a(29),u=a.n(l),d=a(30),f={tag:d.i,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.f)(u()(t,"card-title"),a);return o.a.createElement(c,Object(n.a)({},s,{className:i}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},62:function(e,t,a){}}]);
//# sourceMappingURL=5.c0b99bf0.chunk.js.map