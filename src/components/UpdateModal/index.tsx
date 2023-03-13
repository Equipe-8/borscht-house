import { FormEvent, useContext, useState } from 'react';
import { StyledModal } from './style';
import { UserContext } from '../../providers/UserContext/UserContext';
import { StyledButton } from '../../styles/button';

export const UpdateModal = () => {
  const { handleModalEdit, user, editUserAddress } =
    useContext(UserContext);
  const [address, setAddress] = useState('');

  const handleAddressChange = (e: any) => {
    const { value } = e.target;
    if (value !== undefined) {
      setAddress(value);
    }
  };
  const token = localStorage.getItem('@TOKEN');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (address.length > 0) {
      editUserAddress(user.id, address, token);
    }
  };
  return (
      <StyledModal>
        <section className='content'>
          <header>
            <h1>Olá, {user.name}</h1>
            <button type='button' onClick={() => handleModalEdit()}>X</button>
          </header>
          <div className='address'>
            <h3>Endereço de entrega:</h3>
            <p>{user.address}</p>
          </div>
          <form
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              setAddress(event.currentTarget.address.value.toString());
              handleSubmit(event);
            }}
          >
            <label htmlFor='address'>
              Precisa modificar seu endereço de entrega?
            </label>
            <input
              id='address'
              name='address'
              type='text'
              placeholder='Endereço'
              value={address}
              onChange={handleAddressChange}
            />
            <StyledButton $buttonSize='medium' $buttonStyle='green'>
              Atualizar
            </StyledButton>
          </form>
        </section>
      </StyledModal>
  )
};
