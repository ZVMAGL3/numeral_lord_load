import{b as I,d as f,_ as X,m as C,e as Y,g as o,o as v,c as g,n as M,l as k,u as G,F as U,i as E,a as A,q as B,f as L,t as N,s as V}from"./index-a152579d.js";const P="/numberGame/Sprite/TST.png";function F(){const{tileCodeString:_,long:l,specialForces:p,combatUnitAll:u}=I("map",["tileCodeString","long","specialForces","combatUnitAll"]),n=41.5,t=1.7320508075688772,i=f(()=>_.value.length),h=f(()=>Math.ceil(i.value/l.value)),m=f(()=>`min-height:${n/2+n*1.5*h.value}px;min-width:${n/2*t*(l.value*2+1)}px;`),d=f(()=>[(n/2+n*1.5*h.value)*.5,n/2*t*(l.value*2+1)*.5]);function y(a){const r=a%l.value,s=Math.floor(a/l.value);return[2+n*1.5*s,2+n/2*t*(r*2+(s+1)%2),40*Math.sqrt(3),40*2]}function w(a){const[r,s,e,c]=y(a);return`top:${r}px;left:${s}px;width:${e}px;height:${c}px;`}const $=f(()=>a=>`${p.value.has(a)?"font-size: 20px;":""}${u.value.has(a)?"color: aliceblue;":""}`);function b(a,r){const s=n/2*t,e=n*1.5,c=Math.floor(r/e);let x=Math.floor(a/s);if(r%e<n/2){let T=[[Math.floor((x-c%2)/2),c-1],[Math.floor((x-(c+1)%2)/2),c]],W=((x+c)%2*-2+1)*t/3,z=c*e+1-(x+(x+c)%2)*s*W,H=r-a*W;return S(T[z<H?1:0])}else{let T=[Math.floor((x-(c+1)%2)/2),c];return S(T)}}function S(a){const[r,s]=a,e=s*l.value+r;return r>=0&&s>=0&&r<l.value&&e<i.value?e:!1}return{checkerboardSize:m,getTileStyle:w,frameSize:d,getTileIndexFromWindowCoords:b,spanStyle:$}}const q=["src"],O={__name:"aperture",props:{chessman:{type:[Object,Boolean,String,Number,Array]},index:{type:Number}},setup(_){const l=_,{combatUnit:p,specialForces:u,process:n}=I("map",["combatUnit","specialForces","process"]);let t=C(0),i=f(()=>{let m=(t.value-10)/10;return .7-(m>0?m:0)}),h=f(()=>`opacity:${i.value};width:${(t.value*6+10)*(u.value.has(l.index)?.75:1)}%`);return Y(()=>{setInterval(()=>{t.value=(t.value+1)%20},50)}),(m,d)=>_.chessman&&o(p).has(_.index)&&!o(n)?(v(),g("img",{key:0,class:"aperture",src:"/numberGame/Sprite/Ripple.png",style:M(o(h))},null,12,q)):k("",!0)}},R=X(O,[["__scopeId","data-v-15694e42"]]);const D=["src"],j=["src"],J=["src"],K=["onClick"],Q={__name:"battlefield",setup(_){const l=G(),{soldiers:p,tileCodeString:u,selected:n,specialForces:t,process:i,player_ico:h,actioning:m}=I("map",["soldiers","tileCodeString","selected","specialForces","process","player_ico","actioning"]),d={P:"/numberGame/Sprite/TS_Mountain.png",S:"/numberGame/Sprite/TS_Stronghold.png",M:"/numberGame/Sprite/TS0.png",O:"/numberGame/Sprite/TS_Water.png",V:""},{checkerboardSize:y,getTileStyle:w,getTileIndexFromWindowCoords:$,spanStyle:b}=F();function S(a){const r=a.target.getBoundingClientRect(),s=a.clientX-r.left,e=a.clientY-r.top;let c=$(s,e);c!==!1&&(i.value?l.dispatch("map/bonusEvent",c):l.dispatch("map/selectedEvent",c))}return(a,r)=>(v(),g("div",{class:"chessboard",style:M(o(y))},[(v(!0),g(U,null,E(o(p),(s,e)=>(v(),g("div",{key:e,class:"cell",style:M(o(w)(e))},[d[o(u)[e]]?(v(),g("img",{key:0,class:"chessman",src:o(u)[e]!=="S"?d[o(u)[e]]:d.M},null,8,D)):k("",!0),s.dots>0?(v(),g("img",{key:1,class:"chessman",src:`/numberGame/Sprite/${o(h)[s.contingent]}`,style:M(o(t).has(e)?"height:60px;":"")},null,12,j)):k("",!0),d[o(u)[e]]&&o(u)[e]==="S"?(v(),g("img",{key:2,class:"chessman",src:d[o(u)[e]]},null,8,J)):k("",!0),L(R,{chessman:s,index:e},null,8,["chessman","index"]),s.dots>1||o(t).has(e)?(v(),g("span",{key:3,style:M(o(b)(e))},N(s.dots),5)):k("",!0)],4))),128)),o(n).length&&!o(t).has(o(n)[0])?(v(),g("img",{key:0,class:"selected",src:P,style:M(o(w)(o(n)[0]))},null,4)):k("",!0),A("div",{class:"operationsLayer",onClick:B(S,["stop"])},null,8,K)],4))}},ee=X(Q,[["__scopeId","data-v-f4759ec3"]]);const te=()=>{let _=!1,l=0,p=0,u=window.innerWidth/2,n=window.innerHeight/2,t=C(0),i=C(0),h=0,m=0;const{frameSize:d}=F();let y=window.innerWidth,w=window.innerHeight;const $=f(()=>(b(),`transform: translate(-50%, -50%) translate(${t.value}px, ${i.value}px);`));function b(){t.value=d.value[0]<Math.abs(t.value)?d.value[0]*(t.value/Math.abs(t.value)):t.value,i.value=d.value[1]<Math.abs(i.value)?d.value[1]*(i.value/Math.abs(i.value)):i.value}function S(e){_=!0,u=e.clientX,n=e.clientY}function a(e){_&&(t.value+=e.clientX-u,i.value+=e.clientY-n,u=e.clientX,n=e.clientY)}function r(){_=!1}function s(e){l=e.clientX,p=e.clientY,h=l-t.value-window.innerWidth/2,m=p-i.value-window.innerHeight/2}return Y(()=>{window.addEventListener("mousemove",s),window.onresize=()=>{l=window.innerWidth/y*l,p=window.innerHeight/w*p,y=window.innerWidth,w=window.innerHeight,t.value=l-h-window.innerWidth/2,i.value=p-m-window.innerHeight/2,b(),h=l-t.value-window.innerWidth/2,m=p-i.value-window.innerHeight/2}}),V(()=>{window.removeEventListener("mousemove",s),window.onresize=null}),{coordinate:$,mousedown:S,mousemove:a,mouseup:r}};export{ee as b,F as m,te as p};
