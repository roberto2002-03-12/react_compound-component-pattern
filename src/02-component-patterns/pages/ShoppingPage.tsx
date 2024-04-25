import { ProductCard, ProductImage, ProductTitle, ButtonIncrease } from '../components';

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
        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle  />
          <ButtonIncrease />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title='hola' />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
      
    </div>
  )
}
