import { IProduct } from "@declarations";

import { $api } from "./axios.service";

export class ProductService {
  static async getAll(params: any) {
    return $api.get<IProduct[]>("/products", { params }).then((response) => response.data);
  }
}
