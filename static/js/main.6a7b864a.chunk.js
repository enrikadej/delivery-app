(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{29:function(t,e,c){},30:function(t,e,c){},32:function(t,e,c){},34:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c(21),r=c.n(n),s=(c(29),c(13)),i=c(17),o=c(8),d=c(4),u=(c(30),c(2)),l=c(9),j=c.n(l),b=c(12),p="http://localhost:3001",O=function(){var t=Object(b.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/shops"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(b.a)(j.a.mark((function t(e){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/orders"),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}});case 2:return c=t.sent,t.next=5,c.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=(c(32),c(1)),f=function(t){var e=t.product,c=t.actionCart,a=e.image,n=e.title,r=e.price;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{src:a,alt:n,className:"card__image"}),Object(h.jsxs)("div",{className:"card__description",children:[Object(h.jsx)("h3",{className:"card__title",children:n}),Object(h.jsx)("h3",{className:"card__price",children:"".concat(r,",00 UAH")})]}),Object(h.jsx)("div",{className:"card__wrap-button",children:Object(h.jsx)("button",{type:"button",className:"card__button-buy",onClick:function(){return c(e,"add")},children:"buy"})})]})},x=(c(34),function(t){var e=t.actionCart,c=Object(a.useState)([]),n=Object(d.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)([]),o=Object(d.a)(i,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){O().then((function(t){return s(t)}))}),[]),Object(h.jsxs)("div",{className:"shop",children:[Object(h.jsx)("div",{className:"shop__list",children:r.map((function(t){return Object(h.jsx)("button",{type:"button",className:"shop__item store",onClick:function(){l(t.products),console.log(t.products)},children:t.storeName},t.id)}))}),Object(h.jsx)("div",{className:"shop__products products",children:u.map((function(t){return Object(h.jsx)("div",{children:Object(h.jsx)(f,{product:t,actionCart:e})},t.id)}))})]})}),_=c(14),v=(c(38),c(39),c(24)),y=c.n(v),N=function(t){var e=t.modalActive,c=t.setModalActive;return Object(h.jsx)("div",{role:"textbox",tabIndex:0,onClick:function(t){t.stopPropagation(),c(!1)},onKeyDown:function(t){t.stopPropagation(),c(!1)},className:y()("accepted",{modal__active:e}),children:Object(h.jsx)("h1",{className:"accepted__title",children:"Your order is accepted!"})})},g=function(t){var e=t.cart,c=t.actionCart,n=Object(a.useState)(0),r=Object(d.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(0),u=Object(d.a)(o,2),l=u[0],p=u[1],O=Object(a.useState)(!1),f=Object(d.a)(O,2),x=f[0],v=f[1],y=Object(a.useState)(!1),g=Object(d.a)(y,2),C=g[0],k=g[1],q=function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={id:s,user:{name:a.name,email:a.email,phone:a.phone,address:a.address},foodstuff:e,total:l},console.log(n),!n.foodstuff){t.next=5;break}return t.next=5,m(n);case 5:i(s+1),p(0),c(e[0],"empty");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();console.log("card!!!",e),Object(a.useEffect)((function(){var t=e.reduce((function(t,e){return t+e.qty*e.price}),0);p(t)}),[e]),Object(a.useEffect)((function(){var t=localStorage.getItem("cart");console.log(t,"component did mount")}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)(_.c,{initialValues:{name:"",email:"",phone:"",address:""},onSubmit:function(t,c){console.log({values:t,actions:c}),e.length>0?(q(t),k(!0),v(!1)):v(!0),c.resetForm()},children:Object(h.jsxs)(_.b,{className:"cart",children:[Object(h.jsxs)("div",{className:"cart__info",children:[["name","email","phone","address"].map((function(t){return Object(h.jsx)("div",{className:"cart__form-field",children:Object(h.jsxs)("label",{htmlFor:t,children:["Your ".concat(t),Object(h.jsx)("br",{}),Object(h.jsx)(_.a,{id:t,name:t,className:"cart__input",required:!0})]})},t)})),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"cart__total",children:"Total: ".concat(l," UAH")}),x&&Object(h.jsx)("p",{className:"cart__error",children:"Your cart is empty!"}),Object(h.jsx)("div",{className:"cart__wrap-button",children:Object(h.jsx)("button",{type:"submit",className:"cart__submit-button",children:"Submit"})})]})]}),Object(h.jsx)("div",{className:"cart__orders orders",children:e.map((function(t){return Object(h.jsxs)("div",{className:"cart__cardInCart cardInCart",children:[Object(h.jsx)("img",{src:t.image,alt:t.title,className:"cardInCart__image"}),Object(h.jsxs)("div",{className:"cardInCart__description",children:[Object(h.jsx)("h3",{className:"cardInCart__title",children:t.title}),Object(h.jsx)("h3",{className:"cardInCart__price",children:"".concat(t.price,",00 UAH")}),Object(h.jsxs)("div",{className:"cardInCart__qty qty",children:[Object(h.jsxs)("div",{className:"qty__count",children:[Object(h.jsx)("button",{type:"button",className:"qty__decrease",onClick:function(){return c(t,"subtract")},disabled:1===t.qty,children:"-"}),Object(h.jsx)(_.a,{type:"number",min:"1",max:"100",value:t.qty,className:"qty__input",redonly:!0}),Object(h.jsx)("button",{type:"button",onClick:function(){return c(t,"add")},className:"qty__increase",children:"+"})]}),Object(h.jsx)("button",{type:"button",className:"qty__delete",onClick:function(){return c(t,"delete")},children:"delete"})]})]})]},t.id)}))})]})}),C&&Object(h.jsx)(N,{modalActive:C,setModalActive:k})]})},C=function(){return Object(h.jsx)(h.Fragment,{})},k=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),c=e[0],n=e[1],r=function(t,e){var a=c.find((function(e){return e.id===t.id}));switch(e){case"add":console.log("add product!"),console.log("exist",a),a?(console.log("add product2"),n(c.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},a),{},{qty:a.qty+1}):e})))):(console.log("product added"),n([].concat(Object(i.a)(c),[Object(o.a)(Object(o.a)({},t),{},{qty:1})])));break;case"subtract":n(a?c.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},a),{},{qty:a.qty-1}):e})):[].concat(Object(i.a)(c),[Object(o.a)(Object(o.a)({},t),{},{qty:-1})]));break;case"delete":if(a){var r=c.indexOf(a),s=Object(i.a)(c);s.splice(r,1),n(s)}break;case"empty":n([])}};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"App__tabs",children:[Object(h.jsx)(s.b,{to:"/shop",className:function(t){return"App__button ".concat(t?"activeLink":void 0)},children:"Shop"}),Object(h.jsx)(s.b,{to:"/cart",className:function(t){return"App__button ".concat(t?"activeLink":void 0)},children:"Shopping Cart"})]}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/shop",element:Object(h.jsx)(x,{actionCart:r})}),Object(h.jsx)(u.b,{path:"/",element:Object(h.jsx)(u.a,{to:"/shop"})}),Object(h.jsx)(u.b,{path:"/cart",element:Object(h.jsx)(g,{cart:c,actionCart:r})}),Object(h.jsx)(u.b,{path:"*",element:Object(h.jsx)(C,{})})]})]})};r.a.render(Object(h.jsx)(s.a,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6a7b864a.chunk.js.map