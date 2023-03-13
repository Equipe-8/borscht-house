import { useContext } from 'react';
import { toast } from 'react-toastify';
import CartProductCard from './CartProductCard';
import { StyledBtns, StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/ProductContext/ProductContext';

const CartProductList = () => {
  const { carts, totalPrice, emptyCart, setShowModal } =
    useContext(CartContext);

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
            setShowModal(false);
            toast.success('Compra finalizada com sucesso!');
          }}
          $buttonSize='default'
          $buttonStyle='green'
        >
          Finalizar compras
        </StyledButton>
        <StyledButton
          onClick={() => {
            emptyCart();
            setShowModal(false);
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
