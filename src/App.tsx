import { ToastContainer } from 'react-toastify';
import { CartContextProvider } from './providers/ProductContext';
import { GlobalStyles } from './styles/global';
import Router from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <CartContextProvider>
        <GlobalStyles />
        <Router />
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
      </CartContextProvider>
    </div>
  );
}

export default App;
