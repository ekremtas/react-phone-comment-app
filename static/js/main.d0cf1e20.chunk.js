(this["webpackJsonpphone-comment-app"]=this["webpackJsonpphone-comment-app"]||[]).push([[0],{27:function(e,n,t){e.exports=t(57)},32:function(e,n,t){},33:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),c=t(9),r=t.n(c),l=(t(32),t(33),t(10)),i=t(24),u=t.n(i),s=t(58),m=t(59),p=t(60),h=t(61),d=t(62),E=t(63),f=t(64),g=t(67),b=function(e){return o.a.createElement(s.a,{md:"3",className:"mt-4"},o.a.createElement(m.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,null,e.phone_data.name),o.a.createElement(d.a,null,e.phone_data.brand)),o.a.createElement(E.a,{top:!0,width:"100%",src:e.phone_data.image[0],alt:"Card image cap"}),o.a.createElement(p.a,null,o.a.createElement(f.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),o.a.createElement(g.a,null,"Go somewhere"))))},O=t(65),j=t(66),v={getPhones:function(){return function(e){e({type:"LOADING_PAGE"}),u.a.get("".concat("https://5ea5689e2d86f00016b45bf7.mockapi.io","/phones")).then((function(n){e({type:"GET_PHONES",payload:n.data})})).catch((function(e){console.log("Axios err",e)}))}}},w=Object(l.b)((function(e){var n=e.commentsReducer;return{phones:n.phones,loading:n.loading}}),v)((function(e){return Object(a.useEffect)((function(){e.getPhones(),console.log(e.phones)}),[]),o.a.createElement(O.a,null,o.a.createElement(j.a,null,e.phones.map((function(e){return o.a.createElement(b,{key:e.id,phone_data:e})}))))}));var _=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null),"Big Project")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=t(8),y=t(25),G=t(7),P={phones:[],loading:{}},A=Object(k.c)({commentsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOADING_PAGE":return Object(G.a)(Object(G.a)({},e),{},{loading:{phones_page:!0}});case"GET_PHONES":return Object(G.a)(Object(G.a)({},e),{},{loading:Object(G.a)(Object(G.a)({},e.loading),{},{phones_page:!1}),phones:n.payload});default:return e}}}),N=Object(k.d)(A,Object(k.a)(y.a));t(56);r.a.render(o.a.createElement(l.a,{store:N},o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.d0cf1e20.chunk.js.map