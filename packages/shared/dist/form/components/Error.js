"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Error = ({ error }) => {
    if (!error) {
        return null;
    }
    return react_1.default.createElement(react_native_1.Text, { style: styles.errorText }, error);
};
const styles = react_native_1.StyleSheet.create({
    errorText: {
        color: "#f00",
        marginTop: 5,
    },
});
exports.default = Error;
