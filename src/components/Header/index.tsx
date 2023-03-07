import { MdShoppingCart, MdLogout } from 'react-icons/md';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';

import { StyledContainer } from '../../styles/grid';

const Header = () => (
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
                console.log('Criar lógica');
              }}
            >
              <MdShoppingCart size={28} />
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

export default Header;
