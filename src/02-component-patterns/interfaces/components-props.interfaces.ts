import { ReactElement } from "react";
import { IProduct } from "./product.model";

// props de components
export interface ProductCardProps {
  product: IProduct;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

export interface ButtonIncreaseProps {
  className?: string;
  style?: React.CSSProperties;
}

/*
  <ProductCard product={ product }>
    <ProductCard.Image />
    <ProductCard.Title title='hola' />
    <ProductCard.Buttons />
  </ProductCard>
*/

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ( Props: ProductTitleProps ) => JSX.Element;
  Image: ( Props: ProductImageProps ) => JSX.Element;
  Buttons: ( Props: ButtonIncreaseProps ) => JSX.Element;
}