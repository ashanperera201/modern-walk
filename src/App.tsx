import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'

import AppBar from './shared/components/AppBar';
import Home from './pages/Home';
import MensClothing from './pages/MensClothing';
import WomenClothing from './pages/WomenClothing';
import { addProducts } from './redux/slices/product.slice';
import { productList } from './shared/services/products.service';


const App = (): JSX.Element => {

  const dispatch = useDispatch();

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async (): Promise<void> => {
    const products = await productList();
    dispatch(addProducts(products));
  }

  return (
    <>
      <div className="bg-stone-200 h-screen overflow-auto">
        <BrowserRouter>
          <AppBar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/mens-clothing" Component={MensClothing} />
            <Route path="/womens-clothing" Component={WomenClothing} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
