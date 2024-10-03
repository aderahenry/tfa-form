import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import FormDialog from "./FieldDialog";
import SubmitAlert from "./Alert";
import useTFAForm from "./useTFAForm";
import Element from "./Element";
import { Button } from "./components";

const TFAForm = () => {
  const {
    formElements,
    formData,
    isValidated,
    onChangeTextHandler,
    setFormFields,
    onClearFormHandler,
    onAddFormFieldHandler,
    setIsValidated,
    onSubmitHandler,
  } = useTFAForm();
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

  const onClearButtonPressHandler = () => {
    onClearFormHandler()
    setIsValidated(false)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.formTitle}>TFA Form</Text>
        <SubmitAlert validated={isValidated} />
        {formElements.map((element) => (
          <View key={element.id} style={{ marginBottom: 15 }}>
            <Element
              key={element.id}
              {...element}
              //@ts-ignore
              onChangeText={(value: string) => onChangeTextHandler(value, element.id!)}
              setFormFields={setFormFields}
            />
          </View>
        ))}
        <Button type="addField" onPress={() => setIsDialogVisible(true)} />
        <View style={styles.outerButtonContainer}>
          <View style={styles.innerButtonContainer}>
            <Button type="submit" onPress={onSubmitHandler} />
            <Button type="clear" onPress={onClearButtonPressHandler} disabled={Object.keys(formData).length === 0} />
          </View>
        </View>
      </View>
      {/* {JSON.stringify(formData)} */}
      <FormDialog
        visible={isDialogVisible}
        onClose={() => setIsDialogVisible(false)}
        //@ts-ignore
        onSubmit={onAddFormFieldHandler}
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
    alignSelf: "center"
  },
  outerButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  innerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
});

export default TFAForm;
