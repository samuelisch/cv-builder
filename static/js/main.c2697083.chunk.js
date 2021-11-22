(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],{24:function(e,n,t){"use strict";t.r(n);var i,a,c,r,s,d,o,l,j,b,u,x,p,m,O,f,h,g,v,I,y,N,H,w,k,T,V,E,q,Y,z,C,F=t(1),W=t.n(F),D=t(13),G=t.n(D),S=t(2),A=t(3),P=t(0),R=A.b.div(i||(i=Object(S.a)(["\n  width: 100%;\n  background: lightblue;\n\n  h1 {\n    font-size: 3rem;\n    text-align: left;\n    padding-left: 10px;\n    margin: 15px;\n  }\n"]))),U=function(){return Object(P.jsx)(R,{children:Object(P.jsx)("h1",{children:"CV builder"})})},J=t(5),L=t(4),X=t(7),B=A.b.h2(a||(a=Object(S.a)(["\n  margin-bottom: 0;\n"]))),K=A.b.hr(c||(c=Object(S.a)(["\n  margin-top: 0;\n  border-top: 1px solid rgb(10, 10, 10);\n"]))),M=function(e){var n=e.className,t=e.text;return Object(P.jsxs)("div",{children:[Object(P.jsx)(B,{className:"sectionHeader ".concat(n),children:t}),Object(P.jsx)(K,{})]})},Q=A.b.div(r||(r=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 7px 0;\n"]))),Z=A.b.label(s||(s=Object(S.a)(["\n  font-size: 1.4rem;\n"]))),$=A.b.input(d||(d=Object(S.a)(["\n  width: 175px;\n"]))),_=function(e){var n=e.inputId,t=e.type,i=e.labelText,a=e.placeholderText,c=e.changeHandler,r=e.inputValue,s=e.required;return Object(P.jsxs)(Q,{children:[Object(P.jsx)(Z,{htmlFor:n,children:i}),Object(P.jsx)($,{type:t,id:n,placeholder:a,value:r,onChange:c,required:s})]})},ee=A.b.div(o||(o=Object(S.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n"]))),ne=A.b.div(l||(l=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),te=function(e){var n=e.changeHandler,t=e.user,i=t.firstName,a=t.lastName,c=t.city,r=t.email,s=t.number,d=t.portfolio;return Object(P.jsxs)(ee,{children:[Object(P.jsxs)(ne,{children:[Object(P.jsx)(_,{inputId:"firstName",labelText:"First name*",type:"text",inputValue:i,changeHandler:n,required:!0}),Object(P.jsx)(_,{inputId:"lastName",labelText:"Last name",type:"text",inputValue:a,changeHandler:n,required:!1})]}),Object(P.jsx)(_,{inputId:"city",labelText:"City",type:"text",inputValue:c,changeHandler:n,required:!1}),Object(P.jsxs)(ne,{children:[Object(P.jsx)(_,{inputId:"email",labelText:"E-mail*",type:"email",inputValue:r,changeHandler:n,required:!0}),Object(P.jsx)(_,{inputId:"number",labelText:"Contact number*",type:"number",inputValue:s,changeHandler:n,required:!0})]}),Object(P.jsx)(_,{inputId:"portfolio",labelText:"LinkedIn / Portfolio site",inputValue:d,changeHandler:n,required:!1})]})},ie=A.b.div(j||(j=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 7px 0;\n"]))),ae=A.b.label(b||(b=Object(S.a)(["\n  font-size: 1.4rem;\n"]))),ce=A.b.textarea(u||(u=Object(S.a)(["\n  width: 80%;\n  font-family: Helvetica\n"]))),re=function(e){var n=e.inputId,t=(e.type,e.labelText),i=(e.placeholderText,e.changeHandler),a=e.inputValue,c=e.required;return Object(P.jsxs)(ie,{children:[Object(P.jsx)(ae,{htmlFor:n,children:t}),Object(P.jsx)(ce,{id:n,value:a,onChange:i,required:c,rows:"5"})]})},se=A.b.div(x||(x=Object(S.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),de=A.b.div(p||(p=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),oe=function(e){var n=e.changeHandler,t=e.education,i=e.id,a=t.schoolName,c=t.city,r=t.major,s=t.from,d=t.to,o=t.description;return Object(P.jsxs)(se,{children:[Object(P.jsxs)(de,{children:[Object(P.jsx)(_,{inputId:"schoolName",labelText:"Name of Institute",inputValue:a,changeHandler:function(e){return n(e,i)},required:!1}),Object(P.jsx)(_,{inputId:"city",labelText:"City",type:"text",inputValue:c,changeHandler:function(e){return n(e,i)},required:!1})]}),Object(P.jsx)(_,{inputId:"major",labelText:"Title of Study",type:"text",inputValue:r,changeHandler:function(e){return n(e,i)},required:!1}),Object(P.jsxs)(de,{children:[Object(P.jsx)(_,{inputId:"from",labelText:"Commenced Year",placeholderText:"YYYY",type:"number",inputValue:s,changeHandler:function(e){return n(e,i)},required:!1}),Object(P.jsx)(_,{inputId:"to",labelText:"Expected / Graduation Year",placeholderText:"YYYY",type:"number",inputValue:d,changeHandler:function(e){return n(e,i)},required:!1})]}),Object(P.jsx)(re,{inputId:"description",labelText:"Description",inputValue:o,changeHandler:function(e){return n(e,i)},required:!1})]})},le=A.b.button(m||(m=Object(S.a)(["\n  border-radius: 5px;\n  border: 1px solid black;\n  background-color: rgb(240, 240, 240);\n"]))),je=function(e){var n=e.className,t=e.type,i=e.clickHandler,a=e.text;return Object(P.jsx)(le,{className:n,type:t,onClick:i,children:a})},be=Object(A.b)(je)(O||(O=Object(S.a)(["\n  font-size: 1.5rem;\n  background: rgb(120, 255, 120);\n  &:hover {\n    background: rgb(120, 240, 120);\n  }\n  margin: 10px;\n"]))),ue=Object(A.b)(je)(f||(f=Object(S.a)(["\n  font-size: 1.5rem;\n  background: rgb(255, 120, 120);\n  &:hover {\n    background: rgb(240, 120, 120);\n  }\n  margin: 10px;\n"]))),xe=function(e){var n=e.info,t=e.addInstance,i=e.removeInstance;return Object(P.jsxs)("div",{children:[n.length>0&&Object(P.jsx)(ue,{className:"removeWork",type:"button",clickHandler:i,text:"Remove"}),Object(P.jsx)(be,{className:"addWork",type:"button",clickHandler:t,text:"Add"})]})},pe=function(e){var n=e.changeHandler,t=e.education,i=e.addInstance,a=e.removeInstance,c=t.map((function(e){return Object(P.jsx)(oe,{id:e.id,education:e,changeHandler:n},e.id)}));return Object(P.jsxs)("div",{children:[c,Object(P.jsx)(xe,{info:t,addInstance:i,removeInstance:a})]})},me=A.b.div(h||(h=Object(S.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),Oe=A.b.div(g||(g=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),fe=function(e){var n=e.changeHandler,t=e.work,i=e.id,a=t.company,c=t.city,r=t.position,s=t.from,d=t.to,o=t.description;return Object(P.jsxs)(me,{children:[Object(P.jsxs)(Oe,{children:[Object(P.jsx)(_,{inputId:"company",labelText:"Name of Company",inputValue:a,changeHandler:function(e){return n(e,i)},required:!1}),Object(P.jsx)(_,{inputId:"city",labelText:"City",type:"text",inputValue:c,changeHandler:function(e){return n(e,i)},required:!1})]}),Object(P.jsx)(_,{inputId:"position",labelText:"Title of Position",type:"text",inputValue:r,changeHandler:function(e){return n(e,i)},required:!1}),Object(P.jsxs)(Oe,{children:[Object(P.jsx)(_,{inputId:"from",labelText:"From Year",placeholderText:"YYYY",type:"number",inputValue:s,changeHandler:function(e){return n(e,i)},required:!1}),Object(P.jsx)(_,{inputId:"to",labelText:"To Year",placeholderText:"YYYY",type:"number",inputValue:d,changeHandler:function(e){return n(e,i)},required:!1})]}),Object(P.jsx)(re,{inputId:"description",labelText:"Description",inputValue:o,changeHandler:function(e){return n(e,i)},required:!1})]})},he=function(e){var n=e.changeHandler,t=e.work,i=e.addInstance,a=e.removeInstance,c=t.map((function(e){return Object(P.jsx)(fe,{id:e.id,work:e,changeHandler:n},e.id)}));return Object(P.jsxs)("div",{children:[c,Object(P.jsx)(xe,{info:t,addInstance:i,removeInstance:a})]})},ge=A.b.div(v||(v=Object(S.a)(["\n  width: 100%;\n  margin-bottom: 10px;\n\n  #text {\n    width: 100%;\n  }\n"]))),ve=function(e){var n=e.changeHandler,t=e.expertise,i=e.id,a=t.example;return Object(P.jsx)(ge,{children:Object(P.jsx)(_,{inputId:"text",labelText:"Subject",placeholderText:"Discipline: subjects",inputValue:a,changeHandler:function(e){return n(e,i)},required:!1})})},Ie=function(e){var n=e.changeHandler,t=e.expertise,i=e.addInstance,a=e.removeInstance,c=t.map((function(e){return Object(P.jsx)(ve,{id:e.id,expertise:e,changeHandler:n},e.id)}));return Object(P.jsxs)("div",{children:[c,Object(P.jsx)(xe,{info:t,addInstance:i,removeInstance:a})]})},ye=A.b.form(I||(I=Object(S.a)(["\n  padding: 20px;\n  .sectionHeader {\n    font-size: 2rem;\n  }\n"]))),Ne=function(e){var n=e.userInfo,t=e.changeUserInfo,i=e.education,a=e.changeEducation,c=e.addEducationInstance,r=e.removeEducationInstance,s=e.work,d=e.changeWork,o=e.addWorkInstance,l=e.removeWorkInstance,j=e.expertise,b=e.changeExpertise,u=e.addExpertiseInstance,x=e.removeExpertiseInstance;return Object(P.jsxs)(ye,{className:"mainForm",children:[Object(P.jsx)(M,{className:"info",text:"General Info"}),Object(P.jsx)(te,{changeHandler:t,user:n}),Object(P.jsx)(M,{className:"education",text:"Education"}),Object(P.jsx)(pe,{changeHandler:a,education:i,addInstance:c,removeInstance:r}),Object(P.jsx)(M,{className:"work",text:"Work Experience"}),Object(P.jsx)(he,{changeHandler:d,work:s,addInstance:o,removeInstance:l}),Object(P.jsx)(M,{className:"expertise",text:"Expertise"}),Object(P.jsx)(Ie,{changeHandler:b,expertise:j,addInstance:u,removeInstance:x})]})},He=A.b.p(y||(y=Object(S.a)(["\n  font-family: Garamond;\n  font-size: 3.2rem;\n  font-weight: bold;\n  margin: 20px 0 5px 0;\n"]))),we=A.b.div(N||(N=Object(S.a)(["\n  font-family: Garamond;\n  font-size: 1.3rem;\n"]))),ke=A.b.hr(H||(H=Object(S.a)(["\n  margin-top: 0;\n  border-top: 1px solid rgb(10, 10, 10);\n"]))),Te=function(e){var n=e.userInfo,t=n.firstName,i=n.lastName,a=n.city,c=n.email,r=n.number,s=n.portfolio;return Object(P.jsxs)("div",{children:[Object(P.jsxs)(He,{children:[t," ",i]}),Object(P.jsxs)(we,{children:[c&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("span",{children:c}),Object(P.jsx)("span",{children:" || "}),Object(P.jsx)("span",{children:r})]}),a&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("span",{children:" || "}),Object(P.jsx)("span",{children:a}),Object(P.jsx)("span",{children:" || "})]}),s&&Object(P.jsx)("span",{children:s})]}),Object(P.jsx)(ke,{})]})},Ve=A.b.div(w||(w=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  font-size: 1.2rem;\n\n  .titleAndDate {\n    font-size: 1.3rem;\n    font-weight: bold;\n  }\n\n  .double {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .major {\n    font-style: italic;\n  }\n\n  .description {\n    font-family: Georgia;\n    margin: 5px 0 0;\n    padding: 0 15px;\n  }\n"]))),Ee=function(e){var n=e.educationInfo.map((function(e){return Object(P.jsxs)(Ve,{children:[Object(P.jsxs)("div",{className:"titleAndDate double",children:[Object(P.jsx)("div",{className:"name",children:e.schoolName}),Object(P.jsxs)("div",{className:"date",children:[e.from," - ",e.to]})]}),Object(P.jsxs)("div",{className:"major double",children:[Object(P.jsx)("div",{children:e.major}),Object(P.jsx)("div",{children:e.city})]}),e.description&&Object(P.jsx)("ul",{className:"description",children:Object(P.jsx)("li",{children:e.description})})]},e.id)}));return Object(P.jsx)("div",{children:n})},qe=A.b.div(k||(k=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  font-size: 1.2rem;\n\n  .titleAndDate {\n    font-size: 1.3rem;\n    font-weight: bold;\n  }\n\n  .double {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .position {\n    font-style: italic;\n  }\n\n  .description {\n    font-family: Georgia;\n    margin: 5px 0 0;\n    padding: 0 15px;\n  }\n"]))),Ye=function(e){var n=e.workInfo.map((function(e){return Object(P.jsxs)(qe,{children:[Object(P.jsxs)("div",{className:"titleAndDate double",children:[Object(P.jsx)("div",{className:"name",children:e.company}),Object(P.jsxs)("div",{className:"date",children:[e.from," - ",e.to]})]}),Object(P.jsxs)("div",{className:"position double",children:[Object(P.jsx)("div",{children:e.position}),Object(P.jsx)("div",{children:e.city})]}),e.description&&Object(P.jsx)("ul",{className:"description",children:Object(P.jsx)("li",{children:e.description})})]},e.id)}));return Object(P.jsx)("div",{children:n})},ze=A.b.ul(T||(T=Object(S.a)(["\n  padding: 0 15px;\n"]))),Ce=A.b.li(V||(V=Object(S.a)(["\n  font-family: Georgia;\n  margin: 5px 0 0;\n"]))),Fe=function(e){var n=e.expertiseInfo.items.map((function(e){return Object(P.jsx)(Ce,{children:e.example},e.id)}));return Object(P.jsx)(ze,{children:n})},We=A.b.div(E||(E=Object(S.a)(["\n  font-family: Garamond;\n  font-size: 1.1rem;\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  height: 877px;\n"]))),De=function(e){var n=e.userInfo,t=e.educationInfo,i=e.workInfo,a=e.expertiseInfo;return Object(P.jsxs)(We,{children:[Object(P.jsx)(Te,{userInfo:n}),t.length>0&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(M,{className:"educationView",text:"EDUCATION"}),Object(P.jsx)(Ee,{educationInfo:t})]}),i.length>0&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(M,{className:"workView",text:"WORK EXPERIENCE"}),Object(P.jsx)(Ye,{workInfo:i})]}),a.items.length>0&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(M,{className:"expertiseView",text:"EXPERTISE"}),Object(P.jsx)(Fe,{expertiseInfo:a})]})]})},Ge=(A.b.div(q||(q=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .download:hover {\n    background: green;\n  }\n"]))),t(26)),Se=A.b.div(Y||(Y=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1320px) {\n    flex-direction: row;\n    justify-content: space-around;\n\n    .mainView {\n      max-height: 877px;\n      position: sticky;\n      top: 50px;\n    }\n  }\n"]))),Ae=A.b.div(z||(z=Object(S.a)(["\n  border: 1px solid green;\n  width: 620px;\n  margin: 30px 20px;\n"]))),Pe=function(){var e=Object(F.useState)({firstName:"",lastName:"",city:"",email:"",number:"",portfolio:""}),n=Object(X.a)(e,2),t=n[0],i=n[1],a=Object(F.useState)([]),c=Object(X.a)(a,2),r=c[0],s=c[1],d=Object(F.useState)([]),o=Object(X.a)(d,2),l=o[0],j=o[1],b=Object(F.useState)({expertise:"",portfolio:"",items:[]}),u=Object(X.a)(b,2),x=u[0],p=u[1];return Object(P.jsxs)(Se,{children:[Object(P.jsx)(Ae,{className:"mainContainer",children:Object(P.jsx)(Ne,{userInfo:t,changeUserInfo:function(e){var n=e.target.id,a=e.target.value,c=Object(L.a)({},t);c[n]=a,i(c)},education:r,changeEducation:function(e,n){var t=e.target.id;"from"!==t&&"to"!==t||(e.target.value=e.target.value.slice(0,4));var i=e.target.value,a=r.map((function(e){if(e.id===n){var a=Object(L.a)({},e);return a[t]=i,a}return e}));s(a)},addEducationInstance:function(){var e=Object(J.a)(r);e.push({id:Object(Ge.a)(),schoolName:"",city:"",major:"",from:"",to:"",description:""}),s(e)},removeEducationInstance:function(){var e=Object(J.a)(r);e.pop(),s(e)},work:l,changeWork:function(e,n){var t=e.target.id;"from"!==t&&"to"!==t||(e.target.value=e.target.value.slice(0,4));var i=e.target.value,a=l.map((function(e){if(e.id===n){var a=Object(L.a)({},e);return a[t]=i,a}return e}));j(a)},addWorkInstance:function(){var e=Object(J.a)(l);e.push({id:Object(Ge.a)(),company:"",position:"",city:"",from:"",to:"",description:""}),j(e)},removeWorkInstance:function(){var e=Object(J.a)(l);e.pop(),j(e)},expertise:x.items,changeExpertise:function(e,n){var t=e.target.value,i=x.items.map((function(e){return e.id===n&&(e.example=t),e}));p(Object(L.a)(Object(L.a)({},x),{},{items:i}))},addExpertiseInstance:function(){var e=Object(J.a)(x.items);e.push({id:Object(Ge.a)(),example:""}),p(Object(L.a)(Object(L.a)({},x),{},{items:e}))},removeExpertiseInstance:function(){var e=Object(J.a)(x.items);e.pop(),p(Object(L.a)(Object(L.a)({},x),{},{items:e}))}})}),Object(P.jsxs)(Ae,{className:"mainView",children:["",Object(P.jsx)(De,{userInfo:t,educationInfo:r,workInfo:l,expertiseInfo:x})]})]})},Re=Object(A.a)(C||(C=Object(S.a)(["\n  :root,\n  body {\n    font-family: Helvetica;\n    font-size : 10px;\n    background: rgb(250, 250, 250);\n    margin: 0;\n  }\n\n  .content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),Ue=function(){return Object(P.jsxs)("div",{className:"content",children:[Object(P.jsx)(Re,{}),Object(P.jsx)(U,{}),Object(P.jsx)(Pe,{})]})};G.a.render(Object(P.jsx)(W.a.StrictMode,{children:Object(P.jsx)(Ue,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c2697083.chunk.js.map