(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{10:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerLightPink:"#ffeae8",makerBlack:"black",container:"image_file_input_container__3Eqtx",button:"image_file_input_button__3E8sw",pink:"image_file_input_pink__1V0O7",grey:"image_file_input_grey__68AiQ",input:"image_file_input_input__1K4NM",loading:"image_file_input_loading__3OwEa",spin:"image_file_input_spin__1K71y"}},13:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",container:"login_container__2teO8",login:"login_login__19aQM",login_title:"login_login_title__3b09n",login_btn:"login_login_btn__2Ju8S"}},15:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",head:"header_head__2aUYd",logo:"header_logo__1X7aW",title:"header_title__1DXxp",logout:"header_logout__1MXam"}},19:function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__3lr-V",title:"preview_title__3zLS1"}},26:function(e,t,a){e.exports={makerGrey:"#626262",login_container:"app_login_container__KYiGB",maker_container:"app_maker_container__26Ug-"}},27:function(e,t,a){e.exports={makerGreen:"#385461",editor:"editor_editor__1nHIK",title:"editor_title__21REx"}},28:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerLightGrey:"#e8e7e6",mediaQuery:"62rem",container:"maker_container__25Mis",main:"maker_main__3px5-"}},36:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",footer:"footer_footer__1lZIc"}},40:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",button:"button_button__3_GL1"}},47:function(e,t,a){},6:function(e,t,a){e.exports={form:"add_form_form__2DGPy",input:"add_form_input___SFIA",textarea:"add_form_textarea__264CC",select:"add_form_select__1aOo4",button:"add_form_button__1Y2IP",fileInput:"add_form_fileInput__3d8k9"}},61:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(1),r=a.n(c),i=a(35),o=a.n(i),l=(a(47),a(2)),s=a(36),u=a.n(s),d=a(0),j=Object(c.memo)((function(e){return Object(d.jsx)("footer",{className:u.a.footer,children:Object(d.jsx)("p",{children:"Code your dream"})})})),m=a(15),p=a.n(m),b=Object(c.memo)((function(e){var t=e.onLogout;return Object(d.jsxs)("header",{className:p.a.head,children:[t&&Object(d.jsx)("button",{onClick:t,className:p.a.logout,children:"Logout"}),Object(d.jsx)("img",{className:p.a.logo,src:"./images/logo.png",alt:"main_logo"}),Object(d.jsx)("h1",{className:p.a.title,children:" Business Card Maker"})]})})),f=a(13),_=a.n(f),h=function(e){var t=e.authService,a=Object(l.f)(),n=function(e){a.push({pathname:"/main",state:{id:e}})},r=function(e){t.login(e.currentTarget.textContent).then((function(e){n(e.user.uid)}))};return Object(c.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.uid)}))})),Object(d.jsxs)("section",{className:_.a.container,children:[Object(d.jsx)(b,{}),Object(d.jsxs)("section",{className:_.a.login,children:[Object(d.jsx)("h1",{className:_.a.login_title,children:"Login"}),Object(d.jsx)("button",{onClick:r,className:_.a.login_btn,children:"Google"}),Object(d.jsx)("button",{onClick:r,className:_.a.login_btn,children:"Github"})]}),Object(d.jsx)(j,{})]})},O=a(26),g=a.n(O),x=a(42),v=a(9),k=a(39),N=a(40),y=a.n(N),C=function(e){var t=e.name,a=e.onclick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{className:y.a.button,onClick:a,children:t})})},w=a(6),I=a.n(w),S=Object(c.memo)((function(e){var t=e.FileInput,a=e.addCard,n=Object(c.useRef)(),r=Object(c.useRef)(),i=Object(c.useRef)(),o=Object(c.useRef)(),l=Object(c.useRef)(),s=Object(c.useRef)(),u=Object(c.useRef)(),j=Object(k.useState)({imageName:null,url:null}),m=Object(v.a)(j,2),p=m[0],b=m[1];return Object(d.jsxs)("form",{ref:n,className:I.a.form,children:[Object(d.jsx)("input",{ref:r,placeholder:"Name",className:I.a.input,type:"text"}),Object(d.jsx)("input",{ref:i,placeholder:"Company",className:I.a.input,type:"text"}),Object(d.jsxs)("select",{ref:o,className:I.a.select,name:"select",children:[Object(d.jsx)("option",{value:"dark",children:"dark"}),Object(d.jsx)("option",{value:"light",children:"light"}),Object(d.jsx)("option",{value:"colorful",children:"colorful"})]}),Object(d.jsx)("input",{ref:l,placeholder:"Jop",className:I.a.input,type:"text"}),Object(d.jsx)("input",{ref:s,placeholder:"Email",className:I.a.input,type:"text"}),Object(d.jsx)("textarea",{ref:u,placeholder:"Message",className:I.a.textarea,name:"",id:"",cols:"30",rows:"3"}),Object(d.jsx)("div",{className:I.a.fileInput,children:Object(d.jsx)(t,{uploadImage:function(e,t){b({imageName:t,url:e})},name:p.imageName})}),Object(d.jsx)(C,{name:"Add",onclick:function(e){e.preventDefault();var t={id:Date.now(),name:r.current.value||"",company:r.current.value||"",jop:l.current.value||"",email:s.current.value||"",message:u.current.value||"",fileURL:p.url||"",fileName:p.imageName||"",type:o.current.value};n.current.reset(),b({imageName:null,url:null}),a(t)}})]})})),G=a(17),F=a(7),L=a.n(F),R=Object(c.memo)((function(e){var t=e.FileInput,a=e.card,c=e.updateCard,r=e.deleteCard;console.log("hello");var i=a.name,o=a.company,l=a.jop,s=a.email,u=a.message,j=a.type,m=a.fileName,p=function(e){null!=e.currentTarget&&(e.preventDefault(),c(Object(n.a)(Object(n.a)({},a),{},Object(G.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(d.jsxs)("form",{className:L.a.form,children:[Object(d.jsx)("input",{name:"name",placeholder:"Name",className:L.a.input,type:"text",value:i,onChange:p}),Object(d.jsx)("input",{name:"company",placeholder:"Company",className:L.a.input,type:"text",value:o,onChange:p}),Object(d.jsxs)("select",{className:L.a.select,name:"type",value:j,onChange:p,children:[Object(d.jsx)("option",{value:"dark",children:"dark"}),Object(d.jsx)("option",{value:"light",children:"light"}),Object(d.jsx)("option",{value:"colorful",children:"colorful"})]}),Object(d.jsx)("input",{name:"jop",placeholder:"Jop",className:L.a.input,type:"text",value:l,onChange:p}),Object(d.jsx)("input",{name:"email",placeholder:"Email",className:L.a.input,type:"text",value:s,onChange:p}),Object(d.jsx)("textarea",{name:"message",placeholder:"Message",className:L.a.textarea,id:"",cols:"30",rows:"3",value:u,onChange:p}),Object(d.jsx)("div",{className:L.a.fileInput,children:Object(d.jsx)(t,{uploadImage:function(e,t){c(Object(n.a)(Object(n.a)({},a),{},{fileName:t,fileURL:e}))},name:m})}),Object(d.jsx)(C,{name:"Delete",onclick:function(){r(a)}})]})})),D=a(27),E=a.n(D),P=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,c=e.updateCard,r=e.deleteCard;return Object(d.jsxs)("section",{className:E.a.editor,children:[Object(d.jsx)("h1",{className:E.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(d.jsx)(R,{FileInput:t,card:a[e],deleteCard:r,updateCard:c},e)})),Object(d.jsx)(S,{FileInput:t,addCard:n})]})},A=a(8),W=a.n(A);function B(e){switch(e){case"dark":return W.a.dark;case"light":return W.a.light;case"colorful":return W.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var M=Object(c.memo)((function(e){var t=e.card,a=t.name,n=t.company,c=t.jop,r=t.email,i=t.message,o=t.type,l=t.fileURL||"/images/default_logo.png";return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:"".concat(W.a.card," ").concat(B(o)),children:[Object(d.jsx)("img",{className:W.a.image,src:l,alt:""}),Object(d.jsxs)("div",{className:W.a.description,children:[Object(d.jsx)("h2",{className:W.a.name,children:a}),Object(d.jsx)("p",{children:n}),Object(d.jsx)("hr",{className:W.a.vertical}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("p",{children:r}),Object(d.jsx)("p",{children:i})]})]})})})),U=a(19),T=a.n(U),J=function(e){var t=e.cards;return Object(d.jsxs)("div",{className:T.a.preview,children:[Object(d.jsx)("h1",{className:T.a.title,children:"Card Preview"}),Object(d.jsx)("ul",{className:T.a.cards,children:Object.keys(t).map((function(e){return Object(d.jsx)(M,{card:t[e]},e)}))})]})},K=a(28),X=a.n(K),z=function(e){var t,a=e.FileInput,r=e.authService,i=e.databaseService,o=Object(l.f)(),s=null===o||void 0===o||null===(t=o.location)||void 0===t?void 0:t.state,u=Object(c.useState)({}),m=Object(v.a)(u,2),p=m[0],f=m[1],_=Object(c.useState)(s&&s.id),h=Object(v.a)(_,2),O=h[0],g=h[1],x=Object(c.useCallback)((function(){r.logout()}),[r]);Object(c.useEffect)((function(){if(O){var e=i.readData(O,(function(e){return f(e)}));return function(){return e()}}}),[O,i]),Object(c.useEffect)((function(){r.onAuthChange((function(e){e?g(e.uid):o.push("/")}))}),[r,o,O]);var k=Object(c.useCallback)((function(e){f((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),i.writeData(O,e)}),[i,O]),N=Object(c.useCallback)((function(e){f((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),i.deleteData(O,e.id)}),[i,O]);return Object(d.jsxs)("section",{className:X.a.container,children:[Object(d.jsx)(b,{onLogout:x}),Object(d.jsxs)("section",{className:X.a.main,children:[Object(d.jsx)(P,{FileInput:a,cards:p,addCard:k,updateCard:k,deleteCard:N}),Object(d.jsx)("hr",{}),Object(d.jsx)(J,{cards:p})]}),Object(d.jsx)(j,{})]})},q=function(e){var t=e.FileInput,a=e.authService,n=e.databaseService;return Object(d.jsx)(x.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:["/",".home"],exact:!0,children:Object(d.jsx)("section",{className:g.a.login_container,children:Object(d.jsx)(h,{authService:a})})}),Object(d.jsx)(l.a,{path:"/main",children:Object(d.jsx)("section",{className:g.a.maker_container,children:Object(d.jsx)(z,{FileInput:t,authService:a,databaseService:n})})})]})})},Q=a(12),V=a(18),Y=a(20),Z=a.n(Y),H=(a(53),a(55),Z.a.initializeApp({apiKey:"AIzaSyBv8b91jFsiF2BZkNmX7gXlNw62WL0nL0s",authDomain:"card-maker-3d448.firebaseapp.com",projectId:"card-maker-3d448",databaseURL:"https://card-maker-3d448-default-rtdb.firebaseio.com/"})),$=H.database(),ee=H.auth(),te=new Z.a.auth.GoogleAuthProvider,ae=new Z.a.auth.GithubAuthProvider,ne=function(){function e(){Object(Q.a)(this,e)}return Object(V.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return ee.signInWithPopup(t)}},{key:"onAuthChange",value:function(e){ee.onAuthStateChanged((function(t){e(t)}))}},{key:"logout",value:function(){return ee.signOut()}},{key:"getProvider",value:function(e){switch(e){case"Google":return te;case"Github":return ae;default:throw new Error("unset provider")}}}]),e}(),ce=(a(57),a(29)),re=a.n(ce),ie=a(41),oe=a(10),le=a.n(oe);function se(e,t){return e?le.a.pink:le.a.grey}var ue=Object(c.memo)((function(e){var t=e.uploadService,a=e.uploadImage,n=e.name,r=Object(c.useState)(!0),i=Object(v.a)(r,2),o=i[0],l=i[1],s=Object(c.useRef)(),u=function(){var e=Object(ie.a)(re.a.mark((function e(){var n,c;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),n=s.current.files,e.next=4,t.upload(n[0]);case 4:c=e.sent,l(!1),a(c.url,c.original_filename);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l(!1)}),[]),Object(d.jsxs)("div",{className:le.a.container,children:[!o&&Object(d.jsx)("button",{className:"".concat(le.a.button," ").concat(se(n)," "),onClick:function(e){e.preventDefault(),s.current.click()},children:n||"No file"}),o&&Object(d.jsx)("div",{className:le.a.loading,children:Object(d.jsx)("i",{className:"fas fa-spinner"})}),Object(d.jsx)("input",{className:le.a.input,accept:"image/*",ref:s,type:"file",onChange:u})]})})),de=function(){function e(){Object(Q.a)(this,e)}return Object(V.a)(e,[{key:"writeData",value:function(e,t){$.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"deleteData",value:function(e,t){$.ref("".concat(e,"/cards/").concat(t)).remove()}},{key:"readData",value:function(e,t){var a=$.ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}}]),e}(),je=new ne,me=new function e(){var t=this;Object(Q.a)(this,e),this.upload=function(e){var a=e,n=new FormData;return n.append("file",a),n.append("upload_preset",t.preset),fetch(t.url,{method:"POST",body:n}).then((function(e){return e.json()}))},this.url="https://api.cloudinary.com/v1_1/dpvhkp8oq/image/upload",this.preset="yl2sbvbf"},pe=new de,be=Object(c.memo)((function(e){return Object(d.jsx)(ue,Object(n.a)(Object(n.a)({},e),{},{uploadService:me}))}));o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(q,{authService:je,FileInput:be,databaseService:pe})}),document.getElementById("root"))},7:function(e,t,a){e.exports={form:"form_form__1Ljzh",input:"form_input__kPN_j",textarea:"form_textarea__1bT46",select:"form_select__3UjWR",button:"form_button__2H-c6",fileInput:"form_fileInput__1s77m"}},8:function(e,t,a){e.exports={makerShadow:"rgba(217, 217, 217, 1)",makerWhite:"white",makerWheat:"wheat",makerBlack:"black",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",card:"cards_card__1CqLb",dark:"cards_dark__3IG0B",colorful:"cards_colorful__1ZjUF",light:"cards_light__22cS0",image:"cards_image__1V3aR",description:"cards_description__2rkvR",vertical:"cards_vertical__Nm6PS",name:"cards_name__3BvfN"}}},[[61,1,2]]]);
//# sourceMappingURL=main.9d43371f.chunk.js.map