if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),l={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-23480ccc.js",revision:null},{url:"assets/index-a0d3995c.css",revision:null},{url:"index.html",revision:"3f657d8a5e00919bbb2861369ba50329"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest-icon-192.maskable.png",revision:"83d82081488e5e9c95990034238354a7"},{url:"manifest-icon-512.maskable.png",revision:"18ddec3b30baa57c69fab6221e1100c4"},{url:"manifest.webmanifest",revision:"de9a88fd1c7d2c8e844039c14ba2d31c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
