import { AiOutlineMinusCircle } from 'react-icons/ai';

import { useContext } from 'react';

import {
  StyledCartProductCard,
  StyledCounterBtn,
  StyledCounterDiv,
} from './style';
import { IPropsProductCart } from './interfaces';
import { StyledPriceP, StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/ProductContext';

const CartProductCard = ({ product }: IPropsProductCart) => {
  const { removeProductFromCart } = useContext(CartContext);

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
              onClick={() => console.log('menos')}
            >
              -
            </StyledCounterBtn>
            <span>{product.count}Qt</span>
            <StyledCounterBtn type='button' onClick={() => console.log('mais')}>
              +
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
