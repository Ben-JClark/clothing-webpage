export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  imageURL: string;
  sizeOptions: Size[];
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
  imageURL: string;
  size: Size;
};

export type Size = {
  id: number;
  label: string;
};
