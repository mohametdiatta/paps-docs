import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as b}from"./index-D4H_InIO.js";import{q as s,W as g}from"./styled-components.browser.esm-DbMzg50Y.js";import{B as w}from"./Button-b5j41SZY.js";import{C as L}from"./colors-NlUxhzGV.js";const B=g`
  0% {
    display: flex;
    transform: translate(-5%, -50%);
    opacity: 0;
  }
 
  100% {
   transform: translate(-5%, 0%);
    opacity: 1;
  }
`,S=g`
0% {
     opacity: 1;
  }
  100% {
     opacity: 0;
  }
  `,M=(e,r)=>{const i=r.getBoundingClientRect();return e.clientX>i.left&&e.clientX<i.right&&e.clientY>i.top&&e.clientY<i.bottom},_=s.dialog`
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  opacity: 0;
  &.hide {
    animation: ${S} 300ms ease forwards;
  }
  &.show {
    animation: ${B} 300ms ease forwards;
  }
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;function v({children:e,open:r,width:i,height:o,className:a,onClose:x,disableClickOutsideModal:h}){const t=b.useRef(null);b.useEffect(()=>{var d,c,p,f;return r?((d=t==null?void 0:t.current)==null||d.classList.remove("hide"),(c=t==null?void 0:t.current)==null||c.classList.add("show"),(p=t.current)==null||p.showModal(),document.body.classList.add("modal-open")):((f=t==null?void 0:t.current)==null||f.close(),document.body.classList.remove("modal-open")),()=>{var m,u;(m=t==null?void 0:t.current)==null||m.classList.remove("show"),(u=t==null?void 0:t.current)==null||u.classList.add("hide")}},[r,t]);const l=d=>{h||d.target!==t.current||t.current&&!M(d,t.current)&&x()};return r?n.jsx(_,{width:i,height:o,ref:t,className:`focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0  ${a}`,onCancel:l,onClick:l,children:e}):n.jsx(n.Fragment,{})}v.__docgenInfo={description:"",methods:[],displayName:"CustomModal",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disableClickOutsideModal:{required:!1,tsType:{name:"boolean"},description:""}}};const A=s.button`
  border: 0;
  margin: 0;
  min-width: 141px;
  height: 50px;
  background-color: ${({disabled:e})=>e?"#a2cedf":"rgb(57, 158, 191)"};
  color: rgb(255, 255, 255);
  padding: 0 30px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
  border-radius: 4px;
  letter-spacing: 0.035rem;
  text-transform: none;
  display: inline-flex;
  outline: 0;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
`;s(A)`
  min-width: 141px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 13px 18px;
  border-radius: 4px;
  background-color: #cfecf8;
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
  border-radius: 4px;
  letter-spacing: 0.035rem;
  text-transform: none;
  display: inline-flex;
  outline: 0;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  color: #399ebf;
`;const F=s.button`
  border: 0;
  margin: 0;
  min-width: 64px;
  height: 50px;
  &:hover {
    background-color: #f3f4f6;
  }
  background-color: #ffff;
  color: #797979;
  padding: 0 30px;
  font-size: 15px;
  font-weight: normal;
  line-height: 1;
  border-radius: 4px;
  letter-spacing: 0.035rem;
  text-transform: none;
  display: inline-flex;
  outline: 0;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
`;s.button`
  border: 0;
  margin: 0;
  min-width: 20px;
  height: 30px;
  background-color: #f19949;
  color: #fff;
  padding: 5px 17px;
  font-size: 10px;
  font-weight: normal;
  line-height: 1;
  border-radius: 4px;
  letter-spacing: 0.035rem;
  text-transform: none;
  display: inline-flex;
  outline: 0;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
`;function T(e){var r,i,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(i=T(e[r]))&&(o&&(o+=" "),o+=i)}else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}function O(){for(var e,r,i=0,o="",a=arguments.length;i<a;i++)(e=arguments[i])&&(r=T(e))&&(o&&(o+=" "),o+=r);return o}const q=g`
  0% {
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
`,D=g`
  0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px;
  }
  50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
  }
  100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px;
  }
  `;s.div`
  width: ${e=>e.size};
  height: ${e=>e.size};
  z-index: 2000;
  border-radius: 50%;
  border: 6px solid ${e=>e.color};
  border-top-color: transparent;
  animation: ${q} 1.5s infinite linear;
`;s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  width: 100%;
  height: 100%;
`;const I=s.div`
  width: ${e=>e.size};
  height: ${e=>e.size};
  display: inline-block;
  color: ${({color:e})=>e||L.primary};
  animation: ${q} 1.4s linear infinite;
  & svg {
    display: block;
    & circle {
      animation: ${D} 1.4s ease-in-out infinite;
      stroke-dasharray: 80px, 200px;
      stroke-dashoffset: 0px;
      stroke: currentColor;
    }
  }
`,j=({size:e,color:r})=>n.jsx(I,{size:e,color:r,children:n.jsx("svg",{viewBox:"22 22 44 44",children:n.jsx("circle",{cx:"44",cy:"44",r:"20.2",fill:"none","stroke-width":"3.6"})})});j.__docgenInfo={description:"",methods:[],displayName:"LoaderSvg",props:{size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const E=s.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  & .dialog-body {
    flex: 1 1 0%;
    padding-left: 28px;
    padding-right: 28px;
  }
`,W=s(F)`
  height: 45px;
  min-width: 120px;
  box-sizing: border-box;
  width: auto;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 5px 15px;
  background-color: transparent;
`,X=s.div`
  flex: 0 0 auto;
  margin: 0;
  display: flex;
  padding-left: 28px;
  padding-right: 28px;
  align-items: center;
  border-bottom: 1px solid #d2cdcd;
  top: 0;
  left: 0;
  z-index: 10;
  position: sticky;
  background-color: #ffff;
  height: 68px;
  & .title {
    color: #399ebf;
    width: 100%;
    height: 22px;
    font-size: 18px;
    text-align: left;
    font-family: Montserrat;
    font-weight: bold;
  }
`,Y=s.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`,H=s.div`
  border-top: none;
  padding-bottom: 16px;
  flex: 0 0 auto;
  display: flex;
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  bottom: 0;
  left: 0;
  position: sticky;
  background-color: #ffff;
  z-index: 100;
`;function P({onClose:e,open:r,title:i,width:o,height:a,children:x,onConfirm:h,disableConfirmButton:t,hideFooter:l,onReset:d,showReset:c,cancelTitle:p,confirmTitle:f,hideTitle:m,hideCloseBtn:u,hideConfirmBtn:k,hideCancelBtn:R,className:N,form:C,disableClickOutsideModal:z,isLoading:y,resetText:$}){return n.jsx(v,{open:r,className:O("p-0 rounded-md",N),width:o,height:a,onClose:e,disableClickOutsideModal:z,children:n.jsxs(E,{children:[m?void 0:n.jsxs(X,{children:[n.jsx("div",{className:"title",children:i}),!u&&n.jsx("div",{onClick:e,className:"h-5 w-5 rounded-full cursor-pointer hover:bg-gray-200 items-center",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:n.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]}),n.jsx("div",{className:"dialog-body",children:x}),l?void 0:n.jsxs(H,{children:[c?n.jsx(W,{onClick:d,children:$}):null,n.jsxs(Y,{children:[R?null:n.jsx(w,{className:"hover:bg-paps-primary-light",variant:"outlined",onClick:e,children:p}),!k&&n.jsxs(w,{form:C,color:"primary",onClick:h,disabled:t||y,className:"flex gap-3 items-center !text-center justify-center",children:[n.jsx("span",{children:f}),y&&n.jsx(j,{size:"18px",color:"#fff"})]})]})]})]})})}P.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},disableConfirmButton:{required:!1,tsType:{name:"boolean"},description:""},hideFooter:{required:!1,tsType:{name:"boolean"},description:""},hideTitle:{required:!1,tsType:{name:"boolean"},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showReset:{required:!1,tsType:{name:"boolean"},description:""},hideCloseBtn:{required:!1,tsType:{name:"boolean"},description:""},hideConfirmBtn:{required:!1,tsType:{name:"boolean"},description:""},hideCancelBtn:{required:!1,tsType:{name:"boolean"},description:""},cancelTitle:{required:!1,tsType:{name:"string"},description:""},confirmTitle:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disableClickOutsideModal:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},form:{required:!1,tsType:{name:"string"},description:""},resetText:{required:!1,tsType:{name:"string"},description:""}}};export{P as M,X as S};
