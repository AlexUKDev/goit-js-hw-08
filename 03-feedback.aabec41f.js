!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var o,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function T(e){return c=e,f=setTimeout(w,t),d?y(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=g();if(h(e))return x(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function x(e){return f=void 0,v&&o?y(e):(o=i=void 0,a)}function O(){var e=g(),n=h(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return T(l);if(s)return f=setTimeout(w,t),y(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},O.flush=function(){return void 0===f?a:x(g())},O}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var T={form:document.querySelector("form.feedback-form"),emailInput:document.querySelector("input[name='email']"),textarea:document.querySelector("textarea[name='message']")},h={};T.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("Форма успешно отправленна!"),e.currentTarget.reset(),console.log("Вот что мне удалось собрать от юзера",h)})),T.emailInput.addEventListener("input",e(t)((function(e){var t=e.target.value;console.log(t),h.email=t}),500)),T.textarea.addEventListener("input",e(t)((function(e){var t=e.target.value;console.log(t),h.message=t}),500)),console.log(h);var w=JSON.stringify(h);localStorage.setItem("feedback-form-state",w)}();
//# sourceMappingURL=03-feedback.aabec41f.js.map
