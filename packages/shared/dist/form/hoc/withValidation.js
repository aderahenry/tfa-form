"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const __1 = require("../..");
const withValidation = (WrappedComponent) => {
    return (props) => {
        const [error, setError] = (0, react_1.useState)("");
        const { type, value } = props;
        (0, react_1.useEffect)(() => {
            if (!value.trim()) {
                setError("This field is required");
            }
            else if (type === "email" && !(0, __1.validateEmail)(value)) {
                setError("Invalid email address");
            }
            else if (type === "tel" && !(0, __1.validatePhone)(value)) {
                setError("Invalid phone number");
            }
            else {
                setError("");
            }
        }, [value, type]);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(WrappedComponent, Object.assign({}, props)),
            error && react_1.default.createElement(react_native_1.Text, { style: styles.errorText }, error)));
    };
};
const styles = react_native_1.StyleSheet.create({
    errorText: {
        color: "#f00",
        marginTop: 5,
    },
    invalidInput: {
        borderColor: "#f00",
    },
});
exports.default = withValidation;
