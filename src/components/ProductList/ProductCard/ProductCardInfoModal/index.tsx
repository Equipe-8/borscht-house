import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import { CartContext } from '../../../../providers/ProductContext/ProductContext';


const InfoModal = ({ id, name, description } ) => {
    const { setShowModal, country } = useContext(CartContext);
    
  return (
    <dialog>
    <header>
  <p>{name}</p>
  <button
    type='button'
    aria-label='Fechar'
    onClick={() => {
        setShowModal(false);
      }}
      >
    <MdClose size={21} />
  </button>
</header>


      {country?.map((info) => info.countryId === id) ? (<>
      console.log(info)
          <p>{description.detail}</p>
          <p>{description.ingredient}</p>
          <div>
              <p>{info.about.1}</p>
              <p>{info.about.2}</p>
              <p>{info.about.3}</p>
          </div>
</>
      )
           : <p></p>}

<div>Curiosidades do país</div>
</dialog>
  )
};

export default InfoModal;
