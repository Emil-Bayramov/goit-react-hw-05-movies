"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{4139:function(n,e,t){t.d(e,{Ee:function(){return l},YS:function(){return d},iG:function(){return h},ll:function(){return f},xo:function(){return x}});var r,a,i,o,s,c=t(168),u=t(6444),p=t(1087),l=u.ZP.img(r||(r=(0,c.Z)(["\n  border-radius: 5px 5px 0 0;\n  width: 200px;\n  @media (min-width: 300px) {\n    width: 285px;\n  }\n"]))),d=(0,u.ZP)(p.rU)(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n  transition: box-shadow 250ms linear;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),x=u.ZP.div(i||(i=(0,c.Z)(["\n  padding: 20px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"]))),f=u.ZP.h2(o||(o=(0,c.Z)(["\n  font-size: 22px;\n  line-height: 1.33;\n  text-align: center;\n"]))),h=u.ZP.div(s||(s=(0,c.Z)(["\n  margin-top: 15px;\n  display: flex;\n  justify-content: center;\n"])))},9646:function(n,e,t){t.d(e,{b:function(){return h}});var r,a,i=t(7689),o=t(9983),s=t(8617),c=t(4139),u=t(184),p=function(n){var e,t=n.id,r=n.title,a=n.poster,p=n.rating,l=(0,i.TH)();return(0,u.jsxs)(c.YS,{to:"/movies/".concat(t),state:{from:l},children:[(0,u.jsx)(c.Ee,{src:(e=a,null===e?"https://img.icons8.com/pastel-glyph/512/film-reel--v2.png":"https://image.tmdb.org/t/p/w300".concat(e)),alt:r,width:200}),(0,u.jsxs)(c.xo,{children:[(0,u.jsx)(c.ll,{children:r}),(0,u.jsxs)(c.iG,{children:[(0,u.jsx)(o.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=1?"#FF971D":"grey"},children:(0,u.jsx)(s.xiv,{})}),(0,u.jsx)(o.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=2?"#FF971D":"grey"},children:(0,u.jsx)(s.xiv,{})}),(0,u.jsx)(o.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=3?"#FF971D":"grey"},children:(0,u.jsx)(s.xiv,{})}),(0,u.jsx)(o.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=4?"#FF971D":"grey"},children:(0,u.jsx)(s.xiv,{})}),(0,u.jsx)(o.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=5?"#FF971D":"grey"},children:(0,u.jsx)(s.xiv,{})})]})]})]})},l=t(168),d=t(6444),x=d.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n"]))),f=d.ZP.li(a||(a=(0,l.Z)(["\n  width: 200px;\n  background-color: #232526;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 5px;\n\n  @media (min-width: 300px) {\n    width: 285px;\n  }\n"]))),h=function(n){var e=n.movies;return(0,u.jsx)(x,{children:e.map((function(n){var e=n.id,t=n.title,r=n.poster_path,a=n.vote_average;return(0,u.jsx)(f,{children:(0,u.jsx)(p,{id:e,title:t,poster:r,rating:a})},e)}))})}},1246:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,a=t(5861),i=t(9439),o=t(7757),s=t.n(o),c=t(2791),u=t(273),p=t(168),l=t(6444).ZP.h1(r||(r=(0,p.Z)(["\n  margin-bottom: 25px;\n  font-size: 28px;\n  text-align: center;\n  background: -webkit-linear-gradient(#66ffe5, #8093ff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  @media (min-width: 768px) {\n    font-size: 35px;\n  }\n\n  @media (min-width: 1280px) {\n    font-size: 45px;\n  }\n"]))),d=t(184),x=function(n){var e=n.text;return(0,d.jsx)(l,{children:e})},f=t(9646),h=t(2483),v=function(){var n=(0,c.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],o=(0,c.useState)(!1),p=(0,i.Z)(o,2),l=p[0],v=p[1];return(0,c.useEffect)((function(){var n=function(){var n=(0,a.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),n.next=3,(0,u.Df)();case 3:e=n.sent,t=e.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path,vote_average:n.vote_average,release_date:n.release_date}})),r(t),v(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{text:"trending Now"}),l&&(0,d.jsx)(h.a,{}),(0,d.jsx)(f.b,{movies:t})]})}},273:function(n,e,t){t.d(e,{Df:function(){return c},Ph:function(){return p},Wd:function(){return f},tx:function(){return v},ud:function(){return d}});var r=t(5861),a=t(7757),i=t.n(a),o=t(3263);o.Z.defaults.baseURL="https://api.themoviedb.org/";var s="d929b7a4b435aa22496bb0793b172bfc";function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("3/trending/movie/day",{params:{api_key:s}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(i().mark((function n(e){var t,r,a,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.prev=1,n.next=4,(0,o.Z)("3/search/movie",{params:{api_key:s,query:e,page:t}});case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])}))),l.apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("3/movie/".concat(e),{params:{api_key:s,append_to_response:"videos"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("3/movie/".concat(e,"/credits"),{params:{api_key:s}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("3/movie/".concat(e,"/reviews"),{params:{api_key:s}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=home-page.ae1ce0ed.chunk.js.map