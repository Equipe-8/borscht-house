import { MdShoppingCart, MdLogout } from 'react-icons/md';

import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import { UserContext } from '../../providers/UserContext/UserContext';
import { StyledContainer } from '../../styles/grid';
// vindo do develop
import { CartContext } from '../../providers/ProductContext/ProductContext';

const Header = () => {
  console.log('oi');
  const { handleModalEdit } = useContext(UserContext);
  console.log(handleModalEdit);

  function setShowModal(arg0: boolean) {
    throw new Error('Function not implemented.');
  }
};

export default Header;
