/// <reference types="react" />
import { TextInputProps } from "react-native";
export type FormField = TextInputProps & {
    type: "text" | "email" | "tel" | "textarea";
    label: string;
    placeholder: string;
    value: string;
};
export type FormFields = {
    name: FormField;
    email: FormField;
    phone: FormField;
    message: FormField;
    [key: string]: FormField;
};
declare const useTFAForm: () => {
    formElements: (TextInputProps & {
        type: "text" | "email" | "tel" | "textarea";
        label: string;
        placeholder: string;
        value: string;
    } & {
        id: string;
    })[];
    formData: Record<string, string>;
    isValidated: boolean;
    setFormFields: import("react").Dispatch<import("react").SetStateAction<FormFields>>;
    onChangeTextHandler: (value: string, id: keyof FormFields) => void;
    onClearFormHandler: () => void;
    onAddFormFieldHandler: (type: "text" | "textarea", label: string) => void;
    onSubmitHandler: () => void;
    setIsValidated: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export default useTFAForm;
