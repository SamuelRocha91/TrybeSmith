export type ProductT = {
  id: number,
};

export type Order = {
  id: number,
  userId: number,
  productIds?: ProductT[],
};

export type OrderArray = {
  id: number,
  userId: number,
  productIds?: number[] | undefined
};

export type Ordertwo = {
  dataValues: {
    id: number,
    userId: number,
    productIds?: {
      dataValues: {
        id: number
      }
    }
  },
};
