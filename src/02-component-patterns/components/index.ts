import { ProductCard as ProductCardHoc } from './ProductCard';

import { ButtonIncrease } from './ButtonIncrease';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

import { ProductCardHOCProps } from '../interfaces/components-props.interfaces';

export { ButtonIncrease } from './ButtonIncrease';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHoc, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ButtonIncrease
});