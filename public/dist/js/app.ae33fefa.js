(function(t){function e(e){for(var o,l,r=e[0],s=e[1],c=e[2],d=0,f=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function l(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"39fc3cc9"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=l(t);var c=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}a[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"054c":function(t,e,n){"use strict";n("e4ec")},3491:function(t,e,n){},"365c":function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return f})),n.d(e,"g",(function(){return p}));n("d3b7");var o=n("bc3a"),a=n.n(o),i=a.a.create({baseURL:"http://47.94.228.127:80/",timeout:5e3});i.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){var e=t.data;return 200!==e.code?Promise.reject(new Error(e.message||"Error")):e}),(function(t){return console.log("err"+t),Promise.reject(t)}));var l=i;function r(t){return l({url:"/upload",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}function s(){return l({url:"/tags/getTags",method:"get"})}function c(t){return l({url:"/tags/addTags",method:"post",data:t,headers:{"Content-Type":"application/json"}})}function d(t){return l({url:"/tags/deleteTags",method:"post",data:t,headers:{"Content-Type":"application/json"}})}function u(t){return l({url:"/tags/updateTags",method:"post",data:t,headers:{"Content-Type":"application/json"}})}function f(t){return l({url:"/save",method:"post",data:t,headers:{"Content-Type":"application/json"}})}function p(t){return l({url:"/uploadImg",method:"post",data:t,headers:{"Content-Type":"application/json"}})}},"452f":function(t,e,n){"use strict";n("bdcc")},5588:function(t,e,n){"use strict";n("8a24")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],l=(n("5c0b"),n("2877")),r={},s=Object(l["a"])(r,a,i,!1,null,null,null),c=s.exports,d=n("5c96"),u=n.n(d),f=n("afcb"),p=n.n(f),m=(n("0fae"),n("6112")),h=n.n(m),v=(n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[t.showUpload?n("div",{staticClass:"setting-icon"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-setting"},on:{click:function(e){t.isShow=!0}}},[t._v("上传设置")])],1):t._e(),t.showUpload?n("upload",{staticClass:"upload",on:{getContent:t.getContent}}):t._e(),n("word",{ref:"word",attrs:{tagsArr:t.tagsArr,Content:t.Content}}),n("upload-setting",{attrs:{tagsArr:t.tagsArr,visible:t.isShow},on:{regetTags:t.getTags,"update:visible":function(e){t.isShow=e}}})],1)])},y=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"10px"}},[n("div",{staticClass:"title"},t._l(t.Content.title,(function(e){return n("div",{key:e.id,class:e.type},[t._v(t._s(e.name))])})),0),n("div",{staticClass:"fromTitleArr"},t._l(t.Content.formTitle,(function(e){return n("div",{key:e.id},[n("el-form",{ref:"form111",refInFor:!0,attrs:{model:t.formInline}},[n("el-form-item",{attrs:{label:e.name}},[n("el-input",{class:e.type,model:{value:t.formTitle[e.key].value,callback:function(n){t.$set(t.formTitle[e.key],"value",n)},expression:"formTitle[item.key].value"}})],1)],1)],1)})),0),"{}"!==JSON.stringify(t.formInline)?n("div",{staticClass:"form"},[n("el-form",{ref:"form",attrs:{"label-position":"left",model:t.formInline,inline:!0,"label-width":"100"}},[n("div",{staticClass:"form-item"},t._l(t.Content.form,(function(e){return n("el-form-item",{key:e.id,style:"width:"+120*e.contentWidth+"px",attrs:{label:e.name,"label-width":"60"}},["text"===e.type?n("el-input",{model:{value:t.formInline[e.key].value,callback:function(n){t.$set(t.formInline[e.key],"value",n)},expression:"formInline[item.key].value"}}):t._e(),"textarea"===e.type?n("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",rows:10},model:{value:t.formInline[e.key].value,callback:function(n){t.$set(t.formInline[e.key],"value",n)},expression:"formInline[item.key].value"}}):t._e(),"select"===e.type?n("el-select",{model:{value:t.formInline[e.key].value,callback:function(n){t.$set(t.formInline[e.key],"value",n)},expression:"formInline[item.key].value"}},t._l(JSON.parse(e.options),(function(t){return n("el-option",{key:t.value,attrs:{label:t.value,value:t.value}})})),1):t._e(),"date"===e.type?n("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date"},model:{value:t.formInline[e.key].value,callback:function(n){t.$set(t.formInline[e.key],"value",n)},expression:"formInline[item.key].value"}}):t._e(),"sign"===e.type?n("div",[n("div",{staticStyle:{border:"1px solid #DCDFE6"}},[t.isSign?t._e():n("vue-esign",{ref:"esign",refInFor:!0}),t.isSign?n("div",[n("img",{staticStyle:{width:"720px"},attrs:{src:t.signUrl}})]):t._e()],1),n("div",[n("el-button",{attrs:{plain:""},on:{click:t.reset}},[t._v("重置")]),n("el-button",{attrs:{type:"primary",plain:""},on:{click:t.sureSign}},[t._v("确认签名")]),n("el-button",{attrs:{type:"primary",plain:""},on:{click:t.openQRcode}},[t._v("扫码签名")])],1)]):t._e()],1)})),1)])],1):t._e(),"{}"!==JSON.stringify(t.Content)?n("div",[n("el-button",{on:{click:t.save}},[t._v("保存")])],1):t._e(),t.editModel?n("show-img",{attrs:{editModel:t.editModel},on:{"update:editModel":function(e){t.editModel=e},"update:edit-model":function(e){t.editModel=e}}}):t._e()],1)},_=[],k=(n("4160"),n("b0c0"),n("b64b"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"二维码",visible:t.editModel,width:"30%","close-on-click-modal":!1,"append-to-body":""},on:{close:t.handleClose}},[n("div",[n("qriously",{attrs:{value:t.url,size:100}})],1)])}),C=[],w={props:{editModel:{type:Boolean,default:!1}},data:function(){return{url:"".concat(window.location.href,"about")}},mounted:function(){console.log(this.url)},methods:{handleClose:function(){this.$emit("update:editModel",!1)}}},S=w,M=Object(l["a"])(S,k,C,!1,null,null,null),T=M.exports,x=n("365c"),O=n("5a0c"),j=n.n(O),D={name:"word",components:{showImg:T},props:{Content:{type:Object,default:function(){}},tagsArr:{type:Array}},mounted:function(){var t=this;this.sockets.subscribe("getImg",(function(e){console.log(e),e.url&&(t.signUrl="http://47.94.228.127:80/".concat(e.url),t.isSign=!0,t.editModel=!1)}))},data:function(){return{formInline:{},formTitle:{},editModel:!1,isSign:!1,signUrl:""}},watch:{Content:{handler:function(t){var e={};t.form.forEach((function(t){t.key&&(e[t.key]={value:"",name:t.name})}));var n={};t.formTitle.forEach((function(t){t.key&&(n[t.key]={value:"",name:t.name})})),this.formInline=Object.assign({},this.formInline,e),this.formTitle=Object.assign({},this.formTitle,n)},deep:!0}},methods:{reset:function(){this.$refs.esign[0].reset()},sureSign:function(){var t=this;this.$refs.esign[0].generate().then((function(e){t.Content.form.forEach((function(n){"sign"===n.type&&(t.formInline[n.key].value=e)}))})).catch((function(e){t.$message.error(e)}))},save:function(){var t=JSON.parse(JSON.stringify(this.formInline)),e=JSON.parse(JSON.stringify(this.formTitle));Object.keys(t).forEach((function(e){t[e].value instanceof Date&&(t[e].value=j()(t[e]).format("YYYY-MM-DD HH:mm:ss"))})),Object(x["d"])({data:t,fileName:this.Content.fileName,formTitle:e}).then((function(t){console.log(t),200===t.code&&window.open("http://47.94.228.127:80/".concat(t.data.msg),"_self"),console.log(t.data.msg)}))},openQRcode:function(){this.editModel=!0}}},$=D,I=(n("5588"),Object(l["a"])($,b,_,!1,null,"d34846e0",null)),E=I.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",action:"","http-request":t.uploadword}},[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或 "),n("em",[t._v("点击上传")])]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传.docx文件")])])],1)},F=[],J={name:"upload",props:{},data:function(){return{}},methods:{uploadword:function(t){var e=this,n=new FormData;n.append("file",t.file),n.append("name","12138"),Object(x["f"])(n).then((function(t){200===t.code&&e.$emit("getContent",t.data)}))}}},N=J,P=Object(l["a"])(N,A,F,!1,null,null,null),V=P.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"上传设置",visible:t.visible,"close-on-click-modal":!1,width:"40%"},on:{close:t.handleClose}},[n("div",{staticClass:"content-tag"},[n("div",{staticClass:"tags"},[t._l(t.tagsList,(function(e){return n("div",{key:e.id,staticStyle:{cursor:"pointer"},on:{click:function(n){return n.stopPropagation(),t.updateTags(e)}}},[n("el-popover",{attrs:{placement:"top",width:"160"},model:{value:t.deleteModel[e.id],callback:function(n){t.$set(t.deleteModel,e.id,n)},expression:"deleteModel[item.id]"}},[n("p",[t._v("确认删除该标签?")]),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){t.deleteModel[e.id]=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.deleteTag(e)}}},[t._v("确定")])],1),n("el-tag",{attrs:{slot:"reference",closable:""},on:{close:function(n){return t.showDelete(e)}},slot:"reference"},[t._v(t._s(e.name))])],1)],1)})),n("div",[n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){t.editModel=!0,t.updateData={}}}},[t._v("+ 新增")])],1)],2)]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleClose}},[t._v("关 闭")])],1),t.editModel?n("edit-tag",{attrs:{editModel:t.editModel,updateData:t.updateData},on:{"update:editModel":function(e){t.editModel=e},"update:edit-model":function(e){t.editModel=e},regetTags:t.regetTags}}):t._e()],1)},W=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"编辑标签",visible:t.editModel,width:"30%","close-on-click-modal":!1,"append-to-body":""},on:{close:t.handleClose}},[n("div",{staticClass:"content-Edit"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"标签名称"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"标签类型"}},[n("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[n("el-option",{attrs:{label:"文本",value:"text"}}),n("el-option",{attrs:{label:"选择框",value:"select"}}),n("el-option",{attrs:{label:"时间",value:"date"}}),n("el-option",{attrs:{label:"长文本",value:"textarea"}}),n("el-option",{attrs:{label:"可绘制",value:"sign"}}),n("el-option",{attrs:{label:"表单标题",value:"formTitle"}})],1),"select"===t.form.type?n("el-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"small",type:"primary"},on:{click:function(e){t.editSelectModel=!0}}},[t._v("选择框内容编辑")]):t._e()],1),n("el-form-item",{attrs:{label:"占宽"}},[n("el-slider",{attrs:{step:2,"show-stops":"",min:2,max:6,disabled:t.canStep},model:{value:t.form.contentWidth,callback:function(e){t.$set(t.form,"contentWidth",e)},expression:"form.contentWidth"}})],1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.addTags}},[t._v("确 定")])],1),t.editSelectModel?n("select-content",{attrs:{editSelectModel:t.editSelectModel,selectData:t.form.options?t.form.options:[{value:""}]},on:{"update:editSelectModel":function(e){t.editSelectModel=e},"update:edit-select-model":function(e){t.editSelectModel=e},selectSave:t.selectSave}}):t._e()],1)},L=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"选择框内容编辑",visible:t.editSelectModel,"close-on-click-modal":!1,width:"30%","append-to-body":""},on:{close:t.handleClose}},[n("div",[n("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:t.dynamicValidateForm,"label-width":"80px","label-position":"left"}},t._l(t.dynamicValidateForm.domains,(function(e,o){return n("el-form-item",{key:o,attrs:{label:"选项"+(o+1),prop:"domains."+o+".value",rules:{required:!0,message:"请输入",trigger:"blur"}}},[n("el-input",{model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"domain.value"}})],1)})),1),n("div",{staticClass:"icons"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:t.addDomain}}),t.dynamicValidateForm.domains.length>1?n("el-button",{attrs:{size:"small",icon:"el-icon-minus"},on:{click:t.removeDomain}}):t._e()],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)])},B=[],Y=(n("fb6a"),n("a434"),{name:"selectContent",props:{editSelectModel:{type:Boolean,default:!1},selectData:{type:Array,default:function(){return[{value:""}]}}},components:{},computed:{selectDataCopy:function(){if(console.log(this.selectData),0===this.selectData.length){var t=[{value:""}];return t}return JSON.parse(JSON.stringify(this.selectData))}},data:function(){return{dynamicValidateForm:{domains:[{value:""}]}}},created:function(){this.dynamicValidateForm.domains=this.selectDataCopy.slice()},methods:{handleClose:function(){this.$emit("update:editSelectModel",!1)},submitForm:function(){var t=this;this.$refs.dynamicValidateForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.$emit("selectSave",t.dynamicValidateForm.domains)}))},removeDomain:function(){this.dynamicValidateForm.domains.splice(this.dynamicValidateForm.domains.length-1,1)},addDomain:function(){this.dynamicValidateForm.domains.push({value:""})}}}),H=Y,R=(n("628f"),Object(l["a"])(H,q,B,!1,null,"5ec6d1a0",null)),Q=R.exports,G={name:"editTag",props:{editModel:{type:Boolean,default:!1},updateData:{type:Object,default:function(){}}},components:{selectContent:Q},computed:{canStep:function(){return"textarea"===this.form.type||"sign"===this.form.type}},watch:{"form.type":function(t){console.log(t),"textarea"!==this.form.type&&"sign"!==this.form.type||(this.form.contentWidth=12),"text"!==this.form.type&&"select"!==this.form.type&&"date"!==this.form.type||(this.form.contentWidth=2)}},data:function(){return{editSelectModel:!1,form:{contentWidth:this.updateData.contentWidth?this.updateData.contentWidth:2,options:this.updateData.options?JSON.parse(this.updateData.options):[],name:this.updateData.name?this.updateData.name:"",type:this.updateData.type?this.updateData.type:"",id:this.updateData.id?this.updateData.id:null}}},methods:{handleClose:function(){this.$emit("update:editModel",!1)},selectSave:function(t){this.editSelectModel=!1,this.form.options=t},addTags:function(){var t=this;console.log(this.form),this.form.options=Array.isArray(this.form.options)?JSON.stringify(this.form.options):this.form.options,this.form.id?Object(x["e"])(this.form).then((function(e){200===e.code&&(t.$message({message:"更新成功",type:"success"}),t.$emit("update:editModel",!1),t.$emit("regetTags"))})):Object(x["a"])(this.form).then((function(e){200===e.code&&(t.$message({message:"添加成功",type:"success"}),t.$emit("update:editModel",!1),t.$emit("regetTags"))}))}}},K=G,X=(n("054c"),Object(l["a"])(K,z,L,!1,null,"76534ea8",null)),Z=X.exports,tt={name:"uploadSetting",props:{visible:{type:Boolean,default:!1},tagsArr:{type:Array,default:function(){return[]}}},computed:{tagsList:function(){return JSON.parse(JSON.stringify(this.tagsArr))}},components:{editTag:Z},created:function(){var t=this;this.tagsList.forEach((function(e){t.deleteModel[e.id]=!1}))},data:function(){return{editModel:!1,updateData:{},deleteModel:{}}},methods:{handleClose:function(){this.$emit("update:visible",!1)},deleteTag:function(t){var e=this;Object(x["b"])({id:t.id}).then((function(t){200===t.code&&e.$emit("regetTags")}))},regetTags:function(){this.$emit("regetTags")},showDelete:function(t){this.$set(this.deleteModel,t.id,!0)},updateTags:function(t){this.editModel=!0,this.updateData=t}}},et=tt,nt=(n("452f"),Object(l["a"])(et,U,W,!1,null,"629405a0",null)),ot=nt.exports,at={name:"App",components:{word:E,upload:V,uploadSetting:ot},data:function(){return{isShow:!1,tagsArr:[],Content:{},uploadData:{},showUpload:!0}},created:function(){this.getTags()},mounted:function(){},methods:{getTags:function(){var t=this;Object(x["c"])().then((function(e){200===e.code&&(t.tagsArr=e.data,console.log(e.data))}))},getContent:function(t){console.log(t),this.Content=t,this.showUpload=!1},getUploadData:function(t){console.log(t),this.uploadData=t},download:function(){}}},it=at,lt=(n("9158"),Object(l["a"])(it,g,y,!1,null,"10bc79ab",null)),rt=lt.exports;o["default"].use(v["a"]);var st=[{path:"/",name:"Home",component:rt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"cc49"))}}],ct=new v["a"]({mode:"history",base:"/dist/",routes:st}),dt=ct,ut=n("5132"),ft=n.n(ut);o["default"].use(h.a),o["default"].use(u.a),o["default"].use(p.a),o["default"].use(new ft.a({connection:"http://47.94.228.127:80"})),o["default"].config.productionTip=!1,new o["default"]({router:dt,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"628f":function(t,e,n){"use strict";n("3491")},8292:function(t,e,n){},"8a24":function(t,e,n){},9158:function(t,e,n){"use strict";n("8292")},"9c0c":function(t,e,n){},bdcc:function(t,e,n){},e4ec:function(t,e,n){}});
//# sourceMappingURL=app.ae33fefa.js.map