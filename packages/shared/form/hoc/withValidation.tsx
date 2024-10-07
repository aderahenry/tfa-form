import React, { useState, useEffect } from "react";

import { Element } from "../Element";
import { validateEmail, validatePhone } from "../..";
import { Error } from "../components";

const withValidation = (WrappedComponent: React.FunctionComponent<any>) => {
  return (props: Element) => {
    const [error, setError] = useState("");
    const { type, value } = props;

    useEffect(() => {
      if (!value.trim()) {
        setError("This field is required");
      } else if (type === "email" && !validateEmail(value)) {
        setError("Invalid email address");
      } else if (type === "tel" && !validatePhone(value)) {
        setError("Invalid phone number");
      } else {
        setError("");
      }
    }, [value, type]);

    return (
      <>
        <WrappedComponent {...props} />
        <Error error={error} />
      </>
    );
  };
};

export default withValidation;
