(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(1)),b=c(6),j=c.n(b),r=c(2),l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){var e=Object(i.h)().tabId,t=l.find((function(t){return t.id===e}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:l.map((function(t){return Object(r.jsx)("li",{className:j()({"is-active":e===t.id}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title},t.id)})}))})}),Object(r.jsx)("div",{className:"block","data-cy":"tab-content",children:t?t.content:"Please select a tab"})]})},o=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(r.jsx)("div",{className:"navbar-menu",children:Object(r.jsxs)("div",{className:"navbar-start",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{isActive:t})},children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{isActive:t})},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})}),Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)("h1",{className:"title",children:"Home page"})}),Object(r.jsx)(i.b,{path:"/home",element:Object(r.jsx)(i.a,{to:"/"})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(d,{})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(d,{})})]})]})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(o,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c7ddacb4.chunk.js.map