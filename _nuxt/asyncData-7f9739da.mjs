import{g,o as _,i as m,j as w,r as p,w as b,k as C,e as P}from"./entry-8e0b0e51.mjs";const x=()=>null;function z(a,i,e={}){var o,d,h,v,y;if(typeof a!="string")throw new TypeError("asyncData key must be a string");if(typeof i!="function")throw new TypeError("asyncData handler must be a function");e={server:!0,default:x,...e},e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(d=(o=e.lazy)!=null?o:e.defer)!=null?d:!1,e.initialCache=(h=e.initialCache)!=null?h:!0;const r=g(),f=C();if(f&&!f._nuxtOnBeforeMountCbs){const s=f._nuxtOnBeforeMountCbs=[];f&&(_(()=>{s.forEach(t=>{t()}),s.splice(0,s.length)}),m(()=>s.splice(0,s.length)))}const l=()=>e.initialCache&&r.payload.data[a]!==void 0,n={data:w((v=r.payload.data[a])!=null?v:e.default()),pending:p(!l()),error:p((y=r.payload._errors[a])!=null?y:null)};n.refresh=(s={})=>r._asyncDataPromises[a]?r._asyncDataPromises[a]:s._initial&&l()?r.payload.data[a]:(n.pending.value=!0,r._asyncDataPromises[a]=Promise.resolve(i(r)).then(t=>{e.transform&&(t=e.transform(t)),e.pick&&(t=O(t,e.pick)),n.data.value=t,n.error.value=null}).catch(t=>{n.error.value=t,n.data.value=P(e.default())}).finally(()=>{n.pending.value=!1,r.payload.data[a]=n.data.value,n.error.value&&(r.payload._errors[a]=!0),delete r._asyncDataPromises[a]}),r._asyncDataPromises[a]);const c=()=>n.refresh({_initial:!0}),D=e.server!==!1&&r.payload.serverRendered;{D&&r.isHydrating&&a in r.payload.data?n.pending.value=!1:f&&r.payload.serverRendered&&(r.isHydrating||e.lazy)?f._nuxtOnBeforeMountCbs.push(c):c(),e.watch&&b(e.watch,()=>n.refresh());const s=r.hook("app:data:refresh",t=>{if(!t||t.includes(a))return n.refresh()});f&&m(s)}const u=Promise.resolve(r._asyncDataPromises[a]).then(()=>n);return Object.assign(u,n),u}function B(a){const i=a?Array.isArray(a)?a:[a]:void 0;return g().callHook("app:data:refresh",i)}function O(a,i){const e={};for(const r of i)e[r]=a[r];return e}export{B as r,z as u};
