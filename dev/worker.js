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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/worker/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/worker/index.ts":
/*!*****************************!*\
  !*** ./src/worker/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var M = __webpack_require__(/*! ./message */ "./src/worker/message.ts");
var image_1 = __webpack_require__(/*! ./pe/image */ "./src/worker/pe/image.ts");
var generator_1 = __webpack_require__(/*! ./page-data/generator */ "./src/worker/page-data/generator.ts");
var pe = null;
onmessage = function (ev) {
    var msg = ev.data;
    switch (msg.type) {
        case "REQ_OPEN_FILE":
            handleReqOpenFile(msg);
            break;
    }
};
function handleReqOpenFile(msg) {
    var reader = new FileReader();
    reader.onload = function (ev) {
        try {
            var buf = ev.target.result;
            pe = image_1.PEImage.load(buf);
            var pageData = generator_1.generatePageData(pe, "HEADERS");
            var msg_1 = M.createResPageDataMessage(pageData);
            postMessage(msg_1);
        }
        catch (ex) {
            var msg_2 = M.createResPEErrorMessage(ex.message
                || "Unknown error: " + JSON.stringify(ex));
            postMessage(msg_2);
        }
    };
    reader.onerror = function (ev) {
        pe = null;
        var msg = M.createResPEErrorMessage("Can't open file.");
        postMessage(msg);
    };
    reader.readAsArrayBuffer(msg.file);
}


/***/ }),

/***/ "./src/worker/message.ts":
/*!*******************************!*\
  !*** ./src/worker/message.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function createResNavDataMessage(navList) {
    return {
        type: "RES_NAV_DATA",
        navList: navList
    };
}
exports.createResNavDataMessage = createResNavDataMessage;
function createResPageDataMessage(pageData) {
    return {
        type: "RES_PAGE_DATA",
        pageData: pageData
    };
}
exports.createResPageDataMessage = createResPageDataMessage;
function createResPEErrorMessage(error) {
    return {
        type: "RES_PE_ERROR",
        error: error
    };
}
exports.createResPEErrorMessage = createResPEErrorMessage;


/***/ }),

/***/ "./src/worker/page-data/formatter.ts":
/*!*******************************************!*\
  !*** ./src/worker/page-data/formatter.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function formatU1RawHex(d) {
    return padZeroLeft(d.toString(16).toUpperCase(), 2);
}
exports.formatU1RawHex = formatU1RawHex;
function formatU2RawHex(d) {
    return padZeroLeft(d.toString(16).toUpperCase(), 4);
}
exports.formatU2RawHex = formatU2RawHex;
function formatU4RawHex(d) {
    return padZeroLeft(d.toString(16).toUpperCase(), 8);
}
exports.formatU4RawHex = formatU4RawHex;
function formatU1Hex(d) {
    return formatU1RawHex(d) + "h";
}
exports.formatU1Hex = formatU1Hex;
function formatU2Hex(d) {
    return formatU2RawHex(d) + "h";
}
exports.formatU2Hex = formatU2Hex;
function formatU4Hex(d) {
    return formatU4RawHex(d) + "h";
}
exports.formatU4Hex = formatU4Hex;
function formatHexDec(d) {
    return d.toString(16).toUpperCase() + "h (" + d + ")";
}
exports.formatHexDec = formatHexDec;
function formatBytes(bytes, lineWidth) {
    if (lineWidth === void 0) { lineWidth = 16; }
    var lines = [];
    for (var start = 0; start < bytes.length; start += lineWidth) {
        var line = Array.from(bytes.subarray(start, start + lineWidth))
            .map(function (b) { return formatU1RawHex(b); }).join("-");
        lines.push(line);
    }
    return lines;
}
exports.formatBytes = formatBytes;
function formatStructTitle(s, title) {
    return title + " [" + formatU4Hex(s._offset) + " - " + formatU4Hex(s._offset + s._size) + " : " + formatHexDec(s._size) + "]";
}
exports.formatStructTitle = formatStructTitle;
function formatU1Field(name, f, showDec) {
    return formatUIntField(name, f, 1, showDec);
}
exports.formatU1Field = formatU1Field;
function formatU2Field(name, f, showDec) {
    return formatUIntField(name, f, 2, showDec);
}
exports.formatU2Field = formatU2Field;
function formatU4Field(name, f, showDec) {
    return formatUIntField(name, f, 4, showDec);
}
exports.formatU4Field = formatU4Field;
function formatU8Field(name, f, showDec) {
    var value = formatU4RawHex(f.high) + " " + formatU4Hex(f.low);
    if (showDec && f.high < 0x1FFFFF) {
        var long = f.high * 0x100000000 + f.low;
        value += " (" + formatDec(long) + ")";
    }
    return {
        offset: formatU4Hex(f._offset),
        size: formatHexDec(f._size),
        rawData: formatBytes(f.data),
        name: name,
        value: value
    };
}
exports.formatU8Field = formatU8Field;
function formatBytesField(name, f) {
    return {
        offset: formatU4Hex(f._offset),
        size: formatHexDec(f._size),
        rawData: formatBytes(f.data),
        name: name,
        value: ""
    };
}
exports.formatBytesField = formatBytesField;
function formatStringField(name, f) {
    return {
        offset: formatU4Hex(f._offset),
        size: formatHexDec(f._size),
        rawData: formatBytes(f.data),
        name: name,
        value: "\"" + f.value + "\""
    };
}
exports.formatStringField = formatStringField;
function padZeroLeft(str, len) {
    if (str.length < len) {
        return "0".repeat(len - str.length) + str;
    }
    else {
        return str;
    }
}
function formatUIntField(name, f, sz, showDec) {
    var hex;
    switch (sz) {
        case 1:
            hex = formatU1Hex(f.value);
            break;
        case 2:
            hex = formatU2Hex(f.value);
            break;
        case 4:
            hex = formatU4Hex(f.value);
            break;
        default:
            hex = f.value.toString(16).toUpperCase();
            break;
    }
    return {
        offset: formatU4Hex(f._offset),
        size: formatHexDec(f._size),
        rawData: formatBytes(f.data),
        name: name,
        value: showDec ? hex + " (" + formatDec(f.value) + ")" : hex
    };
}
function formatDec(v) {
    return v.toLocaleString();
}


/***/ }),

/***/ "./src/worker/page-data/generator.ts":
/*!*******************************************!*\
  !*** ./src/worker/page-data/generator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var headers_1 = __webpack_require__(/*! ./headers */ "./src/worker/page-data/headers.ts");
function generatePageData(pe, pageID) {
    switch (pageID) {
        case "HEADERS": return headers_1.generateHeadersPageData(pe);
        default: return { id: "NOTFOUND", title: "Page Not Found" };
    }
}
exports.generatePageData = generatePageData;


/***/ }),

/***/ "./src/worker/page-data/headers.ts":
/*!*****************************************!*\
  !*** ./src/worker/page-data/headers.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var F = __webpack_require__(/*! ../pe/image-flags */ "./src/worker/pe/image-flags.ts");
var FM = __webpack_require__(/*! ./formatter */ "./src/worker/page-data/formatter.ts");
function generateHeadersPageData(pe) {
    return {
        id: "HEADERS",
        title: "Headers",
        dosHeader: generateDosHeader(pe),
        peSignature: generatePESignature(pe),
        fileHeader: generateFileHeader(pe),
        optionalHeader: generateOptionalHeader(pe),
        dataDirectories: generateDataDirectories(pe),
        sectionHeaders: generateSectionHeaders(pe)
    };
}
exports.generateHeadersPageData = generateHeadersPageData;
function generateDosHeader(pe) {
    var s = {
        title: "DOS Header",
        elemID: "dos-hdr"
    };
    var h = pe.getDosHeader();
    if (!h)
        return s;
    s.items = [
        FM.formatU2Field("e_magic", h.e_magic),
        FM.formatU2Field("e_cblp", h.e_cblp),
        FM.formatU2Field("e_cp", h.e_cp),
        FM.formatU2Field("e_crlc", h.e_crlc),
        FM.formatU2Field("e_cparhdr", h.e_cparhdr),
        FM.formatU2Field("e_minalloc", h.e_minalloc),
        FM.formatU2Field("e_maxalloc", h.e_maxalloc),
        FM.formatU2Field("e_ss", h.e_ss),
        FM.formatU2Field("e_sp", h.e_sp),
        FM.formatU2Field("e_csum", h.e_csum),
        FM.formatU2Field("e_ip", h.e_ip),
        FM.formatU2Field("e_cs", h.e_cs),
        FM.formatU2Field("e_lfarlc", h.e_lfarlc),
        FM.formatU2Field("e_ovno", h.e_ovno),
        FM.formatBytesField("e_res", h.e_res),
        FM.formatU2Field("e_oemid", h.e_oemid),
        FM.formatU2Field("e_oeminfo", h.e_oeminfo),
        FM.formatBytesField("e_res2", h.e_res2),
        FM.formatU4Field("e_lfanew", h.e_lfanew),
    ];
    return s;
}
function generatePESignature(pe) {
    var s = {
        title: "PE Signature",
        elemID: "pe-sig"
    };
    var h = pe.getPESignature();
    if (!h)
        return s;
    s.items = [
        FM.formatU4Field("PE Signature", h),
    ];
    return s;
}
function generateFileHeader(pe) {
    var s = {
        title: "File Header",
        elemID: "pe-hdr"
    };
    var h = pe.getFileHeader();
    if (!h)
        return s;
    s.items = [
        FM.formatU2Field("Machine", h.Machine),
        FM.formatU2Field("NumberOfSections", h.NumberOfSections, true),
        FM.formatU4Field("TimeDateStamp", h.TimeDateStamp),
        FM.formatU4Field("PointerToSymbolTable", h.PointerToSymbolTable),
        FM.formatU4Field("NumberOfSymbols", h.NumberOfSymbols, true),
        FM.formatU2Field("SizeOfOptionalHeader", h.SizeOfOptionalHeader, true),
        FM.formatU2Field("Characteristics", h.Characteristics),
    ];
    return s;
}
function generateOptionalHeader(pe) {
    var s = {
        title: "Optional Header",
        elemID: "opt-hdr"
    };
    var h = pe.getOptionalHeader();
    if (!h)
        return s;
    switch (h.Magic.value) {
        case F.IMAGE_NT_OPTIONAL_HDR32_MAGIC:
            s.title += " (32-bit)";
            fillOptionalHeader32Fields(s, h);
            break;
        case F.IMAGE_NT_OPTIONAL_HDR64_MAGIC:
            s.title += " (64-bit)";
            fillOptionalHeader64Fields(s, h);
            break;
    }
    return s;
}
function fillOptionalHeader32Fields(s, h) {
    s.groups = [{
            title: "Standard Fields",
            items: [
                FM.formatU2Field("Magic", h.Magic),
                FM.formatU1Field("MajorLinkerVersion", h.MajorLinkerVersion, true),
                FM.formatU1Field("MinorLinkerVersion", h.MinorLinkerVersion, true),
                FM.formatU4Field("SizeOfCode", h.SizeOfCode, true),
                FM.formatU4Field("SizeOfInitializedData", h.SizeOfInitializedData, true),
                FM.formatU4Field("SizeOfUninitializedData", h.SizeOfUninitializedData, true),
                FM.formatU4Field("AddressOfEntryPoint", h.AddressOfEntryPoint),
                FM.formatU4Field("BaseOfCode", h.BaseOfCode),
                FM.formatU4Field("BaseOfData", h.BaseOfData),
            ]
        }, {
            title: "NT-specified Fields",
            items: [
                FM.formatU4Field("ImageBase", h.ImageBase),
                FM.formatU4Field("SectionAlignment", h.SectionAlignment, true),
                FM.formatU4Field("FileAlignment", h.FileAlignment, true),
                FM.formatU2Field("MajorOperatingSystemVersion", h.MajorOperatingSystemVersion, true),
                FM.formatU2Field("MinorOperatingSystemVersion", h.MinorOperatingSystemVersion, true),
                FM.formatU2Field("MajorImageVersion", h.MajorImageVersion, true),
                FM.formatU2Field("MinorImageVersion", h.MinorImageVersion, true),
                FM.formatU2Field("MajorSubsystemVersion", h.MajorSubsystemVersion, true),
                FM.formatU2Field("MinorSubsystemVersion", h.MinorSubsystemVersion, true),
                FM.formatU4Field("Win32VersionValue", h.Win32VersionValue, true),
                FM.formatU4Field("SizeOfImage", h.SizeOfImage, true),
                FM.formatU4Field("SizeOfHeaders", h.SizeOfHeaders, true),
                FM.formatU4Field("CheckSum", h.CheckSum),
                FM.formatU2Field("Subsystem", h.Subsystem),
                FM.formatU2Field("DllCharacteristics", h.DllCharacteristics),
                FM.formatU4Field("SizeOfStackReserve", h.SizeOfStackReserve, true),
                FM.formatU4Field("SizeOfStackCommit", h.SizeOfStackCommit, true),
                FM.formatU4Field("SizeOfHeapReserve", h.SizeOfHeapReserve, true),
                FM.formatU4Field("SizeOfHeapCommit", h.SizeOfHeapCommit, true),
                FM.formatU4Field("LoaderFlags", h.LoaderFlags),
                FM.formatU4Field("NumberOfRvaAndSizes", h.NumberOfRvaAndSizes, true),
            ]
        }];
}
function fillOptionalHeader64Fields(s, h) {
    s.groups = [{
            title: "Standard Fields",
            items: [
                FM.formatU2Field("Magic", h.Magic),
                FM.formatU1Field("MajorLinkerVersion", h.MajorLinkerVersion, true),
                FM.formatU1Field("MinorLinkerVersion", h.MinorLinkerVersion, true),
                FM.formatU4Field("SizeOfCode", h.SizeOfCode, true),
                FM.formatU4Field("SizeOfInitializedData", h.SizeOfInitializedData, true),
                FM.formatU4Field("SizeOfUninitializedData", h.SizeOfUninitializedData, true),
                FM.formatU4Field("AddressOfEntryPoint", h.AddressOfEntryPoint),
                FM.formatU4Field("BaseOfCode", h.BaseOfCode),
            ]
        }, {
            title: "NT-specified Fields",
            items: [
                FM.formatU8Field("ImageBase", h.ImageBase),
                FM.formatU4Field("SectionAlignment", h.SectionAlignment, true),
                FM.formatU4Field("FileAlignment", h.FileAlignment, true),
                FM.formatU2Field("MajorOperatingSystemVersion", h.MajorOperatingSystemVersion, true),
                FM.formatU2Field("MinorOperatingSystemVersion", h.MinorOperatingSystemVersion, true),
                FM.formatU2Field("MajorImageVersion", h.MajorImageVersion, true),
                FM.formatU2Field("MinorImageVersion", h.MinorImageVersion, true),
                FM.formatU2Field("MajorSubsystemVersion", h.MajorSubsystemVersion, true),
                FM.formatU2Field("MinorSubsystemVersion", h.MinorSubsystemVersion, true),
                FM.formatU4Field("Win32VersionValue", h.Win32VersionValue, true),
                FM.formatU4Field("SizeOfImage", h.SizeOfImage, true),
                FM.formatU4Field("SizeOfHeaders", h.SizeOfHeaders, true),
                FM.formatU4Field("CheckSum", h.CheckSum),
                FM.formatU2Field("Subsystem", h.Subsystem),
                FM.formatU2Field("DllCharacteristics", h.DllCharacteristics),
                FM.formatU8Field("SizeOfStackReserve", h.SizeOfStackReserve, true),
                FM.formatU8Field("SizeOfStackCommit", h.SizeOfStackCommit, true),
                FM.formatU8Field("SizeOfHeapReserve", h.SizeOfHeapReserve, true),
                FM.formatU8Field("SizeOfHeapCommit", h.SizeOfHeapCommit, true),
                FM.formatU4Field("LoaderFlags", h.LoaderFlags),
                FM.formatU4Field("NumberOfRvaAndSizes", h.NumberOfRvaAndSizes, true),
            ]
        }];
}
function generateDataDirectories(pe) {
    var s = {
        title: "Data Dreictories",
        elemID: "data-dir"
    };
    var h = pe.getDataDirectories();
    if (!h)
        return s;
    s.groups = h.items.map(function (v, i) { return ({
        title: "[" + i + "] " + (F.ImageDirectoryEntry[i] || ""),
        items: [
            FM.formatU4Field("VirtualAddress", v.VirtualAddress),
            FM.formatU4Field("Size", v.Size, true),
        ]
    }); });
    return s;
}
function generateSectionHeaders(pe) {
    var s = {
        title: "Section headers",
        elemID: "sec-hdrs"
    };
    var h = pe.getSectionHeaders();
    if (!h)
        return s;
    s.groups = h.items.map(function (v, i) { return ({
        title: "[" + i + "]",
        items: [
            FM.formatStringField("Name", v.Name),
            FM.formatU4Field("VirtualSize", v.VirtualSize, true),
            FM.formatU4Field("VirtualAddress", v.VirtualAddress),
            FM.formatU4Field("SizeOfRawData", v.SizeOfRawData, true),
            FM.formatU4Field("PointerToRawData", v.PointerToRawData),
            FM.formatU4Field("PointerToRelocations", v.PointerToRelocations),
            FM.formatU4Field("PointerToLinenumbers", v.PointerToLinenumbers),
            FM.formatU2Field("NumberOfRelocations", v.NumberOfRelocations, true),
            FM.formatU2Field("NumberOfLinenumbers", v.NumberOfLinenumbers, true),
            FM.formatU4Field("Characteristics", v.Characteristics),
        ]
    }); });
    return s;
}


/***/ }),

/***/ "./src/worker/pe/error.ts":
/*!********************************!*\
  !*** ./src/worker/pe/error.ts ***!
  \********************************/
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
var PEError = (function (_super) {
    __extends(PEError, _super);
    function PEError(type, offset, size) {
        var _this = _super.call(this, type) || this;
        _this.type = type;
        _this.offset = offset;
        _this.size = size;
        return _this;
    }
    return PEError;
}(Error));
exports.PEError = PEError;


/***/ }),

/***/ "./src/worker/pe/image-flags.ts":
/*!**************************************!*\
  !*** ./src/worker/pe/image-flags.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.IMAGE_DOS_SIGNATURE = 0x5A4D;
exports.IMAGE_NT_SIGNATURE = 0x00004550;
exports.IMAGE_NT_OPTIONAL_HDR32_MAGIC = 0x10b;
exports.IMAGE_NT_OPTIONAL_HDR64_MAGIC = 0x20b;
var ImageFile;
(function (ImageFile) {
    ImageFile[ImageFile["IMAGE_FILE_RELOCS_STRIPPED"] = 1] = "IMAGE_FILE_RELOCS_STRIPPED";
    ImageFile[ImageFile["IMAGE_FILE_EXECUTABLE_IMAGE"] = 2] = "IMAGE_FILE_EXECUTABLE_IMAGE";
    ImageFile[ImageFile["IMAGE_FILE_LINE_NUMS_STRIPPED"] = 4] = "IMAGE_FILE_LINE_NUMS_STRIPPED";
    ImageFile[ImageFile["IMAGE_FILE_LOCAL_SYMS_STRIPPED"] = 8] = "IMAGE_FILE_LOCAL_SYMS_STRIPPED";
    ImageFile[ImageFile["IMAGE_FILE_AGGRESIVE_WS_TRIM"] = 16] = "IMAGE_FILE_AGGRESIVE_WS_TRIM";
    ImageFile[ImageFile["IMAGE_FILE_LARGE_ADDRESS_AWARE"] = 32] = "IMAGE_FILE_LARGE_ADDRESS_AWARE";
    ImageFile[ImageFile["IMAGE_FILE_BYTES_REVERSED_LO"] = 128] = "IMAGE_FILE_BYTES_REVERSED_LO";
    ImageFile[ImageFile["IMAGE_FILE_32BIT_MACHINE"] = 256] = "IMAGE_FILE_32BIT_MACHINE";
    ImageFile[ImageFile["IMAGE_FILE_DEBUG_STRIPPED"] = 512] = "IMAGE_FILE_DEBUG_STRIPPED";
    ImageFile[ImageFile["IMAGE_FILE_REMOVABLE_RUN_FROM_SWAP"] = 1024] = "IMAGE_FILE_REMOVABLE_RUN_FROM_SWAP";
    ImageFile[ImageFile["IMAGE_FILE_NET_RUN_FROM_SWAP"] = 2048] = "IMAGE_FILE_NET_RUN_FROM_SWAP";
    ImageFile[ImageFile["IMAGE_FILE_SYSTEM"] = 4096] = "IMAGE_FILE_SYSTEM";
    ImageFile[ImageFile["IMAGE_FILE_DLL"] = 8192] = "IMAGE_FILE_DLL";
    ImageFile[ImageFile["IMAGE_FILE_UP_SYSTEM_ONLY"] = 16384] = "IMAGE_FILE_UP_SYSTEM_ONLY";
    ImageFile[ImageFile["IMAGE_FILE_BYTES_REVERSED_HI"] = 32768] = "IMAGE_FILE_BYTES_REVERSED_HI";
})(ImageFile = exports.ImageFile || (exports.ImageFile = {}));
var ImageFileMachine;
(function (ImageFileMachine) {
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_UNKNOWN"] = 0] = "IMAGE_FILE_MACHINE_UNKNOWN";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_TARGET_HOST"] = 1] = "IMAGE_FILE_MACHINE_TARGET_HOST";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_I386"] = 332] = "IMAGE_FILE_MACHINE_I386";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_R3000"] = 354] = "IMAGE_FILE_MACHINE_R3000";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_R4000"] = 358] = "IMAGE_FILE_MACHINE_R4000";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_R10000"] = 360] = "IMAGE_FILE_MACHINE_R10000";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_WCEMIPSV2"] = 361] = "IMAGE_FILE_MACHINE_WCEMIPSV2";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_ALPHA"] = 388] = "IMAGE_FILE_MACHINE_ALPHA";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_SH3"] = 418] = "IMAGE_FILE_MACHINE_SH3";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_SH3DSP"] = 419] = "IMAGE_FILE_MACHINE_SH3DSP";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_SH3E"] = 420] = "IMAGE_FILE_MACHINE_SH3E";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_SH4"] = 422] = "IMAGE_FILE_MACHINE_SH4";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_SH5"] = 424] = "IMAGE_FILE_MACHINE_SH5";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_ARM"] = 448] = "IMAGE_FILE_MACHINE_ARM";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_THUMB"] = 450] = "IMAGE_FILE_MACHINE_THUMB";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_ARMNT"] = 452] = "IMAGE_FILE_MACHINE_ARMNT";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_AM33"] = 467] = "IMAGE_FILE_MACHINE_AM33";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_POWERPC"] = 496] = "IMAGE_FILE_MACHINE_POWERPC";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_POWERPCFP"] = 497] = "IMAGE_FILE_MACHINE_POWERPCFP";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_IA64"] = 512] = "IMAGE_FILE_MACHINE_IA64";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_MIPS16"] = 614] = "IMAGE_FILE_MACHINE_MIPS16";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_ALPHA64"] = 644] = "IMAGE_FILE_MACHINE_ALPHA64";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_MIPSFPU"] = 870] = "IMAGE_FILE_MACHINE_MIPSFPU";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_MIPSFPU16"] = 1126] = "IMAGE_FILE_MACHINE_MIPSFPU16";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_AXP64"] = 644] = "IMAGE_FILE_MACHINE_AXP64";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_TRICORE"] = 1312] = "IMAGE_FILE_MACHINE_TRICORE";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_CEF"] = 3311] = "IMAGE_FILE_MACHINE_CEF";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_EBC"] = 3772] = "IMAGE_FILE_MACHINE_EBC";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_AMD64"] = 34404] = "IMAGE_FILE_MACHINE_AMD64";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_M32R"] = 36929] = "IMAGE_FILE_MACHINE_M32R";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_ARM64"] = 43620] = "IMAGE_FILE_MACHINE_ARM64";
    ImageFileMachine[ImageFileMachine["IMAGE_FILE_MACHINE_CEE"] = 49390] = "IMAGE_FILE_MACHINE_CEE";
})(ImageFileMachine = exports.ImageFileMachine || (exports.ImageFileMachine = {}));
var ImageSubsystem;
(function (ImageSubsystem) {
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_UNKNOWN"] = 0] = "IMAGE_SUBSYSTEM_UNKNOWN";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_NATIVE"] = 1] = "IMAGE_SUBSYSTEM_NATIVE";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_WINDOWS_GUI"] = 2] = "IMAGE_SUBSYSTEM_WINDOWS_GUI";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_WINDOWS_CUI"] = 3] = "IMAGE_SUBSYSTEM_WINDOWS_CUI";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_OS2_CUI"] = 5] = "IMAGE_SUBSYSTEM_OS2_CUI";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_POSIX_CUI"] = 7] = "IMAGE_SUBSYSTEM_POSIX_CUI";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_NATIVE_WINDOWS"] = 8] = "IMAGE_SUBSYSTEM_NATIVE_WINDOWS";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_WINDOWS_CE_GUI"] = 9] = "IMAGE_SUBSYSTEM_WINDOWS_CE_GUI";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_EFI_APPLICATION"] = 10] = "IMAGE_SUBSYSTEM_EFI_APPLICATION";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_EFI_BOOT_SERVICE_DRIVER"] = 11] = "IMAGE_SUBSYSTEM_EFI_BOOT_SERVICE_DRIVER";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_EFI_RUNTIME_DRIVER"] = 12] = "IMAGE_SUBSYSTEM_EFI_RUNTIME_DRIVER";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_EFI_ROM"] = 13] = "IMAGE_SUBSYSTEM_EFI_ROM";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_XBOX"] = 14] = "IMAGE_SUBSYSTEM_XBOX";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_WINDOWS_BOOT_APPLICATION"] = 16] = "IMAGE_SUBSYSTEM_WINDOWS_BOOT_APPLICATION";
    ImageSubsystem[ImageSubsystem["IMAGE_SUBSYSTEM_XBOX_CODE_CATALOG"] = 17] = "IMAGE_SUBSYSTEM_XBOX_CODE_CATALOG";
})(ImageSubsystem = exports.ImageSubsystem || (exports.ImageSubsystem = {}));
var ImageDllCharacteristics;
(function (ImageDllCharacteristics) {
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_HIGH_ENTROPY_VA"] = 32] = "IMAGE_DLLCHARACTERISTICS_HIGH_ENTROPY_VA";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_DYNAMIC_BASE"] = 64] = "IMAGE_DLLCHARACTERISTICS_DYNAMIC_BASE";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_FORCE_INTEGRITY"] = 128] = "IMAGE_DLLCHARACTERISTICS_FORCE_INTEGRITY";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_NX_COMPAT"] = 256] = "IMAGE_DLLCHARACTERISTICS_NX_COMPAT";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_NO_ISOLATION"] = 512] = "IMAGE_DLLCHARACTERISTICS_NO_ISOLATION";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_NO_SEH"] = 1024] = "IMAGE_DLLCHARACTERISTICS_NO_SEH";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_NO_BIND"] = 2048] = "IMAGE_DLLCHARACTERISTICS_NO_BIND";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_APPCONTAINER"] = 4096] = "IMAGE_DLLCHARACTERISTICS_APPCONTAINER";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_WDM_DRIVER"] = 8192] = "IMAGE_DLLCHARACTERISTICS_WDM_DRIVER";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_GUARD_CF"] = 16384] = "IMAGE_DLLCHARACTERISTICS_GUARD_CF";
    ImageDllCharacteristics[ImageDllCharacteristics["IMAGE_DLLCHARACTERISTICS_TERMINAL_SERVER_AWARE"] = 32768] = "IMAGE_DLLCHARACTERISTICS_TERMINAL_SERVER_AWARE";
})(ImageDllCharacteristics = exports.ImageDllCharacteristics || (exports.ImageDllCharacteristics = {}));
var ImageDirectoryEntry;
(function (ImageDirectoryEntry) {
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_EXPORT"] = 0] = "IMAGE_DIRECTORY_ENTRY_EXPORT";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_IMPORT"] = 1] = "IMAGE_DIRECTORY_ENTRY_IMPORT";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_RESOURCE"] = 2] = "IMAGE_DIRECTORY_ENTRY_RESOURCE";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_EXCEPTION"] = 3] = "IMAGE_DIRECTORY_ENTRY_EXCEPTION";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_SECURITY"] = 4] = "IMAGE_DIRECTORY_ENTRY_SECURITY";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_BASERELOC"] = 5] = "IMAGE_DIRECTORY_ENTRY_BASERELOC";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_DEBUG"] = 6] = "IMAGE_DIRECTORY_ENTRY_DEBUG";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_ARCHITECTURE"] = 7] = "IMAGE_DIRECTORY_ENTRY_ARCHITECTURE";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_GLOBALPTR"] = 8] = "IMAGE_DIRECTORY_ENTRY_GLOBALPTR";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_TLS"] = 9] = "IMAGE_DIRECTORY_ENTRY_TLS";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_LOAD_CONFIG"] = 10] = "IMAGE_DIRECTORY_ENTRY_LOAD_CONFIG";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_BOUND_IMPORT"] = 11] = "IMAGE_DIRECTORY_ENTRY_BOUND_IMPORT";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_IAT"] = 12] = "IMAGE_DIRECTORY_ENTRY_IAT";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_DELAY_IMPORT"] = 13] = "IMAGE_DIRECTORY_ENTRY_DELAY_IMPORT";
    ImageDirectoryEntry[ImageDirectoryEntry["IMAGE_DIRECTORY_ENTRY_COM_DESCRIPTOR"] = 14] = "IMAGE_DIRECTORY_ENTRY_COM_DESCRIPTOR";
})(ImageDirectoryEntry = exports.ImageDirectoryEntry || (exports.ImageDirectoryEntry = {}));
exports.IMAGE_NUMBEROF_DIRECTORY_ENTRIES = 16;
var ImageSection;
(function (ImageSection) {
    ImageSection[ImageSection["IMAGE_SCN_TYPE_NO_PAD"] = 8] = "IMAGE_SCN_TYPE_NO_PAD";
    ImageSection[ImageSection["IMAGE_SCN_CNT_CODE"] = 32] = "IMAGE_SCN_CNT_CODE";
    ImageSection[ImageSection["IMAGE_SCN_CNT_INITIALIZED_DATA"] = 64] = "IMAGE_SCN_CNT_INITIALIZED_DATA";
    ImageSection[ImageSection["IMAGE_SCN_CNT_UNINITIALIZED_DATA"] = 128] = "IMAGE_SCN_CNT_UNINITIALIZED_DATA";
    ImageSection[ImageSection["IMAGE_SCN_LNK_OTHER"] = 256] = "IMAGE_SCN_LNK_OTHER";
    ImageSection[ImageSection["IMAGE_SCN_LNK_INFO"] = 512] = "IMAGE_SCN_LNK_INFO";
    ImageSection[ImageSection["IMAGE_SCN_LNK_REMOVE"] = 2048] = "IMAGE_SCN_LNK_REMOVE";
    ImageSection[ImageSection["IMAGE_SCN_LNK_COMDAT"] = 4096] = "IMAGE_SCN_LNK_COMDAT";
    ImageSection[ImageSection["IMAGE_SCN_NO_DEFER_SPEC_EXC"] = 16384] = "IMAGE_SCN_NO_DEFER_SPEC_EXC";
    ImageSection[ImageSection["IMAGE_SCN_GPREL"] = 32768] = "IMAGE_SCN_GPREL";
    ImageSection[ImageSection["IMAGE_SCN_MEM_PURGEABLE"] = 131072] = "IMAGE_SCN_MEM_PURGEABLE";
    ImageSection[ImageSection["IMAGE_SCN_MEM_16BIT"] = 131072] = "IMAGE_SCN_MEM_16BIT";
    ImageSection[ImageSection["IMAGE_SCN_MEM_LOCKED"] = 262144] = "IMAGE_SCN_MEM_LOCKED";
    ImageSection[ImageSection["IMAGE_SCN_MEM_PRELOAD"] = 524288] = "IMAGE_SCN_MEM_PRELOAD";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_1BYTES"] = 1048576] = "IMAGE_SCN_ALIGN_1BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_2BYTES"] = 2097152] = "IMAGE_SCN_ALIGN_2BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_4BYTES"] = 3145728] = "IMAGE_SCN_ALIGN_4BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_8BYTES"] = 4194304] = "IMAGE_SCN_ALIGN_8BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_16BYTES"] = 5242880] = "IMAGE_SCN_ALIGN_16BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_32BYTES"] = 6291456] = "IMAGE_SCN_ALIGN_32BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_64BYTES"] = 7340032] = "IMAGE_SCN_ALIGN_64BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_128BYTES"] = 8388608] = "IMAGE_SCN_ALIGN_128BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_256BYTES"] = 9437184] = "IMAGE_SCN_ALIGN_256BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_512BYTES"] = 10485760] = "IMAGE_SCN_ALIGN_512BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_1024BYTES"] = 11534336] = "IMAGE_SCN_ALIGN_1024BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_2048BYTES"] = 12582912] = "IMAGE_SCN_ALIGN_2048BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_4096BYTES"] = 13631488] = "IMAGE_SCN_ALIGN_4096BYTES";
    ImageSection[ImageSection["IMAGE_SCN_ALIGN_8192BYTES"] = 14680064] = "IMAGE_SCN_ALIGN_8192BYTES";
    ImageSection[ImageSection["IMAGE_SCN_LNK_NRELOC_OVFL"] = 16777216] = "IMAGE_SCN_LNK_NRELOC_OVFL";
    ImageSection[ImageSection["IMAGE_SCN_MEM_DISCARDABLE"] = 33554432] = "IMAGE_SCN_MEM_DISCARDABLE";
    ImageSection[ImageSection["IMAGE_SCN_MEM_NOT_CACHED"] = 67108864] = "IMAGE_SCN_MEM_NOT_CACHED";
    ImageSection[ImageSection["IMAGE_SCN_MEM_NOT_PAGED"] = 134217728] = "IMAGE_SCN_MEM_NOT_PAGED";
    ImageSection[ImageSection["IMAGE_SCN_MEM_SHARED"] = 268435456] = "IMAGE_SCN_MEM_SHARED";
    ImageSection[ImageSection["IMAGE_SCN_MEM_EXECUTE"] = 536870912] = "IMAGE_SCN_MEM_EXECUTE";
    ImageSection[ImageSection["IMAGE_SCN_MEM_READ"] = 1073741824] = "IMAGE_SCN_MEM_READ";
    ImageSection[ImageSection["IMAGE_SCN_MEM_WRITE"] = 2147483648] = "IMAGE_SCN_MEM_WRITE";
    ImageSection[ImageSection["IMAGE_SCN_SCALE_INDEX"] = 1] = "IMAGE_SCN_SCALE_INDEX";
})(ImageSection = exports.ImageSection || (exports.ImageSection = {}));


/***/ }),

/***/ "./src/worker/pe/image.ts":
/*!********************************!*\
  !*** ./src/worker/pe/image.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var L = __webpack_require__(/*! ./loader */ "./src/worker/pe/loader.ts");
var F = __webpack_require__(/*! ./image-flags */ "./src/worker/pe/image-flags.ts");
var E = __webpack_require__(/*! ./error */ "./src/worker/pe/error.ts");
var PEImage = (function () {
    function PEImage(buf) {
        this.data = new DataView(buf);
        this.loadHeaders();
    }
    PEImage.load = function (buf) {
        return new PEImage(buf);
    };
    PEImage.prototype.getU1 = function (p) {
        this.check(p, 1);
        return this.data.getUint8(p);
    };
    PEImage.prototype.getU2 = function (p) {
        this.check(p, 2);
        return this.data.getUint16(p, true);
    };
    PEImage.prototype.getU4 = function (p) {
        this.check(p, 3);
        return this.data.getUint32(p, true);
    };
    PEImage.prototype.getData = function (p, sz) {
        this.check(p, sz);
        return new Uint8Array(this.data.buffer.slice(p, p + sz));
    };
    PEImage.prototype.getDosHeader = function () {
        return this.dosHeader;
    };
    PEImage.prototype.getPESignature = function () {
        return this.peSignature;
    };
    PEImage.prototype.getFileHeader = function () {
        return this.fileHeader;
    };
    PEImage.prototype.getOptionalHeader = function () {
        return this.optionalHeader;
    };
    PEImage.prototype.getDataDirectories = function () {
        return this.dataDirectories;
    };
    PEImage.prototype.getSectionHeaders = function () {
        return this.sectionHeaders;
    };
    PEImage.prototype.check = function (p, sz) {
        if (p < 0 || p >= this.data.byteLength
            || sz < 0 || p + sz > this.data.byteLength) {
            throw new E.PEError("INVALID_DATA_POSITION", p, sz);
        }
    };
    PEImage.prototype.loadHeaders = function () {
        var ptr = 0;
        this.dosHeader = L.loadImageDosHeader(this, ptr);
        if (this.dosHeader.e_magic.value != F.IMAGE_DOS_SIGNATURE) {
            throw new E.PEError("INVALID_DOS_SIGNATURE", ptr, 2);
        }
        ptr = this.dosHeader.e_lfanew.value;
        this.peSignature = L.loadU4Field(this, ptr);
        if (this.peSignature.value != F.IMAGE_NT_SIGNATURE) {
            throw new E.PEError("INVALID_PE_SIGNATURE", ptr, 4);
        }
        ptr += this.peSignature._size;
        this.fileHeader = L.loadImageFileHeader(this, ptr);
        ptr += this.fileHeader._size;
        var magic = L.loadU2Field(this, ptr);
        switch (magic.value) {
            case F.IMAGE_NT_OPTIONAL_HDR32_MAGIC:
                this.optionalHeader = L.loadImageOptionalHeader32(this, ptr);
                break;
            case F.IMAGE_NT_OPTIONAL_HDR64_MAGIC:
                this.optionalHeader = L.loadImageOptionalHeader64(this, ptr);
                break;
            default:
                throw new E.PEError("INVALID_OPTIONAL_HEADER_MAGIC", ptr, 2);
        }
        if (this.optionalHeader.NumberOfRvaAndSizes.value != F.IMAGE_NUMBEROF_DIRECTORY_ENTRIES) {
            throw new E.PEError("INVALID_DATA_DIRECTORY_COUNT", this.optionalHeader.NumberOfRvaAndSizes._offset, this.optionalHeader.NumberOfRvaAndSizes._size);
        }
        ptr += this.optionalHeader._size;
        this.dataDirectories = L.loadStructArrayByCount(this, ptr, L.loadImageDataDirectory, this.optionalHeader.NumberOfRvaAndSizes.value);
        ptr += this.dataDirectories._size;
        this.sectionHeaders = L.loadStructArrayByCount(this, ptr, L.loadImageSectionHeader, this.fileHeader.NumberOfSections.value);
    };
    return PEImage;
}());
exports.PEImage = PEImage;


/***/ }),

/***/ "./src/worker/pe/loader.ts":
/*!*********************************!*\
  !*** ./src/worker/pe/loader.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function loadU1Field(d, p) {
    return {
        _offset: p, _size: 1, data: d.getData(p, 1), value: d.getU1(p)
    };
}
exports.loadU1Field = loadU1Field;
function loadU2Field(d, p) {
    return {
        _offset: p, _size: 2, data: d.getData(p, 2), value: d.getU2(p)
    };
}
exports.loadU2Field = loadU2Field;
function loadU4Field(d, p) {
    return {
        _offset: p, _size: 4, data: d.getData(p, 4), value: d.getU4(p)
    };
}
exports.loadU4Field = loadU4Field;
function loadU8Field(d, p) {
    var low = d.getU4(p);
    var high = d.getU4(p + 4);
    return {
        _offset: p, _size: 8, data: d.getData(p, 8), low: low, high: high
    };
}
exports.loadU8Field = loadU8Field;
function loadU1EnumField(d, p) {
    return {
        _offset: p, _size: 1, data: d.getData(p, 1), value: d.getU1(p)
    };
}
exports.loadU1EnumField = loadU1EnumField;
function loadU2EnumField(d, p) {
    return {
        _offset: p, _size: 2, data: d.getData(p, 2), value: d.getU2(p)
    };
}
exports.loadU2EnumField = loadU2EnumField;
function loadU4EnumField(d, p) {
    return {
        _offset: p, _size: 4, data: d.getData(p, 4), value: d.getU4(p)
    };
}
exports.loadU4EnumField = loadU4EnumField;
function loadFixedSizeByteArray(d, p, sz) {
    return {
        _offset: p, _size: sz, data: d.getData(p, sz)
    };
}
exports.loadFixedSizeByteArray = loadFixedSizeByteArray;
function loadFixedSizeAsciiStringField(d, p, sz) {
    var data = d.getData(p, sz);
    var value = String.fromCharCode.apply(null, Array.from(data));
    return {
        _offset: p, _size: sz, data: data, value: value
    };
}
exports.loadFixedSizeAsciiStringField = loadFixedSizeAsciiStringField;
function loadStructArrayByCount(d, p, loader, count) {
    var items = [];
    var ptr = p;
    for (var i = 0; i < count; i++) {
        var s = loader(d, ptr);
        items.push(s);
        ptr += s._size;
    }
    return { _offset: p, _size: ptr - p, items: items };
}
exports.loadStructArrayByCount = loadStructArrayByCount;
function loadImageDosHeader(d, p) {
    var ptr = p;
    var e_magic = loadU2Field(d, ptr);
    ptr += e_magic._size;
    var e_cblp = loadU2Field(d, ptr);
    ptr += e_cblp._size;
    var e_cp = loadU2Field(d, ptr);
    ptr += e_cp._size;
    var e_crlc = loadU2Field(d, ptr);
    ptr += e_crlc._size;
    var e_cparhdr = loadU2Field(d, ptr);
    ptr += e_cparhdr._size;
    var e_minalloc = loadU2Field(d, ptr);
    ptr += e_minalloc._size;
    var e_maxalloc = loadU2Field(d, ptr);
    ptr += e_maxalloc._size;
    var e_ss = loadU2Field(d, ptr);
    ptr += e_ss._size;
    var e_sp = loadU2Field(d, ptr);
    ptr += e_sp._size;
    var e_csum = loadU2Field(d, ptr);
    ptr += e_csum._size;
    var e_ip = loadU2Field(d, ptr);
    ptr += e_ip._size;
    var e_cs = loadU2Field(d, ptr);
    ptr += e_cs._size;
    var e_lfarlc = loadU2Field(d, ptr);
    ptr += e_lfarlc._size;
    var e_ovno = loadU2Field(d, ptr);
    ptr += e_ovno._size;
    var e_res = loadFixedSizeByteArray(d, ptr, 4 * 2);
    ptr += e_res._size;
    var e_oemid = loadU2Field(d, ptr);
    ptr += e_oemid._size;
    var e_oeminfo = loadU2Field(d, ptr);
    ptr += e_oeminfo._size;
    var e_res2 = loadFixedSizeByteArray(d, ptr, 10 * 2);
    ptr += e_res2._size;
    var e_lfanew = loadU4Field(d, ptr);
    ptr += e_lfanew._size;
    return {
        _offset: p, _size: ptr - p,
        e_magic: e_magic,
        e_cblp: e_cblp,
        e_cp: e_cp,
        e_crlc: e_crlc,
        e_cparhdr: e_cparhdr,
        e_minalloc: e_minalloc,
        e_maxalloc: e_maxalloc,
        e_ss: e_ss,
        e_sp: e_sp,
        e_csum: e_csum,
        e_ip: e_ip,
        e_cs: e_cs,
        e_lfarlc: e_lfarlc,
        e_ovno: e_ovno,
        e_res: e_res,
        e_oemid: e_oemid,
        e_oeminfo: e_oeminfo,
        e_res2: e_res2,
        e_lfanew: e_lfanew
    };
}
exports.loadImageDosHeader = loadImageDosHeader;
function loadImageFileHeader(d, p) {
    var ptr = p;
    var Machine = loadU2Field(d, ptr);
    ptr += Machine._size;
    var NumberOfSections = loadU2Field(d, ptr);
    ptr += NumberOfSections._size;
    var TimeDateStamp = loadU4Field(d, ptr);
    ptr += TimeDateStamp._size;
    var PointerToSymbolTable = loadU4Field(d, ptr);
    ptr += PointerToSymbolTable._size;
    var NumberOfSymbols = loadU4Field(d, ptr);
    ptr += NumberOfSymbols._size;
    var SizeOfOptionalHeader = loadU2Field(d, ptr);
    ptr += SizeOfOptionalHeader._size;
    var Characteristics = loadU2EnumField(d, ptr);
    ptr += Characteristics._size;
    return {
        _offset: p, _size: ptr - p,
        Machine: Machine,
        NumberOfSections: NumberOfSections,
        TimeDateStamp: TimeDateStamp,
        PointerToSymbolTable: PointerToSymbolTable,
        NumberOfSymbols: NumberOfSymbols,
        SizeOfOptionalHeader: SizeOfOptionalHeader,
        Characteristics: Characteristics
    };
}
exports.loadImageFileHeader = loadImageFileHeader;
function loadImageOptionalHeader32(d, p) {
    var ptr = p;
    var Magic = loadU2Field(d, ptr);
    ptr += Magic._size;
    var MajorLinkerVersion = loadU1Field(d, ptr);
    ptr += MajorLinkerVersion._size;
    var MinorLinkerVersion = loadU1Field(d, ptr);
    ptr += MinorLinkerVersion._size;
    var SizeOfCode = loadU4Field(d, ptr);
    ptr += SizeOfCode._size;
    var SizeOfInitializedData = loadU4Field(d, ptr);
    ptr += SizeOfInitializedData._size;
    var SizeOfUninitializedData = loadU4Field(d, ptr);
    ptr += SizeOfUninitializedData._size;
    var AddressOfEntryPoint = loadU4Field(d, ptr);
    ptr += AddressOfEntryPoint._size;
    var BaseOfCode = loadU4Field(d, ptr);
    ptr += BaseOfCode._size;
    var BaseOfData = loadU4Field(d, ptr);
    ptr += BaseOfData._size;
    var ImageBase = loadU4Field(d, ptr);
    ptr += ImageBase._size;
    var SectionAlignment = loadU4Field(d, ptr);
    ptr += SectionAlignment._size;
    var FileAlignment = loadU4Field(d, ptr);
    ptr += FileAlignment._size;
    var MajorOperatingSystemVersion = loadU2Field(d, ptr);
    ptr += MajorOperatingSystemVersion._size;
    var MinorOperatingSystemVersion = loadU2Field(d, ptr);
    ptr += MinorOperatingSystemVersion._size;
    var MajorImageVersion = loadU2Field(d, ptr);
    ptr += MajorImageVersion._size;
    var MinorImageVersion = loadU2Field(d, ptr);
    ptr += MinorImageVersion._size;
    var MajorSubsystemVersion = loadU2Field(d, ptr);
    ptr += MajorSubsystemVersion._size;
    var MinorSubsystemVersion = loadU2Field(d, ptr);
    ptr += MinorSubsystemVersion._size;
    var Win32VersionValue = loadU4Field(d, ptr);
    ptr += Win32VersionValue._size;
    var SizeOfImage = loadU4Field(d, ptr);
    ptr += SizeOfImage._size;
    var SizeOfHeaders = loadU4Field(d, ptr);
    ptr += SizeOfHeaders._size;
    var CheckSum = loadU4Field(d, ptr);
    ptr += CheckSum._size;
    var Subsystem = loadU2EnumField(d, ptr);
    ptr += Subsystem._size;
    var DllCharacteristics = loadU2EnumField(d, ptr);
    ptr += DllCharacteristics._size;
    var SizeOfStackReserve = loadU4Field(d, ptr);
    ptr += SizeOfStackReserve._size;
    var SizeOfStackCommit = loadU4Field(d, ptr);
    ptr += SizeOfStackCommit._size;
    var SizeOfHeapReserve = loadU4Field(d, ptr);
    ptr += SizeOfHeapReserve._size;
    var SizeOfHeapCommit = loadU4Field(d, ptr);
    ptr += SizeOfHeapCommit._size;
    var LoaderFlags = loadU4Field(d, ptr);
    ptr += LoaderFlags._size;
    var NumberOfRvaAndSizes = loadU4Field(d, ptr);
    ptr += NumberOfRvaAndSizes._size;
    return {
        _offset: p, _size: ptr - p,
        Magic: Magic,
        MajorLinkerVersion: MajorLinkerVersion,
        MinorLinkerVersion: MinorLinkerVersion,
        SizeOfCode: SizeOfCode,
        SizeOfInitializedData: SizeOfInitializedData,
        SizeOfUninitializedData: SizeOfUninitializedData,
        AddressOfEntryPoint: AddressOfEntryPoint,
        BaseOfCode: BaseOfCode,
        BaseOfData: BaseOfData,
        ImageBase: ImageBase,
        SectionAlignment: SectionAlignment,
        FileAlignment: FileAlignment,
        MajorOperatingSystemVersion: MajorOperatingSystemVersion,
        MinorOperatingSystemVersion: MinorOperatingSystemVersion,
        MajorImageVersion: MajorImageVersion,
        MinorImageVersion: MinorImageVersion,
        MajorSubsystemVersion: MajorSubsystemVersion,
        MinorSubsystemVersion: MinorSubsystemVersion,
        Win32VersionValue: Win32VersionValue,
        SizeOfImage: SizeOfImage,
        SizeOfHeaders: SizeOfHeaders,
        CheckSum: CheckSum,
        Subsystem: Subsystem,
        DllCharacteristics: DllCharacteristics,
        SizeOfStackReserve: SizeOfStackReserve,
        SizeOfStackCommit: SizeOfStackCommit,
        SizeOfHeapReserve: SizeOfHeapReserve,
        SizeOfHeapCommit: SizeOfHeapCommit,
        LoaderFlags: LoaderFlags,
        NumberOfRvaAndSizes: NumberOfRvaAndSizes
    };
}
exports.loadImageOptionalHeader32 = loadImageOptionalHeader32;
function loadImageOptionalHeader64(d, p) {
    var ptr = p;
    var Magic = loadU2Field(d, ptr);
    ptr += Magic._size;
    var MajorLinkerVersion = loadU1Field(d, ptr);
    ptr += MajorLinkerVersion._size;
    var MinorLinkerVersion = loadU1Field(d, ptr);
    ptr += MinorLinkerVersion._size;
    var SizeOfCode = loadU4Field(d, ptr);
    ptr += SizeOfCode._size;
    var SizeOfInitializedData = loadU4Field(d, ptr);
    ptr += SizeOfInitializedData._size;
    var SizeOfUninitializedData = loadU4Field(d, ptr);
    ptr += SizeOfUninitializedData._size;
    var AddressOfEntryPoint = loadU4Field(d, ptr);
    ptr += AddressOfEntryPoint._size;
    var BaseOfCode = loadU4Field(d, ptr);
    ptr += BaseOfCode._size;
    var ImageBase = loadU8Field(d, ptr);
    ptr += ImageBase._size;
    var SectionAlignment = loadU4Field(d, ptr);
    ptr += SectionAlignment._size;
    var FileAlignment = loadU4Field(d, ptr);
    ptr += FileAlignment._size;
    var MajorOperatingSystemVersion = loadU2Field(d, ptr);
    ptr += MajorOperatingSystemVersion._size;
    var MinorOperatingSystemVersion = loadU2Field(d, ptr);
    ptr += MinorOperatingSystemVersion._size;
    var MajorImageVersion = loadU2Field(d, ptr);
    ptr += MajorImageVersion._size;
    var MinorImageVersion = loadU2Field(d, ptr);
    ptr += MinorImageVersion._size;
    var MajorSubsystemVersion = loadU2Field(d, ptr);
    ptr += MajorSubsystemVersion._size;
    var MinorSubsystemVersion = loadU2Field(d, ptr);
    ptr += MinorSubsystemVersion._size;
    var Win32VersionValue = loadU4Field(d, ptr);
    ptr += Win32VersionValue._size;
    var SizeOfImage = loadU4Field(d, ptr);
    ptr += SizeOfImage._size;
    var SizeOfHeaders = loadU4Field(d, ptr);
    ptr += SizeOfHeaders._size;
    var CheckSum = loadU4Field(d, ptr);
    ptr += CheckSum._size;
    var Subsystem = loadU2EnumField(d, ptr);
    ptr += Subsystem._size;
    var DllCharacteristics = loadU2EnumField(d, ptr);
    ptr += DllCharacteristics._size;
    var SizeOfStackReserve = loadU8Field(d, ptr);
    ptr += SizeOfStackReserve._size;
    var SizeOfStackCommit = loadU8Field(d, ptr);
    ptr += SizeOfStackCommit._size;
    var SizeOfHeapReserve = loadU8Field(d, ptr);
    ptr += SizeOfHeapReserve._size;
    var SizeOfHeapCommit = loadU8Field(d, ptr);
    ptr += SizeOfHeapCommit._size;
    var LoaderFlags = loadU4Field(d, ptr);
    ptr += LoaderFlags._size;
    var NumberOfRvaAndSizes = loadU4Field(d, ptr);
    ptr += NumberOfRvaAndSizes._size;
    return {
        _offset: p, _size: ptr - p,
        Magic: Magic,
        MajorLinkerVersion: MajorLinkerVersion,
        MinorLinkerVersion: MinorLinkerVersion,
        SizeOfCode: SizeOfCode,
        SizeOfInitializedData: SizeOfInitializedData,
        SizeOfUninitializedData: SizeOfUninitializedData,
        AddressOfEntryPoint: AddressOfEntryPoint,
        BaseOfCode: BaseOfCode,
        ImageBase: ImageBase,
        SectionAlignment: SectionAlignment,
        FileAlignment: FileAlignment,
        MajorOperatingSystemVersion: MajorOperatingSystemVersion,
        MinorOperatingSystemVersion: MinorOperatingSystemVersion,
        MajorImageVersion: MajorImageVersion,
        MinorImageVersion: MinorImageVersion,
        MajorSubsystemVersion: MajorSubsystemVersion,
        MinorSubsystemVersion: MinorSubsystemVersion,
        Win32VersionValue: Win32VersionValue,
        SizeOfImage: SizeOfImage,
        SizeOfHeaders: SizeOfHeaders,
        CheckSum: CheckSum,
        Subsystem: Subsystem,
        DllCharacteristics: DllCharacteristics,
        SizeOfStackReserve: SizeOfStackReserve,
        SizeOfStackCommit: SizeOfStackCommit,
        SizeOfHeapReserve: SizeOfHeapReserve,
        SizeOfHeapCommit: SizeOfHeapCommit,
        LoaderFlags: LoaderFlags,
        NumberOfRvaAndSizes: NumberOfRvaAndSizes
    };
}
exports.loadImageOptionalHeader64 = loadImageOptionalHeader64;
function loadImageDataDirectory(d, p) {
    var ptr = p;
    var VirtualAddress = loadU4Field(d, ptr);
    ptr += VirtualAddress._size;
    var Size = loadU4Field(d, ptr);
    ptr += Size._size;
    return {
        _offset: p, _size: ptr - p,
        VirtualAddress: VirtualAddress,
        Size: Size
    };
}
exports.loadImageDataDirectory = loadImageDataDirectory;
function loadImageSectionHeader(d, p) {
    var ptr = p;
    var Name = loadFixedSizeAsciiStringField(d, ptr, 8);
    ptr += Name._size;
    var VirtualSize = loadU4Field(d, ptr);
    ptr += VirtualSize._size;
    var VirtualAddress = loadU4Field(d, ptr);
    ptr += VirtualAddress._size;
    var SizeOfRawData = loadU4Field(d, ptr);
    ptr += SizeOfRawData._size;
    var PointerToRawData = loadU4Field(d, ptr);
    ptr += PointerToRawData._size;
    var PointerToRelocations = loadU4Field(d, ptr);
    ptr += PointerToRelocations._size;
    var PointerToLinenumbers = loadU4Field(d, ptr);
    ptr += PointerToLinenumbers._size;
    var NumberOfRelocations = loadU2Field(d, ptr);
    ptr += NumberOfRelocations._size;
    var NumberOfLinenumbers = loadU2Field(d, ptr);
    ptr += NumberOfLinenumbers._size;
    var Characteristics = loadU4EnumField(d, ptr);
    ptr += Characteristics._size;
    return {
        _offset: p, _size: ptr - p,
        Name: Name,
        VirtualSize: VirtualSize,
        VirtualAddress: VirtualAddress,
        SizeOfRawData: SizeOfRawData,
        PointerToRawData: PointerToRawData,
        PointerToRelocations: PointerToRelocations,
        PointerToLinenumbers: PointerToLinenumbers,
        NumberOfRelocations: NumberOfRelocations,
        NumberOfLinenumbers: NumberOfLinenumbers,
        Characteristics: Characteristics
    };
}
exports.loadImageSectionHeader = loadImageSectionHeader;


/***/ })

/******/ });
//# sourceMappingURL=worker.js.map