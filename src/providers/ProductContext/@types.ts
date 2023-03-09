import { ReactNode } from 'react';

export interface IDefaultProviderProps {
  children: ReactNode;
}

export interface ICartContext {
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  carts: IProducts[];
  setCarts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchCart: (event: React.ChangeEvent | any) => void;
  searchList: IProducts[];
  toAdd: (product: IProducts) => void;
}

export interface IProducts {
  id: number;
  name: string;
  img: string;
  country: string;
  price: number;
}

export interface IProductsProps {
  products: IProducts;
}
