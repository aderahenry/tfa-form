import React from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";

type P = {
  formData: {};
  clearForm: () => void;
  setValidated: (v: boolean) => void;
  setIsDialogVisible: (v: boolean) => void;
  onSubmitHandler: () => void;
};

const Buttons = ({
  formData,
  clearForm,
  setValidated,
  setIsDialogVisible,
  onSubmitHandler,
}: P) => {
  const onClearButtonPressHandler = () => {
    clearForm();
    setValidated(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setIsDialogVisible(true)}>
        <Text style={styles.link}>Add a field</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="Submit" onPress={onSubmitHandler} />
        </View>
        <View style={styles.button}>
          <Button
            title="Clear"
            onPress={onClearButtonPressHandler}
            disabled={Object.keys(formData).length === 0}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Arrange buttons in a row
    alignItems: "center", // Align buttons to the center vertically
    marginTop: 5, // Add top margin if needed
    paddingVertical: 10,
  },
  button: {
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
  link: {
    color: "blue", // Link color
    textDecorationLine: "none", // Underline the text
    textAlign: "right", // Ensure consistent spacing with other buttons
  },
});

export default Buttons;
