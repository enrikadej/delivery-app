import React from 'react';
import { ProductCart } from '../../react-app-env.d';
import './Card.scss';

type Props = {
  product: ProductCart
  actionCart: (order: ProductCart, action: string) => void
};

export const Card:React.FC<Props> = ({ product, actionCart }) => {
  const { image, title, price } = product;

  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card__image"
      />
      <div className="card__description">
        <h3 className="card__title">
          {title}
        </h3>
        <h3 className="card__price">
          {`${price},00 UAH`}
        </h3>
      </div>
      <div className="card__wrap-button">
        <button
          type="button"
          className="card__button-buy"
          onClick={() => actionCart(product, 'add')}
        >
          buy
        </button>
      </div>

    </div>
  );
};
