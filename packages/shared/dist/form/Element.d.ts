import React from "react";
export type ElementType = "text" | "email" | "tel" | "textarea";
export type Element = {
    type: ElementType;
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (event: string) => void;
};
declare const _default: (props: Element) => React.JSX.Element;
export default _default;
