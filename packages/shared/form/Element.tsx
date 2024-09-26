import React, { Dispatch, SetStateAction } from "react";
import { View, TextInput, Text, StyleSheet, KeyboardType } from "react-native";

import { FormFields } from "./useTFAForm";

type ElementType = {
  setFormFields: Dispatch<SetStateAction<FormFields>>;
  id: string;
  type: "text" | "email" | "tel" | "textarea";
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (event: string) => void;
  isValid?: boolean;
};

const Element: React.FC<ElementType> = ({
  id,
  type,
  label,
  placeholder,
  value,
  onChangeText,
  isValid,
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
        style={[
          styles.input,
          !isValid ? styles.invalidInput : styles.validInput,
        ]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={type === "textarea"}
      />
      {!isValid && (
        <Text style={styles.errorText}>{`Invalid ${id}`}</Text>
      )}
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
  invalidInput: {
    borderColor: "#f00",
  },
  validInput: {
    borderColor: "#ccc",
  },
  errorText: {
    color: "#f00",
    fontSize: 12,
    marginTop: 5,
  },
});

export default Element;
