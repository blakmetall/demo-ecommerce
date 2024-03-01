import { number, string } from 'yup';

export const nameValidations = string()
  .required('Name is required')
  .min(3, () => 'Minimun name lenght is 3 characters');

export const descriptionValidations = string()
  .required('Description is required');

export const priceValidations = number()
  .typeError('Price must be a valid number')
  .required('Price is required');