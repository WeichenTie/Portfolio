import d from"./ContentQuery.BtgcoSOP.js";import{g as c,R as l,L as p}from"./entry.pwM5o3ml.js";import"./asyncData.CBXGD7wq.js";import"./query.D_KzU1dR.js";import"./preview.Cw0UMeBK.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:f,query:o}=r,n={...o||{},path:f||(o==null?void 0:o.path)||"/"};return p(d,n,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:m})=>t.default({list:e,refresh:a,isPartial:m,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):u("not-found",e==null?void 0:e.data)}})}}),y=h,q=y;export{q as default};
