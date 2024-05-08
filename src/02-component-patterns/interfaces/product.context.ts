import { IProduct } from "./product.model";

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: IProduct;
}
