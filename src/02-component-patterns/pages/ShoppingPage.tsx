import { ProductCard, ProductImage, ProductTitle, ButtonIncrease } from '../components';
import '../styles/custom-style.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Component Pattern',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={ product } className='bg-dark'>
          <ProductImage className='custom-image'/>
          <ProductTitle className='text-white'  />
          <ButtonIncrease className='custom-button'/>
        </ProductCard>

        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title='hola' />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle />
          <ButtonIncrease style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
      
    </div>
  )
}
