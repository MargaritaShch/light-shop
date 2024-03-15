/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={151:t=>{var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=e},939:t=>{var e,n;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],r=0;r<t.length;r+=3)for(var i=t[r]<<16|t[r+1]<<8|t[r+2],o=0;o<4;o++)8*r+6*o<=8*t.length?n.push(e.charAt(i>>>6*(3-o)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,i=0;r<t.length;i=++r%4)0!=i&&n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|e.indexOf(t.charAt(r))>>>6-2*i);return n}},t.exports=n},11:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,'*{margin:0;padding:0;color:#d9d5d5;font-family:"Times New Roman",Times,serif}body{background-color:rgba(0,0,0,.928)}main{padding-top:50px;background-color:rgba(0,0,0,.928)}.promo__image{color:rgba(220,228,227,.977);padding-top:50px}.promo__image h1{margin:auto;margin-top:25%;font-size:3em;letter-spacing:3px;font-weight:bold;font-family:"Montserrat",sans-serif;margin:0}@media(min-width: 992px){.promo__image h1{font-size:2.1em}}.filter{font-family:"Montserrat",sans-serif;display:flex;justify-content:left;margin-bottom:20px;margin-left:20px;padding:30px}.filter p{padding-top:10px;margin-left:20px;color:rgba(240,235,235,.77);font-size:20px;padding-right:10px}.filter #filterSelect{font-family:"Montserrat",sans-serif;background-color:#000;width:190px;height:39px;padding-left:10px;border:.5px solid rgba(128,128,128,.553);cursor:pointer;font-size:20px;outline:none;font-size:16px;max-height:50px;overflow-y:auto}.filter .filter-settings{display:flex}.filter .search-settings{padding-bottom:25px}.filter .search-settings .productName{font-family:"Montserrat",sans-serif;background-color:#000;width:290px;height:35px;padding-left:10px;margin-left:70px;border:.5px solid rgba(128,128,128,.553);cursor:pointer;font-size:20px;outline:none;font-size:16px;max-height:50px;overflow-y:auto}.filter .search-settings .search-name-btn{font-family:"Montserrat",sans-serif;background:rgba(211,209,209,.404);height:35px;width:83px;border-radius:8px;font-weight:bold;border:none;cursor:pointer;margin-left:10px;color:#0d0d0d}.filter .search-settings .search-name-btn:hover{background:rgba(128,128,128,.404)}.productPrice,.productBrand{font-family:"Montserrat",sans-serif;background-color:#000;width:250px;height:35px;padding-left:10px;border:.5px solid rgba(128,128,128,.553);cursor:pointer;font-size:20px;outline:none;font-size:14px;max-height:50px;overflow-y:auto;height:37px;color:#fff}.productPrice{width:150px}.productName::after,.productPrice::after,.productBrand::after{border:.5px solid #383636}.search-btn,.delete-btn{font-family:"Montserrat",sans-serif;background:rgba(211,209,209,.404);height:35px;width:150px;border-radius:8px;font-weight:bold;border:none;cursor:pointer;margin-left:10px;color:#0d0d0d}.search-btn:hover,.delete-btn:hover{background:rgba(128,128,128,.404)}.price{display:flex;padding-top:50px}.error{color:azure}.btns{font-family:"Montserrat",sans-serif;display:flex;justify-content:center;padding:20px}.btns .next-page,.btns .back-page{background:rgba(211,209,209,.404);width:150px;height:50px;border-radius:20px;border:none;cursor:pointer;font-size:18px;color:#f5efef;font-family:"Montserrat",sans-serif}.btns .next-page:hover,.btns .back-page:hover{background:rgba(128,128,128,.404)}.btns .back-page{margin-right:10px}.products-container{display:flex;justify-content:space-around;flex-direction:row;flex-wrap:wrap;padding:20px}.product{cursor:pointer;padding:20px 20px 20px;margin-bottom:25px;margin-left:50px;width:240px;height:200px;border:none;border-radius:20px;border:.5px solid rgba(211,209,209,.404)}.product:hover{background-color:rgba(240,255,255,.079)}.product p{font-family:"Montserrat",sans-serif;color:#cec8c8;text-align:center;padding-top:10px}.product button{font-family:"Montserrat",sans-serif;background:rgba(211,209,209,.404);margin-left:60px;margin-top:50px;margin-bottom:10px;height:30px;width:100px;border-radius:10px;border:none;cursor:pointer}.product button:hover{background:rgba(128,128,128,.404)}.product .brand{margin-bottom:5px}.product .name{font-weight:bold;font-size:16px;margin-bottom:15px}.product .id{color:#777;margin-bottom:15px;font-size:13px;text-align:left}.product .price{font-size:16px}.error{font-family:"Montserrat",sans-serif;margin:auto;text-align:center;font-size:30px;font-weight:bold;color:#777}.wrapper-loader{position:absolute;padding-top:15%;width:100%;height:100%;background-color:#000}.wrapper-loader .loader{transform:translate(-50%, -50%);border:16px solid #666464;border-top:16px solid #393b3b;border-radius:50%;width:50px;height:50px;animation:spin 2s linear infinite;margin:auto;margin-top:30px;margin-bottom:20px;color:#cec8c8}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.pagination{font-family:"Montserrat",sans-serif;display:flex;justify-content:center;align-items:center;margin:20px 0;padding-bottom:50px}.pagination button{font-size:20px;border:none;border-radius:20px;background-color:rgba(211,209,209,.404);font-weight:bold;color:rgba(255,255,255,.775);padding:7px 12px;margin:0 10px;cursor:pointer;transition:background-color .3s ease}.pagination button:hover{background-color:rgba(128,128,128,.404)}.pagination button:disabled{cursor:not-allowed}.pagination span{display:flex}.pagination span button{margin:0 2px}.pagination .active{background-color:rgba(128,128,128,.404);color:#0b0b0b}',""]);const s=a},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);r&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},206:t=>{function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},503:(t,e,n)=>{var r,i,o,a,s;r=n(939),i=n(151).utf8,o=n(206),a=n(151).bin,(s=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):i.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var n=r.bytesToWords(t),c=8*t.length,d=1732584193,p=-271733879,l=-1732584194,u=271733878,h=0;h<n.length;h++)n[h]=16711935&(n[h]<<8|n[h]>>>24)|4278255360&(n[h]<<24|n[h]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var f=s._ff,g=s._gg,m=s._hh,y=s._ii;for(h=0;h<n.length;h+=16){var b=d,x=p,v=l,w=u;d=f(d,p,l,u,n[h+0],7,-680876936),u=f(u,d,p,l,n[h+1],12,-389564586),l=f(l,u,d,p,n[h+2],17,606105819),p=f(p,l,u,d,n[h+3],22,-1044525330),d=f(d,p,l,u,n[h+4],7,-176418897),u=f(u,d,p,l,n[h+5],12,1200080426),l=f(l,u,d,p,n[h+6],17,-1473231341),p=f(p,l,u,d,n[h+7],22,-45705983),d=f(d,p,l,u,n[h+8],7,1770035416),u=f(u,d,p,l,n[h+9],12,-1958414417),l=f(l,u,d,p,n[h+10],17,-42063),p=f(p,l,u,d,n[h+11],22,-1990404162),d=f(d,p,l,u,n[h+12],7,1804603682),u=f(u,d,p,l,n[h+13],12,-40341101),l=f(l,u,d,p,n[h+14],17,-1502002290),d=g(d,p=f(p,l,u,d,n[h+15],22,1236535329),l,u,n[h+1],5,-165796510),u=g(u,d,p,l,n[h+6],9,-1069501632),l=g(l,u,d,p,n[h+11],14,643717713),p=g(p,l,u,d,n[h+0],20,-373897302),d=g(d,p,l,u,n[h+5],5,-701558691),u=g(u,d,p,l,n[h+10],9,38016083),l=g(l,u,d,p,n[h+15],14,-660478335),p=g(p,l,u,d,n[h+4],20,-405537848),d=g(d,p,l,u,n[h+9],5,568446438),u=g(u,d,p,l,n[h+14],9,-1019803690),l=g(l,u,d,p,n[h+3],14,-187363961),p=g(p,l,u,d,n[h+8],20,1163531501),d=g(d,p,l,u,n[h+13],5,-1444681467),u=g(u,d,p,l,n[h+2],9,-51403784),l=g(l,u,d,p,n[h+7],14,1735328473),d=m(d,p=g(p,l,u,d,n[h+12],20,-1926607734),l,u,n[h+5],4,-378558),u=m(u,d,p,l,n[h+8],11,-2022574463),l=m(l,u,d,p,n[h+11],16,1839030562),p=m(p,l,u,d,n[h+14],23,-35309556),d=m(d,p,l,u,n[h+1],4,-1530992060),u=m(u,d,p,l,n[h+4],11,1272893353),l=m(l,u,d,p,n[h+7],16,-155497632),p=m(p,l,u,d,n[h+10],23,-1094730640),d=m(d,p,l,u,n[h+13],4,681279174),u=m(u,d,p,l,n[h+0],11,-358537222),l=m(l,u,d,p,n[h+3],16,-722521979),p=m(p,l,u,d,n[h+6],23,76029189),d=m(d,p,l,u,n[h+9],4,-640364487),u=m(u,d,p,l,n[h+12],11,-421815835),l=m(l,u,d,p,n[h+15],16,530742520),d=y(d,p=m(p,l,u,d,n[h+2],23,-995338651),l,u,n[h+0],6,-198630844),u=y(u,d,p,l,n[h+7],10,1126891415),l=y(l,u,d,p,n[h+14],15,-1416354905),p=y(p,l,u,d,n[h+5],21,-57434055),d=y(d,p,l,u,n[h+12],6,1700485571),u=y(u,d,p,l,n[h+3],10,-1894986606),l=y(l,u,d,p,n[h+10],15,-1051523),p=y(p,l,u,d,n[h+1],21,-2054922799),d=y(d,p,l,u,n[h+8],6,1873313359),u=y(u,d,p,l,n[h+15],10,-30611744),l=y(l,u,d,p,n[h+6],15,-1560198380),p=y(p,l,u,d,n[h+13],21,1309151649),d=y(d,p,l,u,n[h+4],6,-145523070),u=y(u,d,p,l,n[h+11],10,-1120210379),l=y(l,u,d,p,n[h+2],15,718787259),p=y(p,l,u,d,n[h+9],21,-343485551),d=d+b>>>0,p=p+x>>>0,l=l+v>>>0,u=u+w>>>0}return r.endian([d,p,l,u])})._ff=function(t,e,n,r,i,o,a){var s=t+(e&n|~e&r)+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._gg=function(t,e,n,r,i,o,a){var s=t+(e&r|n&~r)+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._hh=function(t,e,n,r,i,o,a){var s=t+(e^n^r)+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._ii=function(t,e,n,r,i,o,a){var s=t+(n^(e|~r))+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=r.wordsToBytes(s(t,e));return e&&e.asBytes?n:e&&e.asString?a.bytesToString(n):r.bytesToHex(n)}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},a=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=i(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=n(o[a]);e[s].references--}for(var c=r(t,i),d=0;d<o.length;d++){var p=n(o[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=c}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(72),e=n.n(t),r=n(825),i=n.n(r),o=n(659),a=n.n(o),s=n(56),c=n.n(s),d=n(540),p=n.n(d),l=n(113),u=n.n(l),h=n(11),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),e()(h.A,f),h.A&&h.A.locals&&h.A.locals;var g=n(503),m=n.n(g);const y=t=>{const e=new Date,n=`${t}_${e.getFullYear()}${String(e.getMonth()+1).padStart(2,"0")}${String(e.getDate()).padStart(2,"0")}`;return m()(n)},b=class{constructor(){this.requestUrl="http://api.valantis.store:41000/",this.totalItemsCountCache=null,this.idsCache={},this.requestSettings={method:"POST",headers:{"Content-Type":"application/json","X-Auth":y("Valantis")}}}async fetchAPI(t,e){const n={action:t,params:e},r={...this.requestSettings,body:JSON.stringify(n),headers:{...this.requestSettings.headers}};try{const t=await fetch(this.requestUrl,r);if(!t.ok)throw new Error(await t.text());return await t.json()}catch(n){return console.error("Error while retrieving data:",n),this.fetchAPI(t,e)}}async getTotalItemsCount(){if(null!==this.totalItemsCountCache)return this.totalItemsCountCache;try{const t=await this.fetchAPI("get_ids",{offset:0,limit:8004});return this.totalItemsCountCache=t.result.length,t.result.length}catch(t){return console.error("Error while retrieving total items count:",t),0}}async getProductsList(){const t=await this.getIDS();return await this.getProduct(t)}async getIDS(t,e){const n=`${t}-${e}`;if(!this.idsCache[n])try{const r=await this.fetchAPI("get_ids",{offset:t,limit:e});this.idsCache[n]=r.result}catch(t){console.error("Error while retrieving IDS:",t)}return this.idsCache[n]}async getProduct(t){try{return(await this.fetchAPI("get_items",{ids:t})).result.filter(function(){const t=new Set;return e=>!t.has(e.id)&&(t.add(e.id),!0)}())}catch(t){console.error("Error while retrieving products:",t)}}};class x{constructor(t,e){this.model=t,this.view=e,this.currentPage=0,this.itemsPerPage=50,this.setupEventListeners(),this.initialize(),this.view.setupFilter(this.handleFilterSelect.bind(this))}async initialize(){await this.model.initialize(),await this.fetchAndDisplayProducts(),this.view.setupFilter(this.handleFilterSelect.bind(this)),this.updatePagination()}handleFilterSelect(t){"price"===t?this.updatePriceOptions():"brand"===t&&this.updateBrandOptions()}async updatePriceOptions(){const t=await this.model.getUniquePriceOptions();this.view.updatePriceOptions(t)}async updateBrandOptions(){const t=await this.model.getUniqueBrandOptions();this.view.updateBrandOptions(t)}async updateFilterOptions(){const t=await this.model.getUniquePriceOptions();this.view.updatePriceOptions(t);const e=await this.model.getUniqueBrandOptions();this.view.updateBrandOptions(e)}setupEventListeners(){this.view.applyFiltersButton.addEventListener("click",(()=>this.applyFilters())),this.view.resetFiltersButton.addEventListener("click",(()=>this.resetFilters())),this.view.searchNameButton.addEventListener("click",(()=>this.searchByName()))}async fetchAndDisplayProducts(t=this.currentPage){this.view.showLoader(),this.currentPage=t;const e=this.currentPage*this.itemsPerPage;await this.model.fetchProducts(e,this.itemsPerPage),this.view.renderProducts(this.model.products),this.updatePagination(),this.view.hideLoader()}updatePagination(){this.view.updatePagination(this.model.totalItems,this.itemsPerPage,this.currentPage,(t=>this.fetchAndDisplayProducts(t)))}async searchByName(){const t=this.view.nameInput.value.trim();""!==t?(this.view.showLoader(),await this.model.searchByName(t),this.model.products.length>0?this.view.renderProducts(this.model.products):this.view.showError("Нет товаров с таким именем"),this.view.hideLoader()):this.view.showError("Введите название продукта")}async applyFilters(){const t=parseFloat(this.view.priceInput.value),e=this.view.brandInput.value||null;this.view.showLoader(),await this.model.applyFilters(t,e),this.view.renderProducts(this.model.products),this.view.hideLoader()}async resetFilters(){this.view.showLoader(),await this.fetchAndDisplayProducts(),this.view.hideLoader()}}class v{constructor(t){this.api=t,this.totalItems=0,this.products=[]}async initialize(){await this.fetchTotalItemsCount()}async fetchTotalItemsCount(){this.totalItems=await this.api.getTotalItemsCount()}async fetchProducts(t=0,e=50){const n=await this.api.getIDS(t,e),r=await this.api.getProduct(n);this.products=r}async searchByName(t){const e=await this.api.fetchAPI("filter",{product:t});this.products=await this.api.getProduct(e.result)}async applyFilters(t,e){const n={price:t||void 0,brand:e||void 0},r=await this.api.fetchAPI("filter",n);this.products=await this.api.getProduct(r.result)}async getUniquePriceOptions(){const t=await this.api.fetchAPI("get_fields",{field:"price"});if(t&&t.result){const e=t.result.filter((t=>null!==t));return[...new Set(e)].sort(((t,e)=>t-e))}return[]}async getUniqueBrandOptions(){const t=await this.api.fetchAPI("get_fields",{field:"brand"});return t&&t.result?[...new Set(t.result.filter((t=>null!==t)))]:[]}}class w{constructor(){this.container=document.querySelector(".products-container"),this.loader=document.querySelector(".wrapper-loader"),this.filterSection=document.querySelector(".filter"),this.productsContainer=document.querySelector(".products-container"),this.paginationContainer=document.querySelector(".pagination"),this.error=document.querySelector(".error"),this.priceOptions=document.getElementById("priceOptions"),this.brandOptions=document.getElementById("brandOptions"),this.priceInput=document.querySelector(".productPrice"),this.brandInput=document.querySelector(".productBrand"),this.applyFiltersButton=document.querySelector(".search-btn"),this.resetFiltersButton=document.querySelector(".delete-btn"),this.nameInput=document.querySelector(".productName"),this.searchNameButton=document.querySelector(".search-name-btn"),this.filterSelect=document.getElementById("filterSelect")}setupFilter(t){this.filterSelect.addEventListener("change",(()=>{this.priceOptions.parentElement.style.display="none",this.brandOptions.parentElement.style.display="none",this.applyFiltersButton.style.display="none",this.resetFiltersButton.style.display="none","price"===this.filterSelect.value?(t("price"),this.priceOptions.parentElement.style.display="block"):"brand"===this.filterSelect.value&&(t("brand"),this.brandOptions.parentElement.style.display="block"),this.filterSelect.value&&(this.applyFiltersButton.style.display="inline-block",this.resetFiltersButton.style.display="inline-block")}))}showLoader(){this.loader.style.display="flex",this.filterSection.style.display="none",this.productsContainer.style.display="none",this.paginationContainer.style.display="none"}hideLoader(){this.loader.style.display="none",this.filterSection.style.display="grid",this.productsContainer.style.display="flex",this.paginationContainer.style.display="flex"}renderProducts(t){this.clearHTML(),t.forEach((t=>{const e=document.createElement("div");e.classList.add("product");const n=t.brand||"~",r=document.createElement("p");r.classList.add("brand"),r.textContent=`Бренд: ${n}`,e.appendChild(r);const i=document.createElement("p");i.classList.add("name"),i.textContent=t.product,e.appendChild(i);const o=document.createElement("p");o.classList.add("id"),o.textContent=`ID: ${t.id}`,e.appendChild(o);const a=document.createElement("p");a.classList.add("price"),a.textContent=`Цена: ${t.price} ₽`,e.appendChild(a),this.container.appendChild(e)}))}showError(t){this.error.textContent=t,this.error.style.display="block"}hideError(){this.error.style.display="none"}clearHTML(){this.container.innerHTML=""}updatePagination(t,e,n,r){this.paginationContainer.innerHTML="";const i=Math.ceil(t/e),o=Math.max(1,n-2),a=Math.min(i,n+3);if(n>0){const t=document.createElement("button");t.textContent="←",t.addEventListener("click",(()=>r(n-1))),this.paginationContainer.appendChild(t)}if(o>1){const t=document.createElement("button");if(t.textContent="1",t.addEventListener("click",(()=>r(0))),this.paginationContainer.appendChild(t),o>2){const t=document.createElement("span");t.textContent="...",this.paginationContainer.appendChild(t)}}for(let t=o;t<=a;t++){const e=document.createElement("button");e.textContent=t,e.className=n===t-1?"active":"",e.disabled=n===t-1,e.addEventListener("click",(()=>r(t-1))),this.paginationContainer.appendChild(e)}if(a<i){if(a<i-1){const t=document.createElement("span");t.textContent="...",this.paginationContainer.appendChild(t)}const t=document.createElement("button");t.textContent=i,t.addEventListener("click",(()=>r(i-1))),this.paginationContainer.appendChild(t)}if(n<i-1){const t=document.createElement("button");t.textContent="→",t.addEventListener("click",(()=>r(n+1))),this.paginationContainer.appendChild(t)}}updateFilterOptions(t,e){this.priceOptions.innerHTML="",this.brandOptions.innerHTML="",t.forEach((t=>{const e=document.createElement("option");e.value=t,e.textContent=t+" ₽",this.priceOptions.appendChild(e)})),e.forEach((t=>{const e=document.createElement("option");e.value=t,e.textContent=t,this.brandOptions.appendChild(e)}))}updatePriceOptions(t){const e=this.priceOptions;e.innerHTML="",[...new Set(t)].forEach((t=>{const n=document.createElement("option");n.value=t,e.appendChild(n)}))}updateBrandOptions(t){const e=this.brandOptions;e.innerHTML="",t.forEach((t=>{const n=document.createElement("option");n.value=t,e.appendChild(n)}))}}document.addEventListener("DOMContentLoaded",(()=>{const t=new v(new b),e=new w;new x(t,e)}))})()})();