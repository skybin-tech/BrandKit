import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-b-ZPA7P_.js";import{d as m,l as s}from"./styled-components.browser.esm-Bn8cV_99.js";import{u as p}from"./useLink-BduvE47f.js";import"./preload-helper-D9Z9MdNV.js";const f=""+new URL("Secondary-DSCWLEyl.png",import.meta.url).href,g=""+new URL("Primary-CmgJh3Hd.png",import.meta.url).href,y={filled:s`
    background: #1877f2;
    color: #ffffff;
    border: none;
  `,outline:s`
    background: #ffffff;
    color: #1877f2;
    border: 2px solid #1877f2;
  `},b=m.button`
  width: 240px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
  ${({$variant:r})=>y[r]};

  &:hover {
    opacity: 0.9;
  }
`,l=({mode:r,variant:i,onClick:c,disabled:d,className:u})=>(p("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"),a.jsxs(b,{type:"button",onClick:c,$variant:i,disabled:d,className:u,children:[a.jsx("img",{src:i==="filled"?f:g,alt:"Facebook",width:20,height:20}),r==="login"?"Login with Facebook":"Continue with Facebook"]}));l.__docgenInfo={description:"",methods:[],displayName:"FacebookButton",props:{mode:{required:!0,tsType:{name:"union",raw:"'login' | 'continue'",elements:[{name:"literal",value:"'login'"},{name:"literal",value:"'continue'"}]},description:""},variant:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/FacebookButton",component:l,argTypes:{mode:{control:"radio",options:["login","continue"]},variant:{control:"radio",options:["filled","outline"]}}},e={args:{mode:"login",variant:"filled"}},o={args:{mode:"login",variant:"outline"}},n={args:{mode:"continue",variant:"filled"}},t={args:{mode:"continue",variant:"outline"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'login',
    variant: 'filled'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'login',
    variant: 'outline'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'continue',
    variant: 'filled'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'continue',
    variant: 'outline'
  }
}`,...t.parameters?.docs?.source}}};const C=["FilledLogin","OutlineLogin","FilledContinue","OutlineContinue"];export{n as FilledContinue,e as FilledLogin,t as OutlineContinue,o as OutlineLogin,C as __namedExportsOrder,F as default};
