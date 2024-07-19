(()=>{var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p=window.wcpayAssets.url,(()=>{"use strict";const e=e=>"undefined"!=typeof wcpayConfig?wcpayConfig[e]:t(e),t=e=>{let t=null;if("undefined"!=typeof wcpay_upe_config)t=wcpay_upe_config;else{if("object"!=typeof wc||void 0===wc.wcSettings)return null;t=wc.wcSettings.getSetting("woocommerce_payments_data")||{}}return t[e]||null},r=e=>"object"==typeof wcpayExpressCheckoutParams&&wcpayExpressCheckoutParams.hasOwnProperty(e)?wcpayExpressCheckoutParams[e]:"object"==typeof wcpayPaymentRequestParams&&wcpayPaymentRequestParams.hasOwnProperty(e)?wcpayPaymentRequestParams[e]:null,n=e=>r("wc_ajax_url").toString().replace("%%endpoint%%","wcpay_"+e),o=e=>r(e),a=e=>n(e),i=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"wcpay_";return e.toString().replace("%%endpoint%%",r+t)};class s{constructor(e,t){this.options=e,this.stripe=null,this.stripePlatform=null,this.request=t,this.isWooPayRequesting=!1}createStripe(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const o={locale:t};return r&&(o.stripeAccount=r),n&&(o.betas=n),new Stripe(e,o)}getStripeForUPE(e){return this.options.forceNetworkSavedCards=t("paymentMethodsConfig")[e].forceNetworkSavedCards,this.getStripe()}getStripe(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{publishableKey:t,accountId:r,forceNetworkSavedCards:n,locale:o,isStripeLinkEnabled:a}=this.options;if(n&&!e)return this.stripePlatform||(this.stripePlatform=this.createStripe(t,o)),this.stripePlatform;if(!this.stripe){let e=["card_country_event_beta_1"];a&&(e=e.concat(["link_autofill_modal_beta_1"])),this.stripe=this.createStripe(t,o,r,e)}return this.stripe}loadStripe(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((t=>{try{t(this.getStripe(e))}catch(e){t({error:e})}}))}confirmIntent(t,r){const n=t.match(/#wcpay-confirm-(pi|si):(.+):(.+):(.+)$/);if(!n)return!0;const a="si"===n[1];let i=n[2];const s=n[3],c=n[4],l=t.indexOf("order-pay"),u=l>-1&&t.substring(l).match(/\d+/);return u&&(i=u[0]),(()=>{const{locale:t,publishableKey:r}=this.options,n=e("accountIdForIntentConfirmation");return a?this.getStripe().handleNextAction({clientSecret:s}):n?this.createStripe(r,t,n).confirmCardPayment(s):this.getStripe(!0).handleNextAction({clientSecret:s})})().then((t=>{var n;const a=t.paymentIntent&&t.paymentIntent.id||t.setupIntent&&t.setupIntent.id||t.error&&t.error.payment_intent&&t.error.payment_intent.id||t.error.setup_intent&&t.error.setup_intent.id,s=null!==(n=o("ajax_url"))&&void 0!==n?n:e("ajaxUrl");return[this.request(s,{action:"update_order_status",order_id:i,_ajax_nonce:c,intent_id:a,payment_method_id:r||null}),t.error]})).then((e=>{let[t,r]=e;if(r)throw r;return t.then((e=>{const t="string"==typeof e?JSON.parse(e):e;if(t.error)throw t.error;return t.return_url}))}))}setupIntent(t){return this.request(e("ajaxUrl"),{action:"create_setup_intent","wcpay-payment-method":t,_ajax_nonce:e("createSetupIntentNonce")}).then((e=>{if(!e.success)throw e.data.error;return"succeeded"===e.data.status?e.data:this.getStripe().confirmCardSetup(e.data.client_secret).then((e=>{const{setupIntent:t,error:r}=e;if(r)throw r;return t}))}))}saveUPEAppearance(t,r){return this.request(e("ajaxUrl"),{elements_location:r,appearance:JSON.stringify(t),action:"save_upe_appearance",_ajax_nonce:e("saveUPEAppearanceNonce")}).then((e=>e.data)).catch((e=>{throw e.message?e:new Error(e.statusText)}))}paymentRequestCalculateShippingOptions(e){return this.request(a("get_shipping_options"),{security:o("nonce")?.shipping,is_product_page:o("is_product_page"),...e})}paymentRequestUpdateShippingDetails(e){return this.request(a("update_shipping_method"),{security:o("nonce")?.update_shipping,shipping_method:[e.id],is_product_page:o("is_product_page")})}paymentRequestGetCartDetails(){return this.request(a("get_cart_details"),{security:o("nonce")?.get_cart_details})}paymentRequestAddToCart(e){return this.request(a("add_to_cart"),{security:o("nonce")?.add_to_cart,...e})}paymentRequestEmptyCart(e){return this.request(a("empty_cart"),{security:o("nonce")?.empty_cart,booking_id:e})}paymentRequestGetSelectedProductData(e){return this.request(a("get_selected_product_data"),{security:o("nonce")?.get_selected_product_data,...e})}paymentRequestCreateOrder(e){return this.request(a("create_order"),{_wpnonce:o("nonce")?.checkout,...e})}expressCheckoutECECalculateShippingOptions(e){return this.request(n("get_shipping_options"),{security:r("nonce")?.shipping,is_product_page:r("is_product_page"),...e})}expressCheckoutECECreateOrder(e){return this.request(n("create_order"),{_wpnonce:r("nonce")?.checkout,...e})}initWooPay(t,r){if(!this.isWooPayRequesting){this.isWooPayRequesting=!0;const n=e("wcAjaxUrl"),o=e("initWooPayNonce");return this.request(i(n,"init_woopay"),{_wpnonce:o,email:t,user_session:r,order_id:e("order_id"),key:e("key"),billing_email:e("billing_email")}).finally((()=>{this.isWooPayRequesting=!1}))}}expressCheckoutAddToCart(t){const r=e("wcAjaxUrl"),n=e("addToCartNonce");return this.request(i(r,"add_to_cart"),{security:n,...t})}paymentRequestPayForOrder(e,t){return this.request(a("pay_for_order"),{_wpnonce:o("nonce")?.pay_for_order,order:e,...t})}pmmeGetCartData(){return fetch(`${t("storeApiURL")}/cart`,{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}}const c=["color","padding","paddingTop","paddingRight","paddingBottom","paddingLeft"],l=["fontFamily","fontSize","lineHeight","letterSpacing","fontWeight","fontVariation","textDecoration","textShadow","textTransform","-webkit-font-smoothing","-moz-osx-font-smoothing","transition"],u=["backgroundColor","border","borderTop","borderRight","borderBottom","borderLeft","borderRadius","borderWidth","borderColor","borderStyle","borderTopWidth","borderTopColor","borderTopStyle","borderRightWidth","borderRightColor","borderRightStyle","borderBottomWidth","borderBottomColor","borderBottomStyle","borderLeftWidth","borderLeftColor","borderLeftStyle","borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius","outline","outlineOffset","boxShadow"],d={".Label":[...c,...l],".Input":[...c,...l,...u],".Error":[...c,...l,...u],".Tab":[...c,...l,...u],".TabIcon":[...c],".TabLabel":[...c,...l],".Block":[...c.slice(1),...u.slice(1)]},h={".Label":d[".Label"],".Input":[...d[".Input"],"outlineColor","outlineWidth","outlineStyle"],".Error":d[".Error"],".Tab":["backgroundColor","color","fontFamily"],".Tab--selected":["outlineColor","outlineWidth","outlineStyle","backgroundColor","color",u],".TabIcon":d[".TabIcon"],".TabIcon--selected":["color"],".TabLabel":d[".TabLabel"],".Block":d[".Block"]};function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var f=/^\s+/,g=/\s+$/;function m(e,t){if(t=t||{},(e=e||"")instanceof m)return e;if(!(this instanceof m))return new m(e,t);var r=function(e){var t,r,n,o={r:0,g:0,b:0},a=1,i=null,s=null,c=null,l=!1,u=!1;return"string"==typeof e&&(e=function(e){e=e.replace(f,"").replace(g,"").toLowerCase();var t,r=!1;if(E[e])e=E[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=K.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=K.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=K.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=K.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=K.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=K.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=K.hex8.exec(e))?{r:H(t[1]),g:H(t[2]),b:H(t[3]),a:U(t[4]),format:r?"name":"hex8"}:(t=K.hex6.exec(e))?{r:H(t[1]),g:H(t[2]),b:H(t[3]),format:r?"name":"hex"}:(t=K.hex4.exec(e))?{r:H(t[1]+""+t[1]),g:H(t[2]+""+t[2]),b:H(t[3]+""+t[3]),a:U(t[4]+""+t[4]),format:r?"name":"hex8"}:!!(t=K.hex3.exec(e))&&{r:H(t[1]+""+t[1]),g:H(t[2]+""+t[2]),b:H(t[3]+""+t[3]),format:r?"name":"hex"}}(e)),"object"==p(e)&&(V(e.r)&&V(e.g)&&V(e.b)?(t=e.r,r=e.g,n=e.b,o={r:255*j(t,255),g:255*j(r,255),b:255*j(n,255)},l=!0,u="%"===String(e.r).substr(-1)?"prgb":"rgb"):V(e.h)&&V(e.s)&&V(e.v)?(i=O(e.s),s=O(e.v),o=function(e,t,r){e=6*j(e,360),t=j(t,100),r=j(r,100);var n=Math.floor(e),o=e-n,a=r*(1-t),i=r*(1-o*t),s=r*(1-(1-o)*t),c=n%6;return{r:255*[r,i,a,a,s,r][c],g:255*[s,r,r,i,a,a][c],b:255*[a,a,s,r,r,i][c]}}(e.h,i,s),l=!0,u="hsv"):V(e.h)&&V(e.s)&&V(e.l)&&(i=O(e.s),c=O(e.l),o=function(e,t,r){var n,o,a;function i(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=j(e,360),t=j(t,100),r=j(r,100),0===t)n=o=a=r;else{var s=r<.5?r*(1+t):r+t-r*t,c=2*r-s;n=i(c,s,e+1/3),o=i(c,s,e),a=i(c,s,e-1/3)}return{r:255*n,g:255*o,b:255*a}}(e.h,i,c),l=!0,u="hsl"),e.hasOwnProperty("a")&&(a=e.a)),a=L(a),{ok:l,format:e.format||u,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function b(e,t,r){e=j(e,255),t=j(t,255),r=j(r,255);var n,o,a=Math.max(e,t,r),i=Math.min(e,t,r),s=(a+i)/2;if(a==i)n=o=0;else{var c=a-i;switch(o=s>.5?c/(2-a-i):c/(a+i),a){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4}n/=6}return{h:n,s:o,l:s}}function y(e,t,r){e=j(e,255),t=j(t,255),r=j(r,255);var n,o,a=Math.max(e,t,r),i=Math.min(e,t,r),s=a,c=a-i;if(o=0===a?0:c/a,a==i)n=0;else{switch(a){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4}n/=6}return{h:n,s:o,v:s}}function _(e,t,r,n){var o=[N(Math.round(e).toString(16)),N(Math.round(t).toString(16)),N(Math.round(r).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function w(e,t,r,n){return[N(W(n)),N(Math.round(e).toString(16)),N(Math.round(t).toString(16)),N(Math.round(r).toString(16))].join("")}function S(e,t){t=0===t?0:t||10;var r=m(e).toHsl();return r.s-=t/100,r.s=B(r.s),m(r)}function v(e,t){t=0===t?0:t||10;var r=m(e).toHsl();return r.s+=t/100,r.s=B(r.s),m(r)}function k(e){return m(e).desaturate(100)}function C(e,t){t=0===t?0:t||10;var r=m(e).toHsl();return r.l+=t/100,r.l=B(r.l),m(r)}function x(e,t){t=0===t?0:t||10;var r=m(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),m(r)}function M(e,t){t=0===t?0:t||10;var r=m(e).toHsl();return r.l-=t/100,r.l=B(r.l),m(r)}function A(e,t){var r=m(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,m(r)}function T(e){var t=m(e).toHsl();return t.h=(t.h+180)%360,m(t)}function q(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var r=m(e).toHsl(),n=[m(e)],o=360/t,a=1;a<t;a++)n.push(m({h:(r.h+a*o)%360,s:r.s,l:r.l}));return n}function I(e){var t=m(e).toHsl(),r=t.h;return[m(e),m({h:(r+72)%360,s:t.s,l:t.l}),m({h:(r+216)%360,s:t.s,l:t.l})]}function R(e,t,r){t=t||6,r=r||30;var n=m(e).toHsl(),o=360/r,a=[m(e)];for(n.h=(n.h-(o*t>>1)+720)%360;--t;)n.h=(n.h+o)%360,a.push(m(n));return a}function P(e,t){t=t||6;for(var r=m(e).toHsv(),n=r.h,o=r.s,a=r.v,i=[],s=1/t;t--;)i.push(m({h:n,s:o,v:a})),a=(a+s)%1;return i}m.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,n=this.toRgb();return e=n.r/255,t=n.g/255,r=n.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=L(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=y(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=y(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=b(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=b(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return _(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,n,o){var a=[N(Math.round(e).toString(16)),N(Math.round(t).toString(16)),N(Math.round(r).toString(16)),N(W(n))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*j(this._r,255))+"%",g:Math.round(100*j(this._g,255))+"%",b:Math.round(100*j(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*j(this._r,255))+"%, "+Math.round(100*j(this._g,255))+"%, "+Math.round(100*j(this._b,255))+"%)":"rgba("+Math.round(100*j(this._r,255))+"%, "+Math.round(100*j(this._g,255))+"%, "+Math.round(100*j(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(F[_(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+w(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=m(e);r="#"+w(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return m(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(C,arguments)},brighten:function(){return this._applyModification(x,arguments)},darken:function(){return this._applyModification(M,arguments)},desaturate:function(){return this._applyModification(S,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(k,arguments)},spin:function(){return this._applyModification(A,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(R,arguments)},complement:function(){return this._applyCombination(T,arguments)},monochromatic:function(){return this._applyCombination(P,arguments)},splitcomplement:function(){return this._applyCombination(I,arguments)},triad:function(){return this._applyCombination(q,[3])},tetrad:function(){return this._applyCombination(q,[4])}},m.fromRatio=function(e,t){if("object"==p(e)){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]="a"===n?e[n]:O(e[n]));e=r}return m(e,t)},m.equals=function(e,t){return!(!e||!t)&&m(e).toRgbString()==m(t).toRgbString()},m.random=function(){return m.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},m.mix=function(e,t,r){r=0===r?0:r||50;var n=m(e).toRgb(),o=m(t).toRgb(),a=r/100;return m({r:(o.r-n.r)*a+n.r,g:(o.g-n.g)*a+n.g,b:(o.b-n.b)*a+n.b,a:(o.a-n.a)*a+n.a})},m.readability=function(e,t){var r=m(e),n=m(t);return(Math.max(r.getLuminance(),n.getLuminance())+.05)/(Math.min(r.getLuminance(),n.getLuminance())+.05)},m.isReadable=function(e,t,r){var n,o,a,i,s,c=m.readability(e,t);switch(o=!1,(a=r,"AA"!==(i=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==i&&(i="AA"),"small"!==(s=(a.size||"small").toLowerCase())&&"large"!==s&&(s="small"),n={level:i,size:s}).level+n.size){case"AAsmall":case"AAAlarge":o=c>=4.5;break;case"AAlarge":o=c>=3;break;case"AAAsmall":o=c>=7}return o},m.mostReadable=function(e,t,r){var n,o,a,i,s=null,c=0;o=(r=r||{}).includeFallbackColors,a=r.level,i=r.size;for(var l=0;l<t.length;l++)(n=m.readability(e,t[l]))>c&&(c=n,s=m(t[l]));return m.isReadable(e,s,{level:a,size:i})||!o?s:(r.includeFallbackColors=!1,m.mostReadable(e,["#fff","#000"],r))};var E=m.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},F=m.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(E);function L(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function j(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function B(e){return Math.min(1,Math.max(0,e))}function H(e){return parseInt(e,16)}function N(e){return 1==e.length?"0"+e:""+e}function O(e){return e<=1&&(e=100*e+"%"),e}function W(e){return Math.round(255*parseFloat(e)).toString(16)}function U(e){return H(e)/255}var z,D,$,K=(D="[\\s|\\(]+("+(z="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+z+")[,|\\s]+("+z+")\\s*\\)?",$="[\\s|\\(]+("+z+")[,|\\s]+("+z+")[,|\\s]+("+z+")[,|\\s]+("+z+")\\s*\\)?",{CSS_UNIT:new RegExp(z),rgb:new RegExp("rgb"+D),rgba:new RegExp("rgba"+$),hsl:new RegExp("hsl"+D),hsla:new RegExp("hsla"+$),hsv:new RegExp("hsv"+D),hsva:new RegExp("hsva"+$),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function V(e){return!!K.CSS_UNIT.exec(e)}const G=e=>{const t=e.match(/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0?(\.\d+)?|1?(\.0+)?)\s*\)$/);if(t){const r=t[4]||1;e=`rgb(${t.slice(1,4).map((e=>Math.round(e*r+255*(1-r)))).join(", ")})`}return e},J={default:{hiddenContainer:"#wcpay-hidden-div",hiddenInput:"#wcpay-hidden-input",hiddenInvalidInput:"#wcpay-hidden-invalid-input"},classicCheckout:{appendTarget:".woocommerce-billing-fields__field-wrapper",upeThemeInputSelector:"#billing_first_name",upeThemeLabelSelector:".woocommerce-checkout .form-row label",rowElement:"p",validClasses:["form-row"],invalidClasses:["form-row","woocommerce-invalid","woocommerce-invalid-required-field"],backgroundSelectors:["li.wc_payment_method .wc-payment-form","li.wc_payment_method .payment_box","#payment","#order_review","form.checkout","body"]},blocksCheckout:{appendTarget:"#billing.wc-block-components-address-form",upeThemeInputSelector:"#billing-first_name",upeThemeLabelSelector:".wc-block-components-checkout-step__description",rowElement:"div",validClasses:["wc-block-components-text-input"],invalidClasses:["wc-block-components-text-input","has-error"],alternateSelectors:{appendTarget:"#shipping.wc-block-components-address-form",upeThemeInputSelector:"#shipping-first_name",upeThemeLabelSelector:".wc-block-components-checkout-step__description"},backgroundSelectors:["#payment-method .wc-block-components-radio-control-accordion-option","#payment-method","form.wc-block-checkout__form",".wc-block-checkout","body"]},bnplProductPage:{appendTarget:".product .cart .quantity",upeThemeInputSelector:".product .cart .quantity .qty",upeThemeLabelSelector:".product .cart .quantity label",rowElement:"div",validClasses:["input-text"],invalidClasses:["input-text","has-error"],backgroundSelectors:["#payment-method-message","#main > .product > div.summary.entry-summary","#main > .product","#main","body"]},bnplClassicCart:{appendTarget:".cart .quantity",upeThemeInputSelector:".cart .quantity .qty",upeThemeLabelSelector:".cart .quantity label",rowElement:"div",validClasses:["input-text"],invalidClasses:["input-text","has-error"],backgroundSelectors:["#payment-method-message","#main .entry-content .cart_totals","#main .entry-content","#main","body"]},bnplCartBlock:{appendTarget:".wc-block-cart .wc-block-components-quantity-selector",upeThemeInputSelector:".wc-block-cart .wc-block-components-quantity-selector .wc-block-components-quantity-selector__input",upeThemeLabelSelector:".wc-block-components-text-input",rowElement:"div",validClasses:["wc-block-components-text-input"],invalidClasses:["wc-block-components-text-input","has-error"],backgroundSelectors:[".wc-block-components-bnpl-wrapper",".wc-block-components-order-meta",".wc-block-components-totals-wrapper",".wp-block-woocommerce-cart-order-summary-block",".wp-block-woocommerce-cart-totals-block",".wp-block-woocommerce-cart .wc-block-cart",".wp-block-woocommerce-cart","body"]},updateSelectors:function(e){return e.hasOwnProperty("alternateSelectors")&&(Object.entries(e.alternateSelectors).forEach((t=>{const[r,n]=t;document.querySelector(e[r])||(e[r]=n)})),delete e.alternateSelectors),e},getSelectors:function(e){let t=this.blocksCheckout;switch(e){case"blocks_checkout":t=this.blocksCheckout;break;case"classic_checkout":t=this.classicCheckout;break;case"bnpl_product_page":t=this.bnplProductPage;break;case"bnpl_classic_cart":t=this.bnplClassicCart;break;case"bnpl_cart_block":t=this.bnplCartBlock}return{...this.default,...this.updateSelectors(t)}}},Q={getHiddenContainer:function(e){const t=document.createElement("div");return t.setAttribute("id",this.getIDFromSelector(e)),t.style.border=0,t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t},createRow:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=document.createElement(e);return t.length&&r.classList.add(...t),r},appendClone:function(e,t,r){const n=document.querySelector(t);if(n){const t=n.cloneNode(!0);t.id=this.getIDFromSelector(r),t.value="",e.appendChild(t)}},getIDFromSelector:function(e){return e.startsWith("#")||e.startsWith(".")?e.slice(1):e},init:function(e){const t=J.getSelectors(e),r=document.querySelector(t.appendTarget),n=document.querySelector(t.upeThemeInputSelector);if(!r||!n)return;document.querySelector(t.hiddenContainer)&&this.cleanup();const o=this.getHiddenContainer(t.hiddenContainer);r.appendChild(o);const a=this.createRow(t.rowElement,t.validClasses);o.appendChild(a);const i=this.createRow(t.rowElement,t.invalidClasses);o.appendChild(i),this.appendClone(a,t.upeThemeInputSelector,t.hiddenInput),this.appendClone(i,t.upeThemeInputSelector,t.hiddenInvalidInput),this.appendClone(i,t.upeThemeLabelSelector,t.hiddenInvalidInput),document.querySelector(t.hiddenInput).style.transition="none"},cleanup:function(){const e=document.querySelector(J.default.hiddenContainer);e&&e.remove()}},X=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!document.querySelector(e))return{};const n=h[t],o=document.querySelector(e),a=window.getComputedStyle(o),i={};for(let e=0;e<a.length;e++){const t=a[e].replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}));n.includes(t)&&(i[t]=G(a.getPropertyValue(a[e])))}if(".Input"===t||".Tab--selected"===t){const e=function(e){let t=arguments.length>2?arguments[2]:void 0;return e&&t?[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"solid",t].join(" "):""}(i.outlineWidth,i.outlineStyle,i.outlineColor);""!==e&&(i.outline=e),delete i.outlineWidth,delete i.outlineColor,delete i.outlineStyle}const s=a.getPropertyValue("text-indent");return"0px"!==s&&"0px"===i.paddingLeft&&"0px"===i.paddingRight&&(i.paddingLeft=s,i.paddingRight=s),".Block"===t&&(i.backgroundColor=r),i},Y=()=>{const e=[],t=document.styleSheets,r=["fonts.googleapis.com","fonts.gstatic.com","fast.fonts.com","use.typekit.net"];for(let n=0;n<t.length;n++){if(!t[n].href)continue;const o=new URL(t[n].href);-1!==r.indexOf(o.hostname)&&e.push({cssSrc:t[n].href})}return e},Z=e=>{const t=J.getSelectors(e);Q.init(e);const r=X(t.hiddenInput,".Input"),n=X(t.hiddenInvalidInput,".Input"),o=X(t.upeThemeLabelSelector,".Label"),a=X(t.upeThemeInputSelector,".Tab"),i=X(t.hiddenInput,".Tab--selected"),s=(e=>{const t=Object.assign({},e);if(!e.backgroundColor||!e.color)return e;const r=((e,t)=>{const r={backgroundColor:e,color:t},n=m(e),o=m(t);if(!n.isValid()||!o.isValid())return{backgroundColor:"",color:""};const a=n.getBrightness()>50?m(n).darken(7):m(n).lighten(7),i=m.mostReadable(a,[o],{includeFallbackColors:!0});return r.backgroundColor=a.toRgbString(),r.color=i.toRgbString(),r})(e.backgroundColor,e.color);return t.backgroundColor=r.backgroundColor,t.color=r.color,t})(a),c={color:s.color},l={color:i.color},u=(e=>{let t=null,r=0;for(;!t&&r<e.length;){const n=document.querySelector(e[r]);if(!n){r++;continue}const o=window.getComputedStyle(n).backgroundColor;o&&m(o).getAlpha()>0&&(t=o),r++}return t||"#ffffff"})(t.backgroundSelectors),d=X(t.upeThemeLabelSelector,".Block",u),h={variables:{colorBackground:u,colorText:o.color,fontFamily:o.fontFamily,fontSizeBase:o.fontSize},theme:(p=u,m(p).getBrightness()>125?"stripe":"night"),rules:{".Input":r,".Input--invalid":n,".Label":o,".Block":d,".Tab":a,".Tab:hover":s,".Tab--selected":i,".TabIcon:hover":c,".TabIcon--selected":l,".Text":o,".Text--redirect":o}};var p;return Q.cleanup(),h};function ee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;for(const n in e){const o=e[n],a=t?t+"["+n+"]":n;"string"==typeof o||"number"==typeof o?r.append(a,o):"object"==typeof o&&ee(o,a,r)}return r}async function te(e,t,r){const n=ee(t,"",new FormData),o=await fetch(e,{method:"POST",body:n,...r});return await o.json()}const re={bnplProductPage:{configKey:"upeBnplProductPageAppearance",appearanceKey:"bnpl_product_page"},bnplClassicCart:{configKey:"upeBnplClassicCartAppearance",appearanceKey:"bnpl_classic_cart"}};async function ne(e,r){const{configKey:n,appearanceKey:o}=re[r],a=t(n);return a?Promise.resolve(a):await e.saveUPEAppearance(Z(o),o)}const oe=async()=>{const{productVariations:e,country:t,locale:r,accountId:n,publishableKey:o,paymentMethods:a,currencyCode:i,isCart:c,isCartBlock:l,cartTotal:u}=window.wcpayStripeSiteMessaging;let d,h,p="bnplProductPage";if(c||l?(d=parseInt(u,10)||0,p="bnplClassicCart"):d=parseInt(e.base_product.amount,10)||0,!l){const e=new s({publishableKey:o,accountId:n,locale:r},te),c={amount:d,currency:i||"USD",paymentMethodTypes:a||[],countryCode:t},l={appearance:await ne(e,p),fonts:Y()};h=e.getStripe().elements(l).create("paymentMethodMessaging",c),h.mount("#payment-method-message")}function f(e,t){const r=e.slice(-2),n=parseFloat(e);switch(r){case"em":return n*t+"px";case"px":return e;default:return"0px"}}const g=document.querySelector(".price")||document.querySelector(".wp-block-woocommerce-product-price"),m=document.querySelector(".cart_totals .shop_table");if(g||m){const e=g||m,t=window.getComputedStyle(e);let r=t.marginBottom;const n=parseFloat(t.fontSize),o=parseFloat(window.getComputedStyle(document.documentElement).fontSize);r.endsWith("em")?r=f(r,n):r.endsWith("rem")&&(r=f(r,o)),document.getElementById("payment-method-message").style.setProperty("--wc-bnpl-margin-bottom",r),h.on("ready",(()=>{if(document.getElementById("payment-method-message").classList.add("ready"),c){const e=document.querySelector(".cart-collaterals");if(getComputedStyle(e).getPropertyValue("--wc-bnpl-height").trim())return;const t=document.getElementById("payment-method-message"),n=document.querySelector(".cart_totals .__PrivateStripeElement");setTimeout((()=>{const o=window.getComputedStyle(t),a=parseFloat(o.height),i=parseFloat(r),s=a+i,c=window.getComputedStyle(n),l=parseFloat(c.height);e.style.setProperty("--wc-bnpl-height",s+"px"),e.style.setProperty("--wc-bnpl-container-height",l-12+"px"),e.style.setProperty("--wc-bnpl-loader-margin",i+2+"px"),t.style.setProperty("--wc-bnpl-margin-bottom","-4px")}),2e3)}}))}return h};jQuery((async function(e){if(!window.wcpayStripeSiteMessaging||window.wcpayStripeSiteMessaging.isCartBlock)return;const{productVariations:t,productId:r,isCart:n}=window.wcpayStripeSiteMessaging;let o,a;if(!n){const{amount:e,currency:n}=t[r];o=e||0,a=n}const s=e(".quantity input[type=number]"),c=await oe(),l=Object.keys(t).length>1,u=e=>{const t=parseInt(e,10);return isNaN(t)?0:t},d=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const n=u(e)*u(r);n<=0||!t||c.update({amount:n,currency:t})},h=()=>{d(o,a,s.val())};s.on("change",(r=>{let n=o;const i=e('input[name="variation_id"]').val();l&&t.hasOwnProperty(i)&&(n=t[i]?.amount),d(n,a,r.target.value)})),e(document.body).on("updated_cart_totals",(()=>{e("#payment-method-message").before('<div class="pmme-loading"></div>'),e("#payment-method-message").hide(),te(i(window.wcpayStripeSiteMessaging.wcAjaxUrl,"get_cart_total"),{security:window.wcpayStripeSiteMessaging.nonce}).then((t=>{window.wcpayStripeSiteMessaging.cartTotal=t.total,oe().then((()=>{setTimeout((()=>{e(".pmme-loading").remove(),e("#payment-method-message").show(),e("#payment-method-message").addClass("pmme-updated")}),1e3)}))}))})),l&&(e(".single_variation_wrap").on("show_variation",((e,r)=>{t[r.variation_id]&&d(t[r.variation_id].amount,a,s.val())})),e(".variations").on("change",(e=>{""===e.target.value&&h()})),e(".reset_variations").on("click",h))}))})()})();