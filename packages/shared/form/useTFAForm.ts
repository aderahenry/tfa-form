import { useState, useMemo } from "react";
import { TextInputProps } from "react-native";

export type FormField = TextInputProps & {
  type: "text" | "email" | "tel" | "textarea";
  label: string;
  placeholder: string;
  value: string;
};

export type FormFields = {
  name: FormField;
  email: FormField;
  phone: FormField;
  message: FormField;
  [key: string]: FormField;
};

const useTFAForm = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    name: {
      type: "text",
      label: "Your name",
      placeholder: "Name",
      value: "",
    },
    email: {
      type: "email",
      label: "Your email",
      placeholder: "Email",
      value: "",
    },
    phone: {
      type: "tel",
      label: "Your phone number",
      placeholder: "Phone",
      value: "",
    },
    message: {
      type: "textarea",
      label: "Your message",
      placeholder: "Type message...",
      value: "",
    },
  });
  const [isValidated, setIsValidated] = useState(false);

  const formElements = useMemo(() => {
    const elements: (FormField & { id: string })[] = [];
  
    for (let key in formFields) {
      const { value, type, placeholder, label } = formFields[key];
      const fieldKey = key as keyof FormFields;
  
      elements.push({
        id: fieldKey as string,
        type,
        placeholder,
        value,
        label,
      });
    }
  
    return elements;
  }, [formFields]);

  // Final form data to be submitted
  const formData: Record<string, string> = {};

  for (let key in formFields) {
    const { value } = formFields[key]
    const fieldKey = key as keyof FormFields;

    if (value.length > 0) {
      formData[fieldKey] = value;
    }
  }

  const onChangeTextHandler = (value: string, id: keyof typeof formFields) => {
    const updatedFields = { ...formFields };
    updatedFields[id].value = value;

    setFormFields(updatedFields);
  };

  const onSubmitHandler = () => {
    const allFieldsFilled =
      Object.keys(formData).length === Object.keys(formFields).length;

    if (allFieldsFilled) {
      setIsValidated(true);
    } else {
      console.error("Validation failed: Some fields are empty.");
    }
  };

  const onClearFormHandler = () => {
    const updatedFields = { ...formFields };
    for (let key in updatedFields) {
      const fieldKey = key as keyof typeof formFields;
      updatedFields[fieldKey].value = "";
    }
    setFormFields(updatedFields);
  };

  const onAddFormFieldHandler = (type: "text" | "textarea", label: string) => {
    const fieldId = label.replace(/\s+/g, "_").toLowerCase(); // Generate an id from the label
    const updatedFields = {
      ...formFields,
      [fieldId]: {
        type,
        label,
        placeholder: type === "textarea" ? `Type your ${label}...` : label,
        value: "",
      },
    };
    setFormFields(updatedFields);
  };

  return {
    formElements,
    formData,
    isValidated,
    setFormFields,
    onChangeTextHandler,
    onClearFormHandler,
    onAddFormFieldHandler,
    onSubmitHandler,
    setIsValidated,
  };
};

export default useTFAForm;
