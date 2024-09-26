"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SubmitAlert = ({ validated }) => {
    if (!validated) {
        return null;
    }
    return (react_1.default.createElement(react_native_1.View, { style: styles.alertContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.alertText }, "Submitted!")));
};
const styles = react_native_1.StyleSheet.create({
    alertContainer: {
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    alertText: {
        color: '#155724',
        fontSize: 16,
        textAlign: 'center',
    },
});
exports.default = SubmitAlert;
