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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const FieldDialog_1 = __importDefault(require("./components/FieldDialog"));
const Alert_1 = __importDefault(require("./components/Alert"));
const useTFAForm_1 = __importDefault(require("./useTFAForm"));
const Element_1 = __importDefault(require("./Element"));
const components_1 = require("./components");
const TFAForm = () => {
    const { formElements, formData, isValidated, onChangeTextHandler, onClearFormHandler, onAddFormFieldHandler, setIsValidated, onSubmitHandler, } = (0, useTFAForm_1.default)();
    const [isDialogVisible, setIsDialogVisible] = (0, react_1.useState)(false);
    const onClearButtonPressHandler = () => {
        onClearFormHandler();
        setIsValidated(false);
    };
    return (react_1.default.createElement(react_native_1.ScrollView, null,
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.Text, { style: styles.formTitle }, "TFA Form"),
            react_1.default.createElement(Alert_1.default, { validated: isValidated }),
            formElements.map((element) => (react_1.default.createElement(react_native_1.View, { key: element.id, style: { marginBottom: 15 } },
                react_1.default.createElement(Element_1.default, Object.assign({ key: element.id }, element, { onChangeText: value => onChangeTextHandler(value, element.id) }))))),
            react_1.default.createElement(components_1.Button, { type: "addField", onPress: () => setIsDialogVisible(true) }),
            react_1.default.createElement(react_native_1.View, { style: styles.outerButtonContainer },
                react_1.default.createElement(react_native_1.View, { style: styles.innerButtonContainer },
                    react_1.default.createElement(components_1.Button, { type: "submit", onPress: onSubmitHandler }),
                    react_1.default.createElement(components_1.Button, { type: "clear", onPress: onClearButtonPressHandler, disabled: Object.keys(formData).length === 0 })))),
        react_1.default.createElement(FieldDialog_1.default, { visible: isDialogVisible, onClose: () => setIsDialogVisible(false), onSubmit: (type, label) => {
                // Ensure you're using "text" instead of "input"
                onAddFormFieldHandler(type, label);
            } })));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
    },
    formTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        alignSelf: "center",
    },
    outerButtonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 0,
    },
    innerButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },
});
exports.default = TFAForm;
