(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var n,s=r("q1tI");var i=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var s=n.prototype;return s.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},s.componentWillUnmount=function(){i.remove(this.props)},s.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(s.Component);t.default=o},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},JX7q:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},Ji7U:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return s}))},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r("9kyW")),s=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,o=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,s=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=s.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var s=String(r),i=t+s;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+s)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var s=r+n;return t[s]||(t[s]=n.replace(e,r)),t[s]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,s=e.id;if(n){var i=this.computeId(s,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(s),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},U8pU:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}r.d(t,"a",(function(){return s}))},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,c=void 0===a?n:a,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;o(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var p=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=p?p.getAttribute("content"):null}var t,i,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r("8oxB"))},foSv:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},md7G:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("U8pU"),s=r("JX7q");function i(e,t){return!t||"object"!==Object(n.a)(t)&&"function"!==typeof t?Object(s.a)(e):t}},pdaC:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),s=r.n(n),i=r("HaE+"),o=r("1OyB"),a=r("vuIU"),c=r("JX7q"),u=r("Ji7U"),l=r("md7G"),p=r("foSv"),d=r("rePB"),m=r("q1tI"),f=r.n(m),h=r("8Kt/"),v=r.n(h),y=r("nOHt"),g=r.n(y),b=r("MX0m"),x=r.n(b),j=r("p46w"),_=r.n(j),S=f.a.createElement;function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){Object(y.useRouter)();var t=e.initialData?N({},e.initialData):{name:"",description:"",image:"",ageFrom:"",ageTo:"",price:"",website:""},r=Object(m.useState)(t),n=r[0],o=r[1],a=Object(m.useState)(!1),c=a[0],u=a[1],l=Object(m.useState)(!1),p=l[0],h=l[1],v=Object(m.useState)(!1),g=v[0],b=v[1],j=Object(m.useState)(!1),w=j[0],O=j[1],F=Object(m.useState)(!1),C=F[0],R=F[1],k=Object(m.useState)(!1),z=k[0],P=k[1],A=Object(m.useState)(!1),I=A[0],T=A[1],B=Object(m.useState)(!1),E=B[0],D=B[1],U=function(e){var t=e.target,r=t.name;o(N(N({},n),{},Object(d.a)({},r,t.value)))},M=Object(m.useState)(!0),q=M[0],X=M[1],J=Object(m.useState)("doozone/tzgl9kjalula4brx0irl.png"),G=(J[0],J[1]),W=Object(m.useState)(!1),H=W[0],Z=W[1],K=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,i,a,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files,(i=new FormData).append("file",r[0]),i.append("upload_preset","doozone"),Z(!0),e.next=7,fetch("https://api.cloudinary.com/v1_1/jakepeg/image/upload",{method:"POST",body:i});case 7:return a=e.sent,e.next=10,a.json();case 10:c=e.sent,u=c.public_id+"."+c.format,G(u),Z(!1),X(!0),o(N(N({},n),{},{image:u}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return S(f.a.Fragment,null,S("div",{className:"jsx-3756628814 contain top-space"},S("div",{className:"jsx-3756628814 details-card"},S("div",{className:"jsx-3756628814 card-header"},S("a",{href:"/",id:"back-btn",className:"jsx-3756628814"},S("img",{id:"arrow-left",src:"/arrow-left.svg",alt:"Go Back",className:"jsx-3756628814"}),S("span",{className:"jsx-3756628814 back"},"BACK"))),S("div",{className:"jsx-3756628814 form-card-content"},S("h1",{className:"jsx-3756628814"},"Edit activity"),S("form",{className:"jsx-3756628814"},S("div",{className:"jsx-3756628814 add-activity-form"},S("div",{className:"jsx-3756628814 form-col"},S("div",{className:"jsx-3756628814 form-group"},S("label",{htmlFor:"name",className:"jsx-3756628814"},"Name"),S("input",{onChange:U,value:n.name,type:"text",id:"name",name:"name","aria-describedby":"emailHelp",placeholder:"Activity name",className:"jsx-3756628814 form-control"}),c?S("div",{className:"jsx-3756628814 form-error"},"enter a name"):null),S("div",{className:"jsx-3756628814 form-group"},S("label",{htmlFor:"ageFrom",className:"jsx-3756628814"},"Age from"),S("input",{onChange:U,value:n.ageFrom,type:"text",id:"ageFrom",name:"ageFrom",placeholder:"age from",className:"jsx-3756628814 form-control"}),g?S("div",{className:"jsx-3756628814 form-error"},"enter age from"):null),S("div",{className:"jsx-3756628814 form-group"},S("label",{htmlFor:"ageTo",className:"jsx-3756628814"},"Age to"),S("input",{onChange:U,value:n.ageTo,type:"text",id:"ageTo",name:"ageTo",placeholder:"age to",className:"jsx-3756628814 form-control"}),w?S("div",{className:"jsx-3756628814 form-error"},"enter age to"):null),S("div",{className:"jsx-3756628814 form-group"},S("label",{htmlFor:"price",className:"jsx-3756628814"},"Price"),S("input",{onChange:U,value:n.price,type:"text",id:"price",name:"price",placeholder:"Price",className:"jsx-3756628814 form-control"}),C?S("div",{className:"jsx-3756628814 form-error"},"enter a price"):null),S("div",{className:"jsx-3756628814 form-group"},S("label",{htmlFor:"website",className:"jsx-3756628814"},"Website"),S("input",{onChange:U,value:n.website,type:"text",id:"website",name:"website",placeholder:"Website",className:"jsx-3756628814 form-control"}),z?S("div",{className:"jsx-3756628814 form-error"},"enter a website"):null),S("div",{className:"jsx-3756628814 form-group"},!1===q?S(f.a.Fragment,null,S("label",{htmlFor:"file",className:"jsx-3756628814"},"Image"),S("input",{type:"file",name:"file",placeholder:"Upload an image",onChange:K,className:"jsx-3756628814"})):null,S("input",{value:_.a.get("sub"),type:"hidden",id:"userId",name:"userId",className:"jsx-3756628814"})),S("div",{className:"jsx-3756628814 form-group"},H?S("h3",{className:"jsx-3756628814"},"LOADING IMAGE..."):S("img",{src:"https://res.cloudinary.com/jakepeg/image/upload/v1593005651/".concat(n.image),style:{width:"150px"},className:"jsx-3756628814"})),q?S("p",{onClick:function(){console.log("remove image"),X(!1),o(N(N({},n),{},{image:""}))},className:"jsx-3756628814 remove-image"},"remove image"):null),S("div",{className:"jsx-3756628814 form-col"},S("div",{className:"jsx-3756628814 form-group"},S("label",{htmlFor:"description",className:"jsx-3756628814"},"Description"),S("textarea",{onChange:U,value:n.description,id:"description",name:"description",rows:"3",className:"jsx-3756628814 form-control"}),p?S("div",{className:"jsx-3756628814 form-error"},"enter a description"):null),S("div",{className:"jsx-3756628814 form-group"},S("label",{htmlFor:"category",className:"jsx-3756628814"},"Category"),S("select",{onChange:function(e){for(var t=e.target.options,r=t.length,s=[],i=0;i<r;i++)t[i].selected&&s.push(t[i].value);o(N(N({},n),{},{category:s.toString()}))},multiple:!0,value:[n.category],id:"category",name:"category",className:"jsx-3756628814 form-control"},S("option",{className:"jsx-3756628814"},"Academic"),S("option",{className:"jsx-3756628814"},"Arts and crafts"),S("option",{className:"jsx-3756628814"},"Cooking"),S("option",{className:"jsx-3756628814"},"Games"),S("option",{className:"jsx-3756628814"},"Music and dance"),S("option",{className:"jsx-3756628814"},"Outdoor"),S("option",{className:"jsx-3756628814"},"Sport and fitness")),I?S("div",{className:"jsx-3756628814 form-error"},"select a category"):null),S("div",{className:"jsx-3756628814 form-group"},S("label",{htmlFor:"medium",className:"jsx-3756628814"},"Channel"),S("select",{onChange:function(e){for(var t=e.target.options,r=t.length,s=[],i=0;i<r;i++)t[i].selected&&s.push(t[i].value);o(N(N({},n),{},{medium:s.toString()}))},value:[n.medium],multiple:!0,id:"medium",name:"medium",className:"jsx-3756628814 form-control"},S("option",{className:"jsx-3756628814"},"Website"),S("option",{className:"jsx-3756628814"},"Youtube"),S("option",{className:"jsx-3756628814"},"App")),E?S("div",{className:"jsx-3756628814 form-error"},"select a channel"):null))),S("button",{onClick:function(){(n.name?n.ageFrom?n.ageTo?n.price?n.website?n.description?n.category?!!n.medium||(D(!0),!1):(T(!0),!1):(h(!0),!1):(P(!0),!1):(R(!0),!1):(O(!0),!1):(b(!0),!1):(u(!0),!1))&&e.handleFormSubmit(N({},n))},type:"button",className:"jsx-3756628814 btn btn-primary"},"Update"))))),S(x.a,{id:"3756628814"},[".form-card-content.jsx-3756628814{padding:20px;}",".add-activity-form.jsx-3756628814{margin:50px 50px 0 50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","@media (max-width:1100px){.add-activity-form.jsx-3756628814{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}",".form-col.jsx-3756628814{-webkit-flex:1;-ms-flex:1;flex:1;}",".form-group.jsx-3756628814{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".form-error.jsx-3756628814{width:60px;color:red;font-size:0.7rem;padding:3px 0 0 3px;}",'input.jsx-3756628814:not([type="submit"]){font-size:1rem;margin-bottom:15px;padding:10px 20px;box-sizing:border-box;width:300px;}',"select.jsx-3756628814,textarea.jsx-3756628814{font-size:1rem;margin-bottom:15px;padding:10px 20px;box-sizing:border-box;width:300px;}","h1.jsx-3756628814{margin-top:-35px;}","label.jsx-3756628814{width:120px;}","button.jsx-3756628814{margin:25px 0 25px 50px;}","#description.jsx-3756628814{height:120px;}","#category.jsx-3756628814{height:155px;}","#medium.jsx-3756628814{height:80px;}",".remove-image.jsx-3756628814{color:red;-webkit-text-decoration:underline;text-decoration:underline;font-size:0.8rem;cursor:pointer;}"]))},F=r("dpnd"),C=f.a.createElement;function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var s=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var k=function(e){Object(u.a)(r,e);var t=R(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),Object(d.a)(Object(c.a)(e),"HandleUpdateActivity",(function(e){Object(F.f)(e).then((function(t){g.a.push("/activities/[id]","/activities/".concat(e.id))}))})),e}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props.activity;return C(f.a.Fragment,null,C(v.a,null,C("title",null,"DiscoverDoo - Edit activity"),C("meta",{name:"title",content:"DiscoverDoo fun finder"})),C("div",{className:"container"},C(O,{submitButton:"Update",initialData:e,handleFormSubmit:this.HandleUpdateActivity})))}}],[{key:"getInitialProps",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,e.next=3,Object(F.e)(r.id);case 3:return n=e.sent,e.abrupt("return",{activity:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(f.a.Component);t.default=k},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},uM7T:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/activities/[id]/edit",function(){return r("pdaC")}])}},[["uM7T",0,2,1,3,5]]]);