/*! For license information please see 75f2a265e551a99f639361285889ae7aa39be9c5-b157dfdb1c164a2b78f2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+dU1":function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t("q1tI"),o=t.n(n),r=t("TSYQ"),l=t.n(r),c=t("r5Q1"),u=t.n(c),i=function(e){var a,t=e.label,r=e.id,c=e.options,i=e.onChange,d=e.selectedOption,m=e.className,s=void 0===m?"":m,V=Object(n.useState)(!1),p=V[0],f=V[1],A="dropdown-"+r;return Object(n.useEffect)((function(){var e=function(e){var a=document.getElementById(A);(null==a?void 0:a.contains(e.target))||f(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[f]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l()(u.a.dropdownContainer,(a={},a[u.a.dropdownOpen]=p,a),s),id:A},o.a.createElement("div",{className:u.a.dropdownToggle,onClick:function(){return f(!p)}},o.a.createElement("div",{className:u.a.dropdownMenuLabel},t),o.a.createElement("div",null,d.label)),o.a.createElement("div",{className:u.a.dropdownMenu,onBlur:function(){return f(!1)}},o.a.createElement("ul",{className:u.a.dropdownMenuContent},c.map((function(e){return o.a.createElement("li",{key:e.value,onClick:function(){i(e.value),f(!1)},className:u.a.dropdownMenuItem,value:e.value},e.label)}))))))},d=t("j/Ep"),m=t("8CeC"),s=t("agw3"),V=t("vd24"),p=t.n(V),f=function(e){var a=e.hasDifficultySetting,t=e.hasSizeSetting,n=Object(s.a)(),r=n.size,l=n.difficulty,c=n.changeBoard,u=n.changeDifficulty,V=Object(m.a)(),f=V.phase,A=V.initializeBoard,v=[{value:d.b.easy,label:"Easy"},{value:d.b.normal,label:"Normal"},{value:d.b.hard,label:"Hard"}],b=[{value:""+d.a.small,label:"4x4"},{value:""+d.a.medium,label:"5x5"},{value:""+d.a.big,label:"6x6"}];return o.a.createElement("div",{className:p.a.settings},Boolean(t)&&o.a.createElement(i,{label:"Board size",className:p.a.customDropdown,id:"board-size",options:b,selectedOption:b.find((function(e){return e.value===r.toString()})),onChange:function(e){var a=parseInt(e,10);c(a),f!==d.c.gameEnd&&A(a)}}),Boolean(a)&&o.a.createElement(i,{label:"Difficulty",id:"difficulty",selectedOption:v.find((function(e){return e.value===l})),options:v,onChange:function(e){u(e),f!==d.c.gameEnd&&A(r)}}))}},"4XLq":function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t("q1tI"),o=t.n(n),r=t("Wbzz"),l=t("rCLJ"),c=t("yxp9"),u=t.n(c),i=t("uC36"),d=t("eWwy"),m=t.n(d),s=function(e){var a=e.game,t=Object(n.useState)(!0),c=t[0],d=t[1],s=i.a[a];return o.a.createElement("div",{className:m.a.top},o.a.createElement("div",{className:m.a.header},o.a.createElement("h1",{className:m.a.title},s.title),o.a.createElement("span",{className:m.a.sound,onClick:function(){d(!c);var e=document.getElementById("ost");c?e.play():e.pause()}},c?o.a.createElement(l.a,{size:32}):o.a.createElement(l.b,{size:32}))),o.a.createElement("audio",{id:"ost",loop:!0,src:u.a}),o.a.createElement("div",{className:m.a.nav},s.routes.map((function(e){return o.a.createElement(r.Link,{key:e.route,className:m.a.tab,activeClassName:m.a.active,to:e.route},e.label)}))))},V=t("9kNL"),p=t.n(V),f=function(e){var a=e.children,t=e.game;return o.a.createElement("div",{className:p.a.container},o.a.createElement(s,{game:t}),o.a.createElement("div",{className:p.a.content},a))}},"8CeC":function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("/MKj"),o=t("No7A"),r=function(){var e=Object(n.useDispatch)();return{phase:Object(n.useSelector)((function(e){return e.game.phase})),pieces:Object(n.useSelector)((function(e){return e.game.pieces})),removePieces:function(){e(Object(o.f)())},markPiece:function(a){e(Object(o.e)(a))},clearBoard:function(){e(Object(o.c)())},initializeBoard:function(a){e(Object(o.d)(a))}}}},"9kNL":function(e,a,t){e.exports={container:"Layout-module--container--j7Jey",content:"Layout-module--content--2aW9H"}},CpIh:function(e,a,t){e.exports=t.p+"static/playthrough-f6438af940546a3d46285fbf5c5de4d6.gif"},Lnxd:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),o=t.n(n),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.a.createContext&&o.a.createContext(r),c=function(){return(c=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var o in a=arguments[t])Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);return e}).apply(this,arguments)},u=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t};function i(e){return function(a){return o.a.createElement(d,c({attr:c({},e.attr)},a),function e(a){return a&&a.map((function(a,t){return o.a.createElement(a.tag,c({key:t},a.attr),e(a.child))}))}(e.child))}}function d(e){var a=function(a){var t,n=e.attr,r=e.size,l=e.title,i=u(e,["attr","size","title"]),d=r||a.size||"1em";return a.className&&(t=a.className),e.className&&(t=(t?t+" ":"")+e.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,n,i,{className:t,style:c(c({color:e.color||a.color},a.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&o.a.createElement("title",null,l),e.children)};return void 0!==l?o.a.createElement(l.Consumer,null,(function(e){return a(e)})):a(r)}},No7A:function(e,a,t){"use strict";t.d(a,"d",(function(){return l})),t.d(a,"c",(function(){return c})),t.d(a,"e",(function(){return u})),t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return d})),t.d(a,"f",(function(){return m}));var n=t("j/Ep"),o=t("5qFX"),r=t("xflN"),l=function(e){var a=new Array(e*e).fill(0,0,e*e).map((function(e){return Math.random()})),t=Object(o.a)(a,e),l=[n.c.player1Turn,n.c.player2Turn],c=l[Math.floor(Math.random()*l.length)];return{type:r.f,payload:{phase:c,pieces:t.pieces,allMarbles:t.initialMarbles}}},c=function(){return{type:r.c}},u=function(e){return{type:r.e,payload:{cell:e}}},i=function(e){return{type:r.d,payload:{size:e}}},d=function(e){return{type:r.d,payload:{difficulty:e}}},m=function(){return{type:r.a}}},SL6I:function(e,a,t){e.exports={button:"Button-module--button--3lPXX",animate1:"Button-module--animate1--2fRxM",animate2:"Button-module--animate2--FE7-H",animate3:"Button-module--animate3--3d0f0",animate4:"Button-module--animate4--2U4sP"}},TSYQ:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var c in n)t.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(a,[]))||(e.exports=n)}()},Tz5b:function(e,a){e.exports="data:audio/mpeg;base64,SUQzBAAAAAAAVlREUkMAAAAMAAADMTk5Ni0wMi0wNwBUWFhYAAAAEwAAA0lFTkcAQmlsbCBXb2xmb3JkAFRTU0UAAAAPAAADTGF2ZjU3LjM2LjEwMAAAAAAAAAAAAAAA//NwAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAD+QBiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmKWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/////////////////////////////////8AAAAATGF2YzU3LjM5AAAAAAAAAAAAAAAAJAAAAAAAAAAAA/kUVf8HAAAAAAD/84BkAAx9CV0ooIgADPAC4l1BEAK6O2VIwAN5AwDHG+Ab/H6nPzn/QhCEIT/7nOc5z/+chCEIRpyEIQhCN/kIBgYGBgZzoQDAwMDAwMW6BwMDAwMDB8uD4Pv9QJh/g+D5/8H3xACYPg+H1A+D4Pg//4nB8H6wfB8/JJLLbro0yh+IAQBMH3xAH4f5cH+D7/KA+/BM+p3ggCb1AgGPBP8HwfNec//Lh///+D4fcpucuYmJh1ZkZePQHBZhAj84w+NrhFqBgCQYA7bpRjGLQfuW//OCZCMM2U+FjswoAxdTVvsdjFAH2J4CYfiIc0xBuQGmkW12NGRDUisqFDFECRCKArfOPUwoaaKyxVO//1Jc1Djm/p/6EWRKx3+d///8iV87ocdOJv///FWBomHh4l1AEQN/AEAhBAOQlTPanB4y52ADw/VrBYVicMpMc581Tv1MfR/mOREyXqa50xrtQ8i//zlT0N///NQ02aayt////9Geq9DWOIR6U/////zTW/Ueso9Y6paIZhoSCwAC0JgACAANBaKYoY0xUjqOSIcTXjj/84JkGw6hlzctyLQAEttaul+BKALDmBUzFl8L0NIGQtEy4ckcoXV/8YUKIdgcQjmSSq+YjhPGw9Uj+vX/mpPJY8Sx8eqBdr1//xPh5ksgSSJiUTVJc5////j2SRkkbssuoqSfV/////tUiZPKpiKAYDgUDgQDAYCAQCAQAP1+/N/mDpv1ZTf7lKEhb/xERDrOML//lRKaL//+xwGFjK1RXT////MEgYRQWytM6V/////9VZVKIrRTCRVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVf/zgmQWAAABpADgAAAAAANIAcAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"},U5E3:function(e,a,t){e.exports={buttonNew:"Buttons-module--buttonNew--2KPcq"}},U7va:function(e,a,t){e.exports=t.p+"static/win-ab3cb11060eac248dbe89b7950a005dc.mp3"},UE3f:function(e,a,t){e.exports={preloadImage1:"Board-module--preloadImage1--19Qjf",preloadImage2:"Board-module--preloadImage2--lFZpT",stage:"Board-module--stage--1qRCh",gameArea:"Board-module--gameArea--2JpI2",board:"Board-module--board--4t-NE",gameAreaSmall:"Board-module--gameAreaSmall--3ihl8",gameAreaRest:"Board-module--gameAreaRest--_upUo",p1:"Board-module--p1--214Ot",p2:"Board-module--p2--OWkJj",block:"Board-module--block--31UXZ",blockSmall:"Board-module--blockSmall--3kUxT",blockNormal:"Board-module--blockNormal--3Qm9M",blockBig:"Board-module--blockBig--1j0VP",piece:"Board-module--piece--p-9hQ",obstacle:"Board-module--obstacle--iAPXD",selectedPlayer1:"Board-module--selectedPlayer1--2lVCq",selectedPlayer2:"Board-module--selectedPlayer2--bzg3m",empty:"Board-module--empty--1wnUx",tutorial:"Board-module--tutorial--3fm-b"}},XdKK:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t("q1tI"),o=t.n(n),r=t("TSYQ"),l=t.n(r),c=t("SL6I"),u=t.n(c),i=function(e){var a=e.label,t=(e.id,e.onClick),n=e.className,r=void 0===n?"":n;return o.a.createElement("div",{className:l()(u.a.button,r),onClick:t},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),a)},d=t("j/Ep"),m=t("8CeC"),s=t("agw3"),V=t("U5E3"),p=t.n(V),f=function(){var e=Object(s.a)().size,a=Object(m.a)(),t=a.phase,n=a.initializeBoard,r=a.clearBoard;return o.a.createElement("div",null,t!==d.c.gameEnd&&o.a.createElement(i,{label:"Quit",onClick:function(){r()}}),o.a.createElement(i,{label:"New game",className:p.a.buttonNew,onClick:function(){n(e)}}))}},XmWl:function(e,a,t){e.exports={gameInfo:"GameInfo-module--gameInfo--3NxRb",playerInfo:"GameInfo-module--playerInfo--2u7Xf",p1:"GameInfo-module--p1--we2gx",p2:"GameInfo-module--p2--WSaKE"}},agw3:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("/MKj"),o=t("No7A"),r=function(){var e=Object(n.useDispatch)();return{size:Object(n.useSelector)((function(e){return e.game.options.size})),difficulty:Object(n.useSelector)((function(e){return e.game.options.difficulty})),changeBoard:function(a){e(Object(o.a)(a))},changeDifficulty:function(a){e(Object(o.b)(a))}}}},eWwy:function(e,a,t){e.exports={top:"Header-module--top--8yFkq",header:"Header-module--header--1rl48",sound:"Header-module--sound--23dFt",title:"Header-module--title--10s7Z",nav:"Header-module--nav--1H61L",tab:"Header-module--tab--2YSrf",active:"Header-module--active--3R6RC"}},jj42:function(e,a,t){"use strict";t.d(a,"a",(function(){return w}));var n=t("TSYQ"),o=t.n(n),r=t("q1tI"),l=t.n(r),c=t("Tz5b"),u=t.n(c),i=t("CpIh"),d=t.n(i),m=t("U7va"),s=t.n(m),V=t("j/Ep"),p=t("8CeC"),f=t("agw3"),A=t("XmWl"),v=t.n(A),b=function(e){var a,t,n=e.vsComp,r=Object(p.a)().phase,c=(a={},a[V.c.player1Turn]=n?"Your turn":"Player 1 turn",a[V.c.player2Turn]="Player 2 turn",a[V.c.computerTurn]="Computer turn",a[V.c.player1Wins]=(n?"You win":"Player 1 wins")+"!",a[V.c.player2Wins]=(n?"Computer":"Player 2")+" wins!",a)[r]||"",u=r===V.c.player1Turn||r===V.c.player1Wins;return l.a.createElement("div",{className:v.a.gameInfo},r!==V.c.gameEnd&&l.a.createElement("div",{className:o()(v.a.playerInfo,(t={},t[v.a.p1]=u,t[v.a.p2]=!u,t)),id:"game-info"},c))},y=t("UE3f"),g=t.n(y),E=function(e){e.pause(),e.currentTime=0,e.play()},w=function(e){var a,t,n=e.handleBothPlayers,c=Object(r.useState)(!1),i=c[0],m=c[1],A=Object(p.a)(),v=A.phase,y=A.pieces,w=A.removePieces,h=A.markPiece,B=Object(f.a)().size,N=function(){m(!1),w()},j=function(e,a,t,o){(n||v===V.c.player1Turn)&&a.type===V.e.piece&&(m(!0),e.preventDefault(),E(document.getElementById("clickSound")),h(t*B+o))};return l.a.createElement("div",{className:g.a.stage},l.a.createElement("div",{className:g.a.preloadImage1}),l.a.createElement("div",{className:g.a.preloadImage2}),l.a.createElement("audio",{id:"clickSound",src:u.a}),l.a.createElement("audio",{id:"winSound",src:s.a}),v===V.c.gameEnd?l.a.createElement("img",{className:g.a.tutorial,alt:"Game Tutorial",src:d.a}):l.a.createElement("div",{className:o()(g.a.gameArea,(a={},a[g.a.gameAreaSmall]=B===V.a.small,a[g.a.gameAreaRest]=B!==V.a.small,a))},l.a.createElement(b,{vsComp:!n}),l.a.createElement("table",{className:o()(g.a.board,g.a.p1,(t={},t[g.a.p1]=V.c.player1Turn===v||V.c.player1Wins===v,t[g.a.p2]=V.c.player1Turn!==v&&V.c.player1Wins!==v,t)),onMouseUp:function(){return N()},onTouchEnd:function(){return N()}},l.a.createElement("tbody",null,y.slice(0,B).map((function(e,a){return l.a.createElement("tr",{key:a},y.slice(a*B,a*B+B).map((function(e,t){return l.a.createElement("td",{className:o()(g.a.block,(c=e.type,(u={},u[V.e.obstacle]=g.a.obstacle,u[V.e.empty]=g.a.empty,u[V.e.piece]=g.a.piece,u[V.e.selected]=v===V.c.player1Turn?g.a.selectedPlayer1:g.a.selectedPlayer2,u)[c]),(r={},r[V.a.small]=g.a.blockSmall,r[V.a.medium]=g.a.blockNormal,r[V.a.big]=g.a.blockBig,r)[B]),id:e.type+"-"+a+"-"+t,key:a+"-"+t,onMouseDown:function(n){return j(n,e,a,t)},onTouchStart:function(n){return j(n,e,a,t)},onMouseOver:function(){return function(e,a,t){(n||v===V.c.player1Turn)&&i&&e.type===V.e.piece&&(E(document.getElementById("clickSound")),h(a*B+t))}(e,a,t)},onTouchMove:function(e){return function(e){var a,t=e.touches[0],o=null===(a=document.elementFromPoint(t.clientX,t.clientY))||void 0===a?void 0:a.id,r=(null==o?void 0:o.split("-"))||[],l=r[0],c=r[1],u=r[2];(n||v===V.c.player1Turn)&&i&&l===V.e.piece&&(E(document.getElementById("clickSound")),h(parseInt(c,10)*B+parseInt(u,10)))}(e)}});var r,c,u})))}))))))}},r5Q1:function(e,a,t){e.exports={dropdownContainer:"Dropdown-module--dropdown-container--3cArm",dropdownToggle:"Dropdown-module--dropdown-toggle--2Jwc9",dropdownMenu:"Dropdown-module--dropdown-menu--37o-7",dropdownMenuContent:"Dropdown-module--dropdown-menu-content--1ulcq",dropdownMenuLabel:"Dropdown-module--dropdown-menu-label--AIzo0",dropdownMenuItem:"Dropdown-module--dropdown-menu-item--192E7",dropdownOpen:"Dropdown-module--dropdown-open--3-1QB"}},uC36:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n,o=((n={})[t("j/Ep").d.randix]={title:"Randix",routes:[{route:"/randix/",label:"Home"},{route:"/randix/vs-player/",label:"vs Player"},{route:"/randix/vs-computer/",label:"vs Cp"}]},n)},vd24:function(e,a,t){e.exports={settings:"Settings-module--settings--3ThMv",label:"Settings-module--label--1TUCt",customDropdown:"Settings-module--customDropdown--2GisM"}},wm3r:function(e,a,t){e.exports={content:"Page-module--content--1OpUk",gitLink:"Page-module--gitLink--2hrpM",wrapper:"Page-module--wrapper--2dZoo",vscomp:"Page-module--vscomp--3LZ4B",card:"Page-module--card--aWZnI",container:"Page-module--container--3d82p"}},yxp9:function(e,a,t){e.exports=t.p+"static/Wallpaper-e63e046a58bdc1f0a28e56777708e45d.mp3"}}]);
//# sourceMappingURL=75f2a265e551a99f639361285889ae7aa39be9c5-b157dfdb1c164a2b78f2.js.map