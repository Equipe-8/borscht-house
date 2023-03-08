import { CartContextProvider } from './providers/ProductContext';
import { GlobalStyles } from './styles/global';
import Router from './routes/routes';

function App() {
  return (
    <div>
      <CartContextProvider>
        <GlobalStyles />
        <Router />
      </CartContextProvider>
    </div>
  );
}

export default App;