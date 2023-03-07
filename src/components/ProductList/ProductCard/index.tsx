import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const ProductCard = () =>
{
  const { toAdd, searchList } = useContext(CartContext);
  
  return (
    <>
      {searchList.map((item) =>
      {
        const { id, name, country, img, price } = item;
      
        return (
          <StyledProductCard key={id}>
            <div className='imageBox'>
              <img src={img} alt={name} />
            </div>
            <div className='content'>
              <StyledTitle tag='h3' $fontSize='three'>
                {name}
              </StyledTitle>
              <StyledParagraph className='category'>{country}
              <StyledButton $buttonSize='medium' $buttonStyle='gray' >Saiba +</StyledButton>
              </StyledParagraph>
              <StyledParagraph className='price'>R$ <span>{price.toFixed(2)}</span></StyledParagraph>
              <StyledButton $buttonSize='medium' $buttonStyle='green' className='saibaMais' onClick={() => toAdd(item)}>
                Adicionar
              </StyledButton>
            </div>
          </StyledProductCard>
        )
      })}
    </>
  )
};

export default ProductCard;
