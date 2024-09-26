import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import FormDialog from "./FieldDialog";
import SubmitAlert from "./Alert";
import Buttons from "./Buttons";
import useTFAForm from "./useTFAForm";
import Element from "./Element";

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
              onChangeText={(value) => onChangeTextHandler(value, element.id!)}
              setFormFields={setFormFields}
            />
          </View>
        ))}
        <Buttons
          formData={formData}
          clearForm={onClearFormHandler}
          setValidated={setIsValidated}
          setIsDialogVisible={setIsDialogVisible}
          onSubmitHandler={onSubmitHandler}
        />
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
    alignSelf: "center", // Ensure the buttons span the width of the container
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center"
  },
});

export default TFAForm;
