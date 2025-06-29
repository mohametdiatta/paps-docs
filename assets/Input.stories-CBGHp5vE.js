import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{r as n}from"./index-D4H_InIO.js";import{q as x}from"./styled-components.browser.esm-DbMzg50Y.js";const q=x.input`
  padding: ${e=>e.type!=="number"?"10px":"10px 25px 10px 10px"};
  outline: ${({isError:e})=>e?"#ed7172 solid 1px":"#a1a1aa solid 1px"};
  width: 100%;
  height: ${({height:e})=>e||"auto"};
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
`,v=x.div`
  position: relative;
  height: ${({height:e})=>e||"auto"};
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
`;function f({isError:e,helperText:s,label:h,required:b,height:g,...y}){const[a,l]=n.useState(!1),I=()=>{l(!0)},j=n.useMemo(()=>e?"#ff5e5f":a?"#399ebe":"rgba(0, 0, 0, 0.54)",[a,e]);return r.jsxs(v,{onFocus:I,onBlur:()=>l(!1),children:[r.jsxs("div",{className:"label",style:{color:j},children:[h," ",b?"*":null]}),r.jsx(q,{...y,isError:e,height:g}),s&&e&&r.jsx("p",{className:"helper-text py-1 mx-3 font-normal text-sm text-error",children:s})]})}f.__docgenInfo={description:"",methods:[],displayName:"Input",props:{isError:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const _={component:f,title:"Input/Input",tags:["autodocs"],parameters:{docs:{description:{component:""}}}},o={args:{label:"label",placeholder:"placeholder"}},t={args:{label:"label",placeholder:"placeholder",isError:!0,helperText:"error message"}};var p,i,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "label",
    placeholder: "placeholder"
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "label",
    placeholder: "placeholder",
    isError: true,
    helperText: "error message"
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const $=["Default","Error"];export{o as Default,t as Error,$ as __namedExportsOrder,_ as default};
