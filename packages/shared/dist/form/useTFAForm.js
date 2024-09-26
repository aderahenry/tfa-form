"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const __1 = require("../");
const useTFAForm = () => {
    const [formFields, setFormFields] = (0, react_1.useState)({
        name: {
            type: "text",
            label: "Your name",
            placeholder: "Name",
            value: "",
            isValid: true,
        },
        email: {
            type: "email",
            label: "Your email",
            placeholder: "Email",
            value: "",
            isValid: true,
        },
        phone: {
            type: "tel",
            label: "Your phone number",
            placeholder: "Phone",
            value: "",
            isValid: true,
        },
        message: {
            type: "textarea",
            label: "Your message",
            placeholder: "Type message...",
            value: "",
            isValid: true,
        },
    });
    const [isValidated, setIsValidated] = (0, react_1.useState)(false);
    const formElements = (0, react_1.useMemo)(() => {
        // Ensure the formElements are calculated based on the current formFields state
        const elements = [];
        // Iterate over the formFields
        for (let key in formFields) {
            const { value, type, placeholder, label, isValid } = formFields[key];
            const fieldKey = key;
            // Push elements only once without duplication
            elements.push({
                //@ts-ignore
                id: fieldKey,
                type,
                placeholder,
                value,
                label,
                isValid,
            });
        }
        return elements; // Return fresh form elements on each render
    }, [formFields]);
    // Final form data to be submitted
    const formData = {};
    for (let key in formFields) {
        const { value, type, placeholder, label } = formFields[key];
        const fieldKey = key;
        if (value.length > 0) {
            formData[fieldKey] = value;
        }
    }
    const onChangeTextHandler = (value, id) => {
        const updatedFields = Object.assign({}, formFields);
        const { type } = updatedFields[id];
        updatedFields[id].value = value;
        if (type === 'email') {
            updatedFields[id].isValid = (0, __1.validateEmail)(value);
        }
        else if (type === 'tel') {
            updatedFields[id].isValid = (0, __1.validatePhone)(value);
        }
        else if (type === 'text' || type === 'textarea') {
            updatedFields[id].isValid = (0, __1.validateNotEmptyAndAcceptable)(value);
        }
        setFormFields(updatedFields);
    };
    const onSubmitHandler = () => {
        // Here we can add validation logic
        const allFieldsFilled = Object.keys(formData).length === Object.keys(formFields).length;
        // setFormValidated(allFieldsFilled);
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
                isValid: true,
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
