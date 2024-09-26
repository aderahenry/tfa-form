"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Buttons = ({ formData, clearForm, setValidated, setIsDialogVisible, onSubmitHandler, }) => {
    const onClearButtonPressHandler = () => {
        clearForm();
        setValidated(false);
    };
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => setIsDialogVisible(true) },
            react_1.default.createElement(react_native_1.Text, { style: styles.link }, "Add a field")),
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.button },
                react_1.default.createElement(react_native_1.Button, { title: "Submit", onPress: onSubmitHandler })),
            react_1.default.createElement(react_native_1.View, { style: styles.button },
                react_1.default.createElement(react_native_1.Button, { title: "Clear", onPress: onClearButtonPressHandler, disabled: Object.keys(formData).length === 0 })))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
        paddingVertical: 10,
    },
    button: {
        width: "100%",
        marginTop: 5,
        marginBottom: 5,
    },
    link: {
        color: "blue",
        textDecorationLine: "none",
        textAlign: "right", // Ensure consistent spacing with other buttons
    },
});
exports.default = Buttons;
