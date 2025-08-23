import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./iframe-b-ZPA7P_.js";import{d as x}from"./styled-components.browser.esm-Bn8cV_99.js";import"./preload-helper-D9Z9MdNV.js";var k={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=i.createContext&&i.createContext(k),C=["attr","size","title"];function P(e,r){if(e==null)return{};var t=q(e,r),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function q(e,r){if(e==null)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(this,arguments)}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?y(Object(t),!0).forEach(function(n){S(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function S(e,r,t){return r=L(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function L(e){var r=E(e,"string");return typeof r=="symbol"?r:r+""}function E(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function O(e){return e&&e.map((r,t)=>i.createElement(r.tag,g({key:t},r.attr),O(r.child)))}function _(e){return r=>i.createElement(z,f({attr:g({},e.attr)},r),O(e.child))}function z(e){var r=t=>{var{attr:n,size:a,title:o}=e,j=P(e,C),b=a||t.size||"1em",u;return t.className&&(u=t.className),e.className&&(u=(u?u+" ":"")+e.className),i.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,j,{className:u,style:g(g({color:e.color||t.color},t.style),e.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),o&&i.createElement("title",null,o),e.children)};return v!==void 0?i.createElement(v.Consumer,null,t=>r(t)):r(k)}function D(e){return _({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},child:[]}]})(e)}const s={light:{bg:"#ffffff",color:"#0A66C2",border:"1px solid #0A66C2"},dark:{bg:"#0A66C2",color:"#ffffff",border:"none"}},I=x.button`
  width: 240px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  background: ${({$dark:e})=>e?s.dark.bg:s.light.bg};
  color: ${({$dark:e})=>e?s.dark.color:s.light.color};
  border: ${({$dark:e})=>e?s.dark.border:s.light.border};
  border-radius: ${({$shape:e})=>e==="round"?"24px":"6px"};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({className:e})=>e}
`,w=({mode:e,dark:r=!1,disabled:t=!1,className:n,shape:a="round",onClick:o})=>h.jsxs(I,{type:"button",onClick:o,disabled:t,$dark:r,$shape:a,className:n,children:[h.jsx(D,{size:20}),e==="login"?"Login with LinkedIn":"Continue with LinkedIn"]});w.__docgenInfo={description:"",methods:[],displayName:"LinkedInButton",props:{mode:{required:!0,tsType:{name:"union",raw:"'login' | 'continue'",elements:[{name:"literal",value:"'login'"},{name:"literal",value:"'continue'"}]},description:""},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},shape:{required:!1,tsType:{name:"union",raw:"'round' | 'square'",elements:[{name:"literal",value:"'round'"},{name:"literal",value:"'square'"}]},description:"",defaultValue:{value:"'round'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const B={title:"Components/LinkedInButton",component:w,argTypes:{mode:{control:"radio",options:["login","continue"]},dark:{control:"boolean"},disabled:{control:"boolean"},shape:{control:"radio",options:["round","square"]}}},l={args:{mode:"login",dark:!1,shape:"round"}},d={args:{mode:"login",dark:!0,shape:"square"},parameters:{backgrounds:{default:"dark"}}},c={args:{mode:"continue",dark:!1,shape:"round"}},p={args:{mode:"continue",dark:!0,shape:"square"},parameters:{backgrounds:{default:"dark"}}},m={args:{mode:"login",dark:!1,disabled:!0,shape:"round"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'login',
    dark: false,
    shape: 'round'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'login',
    dark: true,
    shape: 'square'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'continue',
    dark: false,
    shape: 'round'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'continue',
    dark: true,
    shape: 'square'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'login',
    dark: false,
    disabled: true,
    shape: 'round'
  }
}`,...m.parameters?.docs?.source}}};const V=["LightLoginRound","DarkLoginSquare","LightContinueRound","DarkContinueSquare","DisabledRound"];export{p as DarkContinueSquare,d as DarkLoginSquare,m as DisabledRound,c as LightContinueRound,l as LightLoginRound,V as __namedExportsOrder,B as default};
