import{j as t,c as i}from"./index-487c580d.js";import{r as C}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const f="_wrapper_9csl0_1",v="_input_9csl0_21",y="_clear_9csl0_49",I="_clear__disabled_9csl0_81",d={wrapper:f,input:v,clear:y,clear__disabled:I},b=""+new URL("cancel-5b5353ea.svg",import.meta.url).href,p=l=>{const{value:e,handleChange:a,placeholder:s="Placeholder",classes:r,...n}=l,o=C.useCallback(()=>{e&&a("")},[a,e]);return t.jsxs("div",{className:i(d.wrapper,r),children:[t.jsx("input",{type:"text",value:e,onChange:c=>a(c.target.value),placeholder:s,className:d.input,...n}),t.jsx("img",{src:b,alt:"clear",className:i(d.clear,!e&&d.clear__disabled),onClick:o})]})};try{p.displayName="Input",p.__docgenInfo={description:"",displayName:"Input",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(value: string) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}}}catch{}const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"UI-KIT/Input",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},decorators:[function(e,a){const[,s]=m(),r=n=>{var o,c;(c=(o=a.args).handleChange)==null||c.call(o,n),a.args.value!==void 0&&s({value:n})};return t.jsx(e,{args:{...a.args,handleChange:r}})}]},u={args:{value:"",placeholder:"Placeholder"},render:function(e){const[,a]=m(),s=r=>{var n;(n=e.handleChange)==null||n.call(e,r),a({value:r})};return t.jsx(p,{...e,handleChange:s})}};var h,g,_;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: "",
    placeholder: "Placeholder"
  },
  render: function Component(args) {
    const [, setArgs] = useArgs();
    const onValueChange = (value: string) => {
      // Call the provided callback
      // This is used for the Actions tab
      args.handleChange?.(value);

      // Update the arg in Storybook
      setArgs({
        value
      });
    };

    // Forward all args and overwrite onValueChange
    return <Input {...args} handleChange={onValueChange} />;
  }
}`,...(_=(g=u.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const w=["Primary"];export{u as Primary,w as __namedExportsOrder,j as default};
