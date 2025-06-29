import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as v}from"./index-D4H_InIO.js";import{q as f}from"./styled-components.browser.esm-DbMzg50Y.js";const y=f.div`
  width: 100%;
  border-bottom: 1px solid rgba(57, 158, 191, 0.31);
  & .tablist {
    display: flex;
    gap: 20px;
  }
`,j=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width: 164px;
  min-width: ${({itemWidth:e})=>e||"100px !important"};
  & .tabs-label {
    position: relative;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: ${({isActive:e})=>e?"#399ebe":"#1a224b"};
    & .badge {
      position: absolute;
      top: -3px;
      right: 0;
      width: auto;
      min-width: 20px;
      height: 16px;
      transform: scale(1) translate(50%, -50%);
      transform-origin: 100% 0%;
      font-size: 8px;
      padding: 0 6px;
      font-style: normal;
      text-align: center;
      font-weight: 500;
      line-height: 1.25;
      border-width: 1.3px;
    }
  }
  & .active {
    margin-top: 12px;
    height: 3px;
    width: 100%;
    background-color: #399ebe;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;function T({tabs:e,value:n,onChange:l,children:r,itemWidth:s}){const a=v.useMemo(()=>e==null?void 0:e.map(({label:c,count:d},p)=>t.jsx(w,{label:c,isActive:p==n,count:d,onChange:l,index:p,itemWidth:s},p)),[e,n]);return t.jsx(y,{children:r?t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{className:"tablist mt-5",children:a}),t.jsx("div",{children:r})]}):t.jsx("div",{className:"tablist mt-5",children:a})})}function w({label:e,style:n,onChange:l,index:r,isActive:s,count:a=0,itemWidth:c}){const d=()=>{l(r)};return t.jsxs(j,{onClick:d,style:n,isActive:s,itemWidth:c,children:[t.jsxs("div",{className:"tabs-label",children:[e,a>0?t.jsx("span",{className:"badge inline-flex justify-center items-center border-primary bg-light-primary text-primary rounded-full",children:a<999?a:"+999"}):null]}),s?t.jsx("div",{className:"active"}):void 0]})}T.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"ITab"}],raw:"ITab[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},itemWidth:{required:!1,tsType:{name:"string"},description:""}}};const I={component:T,title:"Components/Tabar",tags:["autodocs"],parameters:{docs:{description:{component:"Tabar is a component that allows you to create a tab bar with multiple tabs."}}}},o={args:{value:0,tabs:[{label:"Tab 1",count:0},{label:"Tab 2",count:0},{label:"Tab 3",count:0}]}},i={args:{value:0,tabs:[{label:"Tab 1",count:10},{label:"Tab 2",count:0},{label:"Tab 3",count:0}]}};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 0,
    tabs: [{
      label: "Tab 1",
      count: 0
    }, {
      label: "Tab 2",
      count: 0
    }, {
      label: "Tab 3",
      count: 0
    }]
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,h,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 0,
    tabs: [{
      label: "Tab 1",
      count: 10
    }, {
      label: "Tab 2",
      count: 0
    }, {
      label: "Tab 3",
      count: 0
    }]
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const _=["Default","WithCount"];export{o as Default,i as WithCount,_ as __namedExportsOrder,I as default};
