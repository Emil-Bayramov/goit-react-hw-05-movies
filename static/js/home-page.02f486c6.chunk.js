"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{2315:function(n,e,t){t.d(e,{X:function(){return c}});var r,a=t(168),i=t(6444).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 40px;\n  font-size: 36px;\n  text-align: center;\n  background: -webkit-linear-gradient(#66ffe5, #8093ff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  @media (min-width: 768px) {\n    font-size: 50px;\n  }\n\n  @media (min-width: 1280px) {\n    font-size: 80px;\n  }\n"]))),o=t(184),c=function(n){var e=n.text;return(0,o.jsx)(i,{children:e})}},4139:function(n,e,t){t.d(e,{Ee:function(){return l},YS:function(){return d},iG:function(){return h},ll:function(){return x},xo:function(){return f}});var r,a,i,o,c,s=t(168),u=t(6444),p=t(1087),l=u.ZP.img(r||(r=(0,s.Z)(["\n  border-radius: 5px 5px 0 0;\n  width: 200px;\n  @media (min-width: 300px) {\n    width: 285px;\n  }\n"]))),d=(0,u.ZP)(p.rU)(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n  transition: box-shadow 250ms linear;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),f=u.ZP.div(i||(i=(0,s.Z)(["\n  padding: 20px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"]))),x=u.ZP.h2(o||(o=(0,s.Z)(["\n  font-size: 22px;\n  line-height: 1.33;\n  text-align: center;\n"]))),h=u.ZP.div(c||(c=(0,s.Z)(["\n  margin-top: 15px;\n  display: flex;\n  justify-content: center;\n"])))},9999:function(n,e,t){t.d(e,{b:function(){return p}});var r=t(7689),a=t(9983),i=t(8617),o=t(4139),c=t(184),s=function(n){var e,t=n.id,s=n.title,u=n.poster,p=n.rating,l=(0,r.TH)();return(0,c.jsxs)(o.YS,{to:"/movies/".concat(t),state:{from:l},children:[(0,c.jsx)(o.Ee,{src:(e=u,null===e?"https://img.icons8.com/pastel-glyph/512/film-reel--v2.png":"https://image.tmdb.org/t/p/w300".concat(e)),alt:s,width:200}),(0,c.jsxs)(o.xo,{children:[(0,c.jsx)(o.ll,{children:s}),(0,c.jsxs)(o.iG,{children:[(0,c.jsx)(a.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=1?"#FF971D":"grey"},children:(0,c.jsx)(i.xiv,{})}),(0,c.jsx)(a.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=2?"#FF971D":"grey"},children:(0,c.jsx)(i.xiv,{})}),(0,c.jsx)(a.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=3?"#FF971D":"grey"},children:(0,c.jsx)(i.xiv,{})}),(0,c.jsx)(a.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=4?"#FF971D":"grey"},children:(0,c.jsx)(i.xiv,{})}),(0,c.jsx)(a.Pd.Provider,{value:{size:25,color:Math.round(p/2)>=5?"#FF971D":"grey"},children:(0,c.jsx)(i.xiv,{})})]})]})]})},u=t(8266),p=function(n){var e=n.movies;return(0,c.jsx)(u.a,{children:e.map((function(n){var e=n.id,t=n.title,r=n.poster_path,a=n.vote_average;return(0,c.jsx)(u.Z,{children:(0,c.jsx)(s,{id:e,title:t,poster:r,rating:a})},e)}))})}},8266:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return c}});var r,a,i=t(168),o=t(6444),c=o.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n"]))),s=o.ZP.li(a||(a=(0,i.Z)(["\n  width: 200px;\n  background-color: #232526;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 5px;\n\n  @media (min-width: 300px) {\n    width: 285px;\n  }\n"])))},3983:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),i=t(7757),o=t.n(i),c=t(2791),s=t(273),u=t(2315),p=t(9999),l=t(2483),d=t(184);e.default=function(){var n=(0,c.useState)([]),e=(0,a.Z)(n,2),t=e[0],i=e[1],f=(0,c.useState)(!1),x=(0,a.Z)(f,2),h=x[0],v=x[1];return(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),n.next=3,(0,s.Df)();case 3:e=n.sent,t=e.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path,vote_average:n.vote_average,release_date:n.release_date}})),i(t),v(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.X,{text:"Trending today"}),h&&(0,d.jsx)(l.a,{}),(0,d.jsx)(p.b,{movies:t})]})}},273:function(n,e,t){t.d(e,{DU:function(){return w},Df:function(){return s},Ph:function(){return p},Wd:function(){return x},tx:function(){return v},ud:function(){return d}});var r=t(5861),a=t(7757),i=t.n(a),o=t(3263);o.Z.defaults.baseURL="https://api.themoviedb.org/";var c="d929b7a4b435aa22496bb0793b172bfc";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("3/trending/movie/day",{params:{api_key:c}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(i().mark((function n(e){var t,r,a,s=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,n.prev=1,n.next=4,(0,o.Z)("3/search/movie",{params:{api_key:c,query:e,page:t}});case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])}))),l.apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("3/movie/".concat(e),{params:{api_key:c,append_to_response:"videos"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("3/movie/".concat(e,"/credits"),{params:{api_key:c}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("3/movie/".concat(e,"/reviews"),{params:{api_key:c}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("3/trending/person/week",{params:{api_key:c}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=home-page.02f486c6.chunk.js.map