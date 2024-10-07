import React from "react";
type FormDialogProps = {
    visible: boolean;
    onClose: () => void;
    onSubmit: (type: "text" | "textarea", label: string) => void;
};
declare const FieldDialog: ({ visible, onClose, onSubmit }: FormDialogProps) => React.JSX.Element;
export default FieldDialog;
