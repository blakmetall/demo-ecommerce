import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddProductPage } from './pages/addProduct/addProduct.page';
import { ViewProductPage } from './pages/viewProduct/viewProduct.page';
import { CartPage } from './pages/cart/cart.page';
import { HomePage } from './pages/home/home.page';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/add-product" element={<AddProductPage />} />
            <Route exact path="/view-product" element={<ViewProductPage />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};

export default AppRoutes;
