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
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  removeProductFromCart: (currentId: number) => void;
  toAdd: (product: ICart) => void;
  searchCart: (event: React.ChangeEvent | any) => void;
  increaseProductQuantity: (product: ICart) => void;
  decreaseProductQuantity: (product: ICart) => void;
  country: ICountry[] | undefined;
  setCountry: (value: React.SetStateAction<ICountry[] | undefined>) => void;
  allCountries: () => Promise<void>;
}

export interface IProducts {
  id: number;
  name: string;
  img: string;
  country: string;
  price: number;
  description: {
    detail: string;
    igredient: string;
  };
}

export interface IProductsProps {
  products: IProducts;
}

export interface ICountry {
  countryName: string;
  countryId: number;
  about: {
    1: string;
    2: string;
    3: string;
  };
}
