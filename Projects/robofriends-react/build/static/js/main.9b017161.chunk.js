(this.webpackJsonpnewreact=this.webpackJsonpnewreact||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),o=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))}),a=(n(13),n(2)),i=n(3),h=n(5),l=n(4),u=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:[t," "]}),Object(u.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},d=(n(15),function(e){e.searchfield;var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})}),f=(n(16),function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"1px solid white",height:"500px"},children:e.children})}),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"ooooops. that is not good"}):this.props.children}}]),n}(r.Component),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(u.jsx)("h1",{children:"Loading"}):Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{children:"Robo friends"}),Object(u.jsx)(d,{searchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(j,{robots:t})})})]})}}]),n}(r.Component);s.a.render(Object(u.jsx)(p,{}),document.getElementById("root")),o()}},[[17,1,2]]]);
//# sourceMappingURL=main.9b017161.chunk.js.map