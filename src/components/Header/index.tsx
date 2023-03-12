import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import { UserContext } from '../../providers/UserContext/UserContext';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/ProductContext/ProductContext';

const Header = () => {
  const { setShowModal } = useContext(CartContext);
  console.log('oi');
  const { handleModalEdit } = useContext(UserContext);
  console.log(handleModalEdit);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <span className='logo'>Borscht House</span>

          <div className='IconeAndLogo'>
            <img
              className='icone'
              src='src/assets/icone.jpeg'
              alt='Icone para alterar o endereço'
              onClick={() => {
                console.log(teste);
              }}
            />
            <img src='./src/assets/nome.jpeg' alt='Logo' />
          </div>
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {
                  setShowModal(true);
                  console.log('Criar lógica');
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button
                type='button'
                onClick={() => {
                  console.log('user logout');
                }}
              >
                teste
              </button>
              <button type='button'>
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
