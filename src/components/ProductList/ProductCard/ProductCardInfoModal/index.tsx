import { MdClose } from 'react-icons/md';
import { useContext, useEffect } from 'react';
import {
  StyledCloseButton,
  StyledContainer,
  StyledModal,
  StyledSpanCuriosity,
  StyledSpanDish,
} from './styled';
import { CartContext } from '../../../../providers/ProductContext/ProductContext';

const InfoModal = () => {
  const {
    setShowModalInfo,
    country,
    selectInfo,
    setSelectInfo,
    allCountries,
    loading,
  } = useContext(CartContext);

  const countryInfo = country?.find(
    (info) => info.countryName === selectInfo?.country
  );

  const close = () => {
    setShowModalInfo(false);
    setSelectInfo(undefined);
  };

  useEffect(() => {
    allCountries();
  }, []);

  return (
    <dialog>
      <StyledModal>
        <section>
          <header>
            <h2>{selectInfo?.name}</h2>
            <img
              src={countryInfo?.countryFlag}
              alt={countryInfo?.countryName}
            />
            <StyledCloseButton
              type='button'
              aria-label='Fechar'
              onClick={() => {
                close();
              }}
            >
              <MdClose size={21} />
            </StyledCloseButton>
          </header>
          {loading ? (
            <div className='loading__container'>
              <div className='loading'><span>.</span></div>
            </div>
          ) : (
            <StyledContainer>
              <StyledSpanDish>
                <p>
                  <strong>Detalhes: </strong>
                  {selectInfo?.description.detail}
                </p>
                <p>
                  <strong>Igredientes: </strong>
                  {selectInfo?.description.ingredient}
                </p>
              </StyledSpanDish>
              <StyledSpanCuriosity>
                <p>
                  <strong>Curiosidades</strong>
                </p>
                <p>
                  <strong>1:</strong> {countryInfo?.about.fact_1}
                </p>
                <p>
                  <strong>2:</strong> {countryInfo?.about.fact_2}
                </p>
                <p>
                  <strong>3:</strong> {countryInfo?.about.fact_3}
                </p>
              </StyledSpanCuriosity>
            </StyledContainer>
          )}
        </section>
      </StyledModal>
    </dialog>
  );
};

export default InfoModal;
