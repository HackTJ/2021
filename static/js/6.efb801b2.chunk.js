/*! For license information please see 6.efb801b2.chunk.js.LICENSE.txt */
(this["webpackJsonphacktj-2021"]=this["webpackJsonphacktj-2021"]||[]).push([[6,9,11],{169:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),c=(n(54),function(e){var t=e.logo,n=e.iteration,a=e.year,o=e.url,c=e.disabled,i=void 0!==c&&c;return r.a.createElement("div",{className:"history-section"},r.a.createElement("div",{className:"action-section"},r.a.createElement("img",{src:t,style:{width:"200px",height:"200px"},alt:"HackTJ ".concat(n)}),r.a.createElement("div",{className:"info-container"},r.a.createElement("h3",{className:"section-title"},"HackTJ ",n),r.a.createElement("h4",{className:"section-year"},a),r.a.createElement("a",{className:"altbutton",style:{width:"100%"},href:i?void 0:o,target:"_blank",rel:"noopener noreferrer"},"DevPost"))))});c.defaultProps={disabled:!1};var i=c,l=(n(55),function(){return r.a.createElement("div",{className:"centered-box relative history"},r.a.createElement("div",{className:"header-section"},r.a.createElement("div",{className:"icon icon-clock"}),r.a.createElement("h3",{className:"title"},"A Walk Through Memory Lane")),r.a.createElement(i,{logo:"https://raw.githubusercontent.com/HackTJ/2020/master/src/images/logo.png",iteration:"7.0",year:"2020",url:"https://hacktj2020.devpost.com/",disabled:!0}),r.a.createElement(i,{logo:"https://hacktj.org/2019/img/logo2.png",iteration:"6.0",year:"2019",url:"https://hacktj2019.devpost.com/"}),r.a.createElement(i,{logo:"https://hacktj.org/2018/img/favicon.png",iteration:"5.0",year:"2018",url:"https://hacktj2018.devpost.com/"}),r.a.createElement(i,{logo:"https://raw.githubusercontent.com/HackTJ/2017/gh-pages/img/favicon.png",iteration:"4.0",year:"2017",url:"https://hacktj2017.devpost.com/"}),r.a.createElement(i,{logo:"https://hacktj.org/2016/img/favicon.png",iteration:"3.0",year:"2016",url:"https://hacktj2016.devpost.com/"}),r.a.createElement(i,{logo:"https://hacktj.org/2015/img/favicon.png",iteration:"2.0",year:"2015",url:"https://hacktj2015.devpost.com/"}))}),s=n(37);t.default=function(){return a.createElement(a.Fragment,null,a.createElement(o.default,null),a.createElement(l,null),a.createElement(s.default,null))}},27:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},28:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return k}));var a,r=n(5),o=n.n(r);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function i(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function l(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var s="object"===typeof window&&window.Element||function(){};function u(e,t,n){if(!(e[t]instanceof s))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var f=o.a.oneOfType([o.a.string,o.a.func,u,o.a.shape({current:o.a.any})]),p=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),d={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],h=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],g=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function v(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function y(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!v(e))return!1;var t=b(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&g){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function E(e){return null!==e&&(Array.isArray(e)||g&&"number"===typeof e.length)}function k(e,t){var n=y(e);return t?E(n)?n:null===n?[]:[n]:E(n)?n[0]:n}},29:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},30:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},31:function(e,t,n){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return a}))},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n(29),i=n(5),l=n.n(i),s=n(27),u=n.n(s),f=n(28),p={light:l.a.bool,dark:l.a.bool,full:l.a.bool,fixed:l.a.string,sticky:l.a.string,color:l.a.string,role:l.a.string,tag:f.i,className:l.a.string,cssModule:l.a.object,expand:l.a.oneOfType([l.a.bool,l.a.string])},d=function(e){var t,n=e.expand,a=e.className,i=e.cssModule,l=e.light,s=e.dark,p=e.fixed,d=e.sticky,m=e.color,h=e.tag,g=Object(c.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),b=Object(f.f)(u()(a,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":l,"navbar-dark":s})["bg-"+m]=m,t["fixed-"+p]=p,t["sticky-"+d]=d,t)),i);return r.a.createElement(h,Object(o.a)({},g,{className:b}))};d.propTypes=p,d.defaultProps={tag:"nav",expand:!1};var m=d,h={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:f.i,className:l.a.string,cssModule:l.a.object},g=function(e){var t=e.className,n=e.cssModule,a=e.tabs,i=e.pills,l=e.vertical,s=e.horizontal,p=e.justified,d=e.fill,m=e.navbar,h=e.card,g=e.tag,b=Object(c.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(f.f)(u()(t,m?"navbar-nav":"nav",!!s&&"justify-content-"+s,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":a,"card-header-tabs":h&&a,"nav-pills":i,"card-header-pills":h&&i,"nav-justified":p,"nav-fill":d}),n);return r.a.createElement(g,Object(o.a)({},b,{className:v}))};g.propTypes=h,g.defaultProps={tag:"ul",vertical:!1};var b=g,v=n(30),y=n(31),E={tag:f.i,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),disabled:l.a.bool,active:l.a.bool,className:l.a.string,cssModule:l.a.object,onClick:l.a.func,href:l.a.any},k=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(v.a)(n)),n}Object(y.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.active,i=e.tag,l=e.innerRef,s=Object(c.a)(e,["className","cssModule","active","tag","innerRef"]),p=Object(f.f)(u()(t,"nav-link",{disabled:s.disabled,active:a}),n);return r.a.createElement(i,Object(o.a)({},s,{ref:l,onClick:this.onClick,className:p}))},t}(r.a.Component);k.propTypes=E,k.defaultProps={tag:"a"};var j=k;n(33),t.default=function(){return a.createElement(m,{sticky:"top",className:"navcontainer",bg:"#33cccc",style:{position:"sticky",top:"0px",display:"flex",flexDirection:"row",zIndex:1e3}},a.createElement("div",{style:{height:"50px"}}),a.createElement(b,{className:"nav justify-content-center"},a.createElement(j,{href:"#intro"},a.createElement("h1",null,"Intro")),a.createElement(j,{href:"#faq"},a.createElement("h1",null,"FAQ")),a.createElement(j,{href:"#sponsor"},a.createElement("h1",null,"Sponsors")),a.createElement(j,{href:"#schedule"},a.createElement("h1",null,"Schedule")),a.createElement(j,{href:"#team"},a.createElement("h1",null,"Team"))))}},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(34),function(e){return a.createElement("span",{style:{visibility:"hidden"}},e)}),o=a.createElement("a",{className:"social pe-so-twitter",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/HackTJOfficial"},r("Twitter")),c=a.createElement("a",{className:"social pe-so-facebook empty",target:"_blank",rel:"noopener noreferrer",href:"https://facebook.com/HackTJOfficial"},r("Facebook")),i=a.createElement("a",{className:"social pe-so-instagram empty",target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/hacktjofficial"},r("Instagram")),l=function(){return a.createElement("div",{className:"social-links"},o,c,i)};t.default=function(){return a.createElement(a.Fragment,null,a.createElement("section",{className:"green register footer"},a.createElement("div",{className:"container"},a.createElement("div",{className:"register-button-block-old bottom"},a.createElement("div",{className:"register-text"},"Be sure to follow our Social Media pages for updates!")),a.createElement(l,null))))}},54:function(e,t,n){},55:function(e,t,n){}}]);
//# sourceMappingURL=6.efb801b2.chunk.js.map