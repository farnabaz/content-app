import{d as h,u as s,a as C,h as o,_ as g}from"./entry-8e0b0e51.mjs";import D from"./ContentQuery-2601ecbd.mjs";import{u as i}from"./head-94941027.mjs";import"./asyncData-7f9739da.mjs";var x=h({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>s().path},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(p){const e=C(),{tag:d,excerpt:r,path:f,query:m,head:u}=p,c=Object.assign(m||{},{path:f,find:"one"}),l=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(D,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var a;return u&&i(t),(a=e.default)==null?void 0:a.call(e,{doc:t,refresh:n,isPartial:y,excerpt:r,...this.$attrs})}:({data:t})=>(u&&i(t),o(g,{value:t,excerpt:r,tag:d,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):l("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{x as default};
