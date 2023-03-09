import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ICartContext, IDefaultProviderProps, IProducts } from './@types';
import { api } from '../../services/api';

export const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({ children }: IDefaultProviderProps) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<IProducts[]>([]);
  const [carts, setCarts] = useState<IProducts[]>([]);
  const token = localStorage.getItem('@TOKEN');
  const navigate = useNavigate();

  const searchCart = (event: React.ChangeEvent | any) => {
    setSearch(event.target.value);
  };

  const searchList = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.country.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const local: () => void = async () => {
      try {
        const response = await api.get('products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        window.localStorage.clear();
        navigate('/');
      }
    };
    local();
  }, [token]);

  const toAdd = (product: IProducts) => {
    const data = carts.find((cart) => cart.id === product.id);
    const validation = products.some((element) => element.id === data?.id);

    if (!validation) {
      toast.success('Produto adicionado com sucesso!');
      setCarts([...carts, product]);
    } else {
      toast.error('Produto já existente no carrinho.');
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        carts,
        setCarts,
        search,
        setSearch,
        searchList,
        searchCart,
        toAdd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
