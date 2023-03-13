import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import { UserContext } from '../../providers/UserContext/UserContext';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/ProductContext/ProductContext';
import icone from '../../assets/icone.png';
import nome from '../../assets/nome.png';

const Header = () => {
  const { setShowModal } = useContext(CartContext);

  const { handleModalEdit, logOut } = useContext(UserContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <div className='IconeAndLogo'>
            <button
              className='icone__btn'
              type='button'
              onClick={() => {
                handleModalEdit();
              }}
            >
              <img
                className='icone'
                src={icone}
                alt='Icone para alterar o endereço'
              />
            </button>

            <img className='logo' src={nome} alt='Logo' />
          </div>
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button
                type='button'
                onClick={() => {
                  logOut();
                }}
              >
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
