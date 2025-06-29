import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{M as l}from"./index-C5jPA_nh.js";import{B as m}from"./Button-b5j41SZY.js";import{R as f}from"./index-D4H_InIO.js";import"./styled-components.browser.esm-DbMzg50Y.js";import"./colors-NlUxhzGV.js";import"./index-X-TuB2Qy.js";const N={component:l,title:"Components/Modal",tags:["autodocs"],parameters:{docs:{description:{component:"A Modal is a dialog box/popup window that is displayed on top of the current page, used to capture user input or display information."}}}},n={args:{open:!1,onClose:()=>{},title:"Drawer Title",confirmTitle:"Confirm",cancelTitle:"Cancel"},render:t=>{const[i,s]=f.useState(!1);let{open:u,...c}=t;const d=()=>{s(p=>!p),t.onClose=()=>{s(!1)}};return e.jsxs("div",{className:"flex justify-center items-center h-screen",children:[e.jsx(m,{variant:"filled",color:"primary",onClick:d,children:"Cliquer ici pour ouvrir le modal"}),e.jsx(l,{open:i,...c,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"text-center text-lg font-bold",children:"Modal Content"}),e.jsx("div",{className:"text-center",children:"This is a simple modal example."})]})})]})}};var o,a,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    title: "Drawer Title",
    confirmTitle: "Confirm",
    cancelTitle: "Cancel"
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
          Cliquer ici pour ouvrir le modal
        </Button>
        <Modal open={state} {...rest}>
          <div className="flex flex-col gap-4">
            <div className="text-center text-lg font-bold">Modal Content</div>
            <div className="text-center">This is a simple modal example.</div>
          </div>
        </Modal>
      </div>;
  }
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const O=["Basic"];export{n as Basic,O as __namedExportsOrder,N as default};
