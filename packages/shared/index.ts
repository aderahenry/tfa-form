export const validateNotEmptyAndAcceptable = (value: string) => value.trim().length > 2;
export const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePhone = (phone: string) => /^\+?[0-9]{10,15}$/.test(phone);
export { default as TFAForm } from './form'
