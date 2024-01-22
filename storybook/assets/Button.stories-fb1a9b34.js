import{j as f,c as x}from"./index-487c580d.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const B="_button_10wnm_1",D="_dark_10wnm_49",j="_light_10wnm_67",o={button:B,dark:D,light:j},a=s=>{const{children:_,onClick:k,theme:b="dark",classes:y=""}=s;return f.jsx("button",{onClick:k,...s,className:x(o.button,o[b],y),children:_})};try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}}}catch{}const I={title:"UI-KIT/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},n={onClick:()=>{},theme:"dark",children:"Click Me"},e={args:{...n,theme:"dark"}},t={args:{...n,theme:"light"}},r={args:{...n,disabled:!0}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...props,
    theme: "dark"
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...props,
    theme: "light"
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...props,
    disabled: true
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const N=["Dark","Light","Disabled"];export{e as Dark,r as Disabled,t as Light,N as __namedExportsOrder,I as default};
