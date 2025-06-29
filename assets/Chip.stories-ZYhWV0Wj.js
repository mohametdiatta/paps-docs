import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{c as t}from"./index-X-TuB2Qy.js";import{q as I}from"./styled-components.browser.esm-DbMzg50Y.js";import{S as P}from"./index-DwlTYBn6.js";import{T as r}from"./colors-NlUxhzGV.js";import"./index-D4H_InIO.js";const R=(e,o)=>{switch(e){case"right":return t("flex-row-reverse justify-between");case"center":return t("flex-row justify-center");case"left":return t("flex-row justify-between")}},f=e=>({filled:{color:r.white,bgColor:r.primary},outlined:{color:"currentColor",bgColor:r.colorSky100},neutral:{color:"currentColor",bgColor:r.colorSky100},error:{color:r.white,bgColor:r.error},success:{color:r.white,bgColor:r.success}})[e],W=e=>t(R(e)),B=e=>{switch(e){case"small":return"h-4 px-2 py-1 text-xs";case"medium":return"h-[18px] px-3 py-3 text-sm";case"large":return"h-5 px-4 py-4 text-base"}},G=I.div.attrs(({children:e,variant:o="neutral",size:m="small",height:u,width:H,fullWidth:J=!1,label:M,showOnHover:K,disabled:p=!1,icon:T,align:d="center",deleteIcon:q=s.jsx(P,{width:16,height:16,color:r.primaryDark}),avatar:A,color:g,onDelete:h,className:D,...F})=>{const _=T||A||q;return{className:t("relative",D,B(m),W(d),`flex items-center px-2 rounded-full ${!H&&"w-fit"} font-semibold animation
       ${o=="outlined"&&"border-2 text-black"}
        ${o!=="filled"&&"text-primary "||"text-secondary"}
         transition-all cursor-pointer
      ${!p&&"hover:text-white hover:opacity-100"}
      ${!p&&"hover:bg-accent1 hover:opacity-80"}
        `,{"opacity-50":p}),children:e??s.jsxs("span",{className:t("flex items-center justify-between whitespace-nowrap"),children:[s.jsx("div",{className:t(`${d==="right"&&"mr-2"}`),style:{color:g||f(o).color},children:M}),h&&s.jsx("div",{onClick:h,className:"-mr-1",children:_})]}),...F}})`
  width: ${({width:e,fullWidth:o})=>o?"100%":e?`${e}px`:"max-content"};
  height: ${({height:e})=>e&&`${e}px`};
  ${({variant:e="neutral"})=>{const{color:o,bgColor:m}=f(e),u={color:o,backgroundColor:m};return e==="outlined"?{...u,borderColor:r.primary}:u}};
  background-color: ${({bgColor:e})=>e};
  color: ${({color:e})=>e};
`,ee={component:G,title:"Components/Chip",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Chip is a small, interactive element that represents an input, attribute, or action."}}},argTypes:{size:{control:{type:"select",options:["small","medium","large"]},defaultValue:"small"},variant:{control:{type:"select",options:["outlined","filled","neutral","error","success"]},defaultValue:"outlined"},label:{control:{type:"text"},defaultValue:"Click me"},showOnHover:{control:{type:"boolean"},defaultValue:!1}}},a={args:{size:"medium",variant:"outlined",label:"Click me"}},l={args:{size:"medium",variant:"filled",label:"Click me"}},n={args:{size:"medium",variant:"neutral",label:"Click me"}},c={args:{size:"medium",variant:"error",label:"Click me"}},i={args:{size:"medium",variant:"success",label:"Click me",showOnHover:!0}};var C,x,b;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "medium",
    variant: "outlined",
    label: "Click me"
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,v,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "medium",
    variant: "filled",
    label: "Click me"
  }
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,S,$;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: "medium",
    variant: "neutral",
    label: "Click me"
  }
}`,...($=(S=n.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var z,j,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "medium",
    variant: "error",
    label: "Click me"
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var V,O,E;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: "medium",
    variant: "success",
    label: "Click me",
    showOnHover: true
  }
}`,...(E=(O=i.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const re=["Default","Filled","Neutral","Error","Success"];export{a as Default,c as Error,l as Filled,n as Neutral,i as Success,re as __namedExportsOrder,ee as default};
