(this.webpackJsonplabeninja=this.webpackJsonplabeninja||[]).push([[0],{55:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o,s,d,l,j,b,p,x,u,h,O,m,f,g,v,w,k,y,C,S,z,D,P,q,R,T,N=t(1),F=t.n(N),E=t(27),L=t.n(E),$=t(4),A=t(8),V=t(3),B=t(31),I=t(5),J=t(2),H=t(9),M=t.n(H),Q="https://more-deploys.herokuapp.com",W=t(0),G=Object(N.createContext)(),K=function(e){var n=Object(J.f)(),t=Object(N.useState)([]),r=Object(I.a)(t,2),c=r[0],a=r[1],i=Object(N.useState)([]),o=Object(I.a)(i,2),s=o[0],d=o[1],l=Object(N.useState)({}),j=Object(I.a)(l,2),b=j[0],p=j[1];Object(N.useEffect)((function(){M.a.get("".concat(Q,"/jobs")).then((function(e){a(e.data)})).catch((function(e){alert(e.response.data)}))}),[]);var x={servicos:c,servico:b,carrinho:s},u={adicionarAoCarrinho:function(e){var n=[].concat(Object(B.a)(s),[e]);d(n),alert("".concat(e.title," adicionado."))},removerDoCarrinho:function(e){if(window.confirm("Tem certeza que deseja remover o servi\xe7o?")){var n=s.filter((function(n){return n.id!==e}));d(n)}},limparCarrinho:function(){window.confirm("Tem certeza que deseja apagar todo o carrinho?")&&d([])}},h={contratarServico:function(e){M.a.get("".concat(Q,"/job/").concat(e)).then((function(e){p(e.data),n("/detalhe")})).catch((function(e){alert(e.response.data)}))}};return Object(W.jsx)(G.Provider,{value:{states:x,setters:u,requests:h},children:e.children})},U=G,X=t.p+"static/media/ninja.4b457182.png",Y=V.b.div(r||(r=Object($.a)(["\n    text-align: center;\n    margin-top: 80px;\n"]))),Z=V.b.button(c||(c=Object($.a)(["\n    height: 40px;\n    width: 150px;\n    border-radius: 30px;\n    background-color: #151626;\n    color: whitesmoke;\n    cursor: pointer;\n    margin: 10px;\n         \n"]))),_=(V.b.p(a||(a=Object($.a)(["\n    font-size: 14pt;\n"]))),function(){var e=Object(J.f)();return Object(W.jsxs)(Y,{children:[Object(W.jsx)("h1",{children:"LabeNinjas"}),Object(W.jsx)("img",{src:"".concat(X),alt:"imgam de logo"}),Object(W.jsx)("p",{children:Object(W.jsx)("b",{children:"O talento certo no moment certo."})}),Object(W.jsx)(Z,{onClick:function(){return e("/cadastro")},children:"Quero ser um ninja"}),Object(W.jsx)(Z,{onClick:function(){return e("/lista")},children:"Contrar um ninja"})]})}),ee=t(11),ne=t(12),te=V.b.div(i||(i=Object($.a)(["\n    text-align: center;    \n    \n    form{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    input{\n    \twidth: 250px;\n    \theight: 20px;\n    \tbackground: transparent;\n    \tcolor: whitesmoke;\n    \tfont-size: 1rem;\n    \tborder-radius: 10px;\n        padding-left: 10px;\n        margin-bottom: 10px;\n    }\n    textarea{\n        width: 253px;\n        border-radius: 10px;\n        background: transparent;\n        font-size: 1rem;\n        color: whitesmoke;\n        margin-bottom: 10px;\n        padding-left: 10px;\n    }\n    select{\n        width: 265px;\n        border-radius: 10px;\n        background: transparent;\n        font-size: 1rem;\n        color: whitesmoke;\n        padding-left: 10px;\n        option{\n            color: black;\n        }\n    }\n"]))),re=V.b.button(o||(o=Object($.a)(["\n    margin: 5px;\n    height: 30px;\n    width: 265px;\n    border-radius: 30px;\n    background-color: #151626;\n    color: whitesmoke;\n    cursor: pointer;\n"]))),ce=V.b.div(s||(s=Object($.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n    margin-top: 10px;\n"]))),ae=function(){var e=Object(J.f)(),n=Object(N.useState)({titulo:"",descricao:"",preco:"",pagamento:"",prazo:""}),t=Object(I.a)(n,2),r=t[0],c=t[1],a=function(e){var n=e.target,t=n.name,a=n.value;c(Object(ne.a)(Object(ne.a)({},r),{},Object(ee.a)({},t,a)))};return Object(W.jsxs)(te,{children:[Object(W.jsx)("h2",{children:"Preencha o formul\xe1rio com os dados do servi\xe7o"}),Object(W.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={title:r.titulo,description:r.descricao,price:r.preco,payment:r.pagamento,dueDate:r.prazo};"Pagamento"===r.pagamento?alert("Selecione uma forma de pagamento."):r.prazo<new Date||M.a.post("".concat(Q,"/jobs"),n).then((function(e){alert(e.data),c({titulo:"",descricao:"",preco:"",pagamento:"",prazo:""})})).catch((function(e){alert(e.response.data)}))},children:[Object(W.jsx)("input",{type:"text",name:"titulo",value:r.titulo,onChange:a,placeholder:"Nome do servi\xe7o",required:!0}),Object(W.jsx)("textarea",{name:"descricao",value:r.descricao,onChange:a,placeholder:"Descricao"}),Object(W.jsx)("input",{type:"number",name:"preco",value:r.preco,onChange:a,step:"0.01",placeholder:"R$ 0,00",required:!0}),Object(W.jsx)("input",{type:"date",name:"prazo",value:r.prazo,onChange:a,required:!0}),Object(W.jsxs)("select",{name:"pagamento",value:r.pagamento,onChange:a,required:!0,children:[Object(W.jsx)("option",{defaultChecked:!0,children:"Pagamento"}),Object(W.jsx)("option",{children:"D\xe9bito"}),Object(W.jsx)("option",{children:"Cr\xe9dito"}),Object(W.jsx)("option",{children:"Pix"}),Object(W.jsx)("option",{children:"Boleto"})]}),Object(W.jsx)(ce,{children:Object(W.jsx)(re,{children:"Cadastrar"})})]}),Object(W.jsx)(re,{onClick:function(){return e("/lista")},children:"Ir para lista"})]})},ie=function(e){var n=e.substring(8,10),t=e.substring(5,7),r=e.substring(0,4);return"".concat(n,"/").concat(t,"/").concat(r)},oe=V.b.div(d||(d=Object($.a)(["\n    text-align: center;\n    margin-top: 20px;\n"]))),se=V.b.div(l||(l=Object($.a)(["\n    box-shadow: 2px 2px 4px #918bcb;\n    border: 1px solid;\n    border-radius: 10px;\n    width: 84vw;\n    margin: auto;\n    h2{\n        text-align: center;\n    }\n    input{\n        width: 170px;\n        height: 20px;\n        background: transparent;\n        color: whitesmoke;\n        font-size: 1rem;\n        border-radius: 10px;\n        margin: 10px;\n        padding-left: 10px;\n    }\n    select{\n        margin-left: 10px;\n        height: 25px;\n        background: transparent;\n        border-radius: 10px;\n        color: gray;\n        padding-left: 10px;\n        font-size: 1rem;\n        option{\n            color: black;\n        }\n    }\n"]))),de=V.b.div(j||(j=Object($.a)(["\n    margin-top: 30px;\n"]))),le=V.b.div(b||(b=Object($.a)(["\n    text-align: left;\n    color: black;\n    border: 1px solid;\n    box-shadow: 2px 2px 4px #918bcb;    \n    width: 230px;\n    display: inline-block;\n    margin: 20px;\n    padding: 15px;\n    border-radius: 10px;\n    &:hover{\n    transform: scale(1.1);\n    transition: 1s;\n    }\n"]))),je=V.b.div(p||(p=Object($.a)(["\n    text-align: center;\n    font-size: 14pt;\n    font-weight: bold;\n"]))),be=V.b.button(x||(x=Object($.a)(["\n    border-radius: 20px;\n    background-color: #151626;\n    color: whitesmoke;\n    cursor: pointer;\n"]))),pe=V.b.div(u||(u=Object($.a)(["\n    margin: auto;\n    border: 2px solid #918bcb;\n    border-top: none;\n    width: 100px;\n    height: 100px;\n    box-shadow: 1px 1px 2px #918bcb;\n    border-radius: 50%;\n    animation: loading 0.8s infinite;\n\n    @keyframes loading {\n        from{\n            transform: rotate(0deg);\n        }\n        to{\n            transform: rotate(360deg);\n        }\n        \n    }\n"]))),xe=function(){var e=Object(N.useContext)(U),n=e.states,t=e.setters,r=e.requests,c=n.servicos,a=Object(N.useState)(""),i=Object(I.a)(a,2),o=i[0],s=i[1],d=Object(N.useState)(""),l=Object(I.a)(d,2),j=l[0],b=l[1],p=Object(N.useState)(""),x=Object(I.a)(p,2),u=x[0],h=x[1],O=Object(N.useState)(""),m=Object(I.a)(O,2),f=m[0],g=m[1],v=c&&c.filter((function(e){return o<e.price})).filter((function(e){return""===j||j>=e.price})).filter((function(e){return""===u||u.toLowerCase().includes(e.title.toLowerCase())})).sort((function(e,n){switch(f){case"T\xedtulo":return e.title.localeCompare(n.title);case"Pre\xe7o":return e.price-n.price;case"Prazo":return new Date(e.dueDate).getTime()-new Date(n.dueDate).getTime();default:return!1}}));return Object(W.jsxs)(oe,{children:[Object(W.jsxs)(se,{children:[Object(W.jsx)("h2",{children:"Filtro de busca"}),Object(W.jsx)("input",{type:"number",min:"1",value:o,onChange:function(e){s(e.target.value)},placeholder:"Valor m\xednimo"}),Object(W.jsx)("input",{type:"number",min:"1",value:j,onChange:function(e){b(e.target.value)},placeholder:"Valor m\xe1ximo"}),Object(W.jsx)("input",{type:"text",value:u,onChange:function(e){h(e.target.value)},placeholder:"T\xedtulo"}),Object(W.jsxs)("select",{value:f,onChange:function(e){g(e.target.value)},children:[Object(W.jsx)("option",{defaultChecked:!0,children:"Sem ordena\xe7\xe3o"}),Object(W.jsx)("option",{children:"T\xedtulo"}),Object(W.jsx)("option",{children:"Pre\xe7o"}),Object(W.jsx)("option",{children:"Prazo"})]})]}),Object(W.jsx)(de,{children:v.length>0?v.map((function(e){return Object(W.jsxs)(le,{children:[Object(W.jsx)(je,{children:e.title}),Object(W.jsxs)("p",{children:[Object(W.jsx)("b",{children:"Pre\xe7o: "}),"R$ ",e.price]}),Object(W.jsx)("b",{children:"Prazo: "}),ie(e.dueDate),Object(W.jsxs)("p",{children:[Object(W.jsx)(be,{onClick:function(){return r.contratarServico(e.id)},children:"Contratar"}),"\xa0\xa0",Object(W.jsx)(be,{onClick:function(){return t.adicionarAoCarrinho(e)},children:"Adicionar ao carrinho"})]})]},e.id)})):Object(W.jsx)(pe,{})})]})},ue=V.b.div(h||(h=Object($.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),he=V.b.div(O||(O=Object($.a)(["\n    display: flex;\n    flex-direction: column;\n    border: 1px solid;\n    width: 80vw;\n    margin: 5px;\n    padding: 10px;\n    border-radius: 10px;\n    \n    div{\n        display: flex;\n        justify-content: space-between;\n    }\n"]))),Oe=V.b.div(m||(m=Object($.a)(["\n    border: 1px solid;\n    width: 50vw;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    \n    @media(max-width: 600px){\n        display: flex;\n        flex-direction: column;\n    }\n"]))),me=V.b.button(f||(f=Object($.a)(["\n    margin: 5px;\n    border-radius: 30px;\n    background-color: #151626;\n    color: whitesmoke;\n    cursor: pointer;\n"]))),fe=V.b.div(g||(g=Object($.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 15vw;\n  margin-top: 10px;\n"]))),ge=function(){var e=Object(J.f)(),n=Object(N.useContext)(U),t=n.states,r=n.setters,c=n.requests,a=t.carrinho;console.log(a);var i=0;return a.forEach((function(e){i+=e.price})),Object(W.jsxs)(ue,{children:[a&&a.map((function(e){return Object(W.jsxs)(he,{children:[Object(W.jsxs)("div",{children:[Object(W.jsx)("b",{children:e.title}),"R$ ",e.price.toFixed(2)]}),Object(W.jsxs)(fe,{children:[Object(W.jsx)(me,{onClick:function(){return c.contratarServico(e.id)},children:"Contratar"}),Object(W.jsx)(me,{onClick:function(){return r.removerDoCarrinho(e.id)},children:"Remover"})]})]})})),Object(W.jsxs)(Oe,{children:[Object(W.jsxs)("b",{children:["Total: R$ ",i.toFixed(2)]}),Object(W.jsx)(me,{onClick:r.limparCarrinho,children:"Limpar carrinho"}),Object(W.jsx)(me,{onClick:function(){return e(-1)},children:"Voltar"})]})]})},ve=V.b.div(v||(v=Object($.a)(["    \n    color: black;\n    margin-top: 10vh;\n\n    .form-container{\n        \n    }\n    .forms-consulta{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        @media(max-width: 750px){\n            display: flex;\n            flex-direction: column;\n        }\n    }    \n    form{\n        margin: 20px;\n    }\n    fieldset{\n        width: 27vw;\n        padding: 20px;\n        border-radius: 10px;\n        box-shadow: 2px 2px 4px #918bcb;\n        legend{\n            text-align: center;\n            font-size: 1.3rem;\n        }\n    }\n    input{\n        background: transparent;\n        height: 20px;\n        font-size: 1rem;\n        color: whitesmoke;\n        border-radius: 10px;\n        margin-bottom: 10px;\n        padding-left: 10px;\n    }\n    select{\n        background: transparent;\n        width: 216px;\n        height: 25px;\n        font-size: 1rem;\n        border-radius: 10px;\n        padding-left: 10px;\n        color: gray;\n        option{\n            color: black;\n        }\n    }\n\n    .last-form{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    @media(max-width: 775px){\n        display: flex;\n        flex-direction: column;\n    }\n"]))),we=V.b.button(w||(w=Object($.a)(["\n    height: 40px;\n    width: 100px;\n    border-radius: 30px;\n    background-color: #151626;\n    color: whitesmoke; \n    cursor: pointer;\n    font-size: 12pt;\n    margin-top: 10px;\n"]))),ke=V.b.div(k||(k=Object($.a)(["\n    margin: auto;\n    box-shadow: 2px 2px 4px #918bcb;\n    border: 1px solid;\n    width: 300px;\n    padding: 10px;\n    border-radius: 10px;\n"]))),ye=V.b.h1(y||(y=Object($.a)(["\n    text-align: center;\n"]))),Ce=V.b.div(C||(C=Object($.a)(["\n    text-align: center;\n    padding: 15px;\n"]))),Se=V.b.button(S||(S=Object($.a)(["\n    background-color: #151626;\n    border-radius: 10px;\n    margin-top: 20px;\n    color: whitesmoke;\n    cursor: pointer;\n    padding: 5px;\n"]))),ze=V.b.p(z||(z=Object($.a)(["\n    display: none;\n"]))),De=V.b.div(D||(D=Object($.a)(["\n    display: none;\n    margin: 20px;\n    table{\n        border: 1px solid whitesmoke;\n        color: whitesmoke;\n        margin: auto;\n    }\n    th{\n        padding: 5px;\n    }\n    td{\n        padding: 5px;\n    }\n"]))),Pe=V.b.div(P||(P=Object($.a)(["\n    display: none;\n    margin: 20px;\n    table{\n        border: 1px solid whitesmoke;\n        color: whitesmoke;\n        margin: auto;\n    }\n    th{\n        padding: 5px;\n    }\n    td{\n        padding: 5px;\n    }\n"]))),qe=function(){var e=Object(N.useContext)(U).states.servico,n=Object(J.f)(),t=Object(N.useRef)(null),r=Object(N.useRef)(null),c=Object(N.useRef)(null),a=Object(N.useState)(""),i=Object(I.a)(a,2),o=i[0],s=i[1],d=Object(N.useState)(""),l=Object(I.a)(d,2),j=l[0],b=l[1],p=Object(N.useState)(""),x=Object(I.a)(p,2),u=x[0],h=x[1],O=Object(N.useState)([]),m=Object(I.a)(O,2),f=m[0],g=m[1],v=Object(N.useState)({}),w=Object(I.a)(v,2),k=w[0],y=w[1],C=Object(N.useState)({name:"",email:"",payment:""}),S=Object(I.a)(C,2),z=S[0],D=S[1],P=function(e){var n=e.target,t=n.name,r=n.value;D(Object(ne.a)(Object(ne.a)({},z),{},Object(ee.a)({},t,r)))};return console.log(f),Object(W.jsxs)(ve,{children:[Object(W.jsxs)(ke,{children:[Object(W.jsx)(ye,{children:e.title}),Object(W.jsxs)("p",{children:[Object(W.jsx)("b",{children:"Descri\xe7\xe3o: "}),e.description]}),Object(W.jsx)("b",{children:"Pre\xe7o: "}),"R$ ",e.price,".00",Object(W.jsxs)("p",{children:[Object(W.jsx)("b",{children:"Prazo: "})," ",e.dueDate]}),Object(W.jsx)("b",{children:"Formas de pagamento: "}),e.payment]}),Object(W.jsxs)("div",{className:"form-container",children:[Object(W.jsxs)("div",{className:"forms-consulta",children:[Object(W.jsx)("form",{onSubmit:function(n){if(n.preventDefault(),"Pagamento"===z.payment)alert("Selecione uma forma de pagamento.");else{var r={name:z.name,email:z.email,payment:z.payment,job:e.title};M.a.post("".concat(Q,"/job"),r).then((function(n){s(n.data),alert("".concat(e.title," contratado.")),t.current.style.display="block"})).catch((function(e){alert(e.response.data)}))}},children:Object(W.jsxs)("fieldset",{children:[Object(W.jsx)("legend",{children:"Contrar servi\xe7o"}),Object(W.jsx)("input",{type:"text",name:"name",value:z.name,onChange:P,placeholder:"Nome",required:!0}),Object(W.jsx)("br",{}),Object(W.jsx)("input",{type:"email",name:"email",value:z.email,onChange:P,placeholder:"nome@email.com",required:!0}),Object(W.jsx)("br",{}),Object(W.jsxs)("select",{name:"payment",value:z.payment,onChange:P,required:!0,children:[Object(W.jsx)("option",{defaultChecked:!0,children:"Pagamento"}),Object(W.jsx)("option",{children:"D\xe9bito"}),Object(W.jsx)("option",{children:"Cr\xe9dito"}),Object(W.jsx)("option",{children:"Pix"}),Object(W.jsx)("option",{children:"Boleto"})]}),Object(W.jsx)(Se,{children:"Contratar"}),Object(W.jsxs)(ze,{ref:t,style:{color:"whitesmoke"},children:["Anote a identifica\xe7\xe3o do servi\xe7o contratado:",Object(W.jsx)("br",{}),o]})]})}),Object(W.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={email:u};M.a.post("".concat(Q,"/hired"),n).then((function(e){g(e.data),r.current.style.display="block"})).catch((function(e){alert(e.response.data)}))},children:Object(W.jsxs)("fieldset",{children:[Object(W.jsx)("legend",{children:"Consultar servi\xe7os contratados"}),Object(W.jsx)("input",{type:"email",value:u,onChange:function(e){h(e.target.value)},placeholder:"Email do contratante",required:!0}),Object(W.jsx)(Se,{children:"Consultar"})]})})]}),Object(W.jsx)("form",{className:"last-form",onSubmit:function(e){e.preventDefault(),M.a.get("".concat(Q,"/hired/").concat(j)).then((function(e){y(e.data),c.current.style.display="block"})).catch((function(e){alert(e.response.data)}))},children:Object(W.jsxs)("fieldset",{children:[Object(W.jsx)("legend",{children:"Consultar servi\xe7o por identificador"}),Object(W.jsx)("input",{type:"text",value:j,onChange:function(e){b(e.target.value)},placeholder:"Identificador"}),Object(W.jsx)(Se,{children:"Consultar"})]})})]}),Object(W.jsx)(De,{ref:r,children:Object(W.jsx)("table",{border:"1",children:Object(W.jsxs)("th",{children:["Consulta por email",Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:"Servi\xe7o"}),Object(W.jsx)("td",{children:"Contratante"}),Object(W.jsx)("td",{children:"Forma de pagamento"}),Object(W.jsx)("td",{children:"Data de contrata\xe7\xe3o"})]}),f&&f.map((function(e){return Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:e.job}),Object(W.jsx)("td",{children:e.name}),Object(W.jsx)("td",{children:e.payment}),Object(W.jsx)("td",{children:e.date})]},e.id)}))]})})}),Object(W.jsx)(Pe,{ref:c,children:Object(W.jsx)("table",{border:"1",children:Object(W.jsxs)("th",{children:["Constulta por id",Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:"Servi\xe7o"}),Object(W.jsx)("td",{children:"Contratante"}),Object(W.jsx)("td",{children:"Email"}),Object(W.jsx)("td",{children:"Forma de pagamento"}),Object(W.jsx)("td",{children:"Data de contrata\xe7\xe3o"})]}),Object(W.jsxs)("tr",{children:[Object(W.jsx)("td",{children:k.job}),Object(W.jsx)("td",{children:k.name}),Object(W.jsx)("td",{children:k.email}),Object(W.jsx)("td",{children:k.payment}),Object(W.jsx)("td",{children:k.date})]})]})})}),Object(W.jsx)(Ce,{children:Object(W.jsx)(we,{onClick:function(){return n(-1)},children:"Voltar"})})]})},Re=function(){return Object(W.jsxs)(J.c,{children:[Object(W.jsx)(J.a,{exact:!0,path:"/",element:Object(W.jsx)(_,{})}),Object(W.jsx)(J.a,{exact:!0,path:"/cadastro",element:Object(W.jsx)(ae,{})}),Object(W.jsx)(J.a,{exact:!0,path:"/lista",element:Object(W.jsx)(xe,{})}),Object(W.jsx)(J.a,{exact:!0,path:"/carrinho",element:Object(W.jsx)(ge,{})}),Object(W.jsx)(J.a,{exact:!0,path:"/detalhe",element:Object(W.jsx)(qe,{})})]})},Te=t.p+"static/media/ninjaWallpaper.85118823.jpg",Ne=Object(V.a)(q||(q=Object($.a)(["\n  body{\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    color: #918bcb;\n  }\n"])),Te),Fe=V.b.div(R||(R=Object($.a)(["    \n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n  margin-bottom: -15px;\n  \n  @media(max-width: 377px){\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n  }\n"]))),Ee=V.b.button(T||(T=Object($.a)(["\n  margin: 5px;\n  height: 40px;\n  width: 90px;\n  border-radius: 30px;\n  background-color: #151626;\n  color: whitesmoke;\n  opacity: 0.7; \n  font-size: 14pt;\n  cursor: pointer;       \n"]))),Le=function(){return Object(W.jsx)(A.a,{children:Object(W.jsxs)(K,{children:[Object(W.jsx)(Ne,{}),Object(W.jsxs)(Fe,{children:[Object(W.jsx)("h1",{children:"LabeNinjas"}),Object(W.jsxs)("div",{children:[Object(W.jsx)(A.b,{to:"/",children:Object(W.jsx)(Ee,{children:"Home"})}),Object(W.jsx)(A.b,{to:"/carrinho",children:Object(W.jsx)(Ee,{children:"Carrinho"})})]})]}),Object(W.jsx)("hr",{}),Object(W.jsx)(Re,{})]})})};L.a.render(Object(W.jsx)(F.a.StrictMode,{children:Object(W.jsx)(Le,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.a8c1587e.chunk.js.map