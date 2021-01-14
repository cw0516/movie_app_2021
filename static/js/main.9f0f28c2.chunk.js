(this.webpackJsonpchanflix=this.webpackJsonpchanflix||[]).push([[0],{92:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1),a=n.n(i),c=n(38),o=n.n(c),s=n(13),u=n(14),l=n(16),d=n(15),j=n(20),p=n(5),b=n(10),h=n.n(b),g=n(17),f=n(4),x=n(3),v=n(11),O=n(18),m=n.n(O);function y(){var t=Object(f.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return y=function(){return t},t}function _(){var t=Object(f.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return _=function(){return t},t}function w(){var t=Object(f.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return w=function(){return t},t}var k=x.c.div(w()),S=x.c.span(_()),T=x.c.div(y()),R=function(t){var e=t.title,n=t.children;return Object(r.jsxs)(k,{children:[Object(r.jsx)(S,{children:e}),Object(r.jsx)(T,{children:n})]})};function C(){var t=Object(f.a)(["\n  color: ",";\n  font-weight: 500;\n"]);return C=function(){return t},t}function M(){var t=Object(f.a)(["\n  width:100vw;\n  display:flex;\n  justify-content:center;\n\n"]);return M=function(){return t},t}var U=x.c.div(M()),z=x.c.span(C(),(function(t){return t.color})),P=function(t){var e=t.text,n=t.color;return Object(r.jsx)(U,{children:Object(r.jsx)(z,{color:n,children:e})})};function I(){var t=Object(f.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return I=function(){return t},t}function F(){var t=Object(f.a)(["\n  display: block;\n  margin-bottom: 3px;\n  color: white;\n"]);return F=function(){return t},t}function N(){var t=Object(f.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover{\n    ","{\n      opacity:0.3;\n    }\n    ","{\n      opacity : 1;\n    }\n  }\n"]);return N=function(){return t},t}function V(){var t=Object(f.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n"]);return V=function(){return t},t}function H(){var t=Object(f.a)(["\n  background-image: url(",");\n  height:180px;\n  background-size:cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return H=function(){return t},t}function A(){var t=Object(f.a)(["\n  font-size: 12px;\n"]);return A=function(){return t},t}var B=x.c.div(A()),D=x.c.div(H(),(function(t){return t.bgUrl})),q=x.c.span(V()),J=x.c.div(N(),D,q),L=x.c.span(F()),E=x.c.span(I()),G=function(t){var e=t.id,n=t.imageUrl,i=t.title,a=t.rating,c=t.year,o=t.isMovie,s=void 0!==o&&o;return Object(r.jsx)(j.b,{to:s?"/movie/".concat(e):"/tv/".concat(e),children:Object(r.jsxs)(B,{children:[Object(r.jsxs)(J,{children:[Object(r.jsx)(D,{bgUrl:n?"https://image.tmdb.org/t/p/w300".concat(n):"/noPosterSmall.png"}),Object(r.jsxs)(q,{children:[Object(r.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",a," / 10"]})]}),Object(r.jsx)(L,{children:i.length>18?"".concat(i.substring(0,18),"..."):i}),Object(r.jsx)(E,{children:c})]})})};function K(){var t=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 300px;\n"]);return K=function(){return t},t}function Q(){var t=Object(f.a)(["\n  padding: 20px;\n"]);return Q=function(){return t},t}var W=x.c.div(Q()),X=Object(x.c)(m.a)(K()),Y=function(t){var e=t.nowPlaying,n=t.upcoming,i=t.popular,a=t.loading,c=t.error;return a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v.a,{children:Object(r.jsx)("title",{children:"Movies | Chanflix "})}),Object(r.jsx)(X,{type:"Heart",color:"#bdc3c7",height:200,weight:200})]}):Object(r.jsxs)(W,{children:[Object(r.jsx)(v.a,{children:Object(r.jsx)("title",{children:"Movies | Chanflix "})}),e&&e.length>0&&Object(r.jsx)(R,{title:"Now Playing",children:e.map((function(t){return Object(r.jsx)(G,{id:t.id,imageUrl:t.poster_path,title:t.original_title,rating:t.vote_average,year:t.release_date.substring(0,4),isMovie:!0},t.id)}))}),n&&n.length>0&&Object(r.jsx)(R,{title:"Upcoming Movies",children:n.map((function(t){return Object(r.jsx)(G,{id:t.id,imageUrl:t.poster_path,title:t.original_title,rating:t.vote_average,year:t.release_date.substring(0,4),isMovie:!0},t.id)}))}),i&&i.length>0&&Object(r.jsx)(R,{title:"Popular Movies",children:i.map((function(t){return Object(r.jsx)(G,{id:t.id,imageUrl:t.poster_path,title:t.original_title,rating:t.vote_average,year:t.release_date.substring(0,4),isMovie:!0},t.id)}))}),c&&Object(r.jsx)(P,{color:"#e74c3c",text:c})]})},Z=n(44),$=n.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"db76504d96b015e103faa52fa3e90239",language:"en-US"}}),tt=function(){return $.get("movie/now_playing")},et=function(){return $.get("movie/upcoming")},nt=function(){return $.get("movie/popular")},rt=function(t){return $.get("movie/".concat(t),{params:{append_to_response:"videos"}})},it=function(t){return $.get("search/movie",{params:{query:encodeURIComponent(t)}})},at=function(){return $.get("tv/top_rated")},ct=function(){return $.get("tv/popular")},ot=function(){return $.get("tv/airing_today")},st=function(t){return $.get("tv/".concat(t),{params:{append_to_response:"videos"}})},ut=function(t){return $.get("search/tv",{params:{query:encodeURIComponent(t)}})},lt=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(g.a)(h.a.mark((function t(){var e,n,r,i,a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,tt();case 3:return e=t.sent,n=e.data.results,t.next=7,et();case 7:return r=t.sent,i=r.data.results,t.next=11,nt();case 11:a=t.sent,c=a.data.results,this.setState({nowPlaying:n,upcoming:i,popular:c}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),this.setState({error:"can't find movies information."});case 19:return t.prev=19,this.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,this,[[0,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.nowPlaying,n=t.upcoming,i=t.popular,a=t.error,c=t.loading;return console.log(this.state),Object(r.jsx)(Y,{nowPlaying:e,upcoming:n,popular:i,error:a,loading:c})}}]),n}(a.a.Component);function dt(){var t=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 300px;\n"]);return dt=function(){return t},t}function jt(){var t=Object(f.a)(["\n  padding: 20px;\n"]);return jt=function(){return t},t}var pt=x.c.div(jt()),bt=Object(x.c)(m.a)(dt()),ht=function(t){var e=t.topRated,n=t.popular,i=t.airingToday,a=t.loading,c=t.error;return a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v.a,{children:Object(r.jsx)("title",{children:"TV Shows | Chanflix "})}),Object(r.jsx)(bt,{type:"Heart",color:"#bdc3c7",height:200,weight:200})]}):Object(r.jsxs)(pt,{children:[Object(r.jsx)(v.a,{children:Object(r.jsx)("title",{children:"TV Shows | Chanflix "})}),e&&e.length>0&&Object(r.jsx)(R,{title:"Top Rated Shows",children:e.map((function(t){return Object(r.jsx)(G,{id:t.id,imageUrl:t.poster_path,title:t.original_name,rating:t.vote_average,year:t.first_air_date.substring(0,4)},t.id)}))}),n&&n.length>0&&Object(r.jsx)(R,{title:"Popular Shows",children:n.map((function(t){return Object(r.jsx)(G,{id:t.id,imageUrl:t.poster_path,title:t.original_name,rating:t.vote_average,year:t.first_air_date.substring(0,4)},t.id)}))}),i&&i.length>0&&Object(r.jsx)(R,{title:"AiringToday",children:i.map((function(t){return Object(r.jsx)(G,{id:t.id,imageUrl:t.poster_path,title:t.original_name,rating:t.vote_average,year:t.first_air_date.substring(0,4)},t.id)}))}),c&&Object(r.jsx)(P,{color:"#e74c3c",text:c})]})},gt=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(g.a)(h.a.mark((function t(){var e,n,r,i,a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,at();case 3:return e=t.sent,n=e.data.results,t.next=7,ct();case 7:return r=t.sent,i=r.data.results,t.next=11,ot();case 11:a=t.sent,c=a.data.results,this.setState({topRated:n,popular:i,airingToday:c}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),this.setState({error:"Can't find TV information."});case 19:return t.prev=19,this.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,this,[[0,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.topRated,n=t.popular,i=t.airingToday,a=t.loading,c=t.error;return Object(r.jsx)(ht,{topRated:e,popular:n,airingToday:i,loading:a,error:c})}}]),n}(a.a.Component);function ft(){var t=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 300px;\n"]);return ft=function(){return t},t}function xt(){var t=Object(f.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return xt=function(){return t},t}function vt(){var t=Object(f.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return vt=function(){return t},t}function Ot(){var t=Object(f.a)(["\n  padding: 0px 20px;\n"]);return Ot=function(){return t},t}var mt=x.c.div(Ot()),yt=x.c.form(vt()),_t=x.c.input(xt()),wt=Object(x.c)(m.a)(ft()),kt=function(t){var e=t.movieResults,n=t.tvResults,i=t.loading,a=t.searchTerm,c=t.handleSubmit,o=t.error,s=t.updateTerm;return Object(r.jsxs)(mt,{children:[Object(r.jsx)(yt,{onSubmit:c,children:Object(r.jsx)(_t,{placeholder:"Search Movies or TV Shows...",value:a,onChange:s})}),i?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v.a,{children:Object(r.jsx)("title",{children:"Search | Chanflix "})}),Object(r.jsx)(wt,{type:"Heart",color:"#bdc3c7",height:200,weight:200})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v.a,{children:Object(r.jsx)("title",{children:"Search | Chanflix "})}),o&&Object(r.jsx)(P,{color:"#e74c3c",text:o}),n&&e&&0===n.length&&0===e.length&&Object(r.jsx)(P,{text:"Nothing found",color:"#95a5a6"}),e&&e.length>0&&Object(r.jsx)(R,{title:"Movie Results",children:e.map((function(t){return Object(r.jsx)(G,{id:t.id,imageUrl:t.poster_path,title:t.original_title,rating:t.vote_average,year:void 0!==t.release_date?t.release_date.substring(0,4):"unknown",isMovie:!0},t.id)}))}),n&&n.length>0&&Object(r.jsx)(R,{title:"TV Show Results",children:n.map((function(t){return Object(r.jsx)(G,{id:t.id,imageUrl:t.poster_path,title:t.original_name,rating:t.vote_average,year:void 0!==t.first_air_date?t.first_air_date.substring(0,4):"unknown"},t.id)}))})]})]})},St=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.searchTerm&&t.searchByTerm()},t.updateTerm=function(e){var n=e.target.value;t.setState({searchTerm:n})},t.searchByTerm=Object(g.a)(h.a.mark((function e(){var n,r,i,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.searchTerm,t.setState({loading:!0}),e.prev=2,e.next=5,it(n);case 5:return r=e.sent,i=r.data.results,e.next=9,ut(n);case 9:a=e.sent,c=a.data.results,t.setState({movieResults:i,tvResults:c}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),t.setState({error:"Can't find results."});case 17:return e.prev=17,t.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.movieResults,n=t.tvResults,i=t.searchTerm,a=t.loading,c=t.error;return Object(r.jsx)(kt,{movieResults:e,tvResults:n,loading:a,error:c,searchTerm:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(a.a.Component);function Tt(){var t=Object(f.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Tt=function(){return t},t}function Rt(){var t=Object(f.a)(["\n  width: 80px;\n  height: 50px;\n\ttext-align: center;\n\tborder-bottom : 5px solid ",";\n\ttransition: border-bottom .5s ease-in-out;\n"]);return Rt=function(){return t},t}function Ct(){var t=Object(f.a)(["\n  display: flex;\n"]);return Ct=function(){return t},t}function Mt(){var t=Object(f.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return Mt=function(){return t},t}var Ut=x.c.header(Mt()),zt=x.c.ul(Ct()),Pt=x.c.li(Rt(),(function(t){return t.current?"#e74c3c":"transparent"})),It=Object(x.c)(j.b)(Tt()),Ft=Object(p.g)((function(t){var e=t.location.pathname;return Object(r.jsx)(Ut,{children:Object(r.jsxs)(zt,{children:[Object(r.jsx)(Pt,{current:"/"==e,children:Object(r.jsx)(It,{to:"/",children:"Movies"})}),Object(r.jsx)(Pt,{current:"/tv"==e,children:Object(r.jsx)(It,{to:"/tv",children:"TV"})}),Object(r.jsx)(Pt,{current:"/search"==e,children:Object(r.jsx)(It,{to:"/search",children:"Search"})})]})})}));function Nt(){var t=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 300px;\n"]);return Nt=function(){return t},t}function Vt(){var t=Object(f.a)(["\n  font-size: 15px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return Vt=function(){return t},t}function Ht(){var t=Object(f.a)(["\n  margin: 0 10px;\n"]);return Ht=function(){return t},t}function At(){var t=Object(f.a)(["\n  font-weight: bold;\n"]);return At=function(){return t},t}function Bt(){var t=Object(f.a)(["\n  margin:20px 0 ;\n"]);return Bt=function(){return t},t}function Dt(){var t=Object(f.a)(["\n  font-size: 32px;\n  margin-bottom: 20px;\n  font-weight: bold;\n"]);return Dt=function(){return t},t}function qt(){var t=Object(f.a)(["\n  width:70%;\n  margin-left: 10px;\n"]);return qt=function(){return t},t}function Jt(){var t=Object(f.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  border-radius: 5px;\n"]);return Jt=function(){return t},t}function Lt(){var t=Object(f.a)(["\n  display:flex;\n  width:100%;\n  position: relative;\n  z-index:1;\n  height:100%;\n"]);return Lt=function(){return t},t}function Et(){var t=Object(f.a)(["\n  position:absolute;\n  top: 0;\n  left: 0;\n  width:100%;\n  height: 100%;\n  background-image : url(",");\n  background-position : center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index : 0;\n"]);return Et=function(){return t},t}function Gt(){var t=Object(f.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position:relative;\n  padding: 50px;\n"]);return Gt=function(){return t},t}var Kt=x.c.div(Gt()),Qt=x.c.div(Et(),(function(t){return t.bgImage})),Wt=x.c.div(Lt()),Xt=x.c.div(Jt(),(function(t){return t.bgImage})),Yt=x.c.div(qt()),Zt=x.c.h1(Dt()),$t=x.c.div(Bt()),te=x.c.span(At()),ee=x.c.span(Ht()),ne=x.c.p(Vt()),re=Object(x.c)(m.a)(Nt()),ie=function(t){var e=t.result,n=t.loading,i=t.error;return n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v.a,{children:Object(r.jsx)("title",{children:"Loading | Chanflix "})}),Object(r.jsx)(re,{type:"Heart",color:"#bdc3c7",height:200,weight:200})]}):i?Object(r.jsx)(P,{color:"#e74c3c",text:i}):Object(r.jsxs)(Kt,{children:[Object(r.jsx)(v.a,{children:Object(r.jsxs)("title",{children:[e.original_title?e.original_title:e.original_name," ","| Nomflix"]})}),Object(r.jsx)(Qt,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path)}),Object(r.jsxs)(Wt,{children:[Object(r.jsx)(Xt,{bgImage:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):"/noPosterSmall.png"}),Object(r.jsxs)(Yt,{children:[Object(r.jsx)(Zt,{children:e.original_title?e.original_title:e.original_name}),Object(r.jsxs)($t,{children:[Object(r.jsx)(te,{children:e.release_date?e.release_date:e.first_air_date}),Object(r.jsx)(ee,{children:"\u25cf"}),Object(r.jsxs)(te,{children:[e.runtime?e.runtime:e.episode_run_time[0],"min"]}),Object(r.jsx)(ee,{children:"\u25cf"}),Object(r.jsxs)(te,{children:[e.genres&&e.genres.map((function(t,n){return n===e.genres.length-1?t.name:"".concat(t.name,"  / ")})),"min"]})]}),Object(r.jsx)(ne,{children:e.overview})]})]})]})},ae=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var r;Object(s.a)(this,n),r=e.call(this,t);var i=t.location.pathname;return r.state={result:null,loading:!0,error:null,isMovie:i.includes("/movie/")},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(g.a)(h.a.mark((function t(){var e,n,r,i,a,c,o,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props,n=e.match.params.id,r=e.history.push,i=this.state.isMovie,a=parseInt(n),!isNaN(a)){t.next=5;break}return t.abrupt("return",r("/"));case 5:if(c=null,t.prev=6,!i){t.next=14;break}return t.next=10,rt(a);case 10:o=t.sent,c=o.data,t.next=18;break;case 14:return t.next=16,st(a);case 16:s=t.sent,c=s.data;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(6),this.setState({error:"Can't find  anything."});case 23:return t.prev=23,this.setState({loading:!1,result:c}),t.finish(23);case 26:case"end":return t.stop()}}),t,this,[[6,20,23,26]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.result,n=t.loading,i=t.error;return Object(r.jsx)(ie,{result:e,loading:n,error:i})}}]),n}(a.a.Component),ce=function(){return Object(r.jsx)(j.a,{children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ft,{}),Object(r.jsxs)(p.d,{children:[Object(r.jsx)(p.b,{path:"/",exact:!0,component:lt}),Object(r.jsx)(p.b,{path:"/tv",exact:!0,component:gt}),Object(r.jsx)(p.b,{path:"/search",component:St}),Object(r.jsx)(p.b,{path:"/movie/:id",component:ae}),Object(r.jsx)(p.b,{path:"/tv/:id",component:ae}),Object(r.jsx)(p.a,{from:"*",to:"/"})]})]})})},oe=n(45);function se(){var t=Object(f.a)(["\n  ",";\n  a{\n    text-decoration : none;\n    color:inherit;\n  }\n  *{\n    box-sizing:border-box;\n  }\n  body{\n    font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 12px;\n    background-color:rgba(20,20,20,1);\n    color:white;\n    padding-top:50px;\n  }\n\n"]);return se=function(){return t},t}var ue=Object(x.a)(se(),oe.a),le=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{}),Object(r.jsx)(ue,{})]})}}]),n}(i.Component);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(le,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.9f0f28c2.chunk.js.map