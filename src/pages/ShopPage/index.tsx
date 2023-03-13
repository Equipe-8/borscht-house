import { useContext } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { UpdateModal } from '../../components/UpdateModal';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/ProductContext/ProductContext';
import InfoModal from '../../components/ProductList/ProductCard/ProductCardInfoModal';
import { UserContext } from '../../providers/UserContext/UserContext';

const ShopPage = () => {
  const { showModal, showModalInfo } = useContext(CartContext);
  const { isModalEditOpen } = useContext(UserContext);

  return (
    <StyledShopPage>
      {showModal && <CartModal />}
      {showModalInfo && <InfoModal />}
      <Header />
      <main>
        {isModalEditOpen && <UpdateModal />}
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
