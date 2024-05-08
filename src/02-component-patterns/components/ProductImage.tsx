import { useContext } from 'react'
import { ProductContext } from './ProductCard';
import noImagePng from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductImageProps } from '../interfaces/components-props.interfaces'

// img = '': opcional
export const ProductImage = ({ img = '', className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImagePng;
  }

  return (
    <img className={`${styles.productImg}  ${className}`} src={imgToShow} alt="No image" style={style} />
  )
}