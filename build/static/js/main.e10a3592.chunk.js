(this.webpackJsonpnav2goe=this.webpackJsonpnav2goe||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(10),i=n.n(r),a=(n(15),n(3)),l=(n(6),n(1));var j=n(8),b=n.n(j),d=function(e){return Object(l.jsx)("div",{className:"ErrorPage",children:Object(l.jsxs)("div",{className:"ErrorPageTitle",children:[Object(l.jsx)("header",{className:b.a.header,children:Object(l.jsx)("h2",{children:e.title})}),Object(l.jsx)("div",{className:b.a.content,children:Object(l.jsx)("p",{children:e.message})}),Object(l.jsx)("footer",{className:b.a.actions,children:Object(l.jsx)("button",{onClick:e.onConfirm,children:"Zur\xfcck zur Suche"})})]})})},u=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("header",{className:"Startseite-header",children:[Object(l.jsx)("h1",{className:"logo",children:"Nav2G\xf6"}),Object(l.jsxs)("div",{id:"endText",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("br",{}),"Vielen Dank f\xfcr die Teilnahme!"," "]}),Object(l.jsxs)("p",{children:[" ","Klicken Sie jetzt bitte auf den Button, um zur Umfrage zu gelangen",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})]})]}),Object(l.jsx)("div",{id:"containerButtonEnd",children:Object(l.jsx)("a",{href:"https://kaiuby2.github.io",children:"App-Version 2 starten"})})]})})},o=n(4),h=n(7),O=function(e,t,n){for(var c=e.split(":"),s=Object(a.a)(c,2),r=s[0],i=s[1],l=(t=Number(t),Number(r)+Number(t)),j=Number(i)+Number(n);j>=60;)j-=60,l+=1;return j<10&&(j="0"+j),l>=24&&(l-=24),l<10&&(l="0"+l),[l+":"+j,!1]},x=function(e,t){var n=e.toString().split("-"),c=Number(n[1]),s=Number(n[2]),r=Number(n[0]);return 1==t&&(2==c&&28==s&&(c+=1,s=1),31==s&&(s=1,12==c?(c=1,r+=1):c+=1),30==s&&(c+=1,s=1)),s<10&&(s="0"+s),r+"-"+c+"-"+s},m=function(e){var t=e.toString().split("-"),n=Number(t[1]),c=Number(t[2]);Number(t[0]);return c+"."+n+"."},v=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!1),j=Object(a.a)(i,2),b=j[0],d=(j[1],Object(c.useState)(!1)),v=Object(a.a)(d,2),p=v[0];v[1];console.log(e.departureDay,e.departureStop);var N=function(){e.onGoBack()},f=function(){r(!0)},g=function(e){var t=Math.floor(e),n=Math.round(60*(e-t));return"".concat(t<10?"0":"").concat(t,":").concat(n<10?"0":"").concat(n)}(function(t){var n=t.split(":"),c=Object(a.a)(n,2),s=c[0],r=c[1],i=e.additionalRandomMinutes,l=Number(r)+Number(i);return Number(s)+Number(l)/60}(e.departureTime)),S=function(e,t){Number(e);var n=Number(t),c=Number(60*e+n),s=Number(Math.floor(.3*c)),r=Number(Math.floor(.15*c)),i=Number(c-s-r);return[Number(s),Number(r),Number(i)]}(e.durationH,e.durationMin),k=function(e,t){Number(e);var n=Number(t),c=Number(60*e+n),s=Number(Math.floor(.3*c)),r=Number(Math.floor(.1*c)),i=Number(Math.floor(.2*c)),a=Number(Math.floor(.15*c)),l=Number(c-s-r-i-a);return[Number(s),Number(r),Number(i),Number(a),Number(l)]}(e.durationH,e.durationMin);return Object(l.jsx)("div",{children:e.cheaperConnectionStarted?Object(l.jsx)("div",{children:s?Object(l.jsx)(u,{}):Object(l.jsx)("div",{className:"container-verbindung",children:b?null:Object(l.jsxs)("form",{children:[Object(l.jsx)("h1",{className:"Verbindung-header",children:"Verbindung"}),Object(l.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 1"}),Object(l.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(l.jsx)("p",{children:"Abfahrt:"})," ",m(x(e.departureDay,p))," ","um ",g," "]}),Object(l.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 50"}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft:"})," ",m(x(e.departureDay,p))," ","um"," ",O(g,Number(0),Number(k[0]))," "]}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Abfahrt an Haltestelle:"})," ",e.departureStop," "]}),Object(l.jsx)("div",{className:"busIcon",children:Object(l.jsx)(o.a,{size:"3rem",color:"white"})}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft an Haltestelle:"})," Weender Stra\xdfe-Ost"," "]})]}),Object(l.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 2"}),Object(l.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(l.jsx)("p",{children:"Abfahrt:"})," ",m(x(e.departureDay,p))," ","um"," ",O(g,Number(0),Number(k[0]+k[1]))," "]}),Object(l.jsx)("div",{className:"verbindung-textfeld",children:"Verf\xfcgbare Scooter: 3"}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft:"})," ",m(x(e.departureDay,p))," ","um"," ",O(g,Number(0),Number(k[0]+S[1]+k[2]))," "]}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Abfahrt an Haltestelle:"})," Weender Stra\xdfe-Ost"," "]}),Object(l.jsx)("div",{className:"busIcon",children:Object(l.jsx)(h.a,{size:"3rem",color:"white"})}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft an Haltestelle:"})," Neues Rathaus"," "]})]}),Object(l.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 3"}),Object(l.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(l.jsx)("p",{children:"Abfahrt:"})," ",m(x(e.departureDay,p))," ","um"," ",O(g,Number(0),Number(k[0]+S[1]+k[2]+k[3]))," "]}),Object(l.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 12"}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft:"})," ",m(x(e.departureDay,p))," ","um"," ",O(g,Number(0),Number(k[0]+S[1]+k[2]+k[3]+k[4]))," "]}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Abfahrt an Haltestelle:"})," Neues Rathaus"," "]}),Object(l.jsx)("div",{className:"busIcon",children:Object(l.jsx)(o.a,{size:"3rem",color:"white"})}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft an Haltestelle:"})," ",e.destinationStop," "]})]}),Object(l.jsxs)("div",{className:"buttons-verbindung",children:[Object(l.jsxs)("button",{className:"button",onClick:N,type:"submit",children:[" ","Zur\xfcck"]}),Object(l.jsxs)("button",{className:"button",onClick:function(){f(),e.onSetStartFormHidden(!0)},children:[" ","Test Beenden?"]})]})]})})}):Object(l.jsx)("div",{children:s?Object(l.jsx)(u,{}):Object(l.jsx)("div",{className:"container-verbindung",children:b?null:Object(l.jsxs)("form",{children:[Object(l.jsx)("h1",{className:"Verbindung-header",children:"Verbindung"}),Object(l.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 1"}),Object(l.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(l.jsx)("p",{children:"Abfahrt:"})," ",m(e.departureDay)," um"," ",g," "]}),Object(l.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 50"}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft:"})," ",m(e.departureDay)," um"," ",O(g,Number(0),Number(S[0]))," "]}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Abfahrt an Haltestelle:"})," ",e.departureStop," "]}),Object(l.jsx)("div",{className:"busIcon",children:Object(l.jsx)(o.a,{size:"3rem",color:"white"})}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft an Haltestelle:"})," Weender Stra\xdfe-Ost"," "]})]}),Object(l.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 2"}),Object(l.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(l.jsx)("p",{children:"Abfahrt:"})," ",m(e.departureDay)," um"," ",O(g,Number(0),Number(S[0]+S[1]))," "]}),Object(l.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 18"}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft:"})," ",m(e.departureDay)," um"," ",O(g,Number(0),Number(S[0]+S[1]+S[2]))," "]}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Abfahrt an Haltestelle:"})," Weender Stra\xdfe-Ost"," "]}),Object(l.jsx)("div",{className:"busIcon",children:Object(l.jsx)(o.a,{size:"3rem",color:"white"})}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:[Object(l.jsx)("p",{children:"Ankunft an Haltestelle:"})," ",e.destinationStop," "]})]}),Object(l.jsxs)("div",{className:"buttons-verbindung",children:[Object(l.jsxs)("button",{className:"button",onClick:N,type:"submit",children:[" ","Zur\xfcck"]}),Object(l.jsxs)("button",{className:"button",onClick:function(){f(),e.onSetStartFormHidden(!0)},children:[" ","Test Beenden?"]})]})]})})})})},p=n(5),N=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!1),j=Object(a.a)(i,2),b=j[0],d=j[1],u=Object(c.useState)(!1),O=Object(a.a)(u,2),x=O[0],m=O[1],N=Object(c.useState)(!1),g=Object(a.a)(N,2),S=g[0],k=g[1],C=Object(c.useState)(!1),D=Object(a.a)(C,2),z=D[0],y=D[1],w=Object(c.useState)(!1),H=Object(a.a)(w,2),A=H[0],F=H[1],M=Object(c.useState)(function(){var e,t,n,c=0,s=Math.floor(81*Math.random())+25,r=Math.floor(81*Math.random())+25;return s==r&&(s=Number(s)-1),r>=s&&(s>=60?(n=1,c=s-60):(n=0,c=s),r>=60?(e=1,t=r-60):(e=0,t=r)),s>r&&(r>=60?(n=1,c=r-60):(n=0,c=r),s>=60?(e=1,t=s-60):(e=0,t=s)),[e,t,n,c]}()),B=Object(a.a)(M,2),T=B[0],G=(B[1],Object(c.useState)(Number(Math.round(6*Math.random())+3))),V=Object(a.a)(G,2),I=V[0],R=(V[1],1),L=function(e){return e+=5*Math.random(),R=e,Math.round(R)},W=new Date(e.departureDay+864e5);return W.setDate(Number(W.getDate())+1),console.log("newdate."+W),Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{children:[S?null:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Verbindungsauswahl"}),Object(l.jsxs)("div",{className:"connectionChoice",children:[Object(l.jsx)("h2",{children:"G\xfcnstigste Verbindung"}),Object(l.jsxs)("div",{id:"containerFastestConnection",children:[Object(l.jsxs)("div",{className:"verbindung-textfeld",children:["Fahrtkosten: ",L(R),".00 \u20ac "]}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:["Dauer:  ",T[0]," h ",T[1]," min"]}),Object(l.jsx)("div",{className:"verbindung-textfeld",children:"Umstiege: 1"}),Object(l.jsxs)("div",{className:"umstiegIcons",children:[Object(l.jsx)(o.a,{size:"3rem",color:"white"}),Object(l.jsx)(p.b,{size:"3rem",color:"white"}),Object(l.jsx)(o.a,{size:"3rem",color:"white"})]})]})]})]}),b?Object(l.jsx)(v,{onSetStartFormHidden:e.onSetStartFormHidden,departureStop:e.departureStop,destinationStop:e.destinationStop,departureDay:e.departureDay,departureTime:e.departureTime,cheaperConnectionStarted:s,fasterConnectionStarted:b,durationH:T[0],durationMin:T[1],additionalRandomMinutes:I,onGoBack:function(){k(!1),d(!1),r(!1),y(!1),F(!1)}}):A?null:Object(l.jsx)("div",{className:"connectionChoice containerConnectionButton",children:Object(l.jsxs)("button",{className:"button-select",onClick:function(){d(!0),y(!0),k(!0)},children:[" ","Route starten"," "]})})]}),S?null:Object(l.jsxs)("div",{className:"connectionChoice",children:[Object(l.jsx)("h2",{children:"Schnellste Verbindung"}),Object(l.jsxs)("div",{id:"containerFastestConnection",children:[Object(l.jsxs)("div",{className:"verbindung-textfeld",children:["Fahrtkosten: ",L(R),".00 \u20ac "]}),Object(l.jsxs)("div",{className:"verbindung-textfeld",children:["Dauer: ",T[2]," h ",T[3]," min "]}),Object(l.jsx)("div",{className:"verbindung-textfeld",children:"Umstiege: 2"}),Object(l.jsxs)("div",{className:"umstiegIcons",children:[Object(l.jsx)(o.a,{size:"3rem",color:"white"}),Object(l.jsx)(p.b,{size:"3rem",color:"white"}),Object(l.jsx)(h.a,{size:"3rem",color:"white"}),Object(l.jsx)(p.b,{size:"3rem",color:"white"}),Object(l.jsx)(o.a,{size:"3rem",color:"white"})]})]})]}),s?Object(l.jsx)(v,{onSetStartFormHidden:e.onSetStartFormHidden,departureStop:e.departureStop,destinationStop:e.destinationStop,departureDay:e.departureDay,departureTime:e.departureTime,cheaperConnectionStarted:s,fasterConnectionStarted:b,durationH:T[2],durationMin:T[3],additionalRandomMinutes:I,onGoBack:function(){k(!1),d(!1),r(!1),y(!1),F(!1)}}):z?null:Object(l.jsx)("div",{className:"connectionChoice containerConnectionButton",children:Object(l.jsxs)("button",{className:"button-select",onClick:function(){r(!0),F(!0),k(!0)},children:[" ","Route starten"," "]})}),S?null:x?Object(l.jsx)(f,{}):Object(l.jsxs)("button",{className:"backToSearchButton",onClick:function(){m(!0),k(!0),e.onGoBack()},children:[" ","Zur\xfcck zur Suche"," "]})]})},f=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),r=n[0],i=n[1],j=Object(c.useState)(""),b=Object(a.a)(j,2),u=b[0],o=b[1],h=Object(c.useState)(""),O=Object(a.a)(h,2),x=O[0],m=O[1],v=Object(c.useState)(""),f=Object(a.a)(v,2),g=f[0],S=f[1],k=Object(c.useState)(!1),C=Object(a.a)(k,2),D=C[0],z=C[1],y=Object(c.useState)(),w=Object(a.a)(y,2),H=w[0],A=w[1],F=Object(c.useState)(!1),M=Object(a.a)(F,2),B=M[0],T=M[1],G=Object(c.useRef)(),V=Object(c.useRef)(),I=!1;return Object(l.jsxs)(s.a.Fragment,{children:[H&&Object(l.jsx)(d,{title:H.title,message:H.message,onConfirm:function(){A(!1)}}),B?null:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:" Verbindungssuche "}),Object(l.jsxs)("div",{className:"container-searchpage",children:[Object(l.jsx)("input",{list:"haltestellen",type:"text",spellcheck:"false",value:r,onChange:function(e){i(e.target.value)},placeholder:"Start",ref:G}),Object(l.jsx)("button",{className:"button-swap",onClick:function(){var e=G.current.value;i(V.current.value),o(e)},children:Object(l.jsx)(p.a,{size:"3rem"})}),Object(l.jsx)("input",{list:"haltestellen",type:"text",spellcheck:"false",value:u,onChange:function(e){o(e.target.value)},placeholder:"Ziel",ref:V}),Object(l.jsx)("input",{type:"date",value:x,onChange:function(e){m(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"time",value:g,onChange:function(e){S(e.target.value)}})]})]}),Object(l.jsx)("div",{children:D?Object(l.jsx)(N,{onSetStartFormHidden:e.onSetStartFormHidden,onGoBack:function(){T(!1),z(!1)},departureStop:r,destinationStop:u,departureDay:x,departureTime:g}):Object(l.jsxs)("div",{className:"buttons-search-page",children:[Object(l.jsx)("button",{className:"button-search",onClick:function(){0===r.trim().length||0===u.trim().length?(A({title:"Falsche Daten",message:"Bitte geben Sie einen passenden Start- und Zielort ein!"}),I=!0):""===g||""===x?(A({title:"Falsche Daten",message:"Bitte geben Sie einen Abfahrtstag und eine Abfahrtszeit an!"}),I=!0):r===u&&(A({title:"Falsche Daten",message:"Start- und Zielort d\xfcrfen nicht identisch sein!"}),I=!0),I||(T(!0),z(!0))},children:"Suchen"}),Object(l.jsx)("button",{className:"button-search",onClick:function(){e.onGoBack()},type:"submit",children:"Zur\xfcck zur Startseite"})," "]})}),Object(l.jsxs)("datalist",{id:"haltestellen",children:[Object(l.jsx)("option",{value:"An der Lutte"}),Object(l.jsx)("option",{value:"Auf dem Hagen"}),Object(l.jsx)("option",{value:"Baumweg"}),Object(l.jsx)("option",{value:"Bornbreite"}),Object(l.jsx)("option",{value:"B\xfcrgerstra\xdfe"}),Object(l.jsx)("option",{value:"Deisterstra\xdfe"}),Object(l.jsx)("option",{value:"Elmweg"}),Object(l.jsx)("option",{value:"Fritz-Stra\xdfe"}),Object(l.jsx)("option",{value:"Gehrenring"}),Object(l.jsx)("option",{value:"Gr\xfcner Weg"}),Object(l.jsx)("option",{value:"Hauptbahnhof"}),Object(l.jsx)("option",{value:"Hardtweg"}),Object(l.jsx)("option",{value:"Hiroshimaplatz"}),Object(l.jsx)("option",{value:"Kiessee"}),Object(l.jsx)("option",{value:"Klinikum"}),Object(l.jsx)("option",{value:"Klosterweg"}),Object(l.jsx)("option",{value:"Kreuzbergring"}),Object(l.jsx)("option",{value:"Krugstra\xdfe"}),Object(l.jsx)("option",{value:"Landgericht/ Bahnhof"}),Object(l.jsx)("option",{value:"Lutteranger"}),Object(l.jsx)("option",{value:"Reinholdstra\xdfe"}),Object(l.jsx)("option",{value:"Schillerstra\xdfe"}),Object(l.jsx)("option",{value:"Sch\xfctzenplatz"}),Object(l.jsx)("option",{value:"Siekweg"}),Object(l.jsx)("option",{value:"Sollstra\xdfe"}),Object(l.jsx)("option",{value:"Stadtstieg"}),Object(l.jsx)("option",{value:"Tammstra\xdfe"}),Object(l.jsx)("option",{value:"Teichstra\xdfe"}),Object(l.jsx)("option",{value:"Treuenhagen"}),Object(l.jsx)("option",{value:"Tulpenweg"}),Object(l.jsx)("option",{value:"Waldstra\xdfe"})]})]})},g=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!1),j=Object(a.a)(i,2),b=j[0],d=j[1],u=Object(c.useState)(!1),o=Object(a.a)(u,2),h=o[0],O=o[1];return Object(l.jsxs)("div",{children:[s?null:Object(l.jsx)("form",{children:Object(l.jsxs)("header",{className:"StartPage-header",children:[Object(l.jsx)("h1",{className:"logo",children:"Nav2G\xf6"}),Object(l.jsx)("div",{id:"welcomeText",children:Object(l.jsxs)("p",{children:[h?null:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),"Wilkommen. ",Object(l.jsx)("br",{}),"Nutzen sie diese App, um sich in folgender Situation weiterzuhelfen:",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Sie haben sich dazu entschieden, Ihre Freunde in G\xf6ttingen zu besuchen. Nachdem Sie am Hauptbahnhof in G\xf6ttingen angekommen sind, wollen Sie die \xf6ffentlichen Verkehrsmittel nutzen, um zu Ihren Freunden zu fahren.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),'Ihre Freunde haben Ihnen bereits mitgeteilt, dass Sie an der Haltestelle "Treuenhagen" wohnen. Da sie Ihre Freunde nun ungl\xfccklicherweise nicht mehr erreichen k\xf6nnen, haben Sie sich die lokale Mobilit\xe4ts-App \u201eNav2G\xf6\u201c heruntergeladen, um sich vor Ort zurechtzufinden. ',Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{})]}),"Nutzen Sie f\xfcr die Verbindungssuche vom Hauptbahnhof nach Treuenhagen das aktuelle Datum und die aktuelle Uhrzeit.",Object(l.jsx)("br",{})]})}),Object(l.jsx)("h1",{id:"appVersionAnzeige1",children:"App-Version 1"})]})}),b?Object(l.jsx)(f,{onGoBack:function(){d(!1),O(!1)},onSetStartFormHidden:r}):Object(l.jsx)("button",{id:"welcomeTextButton",onClick:function(){d(!0),O(!0)},type:"submit",children:"Weiter"})]})},S=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(g,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),k()},6:function(e,t,n){},8:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.e10a3592.chunk.js.map