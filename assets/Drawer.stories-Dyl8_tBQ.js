import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{q as o}from"./styled-components.browser.esm-DbMzg50Y.js";import{c as h}from"./index-X-TuB2Qy.js";import{S as u}from"./index-C5jPA_nh.js";import{R as x}from"./index-D4H_InIO.js";import{B as g}from"./Button-b5j41SZY.js";import"./colors-NlUxhzGV.js";const v=o.div`
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  background-color: #ffffff;
  width: ${({width:t})=>t||"300px"};
  flex-shrink: 0;
  & .drawer-body {
    flex: 1 1 0%;
    padding-left: 28px;
    padding-right: 28px;
  }

  &.left {
    left: 0;
    right: auto;
  }

  &.right {
    right: 0;
    left: auto;
  }

  &.hidden {
    visibility: hidden;
    width: 240px;
    transform: translateX(240px);
    flex-shrink: 0;
    transition: 325ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  &.animate {
    visibility: visible;
    transform: none;
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0px 16px 24px 2px rgba(0, 0, 0, 0.14),
      0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  }
`,y=o.div`
  min-height: 64px;
`,w=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({open:t})=>t?1:0};
  z-index: ${({open:t})=>t?1e3:-1};
  visibility: ${({open:t})=>t?"visible":"hidden"};
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
`,l=({onClose:t,open:r,title:n,children:d,anchor:i="left",width:s})=>e.jsxs(e.Fragment,{children:[e.jsx(w,{onClick:t,"aria-hidden":"true",open:r}),e.jsxs(v,{tabIndex:-1,open:r,className:h({left:i==="left",right:i==="right",hidden:!r,animate:r}),width:s,children:[e.jsx(y,{children:e.jsxs(u,{children:[e.jsx("div",{className:"title",children:n}),e.jsx("div",{onClick:t,className:"h-5 w-5 rounded-full cursor-pointer hover:bg-gray-200 items-center",children:e.jsx(b,{})})]})}),e.jsx("div",{className:"drawer-body",children:d})]})]}),b=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})});l.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},anchor:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const q={component:l,title:"Components/Drawer",tags:["autodocs"],parameters:{docs:{description:{component:"A Drawer is a UI component that slides in from the side of the screen, typically used for navigation or additional content."}}}},a={args:{open:!1,onClose:()=>{},title:"Drawer Title",children:e.jsx("div",{children:"Drawer Content"}),anchor:"right"},render:t=>{const[r,n]=x.useState(!1);let{open:d,...i}=t;const s=()=>{n(f=>!f),t.onClose=()=>{n(!1)}};return e.jsxs("div",{className:"flex justify-center items-center h-screen",children:[e.jsx(g,{variant:"filled",color:"primary",onClick:s,children:"toggle"}),e.jsx(l,{open:r,...i})]})}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    title: "Drawer Title",
    children: <div>Drawer Content</div>,
    anchor: "right"
  },
  render: args => {
    const [state, setOpen] = React.useState(false);
    let {
      open,
      ...rest
    } = args;
    const handleOpen = () => {
      setOpen(prev => !prev);
      args.onClose = () => {
        setOpen(false);
      };
    };
    return <div className="flex justify-center items-center h-screen">
        <Button variant="filled" color="primary" onClick={handleOpen}>
          toggle
        </Button>
        <Drawer open={state} {...rest} />
      </div>;
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const S=["Basic"];export{a as Basic,S as __namedExportsOrder,q as default};
