"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{1454:function(n,t,r){r.d(t,{a:function(){return i}});var e,a=r(5243),o=r(168),u=r(6444).ZP.div(e||(e=(0,o.Z)(["\n  position: fixed;\n  top: 40%;\n  left: 50%;\n  margin: 0 auto;\n  transform: translateX(-50%);\n  z-index: 9999;\n"]))),c=r(184),i=function(){return(0,c.jsx)(u,{children:(0,c.jsx)(a.g4,{height:"80",width:"80",radius:"9",color:"#ffd600",ariaLabel:"three-dots-loading",visible:!0})})}},4387:function(n,t,r){r.r(t),r.d(t,{default:function(){return y}});var e,a,o,u,c=r(5861),i=r(9439),s=r(7757),f=r.n(s),p=r(2791),d=r(7689),l=r(168),v=r(6444),h=v.ZP.ul(e||(e=(0,l.Z)(["\n  margin-bottom: 40px;\n"]))),x=v.ZP.li(a||(a=(0,l.Z)(["\n  margin-bottom: 20px;\n  padding: 20px;\n  border-bottom: 1px solid rgb(78, 116, 193);\n  list-style: none;\n  background-color: #6096b4;\n  border-radius: 20px;\n"]))),g=v.ZP.h2(o||(o=(0,l.Z)(["\n  color: #0a2647;\n  font-size: 28px;\n  margin-top: 6px;\n  margin-bottom: 10px;\n"]))),m=v.ZP.p(u||(u=(0,l.Z)(["\n  color: #fff;\n  font-size: 14px;\n  font-weight: 300;\n  margin-bottom: 14px;\n"]))),Z=r(2690),b=r(3035),w=r(1454),k=r(184),y=function(){var n=(0,p.useState)([]),t=(0,i.Z)(n,2),r=t[0],e=t[1],a=(0,p.useState)(!1),o=(0,i.Z)(a,2),u=o[0],s=o[1],l=(0,p.useState)(null),v=(0,i.Z)(l,2),y=v[0],_=v[1],j=(0,d.UO)().movieId;return(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),_(null),n.next=5,(0,Z.tx)(j);case 5:t=n.sent,e(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),_(n.t0.message);case 12:return n.prev=12,s(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[j]),(0,k.jsxs)(h,{children:[y&&(0,k.jsx)(b.Z,{text:"No Data Found"}),0===r.length&&(0,k.jsx)(b.Z,{text:"We dont have any reviews for this movie"}),u&&(0,k.jsx)(w.a,{}),r.map((function(n){var t=n.author,r=n.content,e=n.id;return(0,k.jsxs)(x,{children:[(0,k.jsx)(g,{children:t}),(0,k.jsx)(m,{children:r})]},e)}))]})}},2690:function(n,t,r){r.d(t,{Hg:function(){return i},M1:function(){return p},TP:function(){return f},tx:function(){return d},uY:function(){return s}});var e=r(5861),a=r(7757),o=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="213f597963ca958bdd3fa992f56dc364",i=function(){var n=(0,e.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e,a,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,n.next=3,u.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&page=").concat(r));case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return r=n.sent,e=r.data,console.log(e),n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3035:function(n,t,r){r.d(t,{Z:function(){return c}});var e,a=r(168),o=r(6444).ZP.h3(e||(e=(0,a.Z)(["\n  text-align: center;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 300;\n"]))),u=r(184),c=function(n){var t=n.text;return(0,u.jsx)(o,{children:t})}}}]);
//# sourceMappingURL=387.18bd86f2.chunk.js.map