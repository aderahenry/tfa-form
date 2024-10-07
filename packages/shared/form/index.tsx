import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import FieldDialog from "./components/FieldDialog";
import SubmitAlert from "./components/Alert";
import useTFAForm from "./useTFAForm";
import Element from "./Element";
import { Button } from "./components";

const TFAForm = () => {
  const {
    formElements,
    formData,
    isValidated,
    onChangeTextHandler,
    onClearFormHandler,
    onAddFormFieldHandler,
    setIsValidated,
    onSubmitHandler,
  } = useTFAForm();
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

  const onClearButtonPressHandler = () => {
    onClearFormHandler();
    setIsValidated(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.formTitle}>TFA Form</Text>
        <SubmitAlert validated={isValidated} />
        {formElements.map((element) => (
          <View key={element.id!} style={{ marginBottom: 15 }}>
            <Element
              key={element.id!} // Non-null assertion assuming id is required
              {...element}
              onChangeText={value => onChangeTextHandler(value, element.id!)}
            />
          </View>
        ))}
        <Button type="addField" onPress={() => setIsDialogVisible(true)} />
        <View style={styles.outerButtonContainer}>
          <View style={styles.innerButtonContainer}>
            <Button type="submit" onPress={onSubmitHandler} />
            <Button
              type="clear"
              onPress={onClearButtonPressHandler}
              disabled={Object.keys(formData).length === 0}
            />
          </View>
        </View>
      </View>
      <FieldDialog
        visible={isDialogVisible}
        onClose={() => setIsDialogVisible(false)}
        onSubmit={(type: "text" | "textarea", label: string) => {
          // Ensure you're using "text" instead of "input"
          onAddFormFieldHandler(type, label);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  outerButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  innerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
});

export default TFAForm;
