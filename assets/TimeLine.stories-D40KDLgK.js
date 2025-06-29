import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{c as T}from"./index-X-TuB2Qy.js";import{q as l}from"./styled-components.browser.esm-DbMzg50Y.js";import{C as f}from"./checkbox-2VEbYWeD.js";import"./index-D4H_InIO.js";const $=l.ul`
  margin: 0px;
  overflow-x: hidden;
  display: block;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: ${({height:e})=>e};
`,w=l.li`
  display: flex;
  position: relative;
  list-style: none;
  min-height: ${({isLast:e})=>e?0:"30px"};
  & .time-line-content {
    color: rgb(112, 112, 112);
    font-size: 10px;
    font-weight: 900;
    height: fit-content;
    margin-left: 0px;
    padding: 0px 5px;
    width: 95.4%;
  }
  & .separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    & .time-line-label {
      align-items: center;
      background-color: ${({labelBgColor:e})=>e||"transparent"};
      box-shadow: none;
      display: flex;
      font-size: 8px;
      font-weight: 500;
      justify-content: center;
      height: 18px;
      margin: 0px;
      width: 18px;
      border-style: solid;
      border-width: 2px;
      border-radius: 50%;
      color: ${({labelColor:e})=>e||"rgb(57, 158, 191)"};
      border-color: ${({labelBorderColor:e})=>e||"rgb(57, 158, 191)"};
    }
  }
`,L=l.span`
  width: ${({isLast:e,width:r})=>e?"0px":r||"1px"};
  height: ${({noDot:e,height:r})=>e?r:"auto"};
  flex-grow: ${({isLast:e})=>e?"0":"1"};
  background-color: ${({isLast:e})=>e?"transparent":" #bdbdbd"};
  margin-top: ${({noDot:e})=>e?"6px":"0px"};
  margin-bottom: ${({noDot:e})=>e?"6px":"0px"};
`,N=l.div`
  display: flex;
  position: relative;
  list-style: none;
  min-height: ${({isLast:e})=>e?"0px":"20px"};
  height: ${({height:e})=>e};
  margin: ${({margin:e})=>e};
  & .separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    & .time-line-label-separator {
      align-items: center;
      background-color: transparent;
      box-shadow: none;
      display: flex;
      font-size: 10px;
      font-weight: bold;
      justify-content: center;
      height: ${({noDot:e})=>e?"0px":"6px"};
      margin: 0px;
      width: ${({noDot:e})=>e?"0px":"6px"};
      border-style: solid;
      border-width: ${({noDot:e})=>e?"0px":"2px"};
      border-radius: 50%;
      color: rgb(57, 158, 191);
      border-color: ${({borderColor:e})=>e||"rgb(57, 158, 191)"};
      margin-left: ${({noDot:e})=>e?"12px":"6px"};
    }

    & .line-dot-separator {
      width: ${({borderWidth:e})=>e||"1px"};
      flex-grow: 1.5;
      background-color: #bdbdbd;
      margin-left: 6px;
    }
  }
`;function b({children:e,height:r}){return o.jsx($,{height:r,children:e})}function h({label:e,labelColor:r,labelBgColor:s,labelBorderColor:a,children:d,isLast:t,width:i,noDot:p,height:u,disabled:y,hasCheckbox:j,checkboxProps:C}){return o.jsx("div",{children:o.jsxs(w,{labelColor:r,labelBgColor:s,labelBorderColor:a,isLast:t,width:i,children:[j&&o.jsx("div",{className:"pb-1 mr-1",children:o.jsx(f,{...C||{}})}),o.jsxs("div",{className:"separator",children:[o.jsx("span",{className:`time-line-label ${y&&"!border-gray-400 text-gray-400"}`,children:e}),o.jsx(L,{isLast:t,width:i,height:u,noDot:p})]}),o.jsx("div",{className:"time-line-content",children:d})]})})}function g({height:e,label:r,margin:s,borderWidth:a,noDot:d,borderColor:t,isLast:i,hasCheckbox:p}){return o.jsxs(N,{margin:s,height:e,borderWidth:a,noDot:d,borderColor:t,isLast:i,children:[p&&o.jsx("div",{className:"pb-1 mr-1",children:o.jsx(f,{className:" opacity-0"})}),o.jsxs("div",{className:"separator",children:[o.jsx("span",{"data-before":r,className:T("time-line-label-separator",{"before:content-[attr(data-before)] before:text-text !font-normal before:absolute before:left-4":!!r})}),o.jsx("span",{className:"line-dot-separator",children:" "})]}),o.jsx("div",{className:"time-line-content",children:o.jsx("span",{})})]})}b.__docgenInfo={description:"",methods:[],displayName:"TimeLine"};g.__docgenInfo={description:"",methods:[],displayName:"TimeLineDotConnector",props:{height:{required:!1,tsType:{name:"string"},description:""},margin:{required:!1,tsType:{name:"string"},description:""},borderWidth:{required:!1,tsType:{name:"string"},description:""},noDot:{required:!1,tsType:{name:"boolean"},description:""},isLast:{required:!1,tsType:{name:"boolean"},description:""},borderColor:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasCheckbox:{required:!1,tsType:{name:"boolean"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"TimeLineItem"};const D=[{label:"1",labelColor:"#fff",labelBgColor:"#4caf50",labelBorderColor:"#4caf50",width:"4px",height:"4px",isLast:!1,noDot:!1},{label:"2",labelColor:"#fff",labelBgColor:"#2196F3",labelBorderColor:"#2196F3",width:"4px",height:"4px",isLast:!1,noDot:!1},{label:"3",labelColor:"#fff",labelBgColor:"#FF9800",labelBorderColor:"#FF9800",width:"4px",height:"4px",isLast:!1,noDot:!1},{label:"4",labelColor:"#fff",labelBgColor:"#f44336",labelBorderColor:"#f44336",width:"4px",height:"4px",isLast:!1,noDot:!1}],v=()=>o.jsxs(b,{height:"300px",children:[o.jsx(o.Fragment,{children:D.map((e,r)=>o.jsx(h,{label:e.label,labelColor:e.labelColor,labelBgColor:e.labelBgColor,labelBorderColor:e.labelBorderColor,isLast:e.isLast,noDot:e.noDot,children:o.jsx("p",{children:o.jsxs("strong",{children:["Task ",e.label]})})},r))}),o.jsx(g,{isLast:!0})]}),S={title:"Components/TimeLine",tags:["autodocs"],component:v},n={args:{children:[]}};var c,m,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: []
  }
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,S as default};
