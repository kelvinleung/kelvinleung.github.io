(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{5161:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return r(2250)}])},2745:function(e,t,r){"use strict";r.d(t,{A:function(){return n}});var n=[{id:"horse-sense",name:"\u79d8\u7c4d",desc:"\u4e09\u811a\u732b\u529f\u592b\uff0c\u6563\u6253\u672a\u5fc5\u8f93"},{id:"gibberish",name:"\u516b\u80a1",desc:"\u56db\u4e66\u52a0\u4e94\u7ecf\uff0c\u80cc\u5b8c\u53d1\u795e\u7ecf"},{id:"xray",name:"\u5e96\u4e01",desc:"\u77e5\u5176\u6240\u4ee5\u7136\uff0c\u540e\u9762\u4f1a\u66f4\u96be"},{id:"copycat",name:"\u753b\u74e2",desc:"\u674e\u9b3c\u9047\u674e\u9035\uff0c\u5927\u80c6\u6765\u4e00\u9524"}]},6455:function(e,t,r){"use strict";r.d(t,{A:function(){return s}});var n=r(2745);function s(e){var t=n.A.findIndex((function(t){return t.id===e}));return t>-1?n.A[t].name:"\u672a\u77e5"}},8350:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),s=r(1664),a=r.n(s);function l(e){var t=e.page,r=e.pageCount,s=e.prevUrl,l=void 0===s?"/":s,c=e.nextUrl,i=void 0===c?"/":c;return(0,n.jsxs)("div",{className:"grid grid-cols-2",children:[1!==t&&(0,n.jsx)(a(),{href:l,children:(0,n.jsx)("a",{className:"px-8 py-3 col-start-1 col-end-1 justify-self-start bg-neutral-50 text-neutral-500 text-sm hover:text-neutral-800 hover:font-bold rounded-lg",children:"\u9000\u9875"})}),t<r&&(0,n.jsx)(a(),{href:i,children:(0,n.jsx)("a",{className:"px-8 py-3 col-start-2 col-end-2 justify-self-end bg-neutral-50 text-neutral-500 text-sm hover:text-neutral-800 hover:font-bold rounded-lg",children:"\u8fdb\u9875"})})]})}},7106:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),s=r(1664),a=r.n(s),l=r(6455);function c(e){var t=e.postsData;return(0,n.jsx)("ul",{className:"pt-16",children:t.map((function(e){var t=e.id,r=e.title,s=e.date,c=e.desc,i=e.type;return(0,n.jsx)("li",{className:"mb-16",children:(0,n.jsxs)("article",{children:[(0,n.jsxs)("div",{className:"flex justify-between items-center text-sm text-neutral-400",children:[(0,n.jsx)("span",{children:s}),(0,n.jsx)(a(),{href:"/posts/".concat(i),children:(0,n.jsx)("a",{className:"px-4 py-2 rounded-lg bg-neutral-50 hover:text-red-600 hover:bg-red-50",children:(0,l.A)(i)})})]}),(0,n.jsx)(a(),{href:"/post/".concat(t),children:(0,n.jsx)("a",{children:(0,n.jsx)("h1",{className:"inline-block mt-4 mb-8 text-2xl text-neutral-800 font-bold hover:text-red-600",children:r})})}),(0,n.jsx)("p",{className:"leading-relaxed text-neutral-500",children:c})]})},t)}))})}},2250:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d},default:function(){return o}});var n=r(5893),s=r(1664),a=r.n(s),l=r(7106),c=r(8350),i=r(2745),d=!0;function o(e){var t=e.postsData,r=e.pageCount;return(0,n.jsxs)("div",{children:[(0,n.jsx)("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:i.A.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/posts/".concat(e.id),children:(0,n.jsxs)("a",{className:"p-4 block relative bg-neutral-50 rounded-lg hover:bg-red-50 group",children:[(0,n.jsx)("p",{className:"absolute top-0 right-0 text-neutral-200/50 text-2xl group-hover:text-red-100",children:e.id.toUpperCase()}),(0,n.jsx)("p",{className:"relative group-hover:text-red-600",children:e.name}),(0,n.jsx)("p",{className:"relative text-sm text-neutral-400 group-hover:text-red-300",children:e.desc})]})})},e.id)}))}),(0,n.jsx)(l.Z,{postsData:t}),r>1&&(0,n.jsx)(c.Z,{page:1,pageCount:r,nextUrl:"/posts/all/2"})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=5161,e(e.s=t);var t}));var t=e.O();_N_E=t}]);