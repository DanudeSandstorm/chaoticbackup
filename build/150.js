(self.webpackChunkchaoticbackup=self.webpackChunkchaoticbackup||[]).push([[150],{6550:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r,a,c,l,i=n(4575),u=n.n(i),o=n(3913),s=n.n(o),m=n(2205),p=n.n(m),f=n(8585),d=n.n(f),h=n(9754),y=n.n(h),g=n(7294),E=n(798),v=n(5977),b=n(7154),k=n.n(b),x=n(1165),$=n.n(x),S=n(1506),w=n.n(S),C=n(3124),R=n.n(C),Z=(n(7268),n(2188)),P=n(3727),M=n(5351),D=n.n(M),O=n(6812),N=n(1637),I=n(2195),U=n(5403);function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var A=Object.create(U.Z);A.input={width:"1.2em",height:"1.4em",font:"inherit",textAlign:"center",margin:"0.05em",backgroundColor:"rgba(0,0,0,0)",color:"white"},A.inputGroup={alignItems:"center"},A.hyphen={background:"white",height:"0.1em",width:".5em",display:"inline-block"};var z,V,j,B=(0,E.f3)((function(e,t,n){return t}))(r=(0,E.Pi)((a=function(e){p()(n,e);var t=L(n);function n(){var e;u()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),$()(e,"code",c,w()(e)),e.message=(0,Z.LO)({contents:null},{contents:Z.LO.ref}),$()(e,"fan",l,w()(e)),e}return s()(n,[{key:"render",value:function(){var e=this;if(!this.fan)return N.Z.getSpreadsheet(N.Z.path("1hzSojB76Me-P1qppxYR0oiHSU56jyK59x3DKm660ntc"),(function(t){e.fan=t})),g.createElement(I.gb,null);return g.createElement("div",null,g.createElement(D(),k()({as:P.rU},A.link,{to:"/EnterTheCode/PackSimulator/"}),"Pack Simulator"),g.createElement("br",null),g.createElement("br",null),g.createElement(O.Z,{acceptedCharacters:/^[0-9a-z]$/i,length:12,value:this.code,onChange:function(t){return e.code=t}},(function(e){return g.createElement("div",{style:A.inputGroup},g.createElement("input",k()({type:"text",style:A.input},e[0])),g.createElement("input",k()({type:"text",style:A.input},e[1])),g.createElement("input",k()({type:"text",style:A.input},e[2])),g.createElement("input",k()({type:"text",style:A.input},e[3])),g.createElement("span",{style:A.hyphen}),g.createElement("input",k()({type:"text",style:A.input},e[4])),g.createElement("input",k()({type:"text",style:A.input},e[5])),g.createElement("input",k()({type:"text",style:A.input},e[6])),g.createElement("input",k()({type:"text",style:A.input},e[7])),g.createElement("span",{style:A.hyphen}),g.createElement("input",k()({type:"text",style:A.input},e[8])),g.createElement("input",k()({type:"text",style:A.input},e[9])),g.createElement("input",k()({type:"text",style:A.input},e[10])),g.createElement("input",k()({type:"text",style:A.input},e[11])))})),g.createElement("br",null),g.createElement("button",{onClick:function(t){if(t.preventDefault(),t.stopPropagation(),e.code.length<12||-1!=e.code.indexOf(" "))e.message.contents=g.createElement("p",{style:{color:"red"}},"Please enter a 12 digit code");else{var n=e.fan[(a=0,c=e.fan.length,a=Math.ceil(a),c=Math.floor(c),Math.floor(Math.random()*(c-a))+a)],r=/.*.png|.*.jpg/i.test(n.gsx$image.$t)?n.gsx$image.$t:N.Z.base_image+n.gsx$image.$t;e.message.contents=g.createElement("div",{key:0},g.createElement("p",null," Congrats on your scan! "),g.createElement("br",null),g.createElement("p",{className:"bigger"}," ",n.gsx$name.$t," "),g.createElement("br",null),g.createElement("img",{className:"card",src:r}))}var a,c}},"Validate Code"),g.createElement("br",null),g.createElement("br",null),this.message.contents)}}]),n}(g.Component),c=R()(a.prototype,"code",[Z.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),l=R()(a.prototype,"fan",[Z.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),r=a))||r)||r,F=n(3038),T=n.n(F),_=n(3050),G=n.n(_),K=new(z=function e(){var t=this;u()(this,e),$()(this,"filter",V,this),this.setupDB=function(){var e,n=new(G())("filter.db").addCollection("filter");n.addDynamicView("alphabetical").applySimpleSort("gsx$name"),(e=N.Z.cards.attacks.find()).forEach((function(e){return delete e.$loki})),n.insert(e),(e=N.Z.cards.battlegear.find()).forEach((function(e){return delete e.$loki})),n.insert(e),(e=N.Z.cards.creatures.find()).forEach((function(e){return delete e.$loki})),n.insert(e),(e=N.Z.cards.locations.find()).forEach((function(e){return delete e.$loki})),n.insert(e),(e=N.Z.cards.mugic.find()).forEach((function(e){return delete e.$loki})),n.insert(e),t.filter=n},this.generate=function(e){for(var n,r=e.packs,a=e.set,c=[],l=[],i=0,u=t.filter.addDynamicView("set"),o=function(e){var t=parseInt(e)-10;return t<0&&(t=0),5*Math.floor(5*Math.random())+t},s=function e(t){var n,r,a=t[Math.floor(Math.random()*t.length)];a?l.indexOf(a.gsx$name)>-1||a.gsx$exclusive.toLowerCase().includes("starter")?e(t):(l.push(a.gsx$name),"Creatures"!=a.gsx$type?c.push(g.createElement("div",{key:i++,className:"card",style:{backgroundImage:'url("'.concat(N.Z.cardImage(a),'")')}})):c.push(g.createElement("div",{key:i++,className:"card",style:{backgroundImage:'url("'.concat(N.Z.cardImage(a),'")')}},g.createElement("div",{className:"stats"},g.createElement("span",{key:"courage"},o(a.gsx$courage)),g.createElement("span",{key:"power"},o(a.gsx$power)),g.createElement("span",{key:"wisdom"},o(a.gsx$wisdom)),g.createElement("span",{key:"speed"},o(a.gsx$speed)),g.createElement("span",{key:"energy"},(n=a.gsx$energy,(r=parseInt(n)-5)<0&&(r=0),5*Math.floor(3*Math.random())+r)))))):c.push(g.createElement("div",{key:i++,className:"card",style:{backgroundImage:'url("'.concat(N.Z.card_back,'")')}}))},m=function(e,t){u.applyFind({gsx$set:a}).applyFind({gsx$rarity:e});for(var n=u.data(),r=0;r<t;r++)s(n);u.removeFilters()},p=function(){var e=Math.floor(24*Math.random())+1;return 24==e?"Ultra Rare":e%3==0?"Super Rare":"Rare"},f=["AU","FAS"],d=0;d<r;d++)"OP1"===a?(m("Common",2),m((n=void 0,75==(n=Math.floor(75*Math.random())+1)?"Ultra Rare":n<19?"Super Rare":n<44?"Rare":"Uncommon"),1)):"PE1"===a?(m("Super Rare",5),m("Ultra Rare",1)):f.indexOf(a)>-1?(m("Common",6),m("Rare",2),m(p(),1)):(m("Common",4),m("Uncommon",3),m("Rare",1),m(p(),1)),l=[];return t.filter.removeDynamicView("set"),c}},V=R()(z.prototype,"filter",[Z.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z),W=K.generate,q=K.setupDB;function H(e){var t=(0,g.useState)(!1),n=T()(t,2),r=n[0],a=n[1],c=(0,g.useState)(""),l=T()(c,2),i=l[0],u=l[1],o=(0,g.useState)([]),s=T()(o,2),m=s[0],p=s[1],f=(0,g.useState)([]),d=T()(f,2),h=d[0],y=d[1],E=(0,g.useState)(1),v=T()(E,2),b=v[0],x=v[1];if((0,g.useEffect)((function(){N.Z.LoadDB([{cards:"attacks"},{cards:"battlegear"},{cards:"creatures"},{cards:"locations"},{cards:"mugic"}]).then((function(){q(),a(!0)})).catch((function(){}));for(var e=[],t=0;t<9;t++)e.push(g.createElement("div",{key:t,className:"card",style:{backgroundImage:'url("'.concat(N.Z.card_back,'")')}}));y(e);var n=[],r=1;for(var c in N.Z.sets)if(n.push(g.createElement("option",{key:r++,value:c},N.Z.sets[c])),"PE1"===c)break;p(n)}),[]),0==r)return g.createElement(I.gb,null);return g.createElement("div",{className:"packsim"},g.createElement(D(),k()({as:P.rU},U.Z.link,{to:"/EnterTheCode/"}),"Enter The Code"),g.createElement("br",null),g.createElement("br",null),g.createElement("form",{onSubmit:function(e){event.preventDefault(),event.stopPropagation(),y(W({packs:b,set:i}))}},g.createElement("label",null,"Packs:",g.createElement("input",{name:"packs",type:"number",value:b,min:"1",max:"24",style:{width:"32px",padding:"0px"},onChange:function(e){e.target.value>24&&(e.target.value=24),x(e.target.value)}})),g.createElement("select",{name:"set",value:i,onChange:function(e){u(e.target.value)}},g.createElement("option",{defaultValue:"selected",hidden:!0,style:{fontStyle:"italic"}},"Select a Set"),m),g.createElement("br",null),g.createElement("br",null),g.createElement("input",{disabled:!i,type:"submit",value:"Open Packs"})),g.createElement("br",null),g.createElement("br",null),g.createElement("div",{className:"pack"},h))}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var J=(0,E.f3)((function(e,t,n){return t}))(j=(0,E.Pi)(j=function(e){p()(n,e);var t=Y(n);function n(){return u()(this,n),t.apply(this,arguments)}return s()(n,[{key:"render",value:function(){return g.createElement(Q,this.props)}}]),n}(g.Component))||j)||j;function Q(e){var t=e.match;return g.createElement("div",{className:"pack"},g.createElement(v.AW,{exact:!0,path:t.url,component:B}),g.createElement(v.AW,{path:"".concat(t.url,"/PackSimulator"),component:H}))}}}]);