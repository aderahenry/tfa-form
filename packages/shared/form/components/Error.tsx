import React from "react";
import { Text, StyleSheet } from "react-native";

const Error: React.FC<{ error: string }> = ({ error }) => {
  if (!error) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: "#f00",
    marginTop: 5,
  },
});

export default Error;
