if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const o=e=>i(e,n),f={module:{uri:n},exports:c,require:o};s[n]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Framework7Icons-Regular-a42aa071.woff2",revision:"4a39aba9fb8a2f831fa437780e1a058a"},{url:"assets/Framework7Icons-Regular-eba1e821.woff",revision:"d03b787b6492fa2b0141c43fb7e56689"},{url:"assets/humidity-9d3efce0.png",revision:"859d5ee89777dc267c843905db509422"},{url:"assets/index-7175ae8b.js",revision:"8572f68e84ce36e26233d35c153cbc49"},{url:"assets/index-ae217a42.css",revision:"f01e51103a00b6870815923557162427"},{url:"assets/light-a2e10d80.png",revision:"4b115b6f896ded186e2d8331c0a7bc68"},{url:"assets/material-icons-8265f647.woff2",revision:"53436aca8627a49f4deaaa44dc9e3c05"},{url:"assets/material-icons-fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/plant-fa96596a.png",revision:"4a72845502a868b5fe75d1d3409d63cc"},{url:"assets/ruler-46d12c9a.png",revision:"a6c1b8d66f0e970c0121f57e94bb0ae4"},{url:"assets/temperature-49e78bc9.png",revision:"eee4590da1e821144eae88c73e3f90fe"},{url:"icons/128x128.png",revision:"994d92babc7ba2837fb4bb8317865587"},{url:"icons/144x144.png",revision:"317a188d362418808e689fcdc2376851"},{url:"icons/152x152.png",revision:"331293b5121d8ad11ee5fb18cde57b6a"},{url:"icons/192x192.png",revision:"8abbab176619a47e4a1b1e1ef0a71454"},{url:"icons/256x256.png",revision:"fbb7bd73e54a64e47d651396193d3353"},{url:"icons/512x512.png",revision:"a6d72520d408c68c97fea8bceb10689f"},{url:"icons/apple-touch-icon.png",revision:"fbb7bd73e54a64e47d651396193d3353"},{url:"icons/favicon.png",revision:"994d92babc7ba2837fb4bb8317865587"},{url:"index.html",revision:"febcc13f59ca55c923bc633a3f6e2e5a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map