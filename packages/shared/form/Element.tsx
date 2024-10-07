import React from "react";
import { TextInput, Text, StyleSheet, KeyboardType } from "react-native";

import withValidation from "./hoc/withValidation";

export type ElementType = "text" | "email" | "tel" | "textarea";

export type Element = {
  type: ElementType;
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (event: string) => void;
};

const Element: React.FC<Element> = ({
  type,
  label,
  placeholder,
  value,
  onChangeText,
}) => {
  let keyboardType: KeyboardType = "default"

  switch (type) {
    case 'email':
      keyboardType = 'email-address'
      break;
    case 'tel':
      keyboardType = 'phone-pad'
      break;
    default:
      keyboardType = 'default'
  }

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={type === "textarea"}
        accessibilityLabel={`${label} input field`}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default withValidation(Element);
