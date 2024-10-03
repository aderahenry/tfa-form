import React from "react";
import { ButtonProps } from "react-native";

import {
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const buttonTypes = {
  submit: {
    backgroundColor: "rgb(8, 145, 178)",
    textColor: "#fff",
    label: "Submit",
  },
  clear: {
    backgroundColor: "rgb(8, 145, 178)",
    textColor: "#fff",
    label: "Clear",
  },
  addField: {
    backgroundColor: "#2196F3",
    textColor: "#fff",
    label: "Add Field",
  },
  cancel: {
    backgroundColor: "#FFC107",
    textColor: "#fff",
    label: "Cancel",
  },
};

const Button = ({
  type,
  disabled,
  onPress,
}: Omit<ButtonProps, 'title'> & {
  type: keyof typeof buttonTypes;
}) => {
  const { backgroundColor, label, textColor } =
    buttonTypes[type] || buttonTypes.submit;

  if (type === "addField") {
    return (
      <TouchableOpacity onPress={onPress} accessibilityLabel={`${label} link`} style={styles.link}>
        <Text style={styles.linkText}>{label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#ddd" : backgroundColor,
        },
        { opacity: disabled ? 0.4 : 1 },
        styles.button,
      ]}
      onPress={onPress}
      accessibilityLabel={`${label} button`}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "49.5%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    alignSelf: "flex-end",
  },
  linkText: {
    color: "blue",
    textDecorationLine: "none",
  },
});

export default Button;
