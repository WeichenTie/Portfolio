import{v as d,P as C,Q as y,R as w,u as D,J as g,g as x,T as H,U as S,M as u}from"./entry.BToxLsEn.js";import b from"./ContentRenderer.s1WsE7x6.js";import q from"./ContentQuery.DIwCC6EM.js";import"./ContentRendererMarkdown.vue.D-0REOV9.js";import"./index.BsYmvPZw.js";import"./preview.CmZA_ksM.js";import"./asyncData.CpI-ttqn.js";import"./query.CE_TYlNc.js";const a=(p,s=y())=>{const e=d(p),m=g();C(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),w(()=>D(t))},{immediate:!0})},j=x({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=H(),{tag:m,excerpt:f,path:n,query:t,head:r}=p,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||S(y().path),find:"one"},_=(o,i)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return u(q,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:v})=>{var h;return c&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:v,excerpt:f,...this.$attrs})}:({data:o})=>(c&&a(o),u(b,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):_("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||u("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||u("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),k=j,Q=k;export{Q as default};
