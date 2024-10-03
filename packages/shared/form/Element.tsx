import React, { Dispatch, SetStateAction } from "react";
import { View, TextInput, Text, StyleSheet, KeyboardType } from "react-native";

import withValidation from "./hoc/withValidation";
import { FormFields } from "./useTFAForm";

export type ElementType = "text" | "email" | "tel" | "textarea";

type Element = {
  setFormFields: Dispatch<SetStateAction<FormFields>>;
  id: string;
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
    <View>
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
    </View>
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
