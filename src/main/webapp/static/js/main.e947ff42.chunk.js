(this["webpackJsonpcs4550-su20-jinhonghuo-final-project-client-react"]=this["webpackJsonpcs4550-su20-jinhonghuo-final-project-client-react"]||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),c=(a(28),a(29),a(11)),i=a(1),l=a(2),m=a(4),u=a(3),h=a(5),p=a(6),d=(a(30),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movieTitle:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Movie Search"),r.a.createElement("div",{className:"container"},r.a.createElement("input",{title:"Search...",value:this.state.movieTitle,onChange:function(t){return e.setState({movieTitle:t.target.value})}}),r.a.createElement(h.b,{to:"/search/".concat(this.state.movieTitle)},r.a.createElement("button",null,"Search"))))}}]),a}(r.a.Component)),v=function(e){return fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=a9d9c03f")).then((function(e){return e.json()}))},f=function(e){return fetch("https://www.omdbapi.com/?i=".concat(e,"&plot=full&apikey=a9d9c03f")).then((function(e){return e.json()}))},b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{height:"200px",alt:this.props.movie.title,src:this.props.movie.Poster})),r.a.createElement("td",null,r.a.createElement(h.b,{to:"/movies/".concat(this.props.movie.imdbID)},this.props.movie.Title)),r.a.createElement("td",null,this.props.movie.Year))}}]),a}(r.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:e.props.match.params.movieTitle,movies:[]},e.searchMovie=function(){v(e.state.title).then((function(t){return e.setState({movies:t.Search})}))},e.updateTitleInState=function(t){e.setState((function(e){return{title:t}}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.searchMovie()}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.movieTitle!==this.props.match.params.movieTitle&&this.searchMovie()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Search"),r.a.createElement("label",{for:"movie"},"Title"),r.a.createElement("input",{id:"movie",value:this.state.title,onChange:function(t){return e.updateTitleInState(t.target.value)}}),r.a.createElement(h.b,{to:"/search/".concat(this.state.title)},r.a.createElement("button",null,"Search")),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Poster"),r.a.createElement("td",null,"Title"),r.a.createElement("td",null,"Year"))),r.a.createElement("tbody",null,this.state.movies.map((function(e){return r.a.createElement(b,{key:e._id,movie:e})})))))}}]),a}(r.a.Component),g=function(){return fetch("https://cs4550-20su1-final-java-server.herokuapp.com/api/profile",{method:"POST",credentials:"include"}).then((function(e){return e.json()}))},y=function(e){return fetch("https://cs4550-20su1-final-java-server.herokuapp.com/api/profile",{body:JSON.stringify(e),headers:{"content-type":"application/json"},method:"PUT",credentials:"include"}).then((function(e){return e.json()}))},j=function(){return fetch("https://cs4550-20su1-final-java-server.herokuapp.com/api/logout",{method:"POST",credentials:"include"})},w=function(e,t){return fetch("https://cs4550-20su1-final-java-server.herokuapp.com/api/login",{body:JSON.stringify({username:e,password:t}),headers:{"content-type":"application/json"},method:"POST",credentials:"include"}).then((function(e){return e.json()}))},O=function(e,t){return fetch("https://cs4550-20su1-final-java-server.herokuapp.com/api/register",{body:JSON.stringify({username:e,password:t}),headers:{"content-type":"application/json"},method:"POST",credentials:"include"}).then((function(e){return e.json()}))},N=function(e){return fetch("https://cs4550-20su1-final-java-server.herokuapp.com/api/users/".concat(e)).then((function(e){return e.json()}))},k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={login:!1,user:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().catch((function(t){e.setState({login:!1})})).then((function(t){t&&N(t.id).then((function(t){return e.setState({user:t,login:!0})}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Home"),this.state.login&&r.a.createElement("h3",null,"Welcome Home ",this.state.user.username," Role : ",this.state.user.role),!this.state.login&&r.a.createElement("h3",null,"To use MovieZone, please login or register a new account"),r.a.createElement("div",{className:"list-group"},r.a.createElement(h.b,{className:"list-group-item",to:"/search"},"Movie Search"),this.state.login&&r.a.createElement(h.b,{className:"list-group-item",to:"/profile"},"Profile"),r.a.createElement(h.b,{className:"list-group-item",to:"/register"},"Register"),!this.state.login&&r.a.createElement(h.b,{className:"list-group-item",to:"/login"},"Login"),this.state.login&&r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return j().then((function(e){return window.location.reload(!1)}))}},"sign out")))}}]),a}(r.a.Component),S=a(12),C=(a(36),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:{username:"",password:""},updated:!1},e.update=function(){e.setState({updated:!1}),y(e.state.user).then((function(t){return e.setState({user:t,updated:!0})}))},e.logout=function(){j().then((function(t){return e.props.history.push("/")}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().catch((function(t){e.props.history.push("/")})).then((function(t){t&&N(t.id).then((function(t){return e.setState({user:t})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Profile"),r.a.createElement(h.b,{className:"list-group-item",to:"/"},"HomePage"),r.a.createElement("div",{className:"container"},this.state.updated&&r.a.createElement("div",{className:"form-group row alertFld wbdv-message"},r.a.createElement("div",{className:"alert alert-success wbdv-message",role:"alert"},"Profile saved!")),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-lg-2 col-sm-6 col-form-label",htmlFor:"username"},"Username"),r.a.createElement("div",{className:"col-lg-10 col-sm-6"},r.a.createElement("input",{id:"username",className:"form-control wbdv-field wbdv-username",value:this.state.user.username,type:"text",placeholder:"joe123",title:"Use this username to login",readOnly:!0}),this.props.match.params.userId===this.state.user.id&&r.a.createElement("h3",null,this.state.user.username))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-lg-2 col-sm-6 col-form-label",htmlFor:"password"},"Password"),r.a.createElement("div",{className:"col-lg-10 col-sm-6"},r.a.createElement("input",{id:"password",className:"form-control wbdv-field wbdv-password",value:this.state.user.password,onChange:function(t){return e.setState({user:Object(S.a)(Object(S.a)({},e.state.user),{},{password:t.target.value})})},type:"password"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-lg-2 col-sm-6 col-form-label",htmlFor:"phone"},"Phone"),r.a.createElement("div",{className:"col-lg-10 col-sm-6"},r.a.createElement("input",{id:"phone",className:"form-control wbdv-field wbdv-phone",value:this.state.user.phone,onChange:function(t){return e.setState({user:Object(S.a)(Object(S.a)({},e.state.user),{},{phone:t.target.value})})},type:"number"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-lg-2 col-sm-6 col-form-label",htmlFor:"email"},"Email"),r.a.createElement("div",{className:"col-lg-10 col-sm-6"},r.a.createElement("input",{id:"email",className:"form-control wbdv-field wbdv-dob",value:this.state.user.email,onChange:function(t){return e.setState({user:Object(S.a)(Object(S.a)({},e.state.user),{},{email:t.target.value})})},type:"email"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-lg-2  col-form-label",htmlFor:"dob"},"Date of birth"),r.a.createElement("input",{id:"dob",className:"form-control col-lg-10 wbdv-field wbdv-dob",type:"date",value:this.state.user.dob,onChange:function(t){return e.setState({user:Object(S.a)(Object(S.a)({},e.state.user),{},{dob:t.target.value})})}})),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-lg-2 col-sm-6 col-form-label",htmlFor:"role"},"Role"),r.a.createElement("div",{className:"col-lg-10 col-sm-6"},r.a.createElement("select",{id:"role",className:"form-control wbdv-field wbdv-dob",value:this.state.user.role,onChange:function(t){return e.setState({user:Object(S.a)(Object(S.a)({},e.state.user),{},{role:t.target.value})})}},r.a.createElement("option",{value:null},"--"),r.a.createElement("option",{value:"user"},"User"),r.a.createElement("option",{value:"admin"},"Admin")))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("button",{onClick:this.update,className:"btn btn-success wbdv-button wbdv-update",id:"updateBtn"},"Update"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.logout},"Sign Out")))))}}]),a}(r.a.Component)),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",verifyPassword:"",error:""},e.register=function(){return O(e.state.username,e.state.password).catch((function(t){e.setState({error:"Unable to register"})})).then((function(t){t&&e.props.history.push("/profile")}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement(h.b,{className:"list-group-item",to:"/"},"HomePage"),r.a.createElement("input",{value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},className:"form-control",placeholder:"username"}),r.a.createElement("input",{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},className:"form-control",type:"password",placeholder:"password"}),r.a.createElement("input",{value:this.state.verifyPassword,onChange:function(t){return e.setState({verifyPassword:t.target.value})},className:"form-control",type:"password",placeholder:"verify password"}),r.a.createElement("button",{onClick:this.register,className:"btn btn-primary btn-block"},"Register"),r.a.createElement(h.b,{className:"list-group-item",to:"/"},"Cancel"),r.a.createElement(h.b,{className:"list-group-item",to:"/login"},"Sign in"))}}]),a}(r.a.Component),T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",role:""},e.login=function(){return w(e.state.username,e.state.password).catch((function(t){return e.props.history.push("/login")})).then((function(t){return e.props.history.push("/profile")}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(h.b,{className:"list-group-item",to:"/"},"HomePage"),r.a.createElement("input",{value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},className:"form-control",placeholder:"username"}),r.a.createElement("input",{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},className:"form-control",type:"password",placeholder:"password"}),r.a.createElement("button",{onClick:this.login,className:"btn btn-primary btn-block"},"Login"),r.a.createElement(h.b,{className:"list-group-item",to:"/"},"Cancel"),r.a.createElement(h.b,{className:"list-group-item",to:"/register"},"Sign up"))}}]),a}(r.a.Component),x=a(14),U=function(e,t){return fetch("https://cs4550-20su1-final-java-server.herokuapp.com/api/movies/".concat(e,"/comments"),{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},D=function(e){return fetch("https://cs4550-20su1-final-java-server.herokuapp.com/api/movies/".concat(e,"/comments")).then((function(e){return e.json()}))},P=function(e){return fetch("https://cs4550-20su1-final-java-server.herokuapp.com/api/comments/".concat(e),{method:"DELETE"}).then((function(e){return e.json()}))},M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={comments:e.props.comments,currentUser:{}},e.deleteComment=function(t){return P(t).then((function(a){return e.setState({comments:e.state.comments.filter((function(e){return e.id!==t}))})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var n=this;e.comments!==this.props.comments&&this.setState({comments:this.props.comments}),g().catch((function(e){n.props.history.push("/")})).then((function(e){return N(e.id).then((function(e){return n.setState({currentUser:e})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"list-group"},this.state.comments.map((function(t){return r.a.createElement("li",{key:t.id,className:"list-group-item"},r.a.createElement(h.b,{to:"/profile/".concat(t.postedBy)},t.username),t.text,(e.state.currentUser.id===t.postedBy||"admin"===e.state.currentUser.role)&&r.a.createElement("button",{className:"btn-sm btn-danger float-right",onClick:function(){return e.deleteComment(t.id)}},"delete"))})))}}]),a}(r.a.Component),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={commentText:"Type your comment here",comment:e.props.comment,commentOnHere:[],makeComment:!1,movieId:e.props.movieId,currentUser:{}},e.createComment=function(t,a){console.log(a),e.setState({makeComment:!1}),U(t,a).then((function(t){return e.setState({commentOnHere:[].concat(Object(x.a)(e.state.commentOnHere),[t])})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;D(this.state.movieId).then((function(t){e.setState({commentOnHere:t.filter((function(t){return t.commentFor===e.state.comment.id}))})})),g().catch((function(t){e.props.history.push("/")})).then((function(t){return N(t.id).then((function(t){return e.setState({currentUser:t})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement(h.b,{to:"/profile/".concat(this.state.comment.postedBy)},this.state.comment.username),r.a.createElement("h4",null,this.state.comment.text),r.a.createElement("button",{className:"btn btn-sm btn-info",onClick:function(){return e.setState({makeComment:!0})}},"Comment"),(this.state.currentUser.id===this.state.comment.postedBy||"admin"===this.state.currentUser.role)&&r.a.createElement("button",{className:"btn-sm btn-danger",onClick:function(){return e.props.deleteComment(e.state.comment.id)}},"delete"),r.a.createElement(M,{comments:this.state.commentOnHere}),this.state.makeComment&&r.a.createElement("div",null,r.a.createElement("input",{value:this.state.commentText,onChange:function(t){return e.setState({commentText:t.target.value})}}),r.a.createElement("button",{onClick:function(){return e.createComment(e.state.movieId,{text:e.state.commentText,time:-6,commentFor:e.state.comment.id,movie:e.state.movieId,postedBy:parseInt(e.state.currentUser.id),username:e.state.currentUser.username})},className:"btn btn-success"},"submit")))}}]),a}(r.a.Component),F=(a(37),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movie:{},movieId:e.props.movieId,commentText:"Select a time of the movie and type your comment here",time:0,comments:[],currentUser:{}},e.deleteComment=function(t){return P(t).then((function(a){return e.setState({comments:e.state.comments.filter((function(e){return e.id!==t}))})}))},e.createComment=function(t,a){return U(t,a).then((function(t){return e.setState({comments:[].concat(Object(x.a)(e.state.comments),[t])})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f(this.props.movieId).then((function(t){e.setState({movie:t})})),D(this.state.movieId).then((function(t){return e.setState({comments:t})})),g().catch((function(t){e.props.history.push("/")})).then((function(t){return N(t.id).then((function(t){return e.setState({currentUser:t})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"slidecontainer"},r.a.createElement("input",{onChange:function(t){return e.setState({time:t.target.value})},type:"range",min:"1",max:parseInt(this.state.movie.Runtime),value:this.state.time,className:"slider",id:"myRange"})),r.a.createElement("h3",null,"Around ",this.state.time," mins, we found these comments."),r.a.createElement("ul",null,this.state.comments.map((function(t){if(parseInt(e.state.time)-5<t.time&&t.time<parseInt(e.state.time)+5)return r.a.createElement("li",{key:t.id,className:"list-group-item"},t.time," mins:",r.a.createElement(A,{deleteComment:e.deleteComment,movieId:e.state.movieId,comments:e.state.comments,comment:t}))})),r.a.createElement("li",{className:"list-group"},r.a.createElement("input",{value:this.state.commentText,onChange:function(t){return e.setState({commentText:t.target.value})}}),r.a.createElement("button",{onClick:function(){return e.createComment(e.state.movieId,{text:e.state.commentText,time:e.state.time,commentFor:-1,movie:e.state.movieId,postedBy:parseInt(e.state.currentUser.id),username:e.state.currentUser.username})},className:"btn btn-success"},"submit"))))}}]),a}(r.a.Component)),B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).keywordChanged=function(t){return e.setState({keyword:t.target.value})},e.searchMovie=function(){fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=AIzaSyDZEj3buCTRh08vOAm2IWtFioJXO9n14BA%20&q=".concat(e.state.keyword)).then((function(e){return e.json()})).then((function(t){t.items.map((function(e){return e.id.videoId}));var a=t.items.map((function(e){return"https://www.youtube.com/embed/"+e.id.videoId}));e.setState({resultyt:a})})).catch((function(e){console.error(e)}))},e.state={keyword:"",resultyt:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f(this.props.movieId).then((function(t){e.setState({movie:t},(function(){return e.setState({keyword:t.Title})}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null," Youtube Search"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{value:this.state.keyword,onChange:this.keywordChanged,className:"form-control",placeholder:"keyword"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:this.searchMovie,className:"btn btn-primary"},"Search"))),r.a.createElement("div",null,this.state.resultyt.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("iframe",{width:"560",height:"315",src:e,frameBorder:"0",allowFullScreen:!0}))})),this.frame))}}]),a}(r.a.Component),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:{},commentText:"Type your comment here",movie:{},movieId:e.props.match.params.movieId,comments:[]},e.deleteComment=function(t){return P(t).then((function(a){return e.setState({comments:e.state.comments.filter((function(e){return e.id!==t}))})}))},e.createComment=function(t,a){return U(t,a).then((function(t){return e.setState({comments:[].concat(Object(x.a)(e.state.comments),[t])})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f(this.props.match.params.movieId).then((function(t){e.setState({movie:t})})),D(this.props.match.params.movieId).then((function(t){return e.setState({comments:t})})),g().catch((function(t){e.props.history.push("/")})).then((function(t){return N(t.id).then((function(t){return e.setState({currentUser:t})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:this.state.movie.Poster,alt:this.state.movie.Title})),r.a.createElement("div",{className:"col-9"},r.a.createElement("h2",null,this.state.movie.Title),r.a.createElement("p",null,this.state.movie.Plot),r.a.createElement("p",null,this.state.movie.Runtime))),r.a.createElement("h3",null,"Movie Timeline"),r.a.createElement(F,{movieId:this.state.movieId}),r.a.createElement("h3",null,"Comments"),r.a.createElement("ul",{className:"list-group"},this.state.comments.map((function(t){if(-6===t.time&&-1===t.commentFor)return r.a.createElement(A,{deleteComment:e.deleteComment,key:t.id,movieId:e.state.movieId,comment:t})})),r.a.createElement("li",{className:"list-group"},r.a.createElement("input",{value:this.state.commentText,onChange:function(t){return e.setState({commentText:t.target.value})}}),r.a.createElement("button",{onClick:function(){return e.createComment(e.props.match.params.movieId,{text:e.state.commentText,time:-6,commentFor:-1,movie:e.props.match.params.movieId,postedBy:parseInt(e.state.currentUser.id),username:e.state.currentUser.username})},className:"btn btn-success"},"submit"))),r.a.createElement(B,{movieId:this.state.movieId}))}}]),a}(r.a.Component),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movie:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f(this.props.omdbID).then((function(t){e.setState({movie:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("img",{src:this.state.movie.Poster,className:"card-img-top",alt:this.state.movie.Title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement(h.b,{to:"/movies/".concat(this.state.movie.imdbID)},this.state.movie.Title)),r.a.createElement("h5",{className:"card-text"},this.state.movie.Year))))}}]),a}(r.a.Component),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[{omdbID:"tt0372784"},{omdbID:"tt2975590"},{omdbID:"tt0096895"},{omdbID:"tt0103776"}],renderedMovie:[]},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3"},this.state.movies.map((function(e){return r.a.createElement(R,{key:e.omdbID,omdbID:e.omdbID})})))}}]),a}(r.a.Component),L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:{},currentUser:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;N(this.props.match.params.userId).then((function(t){return e.setState({user:t},(function(){g().then((function(t){return e.setState({currentUser:t},(function(){e.state.user.id===e.state.currentUser.id&&e.props.history.push("/profile")}))}))}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"User Profile for ",this.state.user.username),r.a.createElement("div",{className:"container"},"admin"===this.currentUser.role&&r.a.createElement("h1",null,"admin view"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Username: ",this.state.user.username),r.a.createElement("li",{className:"list-group-item"},"Phone: ",this.state.user.phone),r.a.createElement("li",{className:"list-group-item"},"Email: ",this.state.user.email),r.a.createElement("li",{className:"list-group-item"},"Date of Birth",this.state.user.dob))))}}]),a}(r.a.Component),W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t,a,n;return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("h1",null," Movie Zone "),r.a.createElement(h.b,{to:"/"},"HomePage"),r.a.createElement(p.a,(e={exact:!0,path:"/"},Object(c.a)(e,"exact",!0),Object(c.a)(e,"component",k),e)),r.a.createElement(p.a,(t={exact:!0,path:"/profile"},Object(c.a)(t,"exact",!0),Object(c.a)(t,"component",C),t)),r.a.createElement(p.a,(a={exact:!0,path:"/register"},Object(c.a)(a,"exact",!0),Object(c.a)(a,"component",I),a)),r.a.createElement(p.a,(n={exact:!0,path:"/login"},Object(c.a)(n,"exact",!0),Object(c.a)(n,"component",T),n)),r.a.createElement(p.a,{exact:!0,path:["/search","/search/"],component:d}),r.a.createElement(p.a,{exact:!0,path:"/search/:movieTitle",component:E}),r.a.createElement(p.a,{exact:!0,path:"/movies/:movieId",component:H}),r.a.createElement(p.a,{exact:!0,path:"/playlist",component:J}),r.a.createElement(p.a,{exact:!0,path:"/profile/:userId",component:L}),r.a.createElement(p.a,{exact:!0,path:"/youtube",component:B})))}}]),a}(r.a.Component);var Y=function(){return r.a.createElement(W,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.e947ff42.chunk.js.map