"use strict";(self.webpackChunkstore_course=self.webpackChunkstore_course||[]).push([[277],{731:function(t,n,e){e.d(n,{Z:function(){return p}});e(2791);var r=e(4565),o=e(5953),i=e(8928),a=e(8487),s=e(5194),c=e(199),d=e(9548),u=e(1033),l=e(184);function p(t){var n=t.question,e=t.md,p=void 0===e?6:e,f=null!==n&&void 0!==n&&n.photo?"".concat(u.SL).concat(null===n||void 0===n?void 0:n.photo):d.t$;return(0,l.jsx)(o.ZP,{item:!0,xs:12,md:p,sx:{mt:1},children:(0,l.jsx)(a.Z,{component:"a",href:"/questions/".concat(n.id),children:(0,l.jsxs)(i.Z,{sx:{display:"flex",borderRadius:"20px"},children:[(0,l.jsxs)(s.Z,{sx:{flex:1},children:[(0,l.jsx)(r.Z,{component:"h2",variant:"h5",fontWeight:"bold",className:"MainBoxContainerText",children:n.title}),(0,l.jsx)(r.Z,{variant:"subtitle1",color:"text.secondary",fontSize:13,children:"".concat(n.lang.title," ").concat(n.level.title," ").concat(n.tech.title)}),(0,l.jsxs)(r.Z,{variant:"subtitle1",paragraph:!0,fontWeight:"light",fontSize:15,className:"MainBoxContainerSubText",children:[n.describe.slice(0,150),"..."]})]}),(0,l.jsx)(c.Z,{component:"img",sx:{width:160},image:f})]})})})}},6681:function(t,n,e){e.d(n,{I:function(){return v},K:function(){return Z}});var r=e(1413),o=e(2791),i=e(9996),a=e(3457),s=e(184),c="#b6daff",d="#3399FF",u="#007FFF",l="#d0d7de",p="#afb8c1",f="#424a53",h="#24292f",m=(0,a.Z)("input")((function(t){var n=t.theme;return"\n  width: 100%;\n  font-family: IBM Plex Sans, sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 12px;\n  border-radius: 12px;\n  color: ".concat("dark"===n.palette.mode?p:h,";\n  background: ").concat("dark"===n.palette.mode?h:"#fff",";\n  border: 1px solid ").concat("dark"===n.palette.mode?f:l,";\n  box-shadow: 0px 4px 30px ").concat("dark"===n.palette.mode?h:l,";\n\n  &:hover {\n    border-color: ").concat(d,";\n  }\n\n  &:focus {\n    border-color: ").concat(d,";\n    outline: 3px solid ").concat("dark"===n.palette.mode?u:c,";\n  }\n")})),x=(0,a.Z)("textarea")((function(t){var n=t.theme;return"\n  width: 100%;\n  font-family: IBM Plex Sans, sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 12px;\n  border-radius: 12px;\n  color: ".concat("dark"===n.palette.mode?p:h,";\n  background: ").concat("dark"===n.palette.mode?h:"#fff",";\n  border: 1px solid ").concat("dark"===n.palette.mode?f:l,";\n  box-shadow: 0px 4px 30px ").concat("dark"===n.palette.mode?h:l,";\n\n  &:hover {\n    border-color: ").concat(d,";\n  }\n\n  &:focus {\n    border-color: ").concat(d,";\n    outline: 3px solid ").concat("dark"===n.palette.mode?u:c,";\n  }\n")})),v=o.forwardRef((function(t,n){return(0,s.jsx)(i.Z,(0,r.Z)((0,r.Z)({components:{Input:m}},t),{},{ref:n}))})),Z=function(t){return(0,s.jsx)(x,(0,r.Z)({},t))}},1828:function(t,n,e){e.d(n,{Z:function(){return R}});var r=e(4165),o=e(5861),i=e(885),a=e(2791),s=e(6871),c=e(5953),d=e(4565),u=e(8916),l=e(199),p=e(7205),f=e(1413),h=e(2773),m=e(6283),x=e(6015),v=e(184);var Z={overrides:{h1:{component:d.Z,props:{gutterBottom:!0,variant:"h4",component:"h1"}},h2:{component:d.Z,props:{gutterBottom:!0,variant:"h6",component:"h2"}},h3:{component:d.Z,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:d.Z,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:d.Z,props:{paragraph:!0}},a:{component:m.Z},li:{component:function(t){return(0,v.jsx)(x.Z,(0,f.Z)({component:"li",sx:{mt:1,typography:"body1"}},t))}}}};function g(t){return(0,v.jsx)(h.Z,(0,f.Z)({options:Z},t))}var b=e(6681),j=e(8154),w=e(9087),y=e(6579),k=e(6078);function C(t){var n=t.id,e=(0,y.T)(),s=(0,a.useState)(""),c=(0,i.Z)(s,2),d=c[0],u=c[1],l=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(o){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.preventDefault(),t.next=3,(0,j.r)().create({questionId:Number(n),date:new Date,message:d});case 3:e((0,k.zK)(Number(n)));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,v.jsxs)("form",{onSubmit:l,children:[(0,v.jsx)(b.I,{style:{width:"100%",marginTop:"20px"},placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",value:d,onChange:function(t){var n=t.target;return u(n.value)}}),(0,v.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,borderRadius:"10px",background:"#0966aa"},children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]})}function N(t){var n,e=t.item,r=e.date,o=r.split("T")[0],i=r.split("T")[1].split(".")[0];return(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",background:"#1315200d",padding:"10px",borderRadius:"10px",marginBottom:"10px"},children:[(0,v.jsx)("div",{style:{fontWeight:"bold"},children:null===(n=e.user)||void 0===n?void 0:n.name}),(0,v.jsx)("div",{style:{width:"50%"},children:e.message}),(0,v.jsxs)("div",{style:{fontWeight:"lighter"},children:[o," ",i]})]})}function R(t){var n,e,i=t.question,a=t.isMain,f=void 0!==a&&a,h=(0,y.C)((function(t){return t.question})),m=(0,y.C)((function(t){return t.user.user})),x=(0,y.T)(),Z=(0,s.UO)(),b=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,w.D)().create({date:new Date,questionId:Number(Z.id)});case 2:x((0,k.yj)(Number(Z.id)));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,w.D)().delete(n);case 2:x((0,k.yj)(Number(Z.id)));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),R=h.favourites.find((function(t){var n=t.user;return(null===n||void 0===n?void 0:n.id)==(null===m||void 0===m?void 0:m.id)})),M=null!==(n=i.photo)&&void 0!==n&&n.split("8080")[1]?"https://itbotinterview.ru".concat(null===(e=i.photo)||void 0===e?void 0:e.split("8080")[1]):"",S=null!==m&&void 0!==m&&m.id?"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f":"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0441\u044f";return(0,v.jsxs)(c.ZP,{item:!0,xs:12,md:8,sx:{"& .markdown":{py:3}},children:[(0,v.jsx)(d.Z,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:i.title}),(0,v.jsxs)("div",{style:{fontWeight:"lighter"},children:["\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f: ",h.favourites.length," \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c"]}),(0,v.jsx)(u.Z,{}),!f&&(null!==R&&void 0!==R&&R.id?(0,v.jsx)(p.Z,{disabled:!(null!==m&&void 0!==m&&m.id),onClick:function(){return j(null===R||void 0===R?void 0:R.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"}):(0,v.jsx)(p.Z,{disabled:!(null!==m&&void 0!==m&&m.id),onClick:b,children:S})),(0,v.jsx)(u.Z,{}),M&&(0,v.jsx)(l.Z,{component:"img",image:M}),(0,v.jsx)(g,{className:"markdown",children:i.describe}),f&&(0,v.jsx)(p.Z,{type:"submit",href:"/questions/".concat(null===i||void 0===i?void 0:i.id),fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,borderRadius:"10px",background:"#0966aa"},children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0443"}),null!==m&&void 0!==m&&m.id?!f&&(0,v.jsx)(C,{id:Z.id}):(0,v.jsx)("div",{style:{fontWeight:"lighter"},children:"\u0427\u0442\u043e\u0431\u044b \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0441\u044f"}),h.comments.map((function(t){return(0,v.jsx)(N,{item:t})}))]})}},7743:function(t,n,e){e.d(n,{Z:function(){return c}});e(2791);var r=e(5953),o=e(6650),i=e(4565),a=e(6283),s=e(184);function c(t){var n=t.archives,e=t.description,c=t.title;return(0,s.jsxs)(r.ZP,{item:!0,xs:12,md:4,children:[(0,s.jsxs)(o.Z,{elevation:0,sx:{p:2,bgcolor:"#1315200d",borderRadius:"20px"},children:[(0,s.jsx)(i.Z,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:c}),(0,s.jsx)(i.Z,{fontWeight:"lighter",children:e})]}),(0,s.jsxs)(o.Z,{elevation:0,sx:{padding:"10px",marginTop:"20px",bgcolor:"#1315200d",borderRadius:"20px"},children:[(0,s.jsx)(i.Z,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"\u041d\u0430\u0448\u0438 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438"}),n.map((function(t){return(0,s.jsx)(a.Z,{display:"block",variant:"body1",fontWeight:"lighter",href:t.url,children:t.title},t.title)}))]})]})}},9548:function(t,n,e){e.d(n,{lx:function(){return o},rc:function(){return r},t$:function(){return i}});var r={title:"\u0427\u0442\u043e \u0442\u0443\u0442 \u0435\u0441\u0442\u044c ?",description:"\u0422\u0443\u0442 \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043d\u0430\u0439\u0442\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0441\u043e\u0432\u0441\u0435\u043c \u0440\u0430\u0437\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438. \n\u0422\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e \u0438 \u043f\u0440\u043e\u0439\u0442\u0438 \u0438\u043c\u043f\u0440\u043e\u0432\u0435\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0432 \u0431\u043e\u0442\u0435 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0435",archives:[{title:"\u0411\u043e\u0442 IT \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a",url:"https://t.me/interviewITBot"},{title:"\u0414\u0436\u0430\u0432\u0430\u0441\u043a\u0440\u0438\u043f\u0442\u0435\u0437\u0435\u0440\u044b",url:"https://t.me/jswrl"},{title:"\u0414\u0436\u0430\u0432\u0430\u0441\u043a\u0440\u0438\u043f\u0442\u0435\u0437\u0435\u0440\u044b YouTube",url:"https://www.youtube.com/channel/UCPHIf4eGH-i5yox4MqI-fvw"},{title:"\u041f\u0438\u0442\u043e\u043d\u0438\u0441\u0442\u044b",url:"https://t.me/ptworl"},{title:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",url:"/support"}]},o={title:"\u0418\u0449\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u044b\u0441\u0442\u0440\u043e",description:"\u041d\u0435 \u0431\u043e\u0439\u0441\u044f \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u0422\u0443\u0442 \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043d\u0430\u0439\u0442\u0438 \u0432\u0441\u0435 \u043d\u0443\u0436\u043d\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f",image:"/code.jpeg",imageText:"main image description",linkText:"\u041d\u0430\u0448\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u044b...",linkURL:"/contact"},i="https://www.vastas.com/wp-content/uploads/2019/12/placeholder.jpg"},4277:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});var r=e(1413),o=e(885),i=e(2791),a=e(5953),s=e(731),c=e(6650),d=e(4565),u=e(6283),l=e(6015),p=e(4717),f=e(1417),h=e(9348),m=e(184);function x(t){var n=t.post,e=(0,p._)(),r=(0,h.YD)(),s=(0,o.Z)(r,2),x=s[0],v=s[1];return(0,i.useEffect)((function(){v?e.start("visible"):e.start("hidden")}),[e,v]),(0,m.jsx)(f.E.div,{variants:{visible:{opacity:1,translateX:0,transition:{duration:.5}},hidden:{opacity:0,translateX:-100}},animate:e,ref:x,className:"mainPostBlock",children:(0,m.jsxs)(c.Z,{sx:{position:"relative",backgroundColor:"grey.800",color:"#fff",mb:4,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",borderRadius:"20px"},children:[(0,m.jsx)("img",{style:{display:"none"},src:n.image,alt:n.imageText}),(0,m.jsx)(l.Z,{sx:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)",borderRadius:"20px"}}),(0,m.jsx)(a.ZP,{container:!0,children:(0,m.jsx)(a.ZP,{item:!0,md:6,children:(0,m.jsxs)(l.Z,{sx:{position:"relative",p:{xs:3,md:6},pr:{md:0}},children:[(0,m.jsx)(d.Z,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,sx:{fontWeight:"bold"},className:"MainBoxContainerText",children:n.title}),(0,m.jsx)(d.Z,{variant:"h5",color:"inherit",paragraph:!0,sx:{fontWeight:"lighter",fontSize:"20px"},className:"MainBoxContainerSubText",children:n.description}),(0,m.jsx)(u.Z,{variant:"subtitle1",href:n.linkURL,sx:{color:"white",textDecoration:"none",fontWeight:"bold",letterSpacing:"4px"},children:n.linkText})]})})})]})})}var v=e(7743),Z=e(1828),g=e(8437),b=e(9548),j=e(2461);function w(){var t=(0,i.useState)(),n=(0,o.Z)(t,2),e=n[0],c=n[1],d=(0,i.useState)(),u=(0,o.Z)(d,2),l=u[0],p=u[1],f=(0,i.useState)(),h=(0,o.Z)(f,2),w=h[0],y=h[1];return(0,i.useEffect)((function(){(0,g.a)().get("","","",g.A.random).then((function(t){return c(t)})),(0,g.a)().get("","","",g.A.random).then((function(t){return p(t)})),(0,g.a)().get("","","",g.A.random).then((function(t){return y(t)}))}),[]),(0,m.jsxs)(j.ZP,(0,r.Z)((0,r.Z)({},{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",description:"\u0418\u0449\u0438 \u043e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0438 \u043f\u043e \u0432\u0441\u0435\u043c \u044f\u0437\u044b\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.",meta:{charset:"utf-8",name:{keywords:"react,meta,document,html,tags"}}}),{},{children:[(0,m.jsx)(x,{post:b.lx}),(0,m.jsxs)(a.ZP,{container:!0,spacing:4,children:[e&&(0,m.jsx)(s.Z,{question:e},e.title),l&&(0,m.jsx)(s.Z,{question:l},l.title)]}),(0,m.jsxs)(a.ZP,{container:!0,spacing:5,sx:{mt:3},children:[w&&(0,m.jsx)(Z.Z,{isMain:!0,question:w}),(0,m.jsx)(v.Z,{title:b.rc.title,description:b.rc.description,archives:b.rc.archives})]})]}))}},8928:function(t,n,e){e.d(n,{Z:function(){return x}});var r=e(7462),o=e(3366),i=e(2791),a=e(8182),s=e(4419),c=e(277),d=e(5513),u=e(6650),l=e(1217);function p(t){return(0,l.Z)("MuiCard",t)}(0,e(5878).Z)("MuiCard",["root"]);var f=e(184),h=["className","raised"],m=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(t,n){return n.root}})((function(){return{overflow:"hidden"}})),x=i.forwardRef((function(t,n){var e=(0,d.Z)({props:t,name:"MuiCard"}),i=e.className,c=e.raised,u=void 0!==c&&c,l=(0,o.Z)(e,h),x=(0,r.Z)({},e,{raised:u}),v=function(t){var n=t.classes;return(0,s.Z)({root:["root"]},p,n)}(x);return(0,f.jsx)(m,(0,r.Z)({className:(0,a.Z)(v.root,i),elevation:u?8:void 0,ref:n,ownerState:x},l))}))},8487:function(t,n,e){e.d(n,{Z:function(){return g}});var r=e(4942),o=e(7462),i=e(3366),a=e(2791),s=e(8182),c=e(4419),d=e(5513),u=e(277),l=e(1217);function p(t){return(0,l.Z)("MuiCardActionArea",t)}var f=(0,e(5878).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),h=e(7491),m=e(184),x=["children","className","focusVisibleClassName"],v=(0,u.ZP)(h.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(t,n){return n.root}})((function(t){var n,e=t.theme;return n={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(n,"&:hover .".concat(f.focusHighlight),{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(n,"&.".concat(f.focusVisible," .").concat(f.focusHighlight),{opacity:(e.vars||e).palette.action.focusOpacity}),n})),Z=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(t,n){return n.focusHighlight}})((function(t){var n=t.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:n.transitions.create("opacity",{duration:n.transitions.duration.short})}})),g=a.forwardRef((function(t,n){var e=(0,d.Z)({props:t,name:"MuiCardActionArea"}),r=e.children,a=e.className,u=e.focusVisibleClassName,l=(0,i.Z)(e,x),f=e,h=function(t){var n=t.classes;return(0,c.Z)({root:["root"],focusHighlight:["focusHighlight"]},p,n)}(f);return(0,m.jsxs)(v,(0,o.Z)({className:(0,s.Z)(h.root,a),focusVisibleClassName:(0,s.Z)(u,h.focusVisible),ref:n,ownerState:f},l,{children:[r,(0,m.jsx)(Z,{className:h.focusHighlight,ownerState:f})]}))}))},5194:function(t,n,e){e.d(n,{Z:function(){return m}});var r=e(7462),o=e(3366),i=e(2791),a=e(8182),s=e(4419),c=e(277),d=e(5513),u=e(1217);function l(t){return(0,u.Z)("MuiCardContent",t)}(0,e(5878).Z)("MuiCardContent",["root"]);var p=e(184),f=["className","component"],h=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(t,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=i.forwardRef((function(t,n){var e=(0,d.Z)({props:t,name:"MuiCardContent"}),i=e.className,c=e.component,u=void 0===c?"div":c,m=(0,o.Z)(e,f),x=(0,r.Z)({},e,{component:u}),v=function(t){var n=t.classes;return(0,s.Z)({root:["root"]},l,n)}(x);return(0,p.jsx)(h,(0,r.Z)({as:u,className:(0,a.Z)(v.root,i),ownerState:x,ref:n},m))}))}}]);
//# sourceMappingURL=277.38d38e20.chunk.js.map