import React from "react";
type P = {
    formData: {};
    clearForm: () => void;
    setValidated: (v: boolean) => void;
    setIsDialogVisible: (v: boolean) => void;
    onSubmitHandler: () => void;
};
declare const Buttons: ({ formData, clearForm, setValidated, setIsDialogVisible, onSubmitHandler, }: P) => React.JSX.Element;
export default Buttons;
