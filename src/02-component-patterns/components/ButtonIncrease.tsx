import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css';
import { ButtonIncreaseProps } from '../interfaces/components-props.interfaces';

export const ButtonIncrease = ({ className, style }: ButtonIncreaseProps) => {
  const { increaseBy, counter } = useContext(ProductContext)
  
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        onClick={() => increaseBy(-1)}
        className={styles.buttonMinus}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(+1)}
        className={styles.buttonAdd}
      > + </button>
    </div>
  )
}
