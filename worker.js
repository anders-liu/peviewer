!function(e){var _={};function i(t){if(_[t])return _[t].exports;var E=_[t]={i:t,l:!1,exports:{}};return e[t].call(E.exports,E,E.exports,i),E.l=!0,E.exports}i.m=e,i.c=_,i.d=function(e,_,t){i.o(e,_)||Object.defineProperty(e,_,{configurable:!1,enumerable:!0,get:t})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var _=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(_,"a",_),_},i.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},i.p="",i(i.s=8)}([function(e,_,i){"use strict";_.__esModule=!0,_.IMAGE_DOS_SIGNATURE=23117,_.IMAGE_NT_SIGNATURE=17744,_.IMAGE_NT_OPTIONAL_HDR32_MAGIC=267,_.IMAGE_NT_OPTIONAL_HDR64_MAGIC=523,function(e){e[e.IMAGE_FILE_RELOCS_STRIPPED=1]="IMAGE_FILE_RELOCS_STRIPPED",e[e.IMAGE_FILE_EXECUTABLE_IMAGE=2]="IMAGE_FILE_EXECUTABLE_IMAGE",e[e.IMAGE_FILE_LINE_NUMS_STRIPPED=4]="IMAGE_FILE_LINE_NUMS_STRIPPED",e[e.IMAGE_FILE_LOCAL_SYMS_STRIPPED=8]="IMAGE_FILE_LOCAL_SYMS_STRIPPED",e[e.IMAGE_FILE_AGGRESIVE_WS_TRIM=16]="IMAGE_FILE_AGGRESIVE_WS_TRIM",e[e.IMAGE_FILE_LARGE_ADDRESS_AWARE=32]="IMAGE_FILE_LARGE_ADDRESS_AWARE",e[e.IMAGE_FILE_BYTES_REVERSED_LO=128]="IMAGE_FILE_BYTES_REVERSED_LO",e[e.IMAGE_FILE_32BIT_MACHINE=256]="IMAGE_FILE_32BIT_MACHINE",e[e.IMAGE_FILE_DEBUG_STRIPPED=512]="IMAGE_FILE_DEBUG_STRIPPED",e[e.IMAGE_FILE_REMOVABLE_RUN_FROM_SWAP=1024]="IMAGE_FILE_REMOVABLE_RUN_FROM_SWAP",e[e.IMAGE_FILE_NET_RUN_FROM_SWAP=2048]="IMAGE_FILE_NET_RUN_FROM_SWAP",e[e.IMAGE_FILE_SYSTEM=4096]="IMAGE_FILE_SYSTEM",e[e.IMAGE_FILE_DLL=8192]="IMAGE_FILE_DLL",e[e.IMAGE_FILE_UP_SYSTEM_ONLY=16384]="IMAGE_FILE_UP_SYSTEM_ONLY",e[e.IMAGE_FILE_BYTES_REVERSED_HI=32768]="IMAGE_FILE_BYTES_REVERSED_HI"}(_.ImageFile||(_.ImageFile={})),function(e){e[e.IMAGE_FILE_MACHINE_UNKNOWN=0]="IMAGE_FILE_MACHINE_UNKNOWN",e[e.IMAGE_FILE_MACHINE_TARGET_HOST=1]="IMAGE_FILE_MACHINE_TARGET_HOST",e[e.IMAGE_FILE_MACHINE_I386=332]="IMAGE_FILE_MACHINE_I386",e[e.IMAGE_FILE_MACHINE_R3000=354]="IMAGE_FILE_MACHINE_R3000",e[e.IMAGE_FILE_MACHINE_R4000=358]="IMAGE_FILE_MACHINE_R4000",e[e.IMAGE_FILE_MACHINE_R10000=360]="IMAGE_FILE_MACHINE_R10000",e[e.IMAGE_FILE_MACHINE_WCEMIPSV2=361]="IMAGE_FILE_MACHINE_WCEMIPSV2",e[e.IMAGE_FILE_MACHINE_ALPHA=388]="IMAGE_FILE_MACHINE_ALPHA",e[e.IMAGE_FILE_MACHINE_SH3=418]="IMAGE_FILE_MACHINE_SH3",e[e.IMAGE_FILE_MACHINE_SH3DSP=419]="IMAGE_FILE_MACHINE_SH3DSP",e[e.IMAGE_FILE_MACHINE_SH3E=420]="IMAGE_FILE_MACHINE_SH3E",e[e.IMAGE_FILE_MACHINE_SH4=422]="IMAGE_FILE_MACHINE_SH4",e[e.IMAGE_FILE_MACHINE_SH5=424]="IMAGE_FILE_MACHINE_SH5",e[e.IMAGE_FILE_MACHINE_ARM=448]="IMAGE_FILE_MACHINE_ARM",e[e.IMAGE_FILE_MACHINE_THUMB=450]="IMAGE_FILE_MACHINE_THUMB",e[e.IMAGE_FILE_MACHINE_ARMNT=452]="IMAGE_FILE_MACHINE_ARMNT",e[e.IMAGE_FILE_MACHINE_AM33=467]="IMAGE_FILE_MACHINE_AM33",e[e.IMAGE_FILE_MACHINE_POWERPC=496]="IMAGE_FILE_MACHINE_POWERPC",e[e.IMAGE_FILE_MACHINE_POWERPCFP=497]="IMAGE_FILE_MACHINE_POWERPCFP",e[e.IMAGE_FILE_MACHINE_IA64=512]="IMAGE_FILE_MACHINE_IA64",e[e.IMAGE_FILE_MACHINE_MIPS16=614]="IMAGE_FILE_MACHINE_MIPS16",e[e.IMAGE_FILE_MACHINE_ALPHA64=644]="IMAGE_FILE_MACHINE_ALPHA64",e[e.IMAGE_FILE_MACHINE_MIPSFPU=870]="IMAGE_FILE_MACHINE_MIPSFPU",e[e.IMAGE_FILE_MACHINE_MIPSFPU16=1126]="IMAGE_FILE_MACHINE_MIPSFPU16",e[e.IMAGE_FILE_MACHINE_AXP64=644]="IMAGE_FILE_MACHINE_AXP64",e[e.IMAGE_FILE_MACHINE_TRICORE=1312]="IMAGE_FILE_MACHINE_TRICORE",e[e.IMAGE_FILE_MACHINE_CEF=3311]="IMAGE_FILE_MACHINE_CEF",e[e.IMAGE_FILE_MACHINE_EBC=3772]="IMAGE_FILE_MACHINE_EBC",e[e.IMAGE_FILE_MACHINE_AMD64=34404]="IMAGE_FILE_MACHINE_AMD64",e[e.IMAGE_FILE_MACHINE_M32R=36929]="IMAGE_FILE_MACHINE_M32R",e[e.IMAGE_FILE_MACHINE_ARM64=43620]="IMAGE_FILE_MACHINE_ARM64",e[e.IMAGE_FILE_MACHINE_CEE=49390]="IMAGE_FILE_MACHINE_CEE"}(_.ImageFileMachine||(_.ImageFileMachine={})),function(e){e[e.IMAGE_SUBSYSTEM_UNKNOWN=0]="IMAGE_SUBSYSTEM_UNKNOWN",e[e.IMAGE_SUBSYSTEM_NATIVE=1]="IMAGE_SUBSYSTEM_NATIVE",e[e.IMAGE_SUBSYSTEM_WINDOWS_GUI=2]="IMAGE_SUBSYSTEM_WINDOWS_GUI",e[e.IMAGE_SUBSYSTEM_WINDOWS_CUI=3]="IMAGE_SUBSYSTEM_WINDOWS_CUI",e[e.IMAGE_SUBSYSTEM_OS2_CUI=5]="IMAGE_SUBSYSTEM_OS2_CUI",e[e.IMAGE_SUBSYSTEM_POSIX_CUI=7]="IMAGE_SUBSYSTEM_POSIX_CUI",e[e.IMAGE_SUBSYSTEM_NATIVE_WINDOWS=8]="IMAGE_SUBSYSTEM_NATIVE_WINDOWS",e[e.IMAGE_SUBSYSTEM_WINDOWS_CE_GUI=9]="IMAGE_SUBSYSTEM_WINDOWS_CE_GUI",e[e.IMAGE_SUBSYSTEM_EFI_APPLICATION=10]="IMAGE_SUBSYSTEM_EFI_APPLICATION",e[e.IMAGE_SUBSYSTEM_EFI_BOOT_SERVICE_DRIVER=11]="IMAGE_SUBSYSTEM_EFI_BOOT_SERVICE_DRIVER",e[e.IMAGE_SUBSYSTEM_EFI_RUNTIME_DRIVER=12]="IMAGE_SUBSYSTEM_EFI_RUNTIME_DRIVER",e[e.IMAGE_SUBSYSTEM_EFI_ROM=13]="IMAGE_SUBSYSTEM_EFI_ROM",e[e.IMAGE_SUBSYSTEM_XBOX=14]="IMAGE_SUBSYSTEM_XBOX",e[e.IMAGE_SUBSYSTEM_WINDOWS_BOOT_APPLICATION=16]="IMAGE_SUBSYSTEM_WINDOWS_BOOT_APPLICATION",e[e.IMAGE_SUBSYSTEM_XBOX_CODE_CATALOG=17]="IMAGE_SUBSYSTEM_XBOX_CODE_CATALOG"}(_.ImageSubsystem||(_.ImageSubsystem={})),function(e){e[e.IMAGE_DLLCHARACTERISTICS_HIGH_ENTROPY_VA=32]="IMAGE_DLLCHARACTERISTICS_HIGH_ENTROPY_VA",e[e.IMAGE_DLLCHARACTERISTICS_DYNAMIC_BASE=64]="IMAGE_DLLCHARACTERISTICS_DYNAMIC_BASE",e[e.IMAGE_DLLCHARACTERISTICS_FORCE_INTEGRITY=128]="IMAGE_DLLCHARACTERISTICS_FORCE_INTEGRITY",e[e.IMAGE_DLLCHARACTERISTICS_NX_COMPAT=256]="IMAGE_DLLCHARACTERISTICS_NX_COMPAT",e[e.IMAGE_DLLCHARACTERISTICS_NO_ISOLATION=512]="IMAGE_DLLCHARACTERISTICS_NO_ISOLATION",e[e.IMAGE_DLLCHARACTERISTICS_NO_SEH=1024]="IMAGE_DLLCHARACTERISTICS_NO_SEH",e[e.IMAGE_DLLCHARACTERISTICS_NO_BIND=2048]="IMAGE_DLLCHARACTERISTICS_NO_BIND",e[e.IMAGE_DLLCHARACTERISTICS_APPCONTAINER=4096]="IMAGE_DLLCHARACTERISTICS_APPCONTAINER",e[e.IMAGE_DLLCHARACTERISTICS_WDM_DRIVER=8192]="IMAGE_DLLCHARACTERISTICS_WDM_DRIVER",e[e.IMAGE_DLLCHARACTERISTICS_GUARD_CF=16384]="IMAGE_DLLCHARACTERISTICS_GUARD_CF",e[e.IMAGE_DLLCHARACTERISTICS_TERMINAL_SERVER_AWARE=32768]="IMAGE_DLLCHARACTERISTICS_TERMINAL_SERVER_AWARE"}(_.ImageDllCharacteristics||(_.ImageDllCharacteristics={})),function(e){e[e.IMAGE_DIRECTORY_ENTRY_EXPORT=0]="IMAGE_DIRECTORY_ENTRY_EXPORT",e[e.IMAGE_DIRECTORY_ENTRY_IMPORT=1]="IMAGE_DIRECTORY_ENTRY_IMPORT",e[e.IMAGE_DIRECTORY_ENTRY_RESOURCE=2]="IMAGE_DIRECTORY_ENTRY_RESOURCE",e[e.IMAGE_DIRECTORY_ENTRY_EXCEPTION=3]="IMAGE_DIRECTORY_ENTRY_EXCEPTION",e[e.IMAGE_DIRECTORY_ENTRY_SECURITY=4]="IMAGE_DIRECTORY_ENTRY_SECURITY",e[e.IMAGE_DIRECTORY_ENTRY_BASERELOC=5]="IMAGE_DIRECTORY_ENTRY_BASERELOC",e[e.IMAGE_DIRECTORY_ENTRY_DEBUG=6]="IMAGE_DIRECTORY_ENTRY_DEBUG",e[e.IMAGE_DIRECTORY_ENTRY_ARCHITECTURE=7]="IMAGE_DIRECTORY_ENTRY_ARCHITECTURE",e[e.IMAGE_DIRECTORY_ENTRY_GLOBALPTR=8]="IMAGE_DIRECTORY_ENTRY_GLOBALPTR",e[e.IMAGE_DIRECTORY_ENTRY_TLS=9]="IMAGE_DIRECTORY_ENTRY_TLS",e[e.IMAGE_DIRECTORY_ENTRY_LOAD_CONFIG=10]="IMAGE_DIRECTORY_ENTRY_LOAD_CONFIG",e[e.IMAGE_DIRECTORY_ENTRY_BOUND_IMPORT=11]="IMAGE_DIRECTORY_ENTRY_BOUND_IMPORT",e[e.IMAGE_DIRECTORY_ENTRY_IAT=12]="IMAGE_DIRECTORY_ENTRY_IAT",e[e.IMAGE_DIRECTORY_ENTRY_DELAY_IMPORT=13]="IMAGE_DIRECTORY_ENTRY_DELAY_IMPORT",e[e.IMAGE_DIRECTORY_ENTRY_COM_DESCRIPTOR=14]="IMAGE_DIRECTORY_ENTRY_COM_DESCRIPTOR"}(_.ImageDirectoryEntry||(_.ImageDirectoryEntry={})),_.IMAGE_NUMBEROF_DIRECTORY_ENTRIES=16,function(e){e[e.IMAGE_SCN_TYPE_NO_PAD=8]="IMAGE_SCN_TYPE_NO_PAD",e[e.IMAGE_SCN_CNT_CODE=32]="IMAGE_SCN_CNT_CODE",e[e.IMAGE_SCN_CNT_INITIALIZED_DATA=64]="IMAGE_SCN_CNT_INITIALIZED_DATA",e[e.IMAGE_SCN_CNT_UNINITIALIZED_DATA=128]="IMAGE_SCN_CNT_UNINITIALIZED_DATA",e[e.IMAGE_SCN_LNK_OTHER=256]="IMAGE_SCN_LNK_OTHER",e[e.IMAGE_SCN_LNK_INFO=512]="IMAGE_SCN_LNK_INFO",e[e.IMAGE_SCN_LNK_REMOVE=2048]="IMAGE_SCN_LNK_REMOVE",e[e.IMAGE_SCN_LNK_COMDAT=4096]="IMAGE_SCN_LNK_COMDAT",e[e.IMAGE_SCN_NO_DEFER_SPEC_EXC=16384]="IMAGE_SCN_NO_DEFER_SPEC_EXC",e[e.IMAGE_SCN_GPREL=32768]="IMAGE_SCN_GPREL",e[e.IMAGE_SCN_MEM_PURGEABLE=131072]="IMAGE_SCN_MEM_PURGEABLE",e[e.IMAGE_SCN_MEM_16BIT=131072]="IMAGE_SCN_MEM_16BIT",e[e.IMAGE_SCN_MEM_LOCKED=262144]="IMAGE_SCN_MEM_LOCKED",e[e.IMAGE_SCN_MEM_PRELOAD=524288]="IMAGE_SCN_MEM_PRELOAD",e[e.IMAGE_SCN_ALIGN_1BYTES=1048576]="IMAGE_SCN_ALIGN_1BYTES",e[e.IMAGE_SCN_ALIGN_2BYTES=2097152]="IMAGE_SCN_ALIGN_2BYTES",e[e.IMAGE_SCN_ALIGN_4BYTES=3145728]="IMAGE_SCN_ALIGN_4BYTES",e[e.IMAGE_SCN_ALIGN_8BYTES=4194304]="IMAGE_SCN_ALIGN_8BYTES",e[e.IMAGE_SCN_ALIGN_16BYTES=5242880]="IMAGE_SCN_ALIGN_16BYTES",e[e.IMAGE_SCN_ALIGN_32BYTES=6291456]="IMAGE_SCN_ALIGN_32BYTES",e[e.IMAGE_SCN_ALIGN_64BYTES=7340032]="IMAGE_SCN_ALIGN_64BYTES",e[e.IMAGE_SCN_ALIGN_128BYTES=8388608]="IMAGE_SCN_ALIGN_128BYTES",e[e.IMAGE_SCN_ALIGN_256BYTES=9437184]="IMAGE_SCN_ALIGN_256BYTES",e[e.IMAGE_SCN_ALIGN_512BYTES=10485760]="IMAGE_SCN_ALIGN_512BYTES",e[e.IMAGE_SCN_ALIGN_1024BYTES=11534336]="IMAGE_SCN_ALIGN_1024BYTES",e[e.IMAGE_SCN_ALIGN_2048BYTES=12582912]="IMAGE_SCN_ALIGN_2048BYTES",e[e.IMAGE_SCN_ALIGN_4096BYTES=13631488]="IMAGE_SCN_ALIGN_4096BYTES",e[e.IMAGE_SCN_ALIGN_8192BYTES=14680064]="IMAGE_SCN_ALIGN_8192BYTES",e[e.IMAGE_SCN_LNK_NRELOC_OVFL=16777216]="IMAGE_SCN_LNK_NRELOC_OVFL",e[e.IMAGE_SCN_MEM_DISCARDABLE=33554432]="IMAGE_SCN_MEM_DISCARDABLE",e[e.IMAGE_SCN_MEM_NOT_CACHED=67108864]="IMAGE_SCN_MEM_NOT_CACHED",e[e.IMAGE_SCN_MEM_NOT_PAGED=134217728]="IMAGE_SCN_MEM_NOT_PAGED",e[e.IMAGE_SCN_MEM_SHARED=268435456]="IMAGE_SCN_MEM_SHARED",e[e.IMAGE_SCN_MEM_EXECUTE=536870912]="IMAGE_SCN_MEM_EXECUTE",e[e.IMAGE_SCN_MEM_READ=1073741824]="IMAGE_SCN_MEM_READ",e[e.IMAGE_SCN_MEM_WRITE=2147483648]="IMAGE_SCN_MEM_WRITE",e[e.IMAGE_SCN_SCALE_INDEX=1]="IMAGE_SCN_SCALE_INDEX"}(_.ImageSection||(_.ImageSection={}))},function(e,_,i){"use strict";function t(e){return n(e.toString(16).toUpperCase(),2)}function E(e){return n(e.toString(16).toUpperCase(),4)}function r(e){return n(e.toString(16).toUpperCase(),8)}function a(e){return t(e)+"h"}function I(e){return E(e)+"h"}function o(e){return r(e)+"h"}function s(e){return e.toString(16).toUpperCase()+"h ("+e+")"}function A(e,_){void 0===_&&(_=16);for(var i=[],E=0;E<e.length;E+=_){var r=Array.from(e.subarray(E,E+_)).map(function(e){return t(e)}).join("-");i.push(r)}return i}function n(e,_){return e.length<_?"0".repeat(_-e.length)+e:e}function M(e,_,i,t){var E;switch(i){case 1:E=a(_.value);break;case 2:E=I(_.value);break;case 4:E=o(_.value);break;default:E=_.value.toString(16).toUpperCase()}return{offset:o(_._offset),size:s(_._size),rawData:A(_.data),name:e,value:t?E+" ("+S(_.value)+")":E}}function S(e){return e.toLocaleString()}_.__esModule=!0,_.formatU1RawHex=t,_.formatU2RawHex=E,_.formatU4RawHex=r,_.formatU1Hex=a,_.formatU2Hex=I,_.formatU4Hex=o,_.formatHexDec=s,_.formatBytes=A,_.formatStructTitle=function(e,_){return _+" ["+o(e._offset)+" - "+o(e._offset+e._size)+" : "+s(e._size)+"]"},_.formatU1Field=function(e,_,i){return M(e,_,1,i)},_.formatU2Field=function(e,_,i){return M(e,_,2,i)},_.formatU4Field=function(e,_,i){return M(e,_,4,i)},_.formatU8Field=function(e,_,i){var t=r(_.high)+" "+o(_.low);return i&&_.high<2097151&&(t+=" ("+S(4294967296*_.high+_.low)+")"),{offset:o(_._offset),size:s(_._size),rawData:A(_.data),name:e,value:t}},_.formatBytesField=function(e,_){return{offset:o(_._offset),size:s(_._size),rawData:A(_.data),name:e,value:""}},_.formatStringField=function(e,_){return{offset:o(_._offset),size:s(_._size),rawData:A(_.data),name:e,value:'"'+_.value+'"'}}},function(e,_,i){"use strict";_.__esModule=!0;var t=i(0),E=i(1);_.generateHeadersPageData=function(e){return{id:"HEADERS",title:"Headers",dosHeader:function(e){var _={title:"DOS Header",elemID:"dos-hdr"},i=e.getDosHeader();return i?(_.items=[E.formatU2Field("e_magic",i.e_magic),E.formatU2Field("e_cblp",i.e_cblp),E.formatU2Field("e_cp",i.e_cp),E.formatU2Field("e_crlc",i.e_crlc),E.formatU2Field("e_cparhdr",i.e_cparhdr),E.formatU2Field("e_minalloc",i.e_minalloc),E.formatU2Field("e_maxalloc",i.e_maxalloc),E.formatU2Field("e_ss",i.e_ss),E.formatU2Field("e_sp",i.e_sp),E.formatU2Field("e_csum",i.e_csum),E.formatU2Field("e_ip",i.e_ip),E.formatU2Field("e_cs",i.e_cs),E.formatU2Field("e_lfarlc",i.e_lfarlc),E.formatU2Field("e_ovno",i.e_ovno),E.formatBytesField("e_res",i.e_res),E.formatU2Field("e_oemid",i.e_oemid),E.formatU2Field("e_oeminfo",i.e_oeminfo),E.formatBytesField("e_res2",i.e_res2),E.formatU4Field("e_lfanew",i.e_lfanew)],_):_}(e),peSignature:function(e){var _={title:"PE Signature",elemID:"pe-sig"},i=e.getPESignature();return i?(_.items=[E.formatU4Field("PE Signature",i)],_):_}(e),fileHeader:function(e){var _={title:"File Header",elemID:"pe-hdr"},i=e.getFileHeader();return i?(_.items=[E.formatU2Field("Machine",i.Machine),E.formatU2Field("NumberOfSections",i.NumberOfSections,!0),E.formatU4Field("TimeDateStamp",i.TimeDateStamp),E.formatU4Field("PointerToSymbolTable",i.PointerToSymbolTable),E.formatU4Field("NumberOfSymbols",i.NumberOfSymbols,!0),E.formatU2Field("SizeOfOptionalHeader",i.SizeOfOptionalHeader,!0),E.formatU2Field("Characteristics",i.Characteristics)],_):_}(e),optionalHeader:function(e){var _={title:"Optional Header",elemID:"opt-hdr"},i=e.getOptionalHeader();if(!i)return _;switch(i.Magic.value){case t.IMAGE_NT_OPTIONAL_HDR32_MAGIC:_.title+=" (32-bit)",function(e,_){e.groups=[{title:"Standard Fields",items:[E.formatU2Field("Magic",_.Magic),E.formatU1Field("MajorLinkerVersion",_.MajorLinkerVersion,!0),E.formatU1Field("MinorLinkerVersion",_.MinorLinkerVersion,!0),E.formatU4Field("SizeOfCode",_.SizeOfCode,!0),E.formatU4Field("SizeOfInitializedData",_.SizeOfInitializedData,!0),E.formatU4Field("SizeOfUninitializedData",_.SizeOfUninitializedData,!0),E.formatU4Field("AddressOfEntryPoint",_.AddressOfEntryPoint),E.formatU4Field("BaseOfCode",_.BaseOfCode),E.formatU4Field("BaseOfData",_.BaseOfData)]},{title:"NT-specified Fields",items:[E.formatU4Field("ImageBase",_.ImageBase),E.formatU4Field("SectionAlignment",_.SectionAlignment,!0),E.formatU4Field("FileAlignment",_.FileAlignment,!0),E.formatU2Field("MajorOperatingSystemVersion",_.MajorOperatingSystemVersion,!0),E.formatU2Field("MinorOperatingSystemVersion",_.MinorOperatingSystemVersion,!0),E.formatU2Field("MajorImageVersion",_.MajorImageVersion,!0),E.formatU2Field("MinorImageVersion",_.MinorImageVersion,!0),E.formatU2Field("MajorSubsystemVersion",_.MajorSubsystemVersion,!0),E.formatU2Field("MinorSubsystemVersion",_.MinorSubsystemVersion,!0),E.formatU4Field("Win32VersionValue",_.Win32VersionValue,!0),E.formatU4Field("SizeOfImage",_.SizeOfImage,!0),E.formatU4Field("SizeOfHeaders",_.SizeOfHeaders,!0),E.formatU4Field("CheckSum",_.CheckSum),E.formatU2Field("Subsystem",_.Subsystem),E.formatU2Field("DllCharacteristics",_.DllCharacteristics),E.formatU4Field("SizeOfStackReserve",_.SizeOfStackReserve,!0),E.formatU4Field("SizeOfStackCommit",_.SizeOfStackCommit,!0),E.formatU4Field("SizeOfHeapReserve",_.SizeOfHeapReserve,!0),E.formatU4Field("SizeOfHeapCommit",_.SizeOfHeapCommit,!0),E.formatU4Field("LoaderFlags",_.LoaderFlags),E.formatU4Field("NumberOfRvaAndSizes",_.NumberOfRvaAndSizes,!0)]}]}(_,i);break;case t.IMAGE_NT_OPTIONAL_HDR64_MAGIC:_.title+=" (64-bit)",function(e,_){e.groups=[{title:"Standard Fields",items:[E.formatU2Field("Magic",_.Magic),E.formatU1Field("MajorLinkerVersion",_.MajorLinkerVersion,!0),E.formatU1Field("MinorLinkerVersion",_.MinorLinkerVersion,!0),E.formatU4Field("SizeOfCode",_.SizeOfCode,!0),E.formatU4Field("SizeOfInitializedData",_.SizeOfInitializedData,!0),E.formatU4Field("SizeOfUninitializedData",_.SizeOfUninitializedData,!0),E.formatU4Field("AddressOfEntryPoint",_.AddressOfEntryPoint),E.formatU4Field("BaseOfCode",_.BaseOfCode)]},{title:"NT-specified Fields",items:[E.formatU8Field("ImageBase",_.ImageBase),E.formatU4Field("SectionAlignment",_.SectionAlignment,!0),E.formatU4Field("FileAlignment",_.FileAlignment,!0),E.formatU2Field("MajorOperatingSystemVersion",_.MajorOperatingSystemVersion,!0),E.formatU2Field("MinorOperatingSystemVersion",_.MinorOperatingSystemVersion,!0),E.formatU2Field("MajorImageVersion",_.MajorImageVersion,!0),E.formatU2Field("MinorImageVersion",_.MinorImageVersion,!0),E.formatU2Field("MajorSubsystemVersion",_.MajorSubsystemVersion,!0),E.formatU2Field("MinorSubsystemVersion",_.MinorSubsystemVersion,!0),E.formatU4Field("Win32VersionValue",_.Win32VersionValue,!0),E.formatU4Field("SizeOfImage",_.SizeOfImage,!0),E.formatU4Field("SizeOfHeaders",_.SizeOfHeaders,!0),E.formatU4Field("CheckSum",_.CheckSum),E.formatU2Field("Subsystem",_.Subsystem),E.formatU2Field("DllCharacteristics",_.DllCharacteristics),E.formatU8Field("SizeOfStackReserve",_.SizeOfStackReserve,!0),E.formatU8Field("SizeOfStackCommit",_.SizeOfStackCommit,!0),E.formatU8Field("SizeOfHeapReserve",_.SizeOfHeapReserve,!0),E.formatU8Field("SizeOfHeapCommit",_.SizeOfHeapCommit,!0),E.formatU4Field("LoaderFlags",_.LoaderFlags),E.formatU4Field("NumberOfRvaAndSizes",_.NumberOfRvaAndSizes,!0)]}]}(_,i)}return _}(e),dataDirectories:function(e){var _={title:"Data Dreictories",elemID:"data-dir"},i=e.getDataDirectories();return i?(_.groups=i.items.map(function(e,_){return{title:"["+_+"] "+(t.ImageDirectoryEntry[_]||""),items:[E.formatU4Field("VirtualAddress",e.VirtualAddress),E.formatU4Field("Size",e.Size,!0)]}}),_):_}(e),sectionHeaders:function(e){var _={title:"Section headers",elemID:"sec-hdrs"},i=e.getSectionHeaders();return i?(_.groups=i.items.map(function(e,_){return{title:"["+_+"]",items:[E.formatStringField("Name",e.Name),E.formatU4Field("VirtualSize",e.VirtualSize,!0),E.formatU4Field("VirtualAddress",e.VirtualAddress),E.formatU4Field("SizeOfRawData",e.SizeOfRawData,!0),E.formatU4Field("PointerToRawData",e.PointerToRawData),E.formatU4Field("PointerToRelocations",e.PointerToRelocations),E.formatU4Field("PointerToLinenumbers",e.PointerToLinenumbers),E.formatU2Field("NumberOfRelocations",e.NumberOfRelocations,!0),E.formatU2Field("NumberOfLinenumbers",e.NumberOfLinenumbers,!0),E.formatU4Field("Characteristics",e.Characteristics)]}}),_):_}(e)}}},function(e,_,i){"use strict";_.__esModule=!0;var t=i(2);_.generatePageData=function(e,_){switch(_){case"HEADERS":return t.generateHeadersPageData(e);default:return{id:"NOTFOUND",title:"Page Not Found"}}}},function(e,_,i){"use strict";var t,E=this&&this.__extends||(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,_){e.__proto__=_}||function(e,_){for(var i in _)_.hasOwnProperty(i)&&(e[i]=_[i])},function(e,_){function i(){this.constructor=e}t(e,_),e.prototype=null===_?Object.create(_):(i.prototype=_.prototype,new i)});_.__esModule=!0;var r=function(e){function _(_,i,t){var E=e.call(this,_)||this;return E.type=_,E.offset=i,E.size=t,E}return E(_,e),_}(Error);_.PEError=r},function(e,_,i){"use strict";function t(e,_){return{_offset:_,_size:1,data:e.getData(_,1),value:e.getU1(_)}}function E(e,_){return{_offset:_,_size:2,data:e.getData(_,2),value:e.getU2(_)}}function r(e,_){return{_offset:_,_size:4,data:e.getData(_,4),value:e.getU4(_)}}function a(e,_){var i=e.getU4(_),t=e.getU4(_+4);return{_offset:_,_size:8,data:e.getData(_,8),low:i,high:t}}function I(e,_){return{_offset:_,_size:2,data:e.getData(_,2),value:e.getU2(_)}}function o(e,_){return{_offset:_,_size:4,data:e.getData(_,4),value:e.getU4(_)}}function s(e,_,i){return{_offset:_,_size:i,data:e.getData(_,i)}}function A(e,_,i){var t=e.getData(_,i);return{_offset:_,_size:i,data:t,value:String.fromCharCode.apply(null,Array.from(t))}}_.__esModule=!0,_.loadU1Field=t,_.loadU2Field=E,_.loadU4Field=r,_.loadU8Field=a,_.loadU1EnumField=function(e,_){return{_offset:_,_size:1,data:e.getData(_,1),value:e.getU1(_)}},_.loadU2EnumField=I,_.loadU4EnumField=o,_.loadFixedSizeByteArray=s,_.loadFixedSizeAsciiStringField=A,_.loadStructArrayByCount=function(e,_,i,t){for(var E=[],r=_,a=0;a<t;a++){var I=i(e,r);E.push(I),r+=I._size}return{_offset:_,_size:r-_,items:E}},_.loadImageDosHeader=function(e,_){var i=_,t=E(e,i),a=E(e,i+=t._size),I=E(e,i+=a._size),o=E(e,i+=I._size),A=E(e,i+=o._size),n=E(e,i+=A._size),M=E(e,i+=n._size),S=E(e,i+=M._size),f=E(e,i+=S._size),C=E(e,i+=f._size),l=E(e,i+=C._size),N=E(e,i+=l._size),R=E(e,i+=N._size),d=E(e,i+=R._size),G=s(e,i+=d._size,8),m=E(e,i+=G._size),T=E(e,i+=m._size),u=s(e,i+=T._size,20),O=r(e,i+=u._size);return{_offset:_,_size:(i+=O._size)-_,e_magic:t,e_cblp:a,e_cp:I,e_crlc:o,e_cparhdr:A,e_minalloc:n,e_maxalloc:M,e_ss:S,e_sp:f,e_csum:C,e_ip:l,e_cs:N,e_lfarlc:R,e_ovno:d,e_res:G,e_oemid:m,e_oeminfo:T,e_res2:u,e_lfanew:O}},_.loadImageFileHeader=function(e,_){var i=_,t=E(e,i),a=E(e,i+=t._size),o=r(e,i+=a._size),s=r(e,i+=o._size),A=r(e,i+=s._size),n=E(e,i+=A._size),M=I(e,i+=n._size);return{_offset:_,_size:(i+=M._size)-_,Machine:t,NumberOfSections:a,TimeDateStamp:o,PointerToSymbolTable:s,NumberOfSymbols:A,SizeOfOptionalHeader:n,Characteristics:M}},_.loadImageOptionalHeader32=function(e,_){var i=_,a=E(e,i),o=t(e,i+=a._size),s=t(e,i+=o._size),A=r(e,i+=s._size),n=r(e,i+=A._size),M=r(e,i+=n._size),S=r(e,i+=M._size),f=r(e,i+=S._size),C=r(e,i+=f._size),l=r(e,i+=C._size),N=r(e,i+=l._size),R=r(e,i+=N._size),d=E(e,i+=R._size),G=E(e,i+=d._size),m=E(e,i+=G._size),T=E(e,i+=m._size),u=E(e,i+=T._size),O=E(e,i+=u._size),c=r(e,i+=O._size),L=r(e,i+=c._size),F=r(e,i+=L._size),D=r(e,i+=F._size),U=I(e,i+=D._size),z=I(e,i+=U._size),H=r(e,i+=z._size),g=r(e,i+=H._size),P=r(e,i+=g._size),p=r(e,i+=P._size),Y=r(e,i+=p._size),B=r(e,i+=Y._size);return{_offset:_,_size:(i+=B._size)-_,Magic:a,MajorLinkerVersion:o,MinorLinkerVersion:s,SizeOfCode:A,SizeOfInitializedData:n,SizeOfUninitializedData:M,AddressOfEntryPoint:S,BaseOfCode:f,BaseOfData:C,ImageBase:l,SectionAlignment:N,FileAlignment:R,MajorOperatingSystemVersion:d,MinorOperatingSystemVersion:G,MajorImageVersion:m,MinorImageVersion:T,MajorSubsystemVersion:u,MinorSubsystemVersion:O,Win32VersionValue:c,SizeOfImage:L,SizeOfHeaders:F,CheckSum:D,Subsystem:U,DllCharacteristics:z,SizeOfStackReserve:H,SizeOfStackCommit:g,SizeOfHeapReserve:P,SizeOfHeapCommit:p,LoaderFlags:Y,NumberOfRvaAndSizes:B}},_.loadImageOptionalHeader64=function(e,_){var i=_,o=E(e,i),s=t(e,i+=o._size),A=t(e,i+=s._size),n=r(e,i+=A._size),M=r(e,i+=n._size),S=r(e,i+=M._size),f=r(e,i+=S._size),C=r(e,i+=f._size),l=a(e,i+=C._size),N=r(e,i+=l._size),R=r(e,i+=N._size),d=E(e,i+=R._size),G=E(e,i+=d._size),m=E(e,i+=G._size),T=E(e,i+=m._size),u=E(e,i+=T._size),O=E(e,i+=u._size),c=r(e,i+=O._size),L=r(e,i+=c._size),F=r(e,i+=L._size),D=r(e,i+=F._size),U=I(e,i+=D._size),z=I(e,i+=U._size),H=a(e,i+=z._size),g=a(e,i+=H._size),P=a(e,i+=g._size),p=a(e,i+=P._size),Y=r(e,i+=p._size),B=r(e,i+=Y._size);return{_offset:_,_size:(i+=B._size)-_,Magic:o,MajorLinkerVersion:s,MinorLinkerVersion:A,SizeOfCode:n,SizeOfInitializedData:M,SizeOfUninitializedData:S,AddressOfEntryPoint:f,BaseOfCode:C,ImageBase:l,SectionAlignment:N,FileAlignment:R,MajorOperatingSystemVersion:d,MinorOperatingSystemVersion:G,MajorImageVersion:m,MinorImageVersion:T,MajorSubsystemVersion:u,MinorSubsystemVersion:O,Win32VersionValue:c,SizeOfImage:L,SizeOfHeaders:F,CheckSum:D,Subsystem:U,DllCharacteristics:z,SizeOfStackReserve:H,SizeOfStackCommit:g,SizeOfHeapReserve:P,SizeOfHeapCommit:p,LoaderFlags:Y,NumberOfRvaAndSizes:B}},_.loadImageDataDirectory=function(e,_){var i=_,t=r(e,i),E=r(e,i+=t._size);return{_offset:_,_size:(i+=E._size)-_,VirtualAddress:t,Size:E}},_.loadImageSectionHeader=function(e,_){var i=_,t=A(e,i,8),a=r(e,i+=t._size),I=r(e,i+=a._size),s=r(e,i+=I._size),n=r(e,i+=s._size),M=r(e,i+=n._size),S=r(e,i+=M._size),f=E(e,i+=S._size),C=E(e,i+=f._size),l=o(e,i+=C._size);return{_offset:_,_size:(i+=l._size)-_,Name:t,VirtualSize:a,VirtualAddress:I,SizeOfRawData:s,PointerToRawData:n,PointerToRelocations:M,PointerToLinenumbers:S,NumberOfRelocations:f,NumberOfLinenumbers:C,Characteristics:l}}},function(e,_,i){"use strict";_.__esModule=!0;var t=i(5),E=i(0),r=i(4),a=function(){function e(e){this.data=new DataView(e),this.loadHeaders()}return e.load=function(_){return new e(_)},e.prototype.getU1=function(e){return this.check(e,1),this.data.getUint8(e)},e.prototype.getU2=function(e){return this.check(e,2),this.data.getUint16(e,!0)},e.prototype.getU4=function(e){return this.check(e,3),this.data.getUint32(e,!0)},e.prototype.getData=function(e,_){return this.check(e,_),new Uint8Array(this.data.buffer.slice(e,e+_))},e.prototype.getDosHeader=function(){return this.dosHeader},e.prototype.getPESignature=function(){return this.peSignature},e.prototype.getFileHeader=function(){return this.fileHeader},e.prototype.getOptionalHeader=function(){return this.optionalHeader},e.prototype.getDataDirectories=function(){return this.dataDirectories},e.prototype.getSectionHeaders=function(){return this.sectionHeaders},e.prototype.check=function(e,_){if(e<0||e>=this.data.byteLength||_<0||e+_>this.data.byteLength)throw new r.PEError("INVALID_DATA_POSITION",e,_)},e.prototype.loadHeaders=function(){var e=0;if(this.dosHeader=t.loadImageDosHeader(this,e),this.dosHeader.e_magic.value!=E.IMAGE_DOS_SIGNATURE)throw new r.PEError("INVALID_DOS_SIGNATURE",e,2);if(e=this.dosHeader.e_lfanew.value,this.peSignature=t.loadU4Field(this,e),this.peSignature.value!=E.IMAGE_NT_SIGNATURE)throw new r.PEError("INVALID_PE_SIGNATURE",e,4);switch(e+=this.peSignature._size,this.fileHeader=t.loadImageFileHeader(this,e),e+=this.fileHeader._size,t.loadU2Field(this,e).value){case E.IMAGE_NT_OPTIONAL_HDR32_MAGIC:this.optionalHeader=t.loadImageOptionalHeader32(this,e);break;case E.IMAGE_NT_OPTIONAL_HDR64_MAGIC:this.optionalHeader=t.loadImageOptionalHeader64(this,e);break;default:throw new r.PEError("INVALID_OPTIONAL_HEADER_MAGIC",e,2)}if(this.optionalHeader.NumberOfRvaAndSizes.value!=E.IMAGE_NUMBEROF_DIRECTORY_ENTRIES)throw new r.PEError("INVALID_DATA_DIRECTORY_COUNT",this.optionalHeader.NumberOfRvaAndSizes._offset,this.optionalHeader.NumberOfRvaAndSizes._size);e+=this.optionalHeader._size,this.dataDirectories=t.loadStructArrayByCount(this,e,t.loadImageDataDirectory,this.optionalHeader.NumberOfRvaAndSizes.value),e+=this.dataDirectories._size,this.sectionHeaders=t.loadStructArrayByCount(this,e,t.loadImageSectionHeader,this.fileHeader.NumberOfSections.value)},e}();_.PEImage=a},function(e,_,i){"use strict";_.__esModule=!0,_.createResNavDataMessage=function(e){return{type:"RES_NAV_DATA",navList:e}},_.createResPageDataMessage=function(e){return{type:"RES_PAGE_DATA",pageData:e}},_.createResPEErrorMessage=function(e){return{type:"RES_PE_ERROR",error:e}}},function(e,_,i){"use strict";_.__esModule=!0;var t=i(7),E=i(6),r=i(3),a=null;onmessage=function(e){var _=e.data;switch(_.type){case"REQ_OPEN_FILE":!function(e){var _=new FileReader;_.onload=function(e){try{var _=e.target.result;a=E.PEImage.load(_);var i=r.generatePageData(a,"HEADERS"),I=t.createResPageDataMessage(i);postMessage(I)}catch(e){var o=t.createResPEErrorMessage(e.message||"Unknown error: "+JSON.stringify(e));postMessage(o)}},_.onerror=function(e){a=null;var _=t.createResPEErrorMessage("Can't open file.");postMessage(_)},_.readAsArrayBuffer(e.file)}(_)}}}]);
//# sourceMappingURL=worker.js.map