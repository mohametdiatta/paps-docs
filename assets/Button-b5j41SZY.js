import{c as a}from"./index-X-TuB2Qy.js";import{q as c}from"./styled-components.browser.esm-DbMzg50Y.js";import{t as u,b as m,a as b,T as f}from"./colors-NlUxhzGV.js";const g={small:"px-[20px] py-[13px] text-sm",medium:"p-6 text-base",large:"p-7 text-lg"},h={circle:"rounded-full",rounded:"rounded-md",square:"rounded-none"},C=(e,t)=>{const r=b[t],o=u[t],s=m[t];switch(e){case"filled":return a("text-white",r);case"outlined":return a(o,"border",s);case"text":return a(o,"hover:underline")}},w=e=>{const{color:t,size:r,variant:o,shape:s}=e;return a(C(o,t),g[r],h[s])},B=c.button.attrs(({fullWidth:e=!1,variant:t="filled",color:r="primary",size:o="small",disabled:s=!1,shape:l="rounded",label:n,children:d,onClick:i,icon:y,className:p,...x})=>({className:a(p,w({variant:t,color:r,size:o,shape:l}),{"w-full":e},{"opacity-50":s},"capitalize text-lg min-w-[150px] px-[20px] py-[13px] font-semibold hover:font-bold "),children:d??n,disabled:s,onClick:i,...x}))`
  :focus {
    box-shadow: ${({variant:e})=>e==="filled"&&"inset 0px 5px 10px rgba(0, 0, 0, 0.32)"};
    text-shadow: ${({variant:e})=>e==="text"&&"text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"};
  }
  :hover {
    background: ${({color:e,variant:t})=>t==="filled"&&`linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      ${f[e]}`};
  }
`;export{B};
