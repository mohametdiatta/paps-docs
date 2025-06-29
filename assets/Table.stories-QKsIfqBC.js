import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{r as p,R as G}from"./index-D4H_InIO.js";import{q as x}from"./styled-components.browser.esm-DbMzg50Y.js";import{C as se}from"./checkbox-2VEbYWeD.js";import{E as sa,D as oa}from"./index-Dp2iK5xo.js";import{a as ia,b as da,c as la}from"./index-DwlTYBn6.js";import{C as ca}from"./colors-NlUxhzGV.js";import{m as ua}from"./index-BymMLH1W.js";const pa=x.td`
  border: ${e=>e!=null&&e.noBordered?"none":"1.5px solid #e2f4fb"};
  border-right: none;
  border-left: none;
  font-size: 12px;
  height: 45px;
  display: table-cell;
  &:nth-child(2) {
    padding-left: ${e=>e!=null&&e.isDraggable?"0px":"10px"};
    padding-right: ${e=>e!=null&&e.isDraggable?"0px":"10px"};
    border: ${e=>e!=null&&e.noBordered?"none":"1.5px solid #e2f4fb"};
    border-left: ${({borderColor:e,noBordered:r,isDraggable:d})=>r||!d?"none":e?`6px solid ${e}`:"border: 1.5px solid #e2f4fb"};
    border-right: none;
    border-radius: 5px 0px 0px 5px;
  }
  &:first-child {
    padding-left: 10px;
    padding-right: 10px;
    border: ${e=>e!=null&&e.noBordered||e!=null&&e.isDraggable?"none":"1.5px solid #e2f4fb"};
    border-left: ${({borderColor:e,noBordered:r,isDraggable:d})=>r||d?"none":e?`6px solid ${e}`:"border: 1.5px solid #e2f4fb"};
    border-right: none;
    border-radius: ${({isDraggable:e})=>e?"0px":"5px 0px 0px 5px"};
  }
  &:last-child {
    border: ${e=>e!=null&&e.noBordered?"none":"1.5px solid #e2f4fb"};

    border-left: none;
    border-radius: 0px 5px 5px 0px;
  }
`;function P({children:e,colSpan:r,borderColor:d,typeBordered:m,noBordered:i,isDraggable:n,...c}){return a.jsx(pa,{colSpan:r,borderColor:m?d:void 0,noBordered:i,isDraggable:n,...c,children:e})}P.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode[] | React.ReactNode",elements:[{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},colSpan:{required:!1,tsType:{name:"number"},description:""},typeBordered:{required:!1,tsType:{name:"boolean"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},noBordered:{required:!1,tsType:{name:"boolean"},description:""},isDraggable:{required:!1,tsType:{name:"boolean"},description:""}}};const ma=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  & .message-title {
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #399ebf;
  }
`;function je(){return a.jsxs(ma,{children:[a.jsx(sa,{}),a.jsx("h2",{className:"message-title",children:"Sorry this table is empty"})]})}je.__docgenInfo={description:"",methods:[],displayName:"EmptyTableContent"};function Ne({rowsPerPageOptions:e,totalPages:r,onPageChange:d,defaultRowsPerPage:m,onRowPerPageChange:i}){const[n,c]=p.useState(1),[q,h]=p.useState(m),y=g=>{d==null||d(g)},w=()=>{n>1&&(y(n-1),c(n-1))},O=()=>{n<r&&(y(n+1),c(n+1))},F=g=>{const k=parseInt(g.target.value,10);h(k),c(1),y(1),i==null||i(k)};return a.jsxs("div",{className:"flex justify-end items-center justify-items-center",children:[a.jsxs("div",{className:" border border-primary flex  rounded-sm",children:[a.jsx("select",{className:" mx-2  text-primary",value:q,onChange:F,children:e==null?void 0:e.map(g=>a.jsx("option",{value:g,children:g},g))}),a.jsx("div",{className:" bg-[#a8d9efa4] p-2 ",children:a.jsx("span",{className:"mr-5 text-primary text-sm",children:"Per page"})})]}),a.jsx("button",{disabled:n===1,onClick:w,children:a.jsx(ia,{color:"#399ebe"})}),a.jsxs("span",{className:"text-primary font-semibold ",children:[a.jsx("span",{className:"border border-primary px-3 py-1 rounded-sm",children:n}),a.jsx("span",{className:"px-1",children:" of "}),a.jsxs("span",{className:"px-1",children:[" ",r," "]})]}),a.jsx("button",{disabled:n===r,onClick:O,children:a.jsx(da,{color:"#399ebe"})})]})}Ne.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!1,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},defaultRowsPerPage:{required:!1,tsType:{name:"number"},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},onRowPerPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const fa=x.div`
  border-top: none;
  padding-bottom: 16px;
  flex: 0 0 auto;
  display: flex;
  padding: 16px 24px;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  bottom: 0;
  left: -100px;
  width: 100%;
  z-index: 10;
  position: sticky;
  background-color: #ffff;
  & .countTotal {
    color: inherit;
    font-size: 0.875rem;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.43;
  }
`;function Re({currentPage:e,totalPages:r=0,onPageChange:d=()=>{},rowsPerPageOptions:m,onRowPerPageChange:i,countTotal:n=0}){return a.jsxs(fa,{children:[n>0?a.jsxs("span",{className:"countTotal",children:[n," elements"]}):null,a.jsx(Ne,{currentPage:e,defaultRowsPerPage:10,onPageChange:d,rowsPerPageOptions:m,totalPages:r,onRowPerPageChange:i})]})}Re.__docgenInfo={description:"",methods:[],displayName:"TableFooter",props:{currentPage:{required:!1,tsType:{name:"number"},description:""},totalPages:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},countTotal:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},defaultRowsPerPage:{required:!1,tsType:{name:"number"},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onRowPerPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const ga=({isRowselected:e,isDisabled:r})=>e?"#e2f4fb":r?"#d6d6d6":"#fff",ya=({isRowSanned:e,isScan:r})=>r&&e?1:r&&!e?.4:1,xa=x.tr`
  border: ${e=>e!=null&&e.noBordered?"none":" 1.5px solid #e2f4fb"};
  color: inherit;
  border: 1.5px solid red;
  cursor: pointer;
  display: table-row;
  outline: 0;
  border-right: none;
  padding-left: 20px;
  border-radius: 5px 0px 0px 5px;
  vertical-align: middle;
  background-color: ${({isRowselected:e,isRowSanned:r,isScan:d,isDisabled:m})=>ga({isRowselected:e,isDisabled:m})};
  opacity: ${({isRowSanned:e,isScan:r})=>ya({isRowSanned:e,isScan:r})};
  font-size: 12px;
`;function Se({children:e,isRowselected:r,onRowClick:d,data:m,isScan:i,isRowSanned:n,isRowDisabled:c,noBordered:q,...h}){const y=c==null?void 0:c(m),w=()=>{if(i&&!n||y)return null;d==null||d(m)};return a.jsx(xa,{onClick:w,isRowselected:r,isScan:i,isRowSanned:n,isDisabled:y,noBordered:q,...h,children:e})}Se.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode[] | React.ReactNode",elements:[{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},data:{required:!0,tsType:{name:"T"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(data?: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:""},onRowChecked:{required:!1,tsType:{name:"signature",type:"function",raw:"(data?: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:""},isRowselected:{required:!1,tsType:{name:"boolean"},description:""},rowIdentifier:{required:!0,tsType:{name:"T"},description:""},isScan:{required:!1,tsType:{name:"boolean"},description:""},isRowSanned:{required:!1,tsType:{name:"boolean"},description:""},scannedRows:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},noBordered:{required:!1,tsType:{name:"boolean"},description:""},isRowDisabled:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"boolean"}}},description:""}}};const ba=x.div`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  min-height: ${({minHeight:e})=>e||"450px"};
  height: ${({height:e})=>e};
  max-height: max-content;
  position: relative;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`,ha=x.table`
  -webkit-border-vertical-spacing: 5px;
  border-collapse: separate;
  border-spacing: 0px 8px;
  width: 100%;
  & tbody {
    overflow-y: auto;
    max-height: 400px;
  }
  & .svg {
    background-color: transparent;
    border-radius: 6px;
  }
  & .active {
    background-color: #5aadc9;
    border-radius: 6px;
  }
`,Ta=x.thead`
  border: 1.5px solid #e2f4fb;
  display: table-header-group;
  border-right: none;
  padding: 20px;
  height: 48px;
  font-size: 14px;
  border-radius: 5px 0px 0px 5px;
  & .tr-head {
    color: inherit;
    border: 1.5px solid #e2f4fb;
    cursor: pointer;
    display: table-row;
    outline: 0;
    border-right: none;
    padding: 10px;
    border-radius: 5px 0px 0px 5px;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 20px;
  }
  & .td-data {
    color: rgb(57, 158, 191);
    background-color: rgb(226, 244, 251);
    top: 0;
    left: 0;
    z-index: 2;
    position: sticky;
    text-align: left;
    border: 0;
    font-weight: 500;
    line-height: 24px;
    text-transform: capitalize;
    &:first-child {
      border-top-left-radius: 7px;
      padding-left: 10px;
    }
    &:last-child {
      border-top-right-radius: 7px;
      padding-right: 10px;
    }
  }
`,va=x.td`
  height: auto;
  border: 1.5px solid #e2f4fb;
  border-radius: 7px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
`;function Pe({columns:e,data:r,isChecked:d,onRowClick:m,onRowChecked:i,rowIdentifier:n,selectedRows:c,hasAllSelection:q,currentPage:h,totalPages:y=0,onPageChange:w=()=>{},rowsPerPageOptions:O,footer:F,hasCollapse:g,collapseRendering:k,onCollapse:W,isloading:Ce,onRowPerPageChange:ke,selectedRow:Ie,typeBordered:H,fieldToBorder:I,borderMap:A,searchTerm:j,header:Ae=!0,isScan:Q,scannedRows:$,countTotal:$e,rowsPerPage:X=0,hasVirtualPaging:Ee,isRowDisabled:_e,height:Ve,minHeight:ze,emptyComponent:Be=a.jsx(je,{}),noBordered:M=!1,onRowsDropped:J,isDraggable:b=!1,renderCollapseLabel:K}){const[f,E]=p.useState(c||[]),[De,Le]=p.useState(""),[Y,Z]=p.useState(0),[Oe,ee]=p.useState(0),[u,ae]=p.useState([]),[N,Fe]=p.useState(n),[We,Me]=p.useState(""),[te,Je]=p.useState("desc"),[Ke,Ue]=p.useState(!1),Ge=t=>()=>{Z(t)},He=t=>()=>{ee(t)},Qe=()=>{const t=[...u],s=t[Y];t.splice(Y,1),t.splice(Oe,0,s),Z(0),ee(0),J==null||J(t),ae(t)};p.useEffect(()=>{c&&E(c),Ue((c==null?void 0:c.length)===(u==null?void 0:u.length))},[c,u]),p.useEffect(()=>{ae([...r||[]])},[r]);const Xe=t=>{if(q)if(t.target.checked){const s=u.map(l=>l[n]);E(s),i&&i(s)}else E([]),i&&i([])},Ye=G.useCallback((t,s)=>{const l=f.indexOf(s);let o=[];l===-1?o=o.concat(f,s):l===0?o=o.concat(f.slice(1)):l===f.length-1?o=o.concat(f.slice(0,-1)):l>0&&(o=o.concat(f.slice(0,l),f.slice(l+1))),i&&i(o),(!c||!i)&&E(o)},[i,f]);let U=null;U=G.useMemo(()=>u,[u]);const re=G.useMemo(()=>j?ua(u,j):[],[u,j]),Ze=!!j&&U?re:U,ea=(u==null?void 0:u.length)??0;function aa(t=0){const s=t*X,l=Math.min(s+X,ea);return u.slice(s,l)||[]}const ta=t=>N?[...t].sort((o,R)=>te==="asc"?o[N]>R[N]?1:-1:o[N]<R[N]?1:-1):t,ra=(t,s)=>()=>{Fe(s),Me(t)},na=()=>{Je(te==="asc"?"desc":"asc")},T=ta(j?re:Ee?aa((h??1)-1)||[]:Ze);return a.jsxs(ba,{height:Ve,minHeight:ze,children:[a.jsxs(ha,{className:"w-full",children:[Ae&&a.jsx(Ta,{children:a.jsxs("tr",{className:"tr-head",children:[b?a.jsx("td",{className:"td-data"}):void 0,d?a.jsx("td",{className:"td-data",children:a.jsx(se,{onClick:Xe,checked:Ke})}):void 0,g?a.jsx("td",{className:"td-data"}):void 0,e==null?void 0:e.map(({title:t,key:s},l)=>a.jsx("td",{className:"td-data",onClick:ra(t,s||n),children:a.jsxs("span",{className:"flex items-center gap-1",children:[t,t===We&&a.jsx("span",{onClick:na,children:a.jsx(la,{color:ca.primary})})]})},l))]})}),a.jsx("tbody",{children:Ce?Array.from({length:e.length},(t,s)=>s).map(t=>a.jsx("tr",{children:a.jsx("td",{colSpan:e.length+2,className:"max-w-sm animate-pulse h-9 bg-gray-100 rounded-md dark:bg-gray-500  mb-4"})},t)):(T==null?void 0:T.length)===0?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length+2,children:Be})}):T==null?void 0:T.map((t,s)=>{const l=t==null?void 0:t[n],o=De===`collapse-${l}`,R=$==null?void 0:$.includes(l);return a.jsxs(a.Fragment,{children:[a.jsxs(Se,{onRowClick:m,data:t,rowIdentifier:n,isRowselected:(Ie||"")===(t==null?void 0:t[n]),isScan:Q,isRowSanned:R,scannedRows:$,isRowDisabled:_e,noBordered:M,onDragStart:Ge(s),onDragEnter:He(s),onDragEnd:Qe,draggable:b,children:[b?a.jsx(P,{isDraggable:b,children:a.jsx(oa,{})}):void 0,d?a.jsx(P,{typeBordered:H,borderColor:A&&I?A[t[I]]:void 0,noBordered:M,isDraggable:b,children:a.jsx(se,{onClick:S=>{if(Q&&!R)return null;i&&Ye(S,l),S.stopPropagation()},checked:f==null?void 0:f.includes(l)})}):void 0,g?a.jsx(P,{draggable:b,children:a.jsxs("span",{className:"flex gap-2 items-center cursor-pointer",onClick:()=>{W==null||W(t,!o),Le(o?"":`collapse-${l}`)},children:[a.jsx("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",height:"17px",width:"17px",className:o?"active":"svg",children:o?a.jsx("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:o?"#fff":"#535e6d"}):a.jsx("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",fill:o?"#fff":"#535e6d"})}),(K==null?void 0:K(t))||""]})}):void 0,e==null?void 0:e.map(({render:S,key:ne},wa)=>a.jsx(P,{typeBordered:H,borderColor:A&&I?A[t[I]]:void 0,noBordered:M,isDraggable:b,children:S?S(t):ne?t==null?void 0:t[ne]:"N/A"},s))]},s),o?a.jsx("tr",{children:a.jsx(va,{colSpan:e.length+2,children:k})}):void 0]})})})]}),F&&y?a.jsx(Re,{rowsPerPageOptions:O,totalPages:y,currentPage:h,onPageChange:w,defaultRowsPerPage:10,onRowPerPageChange:ke,countTotal:$e}):void 0]})}Pe.__docgenInfo={description:"",methods:[],displayName:"Table",props:{isloading:{required:!1,tsType:{name:"boolean"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnsType",elements:[{name:"T"}],raw:"ColumnsType<T>"}],raw:"ColumnsType<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowIdentifier:{required:!0,tsType:{name:"T"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(data?: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:""},selectedRows:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},hasAllSelection:{required:!1,tsType:{name:"boolean"},description:""},currentPage:{required:!1,tsType:{name:"number"},description:""},totalPages:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},countTotal:{required:!1,tsType:{name:"number"},description:""},rowsPerPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},defaultRowsPerPage:{required:!1,tsType:{name:"number"},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},footer:{required:!1,tsType:{name:"boolean"},description:""},header:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},collapseRendering:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hasCollapse:{required:!1,tsType:{name:"boolean"},description:""},renderCollapseLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"ReactNode"}}},description:""},searchTerm:{required:!1,tsType:{name:"string"},description:""},selectedRow:{required:!1,tsType:{name:"string"},description:""},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, collapse: boolean) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"boolean"},name:"collapse"}],return:{name:"void"}}},description:""},onRowPerPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},typeBordered:{required:!1,tsType:{name:"boolean"},description:""},fieldToBorder:{required:!1,tsType:{name:"T"},description:""},borderMap:{required:!1,tsType:{name:"M"},description:""},type:{required:!1,tsType:{name:"ERequestType"},description:""},isScan:{required:!1,tsType:{name:"boolean"},description:""},scannedRows:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},hasVirtualPaging:{required:!1,tsType:{name:"boolean"},description:""},isRowDisabled:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"boolean"}}},description:""},height:{required:!1,tsType:{name:"string"},description:""},minHeight:{required:!1,tsType:{name:"string"},description:""},emptyComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<EmptyTableContent />",computed:!1}},noBordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowsDropped:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"data"}],return:{name:"void"}}},description:""},isDraggable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Aa={component:Pe,title:"Components/Table",tags:["autodocs"],parameters:{docs:{description:{component:"A Table is a component that displays data in a tabular format, allowing for easy comparison and analysis of information."}}},argTypes:{isloading:{control:{type:"boolean"},defaultValue:!1}}},v=[{title:"col1",key:"uid"},{title:"col2",key:"name"}],C=[{uid:"1",name:"John Doe"},{uid:"2",name:"Jane Doe"}],_={args:{data:C,columns:v}},V={args:{data:C,columns:v,isloading:!0}},z={args:{data:[],rowIdentifier:"uid",columns:v,isloading:!1}},B={args:{data:C,columns:v,rowIdentifier:"uid",hasCollapse:!0,selectedRows:["1"],renderCollapseLabel:e=>a.jsx("div",{children:e.name}),collapseRendering:a.jsx("div",{className:"h-[100px]",children:"Collapse content"})}},D={args:{data:C,columns:v,hasAllSelection:!0,isChecked:!0,rowIdentifier:"uid",selectedRows:["1"],onRowChecked:e=>{console.log("Selected rows:",e)}}},L={args:{data:C,columns:v,currentPage:1,totalPages:5,rowsPerPage:10,rowsPerPageOptions:[5,10,20],footer:!0,onPageChange:e=>{console.log("Page changed to:",e)}}};var oe,ie,de;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    data,
    columns
  }
}`,...(de=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ce,ue;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    data,
    columns,
    isloading: true
  }
}`,...(ue=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,fe;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    data: [],
    rowIdentifier: "uid",
    columns,
    isloading: false
  }
}`,...(fe=(me=z.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,ye,xe;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    data,
    columns,
    rowIdentifier: "uid",
    hasCollapse: true,
    selectedRows: ["1"],
    renderCollapseLabel: row => <div>{row.name}</div>,
    collapseRendering: <div className="h-[100px]">Collapse content</div>
  }
}`,...(xe=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var be,he,Te;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    data,
    columns,
    hasAllSelection: true,
    isChecked: true,
    rowIdentifier: "uid",
    selectedRows: ["1"],
    onRowChecked: selectedRows => {
      console.log("Selected rows:", selectedRows);
    }
  }
}`,...(Te=(he=D.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var ve,qe,we;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    data,
    columns,
    currentPage: 1,
    totalPages: 5,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20],
    footer: true,
    onPageChange: page => {
      console.log("Page changed to:", page);
    }
  }
}`,...(we=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:we.source}}};const $a=["Basic","Loading","Empty","WithCollapse","WithSelection","WithPagination"];export{_ as Basic,z as Empty,V as Loading,B as WithCollapse,L as WithPagination,D as WithSelection,$a as __namedExportsOrder,Aa as default};
