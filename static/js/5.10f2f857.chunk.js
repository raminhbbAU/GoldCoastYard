(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(171),i=t(178),l=t(173),o=t(37),m=t(122),d=t(139),s=t(20),b=t(166),u=t(140),p=t.n(u),h=function(e){var n=Object(a.useState)({}),t=Object(s.a)(n,2),r=t[0],c=t[1],i=Object(a.useState)({}),l=Object(s.a)(i,2),o=l[0],u=l[1],h=Object(a.useState)(!1),g=Object(s.a)(h,2),f=g[0],j=g[1];Object(a.useEffect)(function(){0===Object.keys(o).length&&f&&(c(""),b.a.success({message:"Success",description:"Your message has been sent!"}))},[o,f]);return{handleChange:function(e){e.persist(),c(function(n){return Object(d.a)({},n,Object(m.a)({},e.target.name,e.target.value))}),u(function(n){return Object(d.a)({},n,Object(m.a)({},e.target.name,""))})},handleSubmit:function(n){n.preventDefault(),u(e(r));3===Object.keys(r).length&&p.a.post("",Object(d.a)({},r)).then(function(){j(!0)})},values:r,errors:o}};function g(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var f,j,O,x,E,v,w,y,k,C,S,z,Y=t(38),q=t(3),F=t(4),J=Object(F.b)("p")(f||(f=Object(q.a)(["\n  margin-top: 1.5rem;\n"]))),M=Object(F.b)("div")(j||(j=Object(q.a)(["\n  position: relative;\n  max-width: 700px;\n"]))),N=Object(F.b)("div")(O||(O=Object(q.a)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),W=Object(l.a)()(function(e){var n=e.title,t=e.content,a=e.t;return r.a.createElement(M,null,r.a.createElement("h6",null,a(n)),r.a.createElement(N,null,r.a.createElement(J,null,a(t))))}),A=Object(F.b)("div")(x||(x=Object(q.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),D=Object(F.b)("input")(E||(E=Object(q.a)(["\n  font-size: 0.875rem;\n"]))),B=Object(F.b)("div")(v||(v=Object(q.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),G=Object(F.b)("textarea")(w||(w=Object(q.a)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),H=Object(F.b)("label")(y||(y=Object(q.a)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),I=Object(l.a)()(function(e){var n=e.name,t=e.placeholder,a=e.onChange,c=e.t;return r.a.createElement(A,null,r.a.createElement(H,{htmlFor:n},c(n)),r.a.createElement(D,{placeholder:c(t),name:n,id:n,onChange:a}))}),K=Object(l.a)()(function(e){var n=e.name,t=e.placeholder,a=e.onChange,c=e.t;return r.a.createElement(B,null,r.a.createElement(H,{htmlFor:n},c(n)),r.a.createElement(G,{placeholder:c(t),id:n,name:n,onChange:a}))}),L=Object(F.b)("div")(k||(k=Object(q.a)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),P=Object(F.b)("form")(C||(C=Object(q.a)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),Q=Object(F.b)("span")(S||(S=Object(q.a)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),R=Object(F.b)("div")(z||(z=Object(q.a)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"])));n.default=Object(l.a)()(function(e){var n=e.title,t=e.content,a=e.id,l=e.t,m=h(g),d=m.values,s=m.errors,b=m.handleChange,u=m.handleSubmit,p=function(e){var n=e.type,t=s[n];return r.a.createElement(o.c,{direction:"left"},r.a.createElement(Q,{erros:s[n]},t))};return r.a.createElement(L,{id:a},r.a.createElement(c.a,{justify:"space-between",align:"middle"},r.a.createElement(i.a,{lg:12,md:11,sm:24,xs:24},r.a.createElement(o.b,{direction:"left"},r.a.createElement(W,{title:n,content:t}))),r.a.createElement(i.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o.b,{direction:"right"},r.a.createElement(P,{autoComplete:"off",onSubmit:u},r.a.createElement(i.a,{span:24},r.a.createElement(I,{type:"text",name:"name",placeholder:"Your Name",value:d.name||"",onChange:b}),r.a.createElement(p,{type:"name"})),r.a.createElement(i.a,{span:24},r.a.createElement(I,{type:"text",name:"email",placeholder:"Your Email",value:d.email||"",onChange:b}),r.a.createElement(p,{type:"email"})),r.a.createElement(i.a,{span:24},r.a.createElement(K,{placeholder:"Your Message",value:d.message||"",name:"message",onChange:b}),r.a.createElement(p,{type:"message"})),r.a.createElement(R,null,r.a.createElement(Y.a,{name:"submit"},l("Submit"))))))))})},38:function(e,n,t){"use strict";var a,r=t(0),c=t.n(r),i=t(3),l=t(4),o=Object(l.b)("button")(a||(a=Object(i.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: 1px solid #edf3f5;\n  border-radius: 4px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #fff;\n    border: 1px solid rgb(255, 130, 92);\n    background-color: rgb(255, 130, 92);\n  }\n"])),function(e){return e.color||"#2e186a"},function(e){return e.color?"#2E186A":"#fff"});t.d(n,"a",function(){return m});var m=function(e){var n=e.color,t=e.fixedWidth,a=e.children,r=e.onClick;return c.a.createElement(o,{color:n,fixedWidth:t,onClick:r},a)}}}]);
//# sourceMappingURL=5.10f2f857.chunk.js.map