export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};

export type ProductArray = {
  dataValues: {
    id: number;
    name: string;
    price: string;
    orderId: number;
  }
};
