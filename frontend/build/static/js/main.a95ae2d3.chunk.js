(this["webpackJsonpcapstone-project"]=this["webpackJsonpcapstone-project"]||[]).push([[0],{71:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=n.n(i),o=n(14),c=n.n(o),s=n(15),l=n(6),d=n(2),u=n(3),g=n.p+"static/media/wandergold.f5f9ae6c.svg";function p(e){var t=e.goBackFunction,n=e.redirectToPath,i=Object(u.g)(),a="/"===n?"Zum Start":"Zu den Ergebnissen";return Object(r.jsx)(b,{children:Object(r.jsxs)("h1",{children:[Object(r.jsx)("button",{onClick:function(){return t({}),void i.push(n)},children:Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13.503",height:"23.619",viewBox:"0 0 13.503 23.619",children:[Object(r.jsx)("title",{children:a}),Object(r.jsx)("path",{d:"M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z",transform:"translate(-11.251 -6.194)"})]})}),Object(r.jsx)("img",{src:g,alt:"wandergold"})]})})}var b=d.b.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1uw4t5o-0"})(["width:100%;height:46px;position:absolute;top:0;left:0;box-shadow:0 1px 4px 0 var(--bar-shadow);background:#fff;z-index:200;display:grid;place-items:center;h1{font-size:1em;line-height:1;margin:0;margin-top:3px;}img{height:30px;}button{position:absolute;left:10px;top:0;display:grid;height:100%;width:40px;place-items:center left;padding:0;border:0;color:var(--primary-color);font-size:0.8em;background:none;svg{height:35%;fill:var(--primary-color);}}"]);function h(e){var t=e.setStateFunction,n=e.isInvertMode,i=e.size,a=void 0===i?"40":i,o=n?"var(--text-invert-color)":"var(--primary-color)";return Object(r.jsx)(j,{type:"button",onClick:function(){return t(!1)},children:Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 29.25 29.25",children:[Object(r.jsx)("title",{children:"Schlie\xdfen"}),Object(r.jsxs)("g",{transform:"translate(-3.375 -3.375)",children:[Object(r.jsx)("path",{d:"M23.295,21.705,19.589,18l3.705-3.705a1.124,1.124,0,0,0-1.589-1.589L18,16.411l-3.705-3.705a1.124,1.124,0,0,0-1.589,1.589L16.411,18l-3.705,3.705a1.086,1.086,0,0,0,0,1.589,1.116,1.116,0,0,0,1.589,0L18,19.589l3.705,3.705a1.129,1.129,0,0,0,1.589,0A1.116,1.116,0,0,0,23.295,21.705Z",fill:o}),Object(r.jsx)("path",{d:"M18,5.344A12.651,12.651,0,1,1,9.049,9.049,12.573,12.573,0,0,1,18,5.344m0-1.969A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Z",fill:o})]})]})})}var j=d.b.button.withConfig({displayName:"CloseButton__CloseButtonStyled",componentId:"sc-17q5feg-0"})(["position:absolute;right:10px;top:16px;border:none;background:none;z-index:100;"]),f=n(13),m=n.p+"static/media/marker.97b64481.svg",x=n.p+"static/media/mylocation.45b3fdf8.svg";function O(e){var t=e.centerCoords,n=e.handleCenterChanged,a=e.tracks,o=e.singleMode,c=e.kmlFile,s=e.firstLon,l=e.firstLat,d={width:"100%",height:o?"100vh":"50vh"},u=Object(i.useRef)(),g=Object(f.d)({googleMapsApiKey:"AIzaSyAp7ego-IVWFOjZab49BQ6KF4XjI6b-3QA"}).isLoaded,p=Object(r.jsxs)(f.a,{ref:u,onLoad:function(e){return u.current=e},mapContainerStyle:d,center:t,zoom:10,options:{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,clickable:!0,draggable:!0,editable:!0,visible:!0,radius:3e4,streetViewControl:!1,fullscreenControl:!1,mapTypeControl:!1,mapTypeId:"terrain",zIndex:1},onDragEnd:function(){var e=u.current.getCenter().toJSON(),t=e.lat,r=e.lng;!o&&n({lat:+t,lng:+r})},disableDefaultUI:!0,children:[o&&c&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f.b,{url:"https://wagobe.alexjonas.de/static/kml/"+c}),Object(r.jsx)(f.c,{position:{lat:+l,lng:+s},icon:m})]}),!o&&a.map((function(e,t){var n=e.firstLat,i=e.firstLon;return Object(r.jsx)(f.c,{position:{lat:+n,lng:+i},icon:m},t)})),Object(r.jsx)(f.c,{position:t,icon:x})]});return g?p:null}var v=d.b.div.withConfig({displayName:"ResultGrid",componentId:"sc-1mndq6j-0"})(["display:grid;align-content:start;gap:20px;background:var(--result-background);padding:10px;padding-top:20px;"]),k=d.b.div.withConfig({displayName:"SlideInMenuDefault",componentId:"sc-1n9c8x8-0"})(["background:linear-gradient( 180deg,rgba(66,99,26,1) 0%,rgba(62,97,19,1) 100% );height:100vh;width:100%;top:0;z-index:300;position:absolute;font-size:1em;color:#eee;transition:right 0.2s ease-out;"]),w=n(22),y=n.p+"static/media/premium.7c64958b.svg";function C(e){return["leicht","mittel","hoch"][e-1]}function S(e){var t=new Date(e);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()}function I(e){var t=e.minutes,n=e.length,r=(t||Math.round(n*(2/75)))/60,i=Math.floor(r),a=r-i,o=Math.round(60*a);return i+(o&&":"+((o<10&&"0")+o))}var N=d.b.button.withConfig({displayName:"ButtonDefault",componentId:"sc-13l3zno-0"})(["width:100%;height:40px;background-color:var(--primary-color);border:0;box-shadow:0 1px 4px 0 var(--button-shadow);color:var(--text-invert-color);font-size:1em;letter-spacing:0.1em;&:active{background-color:var(--primary-color-active);}strong{padding-left:25px;}"]);function z(e){var t=e.active;return Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28.74",height:"27.938",viewBox:"0 0 28.74 27.938",children:[Object(r.jsxs)("title",{children:["Bookmark ",t?"entfernen":"setzen"]}),Object(r.jsxs)("g",{transform:"translate(-2.13 -2.472)",opacity:t?"0.9":"0.6",children:[Object(r.jsx)("path",{d:"M24.116,29.91a1.489,1.489,0,0,1-.692-.173l-5.773-3a2.5,2.5,0,0,0-2.3,0l-5.773,3a1.489,1.489,0,0,1-.692.173,1.532,1.532,0,0,1-1.146-.535,1.469,1.469,0,0,1-.336-1.2l1.029-6.634a2.511,2.511,0,0,0-.685-2.133L3.061,14.631A1.5,1.5,0,0,1,3.892,12.1l6.478-1.048A2.506,2.506,0,0,0,12.208,9.7l2.95-5.9a1.5,1.5,0,0,1,2.683,0l2.95,5.9a2.506,2.506,0,0,0,1.837,1.35L29.108,12.1a1.5,1.5,0,0,1,.832,2.531l-4.685,4.778a2.511,2.511,0,0,0-.685,2.133L25.6,28.176a1.469,1.469,0,0,1-.336,1.2A1.532,1.532,0,0,1,24.116,29.91Z",fill:t?"#edc003":"#fcfcfc"}),Object(r.jsx)("path",{d:"M16.5,3.472a.982.982,0,0,0-.894.553l-2.95,5.9a3.007,3.007,0,0,1-2.2,1.62L3.972,12.594a1,1,0,0,0-.554,1.687L8.1,19.059a3.014,3.014,0,0,1,.822,2.56L7.9,28.253a.963.963,0,0,0,.221.8,1.026,1.026,0,0,0,.766.36.994.994,0,0,0,.461-.117l5.773-3a3,3,0,0,1,2.765,0l5.773,3a.994.994,0,0,0,.461.117,1.026,1.026,0,0,0,.766-.36.963.963,0,0,0,.221-.8l-1.029-6.634a3.014,3.014,0,0,1,.822-2.56l4.685-4.778a1,1,0,0,0-.554-1.687l-6.478-1.048a3.007,3.007,0,0,1-2.2-1.62l-2.95-5.9a.982.982,0,0,0-.894-.553m0-1a1.977,1.977,0,0,1,1.789,1.106l2.95,5.9a2,2,0,0,0,1.47,1.08l6.478,1.048A2,2,0,0,1,30.3,14.981l-4.685,4.778a2,2,0,0,0-.548,1.707L26.092,28.1a1.995,1.995,0,0,1-2.9,2.082l-5.773-3a2,2,0,0,0-1.843,0l-5.773,3a1.995,1.995,0,0,1-2.9-2.082l1.029-6.633a2,2,0,0,0-.548-1.707L2.7,14.981a2,2,0,0,1,1.109-3.374l6.478-1.048a2,2,0,0,0,1.47-1.08l2.95-5.9A1.977,1.977,0,0,1,16.5,2.472Z",fill:"#fcfcfc"})]})]})}function M(e){var t=e-1,n=["Wald","Wiesen","Historisch interessant","Einkehren","Stadt","H\xfcgelig","Alpin","Seen/Fl\xfcsse","Meer"];return isNaN(t)||t<0||t>n.length-1?null:n[t]}function _(e){var t=e.tagIds;return Object(r.jsx)(F,{children:Array.isArray(t)?t.sort((function(){return Math.random()-.5})).map((function(e){return Object(r.jsx)("span",{className:"tourtag",children:M(e)},e)})):"-"})}var F=d.b.div.withConfig({displayName:"TourTags__Wrapper",componentId:"sc-2gnxr6-0"})(["margin-top:10px;span.tourtag{font-size:0.9em;margin-right:5px;margin-bottom:4px;background-color:var(--tag-background);border-radius:var(--default-border-radius);padding:8px;display:inline-block;white-space:nowrap;letter-spacing:1px;}"]);function L(e){var t=e.surfaceValues,n=t.reduce((function(e,t){return e+t})),i=t.map((function(e){return Math.round(e/n*100)})),a=[{title:"Naturweg",percentage:i[0]+"%",color:"#71955d"},{title:"Leicht befestigt",percentage:i[1]+"%",color:"#b4cfb6"},{title:"Asphalt",percentage:i[2]+"%",color:"#737373"}];return Object(r.jsxs)(A,{children:[Object(r.jsx)("div",{className:"waytypes",children:a.map((function(e,t){var n=e.percentage,i=e.color;return Object(r.jsx)("div",{style:{width:n,backgroundColor:i}},t)}))}),Object(r.jsx)("ul",{className:"waytypes_legend",children:a.map((function(e,t){var n=e.title,i=e.color,a=e.percentage;return Object(r.jsxs)("li",{children:[Object(r.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(r.jsx)("path",{fill:i,d:"M8 4a4 4 0 100 8 4 4 0 000-8z"})}),Object(r.jsx)("br",{}),n," ",Object(r.jsx)("br",{}),a]},t)}))})]})}var A=d.b.div.withConfig({displayName:"WayTypesBar__Wrapper",componentId:"kzcthq-0"})(["overflow-x:scroll;margin-top:7px;div.waytypes{display:flex;height:10px;width:100%;}ul.waytypes_legend{display:flex;justify-content:space-around;font-size:0.9em;grid-gap:0;text-align:center;}"]);function B(e){var t=e.track,n=e.handleClick,i=e.detailedMode,a=e.setIsDetailMapActive,o=e.bookmarks,c=e.setBookmarks,s=t.id,l=t.difficulty,d=t.title,u=t.distance,g=t.lengthM,p=t.certYear,b=t.durationMin,h=t.description,j=t.tags,f=t.dateCreated,m=t.surface,x=t.elevation,O=t.region,v=t.firstLat,k=t.firstLon,N="https://wagobe.alexjonas.de/static/img/"+s+".jpg",M="https://maps.googleapis.com/maps/api/staticmap?center=".concat(v,",").concat(k,"&zoom=10&size=400x200&key=").concat("AIzaSyAp7ego-IVWFOjZab49BQ6KF4XjI6b-3QA","&maptype=terrain&scale=2&markers=color:0x4C6A28|").concat(v,",").concat(k),F="https://google.com/maps/?daddr=".concat(v,",").concat(k),A=null===o||void 0===o?void 0:o.findIndex((function(e){return e.id===s})),B=A>-1;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(T,{detailedMode:i,children:[i&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h2",{children:d})}),Object(r.jsxs)(D,{big:i,photoSrc:N,children:[!i&&Object(r.jsx)("h2",{onClick:function(){return n(t)},children:d}),Object(r.jsx)(P,{onClick:function(){c(E())},children:Object(r.jsx)(z,{active:B})})]}),Object(r.jsx)(W,{staticMapUrl:M,onClick:function(){return!i&&n(t)},children:Object(r.jsxs)("ul",{children:[i&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("li",{className:"one-column description",children:h}),Object(r.jsx)("li",{className:"one-column static-map",onClick:function(){return a(!0)}}),Object(r.jsxs)("li",{className:"one-column static-map-menu",children:[Object(r.jsx)(R,{onClick:function(){return a(!0)},children:"Wanderkarte"}),Object(r.jsx)(R,{onClick:function(){c(E())},children:B?"Unlike":"Like"}),Object(r.jsx)(R,{onClick:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank";window.open(e,t)}(F)},children:"Anfahrt"})]})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"L\xe4nge: "}),Math.round(g/100)/10+" km"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"Dauer: "}),"ca. "+I({minutes:b,length:g})+" Std"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"Entfernung: "}),u?Math.round(u/1e3)+" km":"-"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"Anspruch: "}),C(l)]}),p&&Object(r.jsx)("li",{className:"premium",children:Object(r.jsx)("img",{src:y,alt:"Premiumweg"})}),i&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("li",{className:"one-column",children:[Object(r.jsx)("strong",{children:"Region:"}),O]}),p&&Object(r.jsxs)("li",{className:"one-column",children:[Object(r.jsx)("strong",{children:"Premiumweg seit:"}),p]}),x&&Object(r.jsxs)("li",{className:"one-column",children:[Object(r.jsx)("strong",{children:"H\xf6henunterschied: "})," ",x," m"]}),m&&Object(r.jsxs)("li",{className:"one-column",children:[Object(r.jsx)("strong",{children:"Wegbeschaffenheit"}),Object(r.jsx)(L,{surfaceValues:m})]})]}),Object(r.jsxs)("li",{className:"one-column",children:[Object(r.jsx)("strong",{children:"Tour Tags: "}),Object(r.jsx)(_,{tagIds:j})]}),i&&Object(r.jsxs)("li",{className:"one-column",children:[Object(r.jsx)("strong",{children:"Stand:"}),S(f)]})]})})]})});function E(){return B?[].concat(Object(w.a)(o.slice(0,A)),Object(w.a)(o.slice(A+1))):[].concat(Object(w.a)(o),[{id:s,date:new Date}])}}var T=d.b.section.withConfig({displayName:"TrackCard__Wrapper",componentId:"sc-2afsgz-0"})(["padding:10px;border-radius:var(--default-border-radius);box-shadow:0 1px 4px 0 rgba(62,56,43,0.25);background:#fff;display:grid;grid-template-rows:",";h2{font-family:'Kanit',sans-serif;line-height:1;margin:",";font-size:",";color:",";text-align:",";text-shadow:",";}"],(function(e){return e.detailedMode?"none":"1fr 1fr"}),(function(e){return e.detailedMode?"15px 0":"0"}),(function(e){return e.detailedMode?"1.7em":"1.3em"}),(function(e){return e.detailedMode?"var(--heading-color)":"var(--text-invert-color)"}),(function(e){return e.detailedMode?"left":"center"}),(function(e){return e.detailedMode?"none":"0px 0px 9px rgba(0, 0, 0, 0.8)"})),P=d.b.button.withConfig({displayName:"TrackCard__BookmarkButton",componentId:"sc-2afsgz-1"})(["position:absolute;right:3px;top:3px;padding:0;border:0;background-color:transparent;"]),D=d.b.section.withConfig({displayName:"TrackCard__ImageHeading",componentId:"sc-2afsgz-2"})(["display:grid;background:"," url(",");background-attachment:fixed;background-size:cover;background-position:center;place-items:center;padding:10%;position:relative;z-index:50;border-radius:var(--default-border-radius);height:",";"],(function(e){return!e.big&&"linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),"}),(function(e){return e.photoSrc}),(function(e){return e.big?"50vh":"unset"})),W=d.b.section.withConfig({displayName:"TrackCard__TrackFacts",componentId:"sc-2afsgz-3"})(["font-size:0.85em;strong{text-transform:uppercase;font-size:0.8em;font-weight:400;color:var(--secondary-color);letter-spacing:1px;margin-right:8px;}ul{list-style:none;padding:0;display:grid;grid-template-columns:1fr 1fr;position:relative;column-gap:5px;li{padding:13px 0;align-items:baseline;}li.premium{position:absolute;display:none;top:0;right:0;border:none;width:40px;img{width:100%;}}li.one-column{grid-column:1 / -1;display:block;justify-content:unset;}li.description{font-size:1.2em;line-height:1.5;}li.static-map{height:170px;background-image:url(",");background-position:center;background-repeat:no-repeat;background-size:cover;}li.static-map-menu{display:flex;margin-top:-15px;}}"],(function(e){return e.staticMapUrl})),R=Object(d.b)(N).withConfig({displayName:"TrackCard__MapMenuButton",componentId:"sc-2afsgz-4"})(["font-size:0.8em;color:var(--text-invert-color);white-space:nowrap;"]),E=n(41),Z=n.n(E);function J(e){var t="https://wagobe.alexjonas.de"+e;return Z()(t)}function q(){return JSON.parse(localStorage.getItem("lastSearchedPosition"))}function V(e){var t=e.track,n=e.setSingleTrack,a=e.bookmarks,o=e.setBookmarks,c=Object(i.useState)(!1),s=Object(l.a)(c,2),d=s[0],g=s[1],p=Object(u.h)().urlId,b=q(),j=b?Object.values(b).join():"";return!t.id&&J("single-track/".concat(p,"/").concat(j)).then((function(e){var t=e.data;return n(t)})).catch((function(e){return console.error(e)})),Object(r.jsxs)(K,{children:[Object(r.jsxs)(H,{active:d,children:[Object(r.jsx)(h,{setStateFunction:g,color:"#203d1f"}),Object(r.jsx)(O,{kmlFile:t.kmlFile,firstLat:t.firstLat,firstLon:t.firstLon,singleMode:!0})]}),!d&&Object(r.jsx)(v,{children:Object(r.jsx)(B,{track:t,detailedMode:!0,setIsDetailMapActive:g,bookmarks:a,setBookmarks:o})})]})}var K=d.b.main.withConfig({displayName:"Details__Wrapper",componentId:"sc-14bjdbz-0"})(["background-color:#fff;height:100vh;overflow:scroll;position:relative;padding-top:46px;"]),H=Object(d.b)(k).withConfig({displayName:"Details__DetailedMap",componentId:"sc-14bjdbz-1"})(["right:",";"],(function(e){return e.active?"0":"100%"})),U=n(11),Y=n.p+"static/media/controls.ed9435d2.svg",Q=n(21);function X(e){var t=e.setFilterCriteria,n=e.filterCriteria,i=e.setIsFilterActive,a=e.isFilterActive,o=e.tracksNumber,c=e.initialFilterState,s=n.distance,l=n.lengthM,d=n.roundtrip,u=n.certYear,g=n.bookmarked,p=6e5,b=l||2e4,j=(s||p)/1e3,f=10*Math.ceil(j/10),m=b/1e3,x=1*Math.ceil(m/1),O=d||!1,v=u||!1,k=g||!1;return Object(r.jsxs)(G,{active:a,children:[Object(r.jsx)("h2",{children:"Finde deine perfekte Tour"}),Object(r.jsx)(h,{setStateFunction:i,size:"30",isInvertMode:!0}),Object(r.jsxs)($,{children:[Object(r.jsxs)("label",{children:[Object(r.jsxs)("span",{children:["Umkreis: ",f," km"]}),Object(r.jsx)("input",{min:1e4,step:1e4,max:p,type:"range",defaultValue:1e3*f,name:"distance",onChange:w})]}),Object(r.jsxs)("label",{children:[Object(r.jsxs)("span",{children:["Maximale L\xe4nge: ",x," km"]}),Object(r.jsx)("input",{min:1e3,step:1e3,max:2e4,defaultValue:1e3*x,type:"range",name:"lengthM",onChange:w})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("span",{children:"Nur Rundwege: "}),Object(r.jsx)("input",{type:"checkbox",name:"roundtrip",defaultChecked:O,onChange:w})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("span",{children:"Nur Premiumwege: "}),Object(r.jsx)("input",{type:"checkbox",name:"certYear",defaultChecked:v,onChange:w})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("span",{children:"Nur Bookmarks: "}),Object(r.jsx)("input",{type:"checkbox",name:"bookmarked",defaultChecked:k,onChange:w})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)("button",{type:"button",onClick:function(){return i(!1)},children:Object(r.jsxs)("strong",{children:["Treffer: ",o]})}),Object(r.jsx)("button",{type:"reset",onClick:function(){t(c),i(!1)},children:"Zur\xfccksetzen"})]})]})]});function w(e){var r=e.target,i=r.type,a=r.name,o=r.value,c=r.checked,s="checkbox"===i,l=a,d=s?c:+o,u=Object(U.a)(Object(U.a)({},n),{},Object(Q.a)({},l,d));s&&!d&&delete u[l],t(u)}}var G=Object(d.b)(k).withConfig({displayName:"FilterMenu__Wrapper",componentId:"sc-12qxdt5-0"})(["right:",";padding:12%;font-size:0.8em;h2{font-family:'Kanit',sans-serif;font-weight:400;line-height:1;font-size:1.7em;}"],(function(e){return e.active?"0":"100%"})),$=d.b.form.withConfig({displayName:"FilterMenu__Controls",componentId:"sc-12qxdt5-1"})(["label{display:flex;flex-direction:column;margin:2em 0;}input{width:100%;}"]),ee=d.b.div.withConfig({displayName:"FilterMenu__ButtonArea",componentId:"sc-12qxdt5-2"})(["display:grid;grid-template-rows:1fr 1fr;gap:10px;button{display:block;border:1px solid var(--text-invert-color);background:none;color:var(--text-invert-color);padding:1em;font-size:1em;letter-spacing:1px;border-radius:var(--default-border-radius);}button[type='button']{background:var(--text-invert-color);border:none;color:var(--primary-color);}"]);function te(e){var t;return t=e,localStorage.setItem("lastSearchedPosition",JSON.stringify(t)),J("track/".concat(e.lat,",").concat(e.lng))}function ne(e){var t=e.startingPoint,n=e.setSingleTrack,a=e.bookmarks,o=e.setBookmarks,c=q(),s=JSON.parse(localStorage.getItem("filterSettings")),d={distance:3e5},u=Object(i.useState)(null!==s&&void 0!==s?s:d),g=Object(l.a)(u,2),p=g[0],b=g[1],h=Object(i.useState)([]),j=Object(l.a)(h,2),f=j[0],m=j[1],x=Object(i.useState)({lat:(null===t||void 0===t?void 0:t.latitude)||c.lat,lng:(null===t||void 0===t?void 0:t.longitude)||c.lng}),k=Object(l.a)(x,2),w=k[0],y=k[1],C=Object(i.useState)(!1),S=Object(l.a)(C,2),I=S[0],N=S[1];Object(i.useEffect)((function(){!I&&p!==s&&function(e){localStorage.setItem("filterSettings",JSON.stringify(e))}(p)}),[I]),Object(i.useEffect)((function(){te(w).then((function(e){return e.data})).then((function(e){return e.map((function(e){var t=a.find((function(t){return t.id===e.id}));return t?Object(U.a)(Object(U.a)({},e),{},{bookmarked:t.date}):e}))})).then((function(e){return m(e)})).catch((function(e){return console.error("Error:",e)}))}),[w,a]);var z=f.filter((function(e){return function(e,t){for(var n in t){if(!e[n])return!1;if("distance"===n&&e[n]>t[n])return!1;if("lengthM"===n&&e[n]>t[n])return!1;if("difficulty"===n&&e[n]!==t[n])return!1;if("certYear"===n&&Boolean(e[n])!==t[n])return!1}return!0}(e,p)}));return Object(r.jsxs)(re,{children:[Object(r.jsx)(O,{centerCoords:w,handleCenterChanged:y,tracks:z}),Object(r.jsxs)(ie,{children:[Object(r.jsxs)(ae,{onClick:function(){return N(!0)},children:[Object(r.jsx)("strong",{children:"Filter"}),Object.keys(p).length>0&&Object(r.jsx)("span",{children:Object.keys(p).length})]}),Object(r.jsx)("div",{children:(0===z.length?"Keine":z.length)+" Tour"+(1!==z.length?"en":"")+" gefunden"})]}),Object(r.jsx)(X,{filterCriteria:p,setFilterCriteria:b,setIsFilterActive:N,allTracks:f,isFilterActive:I,tracksNumber:z.length,initialFilterState:d}),!I&&Object(r.jsx)(v,{children:z.map((function(e){return Object(r.jsx)(B,{track:e,handleClick:n,detailedMode:!1,bookmarks:a,setBookmarks:o},e.id)}))})]})}var re=d.b.main.withConfig({displayName:"Results__Wrapper",componentId:"snmm12-0"})(["background-color:#fff;height:100vh;overflow:scroll;position:relative;padding-top:46px;user-select:none;"]),ie=d.b.section.withConfig({displayName:"Results__FilterBar",componentId:"snmm12-1"})(["background:#fff;box-shadow:0 1px 4px 0 var(--bar-shadow);text-align:center;padding:0;position:sticky;top:0;margin-top:-30px;font-size:0.8em;z-index:100;display:grid;grid-template-columns:1fr 2fr;div{white-space:nowrap;padding-top:12px;}"]),ae=Object(d.b)(N).withConfig({displayName:"Results__FilterButton",componentId:"snmm12-2"})(["strong{background-color:transparent;background-image:url(",");background-repeat:no-repeat;background-position-x:left;}span{background:#00000020;border-radius:var(--default-border-radius);padding:0 5px;margin:0 5px;display:inline;}"],Y),oe=n.p+"static/media/load.5738ef34.svg";function ce(){return Object(r.jsx)(se,{children:Object(r.jsx)("img",{src:oe,alt:"Daten werden geladen"})})}var se=d.b.div.withConfig({displayName:"Loader__LoaderStyled",componentId:"sc-1et1qi9-0"})(["display:inline;"]);var le=n.p+"static/media/close.9b7cb5be.svg",de=n.p+"static/media/compass.b5f06bd3.svg",ue=n.p+"static/media/startscreen.43b62095.jpg",ge=n(73);function pe(e){var t=e.handleSubmit,n=Object(i.useState)(!1),a=Object(l.a)(n,2),o=a[0],c=a[1],s=Object(i.useState)([]),d=Object(l.a)(s,2),u=d[0],p=d[1];return Object(r.jsxs)(be,{children:[Object(r.jsx)(he,{onClick:function(){return c(!1)},children:Object(r.jsx)("h1",{children:Object(r.jsx)("img",{src:g,alt:"wandergold"})})}),Object(r.jsxs)(je,{onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsxs)(fe,{active:o,children:[o&&Object(r.jsx)("button",{type:"button",onClick:function(){return c(!1)},children:Object(r.jsx)("img",{src:le,alt:"close"})}),Object(r.jsx)("input",{onChange:function(e){!u.length&&p([{loading:!0}]),function(e,t){var n=e.trim();n.length>2?J("autocomplete/".concat(n)).then((function(e){return e.data.predictions})).then((function(e){return e.map((function(e){return{description:e.description,googlePlaceId:e.place_id}}))})).then((function(e){return t(e.slice(0,4))})).catch((function(){return t([{description:"Service nicht verf\xfcgbar"}])})):t([])}(e.target.value,p)},onFocus:function(){return c(!0)},type:"text",placeholder:o?"":"wo willst du hin?"})]}),o&&Object(r.jsx)(me,{children:Object(r.jsx)("ul",{children:Object(r.jsxs)(r.Fragment,{children:[navigator.geolocation&&Object(r.jsx)("li",{className:"geoLocator",onClick:function(){return e=t,n={locationName:"Mein Standort",isReadyToSearch:!0},void navigator.geolocation.getCurrentPosition((function(t){e(Object(U.a)({latitude:t.coords.latitude,longitude:t.coords.longitude},n))}));var e,n},children:"Mein Standort"},Object(ge.a)()),u.map((function(e){var n=e.loading,i=e.description,a=e.googlePlaceId;return Object(r.jsx)("li",{onClick:function(){return!n&&function(e,t,n){J("geocode/".concat(t)).then((function(e){return e.data.results[0].geometry})).then((function(r){var i={locationName:e,googlePlaceId:t,latitude:r.location.lat,longitude:r.location.lng,isReadyToSearch:!0};n(i)}))}(i,a,t)},children:n?Object(r.jsx)(ce,{}):i},Object(ge.a)())}))]})})})]})]})}var be=d.b.div.withConfig({displayName:"Start__Wrapper",componentId:"gzehk2-0"})(["width:100%;height:100%;display:grid;grid-template-rows:60% 40%;background-image:url(",");background-size:cover;background-position:center;background-repeat:no-repeat;padding:5%;padding-top:0;position:relative;"],ue),he=d.b.div.withConfig({displayName:"Start__LogoArea",componentId:"gzehk2-1"})(["display:grid;place-items:center stretch;h1{line-height:1;text-align:center;}img{width:90%;}"]),je=d.b.form.withConfig({displayName:"Start__LocationSearch",componentId:"gzehk2-2"})(["display:grid;grid-template-rows:45px auto;place-items:start center;gap:10px;text-align:left;"]),fe=d.b.div.withConfig({displayName:"Start__SearchField",componentId:"gzehk2-3"})(["width:",";min-width:150px;padding:10px;border-radius:20px;background-color:",";box-shadow:0px 0px 25px 0px var(--secondary-color);transition:width 0.5s ease-in-out,background-color 0.5s ease-in-out,font-size 0.5s ease-in-out,transform 0.5s ease-in-out;font-size:",";line-height:1;white-space:nowrap;button{background:transparent;border:none;padding:0;img{margin-right:5px;width:20px;height:20px;}}input{font-size:1em;outline:none;border:none;background:transparent;width:calc(90%-20px);}"],(function(e){return e.active?"100%":"50%"}),(function(e){return e.active?"#fff":"#ffffff75"}),(function(e){return e.active?"1.2em":"0.8em"})),me=d.b.div.withConfig({displayName:"Start__SearchSuggestions",componentId:"gzehk2-4"})(["background:#ffffff97;border-radius:5px;width:100%;max-height:100%;overflow-y:scroll;overflow-x:hidden;font-size:0.9em;padding:5px;ul{list-style:none;margin:0;padding:0;overflow-x:hidden;li{white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden;padding:8px;border-radius:5px;}li.geoLocator{border-bottom:1px solid var(--separator-color);background-image:url(",");background-repeat:no-repeat;background-size:15px;background-position-y:center;background-position-x:2px;padding-left:25px;}li:hover{background-color:#fff;}}"],de);function xe(){var e,t=Object(i.useState)({latitude:null,longitude:null,locationName:"",googlePlaceId:"",isReadyToSearch:!1}),n=Object(l.a)(t,2),a=n[0],o=n[1],c=Object(i.useState)({}),s=Object(l.a)(c,2),d=s[0],g=s[1],b=Object(i.useState)(null!==(e=function(){var e=JSON.parse(localStorage.getItem("bookmarks"));return(null===e||void 0===e?void 0:e.length)>0?e:[]}())&&void 0!==e?e:[]),h=Object(l.a)(b,2),j=h[0],f=h[1];return Object(i.useEffect)((function(){!function(e){localStorage.setItem("bookmarks",JSON.stringify(e))}(j)}),[j]),Object(r.jsx)(Oe,{children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{exact:!0,path:"/",children:a.isReadyToSearch?Object(r.jsx)(u.a,{to:"/results"}):Object(r.jsx)(pe,{handleSubmit:o})}),Object(r.jsx)(u.b,{path:"/results",children:d.id?Object(r.jsx)(u.a,{to:"/details/".concat(d.id)}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{goBackFunction:o,redirectToPath:"/"}),Object(r.jsx)(ne,{startingPoint:a,setSingleTrack:g,bookmarks:j,setBookmarks:f})]})}),Object(r.jsx)(u.b,{path:"/details/:urlId",children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{goBackFunction:g,redirectToPath:"/results"}),Object(r.jsx)(V,{track:d,setSingleTrack:g,bookmarks:j,setBookmarks:f})]})})]})})}var Oe=d.b.div.withConfig({displayName:"App__PageLayout",componentId:"sc-3vbase-0"})(["height:100vh;width:100%;max-width:500px;min-width:250px;margin:0 auto;box-shadow:0px 0px 25px 0px #000;background:#fff;position:relative;"]),ve=n(42);function ke(){var e=Object(ve.a)(["\n\n* {\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\n:root {\n    --primary-color: #4C6A28;\n    --primary-color-active: #2f4218; \n    --primary-gradient: linear-gradient(0deg, rgba(40,55,21,1) 0%, rgba(76,106,40,1) 100%); \n    --secondary-color: #3E382B;\n    --secondary-gradient: linear-gradient(0deg, rgba(112,101,76,1) 0%, rgba(62,56,43,1) 100%); \n    --secondary-shadow: 0px 4px 10px var(--secondary-color);\n    --text-color: #1a1a1a;\n    --text-invert-color: #fafafa;\n    --heading-color: #3F4F2C;\n    --default-border-radius: 5px;\n    --tag-background: #3e382b30;\n    --bar-shadow: rgba(62, 56, 43, 0.25);\n    --button-shadow: rgba(62, 56, 43, 0.65);\n    --result-background: #ddd;\n    --separator-color: #808080;\n\n}\n\nbody {\n    margin:0;\n    background-color: var(--secondary-color);\n    font-size:112.5%;\n    color: var(--text-color);\n   \n}\n\nbutton:focus {outline:0;}"]);return ke=function(){return e},e}var we=Object(d.a)(ke()),ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),a(e),o(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(we,{}),Object(r.jsx)(xe,{})]})}),document.getElementById("root")),ye()}},[[71,1,2]]]);
//# sourceMappingURL=main.a95ae2d3.chunk.js.map