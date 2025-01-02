import{m as M,p as R,b as A}from"./positioning-049a9b89.js";import{_ as g,u as b,b as S,h as C,w as P,o as r,c as p,F as I,i as D,g as t,j as N,n as k,a as s,t as v,p as B,k as w,l as x,d as T,e as U,f}from"./index-a152579d.js";const V={class:"outer"},E={class:"chessman_box"},F=["src"],G={class:"playerInfoBox"},j={class:"playe_name"},L={class:"playe_score"},q={__name:"roleData",setup(c){b();const{fraction:u,player_name:_,actioning:i,player_num:d,player_ico:m}=S("map",["fraction","player_name","actioning","player_num","player_ico"]);let l=C(new Array(d.value).fill(0));function $(h){let a=h.map((o,e)=>({value:o,index:e}));return a.sort((o,e)=>e.value-o.value),a.map(o=>o.index)}return P(u,(h,a)=>{$(h).forEach((e,z)=>l[e]=(z-e)*52)},{deep:!0}),(h,a)=>(r(),p("div",V,[(r(!0),p(I,null,D(t(d),(o,e)=>(r(),p("div",{class:N(`player_box ${e===t(i)?"background":""}`),style:k(`top:${t(l)[e]}px`)},[s("div",E,[s("img",{class:"chessman",src:`/numberGame/Sprite/${t(m)[e]}`},null,8,F)]),s("div",G,[s("div",j,v(t(_)[e]),1),s("div",L,v(t(u)[e]),1)])],6))),256))]))}},H=g(q,[["__scopeId","data-v-bdb56155"]]),J="/numberGame/Sprite/IconMenu.png",y=c=>(B("data-v-c4d292f0"),c=c(),w(),c),K={class:"outer"},O=y(()=>s("div",{class:"topBox scoreboard"},[s("img",{src:J,alt:""})],-1)),Q=y(()=>s("div",{class:"Placeholder"},null,-1)),W={class:"topBox people_num"},X=y(()=>s("div",{class:"title"},"人数",-1)),Y={class:"people_num_data"},Z={class:"topBox round"},ss=y(()=>s("div",{class:"title"},"回合",-1)),ts={class:"round_data"},os={class:"topBox score"},es=y(()=>s("div",{class:"title"},"点数",-1)),as={class:"score_data"},ns=y(()=>s("div",{class:"Placeholder"},null,-1)),cs=y(()=>s("div",{class:"topBox setUp"}," 设置 ",-1)),_s={__name:"round_points",setup(c){const{fraction:u,score:_,actioning:i,player_num:d,roundScore:m}=S("map",["fraction","score","actioning","player_num","roundScore"]);return(l,$)=>(r(),p("div",K,[O,Q,s("div",W,[X,s("div",Y,v(t(d)),1)]),s("div",Z,[ss,s("div",ts,v(t(d)),1)]),s("div",os,[es,s("div",as,[s("span",null,v(t(_)[t(i)]),1),s("span",null,"(+"+v(t(m)[t(i)])+")",1)])]),ns,cs]))}},is=g(_s,[["__scopeId","data-v-c4d292f0"]]);const n=c=>(B("data-v-1cab002d"),c=c(),w(),c),ds={class:"outer"},ls={class:"status"},rs=n(()=>s("span",{class:"text"},"点击地块",-1)),ps=n(()=>s("span",{class:"c_azure"},"扩张",-1)),us=n(()=>s("span",{class:"text"},",剩余",-1)),ms={class:"c_orange"},hs=n(()=>s("span",{class:"text"},"块",-1)),vs=n(()=>s("div",{class:"end"}," 点击这里结束扩张 ",-1)),$s={class:"status"},ys=n(()=>s("span",{class:"text"},"点击地块",-1)),fs=n(()=>s("span",{class:"c_green"},"成长",-1)),gs=n(()=>s("span",{class:"text"},",剩余",-1)),xs={class:"c_purple"},bs=n(()=>s("span",{class:"text"},"点",-1)),Ss=n(()=>s("div",{class:"end"}," 点击这里结束成长 ",-1)),Is={key:2,class:"content"},ks=n(()=>s("div",{class:"status c_red"}," 其他玩家行动中 ",-1)),Bs=n(()=>s("div",{class:"end"}," 点击这里加速 ",-1)),ws=[ks,Bs],zs={__name:"actionTips",setup(c){const u=b(),{actioning:_,operable:i,score:d,combatUnit:m,process:l}=S("map",["actioning","operable","score","combatUnit","process"]);let $=()=>{u.dispatch("map/endBattleRound")},h=()=>{u.dispatch("map/endPointAllocation")};return(a,o)=>(r(),p("div",ds,[t(l)===0&&t(i).has(t(_))?(r(),p("div",{key:0,onClick:o[0]||(o[0]=(...e)=>t($)&&t($)(...e)),class:"content"},[s("div",ls,[rs,ps,us,s("span",ms,v(t(m).size),1),hs]),vs])):x("",!0),t(l)===1&&t(i).has(t(_))?(r(),p("div",{key:1,onClick:o[1]||(o[1]=(...e)=>t(h)&&t(h)(...e)),class:"content"},[s("div",$s,[ys,fs,gs,s("span",xs,v(t(d)[t(_)]),1),bs]),Ss])):x("",!0),t(i).has(t(_))?x("",!0):(r(),p("div",Is,ws))]))}},Ms=g(zs,[["__scopeId","data-v-1cab002d"]]);const Rs={class:"top"},As={class:"middle"},Cs={class:"buttom"},Ps={__name:"gameRoom",setup(c){const u=b(),{checkerboardSize:_}=M(),{coordinate:i,mousedown:d,mousemove:m,mouseup:l}=R();let $=T(()=>`${_.value}${i.value}`);return U(()=>{u.dispatch("map/initialization")}),(h,a)=>(r(),p(I,null,[s("div",{class:"outermost_layer",onMousedown:a[0]||(a[0]=(...o)=>t(d)&&t(d)(...o)),onMousemove:a[1]||(a[1]=(...o)=>t(m)&&t(m)(...o)),onMouseup:a[2]||(a[2]=(...o)=>t(l)&&t(l)(...o))},[s("div",{class:"checkerboard",style:k(t($))},[f(A)],4)],32),s("div",Rs,[f(is)]),s("div",As,[f(H)]),s("div",Cs,[f(Ms)])],64))}},Ts=g(Ps,[["__scopeId","data-v-e621adda"]]);export{Ts as default};
