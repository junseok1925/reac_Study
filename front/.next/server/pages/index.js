"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 초기값 설정\nconst initialState = {\n    user: {\n        isLoggedIn: false,\n        user: null,\n        signUpData: {},\n        loginData: {}\n    },\n    post: {\n        mainPosts: []\n    }\n};\nconst login = (data)=>{\n    return {\n        type: \"LOG_IN\",\n        data\n    };\n};\n//async action creator\n// action creator\nconst changeNickname = (data)=>{\n    return {\n        type: \" CHANGE_NICKNAME\",\n        data\n    };\n};\n//                  (이전상태, 액션) => 다음상태\nconst rootReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"CHANGE_NICKNAME\":\n            return {\n                ...state,\n                user: {\n                    ...state.user,\n                    isLoggedIn: true,\n                    user: action.data\n                }\n            };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBUztBQUNULE1BQU1BLFlBQVksR0FBRztJQUNuQkMsSUFBSSxFQUFFO1FBQUVDLFVBQVUsRUFBRSxLQUFLO1FBQUVELElBQUksRUFBRSxJQUFJO1FBQUVFLFVBQVUsRUFBRSxFQUFFO1FBQUVDLFNBQVMsRUFBRSxFQUFFO0tBQUU7SUFDdEVDLElBQUksRUFBRTtRQUFFQyxTQUFTLEVBQUUsRUFBRTtLQUFFO0NBQ3hCO0FBRUQsTUFBTUMsS0FBSyxHQUFHLENBQUNDLElBQUksR0FBSztJQUN0QixPQUFPO1FBQ0xDLElBQUksRUFBRSxRQUFRO1FBQ2RELElBQUk7S0FDTCxDQUFDO0FBQ0osQ0FBQztBQUNELHNCQUFzQjtBQUN0QixpQkFBaUI7QUFFakIsTUFBTUUsY0FBYyxHQUFHLENBQUNGLElBQUksR0FBSztJQUMvQixPQUFPO1FBQ0xDLElBQUksRUFBRSxrQkFBa0I7UUFDeEJELElBQUk7S0FDTCxDQUFDO0FBQ0osQ0FBQztBQUVELHNDQUFzQztBQUN0QyxNQUFNRyxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHWixZQUFZLEVBQUVhLE1BQU0sR0FBSztJQUNwRCxPQUFRQSxNQUFNLENBQUNKLElBQUk7UUFDakIsS0FBSyxpQkFBaUI7WUFDcEIsT0FBTztnQkFDTCxHQUFHRyxLQUFLO2dCQUNSWCxJQUFJLEVBQUU7b0JBQ0osR0FBR1csS0FBSyxDQUFDWCxJQUFJO29CQUNiQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEJELElBQUksRUFBRVksTUFBTSxDQUFDTCxJQUFJO2lCQUNsQjthQUNGLENBQUM7S0FDTDtBQUNILENBQUM7QUFFRCxpRUFBZUcsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtSnVuU2Vva2dyYW0tZnJvbnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIOy0iOq4sOqwkiDshKTsoJVcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IHsgaXNMb2dnZWRJbjogZmFsc2UsIHVzZXI6IG51bGwsIHNpZ25VcERhdGE6IHt9LCBsb2dpbkRhdGE6IHt9IH0sXHJcbiAgcG9zdDogeyBtYWluUG9zdHM6IFtdIH0sXHJcbn07XHJcblxyXG5jb25zdCBsb2dpbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiTE9HX0lOXCIsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcbi8vYXN5bmMgYWN0aW9uIGNyZWF0b3JcclxuLy8gYWN0aW9uIGNyZWF0b3JcclxuXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCIgQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQ0hBTkdFX05JQ0tOQU1FXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwicG9zdCIsIm1haW5Qb3N0cyIsImxvZ2luIiwiZGF0YSIsInR5cGUiLCJjaGFuZ2VOaWNrbmFtZSIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();