import { IFile } from "./file.types";
import { IReview } from "./review.types";
import { TSize } from "./size.types";

export interface IProductBase {
  _id: string;
  poster: IFile;
  price: number;
  name: string;
  discountPercentage: number;
  sku: string;
}

export interface IProduct extends IProductBase {
  relatedImages: IFile[];
  desc: string[];
  size: TSize;
  category: string;
  tags: string[];
  stars: number;
  reviews: IReview[];
}

export interface IProductSearchOption extends IProductBase {
  value: string;
  label: string;
}
