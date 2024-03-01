import { descriptionValidations, nameValidations, priceValidations } from '../validations.ts';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const addProductValidation = object()
  .shape({
    id: string(),
    description: descriptionValidations,
    name: nameValidations,
    price: priceValidations,
  })
  .required();

export const addProductValidationSchema = yupResolver(addProductValidation);