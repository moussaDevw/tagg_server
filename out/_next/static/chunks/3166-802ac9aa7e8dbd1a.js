(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3166],{8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},s=t(6273),l=t(387),c=t(7190);var i={};function u(e,n,t,r){if(e&&s.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,a=l.useRouter(),d=o.default.useMemo((function(){var n=r(s.resolveHref(a,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?s.resolveHref(a,e.as):o||t}}),[a,e.href,e.as]),f=d.href,h=d.as,p=e.children,v=e.replace,m=e.shallow,g=e.scroll,x=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(n=o.default.Children.only(p))&&"object"===typeof n&&n.ref,y=r(c.useIntersection({rootMargin:"200px"}),2),j=y[0],w=y[1],N=o.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);o.default.useEffect((function(){var e=w&&t&&s.isLocalURL(f),n="undefined"!==typeof x?x:a&&a.locale,r=i[f+"%"+h+(n?"%"+n:"")];e&&!r&&u(a,f,h,{locale:n})}),[h,f,w,x,t,a]);var k={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:c,scroll:l}))}(e,a,f,h,v,m,g,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s.isLocalURL(f)&&u(a,f,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof x?x:a&&a.locale,C=a&&a.isLocaleDomain&&s.getDomainLocale(h,L,a&&a.locales,a&&a.domainLocales);k.href=C||s.addBasePath(s.addLocale(h,L,a&&a.defaultLocale))}return o.default.cloneElement(n,k)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,c=a.useRef(),i=r(a.useState(!1),2),u=i[0],d=i[1],f=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,s=r.elements;return s.set(e,n),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,u]);return a.useEffect((function(){if(!s&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=t(7294),o=t(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map},4848:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),a=(t(7294),t(1664)),o=t(2806),s=t(2455),l=function(e){(0,s.m7)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},c=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")},i=function(e){var n=e.lr,t=e.nr,s=e.theme;return(0,r.jsx)("nav",{ref:t,className:"navbar navbar-expand-lg navbar-expand-sm change ".concat("themeL"===s?"light":""),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"logo",children:s&&"themeL"===s?(0,r.jsx)("img",{ref:n,src:"".concat(o.Q1),alt:"logo"}):(0,r.jsx)("img",{ref:n,src:"".concat(o.E8),alt:"logo"})})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button",onClick:c,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"icon-bar",children:(0,r.jsx)("i",{className:"fas fa-bars"})})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"nav-link",children:"Acceuil"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"nav-link",children:"Qui sommes-nous"})})}),(0,r.jsxs)("li",{className:"nav-item dropdown",onClick:l,children:[(0,r.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Services"}),(0,r.jsxs)("div",{className:"dropdown-menu",children:[(0,r.jsx)(a.default,{href:"/works/works-dark",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Mouse Info"})}),(0,r.jsx)(a.default,{href:"/works2/works2-dark",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Masonry 3 Columns"})}),(0,r.jsx)(a.default,{href:"/works3/works3-dark",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Masonry 2 Columns"})}),(0,r.jsx)(a.default,{href:"/works4/works4-dark",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Pinterest List"})})]})]}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"/contact/contact-dark",children:(0,r.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}},2623:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(){return(0,r.jsx)("footer",{className:"footer-half sub-bg",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"copyrights text-center mt-0",children:(0,r.jsxs)("p",{children:["\xa9 2022, Avo Template. Made with passion by",(0,r.jsx)("a",{href:"#0",children:"ThemesCamp"}),"."]})})})})}},1664:function(e,n,t){e.exports=t(8418)}}]);