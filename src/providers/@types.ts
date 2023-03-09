import { ReactNode } from 'react';

export interface IDefaultProviderProps {
  children: ReactNode;
}

export interface ICart extends IProducts {
  count: number;
}

export interface ICartContext {
  products: IProducts[];
  carts: IProducts[];
  search: string;
  searchList: IProducts[];
  showModal: boolean;
  totalPrice: number;
  emptyCart: any;
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  removeProductFromCart: (currentId: number) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  toAdd: (product: ICart) => void;
  searchCart: (event: React.ChangeEvent | any) => void;
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
