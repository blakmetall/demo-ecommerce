import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

export const HomePage = () => {
  const { products } = useProductsViewModel();

  return (
    <div>
      {products ? products.map(product => <div>Hello</div>) : null}
    </div>
  )
};