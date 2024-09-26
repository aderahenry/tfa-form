import React, { Dispatch, SetStateAction } from "react";
import { FormFields } from "./useTFAForm";
type ElementType = {
    setFormFields: Dispatch<SetStateAction<FormFields>>;
    id: string;
    type: "text" | "email" | "tel" | "textarea";
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (event: string) => void;
    isValid?: boolean;
};
declare const Element: React.FC<ElementType>;
export default Element;
