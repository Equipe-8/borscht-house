import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ICart,
  ICartContext,
  IDefaultProviderProps,
  IProducts,
} from './@types';
import { api } from '../services/api';

export const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({ children }: IDefaultProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<IProducts[]>([]);
  const [carts, setCarts] = useState([] as ICart[]);
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

  const toAdd = (product: ICart) => {
    const data = carts.find((cart) => cart.id === product.id);
    const validation = products.some((element) => element.id === data?.id);

    if (!validation) {
      toast.success('Produto adicionado com sucesso!');
      setCarts([...carts, product]);
    } else {
      toast.error('Produto já existente no carrinho.');
    }
  };

  const totalPrice = carts.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.count,
    0
  );

  const emptyCart = () => {
    setCarts([]);
  };

  const removeProductFromCart = (currentId: number) => {
    const newCart = carts.filter((product) => product.id !== currentId);

    setCarts(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        setShowModal,
        setProducts,
        setCarts,
        setSearch,
        searchCart,
        toAdd,
        emptyCart,
        removeProductFromCart,
        totalPrice,
        showModal,
        products,
        carts,
        search,
        searchList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
