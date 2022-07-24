/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { getStores } from '../../api/api';
import { ProductCart, Store } from '../../react-app-env.d';
import { Card } from '../Card';
import './Shop.scss';

type Props = {
  actionCart: (order: ProductCart, action: string) => void
};

export const Shop:React.FC<Props> = ({ actionCart }) => {
  const [stores, setStores] = useState<Store[]>([]);
  const [products, setProducts] = useState<ProductCart[]>([]);

  useEffect(() => {
    getStores()
      .then(response => setStores(response));
  }, []);

  return (
    <div className="shop">
      <div className="shop__list">
        {stores.map(store => (
          <button
            key={store.id}
            type="button"
            className="shop__item store"
            onClick={() => {
              setProducts(store.products);
              console.log(store.products);
            }}
          >
            {store.storeName}
          </button>
        ))}
      </div>
      <div className="shop__products products">
        {products.map(product => (
          <div key={product.id}>
            <Card
              product={product}
              actionCart={actionCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
