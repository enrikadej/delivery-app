/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { ProductCart } from '../../react-app-env.d';
import './ShoppingCart.scss';
import { postOrder } from '../../api/api';
import { AcceptedOrder } from '../AcceptedOrder';

type Props = {
  cart: ProductCart[],
  actionCart: (order: ProductCart, action: string) => void
};

interface MyFormValues {
  name: string,
  email: string,
  phone: string,
  address: string,
}

export const ShoppingCart:React.FC<Props> = ({ cart, actionCart }) => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const initialValues: MyFormValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };

  const addingOrder = async (value: MyFormValues) => {
    const packOrder = {
      id: count,
      user: {
        name: value.name,
        email: value.email,
        phone: value.phone,
        address: value.address,
      },
      foodstuff: cart,
      total,
    };

    // eslint-disable-next-line no-console
    console.log(packOrder);

    if (packOrder.foodstuff) {
      await postOrder(packOrder);
    }

    setCount(count + 1);
    setTotal(0);
    actionCart(cart[0], 'empty');
  };

  useEffect(() => {
    const result = cart.reduce((acc, prod) => {
      return acc + (prod.qty * prod.price);
    }, 0);

    setTotal(result);
  }, [cart]);

  const fields = ['name', 'email', 'phone', 'address'];

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          // eslint-disable-next-line no-console
          console.log({ values, actions });

          if (cart.length > 0) {
            addingOrder(values);
            setModalActive(true);
            setError(false);
          } else {
            setError(true);
          }

          actions.resetForm();
        }}
      >
        <Form className="cart">
          <div className="cart__info">

            {fields.map(field => (
              <div className="cart__form-field" key={field}>
                <label htmlFor={field}>
                  {`Your ${field}`}
                  <br />
                  <Field
                    id={field}
                    name={field}
                    className="cart__input"
                    required
                  />
                </label>
              </div>
            ))}

            <div>
              <h3 className="cart__total">
                {`Total: ${total} UAH`}
              </h3>

              {error && (
                <p className="cart__error">
                  Your cart is empty!
                </p>
              )}

              <div className="cart__wrap-button">
                <button
                  type="submit"
                  className="cart__submit-button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="cart__orders orders">
            {cart.map(product => (
              <div className="cart__cardInCart cardInCart" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="cardInCart__image"
                />
                <div className="cardInCart__description">
                  <h3 className="cardInCart__title">
                    {product.title}
                  </h3>
                  <h3 className="cardInCart__price">
                    {`${product.price},00 UAH`}
                  </h3>

                  <div className="cardInCart__qty qty">
                    <div className="qty__count">
                      <button
                        type="button"
                        className="qty__decrease"
                        onClick={() => actionCart(product, 'subtract')}
                        disabled={product.qty === 1}
                      >
                        -
                      </button>
                      <Field
                        type="number"
                        min="1"
                        max="100"
                        value={product.qty}
                        className="qty__input"
                        redonly
                      />
                      <button
                        type="button"
                        onClick={() => actionCart(product, 'add')}
                        className="qty__increase"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="qty__delete"
                      onClick={() => actionCart(product, 'delete')}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Form>
      </Formik>
      {modalActive && (
        <AcceptedOrder modalActive={modalActive} setModalActive={setModalActive} />
      )}
    </div>
  );
};
