import React from "react";
import { ButtonProps } from "react-native";
declare const buttonTypes: {
    submit: {
        backgroundColor: string;
        textColor: string;
        label: string;
    };
    clear: {
        backgroundColor: string;
        textColor: string;
        label: string;
    };
    addField: {
        backgroundColor: string;
        textColor: string;
        label: string;
    };
    cancel: {
        backgroundColor: string;
        textColor: string;
        label: string;
    };
};
declare const Button: ({ type, disabled, onPress, }: Omit<ButtonProps, "title"> & {
    type: keyof typeof buttonTypes;
}) => React.JSX.Element;
export default Button;
