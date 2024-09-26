import React from "react";
type FormDialogProps = {
    visible: boolean;
    onClose: () => void;
    onSubmit: (type: string, label: string) => void;
};
declare const FormDialog: ({ visible, onClose, onSubmit }: FormDialogProps) => React.JSX.Element;
export default FormDialog;
