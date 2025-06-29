import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{u as A}from"./index-BLCNhuv_.js";import{m as L}from"./index-BymMLH1W.js";import{r as a}from"./index-D4H_InIO.js";import{q as u}from"./styled-components.browser.esm-DbMzg50Y.js";const ee=u.input`
  outline: none;
  width: 100%;
  font-size: 14px;
  color: #585656;
  background-color: ${({disabled:e})=>e?"#ececec":"white"};
  &:focus {
    outline: none;
  }
`,te=u.div`
  outline: none;
  display: flex;
  gap: 4px;
  width: 100%;
  min-height: 20px;
  font-size: 14px;
  color: #585656;
  overflow: hidden;
  background-color: ${({disabled:e})=>e?"#ececec":"white"};
  &:focus {
    outline: none;
  }
`,ne=u.div`
  padding: 10px;
  outline: none;
  width: 100%;
  font-size: 14px;
  height: ${({height:e})=>e||"auto"};
  color: #585656;
  background-color: ${({disabled:e})=>e?"#ececec":"inherit"};
  border: ${({isFocus:e})=>e?"2px solid #399ebe":"1px solid #b4b4bb"};
  border-radius: 4px;
  position: relative;
  border: ${({isError:e})=>e?"#f5a9a8 solid 1px":"1px solid #b4b4bb"};
  &:hover {
    border: ${({isFocus:e,disabled:r})=>r?"1px solid #b4b4bb":e?"2px solid #399ebe":"1px solid black"};
  }
  & .polygon {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 7px;
    top: 10px;
    &:hover {
      background-color: #cacaca;
    }
  }
  & .label {
    background-color: ${({disabled:e})=>e?"#ececec":"#fff"};

    position: absolute;
    text-transform: capitalize;
    color: ${({isFocus:e})=>e?"#399ebe":"rgba(0, 0, 0, 0.54)"};
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    padding: 2px;
    top: -10px;
    left: 10px;
  }
`,re=u.div`
  position: absolute;
  z-index: 1000;
  width: ${e=>(e==null?void 0:e.width)||"100%"};
  right: ${e=>e==null?void 0:e.right};
  font-size: ${e=>e==null?void 0:e.fontSize};
  margin-top: 8px;
  max-height: ${e=>e!=null&&e.height?null:"150px"};
  height: ${e=>e==null?void 0:e.height};
  overflow: auto;
  background-color: #ffff;
  border-radius: 4px;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`,E=a.createContext(void 0),_=({children:e})=>{const[r,p]=a.useState(null);return t.jsx(E.Provider,{value:{activeSelect:r,setActiveSelect:p},children:e})},ae=()=>{const e=a.useContext(E);if(!e)throw new Error("useSelectContext must be used within a SelectProvider");return e};function S({getOptionLabel:e,value:r,label:p,options:s,renderOption:q,isError:i,onSelectOption:m,required:B,onChange:f,helperText:j,disabled:o,renderOptionLabel:h,onClick:C,placeholder:F,children:N,height:M,width:V,fontSize:D,right:H,contentHeight:G}){const{value:c,toggle:oe,off:l,on:J}=A(),{value:x,on:K,off:Q}=A(),[U,W]=a.useState(r),[g,y]=a.useState(null),[w,$]=a.useState([]),{activeSelect:k,setActiveSelect:v}=ae(),b=a.useRef(Math.random().toString());a.useEffect(()=>{y(e?e==null?void 0:e(r):r)},[r,e]);const X=n=>{W(n),m==null||m(n),f==null||f(n),y(e?e==null?void 0:e(n||r):n),l(),v(null)},Y=a.useMemo(()=>i?"#f5a9a8":x?"#399ebe":"rgba(0, 0, 0, 0.54)",[x,i]);if(!e&&typeof U=="object"&&!h)throw new TypeError(`Value can't be type of Object. 
 Please pass getOptionLabel fucntion to render the selected option value `);const Z=()=>{C&&!o?C():o||(c?(l(),v(null)):(J(),v(b.current)))},O=n=>{var z;y(n.target.value);const T=L(s,(z=n.target.value)==null?void 0:z.toLowerCase());$([...T])};return a.useEffect(()=>{g||$([...s])},[s,g,c]),a.useEffect(()=>{k!==b.current&&l()},[k,b,l]),t.jsxs("div",{className:"relative inline-block w-full",children:[t.jsxs(ne,{onClick:Z,isError:i,isFocus:x,onFocus:o?()=>null:K,onBlur:Q,disabled:o,height:M,children:[h?t.jsx(te,{disabled:o,children:Array.isArray(r)?r==null?void 0:r.slice(0,4).map(n=>h(n)):"N/A"}):t.jsx(ee,{placeholder:F,type:"text",onChange:O,value:g||"",disabled:o}),t.jsx("span",{className:"polygon",children:c?t.jsx("svg",{viewBox:"0 0 24 24",className:"h-6 w-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",version:"1.1",transform:"matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)",children:t.jsx("path",{d:"M7 10l5 5 5-5z"})}):t.jsx("svg",{className:"h-6 w-6",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:t.jsx("path",{d:"M7 10l5 5 5-5z"})})}),t.jsxs("span",{className:"label",style:{color:Y},children:[p,B?" *":null]})]}),j&&i&&t.jsx("p",{className:"helper-text py-1 mx-3 font-normal text-sm text-error",children:j}),c&&!N?t.jsx(re,{width:V,fontSize:D,right:H,height:G,children:(s==null?void 0:s.length)<1?t.jsx("div",{className:"px-4 py-2 text-center text-sm",children:"No options yet"}):w==null?void 0:w.map((n,T)=>t.jsx("div",{className:"px-4 py-2 cursor-pointer hover:bg-gray-100",onClick:()=>X(n),children:q?q(n):n||"N/A"},T))}):t.jsx(t.Fragment,{children:N})]})}_.__docgenInfo={description:"",methods:[],displayName:"SelectProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};S.__docgenInfo={description:"",methods:[],displayName:"CustomSelect",props:{isError:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"T | T[]",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"}]},description:""},getOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: T) => string",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"ReactNode"}}},description:""},renderOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: any) => ReactNode",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"ReactNode"}}},description:""},onSelectOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},right:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},contentHeight:{required:!1,tsType:{name:"string"},description:""}}};const pe={component:S,title:"Input/SelectInput",tags:["autodocs"],parameters:{docs:{description:{component:"A customizable select input component that can be used in various scenarios."}}}},se=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],d={render:e=>t.jsx(_,{children:t.jsx(S,{...e})}),args:{options:se,getOptionLabel:e=>e==null?void 0:e.label,renderOption:e=>e.label,onChange:e=>console.log("onChange",e)}};var R,I,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    return <SelectProvider>
        <CustomSelect {...args} />
      </SelectProvider>;
  },
  args: {
    options,
    getOptionLabel: value => value?.label,
    renderOption: op => op.label,
    onChange: value => console.log("onChange", value)
  }
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const me=["Default"];export{d as Default,me as __namedExportsOrder,pe as default};
