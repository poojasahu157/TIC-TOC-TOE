(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),j=t(6),r=t.n(j),i=(t(12),t.p,t(13),t(7)),a=t(4),u=(t(14),t(0)),b=function(){var e=Object(c.useState)("x"),n=Object(a.a)(e,2),t=n[0],s=n[1],j=Object(c.useState)(Array(9).fill("")),r=Object(a.a)(j,2),b=r[0],l=r[1],o=Object(c.useState)(),O=Object(a.a)(o,2),d=O[0],x=O[1],h=function(e){if(""===b[e]){var n=Object(i.a)(b);"x"===t?(n[e]="x",s("o")):(n[e]="o",s("x")),function(e){var n={across:[[0,1,2],[3,4,5],[6,7,8]],down:[[0,3,6],[1,4,7],[2,5,8]],diagnol:[[0,4,8],[2,4,6]]};for(var t in n)n[t].forEach((function(n){""===e[n[0]]||""===e[n[1]]||""===e[n[2]]||e[n[0]]===e[n[1]]&&e[n[1]]===e[n[2]]&&x(e[n[0]])}))}(n),l(n)}else alert("already clicked")},f=function(e){var n=e.num;return Object(u.jsx)("td",{onClick:function(){return h(n)},children:b[n]})};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"heading",children:" TIC TOC TOE "}),Object(u.jsxs)("table",{children:["Turn: ",t,Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)(f,{num:0}),Object(u.jsx)(f,{num:1}),Object(u.jsx)(f,{num:2})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)(f,{num:3}),Object(u.jsx)(f,{num:4}),Object(u.jsx)(f,{num:5})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)(f,{num:6}),Object(u.jsx)(f,{num:7}),Object(u.jsx)(f,{num:8})]})]})]}),d&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:"winner",children:[d," is the winner!"]}),Object(u.jsx)("button",{className:"btn",onClick:function(){return x(null),void l(Array(9).fill(""))},children:"Play Again"})]})]})};var l=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{})})},o=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,j=n.getLCP,r=n.getTTFB;t(e),c(e),s(e),j(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.9be405c4.chunk.js.map