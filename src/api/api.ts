import { Order } from '../react-app-env.d';

// const URL = 'http://localhost:3001';
const URL = 'https://delivery-server-app.herokuapp.com/api';

export const getStores = async () => {
  const response = await fetch(`${URL}/shops`);

  return response.json();
};

export const postOrder = async (order: Order): Promise<Order[]> => {
  const response = await fetch(`${URL}/orders`, {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const addedOrder = await response.json();

  return addedOrder;
};
