(this["webpackJsonpreact-router-app"]=this["webpackJsonpreact-router-app"]||[]).push([[0],{302:function(e,t,a){},440:function(e,t,a){},443:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(53),c=a.n(i),s=(a(302),a(262)),o=a(33),l=a(16),j=a(5),d=a(37),h=a(6),b=a(264),x=a(511),O=a(498),u=a(509),p=a(516),m=a(514),g=a(517),f=a(519),v=a(157),A=a(499),y=a(518),w=a(520),S=a(510),E=a(515),M=a(513),C=a(259),P=a.n(C),W=a(260),B=a.n(W),F=a(505),D=a(488),I=a(490),k=a(525),U=a(237),G=a.n(U),Y=a(238),T=a.n(Y),H=a(239),J=a.n(H),L=a(240),z=a.n(L),q=a(127),Q=a.n(q),R=a(241),V=a.n(R),X=a(1),N=Object(X.jsxs)("div",{children:[Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(G.a,{})}),Object(X.jsx)(I.a,{primary:"Dashboard"})]}),Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(T.a,{})}),Object(X.jsx)(I.a,{primary:"Profile"})]}),Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(J.a,{})}),Object(X.jsx)(I.a,{primary:"Reports"})]}),Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(z.a,{})}),Object(X.jsx)(I.a,{primary:"Integrations"})]})]}),K=Object(X.jsxs)("div",{children:[Object(X.jsx)(k.a,{inset:!0,children:"Quick reports"}),Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(Q.a,{})}),Object(X.jsx)(I.a,{primary:"Current month"})]}),Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(Q.a,{})}),Object(X.jsx)(I.a,{primary:"Last quarter"})]}),Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(Q.a,{})}),Object(X.jsx)(I.a,{primary:"Year-to-date"})]}),Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(Q.a,{})}),Object(X.jsx)(I.a,{primary:"5 Years"})]}),Object(X.jsxs)(F.a,{button:!0,component:"a",href:"/login",children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(V.a,{})}),Object(X.jsx)(I.a,{primary:"Log out"})]})]});a(54),a(492),a(493),a(255),a(256),a(55),a(266);var Z=function(e){return Object(X.jsx)(v.a,{component:"h2",variant:"h6",color:"darkgreen",gutterBottom:!0,children:e.children})};function _(e,t){return{time:e,amount:t}}_("00:00",0),_("03:00",300),_("06:00",600),_("09:00",800),_("12:00",1500),_("15:00",2e3),_("18:00",2400),_("21:00",2400),_("24:00",void 0);var $=new Array(200).fill(!0),ee={afterDatasetsDraw:function(e,t){var a=e.chartArea,n=e._metasets[0].data[0].outerRadius,r=e._metasets[e._metasets.length-1].data[0].innerRadius,i=e.ctx,c=a.right-a.left,s=a.bottom-a.top,o=c/2,l=s/2;o+=te.layout.padding.left,l+=te.layout.padding.top;var j,d=140,h=1.5,b=1.2;s>0?(h*=s/d,b*=s/d,s/d,s/d):(h=0,b=0,0,0),function(){var e=42,t=r/e*30,a=r/e*6,n=r/e*6;i.font="normal "+t+"px Arial",i.fillStyle="#25BDE2",i.strokeStyle="#109DC2",i.strokeWidth="5px",i.textAlign="center",i.textBaseline="middle";var c=parseFloat(ae.datasets[0].spiScore).toFixed(3);i.fillText(c,o,l),i.strokeText(c,o,l),i.font="normal "+a+"px Arial",i.fillStyle="black",i.fillText("Sustainability",o,l-r/e*33),i.fillText("Performance",o,l-r/e*26),i.fillText("Index",o,l-r/e*19),i.font="normal "+n+"px Arial",i.fillStyle="black",i.fillText("strive2thrive.earth",o,l+r/e*21)}();var x,O=ae.datasets[0].alloc.length,u=0,p=0;for(j=0;j<O;j+=1)0!=$[j]&&(u+=ae.datasets[0].alloc[j],p++);x=p;var m=[];for(p=0,j=0;j<=O;j+=1)0!=$[j]&&(m[p]=ae.datasets[0].alloc[j]/u*360,p++);var g=0,f=[];for(j=0;j<x;j+=1){g=0;for(var v=0;v<j;v+=1)g+=m[v];f[j]=g}g=0;var A=[];for(j=0;j<x;j+=1){for(g=0,v=0;v<j;v+=1)g+=m[v];A[j]=g+m[v]/2}var y=[];for(p=0,j=0;j<O;j+=1)0!=$[j]&&(y[p]=ae.datasets[0].impact[j],p++);var w=[];for(p=0,j=0;j<O;j+=1)0!=$[j]&&(w[p]=ae.datasets[0].inner[j],p++);var S=[];for(p=0,j=0;j<O;j+=1)0!=$[j]&&(S[p]=ae.datasets[0].outer[j],p++);for(var E=0,M=Math.PI/180,C=[],P=[],W=.6*n,B=r,F=0;F<p;F+=1){E=360-A[F];var D=y[F]/(S[F]-w[F]);""==D&&(D=1e-5),D>=1.4&&(D=1.4),D<=-.3&&(D=-.3),C[F]=o+(D*W+B)*Math.sin((E+90)*M),P[F]=l+(D*W+B)*Math.cos((E+90)*M)}for(i.beginPath(),i.moveTo(C[0],P[0]),i.lineWidth=b,i.strokeStyle="#00f",i.lineJoin="round",j=0;j<p;j++)i.lineTo(C[j],P[j]);for(i.stroke(),i.beginPath(),i.moveTo(C[0],P[0]),i.strokeStyle="#00f",i.lineTo(C[p-1],P[p-1]),i.stroke(),h<0&&(h=0),i.lineWidth=1,j=0;j<p;j++)i.beginPath(),i.moveTo(C[j]+h,P[j]),i.strokeStyle="black",i.arc(C[j],P[j],h,0,2*Math.PI,!0),i.stroke(),i.fillStyle="#ff0",i.fill();i.beginPath(),i.moveTo(C[0]+h,P[0]),i.arc(C[0],P[0],h,0,2*Math.PI,!0),i.fillStyle="#0f0",i.fill(),i.beginPath(),i.moveTo(C[p-1]+h,P[p-1]),i.arc(C[p-1],P[p-1],h,0,2*Math.PI,!0),i.fillStyle="red",i.stroke(),i.fill()}},te={responsive:!0,maintainAspectRatio:!0,hoverBorderColor:"#000",hoverBorderWidth:3,borderColor:"White",borderWidth:1,borderAlign:"inner",cutout:"40%",rotation:90,plugins:{legend:{position:"bottom",display:!1,maxWidth:200,onClick:function(e,t){var a=t.index;0==$[a]?$[a]=!0:$[a]=!1,this.chart.update()}},tooltip:{enabled:!0,callbacks:{label:function(e,t){var a=e.dataIndex,n=e.label;return n+" SPi: "+ae.datasets[0].spi[a]}}}},layout:{padding:{left:30,right:30,top:70,bottom:70}}},ae={datasets:[{label:"Ciambella Chart",backgroundColor:["#D0D0D0","#C0C0C0","#B0B0B0","#8FC5FE","#72B3F6","#55A2EE","#3990E6","#1C7FDE","#006ED6","#C0E6B5","#A4E4B5","#89D2A6","#6DC097","#52AF87","#369D78","#1B8B69","#007A5A","#FDA1A0","#F69796","#F08E8D","#EA8583","#E47C7A","#DE7370","#D76967","#D1605E","#CB5754","#C54E4B","#BF4541","#B93C38","#B2322F","#AC2925","#A6201C","#A01712","#9A0E09","#940500","#840300"],data:[50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84],alloc:[50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84],inner:[1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1],outer:[11,11,11,10,10,11,11,11,10,10,11,11,11,11,11,10,10,11,11,11,10,10,11,11,11,11,11,11,10,10,11,11,11,10,10,11,11],impact:[.01,10,-2,19,.1,1,10,-2,14,.1,1,10,19,10,-2,14,.1,1,19,-2,14,.1,1,19,10,19,10,-2,14,.1,1,19,-2,14,.1,1,19],topicId:["101","102","103","201","202","203","204","205","206","301","302","303","304","305","306","307","308","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419"],spi:[.001,1,-.181,1.1,.001,.1,1,-.181,1.4,.001,.1,1,1.9,1,-.181,1.4,.001,.1,1.9,-.181,1.4,.001,.1,1.9,1,1.9,1,-.181,1.4,.001,.1,1.9,-.181,1.4,.001,.1,1.9],spiScore:1.358,entity:"Gadgets With Vitality",stockCode:"GWVWH",classification:"GRIS"}],labels:["Foundation","General Disclosures","Management Approach","Economic Performance","Market Presence","Indirect Economic Impacts","Procurement Practices","Anti-corruption","Anti-competitive Behavior","Materials","Energy","Water","Biodiversity","Emissions","Effluents and Waste","Environmental Compliance","Supplier Environmental Assessment","Employment","Labor/Management Relations","Occupational Health and Safety","Training and Education","Diversity and Equal Opportunity","Non-discrimination","Freedom of Association and Collective Bargaining","Child Labor","Forced or Compulsory Labor","Security Practices","Rights of Indigenous Peoples","Human Rights Assessment","Local Communities","Supplier Social Assessment","Public Policy","Customer Health Safety","Marketing and Labelling","Customer Privacy","Socioeconomic Compliance"]};function ne(){return Object(X.jsxs)(n.Fragment,{children:[Object(X.jsxs)(Z,{children:[ae.datasets[0].entity," - ",ae.datasets[0].stockCode]}),Object(X.jsx)(v.a,{component:"p",variant:"h4"}),Object(X.jsx)(Z,{children:"SPI Score"}),Object(X.jsx)(v.a,{component:"p",variant:"h4",children:"1.358"}),Object(X.jsx)(v.a,{color:"text.secondary",sx:{flex:1}}),Object(X.jsx)(Z,{children:"Rank"}),Object(X.jsx)(v.a,{component:"p",variant:"h4",children:"#1345"})]})}var re=a(526),ie=a(530),ce=a(529),se=a(527),oe=a(528);function le(e,t,a,n,r,i){return{id:e,date:t,name:a,shipTo:n,paymentMethod:r,amount:i}}var je=[le(0,"50","1","11","0.01","0.001"),le(0,"60","1","10","0.01","1"),le(0,"65","1","-2","19","-.0181"),le(0,"22.5","1","19","0.1","1.5")];function de(){return Object(X.jsxs)(n.Fragment,{children:[Object(X.jsx)(Z,{children:"Material Topics"}),Object(X.jsxs)(re.a,{size:"small",children:[Object(X.jsx)(se.a,{children:Object(X.jsxs)(oe.a,{children:[Object(X.jsx)(ce.a,{children:"Allocation"}),Object(X.jsx)(ce.a,{children:"Inner"}),Object(X.jsx)(ce.a,{children:"Outer"}),Object(X.jsx)(ce.a,{children:"Impact"}),Object(X.jsx)(ce.a,{align:"right",children:"SPi"})]})}),Object(X.jsx)(ie.a,{children:je.map((function(e){return Object(X.jsxs)(oe.a,{children:[Object(X.jsx)(ce.a,{children:e.date}),Object(X.jsx)(ce.a,{children:e.name}),Object(X.jsx)(ce.a,{children:e.shipTo}),Object(X.jsx)(ce.a,{children:e.paymentMethod}),Object(X.jsx)(ce.a,{align:"right",children:e.amount})]},e.id)}))})]})]})}var he=a(267),be=(a(67),a(440),a(84)),xe=a.n(be);function Oe(e){return Object(X.jsxs)(v.a,Object(d.a)(Object(d.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(X.jsx)(M.a,{color:"inherit",href:"https://strive2thrive.earth/",children:"Strive2Thrive.Earth"})," ",(new Date).getFullYear(),"."]}))}var ue=Object(h.a)(m.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(d.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},a&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),pe=Object(h.a)(u.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return{"& .MuiDrawer-paper":Object(d.a)({position:"relative",whiteSpace:"nowrap",width:240,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box"},!a&&Object(j.a)({overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},t.breakpoints.up("sm"),{width:t.spacing(9)}))}})),me=Object(b.a)();function ge(){var e=n.useState(!0),t=Object(l.a)(e,2),a=t[0],r=t[1],i=function(){r(!a)};xe()((function(){console.log("load event"),function(){xe()("#legendBox").html(""),xe()("#legendBox").append("<table class='legendTable'>");for(var e=0;e<ae.datasets[0].alloc.length;e++)xe()("#legendBox").append("<tr><td style='height: 40px;' valign='middle'><button onclick='toggleTopic("+e+");' style='background: "+ae.datasets[0].backgroundColor[e]+"; width: 45px; height: 30px; border: 0; margin-bottom: 0px;'></button></td><td style='padding-left: 10px;' valign='middle'><span id='label"+e+"'  onclick='toggleTopic("+e+");'>"+ae.datasets[0].topicId[e]+" &nbsp; "+ae.labels[e]+"</span></td></tr>");xe()("#legendBox").append("</table>")}()}));return Object(X.jsx)(x.a,{theme:me,children:Object(X.jsxs)(p.a,{sx:{display:"flex"},children:[Object(X.jsx)(O.a,{}),Object(X.jsx)(ue,{position:"absolute",open:a,children:Object(X.jsxs)(g.a,{sx:{pr:"24px"},children:[Object(X.jsx)(y.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:i,sx:Object(d.a)({marginRight:"36px"},a&&{display:"none"}),children:Object(X.jsx)(P.a,{})}),Object(X.jsx)(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Dashboard"}),"THRIVE Platform - V3.0"]})}),Object(X.jsxs)(pe,{variant:"permanent",open:a,children:[Object(X.jsx)(g.a,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:Object(X.jsx)(y.a,{onClick:i,children:Object(X.jsx)(B.a,{})})}),Object(X.jsx)(A.a,{}),Object(X.jsx)(f.a,{children:N}),Object(X.jsx)(A.a,{}),Object(X.jsx)(f.a,{children:K})]}),Object(X.jsxs)(p.a,{component:"main",sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900]},flexGrow:1,height:"100vh",overflow:"auto"},children:[Object(X.jsx)(g.a,{}),Object(X.jsxs)(w.a,{maxWidth:"lg",sx:{mt:4,mb:4},children:[Object(X.jsxs)(S.a,{container:!0,spacing:3,children:[Object(X.jsx)(S.a,{item:!0,xs:12,md:8,lg:7,children:Object(X.jsx)(E.a,{sx:{p:2,display:"flex",flexDirection:"column",height:660},children:Object(X.jsx)(he.a,{id:"doughnutChart",data:ae,options:te,plugins:[ee]})})}),Object(X.jsx)(S.a,{item:!0,xs:12,md:4,lg:5,children:Object(X.jsxs)(E.a,{sx:{p:2,display:"flex",flexDirection:"column",height:660},children:[Object(X.jsxs)(v.a,{id:"legendTitle",component:"h1",children:["Classification: ",ae.datasets[0].classification]}),Object(X.jsx)(v.a,{id:"legendBox",component:"h1",variant:"body2",color:"inherit",sx:{flexGrow:1},overflow:"auto"})]})}),Object(X.jsx)(S.a,{item:!0,xs:12,md:4,lg:5,children:Object(X.jsx)(E.a,{sx:{p:2,display:"flex",flexDirection:"column",height:240},children:Object(X.jsx)(ne,{})})}),Object(X.jsx)(S.a,{item:!0,xs:12,children:Object(X.jsx)(E.a,{sx:{p:2,display:"flex",flexDirection:"column"},children:Object(X.jsx)(de,{})})})]}),Object(X.jsx)(Oe,{sx:{pt:4}})]})]})]})})}function fe(){return Object(X.jsx)(ge,{})}var ve=a(523),Ae=a(506),ye=a(522),we=a(504),Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACwCAMAAABpYk/hAAAAB3RJTUUH5AkUDS4abdcyiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBQTFRFAAAAADlrCEJrEEJzEEpzEFpzGGNzIXN7KVJ7KXt7KYR7MWOMMZSEOWOMOZyEOaWEOa2EQpSMQpyMQq2EQq2MQrWMSmuUSrWMSr2MSsaMUqWUUq2UUs6MUtaUWnucWqWcWq2cWt6UWueUY4SlY96UY+eUY+eca4yla7Wla72la96ca+eca+elc86tc9atc+ecc+ele5S1e72te96te+ele+ethMa1hM61hOethOe1jKW9jL29jOetjOe1jO+1lK29lMa9lM69lOe1lO+9nK3GnLXGnO+9pbXGpc7Gpe+9rb3OrdbOre/Gre/Ote/Ote/WtffOvc7Wvc7evd7Wve/OvffWxvfWztbnzt7nzufezvfe1u/n1vfe1vfn3ufv3vfn3v/n3v/v5+/35/fv5//v7+/37/f37//v7//39/f/9//39///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////b1yLZAAAAAF0Uk5TAEDm2GYAAA6vSURBVHja7V37TyJLFh5cZsYx6GQ1Mo6rrOQaMWZ3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";function Ee(e){return Object(X.jsxs)(v.a,Object(d.a)(Object(d.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(X.jsx)(M.a,{color:"inherit",href:"https://strive2thrive.earth/",children:"Strive2Thrive.Earth"})," ",(new Date).getFullYear(),"."]}))}var Me=Object(b.a)();function Ce(){return Object(X.jsx)(x.a,{theme:Me,children:Object(X.jsxs)(S.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(X.jsx)(O.a,{}),Object(X.jsx)(S.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://platform.strive2thrive.earth/images/thrive-start-header-bg-cr1.jpg)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(X.jsx)(S.a,{item:!0,xs:12,sm:8,md:5,component:E.a,elevation:6,square:!0,children:Object(X.jsxs)(p.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(X.jsx)("img",{src:Se,alt:"THRIVE",style:{marginBottom:50}}),Object(X.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(X.jsxs)(p.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},sx:{mt:1},children:[Object(X.jsx)(Ae.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(X.jsx)(Ae.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(X.jsx)(ye.a,{control:Object(X.jsx)(we.a,{value:"remember",color:"primary"}),label:"Stay logged in"}),Object(X.jsx)(ve.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(X.jsxs)(S.a,{container:!0,children:[Object(X.jsx)(S.a,{item:!0,xs:!0,children:Object(X.jsx)(M.a,{href:"/get-new-password",variant:"body2",children:"Forgot password?"})}),Object(X.jsx)(S.a,{item:!0,children:Object(X.jsx)(M.a,{href:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(X.jsx)(S.a,{container:!0,children:Object(X.jsx)(S.a,{item:!0,children:Object(X.jsx)(M.a,{href:"/dashboard",variant:"body2",children:"Go to dashboard"})})}),Object(X.jsx)(Ee,{sx:{mt:5}})]})]})})]})})}var Pe=a(507),We=a(524),Be=a(521),Fe=a(500);function De(e){return Object(X.jsxs)(v.a,Object(d.a)(Object(d.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(X.jsx)(M.a,{color:"inherit",href:"https://strive2thrive.earth/",children:"Strive2Thrive.Earth"})," ",(new Date).getFullYear(),"."]}))}var Ie=Object(b.a)();function ke(){var e="";return Object(X.jsx)(x.a,{theme:Ie,children:Object(X.jsxs)(w.a,{component:"main",maxWidth:"xs",children:[Object(X.jsx)(O.a,{}),Object(X.jsxs)(p.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(X.jsx)("img",{src:Se,alt:"THRIVE",style:{marginBottom:50}}),Object(X.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(X.jsxs)(p.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({fullName:t.get("fullName"),title:t.get("title"),email:t.get("email"),password:t.get("password")})},sx:{mt:3},children:[Object(X.jsxs)(S.a,{container:!0,spacing:2,children:[Object(X.jsx)(S.a,{item:!0,xs:12,sm:6,children:Object(X.jsxs)(Be.a,{fullWidth:!0,children:[Object(X.jsx)(Pe.a,{id:"title-select-label",children:"Title"}),Object(X.jsxs)(Fe.a,{labelId:"title-select-label",id:"title",value:e,label:"Title",onChange:function(t){e=t.target.value,console.log(e)},children:[Object(X.jsx)(We.a,{value:"Mr",children:"Mr"}),Object(X.jsx)(We.a,{value:"Mrs",children:"Mrs"}),Object(X.jsx)(We.a,{value:"Miss",children:"Miss"}),Object(X.jsx)(We.a,{value:"Ms",children:"Ms"}),Object(X.jsx)(We.a,{value:"Dr",children:"Dr"}),Object(X.jsx)(We.a,{value:"Sir",children:"Sir"})]})]})}),Object(X.jsx)(S.a,{item:!0,xs:12,sm:6,children:Object(X.jsx)(Ae.a,{required:!0,fullWidth:!0,id:"fullName",label:"Full Name",name:"fullName"})}),Object(X.jsx)(S.a,{item:!0,xs:12,children:Object(X.jsx)(Ae.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(X.jsx)(S.a,{item:!0,xs:12,children:Object(X.jsx)(Ae.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),Object(X.jsx)(ve.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(X.jsx)(S.a,{container:!0,justifyContent:"flex-end",children:Object(X.jsx)(S.a,{item:!0,children:Object(X.jsx)(M.a,{href:"login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(X.jsx)(De,{sx:{mt:5}})]})})}function Ue(){return Object(X.jsx)(s.a,{children:Object(X.jsxs)("div",{children:[Object(X.jsx)("nav",{}),Object(X.jsxs)(o.c,{children:[Object(X.jsx)(o.a,{path:"/about",children:Object(X.jsx)(Ge,{})}),Object(X.jsx)(o.a,{path:"/dashboard",children:Object(X.jsx)(fe,{})}),Object(X.jsx)(o.a,{path:"/get-new-password",children:Object(X.jsx)(Ye,{})}),Object(X.jsx)(o.a,{path:"/register",children:Object(X.jsx)(ke,{})}),Object(X.jsx)(o.a,{path:"/login",children:Object(X.jsx)(Ce,{})}),Object(X.jsx)(o.a,{path:"/",children:Object(X.jsx)(Ce,{})})]})]})})}function Ge(){return Object(X.jsx)("h2",{children:"About"})}function Ye(){return Object(X.jsx)("h2",{children:"Choose a new passoword."})}var Te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,534)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(X.jsx)(r.a.StrictMode,{children:Object(X.jsx)(Ue,{})}),document.getElementById("root")),Te()}},[[443,1,2]]]);
//# sourceMappingURL=main.16513c8c.chunk.js.map