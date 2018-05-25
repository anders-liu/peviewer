/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui/scripts/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, title, description, version, author, license, homepage, bugs, repository, keywords, scripts, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"peviewer-dev","title":"PE Viewer","description":"Development working space of [peviewer.net](https://github.com/anders-liu/peviewer).","version":"0.0.1","author":"Anders Liu","license":"MIT","homepage":"https://github.com/anders-liu/peviewer-dev#readme","bugs":{"url":"https://github.com/anders-liu/peviewer-dev/issues"},"repository":{"type":"git","url":"git+https://github.com/anders-liu/peviewer-dev.git"},"keywords":["PE","EXE","DLL"],"scripts":{"build":"gulp","start":"pushd .\\out\\dist & start http-server -p 8051 & popd & start http://localhost:8051/dev"},"devDependencies":{"@types/react":"^16.3.5","@types/react-dom":"^16.0.4","@types/react-redux":"^5.0.15","@types/redux":"^3.6.0","gulp":"^3.9.1","gulp-replace":"^0.6.1","react":"^16.3.1","react-dom":"^16.3.1","react-redux":"^5.0.7","redux":"^3.7.2","ts-loader":"^4.2.0","typescript":"^2.8.3","webpack":"^4.6.0","webpack-stream":"^4.0.3"}};

/***/ }),

/***/ "./src/ui/scripts/action-listener.ts":
/*!*******************************************!*\
  !*** ./src/ui/scripts/action-listener.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.actionListenerMiddleware = (function (store) { return function (next) { return function (action) {
    switch (action.type) {
        case "OPEN_FILE": {
            var appInfo = store.getState().appInfo;
            var file = action.file;
            document.title = file.name + " - " + appInfo.title;
            break;
        }
    }
    return next(action);
}; }; });


/***/ }),

/***/ "./src/ui/scripts/components/app.tsx":
/*!*******************************************!*\
  !*** ./src/ui/scripts/components/app.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "react");
var page_header_1 = __webpack_require__(/*! ./page-header */ "./src/ui/scripts/components/page-header.tsx");
var page_content_1 = __webpack_require__(/*! ./page-content */ "./src/ui/scripts/components/page-content.tsx");
var page_footer_1 = __webpack_require__(/*! ./page-footer */ "./src/ui/scripts/components/page-footer.tsx");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(page_header_1.PageHeader, null),
            React.createElement(page_content_1.PageContent, null),
            React.createElement(page_footer_1.PageFooter, null)));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),

/***/ "./src/ui/scripts/components/open-file-page.tsx":
/*!******************************************************!*\
  !*** ./src/ui/scripts/components/open-file-page.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "react");
var ReactRedux = __webpack_require__(/*! react-redux */ "react-redux");
var A = __webpack_require__(/*! ../store/actions */ "./src/ui/scripts/store/actions.ts");
function mapDispatchToProps(dispatch) {
    return {
        onFileSelected: function (file) { return dispatch(A.createOpenFileAction(file)); }
    };
}
var OpenFilePageClass = (function (_super) {
    __extends(OpenFilePageClass, _super);
    function OpenFilePageClass(props) {
        var _this = _super.call(this, props) || this;
        _this.onFileChange = _this.onFileChange.bind(_this);
        return _this;
    }
    OpenFilePageClass.prototype.render = function () {
        return (React.createElement("section", { className: "file-opener" },
            React.createElement("div", null, "Select a file:"),
            React.createElement("div", null,
                React.createElement("input", { type: "file", onChange: this.onFileChange })),
            React.createElement("div", null, "No data would be uploaded, all things are parsed locally.")));
    };
    OpenFilePageClass.prototype.onFileChange = function (ev) {
        var onFileSelected = this.props.onFileSelected;
        var fileList = ev.target.files;
        if (fileList && fileList.length > 0) {
            onFileSelected(fileList[0]);
        }
    };
    return OpenFilePageClass;
}(React.Component));
exports.OpenFilePage = ReactRedux.connect(null, mapDispatchToProps)(OpenFilePageClass);


/***/ }),

/***/ "./src/ui/scripts/components/page-content.tsx":
/*!****************************************************!*\
  !*** ./src/ui/scripts/components/page-content.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "react");
var ReactRedux = __webpack_require__(/*! react-redux */ "react-redux");
var open_file_page_1 = __webpack_require__(/*! ./open-file-page */ "./src/ui/scripts/components/open-file-page.tsx");
function mapStateToProps(state) {
    return {};
}
var PageContentClass = (function (_super) {
    __extends(PageContentClass, _super);
    function PageContentClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageContentClass.prototype.render = function () {
        return (React.createElement("section", { id: "app-content" },
            React.createElement(open_file_page_1.OpenFilePage, null)));
    };
    return PageContentClass;
}(React.Component));
exports.PageContent = ReactRedux.connect(mapStateToProps)(PageContentClass);


/***/ }),

/***/ "./src/ui/scripts/components/page-footer.tsx":
/*!***************************************************!*\
  !*** ./src/ui/scripts/components/page-footer.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "react");
var ReactRedux = __webpack_require__(/*! react-redux */ "react-redux");
function mapStateToProps(state) {
    var appInfo = state.appInfo;
    return {
        appInfo: appInfo
    };
}
var PageFooterClass = (function (_super) {
    __extends(PageFooterClass, _super);
    function PageFooterClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageFooterClass.prototype.render = function () {
        var appInfo = this.props.appInfo;
        var title = appInfo.title, version = appInfo.version, author = appInfo.author, homepage = appInfo.homepage, bugsUrl = appInfo.bugsUrl, year = appInfo.year;
        return (React.createElement("footer", { id: "app-footer" },
            React.createElement("div", null,
                title,
                ". Coypright \u00A9 ",
                author,
                " ",
                year,
                ". Version ",
                version),
            React.createElement("div", null,
                React.createElement("a", { href: homepage, target: "_blank" }, "View on GitHub"),
                " | ",
                React.createElement("a", { href: bugsUrl, target: "_blank" }, "Report Issue"))));
    };
    return PageFooterClass;
}(React.Component));
exports.PageFooter = ReactRedux.connect(mapStateToProps)(PageFooterClass);


/***/ }),

/***/ "./src/ui/scripts/components/page-header.tsx":
/*!***************************************************!*\
  !*** ./src/ui/scripts/components/page-header.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "react");
var PageHeader = (function (_super) {
    __extends(PageHeader, _super);
    function PageHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageHeader.prototype.render = function () {
        return (React.createElement("header", { id: "app-header" },
            React.createElement("h1", null, "Welcome to PE Viewer.")));
    };
    return PageHeader;
}(React.Component));
exports.PageHeader = PageHeader;


/***/ }),

/***/ "./src/ui/scripts/index.tsx":
/*!**********************************!*\
  !*** ./src/ui/scripts/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var Redux = __webpack_require__(/*! redux */ "redux");
var ReactRedux = __webpack_require__(/*! react-redux */ "react-redux");
var packageJson = __webpack_require__(/*! package.json */ "./package.json");
var R = __webpack_require__(/*! ./store/reducers */ "./src/ui/scripts/store/reducers.ts");
var app_1 = __webpack_require__(/*! ./components/app */ "./src/ui/scripts/components/app.tsx");
var action_listener_1 = __webpack_require__(/*! ./action-listener */ "./src/ui/scripts/action-listener.ts");
var worker_client_1 = __webpack_require__(/*! ./worker-client */ "./src/ui/scripts/worker-client.ts");
var appInfo = {
    title: packageJson.title,
    version: packageJson.version,
    author: packageJson.author,
    homepage: packageJson.homepage,
    bugsUrl: packageJson.bugs.url,
    year: new Date().getFullYear().toString()
};
var defaultState = {
    appInfo: appInfo,
    fileInfo: null
};
document.title = "" + appInfo.title;
var _w = window;
var composeEnhancers = _w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
var store = Redux.createStore(R.appReducer, defaultState, composeEnhancers(Redux.applyMiddleware(action_listener_1.actionListenerMiddleware, worker_client_1.workerClientMiddleware)));
worker_client_1.initWorkerClient(store);
ReactDOM.render(React.createElement(ReactRedux.Provider, { store: store },
    React.createElement(app_1.App, null)), document.getElementById("app"));


/***/ }),

/***/ "./src/ui/scripts/store/actions.ts":
/*!*****************************************!*\
  !*** ./src/ui/scripts/store/actions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function createOpenFileAction(file) {
    return {
        type: "OPEN_FILE",
        file: file
    };
}
exports.createOpenFileAction = createOpenFileAction;


/***/ }),

/***/ "./src/ui/scripts/store/reducers.ts":
/*!******************************************!*\
  !*** ./src/ui/scripts/store/reducers.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Redux = __webpack_require__(/*! redux */ "redux");
exports.appReducer = Redux.combineReducers({
    appInfo: appInfo,
    fileInfo: fileInfo
});
function appInfo(state, action) {
    if (state === void 0) { state = null; }
    return state;
}
function fileInfo(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "OPEN_FILE": {
            var file = action.file;
            var name_1 = file.name, size = file.size;
            return Object.assign({}, state, { name: name_1, size: size });
        }
        default: return state;
    }
}


/***/ }),

/***/ "./src/ui/scripts/worker-client.ts":
/*!*****************************************!*\
  !*** ./src/ui/scripts/worker-client.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var WM = __webpack_require__(/*! ./worker-message */ "./src/ui/scripts/worker-message.ts");
exports.workerClientMiddleware = (function (store) { return function (next) { return function (action) {
    switch (action.type) {
        case "OPEN_FILE": {
            var file = action.file;
            _worker.postMessage(WM.createReqOpenFileMessage(file));
            break;
        }
    }
    return next(action);
}; }; });
function initWorkerClient(store) {
    _store = store;
    _worker = new Worker("worker.js");
    _worker.onmessage = function (ev) { return handleMessage(ev.data); };
}
exports.initWorkerClient = initWorkerClient;
function handleMessage(msg) {
    switch (msg.type) {
        case "RES_NAV_DATA": break;
        case "RES_PAGE_DATA": break;
        case "RES_PE_ERROR": break;
    }
}
var _worker;
var _store;


/***/ }),

/***/ "./src/ui/scripts/worker-message.ts":
/*!******************************************!*\
  !*** ./src/ui/scripts/worker-message.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function createReqOpenFileMessage(file) {
    return {
        type: "REQ_OPEN_FILE",
        file: file
    };
}
exports.createReqOpenFileMessage = createReqOpenFileMessage;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "ReactRedux" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "Redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ })

/******/ });
//# sourceMappingURL=ui.js.map