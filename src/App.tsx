import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from './providers/ProductContext/ProductContext';
import { GlobalStyles } from './styles/global';
import Router from './routes/routes';

function App() {
  return (
    <div>
      <CartContextProvider>
        <GlobalStyles />
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <Router />
      </CartContextProvider>
    </div>
  );
}

export default App;
