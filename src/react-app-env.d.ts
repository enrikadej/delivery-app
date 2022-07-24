/// <reference types="react-scripts" />

export interface Store {
  id: number,
  storeName: string,
  products: ProductCart[],
}

export interface Product {
  id: number,
  title: string,
  price: number,
  image: string,
}

export interface ProductCart {
  id: number,
  title: string,
  price: number,
  image: string,
  qty: number,
}

export interface Order {
  id: number,
  user: User,
  foodstuff: Product[],
  total: number,
}

export interface User {
  name: string,
  email: string,
  phone: string,
  address: string
}
