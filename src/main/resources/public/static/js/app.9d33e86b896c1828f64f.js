webpackJsonp([0],{0:function(e,t){},"5E/O":function(e,t){},"7zck":function(e,t){},Dg4M:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=n("7+uW"),i=n("3EgV"),a=n.n(i),r=n("8+8L"),l={user:null},c=n("/ocq"),d={data:function(){return{user:{},valid:!1,working:!1,loaded:!1}},mounted:function(){var e=this;window.href=location.href,o=this,bus.$off("logout"),bus.$on("logout",function(){e.$http.post("api/login/logout").then(function(){X.replace("/")})}),console.log(href),this.$http.post("api/login/check").then(u,u)},methods:{login:function(){this.working=!0,this.$http.post("api/login",this.user).then(u,u)}}};function u(e){200==e.status?(l.user=e.data,X.replace("/home/"),o.working=!1,o.loaded=!0):(l.user=null,o.working=!1,o.loaded=!0)}var v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loaded?n("v-app",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{md6:"",xl3:""}},[n("v-card",[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("v-img",{attrs:{"max-height":"32","max-width":"32",src:"static/icon.png"}}),e._v(" "),n("v-toolbar-title",[e._v("miniterm login")])],1),e._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("v-flex",[n("v-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.login(t)}}},[n("v-text-field",{staticStyle:{display:"none"},attrs:{label:"hidden"}}),e._v(" "),n("v-text-field",{attrs:{label:"username",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),e._v(" "),n("v-text-field",{attrs:{type:"password",label:"password",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),n("v-btn",{staticClass:"ma-0 text-lowercase",attrs:{type:"submit",loading:e.working,dark:"",color:"secondary"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.login(t)}}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)],1):e._e()},staticRenderFns:[]};var f=n("VU/8")(d,v,!1,function(e){n("XWKE")},null,null).exports,p={data:function(){return{title:"",dialog:!1,dragging:!1,valid:!1,connection:{},fileMessage:"Drag private key file, or click to select one.",passwordError:"",rules:[function(e){return!!e||"Required"}]}},mounted:function(){var e=this;bus.$off("showConnectionDialog"),bus.$on("showConnectionDialog",function(t){e.fileMessage="Drag private key file, or click to select one.",e.dragging=!1,e.dialog=!0,e.connection=t,e.title=t.id?"edit connection":"add connection"})},methods:{passwordRules:function(){return this.connection.password||this.connection.privateKey?[]:["Password or private key must be set"]},saveConnection:function(){var e=this;this.$refs.form.validate(),this.valid&&(this.connection.password||this.connection.privateKey)&&this.$http.post("api/connection/save",this.connection).then(function(){e.dialog=!1,bus.$emit("loadConnections")})},selectFile:function(){document.querySelector("#connectionDialog .dropzone input").click()},drop:function(e){this.handleFile(e.dataTransfer.files[0])},fileSelected:function(e){this.handleFile(e.target.files[0])},handleFile:function(e){var t=this;if(e.size>5e3)return t.fileMessage="File cant be larget than 5KB",void(t.dragging=!1);var n=new FileReader;n.onload=function(e){t.connection.privateKey=e.target.result,t.fileMessage="OK!"},n.readAsText(e)}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"400"},on:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,"Escape"))return null;e.dialog=!1},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.saveConnection(t):null},function(t){return"button"in t||!e._k(t.keyCode,"space",32,t.key," ")?e.saveConnection(t):null}]},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{id:"connectionDialog"}},[n("v-card-title",{staticClass:"headline primary white--text",attrs:{dark:""}},[n("v-icon",{attrs:{left:"",dark:""}},[e._v("desktop_windows")]),e._v(" "),n("span",{staticClass:"ml-4"},[e._v(e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("cancel")])],1),e._v(" "),n("v-card-text",{staticClass:"pa-4"},[n("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{staticStyle:{display:"none"},attrs:{label:"hidden"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.rules,label:"name",required:""},model:{value:e.connection.name,callback:function(t){e.$set(e.connection,"name",t)},expression:"connection.name"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.rules,label:"host",required:""},model:{value:e.connection.host,callback:function(t){e.$set(e.connection,"host",t)},expression:"connection.host"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.rules,label:"port",required:"",type:"number"},model:{value:e.connection.port,callback:function(t){e.$set(e.connection,"port",t)},expression:"connection.port"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.rules,label:"username",required:""},model:{value:e.connection.username,callback:function(t){e.$set(e.connection,"username",t)},expression:"connection.username"}}),e._v(" "),n("v-text-field",{attrs:{"error-messages":e.passwordRules(),label:"password",type:"password"},model:{value:e.connection.password,callback:function(t){e.$set(e.connection,"password",t)},expression:"connection.password"}}),e._v(" "),n("div",{staticClass:"dropzone pointer mt-3",class:{dragging:e.dragging},on:{click:e.selectFile,drop:function(t){return t.preventDefault(),t.stopPropagation(),e.drop(t)},dragover:function(t){t.preventDefault(),e.dragging=!0},dragleave:function(t){t.preventDefault(),e.dragging=!1}}},[n("div",{staticClass:"pointer"},[n("span",{staticClass:"pointer"},[e._v(e._s(e.fileMessage))]),e._v(" "),n("input",{attrs:{type:"file"},on:{change:e.fileSelected}})])]),e._v(" "),n("v-text-field",{attrs:{type:"password",label:"privateKeyPassword"},model:{value:e.connection.privateKeyPassword,callback:function(t){e.$set(e.connection,"privateKeyPassword",t)},expression:"connection.privateKeyPassword"}})],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",{staticClass:"pa-3"},[n("v-btn",{staticClass:"text-lowercase",attrs:{color:"red",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("cancel")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"text-lowercase",attrs:{disabled:!e.valid,color:"616161",dark:e.valid},on:{click:e.saveConnection}},[e._v("add")])],1)],1)],1)},staticRenderFns:[]};var m={data:function(){return{dialog:!1,working:!1,connection:{}}},mounted:function(){var e=this;bus.$off("showDeleteDialog"),bus.$on("showDeleteDialog",function(t){e.connection=t,e.dialog=!0})},methods:{deleteConnection:function(){var e=this;this.working=!0,this.$http.post("api/connection/remove",this.connection).then(function(){e.working=!1,e.dialog=!1,bus.$emit("loadConnections")})}}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"400"},on:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,"Escape"))return null;e.dialog=!1},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.deleteConnection(t):null},function(t){return"button"in t||!e._k(t.keyCode,"space",32,t.key," ")?e.deleteConnection(t):null}]},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline primary white--text",attrs:{dark:""}},[n("v-icon",{attrs:{left:"",dark:""}},[e._v("desktop_windows")]),e._v(" "),n("span",{staticClass:"ml-4"},[e._v("delete connection")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("cancel")])],1),e._v(" "),n("v-card-text",[e._v(e._s(e.connection.name)+" will be deleted, are you sure?")]),e._v(" "),n("v-card-actions",{staticClass:"pa-3"},[n("v-btn",{staticClass:"text-lowercase",attrs:{color:"red",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("no")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"text-lowercase",attrs:{loading:e.working,color:"616161",dark:""},on:{click:e.deleteConnection}},[e._v("yes")])],1)],1)],1)},staticRenderFns:[]},_={components:{ConnectionDialog:n("VU/8")(p,h,!1,function(e){n("oXZ2")},"data-v-cd21c514",null).exports,ConnectionDeleteDialog:n("VU/8")(m,g,!1,null,null,null).exports},computed:{href:function(){return window.href},parent:function(){return this.$parent.$parent.$parent}},methods:{addConnection:function(){bus.$emit("showConnectionDialog",{})},editConnection:function(e){bus.$emit("showConnectionDialog",e)},deleteConnection:function(e){bus.$emit("showDeleteDialog",e)},newSession:function(e){bus.$emit("newSession",e)}},mounted:function(){}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{"fill-height":"",height:"100%"}},[n("v-list",{attrs:{subheader:""}},[n("v-subheader",{staticClass:"headline primary white--text",attrs:{dark:""}},[n("v-img",{staticStyle:{margin:"0 4px"},attrs:{"max-height":"32","max-width":"32",src:"static/icon.png"}}),e._v(" "),n("span",{staticClass:"ml-3"},[e._v("miniterm")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"elevation-0 ma-0",attrs:{flat:"",icon:"",small:""},on:{click:function(t){e.$parent.$parent.$parent.hideDrawer=!0}}},[n("v-icon",[e._v("arrow_left")])],1)],1),e._v(" "),n("v-list-tile",{attrs:{avatar:""},on:{click:e.addConnection}},[n("v-list-tile-avatar",[n("v-icon",{attrs:{left:""}},[e._v("desktop_windows")])],1),e._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[e._v("add connection")])],1)],1),e._v(" "),n("v-divider",{attrs:{color:"white"}}),e._v(" "),e._l(e.parent.connections,function(t){return n("v-list-tile",{key:t.id,attrs:{avatar:""},on:{click:function(n){e.newSession(t)}}},[n("v-list-tile-content",[n("v-list-tile-title",[n("v-layout",[e._v("\n            "+e._s(t.name)+"\n            "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(n){n.stopPropagation(),e.editConnection(t)}}},[e._v("edit")])],1)],1),e._v(" "),n("v-list-tile-sub-title",[n("v-layout",[e._v("\n            "+e._s(t.host)+"\n            "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{color:"red",small:""},on:{click:function(n){n.stopPropagation(),e.deleteConnection(t)}}},[e._v("delete")])],1)],1)],1)],1)}),e._v(" "),0==e.parent.connections.length?n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v("No connections added yet.")])],1)],1):e._e()],2),e._v(" "),n("connectionDialog"),e._v(" "),n("connectionDeleteDialog")],1)},staticRenderFns:[]};var b,k,$=n("VU/8")(_,w,!1,function(e){n("Dg4M")},null,null).exports,y={mounted:function(){bus.$off("socketConnected"),bus.$on("socketConnected",this.loadSessions),bus.$off("newSession"),bus.$on("newSession",this.newSession),bus.$off("activateSession"),bus.$on("activateSession",this.activateSession),bus.$off("removeSession"),bus.$on("removeSession",this.removeSession),bus.$off("stateData"),bus.$on("stateData",this.stateData),this.sessions=this.$parent.$parent.sessions,this.loadingSessions=this.$parent.$parent.loadingSessions},methods:{loadSessions:function(){var e=this;this.$http.get("api/session/getSessions").then(function(t){for(var n in e.sessions.length=0,t.body)t.body.hasOwnProperty(n)&&e.sessions.push(t.body[n]);if(e.sessions.length>0)if(localStorage.currentSessionId){var o=!1;e.sessions.forEach(function(t){if(t.id==localStorage.currentSessionId)return e.activateSession(t),void(o=!0)}),o||e.activateSession(e.sessions[0])}else e.activateSession(e.sessions[0]);e.$parent.$parent.loadingSessions=!1})},newSession:function(e){var t=this;this.$http.post("api/session/newSession",e.id).then(function(e){t.sessions.push(e.body),t.activateSession(e.body)})},activateSession:function(e){b!=e?(this.deactivateAll(),e.active=!0,b=e,bus.$emit("activateTerminal",e)):bus.$emit("terminalFocus")},removeSession:function(e){var t=this;this.$http.post("api/session/remove",e.id).then(function(){t.$parent.$parent.sessions=t.$parent.$parent.sessions.filter(function(t){return t.id!=e.id}),t.sessions=t.$parent.$parent.sessions,b==e&&t.sessions.length>0&&t.activateSession(t.sessions[0]),0==t.sessions.length&&bus.$emit("removeTerminal")})},deactivateAll:function(){this.sessions.forEach(function(e){e.active=!1}),this.$forceUpdate()},stateData:function(e){this.sessions.forEach(function(t){t.id!=e.sessionId||(t.state=e.state)})}}},S={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},C=n("VU/8")(y,S,!1,null,null,null).exports,x=n("mvHQ"),D=n.n(x),T=n("O3w4"),E=n.n(T),F={mounted:function(){(k=new E.a("api/ssh")).onopen=this.socketOpened,k.onmessage=this.socketMessageReceived,bus.$off("socketSend"),bus.$on("socketSend",this.socketSend)},beforeDestroy:function(){k.close()},methods:{socketOpened:function(){bus.$emit("socketConnected")},socketSend:function(e){k.send(D()(e))},socketMessageReceived:function(e){var t=JSON.parse(e.data);switch(t.command){case"terminal":bus.$emit("terminalData",t);break;case"setState":bus.$emit("stateData",t)}}}},P={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},R=n("VU/8")(F,P,!1,null,null,null).exports,K={data:function(){return{dialog:!1,session:{}}},mounted:function(){var e=this;bus.$off("showCloseSessionDialog"),bus.$on("showCloseSessionDialog",function(t){e.session=t,e.dialog=!0})},methods:{closeSession:function(){this.dialog=!1,bus.$emit("removeSession",this.session)}}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"400"},on:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,"Escape"))return null;e.dialog=!1},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.closeSession(t):null},function(t){return"button"in t||!e._k(t.keyCode,"space",32,t.key," ")?e.closeSession(t):null}]},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline primary white--text",attrs:{dark:""}},[n("v-icon",{attrs:{left:"",dark:""}},[e._v("desktop_windows")]),e._v(" "),n("span",{staticClass:"ml-4"},[e._v("close session")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("cancel")])],1),e._v(" "),n("v-card-text",[e._v("running session will be closed, are you sure?")]),e._v(" "),n("v-card-actions",{staticClass:"pa-3"},[n("v-btn",{staticClass:"text-lowercase",attrs:{color:"red",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("no")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"text-lowercase",attrs:{color:"secondary",dark:""},on:{click:e.closeSession}},[e._v("yes")])],1)],1)],1)},staticRenderFns:[]},z={components:{CloseSessionDialog:n("VU/8")(K,I,!1,null,null,null).exports},computed:{orderedSessions:function(){return this.sessions.sort(function(e,t){return parseInt(e.order)-parseInt(t.order)})},sessions:function(){return this.$parent.$parent.$parent.sessions}},methods:{getColor:function(e){var t="";return t=e.active?"":"lighten-3 ","stopped"==e.state&&(t+="red"),"closed"==e.state&&(t+="red"),"started"==e.state&&(t+="green"),t},activate:function(e){bus.$emit("activateSession",e)},close:function(e){"started"==e.state?bus.$emit("showCloseSessionDialog",e):bus.$emit("removeSession",e)}}},U={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{staticClass:"layout",attrs:{"fill-height":"","align-center":""}},[e._l(e.orderedSessions,function(t){return n("v-btn",{key:t.id,attrs:{small:"",color:e.getColor(t)},on:{click:function(n){e.activate(t)},mouseup:function(n){if("button"in n&&1!==n.button)return null;n.stopPropagation(),e.close(t)}}},[e._v(e._s(t.connection.name))])}),e._v(" "),n("close-session-dialog")],2)},staticRenderFns:[]};var V=null,A=null,M=null,q={},L={mounted:function(){A=this,bus.$off("activateTerminal"),bus.$on("activateTerminal",this.activateTerminal),bus.$off("removeTerminal"),bus.$on("removeTerminal",this.removeTerminal),bus.$off("terminalData"),bus.$on("terminalData",this.terminalData),bus.$off("terminalFocus"),bus.$on("terminalFocus",this.terminalFocus),window.removeEventListener("resize",this.windowResized),window.addEventListener("resize",this.windowResized)},beforeDestroy:function(){V&&(V.destroy(),V=null)},methods:{activateTerminal:function(e){M!=e&&s.default.nextTick(function(){if(A.$parent.$parent.showTerminal=!1,localStorage.currentSessionId=e.id,A.initTerminal(),V.fit(),M=e,"closed"!=e.state){var t={command:"activateSSH",sessionId:e.id,rows:V.rows,cols:V.cols};bus.$emit("socketSend",t)}else{t={command:"sendCacheSSH",sessionId:e.id,rows:V.rows,cols:V.cols};bus.$emit("socketSend",t)}setTimeout(function(){A.$parent.$parent.showTerminal=!0},150)})},initTerminal:function(){null==V&&(V=new Terminal({theme:{background:"none"},allowTransparency:!0,fontFamily:"Lucida Console,monospace",fontSize:16,cursorStyle:"block",cursorBlink:!0})).open(document.getElementById("terminalContainer")),V.off("data",this.terminalDataEntered),V.on("data",this.terminalDataEntered),V.off("key",this.terminalKeyPressed),V.on("key",this.terminalKeyPressed),V.focus(),V.reset(),setTimeout(function(){V.scrollToBottom()},150)},removeTerminal:function(){V&&(V.destroy(),V=null)},terminalDataEntered:function(e){var t={command:"keySSH",sessionId:M.id,key:e};bus.$emit("socketSend",t)},terminalKeyPressed:function(e){"closed"==M.state&&(13==e.charCodeAt(0)&&this.activateTerminal(M),27==e.charCodeAt(0)&&bus.$emit("removeSession",M))},terminalData:function(e){V&&V.write(e.text)},windowResized:function(){V&&(clearTimeout(q),q=setTimeout(function(){V.fit();var e={command:"setPtySizeSSH",sessionId:M.id,rows:V.rows,cols:V.cols};bus.$emit("socketSend",e),V.focus()},100))},terminalFocus:function(){V&&V.focus()}}},O={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var H={components:{Sidebar:$,Session:C,Socket:R,NavSessionList:n("VU/8")(z,U,!1,function(e){n("5E/O")},"data-v-465f9b42",null).exports,Terminal:n("VU/8")(L,O,!1,function(e){n("PxLT")},null,null).exports},watch:{hideDrawer:function(){localStorage.hideDrawer=""+this.hideDrawer}},data:function(){return{loadingSessions:!0,showTerminal:!1,hideDrawer:!1,sessions:[],connections:[]}},methods:{loadConnections:function(){var e=this;this.$http.get("api/connection/get").then(function(t){e.connections=t.body})},logout:function(){bus.$emit("logout")}},mounted:function(){localStorage.hideDrawer&&(this.hideDrawer="true"==localStorage.hideDrawer),this.loadConnections(),bus.$off("loadConnections"),bus.$on("loadConnections",this.loadConnections)}},B={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{class:{hideDrawer:e.hideDrawer}},[n("v-navigation-drawer",{staticClass:"elevation-0",attrs:{width:"280",permanent:"",app:"",light:""}},[n("sidebar")],1),e._v(" "),n("v-toolbar",{staticClass:"elevation-0",attrs:{dense:"",color:"primary",dark:"",app:""}},[e.hideDrawer?n("v-btn",{staticClass:"elevation-0 mr-3",attrs:{flat:"",icon:"",small:""},on:{click:function(t){e.hideDrawer=!1}}},[n("v-icon",[e._v("arrow_right")])],1):e._e(),e._v(" "),n("navSessionList"),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:e.logout}},[n("v-icon",[e._v("exit_to_app")])],1)],1),e._v(" "),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[0!=e.sessions.length||e.loadingSessions?e._e():n("v-layout",{staticClass:"mb-5",attrs:{"align-center":"","justify-center":""}},[n("span",[e._v("There are no open sessions.")])]),e._v(" "),e.sessions.length>0?n("v-layout",{class:{showTerminal:e.showTerminal},attrs:{"d-flex":"",id:"terminalContainer"}}):e._e()],1)],1),e._v(" "),n("session"),e._v(" "),n("socket"),e._v(" "),n("terminal")],1)},staticRenderFns:[]};var j=n("VU/8")(H,B,!1,function(e){n("oy8B")},"data-v-db8cbfb2",null).exports;s.default.use(c.a);var N=new c.a({routes:[{path:"/",component:f},{path:"/home",component:j}]});N.beforeEach(function(e,t,n){"/"!=e.path&&null==l.user?n({path:"/"}):n()});var X=N,Z={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]},W=n("VU/8")(null,Z,!1,null,null,null).exports,J=(n("7zck"),n("Z5gD"),n("fIPj"),n("13sD")),Q=n("6x4x"),G=n("AaoT");s.default.use(r.a),s.default.use(a.a,{theme:{primary:"#424242"}}),J.Terminal.applyAddon(Q),J.Terminal.applyAddon(G),window.Terminal=J.Terminal,window.bus=new s.default,new s.default({el:"#app",router:X,components:{App:W},template:"<v-app><App/></v-app>"})},PxLT:function(e,t){},XWKE:function(e,t){},Z5gD:function(e,t){},fIPj:function(e,t){},oXZ2:function(e,t){},oy8B:function(e,t){}},["NHnr"]);