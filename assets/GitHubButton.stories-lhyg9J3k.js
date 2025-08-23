import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{R as l}from"./iframe-b-ZPA7P_.js";import{d as q}from"./styled-components.browser.esm-Bn8cV_99.js";import"./preload-helper-D9Z9MdNV.js";function L(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function M(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?L(Object(r),!0).forEach(function(t){R(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function R(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},m.apply(this,arguments)}function _(e,n){if(e==null)return{};var r={},t=Object.keys(e),a,o;for(o=0;o<t.length;o++)a=t[o],!(n.indexOf(a)>=0)&&(r[a]=e[a]);return r}function W(e,n){if(e==null)return{};var r=_(e,n),t,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var Z=["aria-label","aria-labelledby","tabIndex","className","fill","size","verticalAlign","id","title","style"],K={small:16,medium:32,large:64};function V(e,n,r){var t=r(),a=Object.keys(t),o=l.forwardRef(function(i,E){var b=i["aria-label"],h=i["aria-labelledby"],v=i.tabIndex,y=i.className,N=y===void 0?"":y,k=i.fill,$=k===void 0?"currentColor":k,O=i.size,w=O===void 0?16:O,j=i.verticalAlign,G=j===void 0?"text-bottom":j,S=i.id,x=i.title,z=i.style,H=W(i,Z),g=K[w]||w,c=F(a,g),P=t[c].width,A=g*(P/c),B=t[c].path,I=b||h,T=I?"img":void 0;return l.createElement("svg",m({ref:E},H,{"aria-hidden":I?void 0:"true",tabIndex:v,focusable:v>=0?"true":"false","aria-label":b,"aria-labelledby":h,className:"".concat(n," ").concat(N).trim(),role:T,viewBox:"0 0 ".concat(P," ").concat(c),width:A,height:g,fill:$,id:S,display:"inline-block",overflow:"visible",style:M({verticalAlign:G},z)}),x?l.createElement("title",null,x):null,B)});return o.displayName=e,o}function F(e,n){return e.map(function(r){return parseInt(r,10)}).reduce(function(r,t){return t<=n?t:r},e[0])}var J=V("MarkGithubIcon","octicon octicon-mark-github",function(){return{16:{width:16,path:l.createElement("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})},24:{width:24,path:l.createElement("path",{d:"M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"})}}});const s={light:{bg:"#ffffff",fg:"#24292f",border:"1px solid #d0d7de"},dark:{bg:"#24292f",fg:"#ffffff",border:"none"}},Q=q.button`
  width: 240px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;

  background: ${({$dark:e})=>e?s.dark.bg:s.light.bg};
  color: ${({$dark:e})=>e?s.dark.fg:s.light.fg};
  border: ${({$dark:e})=>e?s.dark.border:s.light.border};

  /* Icon color must remain GitHub black or white */
  svg {
    fill: ${({$dark:e})=>e?"#ffffff":"#24292f"};
  }

  &:hover {
    opacity: 0.9;
  }
`,D=({mode:e,dark:n=!1,onClick:r,disabled:t,className:a})=>C.jsxs(Q,{onClick:r,type:"button",$dark:n,disabled:t,className:a,children:[C.jsx(J,{size:20}),e==="login"?"Login with GitHub":"Continue with GitHub"]});D.__docgenInfo={description:"",methods:[],displayName:"GitHubButton",props:{mode:{required:!0,tsType:{name:"union",raw:"'login' | 'continue'",elements:[{name:"literal",value:"'login'"},{name:"literal",value:"'continue'"}]},description:""},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const te={title:"Components/GitHubButton",component:D,argTypes:{mode:{control:"radio",options:["login","continue"]},dark:{control:"boolean"}}},d={args:{mode:"login",dark:!1}},u={args:{mode:"login",dark:!0},parameters:{backgrounds:{default:"dark"}}},f={args:{mode:"continue",dark:!1}},p={args:{mode:"continue",dark:!0},parameters:{backgrounds:{default:"dark"}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'login',
    dark: false
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'login',
    dark: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'continue',
    dark: false
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'continue',
    dark: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...p.parameters?.docs?.source}}};const re=["LightLogin","DarkLogin","LightContinue","DarkContinue"];export{p as DarkContinue,u as DarkLogin,f as LightContinue,d as LightLogin,re as __namedExportsOrder,te as default};
