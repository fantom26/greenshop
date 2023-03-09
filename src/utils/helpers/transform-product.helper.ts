import { ICartItem, IProduct } from "@declarations";

export const transformProduct = (product: IProduct): ICartItem => ({
  poster: product?.poster,
  price: product?.price,
  quantity: 1,
  sku: product?.sku,
  _id: product?._id
});
