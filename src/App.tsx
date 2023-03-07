import { CartContextProvider } from './providers/CartContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';

function App()
{
  return (
    <div>
      <CartContextProvider>
      <GlobalStyles />
      <Router />
    </CartContextProvider>
    </div>
  )
};

export default App;