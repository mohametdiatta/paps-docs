import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as y,r as p}from"./index-D4H_InIO.js";import{q as f}from"./styled-components.browser.esm-DbMzg50Y.js";const j=f.textarea`
  padding: 10px 25px 10px 10px;
  outline: ${({isError:e})=>e?"#ed7172 solid 1px":"#a1a1aa solid 1px"};
  width: 100%;
  font-size: 14px;
  color: #585656;
  &:focus:hover,
  &:focus {
    outline: #399ebe solid 2px;
  }
  &:hover {
    outline: black solid 1px;
  }
  border-radius: 4px;
`,q=f.div`
  position: relative;
  & .label {
    background-color: white;
    position: absolute;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    padding: 2px;
    top: -10px;
    left: 10px;
  }
  & .error {
    color: #ed7172;
  }
`,o=y.forwardRef(({isError:e,helperText:s,label:h,required:g,...b},T)=>{const[n,l]=p.useState(!1),E=()=>{l(!0)},I=p.useMemo(()=>e?"#ff5e5f":n?"#399ebe":"rgba(0, 0, 0, 0.54)",[n,e]);return r.jsxs(q,{onFocus:E,onBlur:()=>l(!1),children:[r.jsxs("div",{className:"label",style:{color:I},children:[h," ",g?"*":null]}),r.jsx(j,{...b,isError:e,ref:T}),s&&e&&r.jsx("p",{className:"helper-text py-1 mx-3 font-normal text-sm text-error",children:s})]})});o.displayName="TextareaInput";o.__docgenInfo={description:"",methods:[],displayName:"TextareaInput",props:{isError:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const N={component:o,title:"Input/TextareaInput",tags:["autodocs"],parameters:{docs:{description:{component:"A text area input component that can be used to input text."}}}},t={args:{label:"Textarea Input",placeholder:"Enter text here"}},a={args:{label:"Textarea Input",placeholder:"Enter text here",isError:!0,helperText:" Error message"}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Textarea Input",
    placeholder: "Enter text here"
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,x,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Textarea Input",
    placeholder: "Enter text here",
    isError: true,
    helperText: " Error message"
  }
}`,...(m=(x=a.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const R=["Default","WithError"];export{t as Default,a as WithError,R as __namedExportsOrder,N as default};
