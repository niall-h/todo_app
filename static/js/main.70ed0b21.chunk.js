(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(7),i=n.n(o),a=(n(12),n(5)),s=n(6),u=(n(13),n(0)),l="todos",j=function(t){return localStorage.setItem(l,JSON.stringify(t))};var d=function(){var t=function(){var t=localStorage.getItem(l);return JSON.parse(t)}(),e=Object(c.useState)(t||[]),n=Object(s.a)(e,2),r=n[0],o=n[1],i=Object(c.useState)(""),d=Object(s.a)(i,2),b=d[0],p=d[1],O=function(){if(b){var t=[].concat(Object(a.a)(r),[b]);o(t),j(t),p("")}};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"input-field",type:"text",placeholder:"Enter your todo item",onKeyPress:function(t){"Enter"===t.code&&O()},onChange:function(t){return p(t.target.value)},value:b}),Object(u.jsx)("button",{onClick:O,children:"Add"}),Object(u.jsx)("ul",{children:r.map((function(t,e){return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("li",{children:t}),Object(u.jsx)("button",{onClick:function(){return function(t){var e=Object(a.a)(r);e.splice(t,1),o(e),j(e)}(e)},children:"Delete"})]},t)}))})]})})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.70ed0b21.chunk.js.map