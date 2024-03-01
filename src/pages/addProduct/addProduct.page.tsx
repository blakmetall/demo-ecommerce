import { FormProvider, useForm } from 'react-hook-form';
import { addProduct } from '../../store/slices/products.slice.ts';
import { Button } from 'react-rainbow-components';
import { Input } from '../../components/input/input.component.tsx';
import { Title } from '../../components/title/title.component.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

export const AddProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { nextId } = useProductsViewModel();

  const methods = useForm({
    defaultValues: {
      description: '',
      id: '',
      name: '',
      price: 0,
    },
    mode: 'all',
    values: {},
  });

  const { control, getValues, handleSubmit } = methods;
  
  const handleOnSubmit = () => {
    const values = getValues();
    const { price } = values;

    const newProduct = {
      ...values,
      id: nextId, 
      photo: 'https://picsum.photos/600/400',
      price: Number(price),
    };
    
    dispatch(addProduct(newProduct));
    navigate('/');
  };

  return (
    <div>
      <Title label='Add Product' />

      <FormProvider {...methods}>
        <Input
          control={control}
          isRequired={true}
          label='Name'
          name='name'
        />

        <Input
          control={control}
          isRequired={true}
          label='Description'
          name='description'
        />

        <Input
          control={control}
          isRequired={true}
          label='Price'
          name='price'
        />

        <Button 
          label='Save' 
          onClick={handleSubmit(handleOnSubmit)} 
        />
      </FormProvider>
    </div>
  );
};