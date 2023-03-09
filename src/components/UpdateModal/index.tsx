export const UpdateModal = () => {
  console.log('teste');

  return (
    <main>
      <header>
        <h1>Olá nome do cliente</h1>
      </header>
      <div>
        <p>rua: fulando de tal</p>
      </div>
      <form>
        <label htmlFor='address'>
          Precisa modificar seu endereço de entrega?
        </label>
        <input id='address' name='address' type='text' placeholder='Endereço' />
        <button type='submit'>Atualizar</button>
      </form>
    </main>
  );
};
