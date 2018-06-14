!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactRedux},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(1),l=n(5);var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props.pageID;if(e){var t={pageID:e,title:"TOP"};return o.createElement("div",{className:"top-lnk"},o.createElement(l.NavLink,{target:t,title:"Back to top"}))}return null},t}(o.Component);t.TopLink=i.connect(function(e){var t=e.pageData;return{pageID:t&&t.nav.pageID}})(c)},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0);function i(e,t){return o.createElement("h2",{id:t,className:"struct-title"},e)}function l(e){return i(e.title,e.elemID)}function c(e,t){var n=e.offset,r=e.size,a=e.rawData,i=e.name,l=e.value;e.descriptions;return o.createElement("tr",{key:t,className:"st-tr"},o.createElement("td",null,n),o.createElement("td",null,r),o.createElement("td",null,a.map(function(e,t){return o.createElement("div",{className:"td-line",key:t},e)})),o.createElement("td",null,i),o.createElement("td",{className:"wrap"},l),o.createElement("td",null))}t.renderTableTitle=i,t.renderSimpleStruct=function(e){return o.createElement("div",{className:"struct-data"},l(e),o.createElement(u,null,e.items&&e.items.map(function(e,t){return c(e,t.toString())})))},t.renderGroupedStruct=function(e){return o.createElement("div",{className:"struct-data"},l(e),o.createElement(u,null,e.groups&&e.groups.map(function(e,t){return[(n=e.title,r=t.toString(),n?o.createElement("tr",{key:r,className:"st-grphdr"},o.createElement("th",{colSpan:6},n)):null)].concat(e.items&&e.items.map(function(e,n){return c(e,t+"."+n)})||[]);var n,r})))};var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return o.createElement("table",{className:"struct-table"},o.createElement("thead",null,o.createElement("tr",{className:"st-hdr"},o.createElement("th",null,"Offset"),o.createElement("th",null,"Size"),o.createElement("th",null,"Raw Data"),o.createElement("th",null,"Name"),o.createElement("th",null,"Value"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,this.props.children))},t}(o.Component)},function(e,t,n){"use strict";t.__esModule=!0,t.createOpenFileAction=function(e){return{type:"OPEN_FILE",file:e}},t.createOpenNavAction=function(e){return{type:"OPEN_NAV",target:e}},t.createSetNavListAction=function(e){return{type:"SET_NAV_LIST",navList:e}},t.createSetPageDataAction=function(e){return{type:"SET_PAGE_DATA",data:e}},t.createSetPEPropsAction=function(e,t){return{type:"SET_PE_PROPS",is32Bit:e,isManaged:t}}},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(1),l=n(4);var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.target,n=e.disable,r=e.text,a=e.title,i=e.extraClass,l=e.onClick,c="nav";return n&&(c+=" disabled"),i&&(c+=" "+i),n||!t?o.createElement("span",{className:c,title:a},r):o.createElement("a",{className:c,title:a||t.title,onClick:l},r||t.title)},t}(o.Component);t.NavLink=i.connect(null,function(e,t){return{onClick:function(){e(l.createOpenNavAction(t.target))}}})(c)},function(e,t){e.exports=Redux},function(e,t,n){"use strict";t.__esModule=!0,t.createReqOpenFileMessage=function(e){return{type:"REQ_OPEN_FILE",file:e}},t.createReqOpenNavMessage=function(e){return{type:"REQ_OPEN_NAV",target:e}}},function(e,t,n){"use strict";t.__esModule=!0;var r,a,o=n(4),i=n(7);t.workerClientMiddleware=function(e){return function(t){return function(n){switch(n.type){case"OPEN_FILE":var a=n.file;r.postMessage(i.createReqOpenFileMessage(a));break;case"OPEN_NAV":var o=n.target,l=e.getState().pageData,c=o.pageID,u=o.pageNum;l&&l.nav.pageID==c&&l.nav.pageNum==u||r.postMessage(i.createReqOpenNavMessage(o))}return t(n)}}},t.initWorkerClient=function(e){a=e,(r=new Worker("worker.js")).onmessage=function(e){return function(e){switch(e.type){case"RES_NAV_DATA":var t=e.navList;a.dispatch(o.createSetNavListAction(t));break;case"RES_PAGE_DATA":var n=e.pageData;a.dispatch(o.createSetPageDataAction(n));break;case"RES_PE_PROPS":var r=e,i=r.is32Bit,l=r.isManaged;a.dispatch(o.createSetPEPropsAction(i,l))}}(e.data)}}},function(e,t,n){"use strict";function r(e){setTimeout(function(){var t;e?(t=document.getElementById(e))&&t.scrollIntoView():(t=document.getElementById("app-content"))&&(t.scrollTop=0)},1)}t.__esModule=!0,t.actionListenerMiddleware=function(e){return function(t){return function(n){switch(n.type){case"OPEN_FILE":var a=e.getState().appInfo,o=n.file;document.title=o.name+" - "+a.title;break;case"OPEN_NAV":var i=e.getState().pageData,l=n.target,c=l.pageID,u=l.elemID;i&&i.nav.pageID===c&&r(u);break;case"SET_PAGE_DATA":r(n.data.nav.elemID)}return t(n)}}}},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(1);var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props.appInfo,t=e.title,n=e.version,r=e.author,a=e.homepage,i=e.bugsUrl,l=e.releaseNotesUrl,c=e.buildTimeLocal,u=e.year;return o.createElement("footer",{id:"app-footer"},o.createElement("div",null,o.createElement("strong",null,t)),o.createElement("div",null,"© ",u," ",r),o.createElement("div",null,"Version ",n),o.createElement("div",null,"Last build: ",c),o.createElement("div",null,o.createElement("a",{href:l+"#"+n,target:"_blank"},"Release Notes")),o.createElement("div",null,o.createElement("a",{href:"/latest",target:"_blank"},"Try Latest Build")),o.createElement("div",null,o.createElement("a",{href:a,target:"_blank"},"View on GitHub")),o.createElement("div",null,o.createElement("a",{href:i,target:"_blank"},"Report Issue")))},t}(o.Component);t.PageFooter=i.connect(function(e){return{appInfo:e.appInfo}})(l)},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(1),l=n(4),c=n(5);var u=function(e){function t(t){var n=e.call(this,t)||this;return n.handleSelectChange=n.handleSelectChange.bind(n),n}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.paging,n=e.pageData;if(!t||!n||t.pageNavList.length<=1)return null;var r=t.currentPageNumber,a=t.pageNavList;n.nav;return o.createElement("div",{className:"pgn"},o.createElement(c.NavLink,{target:a[r-1],disable:r<=0,text:"< prev"}),o.createElement("select",{onChange:this.handleSelectChange,value:a[r].title},t.pageNavList.map(function(e,t){return o.createElement("option",{key:t},e.title)})),o.createElement(c.NavLink,{target:a[r+1],disable:r>=a.length-1,text:"next >"}))},t.prototype.handleSelectChange=function(e){var t=this.props,n=t.paging;(0,t.onSelectionChange)(n.pageNavList[e.currentTarget.selectedIndex])},t}(o.Component);t.Paginate=i.connect(function(e){var t=e.pageData;return{paging:t&&t.paging,pageData:t}},function(e){return{onSelectionChange:function(t){e(l.createOpenNavAction(t))}}})(u)},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(3),l=n(2),c=n(11),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props.data;return o.createElement("section",{className:"data-page"},o.createElement(c.Paginate,null),i.renderGroupedStruct(e.items),o.createElement(c.Paginate,null),o.createElement(l.TopLink,null))},t}(o.Component);t.PagedItemListPage=u},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(3),l=n(2),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props.data;return o.createElement("section",{className:"data-page"},i.renderGroupedStruct(e.tableHeader),o.createElement(l.TopLink,null),this.renderTableList(),o.createElement(l.TopLink,null))},t.prototype.renderTableList=function(){return o.createElement("div",{className:"struct-data"},i.renderTableTitle("Metadata Table List","mdt-lst"),o.createElement("table",{className:"struct-table"},o.createElement("thead",null,o.createElement("tr",{className:"st-hdr"},o.createElement("th",null,"Index"),o.createElement("th",null,"Name"),o.createElement("th",null,"Rows"),o.createElement("th",null,"Valid"),o.createElement("th",null,"Sorted"),o.createElement("th",null,"Link"))),o.createElement("tbody",null,this.props.data.tableInfo.map(function(e,t){return o.createElement("tr",{key:t,className:"st-tr"},o.createElement("td",null,e.index),o.createElement("td",null,e.name),o.createElement("td",null,e.rows),o.createElement("td",null,e.valid?"X":""),o.createElement("td",null,e.sorted?"X":""),o.createElement("td",null))}))))},t}(o.Component);t.MdsTablePage=c},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(3),l=n(2),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props.data;return o.createElement("section",{className:"data-page"},i.renderSimpleStruct(e.cliHeader),o.createElement(l.TopLink,null),this.renderMetadataRoot(),this.renderStreamHeaders(),this.renderSNSignature())},t.prototype.renderMetadataRoot=function(){var e=this.props.data;return e.metadataRoot&&o.createElement(o.Fragment,null,i.renderSimpleStruct(e.metadataRoot),o.createElement(l.TopLink,null))},t.prototype.renderStreamHeaders=function(){var e=this.props.data;return e.streamHeaders&&o.createElement(o.Fragment,null,i.renderGroupedStruct(e.streamHeaders),o.createElement(l.TopLink,null))},t.prototype.renderSNSignature=function(){var e=this.props.data;return e.snSignature&&o.createElement(o.Fragment,null,i.renderSimpleStruct(e.snSignature),o.createElement(l.TopLink,null))},t}(o.Component);t.MetadataHeadersPage=c},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(3),l=n(2),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props.data;return o.createElement("section",{className:"data-page"},i.renderSimpleStruct(e.dosHeader),o.createElement(l.TopLink,null),i.renderSimpleStruct(e.peSignature),o.createElement(l.TopLink,null),i.renderSimpleStruct(e.fileHeader),o.createElement(l.TopLink,null),i.renderGroupedStruct(e.optionalHeader),o.createElement(l.TopLink,null),i.renderGroupedStruct(e.dataDirectories),o.createElement(l.TopLink,null),i.renderGroupedStruct(e.sectionHeaders),o.createElement(l.TopLink,null))},t}(o.Component);t.HeadersPage=c},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(1),l=n(4);var c=function(e){function t(t){var n=e.call(this,t)||this;return n.onFileChange=n.onFileChange.bind(n),n}return a(t,e),t.prototype.render=function(){return o.createElement("section",{className:"file-opener"},o.createElement("div",null,"Select a file:"),o.createElement("div",null,o.createElement("input",{type:"file",onChange:this.onFileChange})),o.createElement("div",{className:"info"},"No data would be uploaded, everything is parsed locally."))},t.prototype.onFileChange=function(e){var t=this.props.onFileSelected,n=e.target.files;n&&n.length>0&&t(n[0])},t}(o.Component);t.OpenFilePage=i.connect(null,function(e){return{onFileSelected:function(t){return e(l.createOpenFileAction(t))}}})(c)},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(1),l=n(16),c=n(15),u=n(14),s=n(13),p=n(12);var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return o.createElement("section",{id:"app-content"},this.renderContent())},t.prototype.renderContent=function(){var e=this.props.pageData;if(null==e)return o.createElement(l.OpenFilePage,null);switch(e.nav.pageID){case"HEADERS":return o.createElement(c.HeadersPage,{data:e});case"MD_HEADERS":return o.createElement(u.MetadataHeadersPage,{data:e});case"MDS_TABLE":return o.createElement(s.MdsTablePage,{data:e});case"MDS_STRINGS":case"MDS_US":case"MDS_GUID":case"MDS_BLOB":case"MDT_TBL":return o.createElement(p.PagedItemListPage,{data:e});default:return o.createElement("div",null,"Page not found.")}},t}(o.Component);t.PageContent=i.connect(function(e){return{pageData:e.pageData}})(f)},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(1),l=n(5);var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props.navList;return e&&0!=e.length?o.createElement("section",{id:"app-nav-list"},this.renderNavList(e)):null},t.prototype.renderNavList=function(e){var t=this;this.props.pageData;return o.createElement("ul",null,e.map(function(e,n){return o.createElement("li",{key:n},o.createElement(l.NavLink,{target:e.target,extraClass:t.isSelected(e.target)?"strong":""}),e.children&&t.renderNavList(e.children))}))},t.prototype.isSelected=function(e){var t=this.props.pageData;if(!t)return!1;var n=t.nav,r=n.pageID,a=n.subID;return r==e.pageID&&null==e.elemID&&(null==a||a==e.subID)},t}(o.Component);t.PageNavList=i.connect(function(e){return{pageData:e.pageData,navList:e.navList}})(c)},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(1);var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props.fileInfo;return o.createElement("header",{id:"app-header"},e?this.renderFileInfo(e):this.renderWelcome(),!e&&o.createElement("div",null,"PE Viewer is a simple single-page web application for viewing content of a PE (Portable Executable) file, which is the executabule file on Windows operating system and Microsoft .NET."))},t.prototype.renderWelcome=function(){return o.createElement("div",{className:"pg-title-line"},o.createElement("h1",{className:"pg-title"},"Welcome to PE Viewer."))},t.prototype.renderFileInfo=function(e){var t=e.name,n=e.size,r=e.is32Bit,a=e.isManaged;return o.createElement("div",{className:"pg-title-line"},o.createElement("h1",{className:"pg-title"},t),o.createElement("div",{className:"pg-finfo"},o.createElement("span",null,n.toLocaleString()," bytes."),null!=r&&o.createElement(o.Fragment,null,o.createElement("span",null," | "),o.createElement("span",null,r?"32-bit":"64-bit")),null!=a&&o.createElement(o.Fragment,null,o.createElement("span",null," | "),o.createElement("span",null,a?"managed":"unmanaged"))))},t}(o.Component);t.PageHeader=i.connect(function(e){return{fileInfo:e.fileInfo,navList:e.navList}})(l)},function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var o=n(0),i=n(19),l=n(18),c=n(17),u=n(10),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement(i.PageHeader,null),o.createElement(l.PageNavList,null),o.createElement(c.PageContent,null),o.createElement(u.PageFooter,null))},t}(o.Component);t.App=s},function(e,t,n){"use strict";t.__esModule=!0;var r=n(6);t.appReducer=r.combineReducers({appInfo:function(e,t){void 0===e&&(e=null);return e},fileInfo:function(e,t){void 0===e&&(e=null);switch(t.type){case"OPEN_FILE":var n=t.file,r=n.name,a=n.size;return Object.assign({},e,{name:r,size:a});case"SET_PE_PROPS":var o=t,i=o.is32Bit,l=o.isManaged;return Object.assign({},e,{is32Bit:i,isManaged:l});default:return e}},pageData:function(e,t){void 0===e&&(e=null);switch(t.type){case"SET_PAGE_DATA":var n=t.data;return n;default:return e}},navList:function(e,t){void 0===e&&(e=[]);switch(t.type){case"SET_NAV_LIST":var n=t.navList;return n;default:return e}}})},function(e){e.exports={title:"PE Viewer",version:"0.1.2",author:"Anders Liu",homepage:"https://github.com/anders-liu/peviewer-dev#readme",bugs_url:"https://github.com/anders-liu/peviewer-dev/issues",release_notes:"https://github.com/anders-liu/peviewer/blob/master/RELEASES.md",build_time:"Thu, 14 Jun 2018 04:45:04 GMT"}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),a=n(23),o=n(6),i=n(1),l=n(22),c=n(21),u=n(20),s=n(9),p=n(8),f={title:l.title,version:l.version,author:l.author,homepage:l.homepage,bugsUrl:l.bugs_url,releaseNotesUrl:l.release_notes,buildTimeLocal:new Date(Date.parse(l.build_time)).toLocaleString(),year:(new Date).getFullYear().toString()},d={appInfo:f,navList:[]};document.title=""+f.title;var m=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.compose,_=o.createStore(c.appReducer,d,m(o.applyMiddleware(s.actionListenerMiddleware,p.workerClientMiddleware)));p.initWorkerClient(_),a.render(r.createElement(i.Provider,{store:_},r.createElement(u.App,null)),document.getElementById("app"))}]);
//# sourceMappingURL=ui.js.map