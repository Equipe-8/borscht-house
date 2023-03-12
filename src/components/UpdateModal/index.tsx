/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FormEvent, useContext, useState } from 'react';
import { StyledModal } from './style';
import { UserContext } from '../../providers/UserContext/UserContext';
// import { IUser } from '../../providers/UserContext/@types';

export const UpdateModal = () => {
  const { handleModalEdit, isModalEditOpen, user, editUserAddress } =
    useContext(UserContext);
  const [address, setAddress] = useState({
    address: '',
  });

  const handleAddressChange = (e: any) => {
    const { value } = e.target;
    if (value !== undefined) {
      setAddress(value);
    }
  };
  const token = localStorage.getItem('@TOKEN');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newAddress = {
      address: event.currentTarget.address.value.toString(),
    };
    if (typeof newAddress.address === 'string') {
      editUserAddress(user.id, newAddress, token);
    }
  };
  return (
    <>
      {isModalEditOpen && (
        <StyledModal>
          <section className='content'>
            <header>
              <h1>Olá {user.name}</h1>
              <span onClick={() => handleModalEdit()}>X</span>
            </header>
            <div className='address'>
              <h3>endereço de entrega:</h3>
              <p>{user.address}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor='address'>
                Precisa modificar seu endereço de entrega?
              </label>
              <input
                id='address'
                name='address'
                type='text'
                placeholder='Endereço'
                value={address.address}
                onChange={handleAddressChange}
              />
              <button type='submit'>Atualizar</button>
            </form>
          </section>
        </StyledModal>
      )}
    </>
  );
};
