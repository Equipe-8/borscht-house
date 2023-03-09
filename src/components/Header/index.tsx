import { MdShoppingCart, MdLogout } from 'react-icons/md';

import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';

import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/ProductContext';

const Header = () => {
  const { setShowModal } = useContext(CartContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <span className='logo'>Borscht House</span>
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
                  console.log('user logout');
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
