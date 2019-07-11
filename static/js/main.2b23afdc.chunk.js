(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),s=(a(98),a(14)),c=a(33),l=(a(99),a(88)),m=a(169),u=a(170),d=a(185),p=a(171),h=a(167);function g(t){return o.a.createElement(h.a,{component:"div",style:{padding:24}},t.children)}var E=Object(m.a)(function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper}}});function b(){var t=E(),e=o.a.useState(0),a=Object(l.a)(e,2),n=a[0],r=a[1];return o.a.createElement("div",{className:t.root},o.a.createElement(u.a,{position:"static"},o.a.createElement(d.a,{value:n,onChange:function(t,e){r(e)},centered:!0},o.a.createElement(p.a,{label:o.a.createElement(s.b,{to:"/Blog-Reaction",style:{color:"white"}},"Home")}),o.a.createElement(p.a,{label:o.a.createElement(s.b,{to:"/Blog-Reaction/posts",style:{color:"white"}},"Blog")}))),0===n&&o.a.createElement(g,null),1===n&&o.a.createElement(g,null))}var f=a(31),v=a(24),y=a(42),P=a(39),x=a(41),S=a(4),w=a(173),j=a(175),O=a(179),B=a(178),I=a(176),k=a(177),N=a(89),M=a(180),R=a(84),C=a.n(R),A=a(85),W=a.n(A),G=a(86),F=a.n(G),D=a(174),T=a(172),z=a(83),J=a.n(z),L=function t(){var e=this;Object(f.a)(this,t),this.axiosInstance=J.a.create({baseURL:"http://5d1b60a5dd81710014e886c4.mockapi.io/api/v1",timeout:1e4}),this.getPost=function(t){return e.axiosInstance.get("/posts/"+t)},this.getPosts=function(){return e.axiosInstance.get("/posts")},this.submitPost=function(t){return e.axiosInstance.post("/posts",{title:t.title,body:t.body,tags:t.tags})},this.updatePost=function(t,a){return e.axiosInstance.put("/posts/"+t,{title:a.title,body:a.body,tags:a.tags})},this.deletePost=function(t){return e.axiosInstance.delete("/posts/"+t)}},U=function(t){function e(){var t,a;Object(f.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(y.a)(this,(t=Object(P.a)(e)).call.apply(t,[this].concat(o)))).state={posts:[],loading:!0,error:!1,errorMSG:""},a.API=new L,a.getPosts=function(){a.setState({loading:!0}),a.API.getPosts().then(function(t){a.setState({posts:t.data,loading:!1})}).catch(function(t){a.setState({loading:!1,error:!0,errorMSG:t})})},a.deletePost=function(t){a.API.deletePost(t).then(function(t){}).catch(function(t){a.setState({error:!0,errorMSG:t})}).finally(function(){a.getPosts()})},a}return Object(x.a)(e,t),Object(v.a)(e,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){var t=this,e=this.props.classes;return!0===this.state.loading?o.a.createElement(w.a,null):!0===this.state.error?o.a.createElement("div",null,"Something Went Wrong",o.a.createElement("p",{style:{color:"red"}},this.state.errorMSG)):o.a.createElement("div",null,o.a.createElement(D.a,{container:!0,spacing:3},o.a.createElement(D.a,{item:!0,xs:3}),o.a.createElement(D.a,{item:!0,xs:6},o.a.createElement(N.a,{className:e.root},o.a.createElement(j.a,{className:e.table},o.a.createElement(I.a,null,o.a.createElement(k.a,null,o.a.createElement(B.a,null,"Latest Blog Posts From the API"),o.a.createElement(B.a,{align:"right"},"\xa0"),o.a.createElement(B.a,{align:"right"},"\xa0"))),o.a.createElement(O.a,null,this.state.posts.map(function(a){return o.a.createElement(k.a,{key:a.id},o.a.createElement(B.a,{component:"th",scope:"row"},o.a.createElement(s.b,{to:"/Blog-Reaction/post/"+a.id},a.title)),o.a.createElement(B.a,{align:"right"},o.a.createElement(M.a,{className:e.button,variant:"contained",color:"secondary",onClick:function(){return t.deletePost(a.id)}},o.a.createElement(C.a,null))),o.a.createElement(B.a,{align:"right"},o.a.createElement(s.b,{to:"/Blog-Reaction/post/edit/"+a.id},o.a.createElement(M.a,{className:e.button,variant:"contained",color:"primary"},o.a.createElement(W.a,null)))))}))))),o.a.createElement(D.a,{item:!0,xs:3},o.a.createElement(s.b,{to:"/Blog-Reaction/posts/new"}," ",o.a.createElement(M.a,{variant:"contained",className:e.success},o.a.createElement(F.a,{style:{color:"white"}}))))))}}]),e}(o.a.Component),H=Object(S.a)(function(t){return{root:{width:"100%",marginTop:t.spacing(3),overflowX:"auto"},table:{minWidth:650},close:{padding:t.spacing(.5)},success:{backgroundColor:T.a[500]}}})(U),X=a(181),$=a(183),q=a(182),K=function(t){function e(t){var a;return Object(f.a)(this,e),(a=Object(y.a)(this,Object(P.a)(e).call(this,t))).API=new L,a.getPost=function(){a.setState({loading:!0}),a.API.getPost(a.state.id).then(function(t){a.setState({post:t.data,loading:!1})}).catch(function(t){console.log(t),a.setState({loading:!1,error:!0,errorMSG:t})}).finally(function(){console.log()})},a.state={id:t.match.params.id,post:{},loading:!0,error:!1,errorMSG:""},a}return Object(x.a)(e,t),Object(v.a)(e,[{key:"componentDidMount",value:function(){this.getPost()}},{key:"componentDidUpdate",value:function(t){this.props.id!==t.id&&this.getPost()}},{key:"render",value:function(){var t=this.props.classes;return!0===this.state.loading?o.a.createElement(w.a,null):!0===this.state.error?o.a.createElement("div",null,"Something Went Wrong",o.a.createElement("p",{style:{color:"red"}},this.state.errorMSG)):o.a.createElement(D.a,{container:!0,spacing:3},o.a.createElement(D.a,{item:!0,xs:3},o.a.createElement(s.b,{to:"/Blog-Reaction/posts"},o.a.createElement(M.a,{variant:"contained",color:"primary"},"Back to Posts"))),o.a.createElement(D.a,{item:!0,xs:6},o.a.createElement(X.a,{className:t.card},o.a.createElement(q.a,null,o.a.createElement(h.a,{variant:"h5",component:"h2"},this.state.post.title),o.a.createElement(h.a,{className:t.pos,color:"textSecondary"},this.state.post.tags),o.a.createElement(h.a,{variant:"body2",component:"p"},this.state.post.body)),o.a.createElement($.a,null,o.a.createElement(M.a,{size:"small",variant:"contained",color:"inherit"},"share")))),o.a.createElement(D.a,{item:!0,xs:3}))}}]),e}(o.a.Component),Q=Object(S.a)(function(t){return{card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}})(K),V=a(87),Y=a(184),Z=function(t){function e(t){var a;return Object(f.a)(this,e),(a=Object(y.a)(this,Object(P.a)(e).call(this,t))).API=new L,a.state={title:"",tags:"",body:"",redirect:!1},a.handleChange=function(t){return function(e){a.setState(Object(V.a)({},t,e.target.value))}},a.getExistingPost=function(){a.API.getPost(a.state.postId).then(function(t){var e=t.data;a.setState({title:e.title,body:e.body,tags:e.tags})})},a.submitNewPost=function(t){a.API.submitPost(t).then(function(t){}).catch(function(t){console.log(t)}).finally(function(){a.setState({redirect:!0})})},a.updateExistingPost=function(t){a.API.updatePost(a.state.postId,t).then(function(t){}).catch(function(t){console.log(t)}).finally(function(){a.setState({redirect:!0})})},a.handleFormSubmit=function(t){t.preventDefault();var e={title:a.state.title,body:a.state.body,tags:a.state.tags};!0===a.state.updateMode?a.updateExistingPost(e):a.submitNewPost(e)},a.state={postId:t.match.params.id,updateMode:!0,title:"",tags:"",body:"",redirect:!1},a}return Object(x.a)(e,t),Object(v.a)(e,[{key:"componentDidMount",value:function(){void 0===this.props.match.params.id&&this.setState({updateMode:!1}),void 0!==this.state.postId&&this.getExistingPost()}},{key:"render",value:function(){var t=this.props.classes;if(!0===this.state.redirect)return o.a.createElement(c.a,{to:"/posts",push:!0});var e=o.a.createElement(M.a,{variant:"contained",color:"primary",type:"submit"},"Submit");return!0===this.state.updateMode&&(e=o.a.createElement(M.a,{variant:"contained",color:"primary",type:"submit"},"Update")),o.a.createElement(D.a,{container:!0,spacing:3},o.a.createElement(D.a,{item:!0,xs:3},o.a.createElement(s.b,{to:"/Blog-Reaction/posts"},o.a.createElement(M.a,{variant:"contained",color:"secondary",size:"medium"},"Back to Posts"))),o.a.createElement(D.a,{item:!0,xs:6},o.a.createElement("form",{className:t.container,onSubmit:this.handleFormSubmit},o.a.createElement(Y.a,{id:"title",label:"Post Title",className:t.textField,value:this.state.title,onChange:this.handleChange("title"),margin:"normal",variant:"outlined"}),o.a.createElement("br",null),o.a.createElement(Y.a,{id:"body",label:"Post body",multiline:!0,rowsMax:"4",value:this.state.body,onChange:this.handleChange("body"),className:t.textField,margin:"normal",helperText:"Enter the Post body",variant:"outlined"}),o.a.createElement("br",null),o.a.createElement(Y.a,{id:"tags",label:"Post Tags",className:t.textField,value:this.state.tags,onChange:this.handleChange("tags"),margin:"normal",variant:"outlined"}),o.a.createElement("br",null),e)),o.a.createElement(D.a,{item:!0,xs:3}))}}]),e}(o.a.Component),_=Object(S.a)(function(t){return{button:{margin:t.spacing(1)},input:{display:"none"},dense:{marginTop:t.spacing(2)}}})(Z),tt=Object(m.a)(function(t){return{button:{margin:t.spacing(1)},input:{display:"none"}}});var et=function(){var t=tt();return o.a.createElement("div",null,o.a.createElement("h2",null,"Welcome to First Blog in React Js"),o.a.createElement(s.b,{to:"/Blog-Reaction/posts"},o.a.createElement(M.a,{variant:"contained",color:"secondary",className:t.button},"See Latest Posts")))};var at=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(b,null),o.a.createElement(c.d,null,o.a.createElement(c.b,{path:"/Blog-Reaction",exact:!0,component:et}),o.a.createElement(c.b,{path:"/Blog-Reaction/posts",exact:!0,component:H}),o.a.createElement(c.b,{path:"/Blog-Reaction/posts/new",exact:!0,component:_}),o.a.createElement(c.b,{path:"/Blog-Reaction/post/edit/:id",exact:!0,component:_}),o.a.createElement(c.b,{path:"/Blog-Reaction/post/:id",exact:!0,component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(at,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},93:function(t,e,a){t.exports=a(130)},98:function(t,e,a){},99:function(t,e,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.2b23afdc.chunk.js.map