import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
// import { ButtonIncrease, ProductImage, ProductTitle } from './'
import styles from '../styles/styles.module.css';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// interface IButtonIncrease {
//   counter: number;
//   incrisedBy: (value: number) => void;
// }

export const ProductCard = ({ children, product }: ProductCardProps) => {
  // const [counter, setCounter] = useState(0);

  // const incrisedBy = (value: number) => setCounter(prev => Math.max(prev + value, 0))

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Button = ButtonIncrease;