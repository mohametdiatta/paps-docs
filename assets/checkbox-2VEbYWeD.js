import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{q as i}from"./styled-components.browser.esm-DbMzg50Y.js";const n=i.input`
  position: relative;
  height: 16px;
  width: 16px;
  cursor: pointer;
  appearance: none;
  border-radius: 2px;
  border-width: 1px;
  border-color: #399ebe;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  & ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    display: block;
    height: 48px;
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    opacity: 0;

    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  &:disabled {
    background-color: #8d9496 !important;
  }
  &:checked {
    --tw-border-opacity: 1;
    border-color: rgb(57 158 190 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(57 158 190 / var(--tw-bg-opacity));
    & ::before {
      content: var(--tw-content);
      --tw-bg-opacity: 1;
      background-color: rgb(57 158 190 / var(--tw-bg-opacity));
    }
  }
`;function c({label:t,onClick:r,labelClassNames:a="",...o}){const s=`${Math.random()*100}`.split(".")[1];return e.jsxs("div",{className:"inline-flex items-center",onClick:r,children:[e.jsxs("label",{className:"relative flex cursor-pointer items-center p-1",htmlFor:"checkbox","data-ripple-dark":"true",children:[e.jsx(n,{type:"checkbox",className:"peer",id:s,...o}),e.jsx("span",{className:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100 peer-disabled:opacity-100",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]}),t?e.jsx("div",{className:`mt-px cursor-pointer select-none text-gray-500 ${a}`,children:t}):void 0]})}c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},labelClassNames:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChecked:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{c as C};
