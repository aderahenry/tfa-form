import React from "react";
import { Element } from "../Element";
declare const withValidation: (WrappedComponent: React.FunctionComponent<any>) => (props: Element) => React.JSX.Element;
export default withValidation;
