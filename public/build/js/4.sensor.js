webpackJsonp([4],{55:function(t,e,s){var i,a;s(56),i=s(57);var o=s(92);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-725b412d",t.exports=i},56:function(t,e){},57:function(t,e,s){(function(t){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(83),o=i(a),n=s(84),l=i(n),r=s(89),c=i(r);e.default={name:"sensor",components:{SliderBar:o.default,BDialog:l.default,DelDialog:c.default},data:function(){return{isShow:!1,dialogMsg:{},delDialogVisible:!1,delDialogMsg:{},sliderList:{name:"sensor",title:"传感器管理",list:[{name:"sensor-type",to:"/sensor/sensor-type",title:"传感器类型"},{name:"sensor-set",to:"/sensor/sensor-set",title:"设置管理"}]},tableStructure:[],isLoading:!0,error:null}},methods:{showDialog:function(t){this.dialogMsg=t,this.isShow=!0},showDelDialog:function(t){this.delDialogMsg=t,this.delDialogVisible=!0},hideDelDialog:function(){this.delDialogMsg={},this.delDialogVisible=!1},initData:function(){var e=this;this.tableStructure=[];var s="/api/"+this.$store.state.global.currentRouteName;t.get(s).then(function(t){200==t.status&&(e.tableStructure=t.data.data,e.$store.dispatch("setPager",t.data))},function(t){e.error=t})},pageChange:function(e){var s=this,i="/api/"+this.$store.state.global.currentRouteName;t.get(i,{params:{page:e}}).then(function(t){200==t.status&&(s.tableStructure=t.data.data,s.$store.dispatch("setPager",t.data))}).catch(function(t){console.log(t)})},saveDialog:function(t){switch(t.type){case"add":this.add(t);break;case"edit":this.edit(t)}},add:function(e){var s=this,i="/api/"+this.$store.state.global.currentRouteName,a=new FormData;e.list.forEach(function(t,e,s){a.append(t.name,t.val)}),t.post(i,a).then(function(t){t.data.id&&(s.$message({showClose:!0,message:"保存成功",type:"success",duration:1e3}),s.tableStructure.unshift(t.data),s.tableStructure.pop(),s.isShow=!1)}).catch(function(t){console.dir(t),422===t.response.status?s.$message({showClose:!0,message:t.response.data.name[0],type:"error",duration:2e3}):500===t.response.status&&s.$message({showClose:!0,message:"保存失败",type:"error",duration:2e3})})},getEdit:function(e){var s=this,i="/api/"+this.$store.state.global.currentRouteName+"/"+e.id+"/edit";t.get(i).then(function(t){200===t.status&&(e.list.forEach(function(e,i,a){e.val=s.$pickObjectValue(t.data,e.name)}),s.showDialog(e))}).catch(function(t){404===t.response.status&&s.$router.push("/404")})},edit:function(e){var s=this,i="/api/"+this.$store.state.global.currentRouteName+"/"+e.id,a={};e.list.forEach(function(t,e,s){a[t.name]=t.val}),t.put(i,a).then(function(t){200===t.status&&(s.tableStructure.forEach(function(s,i,a){if(s.id===e.id)for(var o in s)t.data[o]&&(s[o]=t.data[o])}),s.isShow=!1)}).catch(function(t){422===t.response.status?s.$message({showClose:!0,message:t.response.data.name[0],type:"error",duration:2e3}):s.$message({showClose:!0,message:"保存失败",type:"error",duration:2e3})})},del:function(e){var s=this;this.delDialogVisible=!1;var i="/api/"+this.$store.state.global.currentRouteName+"/"+e.id;t.delete(i).then(function(t){console.dir(t),200===t.status&&s.initData()}).catch(function(t){console.dir(t)})},handleDelList:function(e){var s="/api/util/batch-delete/"+this.$store.state.global.currentRouteName,i={ids:[]};e.forEach(function(t,e){i.ids.push(t.id)}),t.post(s,i).then(function(t){console.dir(t)}).catch(function(t){console.dir(t)})},handleChangeStatus:function(e){var s=this,i="/api/util/status/"+this.$store.state.global.currentRouteName+"/"+e.id;t.get(i).then(function(t){console.dir(t),200===t.status&&(s.tableStructure.forEach(function(s,i){s.id===e.id&&(s.status=t.data.res)}),s.$message({showClose:!0,message:1===t.data.res?"已启用":"已停用",type:"success",duration:1e3}))}).catch(function(t){console.dir(t)})},handleSingleData:function(e){console.log(e);var s="/api/"+this.$store.state.global.currentRouteName+"/"+e.id;t.get(s).then(function(t){console.dir(t)}).catch(function(t){console.dir(t)})},searchData:function(e){console.log(e);var s="/api/"+this.$store.state.global.currentRouteName,i={query_text:e};console.log(i),t.get(s,i).then(function(t){console.log(t)},function(t){console.log(t)})},msgList2Obj:function(t){var e={};return t.forEach(function(t,s){e[t.name]=t.val}),e}},watch:{$route:function(t,e){this.$store.commit("SET_ROUTENAME",{name:t.name}),this.initData()}}}}).call(e,s(58))},83:function(t,e){var s,i;i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),t.exports=s},84:function(t,e,s){var i,a;s(85),i=s(86);var o=s(88);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-e108e58a",t.exports=i},85:function(t,e){},86:function(t,e,s){(function(t,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"dialog",props:{isVisible:Boolean,dialogMsg:Object},data:function(){return{disable:!0}},methods:{closedialog:function(t){this.disable=!0,this.$emit("closedialog")},savedialog:function(t){var e=this;this.disable=!0,this.$refs[t].validate(function(t){return t?void e.$emit("savedialog",e.dialogMsg):(console.log("error submit!!"),!1)})},resetForm:function(t){this.disable=!0,this.$refs[t].resetFields()},validatePass:function(e,i,a){var o=e.fullField,n=o.substr(o.indexOf(".")+1,1);if(""==t.trim(i)||null==i)a(new Error(this.dialogMsg.list[n].tit+"不能为空!"));else{console.dir(this.dialogMsg.list[n]);var l="/api/util/check/"+this.$store.state.global.currentRouteName,r={id:this.dialogMsg.id,field:this.dialogMsg.list[n].name,value:this.dialogMsg.list[n].val};s.post(l,r).then(function(t){"true"==t.data.res?a():a(new Error("该名字已存在"))}).catch(function(t){console.log(t)})}}}}}).call(e,s(87),s(58))},88:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"dialogfade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"dialog"},[s("el-form",{ref:"dialogMsg",attrs:{model:t.dialogMsg}},[s("i",{staticClass:"close el-icon-close",on:{click:function(e){t.closedialog("dialogMsg")}}}),t._v(" "),s("div",{staticClass:"dialog-title"},[s("h1",[t._v(t._s(t.dialogMsg.title))])]),t._v(" "),s("div",{staticClass:"dialog-content"},[s("li",t._l(t.dialogMsg.list,function(e,i){return s("el-form-item",{key:i,attrs:{label:e.tit+"：",prop:"list."+i+".val",rules:{validator:t.validatePass,trigger:"blur"}}},[s("el-input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"item.val"}],staticClass:"dialog-textarea",attrs:{type:"textarea",rows:i==t.dialogMsg.list.length-1?5:2,resize:"none",placeholder:"请输入内容"},domProps:{value:e.val},on:{change:function(e){t.disable=!1},input:function(t){e.val=t}}})],1)}))]),t._v(" "),s("div",{staticClass:"dialog-opt"},[s("el-form-item",[s("el-button",{staticClass:"btn submit",attrs:{type:"primary",disabled:t.disable},on:{click:function(e){t.savedialog("dialogMsg")}}},[t._v("保存")]),t._v(" "),s("el-button",{staticClass:"btn reset",on:{click:function(e){t.resetForm("dialogMsg")}}},[t._v("重置")])],1)],1)])],1)])},staticRenderFns:[]}},89:function(t,e,s){var i,a;i=s(90);var o=s(91);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},90:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"deldialog",props:{delDialogVisible:Boolean,delDialogMsg:Object},data:function(){return{isVisible:!1,f:!1}},methods:{sub:function(){this.$emit("sub",this.delDialogMsg)},cancel:function(){this.isVisible=!1,this.$emit("cancel")}},watch:{delDialogVisible:function(t,e){console.log(t),console.log(e),this.isVisible=this.delDialogVisible}}}},91:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{directives:[{name:"model",rawName:"v-model",value:t.isVisible,expression:"isVisible"}],attrs:{title:"警告",size:"tiny","show-close":!1},domProps:{value:t.isVisible},on:{input:function(e){t.isVisible=e}}},[s("span",[t._v("是否要删除这条数据？")]),t._v(" "),s("span",{staticClass:"dialog-footer",slot:"footer"},[s("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.sub}},[t._v("确 定")])],1)])},staticRenderFns:[]}},92:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sensor"},[s("SliderBar",{staticClass:"sliderbar",attrs:{sliderList:t.sliderList}}),t._v(" "),s("div",{staticClass:"contain"},[s("router-view",{attrs:{tableStructure:t.tableStructure},on:{addSensor:t.showDialog,editSensor:t.getEdit,delSensor:t.showDelDialog,delList:t.handleDelList,handleSearch:t.searchData,changeStatus:t.handleChangeStatus,singleData:t.handleSingleData,CurrentChange:t.pageChange}})],1),t._v(" "),s("BDialog",{staticClass:"center",attrs:{isVisible:t.isShow,dialogMsg:t.dialogMsg},on:{closedialog:function(e){t.isShow=!1},savedialog:t.saveDialog}}),t._v(" "),s("DelDialog",{attrs:{delDialogVisible:t.delDialogVisible,delDialogMsg:t.delDialogMsg},on:{sub:t.del,cancel:t.hideDelDialog}})],1)},staticRenderFns:[]}}});