(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{3766:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/recreate-axios-from-scratch-ii",function(){return t(6638)}])},157:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(5893),s=(t(7294),t(3905)),i=t(9008),o=t.n(i),c=t(7087);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}var p=function(){return(0,r.jsxs)("svg",{className:"marker",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,r.jsx)("polyline",{points:"12 5 19 12 12 19"})]})},u={ul:function(e){var n=e.children;return Array.isArray(n)?(0,r.jsx)("ul",{children:n.filter((function(e){return e.props&&"li"===e.props.originalType})).map((function(e,n){return(0,r.jsxs)("li",{children:[(0,r.jsx)(p,{}),(0,r.jsx)("div",{children:e.props.children})]},n)}))}):(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)(p,{}),(0,r.jsx)("div",{children:n.props.children})]})})},ol:function(e){var n=e.children;return Array.isArray(n)?(0,r.jsx)("ol",{children:n.filter((function(e){return e.props&&"li"===e.props.originalType})).map((function(e,n){return(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"marker",children:"".concat(n+1,".")}),(0,r.jsx)("div",{children:e.props.children})]},n)}))}):(0,r.jsx)("ol",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"marker",children:"1."}),(0,r.jsx)("div",{children:n})]})})},pre:function(e){var n=e.children.props,t=n.className,s=n.children,i=(n.metastring,t.replace(/language-/,""));return(0,r.jsx)(c.ZP,a({},c.lG,{code:s.replace(/\n$/,""),language:i,theme:void 0,children:function(e){var n=e.className,t=e.tokens,s=e.getLineProps,i=e.getTokenProps;return(0,r.jsx)("pre",{className:n,children:(0,r.jsx)("code",{className:n,children:t.map((function(e,n){return(0,r.jsxs)("div",a({},s({line:e,key:n}),{children:[(0,r.jsx)("span",{className:"line-number",children:n+1}),(0,r.jsx)("div",{className:"token-line-content",children:e.map((function(e,n){return(0,r.jsx)("span",a({},i({token:e,key:n})),n)}))})]}),n)}))})})}}))}};function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){var n=e.meta,t=e.children;return(0,r.jsxs)("main",{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:n.title})}),(0,r.jsxs)("article",{className:"post-container",children:[(0,r.jsxs)("div",{className:"post-title-container",children:[(0,r.jsx)("h1",{className:"post-title",children:n.title}),(0,r.jsx)("p",{className:"post-date",children:n.date})]}),(0,r.jsx)(s.Zo,{components:u,children:t})]})]})}function d(e){return function(n){return(0,r.jsx)(h,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}({},n,{meta:e}))}}},6638:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});t(7294);var r=t(3905),s=t(157);function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o={},c=(0,s.Z)({title:"Axios \u6e90\u7801\u9605\u8bfb\u7b14\u8bb0\u4e4b\u2014\u2014\u5f92\u624b\u6495 Ajax\uff08\u4e8c\uff09",date:"JAN 14, 2022",desc:"\u4e0a\u4e00\u6b21\u6211\u4eec\u5df2\u7ecf\u5c01\u88c5\u4e86\u4e00\u4e2a\u201c\u7b80\u964b\u7248\u201d\u7684 Axios\uff0c\u5b9e\u73b0\u4e86\u914d\u7f6e\u5316\uff0c\u591a\u79cd\u65b9\u5f0f\u8c03\u7528\uff0cPromise \u5316\u7b49\u529f\u80fd\u3002\u9664\u6b64\u4ee5\u5916\uff0cAxios \u8fd8\u6709\u4e24\u4e2a\u5f88\u91cd\u8981\u7684\u529f\u80fd\uff1a\u62e6\u622a\u5668\u3001\u53d6\u6d88\u8bf7\u6c42\u3002\u8fd9\u4e00\u6b21\u6211\u4eec\u5148\u6765\u5b9e\u73b0\u4e00\u4e2a\u62e6\u622a\u5668\u7684\u529f\u80fd\u3002",type:"xray"});function l(e){var n=e.components,t=i(e,["components"]);return(0,r.kt)(c,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",Object.assign({parentName:"p"},{href:"/post/recreate-axios-from-scratch-i"}),"\u4e0a\u4e00\u6b21"),"\u6211\u4eec\u5df2\u7ecf\u5c01\u88c5\u4e86\u4e00\u4e2a\u201c\u7b80\u964b\u7248\u201d\u7684 Axios\uff0c\u5b9e\u73b0\u4e86\u914d\u7f6e\u5316\uff0c\u591a\u79cd\u65b9\u5f0f\u8c03\u7528\uff0cPromise \u5316\u7b49\u529f\u80fd\u3002\u9664\u6b64\u4ee5\u5916\uff0cAxios \u8fd8\u6709\u4e24\u4e2a\u5f88\u91cd\u8981\u7684\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62e6\u622a\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u8bf7\u6c42")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b21\u6211\u4eec\u5148\u6765\u5b9e\u73b0\u4e00\u4e2a\u62e6\u622a\u5668\u7684\u529f\u80fd\u3002"),(0,r.kt)("h2",null,"\u5355\u4e2a\u8bf7\u6c42\u62e6\u622a\u5668"),(0,r.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0cAjax \u8bf7\u6c42\u53ef\u4ee5\u7c97\u7565\u5730\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u524d\uff0c\u5904\u7406\u914d\u7f6e\u7b49"),(0,r.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u4e2d\uff0c\u7b49\u5f85\u670d\u52a1\u5668\u54cd\u5e94"),(0,r.kt)("li",{parentName:"ol"},"\u54cd\u5e94\uff0c\u5f97\u5230\u7ed3\u679c\u6216\u5f02\u5e38")),(0,r.kt)("p",null,"\u62e6\u622a\u5668\u5176\u5b9e\u5c31\u662f\u4f5c\u7528\u5728\u8bf7\u6c42\u524d\u3001\u540e\uff08\u54cd\u5e94\uff09\u8fd9\u4e24\u4e2a\u9636\u6bb5\u7684\u201c\u94a9\u5b50\u201d\uff0c\u5141\u8bb8\u6211\u4eec\u5bf9\u8bf7\u6c42\u7684\u914d\u7f6e\u3001\u8bf7\u6c42\u7684\u54cd\u5e94\u3001\u5f02\u5e38\u7b49\u8fdb\u884c\u5904\u7406\u3002\u5148\u62ff\u8bf7\u6c42\u7684\u62e6\u622a\u5668\u6765\u4e3e\u4f8b\uff0c\u6bd4\u65b9\u8bf4\u6211\u4eec\u73b0\u5728\u6709\u4e2a\u9700\u6c42\uff0c\u5e0c\u671b\u5728\u8bf7\u6c42\u524d\uff0c\u80fd\u591f\u5148\u5bf9\u8bf7\u6c42\u7684\u6570\u636e\u8fdb\u884c\u67d0\u79cd\u7279\u5b9a\u7684\u7f16\u7801\uff0c\u90a3\u4e48\u8fd9\u6bb5\u903b\u8f91\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"request()"),"\u51fd\u6570\u4e2d\u3002\u4f46\u662f\u8fd9\u6837\u4e00\u6765\uff0c\u903b\u8f91\u5c31\u88ab\u5199\u6b7b\uff0c\u6bcf\u6b21\u4fee\u6539\u90fd\u9700\u8981\u6539\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},"request()"),"\u51fd\u6570\u7684\u4ee3\u7801\uff0c\u4e0d\u7b26\u5408\u201c\u5f00\u653e\u5c01\u95ed\u201d\u7684\u539f\u5219\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u5f97\u628a\u62e6\u622a\u5668\u62bd\u53d6\u51fa\u6765\uff0c\u653e\u5728\u53e6\u4e00\u4e2a\u5730\u65b9\uff0c\u66b4\u9732\u4e00\u4e2a\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u62e6\u622a\u5668\uff0c\u7136\u540e\u5728\u8bf7\u6c42\u524d\u8c03\u7528\u8fdb\u884c\u5904\u7406\uff0c\u518d\u5c06\u5904\u7406\u540e\u7684\u7ed3\u679c\u7528\u4e8e\u8bf7\u6c42\u3002\u6839\u636e\u8fd9\u4e2a\u601d\u8def\uff0c\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"function Axios(instanceConfig) {\n  // \u9ed8\u8ba4\u7684\u914d\u7f6e\n  this.defaults = instanceConfig;\n  // \u62e6\u622a\u5668\uff0c\u5728\u8bf7\u6c42\u524d\u8c03\u7528\n  this.requestInterceptor = null;\n}\n\nAxios.prototype.setRequestInterceptor = function (interceptor) {\n  this.requestInterceptor = interceptor;\n};\n\nAxios.prototype.request = function request(configOrUrl, config) {\n  /**\n   * \u7701\u7565\n   */\n  // \u5148\u8c03\u7528\u62e6\u622a\u5668\u8fdb\u884c\u5904\u7406\n  const newConfig = this.requestInterceptor(config);\n  return dispatchRequest(newConfig);\n};\n\n// \u5047\u8bbe\u51fd\u6570 encode() \u8fd4\u56de\u7279\u6b8a\u7f16\u7801\u540e\u7684\u6570\u636e\nfunction encode(config) {}\n\n// \u8bbe\u7f6e\u62e6\u622a\u5668\naxios.setRequestInterceptor(encode);\n")),(0,r.kt)("h2",null,"\u591a\u4e2a\u8bf7\u6c42\u62e6\u622a\u5668"),(0,r.kt)("p",null,"\u770b\u4e0a\u53bb\u8fd8\u4e0d\u9519\uff0c\u90a3\u4e48\u5047\u5982\u6211\u4eec\u7684\u9700\u6c42\u4e0d\u53ea\u662f\u7f16\u7801\uff0c\u8fd8\u5e0c\u671b\u5728\u7f16\u7801\u540e\u5bf9\u6570\u636e\u8fdb\u884c\u538b\u7f29\u5462\uff1f\u7b80\u5355\uff0c\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"interceptor"),"\u5c5e\u6027\u6362\u6210\u6570\u7ec4\uff0c\u7136\u540e\u5728\u8bf7\u6c42\u524d\u904d\u5386\u4e00\u4e0b\uff0c\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"function Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  // \u62e6\u622a\u5668\uff0c\u6539\u6210\u6570\u7ec4\n  this.requestInterceptors = [];\n}\n\nAxios.prototype.setRequestInterceptor = function (interceptor) {\n  // \u6309\u987a\u5e8f\u538b\u8fdb\u6570\u7ec4\u4e2d\n  this.requestInterceptors.push(interceptor);\n};\n\nAxios.prototype.request = function request(configOrUrl, config) {\n  /**\n   * \u7701\u7565\n   */\n  // \u904d\u5386\u6240\u6709\u62e6\u622a\u5668\n  while (this.requestInterceptors.length) {\n    const interceptor = this.requestInterceptors.shift();\n    config = interceptor(config);\n  }\n  return dispatchRequest(config);\n};\n\n// \u5047\u8bbe\u51fd\u6570 encode() \u8fd4\u56de\u7279\u6b8a\u7f16\u7801\u540e\u7684\u6570\u636e\nfunction encode(config) {}\n\n// \u8bbe\u7f6e\u62e6\u622a\u5668\naxios.setRequestInterceptor(encode);\n")),(0,r.kt)("h2",null,"\u54cd\u5e94\u62e6\u622a\u5668"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u54cd\u5e94\u62e6\u622a\u5668\uff0c\u4e5f\u662f\u540c\u6837\u7684\u9053\u7406\uff0c\u589e\u52a0\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"responseInterceptors"),"\u5c5e\u6027\u7528\u4e8e\u4fdd\u5b58\u54cd\u5e94\u62e6\u622a\u5668\uff0c\u518d\u589e\u52a0\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"setRe sponseInterceptor()"),"\u65b9\u6cd5\u6765\u8bbe\u7f6e\u54cd\u5e94\u62e6\u622a\u5668\u3002"),(0,r.kt)("p",null,"\u4e0e\u8bf7\u6c42\u62e6\u622a\u5668\u6240\u4e0d\u540c\u7684\u662f\uff0c\u54cd\u5e94\u62e6\u622a\u5668\u7684\u8c03\u7528\u7684\u65f6\u673a\u5e94\u8be5\u653e\u5728\u8bf7\u6c42\u4e4b\u540e\uff0c\u4e5f\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"dispatchRequest()"),"\u65b9\u6cd5\u4e4b\u540e\u6267\u884c\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"dispatchRequest()"),"\u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u4e00\u4e2a Promise\uff0c\u56e0\u6b64\u54cd\u5e94\u62e6\u622a\u5668\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"dispatchRequest().then()"),"\u4e2d\u53bb\u904d\u5386\u6267\u884c\u3002\u7b80\u5316\u7684\u4ee3\u7801\u6846\u67b6\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"function Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.requestInterceptors = [];\n  this.responseInterceptors = [];\n}\n\nAxios.prototype.setRequestInterceptor = function (interceptor) {\n  this.requestInterceptors.push(interceptor);\n};\n\nAxios.prototype.setResponseInterceptor = function (interceptor) {\n  this.responseInterceptors.push(interceptor);\n};\n\nAxios.prototype.request = function request(configOrUrl, config) {\n  /**\n   * \u7701\u7565\n   */\n  while (this.requestInterceptors.length) {\n    const interceptor = this.requestInterceptors.shift();\n    config = interceptor(config);\n  }\n  let res;\n  dispatchRequest(config).then((res) => {\n    while (this.responseInterceptors.length) {\n      const interceptor = this.responseInterceptors.shift();\n      res = interceptor(res);\n    }\n  });\n  return res;\n};\n\n// \u5047\u8bbe\u51fd\u6570 encode() \u8fd4\u56de\u7279\u6b8a\u7f16\u7801\u540e\u7684\u6570\u636e\nfunction encode(config) {}\n// \u5047\u8bbe\u51fd\u6570 decode() \u8fd4\u56de\u7279\u6b8a\u89e3\u7801\u540e\u7684\u6570\u636e\nfunction decode(res) {}\n\n// \u8bbe\u7f6e\u62e6\u622a\u5668\naxios.setRequestInterceptor(encode);\naxios.setResponseInterceptor(decode);\n")),(0,r.kt)("h2",null,"Promise \u94fe"),(0,r.kt)("p",null,"\u55ef\uff0c\u4e0a\u9762\u7684\u4ee3\u7801\u770b\u4e0a\u53bb\u8c8c\u4f3c\u5c31\u4e0d\u592a\u4f18\u96c5\u2026\u2026\u8bf7\u6c42\u62e6\u622a\u5668\u548c\u54cd\u5e94\u62e6\u622a\u5668\u88ab\u5206\u6210\u4e86\u4e24\u5757\uff0c\u4f46\u5b83\u4eec\u53c8\u6709\u7740\u76f8\u4f3c\u7684\u903b\u8f91\u3002\u540c\u6837\u662f\u628a\u67d0\u4e2a\u4e1c\u897f\u52a0\u5de5\u540e\u8fd4\u56de\uff0c\u7136\u540e\u4ea4\u7ed9\u4e0b\u4e00\u4e2a\u6309\u987a\u5e8f\u904d\u5386\u6267\u884c\uff0c\u8fd9\u79cd\u201c\u94fe\u5f0f\u8c03\u7528\u201d\u7684\u573a\u666f\uff0c\u4f60\u4f1a\u60f3\u5230\u4ec0\u4e48\uff1f\u6ca1\u9519\uff0c\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 Promise\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u5904\u7406\u7684\u903b\u8f91\u4e32\u8fde\u8d77\u6765\u3002\u5e76\u4e14\u4f7f\u7528 Promise \u8fd8\u6709\u4e2a\u597d\u5904\u5c31\u662f\u5f02\u5e38\u7684\u5904\u7406\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u62e6\u622a\u5668\u62c6\u6210\u4e00\u5bf9\uff0c\u5206\u522b\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\u7684\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"Promise.resolve(config)\n  .then(encode, onError1)\n  .then(zip, onError2)\n  .request(config)\n  .then(unzip, onError3)\n  .then(decode, onError4);\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0b\u9762\u7684\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u6e05\u6670\u5730\u770b\u5230\u6574\u4e2a\u8bf7\u6c42\u7684\u94fe\u8def\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",Object.assign({parentName:"p"},{src:"/images/recreate-axios-from-scratch/chain.png",alt:"chain"}))),(0,r.kt)("p",null,"\u5229\u7528 Promise\uff0c\u6211\u4eec\u80fd\u591f\u8ba9\u62e6\u622a\u5668\u5904\u7406\u5f02\u6b65\u7684\u64cd\u4f5c\uff0c\u540c\u65f6\u8fd8\u80fd\u591f\u5904\u7406\u6bcf\u4e2a\u8282\u70b9\u7684\u5f02\u5e38\u3002\u66f4\u5999\u7684\u662f\uff0c\u6211\u4eec\u5c06\u8bf7\u6c42\u62e6\u622a\u5668\u3001\u8bf7\u6c42\u65b9\u6cd5\u3001\u54cd\u5e94\u62e6\u622a\u5668\u4e00\u5757\u653e\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\uff0c\u901a\u8fc7\u904d\u5386\uff0c\u6bcf\u6b21\u53d6\u51fa\u4e00\u5bf9\u65b9\u6cd5\uff0c\u4fbf\u80fd\u5f88\u4f18\u96c5\u5730\u5229\u7528 Promise \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"then()"),"\u65b9\u6cd5\u6765\u4e32\u8fde\u8d77\u5b83\u4eec\u3002\u5bf9\u4e8e\u8bf7\u6c42\u65b9\u6cd5\u7684\u90a3\u4e00\u5bf9\uff0c\u6211\u4eec\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\u6765\u5360\u4f4d\uff0c\u5219\u8bf7\u6c42\u7684\u5f02\u5e38\u5c06\u7a7f\u900f\u7ed9\u5176\u4e0b\u4e00\u5bf9\uff0c\u5373\u54cd\u5e94\u62e6\u622a\u5668\u6765\u5904\u7406\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",Object.assign({parentName:"p"},{src:"/images/recreate-axios-from-scratch/chain-array.png",alt:"chain-array"}))),(0,r.kt)("h2",null,"\u5c0f\u7ed3"),(0,r.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u6211\u4eec\u5c06\u62e6\u622a\u5668\u76f8\u5173\u7684\u65b9\u6cd5\u62bd\u53d6\u6210\u4e00\u4e2a\u7c7b",(0,r.kt)("inlineCode",{parentName:"p"},"InterceptorManager"),"\uff0c\u6309\u65b0\u7684\u601d\u8def\u8c03\u6574\u540e\u7684\u7b80\u5316\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"class InterceptorManager {\n  constructor() {\n    this.handlers = [];\n  }\n\n  use(fulfilled, rejected) {\n    this.handlers.push({ fulfilled, rejected });\n    // \u4e0b\u6807\u4f5c\u4e3a id\uff0c\u7528\u4e8e eject\n    return this.handlers.length - 1;\n  }\n\n  eject(id) {\n    if (this.handlers[id]) {\n      this.handlers[id] = null;\n    }\n  }\n\n  // null \u65f6\u4e0d\u5904\u7406\n  forEach(fn) {\n    this.handlers.forEach((interceptor) => {\n      if (interceptor) {\n        fn(interceptor);\n      }\n    });\n  }\n}\n\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager(),\n  };\n}\n\nAxios.prototype.request = function request(configOrUrl, config) {\n  /**\n   * \u7701\u7565\n   */\n  // \u62fc\u63a5\u6210 [\u8bf7\u6c42\u62e6\u622a\u5668, \u8bf7\u6c42, \u54cd\u5e94\u62e6\u622a\u5668] \u8bf7\u6c42\u94fe\n  // undefined \u7684\u4f5c\u7528\u662f\u201c\u5360\u4f4d\u201d\uff0c\u4fdd\u8bc1\u4e24\u4e24\u4e00\u7ec4\n  const chain = [dispatchRequest, undefined];\n  // \u8bf7\u6c42\u62e6\u622a\u5668\u201c\u94fe\u201d\uff0c\u52a0\u5230\u5934\u90e8\n  this.interceptors.request.forEach(({ fulfilled, rejected }) => {\n    chain.unshift(fulfilled, rejected);\n  });\n  // \u54cd\u5e94\u62e6\u622a\u5668\u201c\u94fe\u201d\uff0c\u52a0\u5230\u5c3e\u90e8\n  this.interceptors.response.forEach(({ fulfilled, rejected }) => {\n    chain.push(fulfilled, rejected);\n  });\n\n  // \u542f\u52a8\u94fe\u6761\n  let promise = Promise.resolve(config);\n\n  while (chain.length) {\n    // \u904d\u5386\u8bf7\u6c42\u94fe\uff0c\u4e24\u4e24\u4e00\u7ec4\u94fe\u5f0f\u8c03\u7528\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n")),(0,r.kt)("p",null,"\u5230\u6b64\u4e3a\u6b62\uff0c\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u7b80\u5355\u62e6\u622a\u5668\u7684\u529f\u80fd\uff0c\u4f7f\u7528\u65b9\u5f0f\u4e5f\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u53ea\u9700\u8bbe\u7f6e\u4e00\u4e0b\u62e6\u622a\u5668\uff0c\u7136\u540e\u6b63\u5e38\u53d1\u8d77\u8bf7\u6c42\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// \u6dfb\u52a0\u8bf7\u6c42\u62e6\u622a\u5668\naxios.interceptors.request.use(\n  function (config) {\n    // \u8bf7\u6c42\u524d\u5904\u7406\u7684\u903b\u8f91\u653e\u5728\u8fd9\u91cc\n    return config;\n  },\n  function (error) {\n    // \u5f02\u5e38\u5904\u7406\u7684\u903b\u8f91\u653e\u5728\u8fd9\u91cc\n    return Promise.reject(error);\n  }\n);\n\n// \u6dfb\u52a0\u54cd\u5e94\u62e6\u622a\u5668\naxios.interceptors.response.use(\n  function (response) {\n    // \u5bf9\u54cd\u5e94\u7ed3\u679c\u7684\u5904\u7406\u903b\u8f91\u653e\u5728\u8fd9\u91cc\n    return response;\n  },\n  function (error) {\n    // \u5f02\u5e38\u5904\u7406\u7684\u903b\u8f91\u653e\u5728\u8fd9\u91cc\n    return Promise.reject(error);\n  }\n);\n")),(0,r.kt)("p",null,"\u5b8c\u6574\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/kelvinleung/re-create.js/tree/main/axios"}),"\u8fd9\u91cc\u67e5\u770b"),"\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u8fd8\u8981\u624b\u6495",(0,r.kt)("strong",{parentName:"p"},"\u53d6\u6d88\u8bf7\u6c42"),"\uff0c\u8be6\u89c1\u7b2c\u4e09\u90e8\u5206\u3002"))}l.isMDXComponent=!0}},function(e){e.O(0,[39,774,888,179],(function(){return n=3766,e(e.s=n);var n}));var n=e.O();_N_E=n}]);