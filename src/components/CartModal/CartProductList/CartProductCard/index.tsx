import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { Remove, Add } from '@mui/icons-material';
import {
  StyledCartProductCard,
  StyledCounterBtn,
  StyledCounterDiv,
} from './style';
import { IPropsProductCart } from './interfaces';
import { StyledPriceP, StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/ProductContext/ProductContext';

const CartProductCard = ({ product }: IPropsProductCart) => {
  console.log(product);
  const {
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useContext(CartContext);

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
          <StyledPriceP> R$ {product.price.toFixed(2)}</StyledPriceP>
          <StyledCounterDiv>
            <StyledCounterBtn
              type='button'
              onClick={() => decreaseProductQuantity(product)}
            >
              <Remove />
            </StyledCounterBtn>
            <span>{product.count}</span>
            <StyledCounterBtn
              type='button'
              onClick={() => increaseProductQuantity(product)}
            >
              <Add />
            </StyledCounterBtn>
          </StyledCounterDiv>
        </StyledTitle>

        <button
          onClick={() => removeProductFromCart(product.id)}
          type='button'
          aria-label='Remover'
        >
          <AiOutlineMinusCircle size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
