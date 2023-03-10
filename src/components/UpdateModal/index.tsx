/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { StyledModal } from './style';
import { UserContext } from '../../providers/UserContext/UserContext';

export const UpdateModal = () => {
  console.log('teste');

  const { handleModalEdit, isModalEditOpen } = useContext(UserContext);

  return (
    <>
      {isModalEditOpen && (
        <StyledModal>
          <section className='content'>
            <header>
              <h1>Olá nome do cliente</h1>
              <span onClick={() => handleModalEdit()}>X</span>
            </header>
            <div className='address'>
              <h3>endereço de entrega:</h3>
              <p>Rua fulano de tal</p>
            </div>
            <form>
              <label htmlFor='address'>
                Precisa modificar seu endereço de entrega?
              </label>
              <input
                id='address'
                name='address'
                type='text'
                placeholder='Endereço'
              />
              <button type='submit'>Atualizar</button>
            </form>
          </section>
        </StyledModal>
      )}
    </>
  );
};
