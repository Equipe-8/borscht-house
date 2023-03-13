import { ReactNode } from 'react';

export interface IDefaultProviderProps {
  children: ReactNode;
}

export interface ICart extends IProducts {
  count: number;
}

export interface ICartContext {
  products: IProducts[];
  carts: ICart[];
  search: string;
  searchList: IProducts[];
  showModal: boolean;
  totalPrice: number;
  emptyCart: any;
  country: ICountry[] | undefined;
  showModalInfo: boolean;
  selectInfo: IProducts | undefined;
  loading: boolean;
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  removeProductFromCart: (currentId: number) => void;
  toAdd: (product: ICart) => void;
  searchCart: (event: React.ChangeEvent | any) => void;
  increaseProductQuantity: (product: ICart) => void;
  decreaseProductQuantity: (product: ICart) => void;
  setCountry: (value: React.SetStateAction<ICountry[] | undefined>) => void;
  allCountries: () => Promise<void>;
  setShowModalInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectInfo: React.Dispatch<React.SetStateAction<IProducts | undefined>>;
}

export interface IProducts {
  id: number;
  name: string;
  img: string;
  country: string;
  price: number;
  description: {
    detail: string;
    ingredient: string;
  };
}

export interface IProductsProps {
  products: IProducts;
}

export interface ICountry {
  countryName: string;
  countryId: number;
  countryFlag: string;
  about: {
    fact1: string;
    fact2: string;
    fact3: string;
  };
}
