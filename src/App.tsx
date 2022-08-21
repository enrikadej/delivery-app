/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import {
  NavLink, Routes, Route, Navigate,
} from 'react-router-dom';

import { Shop } from './components/Shop';
import { ShoppingCart } from './components/ShoppingCart';
import { NotFoundPage } from './components/NotFoundPage';
import { ProductCart } from './react-app-env.d';

export const App: React.FC = () => {
  const [shoppingCart, setShoppingCart] = useState<ProductCart[]>([]);

  const actionCart = (order: ProductCart, action: string) => {
    const exist = shoppingCart.find(item => item.id === order.id);

    switch (action) {
      case 'add':
        console.log('add product!');
        console.log('exist', exist);
        if (exist) {
          console.log('add product2');
          setShoppingCart(
            shoppingCart.map((item) => (
              item.id === order.id ? { ...exist, qty: exist.qty + 1 } : item
            )),
          );
        } else {
          console.log('product added');
          setShoppingCart([...shoppingCart, { ...order, qty: +1 }]);
        }

        break;

      case 'subtract':
        if (exist) {
          setShoppingCart(
            shoppingCart.map((item) => (
              item.id === order.id ? { ...exist, qty: exist.qty - 1 } : item
            )),
          );
        } else {
          setShoppingCart([...shoppingCart, { ...order, qty: -1 }]);
        }

        break;

      case 'delete':
        if (exist) {
          const index = shoppingCart.indexOf(exist);
          const temp = [...shoppingCart];

          temp.splice(index, 1);
          setShoppingCart(temp);
        }

        break;

      case 'empty':
        setShoppingCart([]);

        break;

      default:
    }
  };

  return (
    <div className="App">
      <div className="App__tabs">
        <NavLink
          to="/shop"
          className={isActive => `App__button ${isActive ? 'activeLink' : undefined}`}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={isActive => `App__button ${isActive ? 'activeLink' : undefined}`}
        >
          Shopping Cart
        </NavLink>
      </div>

      <Routes>
        <Route path="/shop" element={<Shop actionCart={actionCart} />} />
        <Route path="/" element={<Navigate to="/shop" />} />

        <Route
          path="/cart"
          element={
            <ShoppingCart cart={shoppingCart} actionCart={actionCart} />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
