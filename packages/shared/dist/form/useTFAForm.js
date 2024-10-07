"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useTFAForm = () => {
    const [formFields, setFormFields] = (0, react_1.useState)({
        name: {
            type: "text",
            label: "Your name",
            placeholder: "Name",
            value: "",
        },
        email: {
            type: "email",
            label: "Your email",
            placeholder: "Email",
            value: "",
        },
        phone: {
            type: "tel",
            label: "Your phone number",
            placeholder: "Phone",
            value: "",
        },
        message: {
            type: "textarea",
            label: "Your message",
            placeholder: "Type message...",
            value: "",
        },
    });
    const [isValidated, setIsValidated] = (0, react_1.useState)(false);
    const formElements = (0, react_1.useMemo)(() => {
        const elements = [];
        for (let key in formFields) {
            const { value, type, placeholder, label } = formFields[key];
            const fieldKey = key;
            elements.push({
                id: fieldKey,
                type,
                placeholder,
                value,
                label,
            });
        }
        return elements;
    }, [formFields]);
    // Final form data to be submitted
    const formData = {};
    for (let key in formFields) {
        const { value } = formFields[key];
        const fieldKey = key;
        if (value.length > 0) {
            formData[fieldKey] = value;
        }
    }
    const onChangeTextHandler = (value, id) => {
        const updatedFields = Object.assign({}, formFields);
        updatedFields[id].value = value;
        setFormFields(updatedFields);
    };
    const onSubmitHandler = () => {
        const allFieldsFilled = Object.keys(formData).length === Object.keys(formFields).length;
        if (allFieldsFilled) {
            setIsValidated(true);
        }
        else {
            console.error("Validation failed: Some fields are empty.");
        }
    };
    const onClearFormHandler = () => {
        const updatedFields = Object.assign({}, formFields);
        for (let key in updatedFields) {
            const fieldKey = key;
            updatedFields[fieldKey].value = "";
        }
        setFormFields(updatedFields);
    };
    const onAddFormFieldHandler = (type, label) => {
        const fieldId = label.replace(/\s+/g, "_").toLowerCase(); // Generate an id from the label
        const updatedFields = Object.assign(Object.assign({}, formFields), { [fieldId]: {
                type,
                label,
                placeholder: type === "textarea" ? `Type your ${label}...` : label,
                value: "",
            } });
        setFormFields(updatedFields);
    };
    return {
        formElements,
        formData,
        isValidated,
        setFormFields,
        onChangeTextHandler,
        onClearFormHandler,
        onAddFormFieldHandler,
        onSubmitHandler,
        setIsValidated,
    };
};
exports.default = useTFAForm;
