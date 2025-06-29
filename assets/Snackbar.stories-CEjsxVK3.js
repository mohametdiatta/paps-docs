import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as _}from"./index-D4H_InIO.js";import{X as R,B as X,A as z,W as A,C as L}from"./index-Dp2iK5xo.js";import{q as m,W as M}from"./styled-components.browser.esm-DbMzg50Y.js";import{u as N}from"./index-BLCNhuv_.js";const E=({message:e,position:O,type:u,withCloseIcon:$})=>{const{value:p,toggle:d}=N("",!0);let q=2500/1e3+"s",r,o={primary:"",secondary:""},s;const W=()=>{clearTimeout(s),d()};_.useEffect(()=>(p&&(s=setTimeout(()=>d(),4e3)),()=>{clearTimeout(s)}),[p,s]);function P(){switch(u){case"success":return t.jsx(L,{});case"warning":return t.jsx(A,{});case"error":return t.jsx(z,{});default:return t.jsx(X,{})}}switch(u){case"success":{o={primary:"hsl(147, 57%, 60%)",secondary:"hsl(147, 57%, 55%)"};break}case"warning":{o={primary:"hsl(47, 100%, 50%)",secondary:"hsl(47, 100%, 45%)"};break}case"error":{o={primary:"hsl(359, 100%, 70%)",secondary:"hsl(359, 100%, 65%)"};break}default:{o={primary:"hsl(200, 100%, 65%)",secondary:"hsl(200, 100%, 60%)"};break}}switch(O){case"bottom-center":{r={top:!1,left:!1,center:!0};break}case"top-center":{r={top:!0,left:!1,center:!0};break}case"top-left":{r={top:!0,left:!0,center:!1};break}case"top-right":{r={top:!0,left:!1,center:!1};break}case"bottom-right":{r={top:!1,left:!1,center:!1};break}case"bottom-left":{r={top:!1,left:!0,center:!1};break}default:{r={top:!1,left:!1,right:!1,center:!0};break}}return t.jsx(t.Fragment,{children:p&&t.jsxs(D,{timeout:q,position:r,icolor:o,children:[t.jsxs(G,{children:[P(),t.jsx(H,{children:e})]}),$&&t.jsx(J,{onClick:W,icolor:o,children:t.jsx(R,{})})]})})},F=e=>M`

    from {
      ${e.top?"top: 0":"bottom: 0"};
      opacity: 0;
    }
    to {
      ${e.top?"top: 1rem":"bottom: 1rem"};
      opacity: 1;
    }
`,D=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9999;
  ${({position:e})=>e.top?"top: 1rem":"bottom: 1rem"};
  ${({position:e})=>e.center?"left: 50%":null};
  ${({position:e})=>e.left?"left: 1rem":"right: 1rem"};
  transform: ${({position:e})=>e.center?"translateX(-50%)":null};
  width: max-content;
  min-width: min-content;
  max-width: calc(100% - 2rem);
  min-height: 70px;
  height: auto;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  background-color: ${({icolor:e})=>e==null?void 0:e.primary};
  border: transparent;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.5s;
  animation: ${({position:e})=>F(e)} 0.5s;
`,G=m.div`
  flex: 8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`,H=m.p`
  font-weight: 500;
  line-height: 1.6;
  font-size: 1rem;
  margin-left: 0.875rem;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
`,J=m("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.875rem;
  padding: 0;
  height: 1.7rem;
  width: 1.7rem;
  text-align: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${({icolor:e})=>e==null?void 0:e.secondary};
  }
`;E.__docgenInfo={description:"",methods:[],displayName:"SnackBar",props:{message:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "bottom-center"
| "top-center"
| "bottom-right"
| "top-right"
| "bottom-left"
| "top-left"`,elements:[{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-left"'}]},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "warning" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:""},withCloseIcon:{required:!1,tsType:{name:"boolean"},description:""}}};const Z={component:E,title:"Components/SnackBar",tags:["autodocs"],parameters:{docs:{description:{component:"SnackBar is a component that displays a message to the user."}}}},a={args:{message:"Bonjour !!",type:"warning"}},n={args:{message:"Bonjour !!",position:"top-center",type:"success"}},c={args:{message:"Bonjour !!",position:"bottom-center",type:"success"}},i={args:{message:"Bonjour !!",position:"bottom-center",type:"warning"}},l={args:{message:"Bonjour !!",position:"bottom-center",type:"error",withCloseIcon:!0}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    message: "Bonjour !!",
    type: "warning"
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,y,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    message: "Bonjour !!",
    position: "top-center",
    type: "success"
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,B,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: "Bonjour !!",
    position: "bottom-center",
    type: "success"
  }
}`,...(k=(B=c.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var j,S,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    message: "Bonjour !!",
    position: "bottom-center",
    type: "warning"
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var I,T,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: "Bonjour !!",
    position: "bottom-center",
    type: "error",
    withCloseIcon: true
  }
}`,...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const ee=["Basic","PositionOnTop","PositionOnBottom","SnackBarWarning","SnackBarError"];export{a as Basic,c as PositionOnBottom,n as PositionOnTop,l as SnackBarError,i as SnackBarWarning,ee as __namedExportsOrder,Z as default};
