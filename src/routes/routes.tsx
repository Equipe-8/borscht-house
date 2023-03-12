import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ShopPage from '../pages/ShopPage';

const ProtectedRoutes = () => {
  const token = localStorage.getItem('userToken');

  return token ? <Outlet /> : <Navigate to='/' />;
};

const Router = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/' element={<ProtectedRoutes />}>
      <Route path='/shop' element={<ShopPage />} />
    </Route>
  </Routes>
);

export default Router;
