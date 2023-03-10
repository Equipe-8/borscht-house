/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import { MdShoppingCart, MdLogout } from 'react-icons/md';

import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import { UserContext } from '../../providers/UserContext/UserContext';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/ProductContext/ProductContext';
import { UpdateModal } from '../UpdateModal';

const Header = () => {
  const { setShowModal } = useContext(CartContext);

  const { handleModalEdit, logOut } = useContext(UserContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <div className='IconeAndLogo'>
            <img
              className='icone'
              src='src/assets/icone.jpeg'
              alt='Icone para alterar o endereço'
              onClick={() => handleModalEdit()}
            />

            <img className='logo' src='./src/assets/nome.jpeg' alt='Logo' />
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
