import { ToastContainer } from 'react-toastify';

import { GlobalStyles } from './styles/global';
import Router from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <GlobalStyles />
      <ToastContainer
        position='bottom-right'
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
    </div>
  );
}

export default App;
