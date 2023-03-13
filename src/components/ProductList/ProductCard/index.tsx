import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/ProductContext/ProductContext';
import { IProducts } from '../../../providers/ProductContext/@types';

const ProductCard = () => {
  const { toAdd, searchList, setShowModalInfo, setSelectInfo } =
    useContext(CartContext);

  const open = (product: IProducts) => {
    setSelectInfo(product);
    setShowModalInfo(true);
  };

  return (
    <>
      {searchList.map((item) => {
        const { id, name, country, img, price } = item;
        const itemAdd = { ...item, count: 1 };

        return (
          <StyledProductCard key={id}>
            <div className='imageBox'>
              <img src={img} alt={name} />
            </div>
            <div className='content'>
              <StyledTitle tag='h3' $fontSize='three'>
                {name}
              </StyledTitle>
              <StyledParagraph className='category'>
                {country}
                <StyledButton
                  $buttonSize='medium'
                  $buttonStyle='gray'
                  onClick={() => open(item)}
                >
                  Saiba +
                </StyledButton>
              </StyledParagraph>
              <div className='buttonAndPrice'>
                <div className='price'>
                  R$ <span>{price.toFixed(2)}</span>
                </div>
                <StyledButton
                  $buttonSize='medium'
                  $buttonStyle='green'
                  className='saibaMais'
                  onClick={() => toAdd(itemAdd)}
                >
                  Adicionar
                </StyledButton>
              </div>
            </div>
          </StyledProductCard>
        );
      })}
    </>
  );
};

export default ProductCard;
