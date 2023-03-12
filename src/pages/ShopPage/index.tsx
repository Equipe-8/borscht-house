import { useContext } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { UpdateModal } from '../../components/UpdateModal';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/ProductContext/ProductContext';

const ShopPage = () => {
  const { showModal } = useContext(CartContext);

  return (
    <StyledShopPage>
      {showModal ? <CartModal /> : null}
      <Header />
      <main>
        <UpdateModal />
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
