(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{60:function(e,t,n){"use strict";var a=n(7),r=n(0);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(r.useState)(e),n=Object(a.a)(t,2),o=n[0],i=n[1],l=function(e){return i(e)};return[o,l]}},61:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(9),i=n(2);t.a=function(e){var t=e.cssClass,n=e.descriptionFor;return r.a.createElement("p",{className:t,dangerouslySetInnerHTML:{__html:"".concat(function(e){switch(e){case i.a.USERDESCRIPTION:return o.b.Description.replace("{autoexp}",o.b.Experience());default:return e}}(n))}})}},62:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(63),i=n.n(o);n(64);t.a=function(e){var t=e.children,n=e.setCssClass;return r.a.createElement("div",{className:"animation__container"},r.a.createElement(i.a,{partialVisibility:!0,offset:{bottom:50},onChange:function(e){return e&&n("animation--bounceIn")}},r.a.createElement(a.Fragment,null,t)))}},63:function(e,t,n){var a;a=function(e,t){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var a=e.direction,r=e.value;switch(a){case"top":return n.top+r<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+r<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-r>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-r>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(1),r=n.n(a),o=n(2),i=n.n(o),l=n(0),c=n.n(l),s=n(3),u=n.n(s);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=m(t).call(this,e),n=!r||"object"!==p(r)&&"function"!==typeof r?b(a):r,d(b(n),"getContainer",(function(){return n.props.containment||window})),d(b(n),"addEventListener",(function(e,t,a,r){var o;n.debounceCheck||(n.debounceCheck={});var i=function(){o=null,n.check()},l={target:e,fn:r>-1?function(){o||(o=setTimeout(i,r||0))}:function(){clearTimeout(o),o=setTimeout(i,a||0)},getLastTimeout:function(){return o}};e.addEventListener(t,l.fn),n.debounceCheck[t]=l})),d(b(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),d(b(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),d(b(n),"check",(function(){var e,t,a=n.node;if(!a)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(a.getBoundingClientRect())),n.props.containment){var r=n.props.containment.getBoundingClientRect();t={top:r.top,left:r.left,bottom:r.bottom,right:r.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var o=n.props.offset||{};"object"===p(o)&&(t.top+=o.top||0,t.left+=o.left||0,t.bottom-=o.bottom||0,t.right-=o.right||0);var i={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,c=l&&i.top&&i.left&&i.bottom&&i.right;if(l&&n.props.partialVisibility){var s=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"===typeof n.props.partialVisibility&&(s=i[n.props.partialVisibility]),c=n.props.minTopValue?s&&e.top<=t.bottom-n.props.minTopValue:s}"string"===typeof o.direction&&"number"===typeof o.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",o.direction,o.value),c=u()(o,e,t));var f=n.state;return n.state.isVisible!==c&&(f={isVisible:c,visibilityRect:i},n.setState(f),n.props.onChange&&n.props.onChange(c)),f})),n.state={isVisible:null,visibilityRect:{}},n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.node=i.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=i.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):r.a.Children.only(this.props.children)}}])&&f(n.prototype,a),o&&f(n,o),t}(r.a.Component);d(v,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:r.a.createElement("span",null)}),d(v,"propTypes",{onChange:c.a.func,active:c.a.bool,partialVisibility:c.a.oneOfType([c.a.bool,c.a.oneOf(["top","right","bottom","left"])]),delayedCall:c.a.bool,offset:c.a.oneOfType([c.a.shape({top:c.a.number,left:c.a.number,bottom:c.a.number,right:c.a.number}),c.a.shape({direction:c.a.oneOf(["top","right","bottom","left"]),value:c.a.number})]),scrollCheck:c.a.bool,scrollDelay:c.a.number,scrollThrottle:c.a.number,resizeCheck:c.a.bool,resizeDelay:c.a.number,resizeThrottle:c.a.number,intervalCheck:c.a.bool,intervalDelay:c.a.number,containment:"undefined"!==typeof window?c.a.instanceOf(window.Element):c.a.any,children:c.a.oneOfType([c.a.element,c.a.func]),minTopValue:c.a.number})},function(e,t,n){"use strict";var a=n(6);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=a(n(0),n(29))},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(9),i=function(){return r.a.createElement("div",{className:"skill"},o.e.map((function(e,t){var n="skill__chart ".concat(e.header.toLowerCase());return r.a.createElement("div",{key:"skill-".concat(t),className:n},r.a.createElement("span",{className:"skill__chart__title"},e.header),r.a.createElement("ul",{className:"skill__chart--horiz"},e.topics.map((function(e,t){return r.a.createElement("li",{key:t+1,className:"skill__chart__bar",style:{width:"".concat(e.score.toString(),"%")}},r.a.createElement("span",{className:"skill__chart__label"},e.name))}))))})),!o.e.length&&r.a.createElement("span",{className:"no-skills"},"Skills not found!"),o.e.length&&r.a.createElement("ul",{className:"line__wrapper"},r.a.createElement("li",{className:"line strength__000"},r.a.createElement("span",{className:"line__label"},"Started")),r.a.createElement("li",{className:"line strength__025"},r.a.createElement("span",{className:"line__label"},"Beginner")),r.a.createElement("li",{className:"line strength__050"},r.a.createElement("span",{className:"line__label"},"Itermediate")),r.a.createElement("li",{className:"line strength__075"},r.a.createElement("span",{className:"line__label"},"Advanced")),r.a.createElement("li",{className:"line strength__100"},r.a.createElement("span",{className:"line__label"},"Expert"))))},l=n(61),c=r.a.memo((function(){if(o.e.length){var e="<strong>Core Competencies : </strong>";return o.e.forEach((function(t){if(e="".concat(e,"<br/><em><u>").concat(t.header,"</u></em>"),t.topics&&t.topics.length){var n=t.topics.map((function(e){return e.name}));n.length&&(e="".concat(e,"<em> : </em>").concat(n.toString().replace(/,/g,", ")))}})),r.a.createElement(l.a,{cssClass:"skills-text",descriptionFor:e})}return null})),s=(n(65),function(e){return e.isChart?r.a.createElement(i,null):r.a.createElement(c,null)});s.defaultProps={isChart:!1};t.a=r.a.memo(s)},67:function(e,t,n){},68:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(0),o=n.n(r),i=n(2),l=n(62),c=n(5),s=n.n(c),u=n(11),p=n(9),f=n(10),m=n(31),b=n(15),h=n(12),d=n(60),v=(n(67),function(e){var t=e.cssClass,r="user__card ".concat(t),l=p.b.KnownAs.length?"(Known as ".concat(p.b.KnownAs,")"):"",c=Object(d.a)(!1),v=Object(a.a)(c,2),y=v[0],_=v[1],g=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,Object(h.a)();case 3:n.e(4).then(n.t.bind(null,77,7)).then((function(e){var t=e.default,n=document.createElement("a");n.href=t,n.rel="noopener noreferrer",n.style.display="none",document.body.appendChild(n),n.click(),n.remove(),_(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:r},y&&o.a.createElement(m.a,null),o.a.createElement("div",{className:"user__details user__name user__friendly-name"},p.b.FriendlyName),o.a.createElement("div",{className:"user__details user__name user__known-as"},l),o.a.createElement("div",{className:"user__details user__name user__known-as"},p.b.JobTitle),o.a.createElement("div",{className:"user__details user__title"},p.b.subTitle),o.a.createElement("div",{className:"user__details user__based-in"},o.a.createElement(b.a,{type:i.b.MAP}),o.a.createElement("span",{className:"iconed-label"},p.b.Location)),o.a.createElement("div",{className:"user__details download__wrapper"},o.a.createElement(f.a,{fnCallback:g,btnClass:"download__button resume",tooltip:"Download resume",type:i.b.FILEDOWNLOAD},o.a.createElement("span",{className:"iconed-label"},"Download Resume"))))}),y=n(61),_=n(66);n(68),t.default=function(){var e=Object(d.a)(),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(d.a)(),s=Object(a.a)(c,2),u=s[0],p=s[1],f=Object(d.a)(),m=Object(a.a)(f,2),b=m[0],h=m[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{setCssClass:r},o.a.createElement(v,{cssClass:"about__content ".concat(n)})),o.a.createElement(l.a,{setCssClass:p},o.a.createElement(y.a,{cssClass:"about__content about__description ".concat(u),descriptionFor:i.a.USERDESCRIPTION})),o.a.createElement(l.a,{setCssClass:h},o.a.createElement("div",{className:"about__content ".concat(b)},o.a.createElement(_.a,null))))}}}]);
//# sourceMappingURL=about.3d2e7381.chunk.js.map