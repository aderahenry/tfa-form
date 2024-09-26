import { useState, useMemo } from "react";
import { TextInputProps } from "react-native";
import { validateEmail, validateNotEmptyAndAcceptable, validatePhone } from "../";

export type FormField = TextInputProps & {
  type: "text" | "email" | "tel" | "textarea";
  label: string;
  placeholder: string;
  value: string;
  isValid: boolean;
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
      isValid: true,
    },
    email: {
      type: "email",
      label: "Your email",
      placeholder: "Email",
      value: "",
      isValid: true,
    },
    phone: {
      type: "tel",
      label: "Your phone number",
      placeholder: "Phone",
      value: "",
      isValid: true,
    },
    message: {
      type: "textarea",
      label: "Your message",
      placeholder: "Type message...",
      value: "",
      isValid: true,
    },
  });
  const [isValidated, setIsValidated] = useState(false);

  const formElements = useMemo(() => {
    // Ensure the formElements are calculated based on the current formFields state
    const elements: (FormField & { id: string })[] = [];
  
    // Iterate over the formFields
    for (let key in formFields) {
      const { value, type, placeholder, label, isValid } = formFields[key];
      const fieldKey = key as keyof FormFields;
  
      // Push elements only once without duplication
      elements.push({
        //@ts-ignore
        id: fieldKey,
        type,
        placeholder,
        value,
        label,
        isValid,
      });
    }
  
    return elements; // Return fresh form elements on each render
  }, [formFields]);

  // Final form data to be submitted
  const formData: Record<string, string> = {};

  for (let key in formFields) {
    const { value, type, placeholder, label } = formFields[key]
    const fieldKey = key as keyof FormFields;

    if (value.length > 0) {
      formData[fieldKey] = value;
    }
  }

  const onChangeTextHandler = (value: string, id: keyof typeof formFields) => {
    const updatedFields = { ...formFields };
    const { type } = updatedFields[id]
    updatedFields[id].value = value;

    if (type === 'email') {
      updatedFields[id].isValid = validateEmail(value);
    } else if (type === 'tel') {
      updatedFields[id].isValid = validatePhone(value);
    } else if (type === 'text' || type === 'textarea') {
      updatedFields[id].isValid = validateNotEmptyAndAcceptable(value);
    }

    setFormFields(updatedFields);
  };

  const onSubmitHandler = () => {
    // Here we can add validation logic
    const allFieldsFilled =
      Object.keys(formData).length === Object.keys(formFields).length;
    // setFormValidated(allFieldsFilled);
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
        isValid: true,
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
