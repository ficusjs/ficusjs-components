function loadComponents(e,o=[],n){if(!o.length)return Promise.reject(new Error("No base components specified"));const t={accordion:()=>import("./index-741eac1c.js").then((o=>e(o.module,n))),dropdown:()=>import("./index-08da51a6.js").then((o=>e(o.module,n))),form:()=>import("./index-27edd1b4.js").then((o=>e(o.module,n))),formInput:()=>import("./index-054e86ba.js").then((o=>e(o.module,n))),formSelect:()=>import("./index-1df7e81e.js").then((o=>e(o.module,n))),formTextarea:()=>import("./index-efbc79b7.js").then((o=>e(o.module,n))),modal:()=>import("./index-b82bb63a.js").then((o=>e(o.module,n))),navbar:()=>import("./index-94713104.js").then((o=>e(o.module,n))),pagination:()=>import("./index-d07ccac3.js").then((o=>e(o.module,n))),sheet:()=>import("./index-b859bb65.js").then((o=>e(o.module,n))),tabs:()=>import("./index-2f02c29e.js").then((o=>e(o.module,n)))},d=o.map((e=>t[e]()));return Promise.all(d)}export{loadComponents};
