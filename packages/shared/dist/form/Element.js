"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const withValidation_1 = __importDefault(require("./hoc/withValidation"));
const Element = ({ type, label, placeholder, value, onChangeText, }) => {
    let keyboardType = "default";
    switch (type) {
        case 'email':
            keyboardType = 'email-address';
            break;
        case 'tel':
            keyboardType = 'phone-pad';
            break;
        default:
            keyboardType = 'default';
    }
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, { style: styles.label }, label),
        react_1.default.createElement(react_native_1.TextInput, { style: styles.input, value: value, placeholder: placeholder, onChangeText: onChangeText, keyboardType: keyboardType, multiline: type === "textarea", accessibilityLabel: `${label} input field` })));
};
const styles = react_native_1.StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
});
exports.default = (0, withValidation_1.default)(Element);
