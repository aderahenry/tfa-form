"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const buttonTypes = {
    submit: {
        backgroundColor: "rgb(8, 145, 178)",
        textColor: "#fff",
        label: "Submit",
    },
    clear: {
        backgroundColor: "rgb(8, 145, 178)",
        textColor: "#fff",
        label: "Clear",
    },
    addField: {
        backgroundColor: "#2196F3",
        textColor: "#fff",
        label: "Add Field",
    },
    cancel: {
        backgroundColor: "#FFC107",
        textColor: "#fff",
        label: "Cancel",
    },
};
const Button = ({ type, disabled, onPress, }) => {
    const { backgroundColor, label, textColor } = buttonTypes[type] || buttonTypes.submit;
    if (type === "addField") {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress, accessibilityLabel: `${label} link`, style: styles.link },
            react_1.default.createElement(react_native_1.Text, { style: styles.linkText }, label)));
    }
    return (react_1.default.createElement(react_native_1.Pressable, { style: ({ pressed }) => [
            {
                backgroundColor: pressed ? "#ddd" : backgroundColor,
            },
            { opacity: disabled ? 0.4 : 1 },
            styles.button,
        ], onPress: onPress, accessibilityLabel: `${label} button`, disabled: disabled },
        react_1.default.createElement(react_native_1.Text, { style: [styles.text, { color: textColor }] }, label)));
};
const styles = react_native_1.StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        width: "49.5%",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    link: {
        alignSelf: "flex-end",
    },
    linkText: {
        color: "blue",
        textDecorationLine: "none",
    },
});
exports.default = Button;
