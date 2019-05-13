webpackHotUpdate("static/development/pages/request.js",{

/***/ "./pages/request.js":
/*!**************************!*\
  !*** ./pages/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_primaryLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/primaryLayout */ "./components/layout/primaryLayout.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _date_io_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @date-io/moment */ "./node_modules/@date-io/moment/build/index.esm.js");
/* harmony import */ var _lib_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/options */ "./lib/options.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/dist/material-ui-pickers.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "/Users/ctracy/Sites/progress/production/master/pages/request.js";







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      marginTop: theme.spacing(4),
      minWidth: 120 //   margin: theme.spacing(1),
      //   minWidth: 120,

    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  };
});

var Request = function Request(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('female'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(new Date('2019-01-19T00:00:00')),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      selectedDate = _React$useState4[0],
      setSelectedDate = _React$useState4[1];

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  var classes = useStyles();

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    age: '',
    name: 'hai'
  }),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      values = _React$useState6[0],
      setValues = _React$useState6[1];

  var inputLabel = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      labelWidth = _React$useState8[0],
      setLabelWidth = _React$useState8[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(function (oldValues) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    });
  }

  console.log(_lib_options__WEBPACK_IMPORTED_MODULE_7__["default"]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layout_primaryLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    className: classes.root,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    alignContent: "center",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
    fullWidth: true,
    variant: "outlined",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    ref: inputLabel,
    htmlFor: "outlined-age-simple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Where"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Select"], {
    value: values.age,
    onChange: handleChange,
    input: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["OutlinedInput"], {
      labelWidth: labelWidth,
      name: "age",
      id: "outlined-age-simple",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    disabled: true,
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Location")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Ten"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Twenty"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Thirty")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormHelperText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Select Location"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    alignContent: "center",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
    fullWidth: true,
    variant: "outlined",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
    ref: inputLabel,
    htmlFor: "outlined-age-simple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "What"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Select"], {
    value: values.age,
    onChange: handleChange,
    input: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["OutlinedInput"], {
      labelWidth: labelWidth,
      name: "age",
      id: "outlined-age-simple",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    disabled: true,
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Issu")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Ten"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Twenty"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Thirty")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormHelperText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Select Issue"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    alignContent: "center",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    component: "label",
    container: true,
    alignItems: "center",
    justify: "center",
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Schedule"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Switch"], {
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "ASAP"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    alignContent: "center",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["MuiPickersUtilsProvider"], {
    utils: _date_io_moment__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    justify: "space-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["DatePicker"], {
    margin: "normal",
    label: "Date picker",
    value: selectedDate,
    onChange: handleDateChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["TimePicker"], {
    margin: "normal",
    label: "Time picker",
    value: selectedDate,
    onChange: handleDateChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    alignContent: "center",
    justify: "center",
    style: {
      marginTop: "25px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    style: {
      padding: "15px"
    },
    fullWidth: true,
    size: "large",
    variant: "contained",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Submit Request"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ })

})
//# sourceMappingURL=request.js.4cbe74457bc46bcd43ae.hot-update.js.map