import React from "react";
import { ElementType } from "../Element";
declare const withValidation: (WrappedComponent: React.ComponentType<any>) => (props: {
    type: ElementType;
    value: string;
}) => React.JSX.Element;
export default withValidation;
