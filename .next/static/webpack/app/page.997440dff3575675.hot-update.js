"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ui/fileUpload.tsx":
/*!******************************************!*\
  !*** ./src/components/ui/fileUpload.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/s3 */ \"(app-pages-browser)/./src/lib/s3.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_Inbox_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Inbox!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/inbox.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dropzone */ \"(app-pages-browser)/./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ \"(app-pages-browser)/./node_modules/react-loader-spinner/dist/module.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst FileUpload = (props)=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // const {} = React.useState(false)\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { mutate } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)({\n        mutationFn: async (param)=>{\n            let { file_key, file_name } = param;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"/api/create-chat\", {\n                file_key,\n                file_name\n            });\n            return response.data;\n        }\n    });\n    const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_8__.useDropzone)({\n        accept: {\n            \"application/pdf\": [\n                \".pdf\"\n            ],\n            \"application/msword\": [\n                \".doc\",\n                \".docx\"\n            ],\n            \"application/vnd.ms-powerpoint\": [\n                \".ppt\",\n                \".pptx\"\n            ]\n        },\n        maxFiles: 1,\n        onDrop: async (acceptedFiles)=>{\n            console.log(acceptedFiles);\n            setLoading(true);\n            const file = acceptedFiles[0];\n            if (file.size > 10 * 1024 * 1024) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"file too larges\");\n                return;\n            }\n            try {\n                const data = await (0,_lib_s3__WEBPACK_IMPORTED_MODULE_1__.uploadToS3)(file);\n                if (!(data === null || data === void 0 ? void 0 : data.file_key) || !data.file_name) {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"something went wrong\");\n                    return;\n                }\n                mutate(data, {\n                    onSuccess: (param)=>{\n                        let { chat_id } = param;\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Chat created!\");\n                        setLoading(false);\n                        router.push(\"/chat/\".concat(chat_id));\n                    },\n                    onError: (err)=>{\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"error creating chat\");\n                        console.log(err);\n                    }\n                });\n            } catch (error) {\n                console.log(error);\n            } finally{}\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-2 bg-white rounded-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...getRootProps({\n                className: \"m-4 border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col\"\n            }),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ...getInputProps()\n                }, void 0, false, {\n                    fileName: \"F:\\\\2024\\\\FREELANCE\\\\PROJECTS\\\\ON-GOING\\\\converses-ai\\\\converses-ai\\\\src\\\\components\\\\ui\\\\fileUpload.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Inbox_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"w-10 h-10 text-pink-500 mb-2\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\2024\\\\FREELANCE\\\\PROJECTS\\\\ON-GOING\\\\converses-ai\\\\converses-ai\\\\src\\\\components\\\\ui\\\\fileUpload.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined),\n                        loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__.Oval, {\n                            visible: true,\n                            height: \"40\",\n                            width: \"40\",\n                            color: \"#ec4899\",\n                            ariaLabel: \"oval-loading\",\n                            wrapperStyle: {},\n                            wrapperClass: \"\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\2024\\\\FREELANCE\\\\PROJECTS\\\\ON-GOING\\\\converses-ai\\\\converses-ai\\\\src\\\\components\\\\ui\\\\fileUpload.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-slate-400 text-blue\",\n                            children: \"Drop pdf here\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\2024\\\\FREELANCE\\\\PROJECTS\\\\ON-GOING\\\\converses-ai\\\\converses-ai\\\\src\\\\components\\\\ui\\\\fileUpload.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\2024\\\\FREELANCE\\\\PROJECTS\\\\ON-GOING\\\\converses-ai\\\\converses-ai\\\\src\\\\components\\\\ui\\\\fileUpload.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\2024\\\\FREELANCE\\\\PROJECTS\\\\ON-GOING\\\\converses-ai\\\\converses-ai\\\\src\\\\components\\\\ui\\\\fileUpload.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileUpload, \"TG5u40g3q+LgRahg7eCCAsSXTXE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation,\n        react_dropzone__WEBPACK_IMPORTED_MODULE_8__.useDropzone\n    ];\n});\n_c = FileUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileUpload);\nvar _c;\n$RefreshReg$(_c, \"FileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2ZpbGVVcGxvYWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3NDO0FBQ2M7QUFDMUI7QUFDVztBQUNPO0FBQ1g7QUFDWTtBQUNUO0FBQ1E7QUFHNUMsTUFBTVMsYUFBYSxDQUFDQzs7SUFDbEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFVO0lBQ2hELG1DQUFtQztJQUNuQyxNQUFNUSxTQUFTVCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxNQUFNLEVBQUUsR0FBR2Isa0VBQVdBLENBQUM7UUFDN0JjLFlBQVk7Z0JBQU8sRUFDakJDLFFBQVEsRUFDUkMsU0FBUyxFQUlWO1lBQ0MsTUFBTUMsV0FBVyxNQUFNaEIsNkNBQUtBLENBQUNpQixJQUFJLENBQUMsb0JBQW9CO2dCQUNwREg7Z0JBQ0FDO1lBQ0Y7WUFDQSxPQUFPQyxTQUFTRSxJQUFJO1FBQ3RCO0lBQ0Y7SUFFQSxNQUFNLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFLEdBQUdoQiwyREFBV0EsQ0FBQztRQUNsRGlCLFFBQVE7WUFDTixtQkFBbUI7Z0JBQUM7YUFBTztZQUMzQixzQkFBc0I7Z0JBQUM7Z0JBQVE7YUFBUTtZQUN2QyxpQ0FBaUM7Z0JBQUM7Z0JBQVE7YUFBUTtRQUNwRDtRQUNBQyxVQUFVO1FBQ1ZDLFFBQVEsT0FBT0M7WUFDYkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaZCxXQUFXO1lBQ1gsTUFBTWlCLE9BQU9ILGFBQWEsQ0FBQyxFQUFFO1lBQzdCLElBQUlHLEtBQUtDLElBQUksR0FBRyxLQUFLLE9BQU8sTUFBTTtnQkFDaEN2Qix1REFBS0EsQ0FBQ3dCLEtBQUssQ0FBQztnQkFFWjtZQUNGO1lBQ0EsSUFBSTtnQkFDRixNQUFNWCxPQUFPLE1BQU1wQixtREFBVUEsQ0FBQzZCO2dCQUM5QixJQUFJLEVBQUNULGlCQUFBQSwyQkFBQUEsS0FBTUosUUFBUSxLQUFJLENBQUNJLEtBQUtILFNBQVMsRUFBRTtvQkFDdENWLHVEQUFLQSxDQUFDd0IsS0FBSyxDQUFDO29CQUNaO2dCQUNGO2dCQUNBakIsT0FBT00sTUFBTTtvQkFDWFksV0FBVzs0QkFBQyxFQUFFQyxPQUFPLEVBQUU7d0JBQ3JCMUIsdURBQUtBLENBQUMyQixPQUFPLENBQUM7d0JBQ2R0QixXQUFXO3dCQUNYQyxPQUFPc0IsSUFBSSxDQUFDLFNBQWlCLE9BQVJGO29CQUN2QjtvQkFDQUcsU0FBUyxDQUFDQzt3QkFDUjlCLHVEQUFLQSxDQUFDd0IsS0FBSyxDQUFDO3dCQUNaSixRQUFRQyxHQUFHLENBQUNTO29CQUNkO2dCQUNGO1lBQ0YsRUFBRSxPQUFPTixPQUFPO2dCQUNkSixRQUFRQyxHQUFHLENBQUNHO1lBQ2QsU0FBVSxDQUNWO1FBQ0Y7SUFDRjtJQUNBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUNFLEdBQUdqQixhQUFhO2dCQUNma0IsV0FDRTtZQUNKLEVBQUU7OzhCQUVGLDhEQUFDQztvQkFBTyxHQUFHbEIsZUFBZTs7Ozs7OzhCQUMxQjs7c0NBQ0UsOERBQUNuQixpRkFBS0E7NEJBQUNvQyxXQUFVOzs7Ozs7d0JBQ2hCNUIsd0JBQ0MsOERBQUNILHNEQUFJQTs0QkFDSGlDLFNBQVM7NEJBQ1RDLFFBQU87NEJBQ1BDLE9BQU07NEJBQ05DLE9BQU07NEJBQ05DLFdBQVU7NEJBQ1ZDLGNBQWMsQ0FBQzs0QkFDZkMsY0FBYTs7Ozs7c0RBR2YsOERBQUNDOzRCQUFFVCxXQUFVO3NDQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RDtHQXZGTTlCOztRQUdXTCxzREFBU0E7UUFDTEgsOERBQVdBO1FBZ0JVSyx1REFBV0E7OztLQXBCL0NHO0FBeUZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL2ZpbGVVcGxvYWQudHN4P2JkNDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1cGxvYWRUb1MzIH0gZnJvbSBcIkAvbGliL3MzXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEluYm94IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgT3ZhbCB9IGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xudHlwZSBQcm9wcyA9IHt9O1xuXG5jb25zdCBGaWxlVXBsb2FkID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIC8vIGNvbnN0IHt9ID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IG11dGF0ZSB9ID0gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uRm46IGFzeW5jICh7XG4gICAgICBmaWxlX2tleSxcbiAgICAgIGZpbGVfbmFtZSxcbiAgICB9OiB7XG4gICAgICBmaWxlX2tleTogc3RyaW5nO1xuICAgICAgZmlsZV9uYW1lOiBzdHJpbmc7XG4gICAgfSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9jcmVhdGUtY2hhdFwiLCB7XG4gICAgICAgIGZpbGVfa2V5LFxuICAgICAgICBmaWxlX25hbWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgYWNjZXB0OiB7XG4gICAgICBcImFwcGxpY2F0aW9uL3BkZlwiOiBbXCIucGRmXCJdLFxuICAgICAgXCJhcHBsaWNhdGlvbi9tc3dvcmRcIjogW1wiLmRvY1wiLCBcIi5kb2N4XCJdLFxuICAgICAgXCJhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludFwiOiBbXCIucHB0XCIsIFwiLnBwdHhcIl0sXG4gICAgfSxcbiAgICBtYXhGaWxlczogMSxcbiAgICBvbkRyb3A6IGFzeW5jIChhY2NlcHRlZEZpbGVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhhY2NlcHRlZEZpbGVzKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCBmaWxlID0gYWNjZXB0ZWRGaWxlc1swXTtcbiAgICAgIGlmIChmaWxlLnNpemUgPiAxMCAqIDEwMjQgKiAxMDI0KSB7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiZmlsZSB0b28gbGFyZ2VzXCIpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB1cGxvYWRUb1MzKGZpbGUpO1xuICAgICAgICBpZiAoIWRhdGE/LmZpbGVfa2V5IHx8ICFkYXRhLmZpbGVfbmFtZSkge1xuICAgICAgICAgIHRvYXN0LmVycm9yKFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG11dGF0ZShkYXRhLCB7XG4gICAgICAgICAgb25TdWNjZXNzOiAoeyBjaGF0X2lkIH0pID0+IHtcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJDaGF0IGNyZWF0ZWQhXCIpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL2NoYXQvJHtjaGF0X2lkfWApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJlcnJvciBjcmVhdGluZyBjaGF0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctd2hpdGUgcm91bmRlZC14bFwiPlxuICAgICAgPGRpdlxuICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHtcbiAgICAgICAgICBjbGFzc05hbWU6XG4gICAgICAgICAgICBcIm0tNCBib3JkZXItZGFzaGVkIGJvcmRlci0yIHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS01MCBweS04IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sXCIsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8SW5ib3ggY2xhc3NOYW1lPVwidy0xMCBoLTEwIHRleHQtcGluay01MDAgbWItMlwiIC8+XG4gICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8T3ZhbFxuICAgICAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICBjb2xvcj1cIiNlYzQ4OTlcIlxuICAgICAgICAgICAgICBhcmlhTGFiZWw9XCJvdmFsLWxvYWRpbmdcIlxuICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMCB0ZXh0LWJsdWVcIj5Ecm9wIHBkZiBoZXJlPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkO1xuIl0sIm5hbWVzIjpbInVwbG9hZFRvUzMiLCJ1c2VNdXRhdGlvbiIsImF4aW9zIiwiSW5ib3giLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZURyb3B6b25lIiwidG9hc3QiLCJPdmFsIiwiRmlsZVVwbG9hZCIsInByb3BzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJtdXRhdGUiLCJtdXRhdGlvbkZuIiwiZmlsZV9rZXkiLCJmaWxlX25hbWUiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImFjY2VwdCIsIm1heEZpbGVzIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwic2l6ZSIsImVycm9yIiwib25TdWNjZXNzIiwiY2hhdF9pZCIsInN1Y2Nlc3MiLCJwdXNoIiwib25FcnJvciIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidmlzaWJsZSIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJhcmlhTGFiZWwiLCJ3cmFwcGVyU3R5bGUiLCJ3cmFwcGVyQ2xhc3MiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/fileUpload.tsx\n"));

/***/ })

});