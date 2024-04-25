import { ReactElement } from "react";

export interface ProductCardProps {
  product: IProduct;
  children?: ReactElement | ReactElement[]
}

export interface IProduct {
  id: string;
  title: string;
  img?: string;
};

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: IProduct;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string; }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined; }) => JSX.Element;
  Buttons: () => JSX.Element;
}