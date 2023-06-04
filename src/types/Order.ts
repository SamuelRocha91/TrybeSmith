export type Id = {
  dataValues: {
    id: number,
  }
};

export type Order = {
  id: number;
  userId: number;
  productIds?: number[];
};

export type OrderArray = {
  dataValues: {
    id: number,
    userId: number,
    productIds?: number[] | undefined
  },
};
