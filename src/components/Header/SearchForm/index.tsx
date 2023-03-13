import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { CartContext } from '../../../providers/ProductContext/ProductContext';

const SearchForm = () => {
  const { searchCart } = useContext(CartContext);

  return (
    <StyledSearchForm>
      <input type='text' placeholder='Digitar pesquisa' onChange={searchCart} />
      <MdSearch className='search' size='50px' />
    </StyledSearchForm>
  );
};

export default SearchForm;
