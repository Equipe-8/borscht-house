import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { CartContext } from '../../providers/ProductContext/ProductContext';

const CartModal = () => {
  const { setShowModal, carts } = useContext(CartContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {
              setShowModal(false);
            }}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          {carts.length ? (
            <CartProductList />
          ) : (
            <div className='emptyBox'>
              <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                Sua sacola está vazia
              </StyledTitle>
            </div>
          )}
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
