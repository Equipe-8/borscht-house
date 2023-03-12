import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ICart,
  ICartContext,
  ICountry,
  IDefaultProviderProps,
  IProducts,
} from './@types';
import { api } from '../../services/api';

export const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({ children }: IDefaultProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<IProducts[]>([]);
  const [carts, setCarts] = useState([] as ICart[]);
  const [country, setCountry] = useState<ICountry[]>();
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

    if (data) {
      const validation = carts.map((element) =>
        element.id === product.id
          ? { ...element, count: element.count + 1 }
          : element
      );
      setCarts(validation);
      toast.success('Produto adicionado com sucesso!');
    } else {
      setCarts([...carts, product]);
      toast.success('Produto adicionado com sucesso!');
    }
  };

  const increaseProductQuantity = (product: ICart) => {
    const validation = carts.map((element) =>
      element.id === product.id
        ? { ...element, count: element.count + 1 }
        : element
    );
    setCarts(validation);
  };

  const decreaseProductQuantity = (product: ICart) => {
    const validation = carts.map((element) =>
      element.id === product.id
        ? { ...element, count: element.count - 1 }
        : element
    );
    setCarts(validation);

    if (product.count === 1) {
      removeProductFromCart(product.id);
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

  const allCountries = async () => {
    try {
      const userToken = localStorage.getItem('@TOKEN');
      const response = await api.get('/coyntries', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  allCountries();

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
        allCountries,
        country,
        setCountry,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
