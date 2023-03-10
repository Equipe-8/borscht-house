import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledBtns, StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/ProductContext/ProductContext';

const CartProductList = () => {
  const { carts, totalPrice, emptyCart } = useContext(CartContext);

  return (
    <StyledCartProductList>
      <ul>
        {carts.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {totalPrice.toFixed(2)}
        </StyledParagraph>
      </div>{' '}
      <StyledBtns>
        <StyledButton
          onClick={() => {
            console.log('Finalizar compras');
          }}
          $buttonSize='default'
          $buttonStyle='green'
        >
          Finalizar compras
        </StyledButton>
        <StyledButton
          onClick={() => {
            emptyCart();
          }}
          $buttonSize='default'
          $buttonStyle='gray'
        >
          Remover todos
        </StyledButton>
      </StyledBtns>
    </StyledCartProductList>
  );
};
export default CartProductList;