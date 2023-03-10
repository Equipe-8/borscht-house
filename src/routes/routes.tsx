import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ShopPage from '../pages/ShopPage';
import { CartContextProvider } from '../providers/ProductContext/ProductContext';

const ProtectedRoutes = () => {
  const token = localStorage.getItem('@TOKEN');
  return token ? <Outlet /> : <Navigate to='/' />;
};

const Router = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/' element={<ProtectedRoutes />}>
      <Route
        path='/shop'
        element={
          <CartContextProvider>
            <ShopPage />
          </CartContextProvider>
        }
      />
    </Route>
  </Routes>
);

export default Router;
