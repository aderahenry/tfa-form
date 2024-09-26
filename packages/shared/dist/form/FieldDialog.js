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
const FormDialog = ({ visible, onClose, onSubmit }) => {
    const [fieldType, setFieldType] = (0, react_1.useState)(null);
    const [fieldLabel, setFieldLabel] = (0, react_1.useState)("");
    const handleFormSubmit = () => {
        if (fieldType && fieldLabel) {
            onSubmit(fieldType, fieldLabel);
            setFieldType(null);
            setFieldLabel("");
        }
        onClose();
    };
    return (react_1.default.createElement(react_native_1.Modal, { transparent: true, visible: visible, animationType: "fade" },
        react_1.default.createElement(react_native_1.View, { style: styles.modalOverlay },
            react_1.default.createElement(react_native_1.View, { style: styles.dialogContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.dialogTitle }, "Select Field Type"),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.radioButton, onPress: () => setFieldType("input") },
                    react_1.default.createElement(react_native_1.View, { style: styles.radioCircle }, fieldType === "input" && react_1.default.createElement(react_native_1.View, { style: styles.selectedCircle })),
                    react_1.default.createElement(react_native_1.Text, { style: styles.radioLabel }, "Short Text")),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.radioButton, onPress: () => setFieldType("textarea") },
                    react_1.default.createElement(react_native_1.View, { style: styles.radioCircle }, fieldType === "textarea" && react_1.default.createElement(react_native_1.View, { style: styles.selectedCircle })),
                    react_1.default.createElement(react_native_1.Text, { style: styles.radioLabel }, "Long Text")),
                react_1.default.createElement(react_native_1.Text, { style: styles.dialogTitle }, "Field Label"),
                react_1.default.createElement(react_native_1.TextInput, { value: fieldLabel, onChangeText: setFieldLabel, style: styles.textInput, placeholder: "Enter field label", autoCapitalize: "words" }),
                react_1.default.createElement(react_native_1.View, { style: styles.buttonContainer },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: onClose },
                        react_1.default.createElement(react_native_1.Text, null, "Cancel")),
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.button, styles.submitButton], onPress: handleFormSubmit, disabled: !fieldType || !fieldLabel },
                        react_1.default.createElement(react_native_1.Text, { style: styles.submitButtonText }, "Add Field")))))));
};
const styles = react_native_1.StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    dialogContainer: {
        width: 300,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    dialogTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "rgb(33, 150, 243)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    selectedCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "rgb(33, 150, 243)",
    },
    radioLabel: {
        fontSize: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 8,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#e0e0e0",
    },
    submitButton: {
        backgroundColor: "rgb(33, 150, 243)",
    },
    submitButtonText: {
        color: "#fff",
    },
});
exports.default = FormDialog;
