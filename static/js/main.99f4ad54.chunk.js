(window["webpackJsonpsubstrate-ui-template"]=window["webpackJsonpsubstrate-ui-template"]||[]).push([[0],{1148:function(e,t){},1380:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(138),l=a.n(c),o=a(65),u=a(29),i=a(378),s=a(205),m=a(210),p=a.n(m),f=a(1402),b=a(1390),O=a(1391),d=a(1392),E=a(1400),j=a(1397),y=a(1401),v=a(1396);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function g(e){var t=e.api,a=e.keyring.getPairs(),c=a.map(function(e){return e.meta.name}),l=Object(n.useState)({}),i=Object(u.a)(l,2),s=i[0],m=i[1],p=Object(n.useMemo)(function(){return a.map(function(e){return e.address})},[a]);return Object(n.useEffect)(function(){var e;return t.query.balances.freeBalance.multi(p,function(e){var t=p.reduce(function(t,a,n){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,Object(o.a)({},a,e[n].toString()))},{});m(t)}).then(function(t){e=t}).catch(console.error),function(){return e&&e()}},[t.query.balances.freeBalance,m]),r.a.createElement(y.a.Column,null,r.a.createElement("h1",null,"Balances"),r.a.createElement(v.a,{celled:!0,striped:!0,size:"small"},r.a.createElement(v.a.Body,null,p.map(function(e,t){return r.a.createElement(v.a.Row,{key:t},r.a.createElement(v.a.Cell,{textAlign:"right"},c[t]),r.a.createElement(v.a.Cell,null,e),r.a.createElement(v.a.Cell,null,s&&s[e]))}))))}var w=a(1398),S=a(1399),P=a(142);function x(e){var t=e.api,a=e.finalized,c=Object(n.useState)(0),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(0),m=Object(u.a)(s,2),p=m[0],f=m[1],b=a?t.derive.chain.bestNumberFinalized:t.derive.chain.bestNumber;Object(n.useEffect)(function(){var e;return b(function(e){i(e.toNumber()),f(0)}).then(function(t){e=t}).catch(console.error),function(){return e&&e()}},[b]);var O=function(){f(function(e){return e+1})};return Object(n.useEffect)(function(){var e=setInterval(O,1e3);return function(){return clearInterval(e)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a.Column,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Content,{textAlign:"center"},r.a.createElement(S.a,{label:(a?"Finalized":"Current")+" Block Number",value:o})),r.a.createElement(w.a.Content,{extra:!0},r.a.createElement(P.a,{name:"time"})," ",p))))}var C=a(56),k=a.n(C),F=a(278),D=a(1393),A=a(1389),R=a(1381);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function I(e){var t=e.api,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)(""),m=Object(u.a)(s,2),p=m[0],f=m[1],b=Object(n.useState)([]),O=Object(u.a)(b,2),d=O[0],E=O[1],v=Object(n.useState)({module:"",storageItem:"",input:""}),h=Object(u.a)(v,2),g=h[0],w=h[1],S=g.module,P=g.storageItem,x=g.input;Object(n.useEffect)(function(){var e=Object.keys(t.query).sort().map(function(e){return{key:e,value:e,text:e}});i(e)},[t]),Object(n.useEffect)(function(){if(""!==S){var e=Object.keys(t.query[S]).sort().map(function(e){return{key:e,value:e,text:e}});E(e)}},[t,S]);var C=function(e,t){w(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(o.a)({},t.state,t.value))})},I=function(){var e=Object(F.a)(k.a.mark(function e(){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.query[S][P](x);case 3:a=e.sent,f(a.toString()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f(e.t0.toString());case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(y.a.Column,null,r.a.createElement("h1",null,"Chain State"),r.a.createElement(D.a,null,r.a.createElement(D.a.Field,null,r.a.createElement(j.a,{placeholder:"Select a module to query",fluid:!0,label:"Module",onChange:C,search:!0,selection:!0,state:"module",options:l,value:S})),r.a.createElement(D.a.Field,null,r.a.createElement(j.a,{placeholder:"Select a storage item to query",fluid:!0,label:"Storage Item",onChange:C,search:!0,selection:!0,state:"storageItem",options:d,value:P})),r.a.createElement(D.a.Field,null,r.a.createElement(A.a,{onChange:C,label:"Input",fluid:!0,placeholder:"May not be needed",state:"input",type:"text",value:x})),r.a.createElement(D.a.Field,null,r.a.createElement(R.a,{onClick:I,primary:!0,type:"submit"},"Query")," ",p)))}function q(e){var t=e.api,n=a(13),r=a(50),c=a(345);return window.api=t,window.util=n,window.util_crypto=r,window.keyring=c,null}var z=a(208),B=a(1395);function T(e){var t=e.api,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)(function(){var e=['system:ExtrinsicSuccess:: (phase={"ApplyExtrinsic":0})','system:ExtrinsicSuccess:: (phase={"ApplyExtrinsic":1})'];t.query.system.events(function(t){t.forEach(function(t){var a=t.event,n=t.phase,r=a.typeDef,c="".concat(a.section,":").concat(a.method,":: (phase=").concat(n.toString(),")"),l=a.data.map(function(e,t){return"".concat(r[t].type,": ").concat(e.toString())});if(!e.includes(c)){var u={icon:"bell",date:"X Blocks Ago",summary:c,extraText:a.meta.documentation.join().toString(),content:l};o(function(e){return[u].concat(Object(z.a)(e))})}})})},[t.query.system]),r.a.createElement(y.a.Column,null,r.a.createElement("h1",null,"Events"),r.a.createElement(B.a,{style:{overflow:"auto",maxHeight:250},events:l}))}function N(e){var t=e.api,a=e.accountPair,n=e.label,c=e.params,l=e.setStatus,o=e.tx,u=e.sudo,i=void 0!==u&&u,m=function(){var e=Object(F.a)(k.a.mark(function e(){var n,r,u,m,p;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.address,r=a.meta,u=r.source,!r.isInjected){e.next=9;break}return e.next=4,Object(s.web3FromSource)(u);case 4:p=e.sent,m=n,t.setSigner(p.signer),e.next=10;break;case 9:m=a;case 10:l("Sending..."),(i?o.sudo.apply(o,Object(z.a)(c)):o.apply(void 0,Object(z.a)(c))).signAndSend(m,function(e){var t=e.status;t.isFinalized?l("Completed at block hash #".concat(t.asFinalized.toString())):l("Current transaction status: ".concat(t.type))}).catch(function(e){l(":( transaction failed"),console.error("ERROR:",e)});case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(R.a,{onClick:m,primary:!0,type:"submit"},n)}function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function H(e){var t=e.api,a=e.accountPair,c=Object(n.useState)([]),l=Object(u.a)(c,2),i=l[0],s=l[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),f=p[0],b=p[1],O=Object(n.useState)([]),d=Object(u.a)(O,2),E=d[0],v=d[1],h=Object(n.useState)({module:"",callableFunction:"",input:""}),g=Object(u.a)(h,2),w=g[0],S=g[1],P=w.module,x=w.callableFunction,C=w.input;Object(n.useEffect)(function(){var e=Object.keys(t.tx).sort().map(function(e){return{key:e,value:e,text:e}});s(e)},[t]),Object(n.useEffect)(function(){if(""!==P){var e=Object.keys(t.tx[P]).sort().map(function(e){return{key:e,value:e,text:e}});v(e)}},[t,P]);var k=function(e,t){S(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(o.a)({},t.state,t.value))})};return r.a.createElement(y.a.Column,null,r.a.createElement("h1",null,"Extrinsics"),r.a.createElement(D.a,null,r.a.createElement(D.a.Field,null,r.a.createElement(j.a,{placeholder:"Select a module to call",fluid:!0,label:"Module",onChange:k,search:!0,selection:!0,state:"module",options:i})),r.a.createElement(D.a.Field,null,r.a.createElement(j.a,{placeholder:"Select a function to call",fluid:!0,label:"Callable Function",onChange:k,search:!0,selection:!0,state:"callableFunction",options:E})),r.a.createElement(D.a.Field,null,r.a.createElement(A.a,{onChange:k,label:"Input",fluid:!0,placeholder:"May not be needed",state:"input",type:"text"})),r.a.createElement(D.a.Field,null,r.a.createElement(N,{api:t,accountPair:a,label:"Call",params:[C],setStatus:b,tx:t.tx&&t.tx[P]&&t.tx[P][x]}),f)))}var J=a(1394);function V(e){var t=e.api,a=Object(n.useState)(0),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(0),s=Object(u.a)(i,2),m=s[0],p=s[1];return Object(n.useEffect)(function(){t.rpc.state.getMetadata(function(e){o(e),p(e.version)})},[t.rpc.state]),r.a.createElement(y.a.Column,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Content,null,r.a.createElement(w.a.Header,null,"Metadata"),r.a.createElement(w.a.Meta,null,r.a.createElement("span",null,"v",m))),r.a.createElement(w.a.Content,{extra:!0},r.a.createElement(J.a,{trigger:r.a.createElement(R.a,null,"Show Metadata")},r.a.createElement(J.a.Header,null,"Runtime Metadata"),r.a.createElement(J.a.Content,{scrolling:!0},r.a.createElement(J.a.Description,null,r.a.createElement("pre",null,r.a.createElement("code",null,JSON.stringify(l,null,2)))))))))}function W(e){var t=e.api,a=Object(n.useState)({}),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)(function(){Promise.all([t.rpc.system.chain(),t.rpc.system.name(),t.rpc.system.version()]).then(function(e){var t=Object(u.a)(e,3),a=t[0],n=t[1],r=t[2];o({chain:a,nodeName:n,nodeVersion:r})}).catch(function(e){return console.error(e)})},[t.rpc.system]),r.a.createElement(y.a.Column,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Content,null,r.a.createElement(w.a.Header,null,l.nodeName),r.a.createElement(w.a.Meta,null,r.a.createElement("span",null,l.chain)),r.a.createElement(w.a.Description,null,"Built using the"," ",r.a.createElement("a",{href:"https://github.com/substrate-developer-hub/substrate-ui-template"},"Substrate UI Template"))),r.a.createElement(w.a.Content,{extra:!0},r.a.createElement(P.a,{name:"setting"}),"v",l.nodeVersion)))}function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Q(e){var t=e.api,a=e.accountPair,c=Object(n.useState)(""),l=Object(u.a)(c,2),i=l[0],s=l[1],m=Object(n.useState)({addressTo:"",amount:0}),p=Object(u.a)(m,2),f=p[0],b=p[1],O=f.addressTo,d=f.amount,E=function(e,t){b(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(o.a)({},t.state,t.value))})};return r.a.createElement(y.a.Column,null,r.a.createElement("h1",null,"Transfer"),r.a.createElement(D.a,null,r.a.createElement(D.a.Field,null,r.a.createElement(A.a,{onChange:E,label:"To",fluid:!0,placeholder:"address",state:"addressTo",type:"text"})),r.a.createElement(D.a.Field,null,r.a.createElement(A.a,{label:"Amount",fluid:!0,onChange:E,state:"amount",type:"number"})),r.a.createElement(D.a.Field,null,r.a.createElement(N,{api:t,accountPair:a,label:"Send",params:[O,d],setStatus:s,tx:t.tx.balances.transfer}),i)))}function X(e){var t,a=e.api,c=e.accountPair,l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)({}),p=Object(u.a)(m,2),f=p[0],b=p[1],O=function(e){var n,r=(n=t.result,Array.from(new Uint8Array(n)).map(function(e){return e.toString(16).padStart(2,"0")}).join("")),c=a.tx.system.setCode("0x".concat(r));b(c)};return r.a.createElement(y.a.Column,null,r.a.createElement("h1",null,"Upgrade Runtime"),r.a.createElement(D.a,null,r.a.createElement(D.a.Field,null,r.a.createElement(A.a,{type:"file",id:"file",label:"Wasm File",accept:".wasm",onChange:function(e){return a=e.target.files[0],(t=new FileReader).onloadend=O,void t.readAsArrayBuffer(a);var a}})),r.a.createElement(D.a.Field,null,r.a.createElement(N,{api:a,accountPair:c,label:"Upgrade",params:[f],setStatus:s,tx:a.tx.sudo,sudo:!0}),i)))}a(1372);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}l.a.render(r.a.createElement(function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(u.a)(l,2),m=o[0],v=o[1],h=Object(n.useState)(!1),w=Object(u.a)(h,2),S=w[0],P=w[1],C=Object(n.useState)(""),k=Object(u.a)(C,2),F=k[0],D=k[1],A=F&&p.a.getPair(F),R=S&&p.a.getPairs().map(function(e){return{key:e.address,value:e.address,text:e.meta.name.toUpperCase(),icon:"user"}});Object(n.useEffect)(function(){var e=new i.WsProvider("wss://dev-node.substrate.dev:9944");i.ApiPromise.create({provider:e,types:{}}).then(function(e){c(e),e.isReady.then(function(){return v(!0)})}).catch(function(e){return console.error(e)})},[]),Object(n.useEffect)(function(){Object(s.web3Enable)("substrate-front-end-tutorial").then(function(e){Object(s.web3Accounts)().then(function(e){return e.map(function(e){var t=e.address,a=e.meta;return{address:t,meta:G({},a,{name:"".concat(a.name," (").concat(a.source,")")})}})}).then(function(e){M(e)}).catch(console.error)}).catch(console.error)},[]);var M=function(e){p.a.loadAll({isDevelopment:!0},e),P(!0)},z=function(e){return r.a.createElement(f.a,{active:!0},r.a.createElement(b.a,{size:"small"},e))};if(!m)return z("Connecting to the blockchain");if(!S)return z("Loading accounts (please review any extension's authorization)");var B=Object(n.createRef)();return r.a.createElement("div",{ref:B},r.a.createElement(O.a,null,r.a.createElement(d.a,{context:B},r.a.createElement(E.a,{attached:"top",tabular:!0,style:{backgroundColor:"#fff",paddingTop:"1em"}},r.a.createElement(E.a.Menu,{position:"right"},r.a.createElement(j.a,{search:!0,selection:!0,placeholder:"Select from your accounts",options:R,onChange:function(e,t){D(t.value)}})))),r.a.createElement(y.a,{stackable:!0,columns:"equal"},r.a.createElement(y.a.Row,{stretched:!0},r.a.createElement(W,{api:a}),r.a.createElement(V,{api:a}),r.a.createElement(x,{api:a}),r.a.createElement(x,{api:a,finalized:!0})),r.a.createElement(y.a.Row,{stretched:!0},r.a.createElement(g,{api:a,keyring:p.a})),r.a.createElement(y.a.Row,null,r.a.createElement(Q,{api:a,accountPair:A}),r.a.createElement(X,{api:a,accountPair:A})),r.a.createElement(y.a.Row,null,r.a.createElement(H,{api:a,accountPair:A}),r.a.createElement(I,{api:a}),r.a.createElement(T,{api:a}))),r.a.createElement(q,{api:a})))},null),document.getElementById("root"))},652:function(e,t,a){e.exports=a(1380)},677:function(e,t){},738:function(e,t){},740:function(e,t){},773:function(e,t){},837:function(e,t){}},[[652,1,2]]]);
//# sourceMappingURL=main.99f4ad54.chunk.js.map