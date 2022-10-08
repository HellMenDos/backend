"use strict";(self.webpackChunkstore_course=self.webpackChunkstore_course||[]).push([[899],{199:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3366),i=n(7462),o=n(2791),a=n(8182),l=n(4419),c=n(5513),u=n(277),s=n(1217);function f(e){return(0,s.Z)("MuiCardMedia",e)}(0,n(5878).Z)("MuiCardMedia",["root","media","img"]);var p=n(184),d=["children","className","component","image","src","style"],g=(0,u.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.isMediaComponent,i=n.isImageComponent;return[t.root,r&&t.media,i&&t.img]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),v=["video","audio","picture","iframe","img"],h=["picture","img"],m=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCardMedia"}),o=n.children,u=n.className,s=n.component,m=void 0===s?"div":s,y=n.image,x=n.src,k=n.style,b=(0,r.Z)(n,d),w=-1!==v.indexOf(m),S=!w&&y?(0,i.Z)({backgroundImage:'url("'.concat(y,'")')},k):k,C=(0,i.Z)({},n,{component:m,isMediaComponent:w,isImageComponent:-1!==h.indexOf(m)}),I=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,l.Z)(n,f,t)}(C);return(0,p.jsx)(g,(0,i.Z)({className:(0,a.Z)(I.root,u),as:m,role:!w&&y?"img":void 0,ref:t,style:S,ownerState:C,src:w?y||x:void 0},b,{children:o}))}))},8916:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3366),i=n(7462),o=n(2791),a=n(8182),l=n(4419),c=n(2065),u=n(277),s=n(5513),f=n(1217);function p(e){return(0,f.Z)("MuiDivider",e)}(0,n(5878).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var d=n(184),g=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],v=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((t.vars||t).palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,i.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),h=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),m=o.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiDivider"}),o=n.absolute,c=void 0!==o&&o,u=n.children,f=n.className,m=n.component,y=void 0===m?u?"div":"hr":m,x=n.flexItem,k=void 0!==x&&x,b=n.light,w=void 0!==b&&b,S=n.orientation,C=void 0===S?"horizontal":S,I=n.role,M=void 0===I?"hr"!==y?"separator":void 0:I,_=n.textAlign,A=void 0===_?"center":_,Z=n.variant,H=void 0===Z?"fullWidth":Z,L=(0,r.Z)(n,g),O=(0,i.Z)({},n,{absolute:c,component:y,flexItem:k,light:w,orientation:C,role:M,textAlign:A,variant:H}),R=function(e){var t=e.absolute,n=e.children,r=e.classes,i=e.flexItem,o=e.light,a=e.orientation,c=e.textAlign,u={root:["root",t&&"absolute",e.variant,o&&"light","vertical"===a&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(u,p,r)}(O);return(0,d.jsx)(v,(0,i.Z)({as:y,className:(0,a.Z)(R.root,f),role:M,ref:t,ownerState:O},L,{children:u?(0,d.jsx)(h,{className:R.wrapper,ownerState:O,children:u}):null}))}))},2773:function(e,t,n){var r=n(885),i=n(2791);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=["children","options"],l=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((function(e,t){return e[t.toLowerCase()]=t,e}),{for:"htmlFor"}),c={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},u=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,p=/\n{2,}$/,d=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,v=/^ {2,}\n/,h=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,m=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,x=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,k=/^(?:\n *)*\n/,b=/\r\n?/g,w=/^\[\^([^\]]+)](:.*)\n/,S=/^\[\^([^\]]+)]/,C=/\f/g,I=/^\s*?\[(x|\s)\]/,M=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,_=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,A=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,Z=/&([a-z]+);/g,H=/^<!--[\s\S]*?(?:-->)/,L=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,O=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,R=/^\{.*\}$/,E=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,G=/^<([^ >]+@[^ >]+)>/,W=/^<([^ >]+:\/[^ >]+)>/,T=/ *\n+$/,$=/(?:^|\n)( *)$/,z=/-([a-z])?/gi,N=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,B=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,X=/^\[([^\]]*)\] ?\[([^\]]*)\]/,j=/(\[|\])/g,P=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,U=/\t/g,V=/^ *\| */,F=/(^ *\||\| *$)/g,q=/ *$/,Q=/^ *:-+: *$/,Y=/^ *:-+ *$/,J=/^ *-+: *$/,K=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ee=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,te=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ne=/^\\([^0-9A-Za-z\s])/,re=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ie=/^\n+/,oe=/^([ \t]*)/,ae=/\\([^0-9A-Z\s])/gi,le=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ce=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ue=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),se="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",fe=new RegExp("^\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),pe=new RegExp("^!\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),de=[d,y,m,M,_,H,ce,ue,N],ge=[].concat(de,[/^[^\n]+(?:  \n|\n{2,})/,A,O]);function ve(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function he(e){return J.test(e)?"right":Q.test(e)?"center":Y.test(e)?"left":null}function me(e,t,n){var r=n.t;n.t=!0;var i=t(e.trim(),n);n.t=r;var o=[[]];return i.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==i.length-1&&o.push([]):("text"!==e.type||null!=i[t+1]&&"tableSeparator"!==i[t+1].type||(e.content=e.content.replace(q,"")),o[o.length-1].push(e))})),o}function ye(e,t,n){n.o=!0;var r=me(e[1],t,n),i=e[2].replace(F,"").split("|").map(he),o=function(e,t,n){return e.trim().split("\n").map((function(e){return me(e,t,n)}))}(e[3],t,n);return n.o=!1,{align:i,cells:o,header:r,type:"table"}}function xe(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ke(e){return function(t,n){return n.o?e.exec(t):null}}function be(e){return function(t,n){return n.o||n.u?e.exec(t):null}}function we(e){return function(t,n){return n.o||n.u?null:e.exec(t)}}function Se(e){return function(t){return e.exec(t)}}function Ce(e,t,n){if(t.o||t.u)return null;if(n&&!n.endsWith("\n"))return null;var r="";e.split("\n").every((function(e){return!de.some((function(t){return t.test(e)}))&&(r+=e+"\n",e.trim())}));var i=r.trimEnd();return""==i?null:[r,i]}function Ie(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function Me(e){return e.replace(ae,"$1")}function _e(e,t,n){var r=n.o||!1,i=n.u||!1;n.o=!0,n.u=!0;var o=e(t,n);return n.o=r,n.u=i,o}function Ae(e,t,n){var r=n.o||!1,i=n.u||!1;n.o=!1,n.u=!0;var o=e(t,n);return n.o=r,n.u=i,o}function Ze(e,t,n){return n.o=!1,e(t+"\n\n",n)}var He,Le,Oe=function(e,t,n){return{content:_e(t,e[1],n)}};function Re(){return{}}function Ee(){return null}function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function We(e,t,n){for(var r=e,i=t.split(".");i.length&&void 0!==(r=r[i[0]]);)i.shift();return r||n}function Te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.overrides=t.overrides||{},t.slugify=t.slugify||ve,t.namedCodesToUnicode=t.namedCodesToUnicode?o({},c,t.namedCodesToUnicode):c;var n=t.createElement||i.createElement;function a(e,r){for(var i=We(t.overrides,"".concat(e,".props"),{}),a=arguments.length,l=new Array(a>2?a-2:0),c=2;c<a;c++)l[c-2]=arguments[c];return n.apply(void 0,[function(e,t){var n=We(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:We(t,"".concat(e,".component"),e):e}(e,t.overrides),o({},r,i,{className:Ge(null==r?void 0:r.className,i.className)||void 0})].concat(l))}function F(e){var n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===P.test(e));for(var r=he(de(n?e:"".concat(e.trimEnd().replace(ie,""),"\n\n"),{o:n}));"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===t.wrapper)return r;var o,l=t.wrapper||(n?"span":"div");if(r.length>1||t.forceWrapper)o=r;else{if(1===r.length)return"string"==typeof(o=r[0])?a("span",{key:"outer"},o):o;o=null}return i.createElement(l,{key:"outer"},o)}function q(e){var t=e.match(s);return t?t.reduce((function(e,t,n){var r,o=t.indexOf("=");if(-1!==o){var a=(r=t.slice(0,o),-1!==r.indexOf("-")&&null===r.match(L)&&(r=r.replace(z,(function(e,t){return t.toUpperCase()}))),r).trim(),c=function(e){var t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(o+1).trim()),u=l[a]||a,s=e[u]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ie(t):(t.match(R)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(a,c);"string"==typeof s&&(A.test(s)||O.test(s))&&(e[u]=i.cloneElement(F(s.trim()),{key:n}))}else"style"!==t&&(e[l[t]||t]=!0);return e}),{}):void 0}var Q=[],Y={},J={blockQuote:{i:we(d),l:He.HIGH,_:function(e,t,n){return{content:t(e[0].replace(g,""),n)}},p:function(e,t,n){return a("blockquote",{key:n.g},t(e.content,n))}},breakLine:{i:Se(v),l:He.HIGH,_:Re,p:function(e,t,n){return a("br",{key:n.g})}},breakThematic:{i:we(h),l:He.HIGH,_:Re,p:function(e,t,n){return a("hr",{key:n.g})}},codeBlock:{i:we(y),l:He.MAX,_:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},p:function(e,t,n){return a("pre",{key:n.g},a("code",{className:e.lang?"lang-".concat(e.lang):""},e.content))}},codeFenced:{i:we(m),l:He.MAX,_:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{i:be(x),l:He.LOW,_:function(e){return{content:e[2]}},p:function(e,t,n){return a("code",{key:n.g},e.content)}},footnote:{i:we(w),l:He.MAX,_:function(e){return Q.push({footnote:e[2],identifier:e[1]}),{}},p:Ee},footnoteReference:{i:ke(S),l:He.HIGH,_:function(e){return{content:e[1],target:"#".concat(t.slugify(e[1]))}},p:function(e,t,n){return a("a",{key:n.g,href:Ie(e.target)},a("sup",{key:n.g},e.content))}},gfmTask:{i:ke(I),l:He.HIGH,_:function(e){return{completed:"x"===e[1].toLowerCase()}},p:function(e,t,n){return a("input",{checked:e.completed,key:n.g,readOnly:!0,type:"checkbox"})}},heading:{i:we(M),l:He.HIGH,_:function(e,n,r){return{content:_e(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},p:function(e,t,n){return e.tag="h".concat(e.level),a(e.tag,{id:e.id,key:n.g},t(e.content,n))}},headingSetext:{i:we(_),l:He.MAX,_:function(e,t,n){return{content:_e(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{i:Se(H),l:He.HIGH,_:function(){return{}},p:Ee},image:{i:be(pe),l:He.HIGH,_:function(e){return{alt:e[1],target:Me(e[2]),title:e[3]}},p:function(e,t,n){return a("img",{key:n.g,alt:e.alt||void 0,title:e.title||void 0,src:Ie(e.target)})}},link:{i:ke(fe),l:He.LOW,_:function(e,t,n){return{content:Ae(t,e[1],n),target:Me(e[2]),title:e[3]}},p:function(e,t,n){return a("a",{key:n.g,href:Ie(e.target),title:e.title},t(e.content,n))}},linkAngleBraceStyleDetector:{i:ke(W),l:He.MAX,_:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{i:function(e,t){return t.m?null:ke(E)(e,t)},l:He.MAX,_:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{i:ke(G),l:He.MAX,_:function(e){var t=e[1],n=e[1];return f.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{i:function(e,t,n){var r=$.exec(n);return!r||!t.h&&t.o?null:ue.exec(e=r[1]+e)},l:He.HIGH,_:function(e,t,n){var r=e[2],i=r.length>1,o=i?+r:void 0,a=e[0].replace(p,"\n").match(ce),l=!1;return{items:a.map((function(e,r){var i=le.exec(e)[0].length,o=new RegExp("^ {1,"+i+"}","gm"),c=e.replace(o,"").replace(le,""),u=r===a.length-1,s=-1!==c.indexOf("\n\n")||u&&l;l=s;var f,p=n.o,d=n.h;n.h=!0,s?(n.o=!1,f=c.replace(T,"\n\n")):(n.o=!0,f=c.replace(T,""));var g=t(f,n);return n.o=p,n.h=d,g})),ordered:i,start:o}},p:function(e,t,n){return a(e.ordered?"ol":"ul",{key:n.g,start:e.start},e.items.map((function(e,r){return a("li",{key:r},t(e,n))})))}},newlineCoalescer:{i:we(k),l:He.LOW,_:Re,p:function(){return"\n"}},paragraph:{i:Ce,l:He.LOW,_:Oe,p:function(e,t,n){return a("p",{key:n.g},t(e.content,n))}},ref:{i:ke(B),l:He.MAX,_:function(e){return Y[e[1]]={target:e[2],title:e[4]},{}},p:Ee},refImage:{i:be(D),l:He.MAX,_:function(e){return{alt:e[1]||void 0,ref:e[2]}},p:function(e,t,n){return a("img",{key:n.g,alt:e.alt,src:Ie(Y[e.ref].target),title:Y[e.ref].title})}},refLink:{i:ke(X),l:He.MAX,_:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(j,"\\$1"),n),ref:e[2]}},p:function(e,t,n){return Y[e.ref]?a("a",{key:n.g,href:Ie(Y[e.ref].target),title:Y[e.ref].title},t(e.content,n)):a("span",{key:n.g},t(e.fallbackContent,n))}},table:{i:we(N),l:He.HIGH,_:ye,p:function(e,t,n){return a("table",{key:n.g},a("thead",null,a("tr",null,e.header.map((function(r,i){return a("th",{key:i,style:xe(e,i)},t(r,n))})))),a("tbody",null,e.cells.map((function(r,i){return a("tr",{key:i},r.map((function(r,i){return a("td",{key:i,style:xe(e,i)},t(r,n))})))}))))}},tableSeparator:{i:function(e,t){return t.t?V.exec(e):null},l:He.HIGH,_:function(){return{type:"tableSeparator"}},p:function(){return" | "}},text:{i:Se(re),l:He.MIN,_:function(e){return{content:e[0].replace(Z,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},p:function(e){return e.content}},textBolded:{i:be(K),l:He.MED,_:function(e,t,n){return{content:t(e[2],n)}},p:function(e,t,n){return a("strong",{key:n.g},t(e.content,n))}},textEmphasized:{i:be(ee),l:He.LOW,_:function(e,t,n){return{content:t(e[2],n)}},p:function(e,t,n){return a("em",{key:n.g},t(e.content,n))}},textEscaped:{i:be(ne),l:He.HIGH,_:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{i:be(te),l:He.LOW,_:Oe,p:function(e,t,n){return a("del",{key:n.g},t(e.content,n))}}};!0!==t.disableParsingRawHTML&&(J.htmlBlock={i:Se(A),l:He.HIGH,_:function(e,t,n){var i,o=e[3].match(oe),a=(0,r.Z)(o,2)[1],l=new RegExp("^".concat(a),"gm"),c=e[3].replace(l,""),s=(i=c,ge.some((function(e){return e.test(i)}))?Ze:_e),f=e[1].toLowerCase(),p=-1!==u.indexOf(f);n.m=n.m||"a"===f;var d=p?e[3]:s(t,c,n);return n.m=!1,{attrs:q(e[2]),content:d,noInnerParse:p,tag:p?f:e[1]}},p:function(e,t,n){return a(e.tag,o({key:n.g},e.attrs),e.noInnerParse?e.content:t(e.content,n))}},J.htmlSelfClosing={i:Se(O),l:He.HIGH,_:function(e){return{attrs:q(e[2]||""),tag:e[1]}},p:function(e,t,n){return a(e.tag,o({},e.attrs,{key:n.g}))}});var ae,se,de=function(e){var t=Object.keys(e);function n(r,i){for(var o=[],a="";r;)for(var l=0;l<t.length;){var c=t[l],u=e[c],s=u.i(r,i,a);if(s){var f=s[0];r=r.substring(f.length);var p=u._(s,n,i);null==p.type&&(p.type=c),o.push(p),a=f;break}l++}return o}return t.sort((function(t,n){var r=e[t].l,i=e[n].l;return r!==i?r-i:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(b,"\n").replace(C,"").replace(U,"    ")}(e),t)}}(J),he=(ae=J,se=function(e,t,n){return ae[e.type].p(e,t,n)},function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(t)){for(var r=n.g,i=[],o=!1,a=0;a<t.length;a++){n.g=a;var l=e(t[a],n),c="string"==typeof l;c&&o?i[i.length-1]+=l:null!==l&&i.push(l),o=c}return n.g=r,i}return se(t,e,n)}),me=F(e);return Q.length?a("div",null,me,a("footer",{key:"footer"},Q.map((function(e){return a("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,he(de(e.footnote,{o:!0})))})))):me}(Le=He||(He={}))[Le.MAX=0]="MAX",Le[Le.HIGH=1]="HIGH",Le[Le.MED=2]="MED",Le[Le.LOW=3]="LOW",Le[Le.MIN=4]="MIN",t.Z=function(e){var t=e.children,n=e.options,r=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(e,a);return i.cloneElement(Te(t,n),r)}}}]);
//# sourceMappingURL=899.2aa59cbe.chunk.js.map