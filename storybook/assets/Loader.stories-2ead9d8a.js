import{j as b,c as L}from"./index-487c580d.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const S="_loader_169oh_1",v="_shadow_169oh_11",n={loader:S,shadow:v},c=""+new URL("loaderWhite-5e45967e.svg",import.meta.url).href,B=""+new URL("loaderBlack-e2c627ea.svg",import.meta.url).href,x=""+new URL("loaderBlue-9787192a.svg",import.meta.url).href,o=l=>{const{theme:f="white",hasShadow:k=!0,classes:y=""}=l;let e;switch(f){case"blue":e=x;break;case"dark":e=B;break;case"white":e=c;break;default:e=c;break}return b.jsx("img",{src:e,alt:"loader",className:L(n.loader,k&&n.shadow,y)})};try{o.displayName="Loader",o.__docgenInfo={description:"",displayName:"Loader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"white"'},{value:'"blue"'}]}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}}}catch{}const q={title:"UI-KIT/Loader",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},t={theme:"dark",hasShadow:!0},a={args:{...t}},r={args:{...t,theme:"white",hasShadow:!0}},s={args:{...t,theme:"blue"}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...props
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...props,
    theme: "white",
    hasShadow: true
  }
}`,...(i=(h=r.parameters)==null?void 0:h.docs)==null?void 0:i.source}}};var g,w,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...props,
    theme: "blue"
  }
}`,...(_=(w=s.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const I=["Dark","Light","Blue"];export{s as Blue,a as Dark,r as Light,I as __namedExportsOrder,q as default};
