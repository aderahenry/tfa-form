import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type FormDialogProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (type: string, label: string) => void;
};

const FormDialog = ({ visible, onClose, onSubmit }: FormDialogProps) => {
  const [fieldType, setFieldType] = useState<"input" | "textarea" | null>(null);
  const [fieldLabel, setFieldLabel] = useState<string>("");

  const handleFormSubmit = () => {
    if (fieldType && fieldLabel) {
      onSubmit(fieldType, fieldLabel);
      setFieldType(null);
      setFieldLabel("");
    }
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.dialogContainer}>
          <Text style={styles.dialogTitle}>Select Field Type</Text>

          {/* Custom Radio Buttons */}
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setFieldType("input")}
          >
            <View style={styles.radioCircle}>
              {fieldType === "input" && <View style={styles.selectedCircle} />}
            </View>
            <Text style={styles.radioLabel}>Short Text</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setFieldType("textarea")}
          >
            <View style={styles.radioCircle}>
              {fieldType === "textarea" && <View style={styles.selectedCircle} />}
            </View>
            <Text style={styles.radioLabel}>Long Text</Text>
          </TouchableOpacity>

          <Text style={styles.dialogTitle}>Field Label</Text>
          <TextInput
            value={fieldLabel}
            onChangeText={setFieldLabel}
            style={styles.textInput}
            placeholder="Enter field label"
            autoCapitalize="words"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton]}
              onPress={handleFormSubmit}
              disabled={!fieldType || !fieldLabel}
            >
              <Text style={styles.submitButtonText}>Add Field</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dialogContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  dialogTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgb(33, 150, 243)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "rgb(33, 150, 243)",
  },
  radioLabel: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
  },
  submitButton: {
    backgroundColor: "rgb(33, 150, 243)",
  },
  submitButtonText: {
    color: "#fff",
  },
});

export default FormDialog;
