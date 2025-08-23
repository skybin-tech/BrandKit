import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-b-ZPA7P_.js";import{d as h,l as s}from"./styled-components.browser.esm-Bn8cV_99.js";import{u as g}from"./useLink-BduvE47f.js";import"./preload-helper-D9Z9MdNV.js";const f=()=>a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:[a.jsx("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z",fill:"#4285F4"}),a.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184L12.048 13.56c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.952v2.332C2.438 16.983 5.482 18 9 18z",fill:"#34A853"}),a.jsx("path",{d:"M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.952C.347 6.173 0 7.548 0 9s.348 2.827.952 4.042l3.012-2.332z",fill:"#FBBC05"}),a.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 1.017.952 3.42L3.964 5.752C4.672 3.625 6.656 2.001 9 2.001z",fill:"#EA4335"})]}),x={light:s`
    color: #1f1f1f;
    background: #ffffff;
    border: 1px solid #dadce0;
  `,dark:s`
    color: #e8eaed;
    background: #131314;
    border: 1px solid #8e8e93;
  `},b={square:s`border-radius: 4px;`,rounded:s`border-radius: 9999px;`},l={SI:"Sign in with Google",SU:"Sign up with Google",ctn:"Continue with Google",na:"Sign in with Google"},v=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({$width:e})=>e??"auto"};
  height: ${({$height:e})=>e??"40px"};
  padding: 0 12px;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  ${({$theme:e})=>x[e]};
  ${({$shape:e})=>b[e]};

  &:hover:not(:disabled) {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
                0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  &:active:not(:disabled) {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3),
                0 4px 8px 3px rgba(60, 64, 67, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`,i=({theme:e="light",shape:o="square",variant:t,width:d,height:p,onClick:u,disabled:c,className:m})=>(g("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"),a.jsxs(v,{type:"button",$theme:e,$shape:o,$width:d,$height:p,onClick:u,disabled:c,className:m,"aria-label":l[t],children:[a.jsx(f,{}),l[t]]}));i.__docgenInfo={description:"",methods:[],displayName:"GoogleButton",props:{theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'rounded' | 'square'",elements:[{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},variant:{required:!0,tsType:{name:"union",raw:"'SI' | 'SU' | 'ctn' | 'na'",elements:[{name:"literal",value:"'SI'"},{name:"literal",value:"'SU'"},{name:"literal",value:"'ctn'"},{name:"literal",value:"'na'"}]},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Components/GoogleButton",component:i,tags:["autodocs"],argTypes:{theme:{control:"radio",options:["light","dark"]},shape:{control:"radio",options:["square","rounded"]},variant:{control:"radio",options:["SI","SU","ctn","na"]},width:{control:{type:"text"}},height:{control:{type:"text"}},disabled:{control:"boolean"}},args:{theme:"light",shape:"square",variant:"SI",width:void 0,height:void 0,disabled:!1}},r={},n={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["light","dark"].map(e=>["square","rounded"].map(o=>["SI","SU","ctn","na"].map(t=>a.jsx(i,{theme:e,shape:o,variant:t},`${e}-${o}-${t}`))))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
            {(['light', 'dark'] as const).map(theme => (['square', 'rounded'] as const).map(shape => (['SI', 'SU', 'ctn', 'na'] as const).map(variant => <GoogleButton key={\`\${theme}-\${shape}-\${variant}\`} theme={theme} shape={shape} variant={variant} />)))}\r
        </div>
}`,...n.parameters?.docs?.source}}};const k=["Playground","AllVariants"];export{n as AllVariants,r as Playground,k as __namedExportsOrder,j as default};
