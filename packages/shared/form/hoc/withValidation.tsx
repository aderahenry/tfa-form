import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { ElementType } from "../Element";
import { validateEmail, validatePhone } from "../..";

const withValidation = (WrappedComponent: React.ComponentType<any>) => {
  return (props: { type: ElementType; value: string }) => {
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
        {error && <Text style={styles.errorText}>{error}</Text>}
      </>
    );
  };
};

const styles = StyleSheet.create({
  errorText: {
    color: "#f00",
    marginTop: 5,
  },
  invalidInput: {
    borderColor: "#f00",
  },
});

export default withValidation;
